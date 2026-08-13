/**
 * Rutas de la aplicación (Next.js App Router).
 * Registro central de los paths de navegación entre módulos.
 * Cada página se implementará progresivamente; aquí se declara su URL.
 */

export const ROUTES = {
  home: "/",
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
  customer: {
    dashboard: "/customer",
  },
  company: {
    dashboard: "/company",
  },
  admin: {
    dashboard: "/admin",
  },
} as const;

export type AppRoutes = typeof ROUTES;