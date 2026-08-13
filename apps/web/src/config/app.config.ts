/**
 * Configuración global de la aplicación web.
 * Valores no sensibles, centralizados aquí.
 */

export interface AppConfig {
  name: string;
  description: string;
  version: string;
}

export const APP: AppConfig = {
  name: "ZoneCanal",
  description: "Plataforma global de comercio digital.",
  version: process.env.NEXT_PUBLIC_APP_VERSION ?? "0.0.0",
};