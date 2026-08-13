/**
 * Barrel de configuración de la app web.
 */

export { APP, type AppConfig } from "./app.config";
export { ROUTES, type AppRoutes } from "./routes.config";
export { MAIN_NAVIGATION, type NavigationItem } from "./navigation.config";
export {
  getEnvironment,
  type AppEnvironment,
  type PublicEnvironment,
} from "./environment.config";
export {
  FEATURE_FLAGS,
  isFeatureEnabled,
  type FeatureFlagKey,
} from "./feature-flags.config";