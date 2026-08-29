/**
 * Configuración estática del Header de ZoneCanal.
 *
 * Centraliza las categorías del buscador y la navegación comercial
 * para evitar strings repetidos dentro de los componentes visuales.
 */

export const SEARCH_CATEGORIES = [
  { value: "todo", label: "Todo" },
  { value: "electronica", label: "Electrónica" },
  { value: "celulares", label: "Celulares" },
  { value: "computadoras", label: "Computadoras" },
  { value: "hogar", label: "Hogar y cocina" },
  { value: "moda", label: "Moda" },
  { value: "belleza", label: "Belleza" },
  { value: "automotriz", label: "Automotriz" },
  { value: "ferreteria", label: "Ferretería" },
  { value: "deportes", label: "Deportes" },
  { value: "mayoristas", label: "Mayoristas" },
] as const;

export const COMMERCIAL_NAV_ITEMS = [
  {
    label: "Ofertas",
    href: "/ofertas",
    variant: "accent",
  },
  {
    label: "Compra al detal",
    href: "/detal",
    variant: "default",
  },
  {
    label: "Compra al por mayor",
    href: "/mayoristas",
    variant: "default",
  },
  {
    label: "Proveedores verificados",
    href: "/proveedores",
    variant: "verified",
  },
  {
    label: "Envíos desde Panamá",
    href: "/envios",
    variant: "default",
  },
  {
    label: "Mapa Zona Libre",
    href: "/mapa-zona-libre",
    variant: "default",
  },
  {
    label: "Vender en ZoneCanal",
    href: "/vender",
    variant: "seller",
  },
] as const;