/**
 * Hook reutilizable para consultar el estado de la API (GET /health).
 * Expone un estado técnico mínimo: loading | connected | error.
 */

"use client";

import { useCallback, useEffect, useState } from "react";
import { healthService } from "../services/health.service";
import type { HealthStatus } from "../types/api.types";

export type HealthConnectionStatus = "loading" | "connected" | "error";

export interface UseHealthResult {
  status: HealthConnectionStatus;
  data: HealthStatus | null;
  error: string | null;
  refetch: () => void;
}

export function useHealth(): UseHealthResult {
  const [status, setStatus] = useState<HealthConnectionStatus>("loading");
  const [data, setData] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;

    healthService
      .getHealth()
      .then((result) => {
        if (!active) return;
        setData(result);
        setStatus("connected");
      })
      .catch((err: unknown) => {
        if (!active) return;
        setError(err instanceof Error ? err.message : "Error desconocido");
        setStatus("error");
      });

    return () => {
      active = false;
    };
  }, [attempt]);

  const refetch = useCallback(() => {
    setStatus("loading");
    setAttempt((current) => current + 1);
  }, []);

  return { status, data, error, refetch };
}