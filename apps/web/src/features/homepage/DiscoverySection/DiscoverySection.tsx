import styles from "./DiscoverySection.module.css";
import { DiscoveryCard } from "./DiscoveryCard";
import type { DiscoveryData, DiscoveryCardSize } from "@/data/discovery";

export interface DiscoverySectionProps {
  data: DiscoveryData;
}

const VARIANT_BY_SIZE: Record<
  DiscoveryCardSize,
  "mosaic-large" | "mosaic-tall" | "mosaic-wide" | "mosaic-small"
> = {
  large: "mosaic-large",
  tall: "mosaic-tall",
  wide: "mosaic-wide",
  small: "mosaic-small",
};

export function DiscoverySection({ data }: DiscoverySectionProps) {
  const { categories, cta } = data;

  return (
    <section aria-labelledby="discovery-title" className={styles.section}>
      <header className={styles.sectionHeader}>
        <span className={styles.eyebrow}>Explora ZoneCanal</span>
        <h2 id="discovery-title" className={styles.sectionTitle}>
          Encuentra lo tuyo
        </h2>
        <span className={styles.accentLine} aria-hidden="true" />
      </header>

      <div className={styles.mosaicGrid}>
        {categories.map((cat) => (
          <DiscoveryCard
            key={cat.id}
            item={cat}
            variant={VARIANT_BY_SIZE[cat.size]}
            wide={cat.size === "wide"}
          />
        ))}
        <DiscoveryCard item={cta} variant="cta" wide />
      </div>
    </section>
  );
}
