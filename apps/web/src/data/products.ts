export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  supplier: string;
  supplierVerified: boolean;
  price: number;
  originalPrice?: number;
  wholesalePrice?: number;
  wholesaleMinQty?: number;
  discount?: number;
  badge?: "oferta" | "nuevo" | "exclusivo" | "mayorista";
}

export interface ProductsData {
  featuredProducts: ProductItem[];
  curatedCollections: ProductCollection[];
}

export interface ProductCollectionItem {
  name: string;
  image: string;
  imageAlt: string;
}

export interface ProductCollection {
  id: string;
  title: string;
  href: string;
  items: ProductCollectionItem[];
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const productsData: ProductsData = {
  featuredProducts: [
    {
      id: "prod-1",
      name: "Smartphone XYZ Pro Max 256GB",
      slug: "smartphone-xyz-pro-max-256gb",
      image: u("photo-1511707171634-5f897ff02aa9"),
      imageAlt: "Smartphone XYZ Pro Max color negro",
      supplier: "TechGlobal Distribución",
      supplierVerified: true,
      price: 899.99,
      originalPrice: 1049.99,
      wholesalePrice: 829.0,
      wholesaleMinQty: 5,
      discount: 14,
      badge: "oferta",
    },
    {
      id: "prod-2",
      name: "Laptop Ultrabook 14\" Intel i7 16GB/512GB",
      slug: "laptop-ultrabook-14-i7-16gb-512gb",
      image: u("photo-1517336714731-489689fd1ca8"),
      imageAlt: "Laptop ultrabook plateada abierta",
      supplier: "CompuMundo Mayorista",
      supplierVerified: true,
      price: 1249.0,
      originalPrice: 1499.0,
      wholesalePrice: 1099.0,
      wholesaleMinQty: 5,
      discount: 17,
      badge: "exclusivo",
    },
    {
      id: "prod-3",
      name: "Zapatillas Running Pro Trainer",
      slug: "zapatillas-running-pro-trainer",
      image: u("photo-1542291026-7eec264c27ff"),
      imageAlt: "Zapatillas running azul y blanco",
      supplier: "Deportes Élite Mayorista",
      supplierVerified: true,
      price: 129.99,
      originalPrice: 169.99,
      wholesalePrice: 99.99,
      wholesaleMinQty: 10,
      discount: 23,
      badge: "oferta",
    },
    {
      id: "prod-4",
      name: "Vestido Midi Floral Primavera",
      slug: "vestido-midi-floral-primavera",
      image: u("photo-1595777457583-95e059d581b8"),
      imageAlt: "Vestido midi floral para mujer",
      supplier: "Moda Panamá 360",
      supplierVerified: true,
      price: 59.99,
      badge: "nuevo",
    },
    {
      id: "prod-5",
      name: "Cafetera Espresso Automática",
      slug: "cafetera-espresso-automatica",
      image: u("photo-1517668808822-9ebb02f2a0e6"),
      imageAlt: "Cafetera espresso acero inoxidable",
      supplier: "CocinaPro Equipamiento",
      supplierVerified: true,
      price: 449.99,
      originalPrice: 529.99,
      discount: 15,
      badge: "nuevo",
    },
    {
      id: "prod-6",
      name: "Set Herramientas Profesional 108 pzs",
      slug: "set-herramientas-profesional-108",
      image: u("photo-1581094794329-c8112a410239"),
      imageAlt: "Maleta herramientas organizada",
      supplier: "Ferretería Industrial Zona Libre",
      supplierVerified: true,
      price: 189.0,
      wholesalePrice: 159.0,
      wholesaleMinQty: 4,
      badge: "exclusivo",
    },
    {
      id: "prod-7",
      name: "Sérum Facial Hialurónico 50ml",
      slug: "serum-facial-hialuronico-50ml",
      image: u("photo-1522335789203-aabd1fc54bc9"),
      imageAlt: "Sérum facial de belleza",
      supplier: "Belleza y Salud S.A.",
      supplierVerified: true,
      price: 39.99,
      originalPrice: 49.99,
      discount: 20,
      badge: "oferta",
    },
    {
      id: "prod-8",
      name: "Filtro de Aceite Premium Universal",
      slug: "filtro-de-aceite-premium-universal",
      image: u("photo-1503376780353-7e6692767b70"),
      imageAlt: "Autoparte filtro de aceite",
      supplier: "AutoPartes del Caribe",
      supplierVerified: true,
      price: 79.99,
      wholesalePrice: 64.99,
      wholesaleMinQty: 2,
      badge: "exclusivo",
    },
  ],
  curatedCollections: [
    {
      id: "mascotas",
      title: "Para tus mascotas",
      href: "/colecciones/para-tus-mascotas",
      items: [
        {
          name: "Alimento premium",
          image: u("photo-1589924690799-2445e0c4f6c2"),
          imageAlt: "Alimento premium para mascotas",
        },
        {
          name: "Cama acogedora",
          image: u("photo-1592194996308-7b43878e84a6"),
          imageAlt: "Cama acogedora para mascotas",
        },
        {
          name: "Juguetes",
          image: u("photo-1576201836106-db1758fd1c97"),
          imageAlt: "Juguetes para mascotas",
        },
        {
          name: "Cuidado",
          image: u("photo-1516734212186-a967f81ad0d7"),
          imageAlt: "Productos de cuidado para mascotas",
        },
      ],
    },
    {
      id: "belleza",
      title: "Renueva tu rutina de belleza",
      href: "/colecciones/renueva-tu-rutina-de-belleza",
      items: [
        {
          name: "Sérum",
          image: u("photo-1522335789203-aabd1fc54bc9"),
          imageAlt: "Sérum facial",
        },
        {
          name: "Maquillaje",
          image: u("photo-1598440947619-2c35fc9aa908"),
          imageAlt: "Maquillaje",
        },
        {
          name: "Fragancia",
          image: u("photo-1541643600914-78b084683601"),
          imageAlt: "Fragancia",
        },
        {
          name: "Cuidado capilar",
          image: u("photo-1571781926291-c477ebfd024b"),
          imageAlt: "Cuidado capilar",
        },
      ],
    },
    {
      id: "tecno-dia-a-dia",
      title: "Tecnología para tu día a día",
      href: "/colecciones/tecnologia-para-tu-dia-a-dia",
      items: [
        {
          name: "Smartphone",
          image: u("photo-1511707171634-5f897ff02aa9"),
          imageAlt: "Smartphone",
        },
        {
          name: "Audífonos",
          image: u("photo-1505740420928-5e560c06d30e"),
          imageAlt: "Audífonos",
        },
        {
          name: "Smartwatch",
          image: u("photo-1523275335684-37898b6baf30"),
          imageAlt: "Smartwatch",
        },
        {
          name: "Tablet",
          image: u("photo-1544244015-0df4b3ffc6b0"),
          imageAlt: "Tablet",
        },
      ],
    },
    {
      id: "gaming",
      title: "Gaming y entretenimiento",
      href: "/colecciones/gaming-y-entretenimiento",
      items: [
        {
          name: "Consola",
          image: u("photo-1605901309584-818e25960b8f"),
          imageAlt: "Consola de videojuegos",
        },
        {
          name: "Control",
          image: u("photo-1542751371-adc38448a05e"),
          imageAlt: "Control de juego",
        },
        {
          name: "Silla gamer",
          image: u("photo-1598550476439-6847785fcea6"),
          imageAlt: "Silla gamer",
        },
        {
          name: "Monitor",
          image: u("photo-1527443224154-c4a3942d3acf"),
          imageAlt: "Monitor gaming",
        },
      ],
    },
  ],
};
