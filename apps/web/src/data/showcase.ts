export interface ShowcaseMainCampaign {
  id: string;
  slot: "HOME_HERO_MAIN";
  image: string;
  mobileImage?: string;
  imageAlt: string;
  badge?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export interface ShowcaseSideCampaign {
  id: string;
  slot: "HOME_HERO_B2B" | "HOME_HERO_PROMO";
  image: string;
  mobileImage?: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
  variant: "wholesale" | "offers";
}

export interface ShowcaseData {
  mainCampaigns: ShowcaseMainCampaign[];
  HOME_HERO_B2B: ShowcaseSideCampaign;
  HOME_HERO_PROMO: ShowcaseSideCampaign;
}

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;

export const showcaseData: ShowcaseData = {
  mainCampaigns: [
    {
      id: "hero-tech",
      slot: "HOME_HERO_MAIN",
      image: unsplash("photo-1518770660439-4636190af475"),
      imageAlt:
        "Dispositivos electrónicos y tecnología de última generación sobre una superficie",
      badge: "NUEVO",
      title: "Tecnología Global de Última Generación",
      description:
        "Descubre los dispositivos que están transformando el comercio internacional.",
      ctaText: "Comprar ahora",
      ctaHref: "/marketplace",
      secondaryCtaText: "Ver catálogo",
      secondaryCtaHref: "/marketplace/catalogo",
    },
    {
      id: "hero-trade",
      slot: "HOME_HERO_MAIN",
      image: unsplash("photo-1494412519320-aa613dfb7738"),
      imageAlt:
        "Contenedores de carga en un puerto, representando el comercio internacional",
      badge: "COMERCIO",
      title: "Conecta tu negocio con nuevos mercados",
      description:
        "Llega a compradores internacionales con logística ágil y confiable.",
      ctaText: "Explorar mercados",
      ctaHref: "/marketplace/internacional",
      secondaryCtaText: "Ver catálogo",
      secondaryCtaHref: "/marketplace/catalogo",
    },
    {
      id: "hero-wholesale",
      slot: "HOME_HERO_MAIN",
      image: unsplash("photo-1553413077-190dd305871c"),
      imageAlt:
        "Almacén de distribución con cajas y productos apilados",
      badge: "MAYORISTAS",
      title: "Grandes oportunidades para grandes compras",
      description:
        "Accede a volúmenes mayoristas con precios exclusivos para tu negocio.",
      ctaText: "Comprar al por mayor",
      ctaHref: "/marketplace/mayor",
      secondaryCtaText: "Ver catálogo",
      secondaryCtaHref: "/marketplace/catalogo",
    },
  ],
  HOME_HERO_B2B: {
    id: "hero-b2b",
    slot: "HOME_HERO_B2B",
    image: unsplash("photo-1553413077-190dd305871c"),
    imageAlt: "Almacén de distribución para compras al por mayor",
    title: "Compra al por mayor",
    subtitle: "Soluciones B2B globales",
    ctaText: "Explorar mayoristas",
    ctaHref: "/marketplace/mayor",
    variant: "wholesale",
  },
  HOME_HERO_PROMO: {
    id: "hero-promo",
    slot: "HOME_HERO_PROMO",
    image: unsplash("photo-1472851294608-062f824d29cc"),
    imageAlt: "Productos en oferta con precios destacados",
    title: "Ofertas destacadas",
    subtitle: "Precios exclusivos para ti",
    ctaText: "Ver ofertas",
    ctaHref: "/ofertas",
    variant: "offers",
  },
};
