export type DiscoveryCardSize = "large" | "tall" | "wide" | "small";

export type DiscoveryCardTag = "POPULAR" | "TENDENCIA" | "NUEVO";

export interface DiscoveryCategoryItem {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  ctaHref: string;
  size: DiscoveryCardSize;
  tag?: DiscoveryCardTag;
}

export interface DiscoveryCtaItem {
  id: string;
  title: string;
  ctaText: string;
  ctaHref: string;
}

export interface DiscoveryData {
  title: string;
  categories: DiscoveryCategoryItem[];
  cta: DiscoveryCtaItem;
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const discoveryData: DiscoveryData = {
  title: "Explora por categorías",
  categories: [
    {
      id: "electronica",
      image: u("photo-1498049794561-7780e7231661"),
      imageAlt: "Electrónica y gadgets",
      title: "Electrónica",
      ctaHref: "/categorias/electronica",
      size: "large",
      tag: "POPULAR",
    },
    {
      id: "moda",
      image: u("photo-1483985988355-763728e1935b"),
      imageAlt: "Moda y accesorios",
      title: "Moda",
      ctaHref: "/categorias/moda",
      size: "tall",
      tag: "TENDENCIA",
    },
    {
      id: "bebes-ninos",
      image: u("photo-1515488042971-92dce945a7c6"),
      imageAlt: "Bebés y niños",
      title: "Bebés y niños",
      ctaHref: "/categorias/bebes-ninos",
      size: "small",
    },
    {
      id: "deportes-aire-libre",
      image: u("photo-1517649763962-0c623066013b"),
      imageAlt: "Deportes y aire libre",
      title: "Deportes y aire libre",
      ctaHref: "/categorias/deportes-aire-libre",
      size: "small",
    },
    {
      id: "hogar-cocina",
      image: u("photo-1556911220-bff31c812dba"),
      imageAlt: "Hogar y cocina",
      title: "Hogar y cocina",
      ctaHref: "/categorias/hogar-cocina",
      size: "wide",
    },
    {
      id: "belleza",
      image: u("photo-1522335789203-aabd1fc54bc9"),
      imageAlt: "Belleza y cuidado personal",
      title: "Belleza",
      ctaHref: "/categorias/belleza",
      size: "small",
      tag: "NUEVO",
    },
    {
      id: "ferreteria",
      image: u("photo-1581094794329-c8112a410239"),
      imageAlt: "Ferretería y herramientas",
      title: "Ferretería",
      ctaHref: "/categorias/ferreteria",
      size: "small",
    },
    {
      id: "automotriz",
      image: u("photo-1503376780353-7e6692767b70"),
      imageAlt: "Productos automotrices",
      title: "Automotriz",
      ctaHref: "/categorias/automotriz",
      size: "wide",
    },
  ],
  cta: {
    id: "explore-all",
    title: "Explorar todas las categorías",
    ctaText: "Ver catálogo completo",
    ctaHref: "/categorias",
  },
};
