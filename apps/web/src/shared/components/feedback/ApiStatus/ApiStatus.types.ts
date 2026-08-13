import type { HealthStatus } from "@/shared/api";

export type ApiConnectionState = "loading" | "connected" | "error";

export interface ApiStatusProps {
  state: ApiConnectionState;
  health?: HealthStatus | null;
  error?: string | null;
  onRetry?: () => void;
}