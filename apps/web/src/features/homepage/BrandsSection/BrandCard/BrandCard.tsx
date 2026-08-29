import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import styles from "./BrandCard.module.css";
import type { Brand } from "@/data/brands";

export interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  const initial = brand.name.charAt(0).toUpperCase();
  const countLabel = brand.productCount
    ? `${brand.productCount.toLocaleString("es")} productos`
    : undefined;

  if (brand.featured) {
    return (
      <Link
        href={brand.href}
        className={`${styles.card} ${styles.featured}`}
        aria-label={`Ver marca ${brand.name}`}
      >
        <div className={styles.featuredTop}>
          <span className={styles.avatar} aria-hidden="true">
            {initial}
          </span>
          <div className={styles.featuredMeta}>
            {brand.category && (
              <span className={styles.category}>{brand.category}</span>
            )}
            {countLabel && <span className={styles.count}>{countLabel}</span>}
          </div>
        </div>
        <span className={styles.name}>{brand.name}</span>
        <span className={styles.featuredCta}>
          Ver marca
          <LuArrowRight className={styles.ctaIcon} aria-hidden="true" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={brand.href}
      className={styles.card}
      aria-label={`Ver marca ${brand.name}`}
    >
      <span className={styles.avatar} aria-hidden="true">
        {initial}
      </span>
      <span className={styles.name}>{brand.name}</span>
      {brand.category && (
        <span className={styles.category}>{brand.category}</span>
      )}
      {countLabel && <span className={styles.count}>{countLabel}</span>}
    </Link>
  );
}
