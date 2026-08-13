/**
 * Estructura de navegación global.
 * Tipado preparado para menús y agrupaciones por rol/usuario.
 * Sin navegación implementada todavía.
 */

export interface NavigationItem {
  label: string;
  href: string;
}

export const MAIN_NAVIGATION: NavigationItem[] = [];