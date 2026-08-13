/**
 * Cliente HTTP centralizado de la app web.
 * - Obtiene la URL base desde NEXT_PUBLIC_API_URL.
 * - Requests tipadas vía get/post/put/patch/delete.
 * - Timeout configurable con abort.
 * - Errores normalizados a ApiError.
 * - Independiente de componentes: puede usarse en server o client.
 */

import { getEnvironment } from "@/config/environment.config";
import { ApiError } from "../errors/api-error";
import type { ApiRequestOptions, HttpMethod } from "../types/api.types";

const DEFAULT_TIMEOUT_MS = 10_000;
const DEFAULT_HEADERS: Record<string, string> = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

function normalizeBaseUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

export class ApiClient {
  private readonly baseUrl: string;
  private readonly defaultTimeoutMs: number;

  constructor(baseUrl?: string, defaultTimeoutMs: number = DEFAULT_TIMEOUT_MS) {
    this.baseUrl = baseUrl ? normalizeBaseUrl(baseUrl) : "";
    this.defaultTimeoutMs = defaultTimeoutMs;
  }

  async request<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
    if (!this.baseUrl) {
      throw new ApiError(
        "API base URL no configurada (NEXT_PUBLIC_API_URL)",
        0,
        { code: "API_NOT_CONFIGURED" },
      );
    }

    const method: HttpMethod = options.method ?? "GET";
    const timeoutMs = options.timeoutMs ?? this.defaultTimeoutMs;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method,
        headers: { ...DEFAULT_HEADERS, ...options.headers },
        body:
          options.body === undefined ? undefined : JSON.stringify(options.body),
        signal: options.signal ?? controller.signal,
      });

      const text = await response.text();
      const data = text ? parseJson(text) : undefined;

      if (!response.ok) {
        throw ApiError.fromResponse(response, data);
      }

      return data as T;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }

      if (error instanceof DOMException && error.name === "AbortError") {
        throw new ApiError(`Request timeout after ${timeoutMs}ms`, 0, {
          code: "TIMEOUT",
        });
      }

      throw new ApiError("Network error", 0, { code: "NETWORK" });
    } finally {
      clearTimeout(timeoutId);
    }
  }

  get<T>(
    path: string,
    options?: Omit<ApiRequestOptions, "method" | "body">,
  ): Promise<T> {
    return this.request<T>(path, { ...options, method: "GET" });
  }

  post<T>(
    path: string,
    body?: unknown,
    options?: Omit<ApiRequestOptions, "method" | "body">,
  ): Promise<T> {
    return this.request<T>(path, { ...options, method: "POST", body });
  }

  put<T>(
    path: string,
    body?: unknown,
    options?: Omit<ApiRequestOptions, "method" | "body">,
  ): Promise<T> {
    return this.request<T>(path, { ...options, method: "PUT", body });
  }

  patch<T>(
    path: string,
    body?: unknown,
    options?: Omit<ApiRequestOptions, "method" | "body">,
  ): Promise<T> {
    return this.request<T>(path, { ...options, method: "PATCH", body });
  }

  delete<T>(
    path: string,
    options?: Omit<ApiRequestOptions, "method" | "body">,
  ): Promise<T> {
    return this.request<T>(path, { ...options, method: "DELETE" });
  }
}

function parseJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    throw new ApiError("Invalid JSON response", 0, {
      code: "INVALID_JSON",
    });
  }
}

export function createApiClient(): ApiClient {
  const baseUrl = getEnvironment().apiUrl;
  return new ApiClient(baseUrl);
}

export const apiClient = createApiClient();