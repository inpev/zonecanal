import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuLayoutGrid } from "react-icons/lu";
import styles from "./DiscoveryCard.module.css";
import type { DiscoveryCategoryItem, DiscoveryCtaItem } from "@/data/discovery";

export type DiscoveryCardVariant = "mosaic-large" | "mosaic-tall" | "mosaic-wide" | "mosaic-small" | "cta";

export type DiscoveryCardItem = DiscoveryCategoryItem | DiscoveryCtaItem;

export interface DiscoveryCardProps {
  item: DiscoveryCardItem;
  variant: DiscoveryCardVariant;
  wide?: boolean;
}

export function DiscoveryCard({ item, variant, wide = false }: DiscoveryCardProps) {
  if (variant === "cta") {
    const cta = item as DiscoveryCtaItem;
    return (
      <Link
        href={cta.ctaHref}
        className={`${styles.card} ${styles.ctaCard}`}
        data-wide={wide ? "true" : undefined}
        aria-label={cta.ctaText}
      >
        <LuLayoutGrid className={styles.ctaIcon} aria-hidden="true" />
        <span className={styles.ctaTitle}>{cta.title}</span>
        <span className={styles.ctaText}>
          {cta.ctaText}
          <LuArrowRight className={styles.ctaArrow} aria-hidden="true" />
        </span>
      </Link>
    );
  }

  const cat = item as DiscoveryCategoryItem;

  const dataVariant =
    variant === "mosaic-large"
      ? "mosaic-large"
      : variant === "mosaic-tall"
        ? "mosaic-tall"
        : variant === "mosaic-wide"
          ? "mosaic-wide"
          : "mosaic-small";

  return (
    <Link
      href={cat.ctaHref}
      className={styles.card}
      data-variant={dataVariant}
      data-wide={wide ? "true" : undefined}
      aria-label={`Ver categoría ${cat.title}`}
    >
      <Image
        src={cat.image}
        alt={cat.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className={styles.image}
      />
      <span className={styles.scrim} aria-hidden="true" />
      {cat.tag && <span className={styles.tag}>{cat.tag}</span>}
      <span className={styles.caption}>
        <span className={styles.title}>{cat.title}</span>
        <LuArrowRight className={styles.arrow} aria-hidden="true" />
      </span>
    </Link>
  );
}
