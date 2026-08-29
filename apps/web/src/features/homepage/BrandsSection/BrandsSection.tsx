import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import styles from "./BrandsSection.module.css";
import { BrandCard } from "./BrandCard";
import type { BrandsData } from "@/data/brands";

export interface BrandsSectionProps {
  data: BrandsData;
}

export function BrandsSection({ data }: BrandsSectionProps) {
  const { featured, secondary } = data;

  return (
    <section aria-labelledby="brands-title" className={styles.section}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <span className={styles.eyebrow}>Entre grandes nombres</span>
          <h2 id="brands-title" className={styles.title}>
            Tu próxima marca favorita está aquí.
          </h2>
          <span className={styles.accentLine} aria-hidden="true" />
        </div>
        <Link
          href="/marcas"
          className={styles.cta}
          aria-label="Ver todas las marcas"
        >
          Ver todas las marcas
          <LuArrowRight className={styles.ctaIcon} aria-hidden="true" />
        </Link>
      </header>

      {featured.length > 0 && (
        <div className={styles.featuredGrid}>
          {featured.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      )}

      {secondary.length > 0 && (
        <div className={styles.secondaryGrid}>
          {secondary.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      )}
    </section>
  );
}
