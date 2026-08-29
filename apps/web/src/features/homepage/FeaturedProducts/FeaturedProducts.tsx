import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import styles from "./FeaturedProducts.module.css";
import { ProductRail } from "./ProductRail";
import { CuratedCollectionCard } from "./CuratedCollectionCard";
import type { ProductsData } from "@/data/products";

export interface FeaturedProductsProps {
  data: ProductsData;
}

export function FeaturedProducts({ data }: FeaturedProductsProps) {
  const { featuredProducts, curatedCollections } = data;

  return (
    <section aria-labelledby="featured-title" className={styles.section}>
      <header className={styles.header}>
        <h2 id="featured-title" className={styles.title}>
          Lo que está moviendo ZoneCanal
        </h2>
        <span className={styles.accentBar} aria-hidden="true" />
      </header>

      <div className={styles.commercialBar}>
        <div className={styles.filters} role="group" aria-label="Filtros de productos">
          <button
            type="button"
            className={`${styles.filter} ${styles.filterActive}`}
            aria-pressed="true"
          >
            Más vendidos
          </button>
          <button type="button" className={styles.filter} aria-pressed="false">
            Novedades
          </button>
          <button type="button" className={styles.filter} aria-pressed="false">
            Ofertas
          </button>
          <button type="button" className={styles.filter} aria-pressed="false">
            Mayoristas
          </button>
        </div>

        <Link
          href="/marketplace"
          className={styles.cta}
          aria-label="Explorar productos"
        >
          Explorar productos
          <LuArrowRight className={styles.ctaIcon} aria-hidden="true" />
        </Link>
      </div>

      <ProductRail title="" products={featuredProducts} />

      <div className={styles.collections}>
        {curatedCollections.map((collection) => (
          <CuratedCollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  );
}
