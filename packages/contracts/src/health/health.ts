/**
 * Contrato compartido del endpoint de salud (GET /health).
 * Usado por Web y API para tipar la misma respuesta.
 */

export interface HealthStatus {
  status: string;
  service: string;
}