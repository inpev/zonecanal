/**
 * Registro centralizado de feature flags de la app web.
 * Estructura tipada para habilitar funcionalidades de forma progresiva.
 * El sistema remoto se integrará más adelante.
 */

export type FeatureFlagKey =
  | "checkout"
  | "messaging"
  | "map"
  | "aiAssistant";

type FeatureFlags = Record<FeatureFlagKey, boolean>;

export const FEATURE_FLAGS: FeatureFlags = {
  checkout: false,
  messaging: false,
  map: false,
  aiAssistant: false,
};

export function isFeatureEnabled(key: FeatureFlagKey): boolean {
  return FEATURE_FLAGS[key];
}