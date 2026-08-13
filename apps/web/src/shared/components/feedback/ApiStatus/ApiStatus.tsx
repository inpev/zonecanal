/**
 * Estado técnico mínimo de conexión con la API.
 * Muestra: loading | connected | error. Sin lógica de negocio.
 */

import styles from "./ApiStatus.module.css";
import type { ApiStatusProps } from "./ApiStatus.types";

const STATE_LABEL: Record<ApiStatusProps["state"], string> = {
  loading: "Conectando con la API…",
  connected: "API conectada",
  error: "API no disponible",
};

const DOT_STATE: Record<ApiStatusProps["state"], string> = {
  loading: styles.dotLoading,
  connected: styles.dotConnected,
  error: styles.dotError,
};

export function ApiStatus({
  state,
  health,
  error,
  onRetry,
}: ApiStatusProps) {
  return (
    <section
      className={styles.root}
      data-state={state}
      aria-live="polite"
      aria-busy={state === "loading"}
    >
      <span className={`${styles.dot} ${DOT_STATE[state]}`} aria-hidden="true" />
      <span className={styles.label}>{STATE_LABEL[state]}</span>
      {state === "connected" && health ? (
        <span className={styles.detail}>
          {health.service} · {health.status}
        </span>
      ) : null}
      {state === "error" && error ? (
        <span className={styles.detail}>{error}</span>
      ) : null}
      {state === "error" && onRetry ? (
        <button type="button" className={styles.retry} onClick={onRetry}>
          Reintentar
        </button>
      ) : null}
    </section>
  );
}