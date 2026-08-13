/**
 * Contrato base de error HTTP compartido entre API y clientes.
 * No expone stack traces ni información interna.
 */

export interface HttpErrorBody {
  statusCode: number;
  code: string;
  message: string;
  details?: unknown;
}