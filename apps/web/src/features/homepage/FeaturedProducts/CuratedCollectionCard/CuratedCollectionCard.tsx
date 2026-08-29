import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import styles from "./CuratedCollectionCard.module.css";
import type { ProductCollection } from "@/data/products";

export interface CuratedCollectionCardProps {
  collection: ProductCollection;
}

export function CuratedCollectionCard({ collection }: CuratedCollectionCardProps) {
  return (
    <Link
      href={collection.href}
      className={styles.card}
      aria-label={`Descubrir ${collection.title}`}
    >
      <h3 className={styles.title}>{collection.title}</h3>

      <div className={styles.mosaic}>
        {collection.items.map((item) => (
          <div className={styles.tile} key={item.name}>
            <div className={styles.tileImg}>
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 160px"
                className={styles.tileImage}
              />
            </div>
            <span className={styles.tileName}>{item.name}</span>
          </div>
        ))}
      </div>

      <span className={styles.cta}>
        Descubrir más
        <LuArrowRight className={styles.ctaIcon} aria-hidden="true" />
      </span>
    </Link>
  );
}
