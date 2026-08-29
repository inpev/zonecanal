export type SaleMode = "retail" | "wholesale";

export interface VerifiedProvider {
  id: string;
  name: string;
  category: string;
  location: string;
  verified: boolean;
  saleModes: SaleMode[];
  image?: string;
  href: string;
}

export interface VerifiedProvidersData {
  title: string;
  subtitle: string;
  providers: VerifiedProvider[];
  cta: {
    title: string;
    ctaText: string;
    href: string;
  };
}

export const verifiedProvidersData: VerifiedProvidersData = {
  title: "Proveedores verificados",
  subtitle:
    "Compra al detal o al por mayor con empresas verificadas en ZoneCanal.",
  providers: [
    {
      id: "proveedor-global-panama",
      name: "Proveedor Global Panamá",
      category: "Electrónica",
      location: "Colón, Panamá",
      verified: true,
      saleModes: ["retail", "wholesale"],
      href: "/proveedores/proveedor-global-panama",
    },
    {
      id: "importadora-del-istmo",
      name: "Importadora del Istmo",
      category: "Hogar y cocina",
      location: "Panamá, Panamá",
      verified: true,
      saleModes: ["retail", "wholesale"],
      href: "/proveedores/importadora-del-istmo",
    },
    {
      id: "techbridge-centroamerica",
      name: "TechBridge Centroamérica",
      category: "Computadoras",
      location: "Zona Libre de Colón",
      verified: true,
      saleModes: ["wholesale"],
      href: "/proveedores/techbridge-centroamerica",
    },
    {
      id: "moda-panama-360",
      name: "Moda Panamá 360",
      category: "Moda",
      location: "Ciudad de Panamá",
      verified: true,
      saleModes: ["retail", "wholesale"],
      href: "/proveedores/moda-panama-360",
    },
    {
      id: "ferreteria-nacional",
      name: "Ferretería Nacional",
      category: "Ferretería",
      location: "David, Chiriquí",
      verified: true,
      saleModes: ["retail"],
      href: "/proveedores/ferreteria-nacional",
    },
    {
      id: "belleza-y-salud-sa",
      name: "Belleza y Salud S.A.",
      category: "Belleza",
      location: "Panamá, Panamá",
      verified: true,
      saleModes: ["retail", "wholesale"],
      href: "/proveedores/belleza-y-salud-sa",
    },
    {
      id: "autopartes-del-caribe",
      name: "AutoPartes del Caribe",
      category: "Automotriz",
      location: "Colón, Panamá",
      verified: true,
      saleModes: ["retail", "wholesale"],
      href: "/proveedores/autopartes-del-caribe",
    },
  ],
  cta: {
    title: "Ver todos los proveedores",
    ctaText: "Explorar directorio de proveedores",
    href: "/proveedores",
  },
};
