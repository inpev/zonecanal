/**
 * Indicador de estado de la API para la home.
 * Client Component: usa el hook useHealth (Hook -> Service -> ApiClient).
 */

"use client";

import { useHealth } from "@/shared/api";
import { ApiStatus } from "./ApiStatus";

export function ApiHealthIndicator() {
  const { status, data, error, refetch } = useHealth();

  return (
    <ApiStatus state={status} health={data} error={error} onRetry={refetch} />
  );
}