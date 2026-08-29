"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuBadgeCheck, LuHeart } from "react-icons/lu";
import styles from "./ProductCard.module.css";
import type { ProductItem } from "@/data/products";

export interface ProductCardProps {
  product: ProductItem;
  compact?: boolean;
}

const badgeLabels: Record<NonNullable<ProductItem["badge"]>, string> = {
  oferta: "Oferta",
  nuevo: "Nuevo",
  exclusivo: "Exclusivo",
  mayorista: "Mayorista",
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-PA", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const [favorited, setFavorited] = useState(false);

  const discount =
    product.discount ??
    (product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : undefined);

  const cornerBadge =
    product.badge && product.badge !== "mayorista"
      ? badgeLabels[product.badge]
      : null;

  const hasWholesale = typeof product.wholesalePrice === "number";

  const handleFavorite = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setFavorited((value) => !value);
  };

  return (
    <article className={`${styles.card} ${compact ? styles.compact : ""}`}>
      <Link
        href={`/productos/${product.slug}`}
        className={styles.overlay}
        aria-label={`Ver producto ${product.name}`}
      />

      <div className={styles.media}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 280px"
          className={styles.image}
        />

        <div className={styles.mediaTopLeft}>
          {discount && product.originalPrice && (
            <span className={styles.discountBadge}>-{discount}%</span>
          )}
          {cornerBadge && (
            <span className={`${styles.badge} ${styles[product.badge!]}`}>
              {cornerBadge}
            </span>
          )}
        </div>

        <button
          type="button"
          className={`${styles.favorite} ${favorited ? styles.favorited : ""}`}
          aria-label={
            favorited
              ? `Quitar ${product.name} de favoritos`
              : `Agregar ${product.name} a favoritos`
          }
          aria-pressed={favorited}
          onClick={handleFavorite}
        >
          <LuHeart aria-hidden="true" />
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.modes}>
          <span className={`${styles.chip} ${styles.chipRetail}`}>Detal</span>
          {hasWholesale && (
            <span className={`${styles.chip} ${styles.chipWholesale}`}>
              Mayorista
            </span>
          )}
        </div>

        <h3 className={styles.name}>{product.name}</h3>

        <div className={styles.supplier}>
          {product.supplierVerified && (
            <LuBadgeCheck
              className={styles.verifiedIcon}
              aria-label="Proveedor verificado"
            />
          )}
          <span className={styles.supplierName}>{product.supplier}</span>
        </div>

        <div className={styles.pricing}>
          <span className={styles.price}>{formatCurrency(product.price)}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>

        {hasWholesale && (
          <p className={styles.wholesale}>
            Desde {formatCurrency(product.wholesalePrice!)}
            {product.wholesaleMinQty
              ? ` · mín. ${product.wholesaleMinQty} unid.`
              : ""}
          </p>
        )}

        <span className={styles.cta}>
          Ver producto
          <LuArrowRight className={styles.ctaIcon} aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
