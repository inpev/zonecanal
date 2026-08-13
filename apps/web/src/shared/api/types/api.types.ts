/**
 * Tipos comunes de comunicación con la API.
 * Los contratos de transporte compartidos viven en @zonecanal/contracts.
 */

export type { HealthStatus } from "@zonecanal/contracts";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiRequestOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  timeoutMs?: number;
  signal?: AbortSignal;
}