"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import styles from "./ProductRail.module.css";
import { ProductCard } from "../ProductCard";
import type { ProductItem } from "@/data/products";

export interface ProductRailProps {
  title: string;
  products: ProductItem[];
}

export function ProductRail({ title, products }: ProductRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanLeft(track.scrollLeft > 4);
    setCanRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  };

  const handleTrackKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollBy(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollBy(-1);
    }
  };

  return (
    <div className={styles.railBlock}>
      <div className={styles.railHead}>
        <h3 className={styles.railTitle}>{title}</h3>
      </div>

      <div className={styles.railWrap}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => scrollBy(-1)}
          disabled={!canLeft}
          aria-label="Ver productos anteriores"
        >
          <LuChevronLeft aria-hidden="true" />
        </button>

        <div
          ref={trackRef}
          className={styles.track}
          tabIndex={0}
          onKeyDown={handleTrackKeyDown}
          aria-label={`${title} - carrusel horizontal`}
        >
          {products.map((product) => (
            <div className={styles.slide} key={product.id}>
              <ProductCard product={product} compact />
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => scrollBy(1)}
          disabled={!canRight}
          aria-label="Ver más productos"
        >
          <LuChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
