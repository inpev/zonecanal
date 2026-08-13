/**
 * Barrel de la capa de comunicación con la API.
 */

export { ApiClient, createApiClient, apiClient } from "./client/api-client";
export { ApiError } from "./errors/api-error";
export type { ApiErrorOptions } from "./errors/api-error";
export type { HealthStatus } from "@zonecanal/contracts";
export type { ApiRequestOptions, HttpMethod } from "./types/api.types";
export { healthService } from "./services/health.service";
export { useHealth } from "./hooks/use-health";
export type { HealthConnectionStatus, UseHealthResult } from "./hooks/use-health";