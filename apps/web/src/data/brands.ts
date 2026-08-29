export interface Brand {
  id: string;
  name: string;
  logo?: string;
  href: string;
  productCount?: number;
  category?: string;
  featured?: boolean;
}

export interface BrandsData {
  featured: Brand[];
  secondary: Brand[];
}

export const brandsData: BrandsData = {
  featured: [
    {
      id: "samsung",
      name: "Samsung",
      href: "/marcas/samsung",
      productCount: 1240,
      category: "Tecnología",
      featured: true,
    },
    {
      id: "adidas",
      name: "Adidas",
      href: "/marcas/adidas",
      productCount: 540,
      category: "Moda",
      featured: true,
    },
  ],
  secondary: [
    {
      id: "nike",
      name: "Nike",
      href: "/marcas/nike",
      productCount: 610,
      category: "Moda",
    },
    {
      id: "loreal",
      name: "L'Oréal",
      href: "/marcas/loreal",
      productCount: 360,
      category: "Belleza",
    },
    {
      id: "sony",
      name: "Sony",
      href: "/marcas/sony",
      productCount: 880,
      category: "Tecnología",
    },
    {
      id: "levis",
      name: "Levi's",
      href: "/marcas/levis",
      category: "Moda",
    },
    {
      id: "bosch",
      name: "Bosch",
      href: "/marcas/bosch",
      category: "Hogar",
    },
    {
      id: "new-balance",
      name: "New Balance",
      href: "/marcas/new-balance",
      category: "Moda",
    },
  ],
};
