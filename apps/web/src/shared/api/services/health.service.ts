/**
 * Service de salud: consulta GET /health de la API.
 */

import { apiClient } from "../client/api-client";
import type { HealthStatus } from "../types/api.types";

export const healthService = {
  getHealth(): Promise<HealthStatus> {
    return apiClient.get<HealthStatus>("/health");
  },
};