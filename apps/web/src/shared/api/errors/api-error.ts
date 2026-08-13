/**
 * Error de API normalizado.
 * Unifica errores de red, timeout y respuestas HTTP no-ok
 * en una sola clase consumible por la UI.
 * Modelo alineado con el contrato HttpErrorBody de @zonecanal/contracts.
 */

import type { HttpErrorBody } from "@zonecanal/contracts";

export interface ApiErrorOptions {
  code?: string;
  details?: unknown;
}

interface ErrorBodyPayload {
  message?: string | string[];
  statusCode?: number;
  code?: string;
}

export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly details?: unknown;

  constructor(message: string, status = 0, options: ApiErrorOptions = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = options.code ?? "API_ERROR";
    this.details = options.details;
  }

  static fromResponse(response: Response, body: unknown): ApiError {
    const payload = body as ErrorBodyPayload | undefined;
    const message = Array.isArray(payload?.message)
      ? payload.message.join(", ")
      : payload?.message ?? `Request failed with status ${response.status}`;

    return new ApiError(message, response.status, {
      code: payload?.code ?? "HTTP_ERROR",
      details: body,
    });
  }

  toBody(): HttpErrorBody {
    return {
      statusCode: this.status,
      code: this.code,
      message: this.message,
      details: this.details,
    };
  }
}