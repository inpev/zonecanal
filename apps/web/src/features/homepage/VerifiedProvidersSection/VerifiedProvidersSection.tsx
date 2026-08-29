import Link from "next/link";
import { LuArrowRight, LuBadgeCheck } from "react-icons/lu";
import styles from "./VerifiedProvidersSection.module.css";
import { VerifiedProviderCard } from "./VerifiedProviderCard";
import type { VerifiedProvidersData } from "@/data/providers";

export interface VerifiedProvidersSectionProps {
  data: VerifiedProvidersData;
}

export function VerifiedProvidersSection({ data }: VerifiedProvidersSectionProps) {
  const { providers, cta } = data;

  return (
    <section aria-labelledby="providers-title" className={styles.section}>
      <header className={styles.header}>
        <span className={styles.seal}>
          <LuBadgeCheck aria-hidden="true" />
          Proveedores verificados
        </span>
        <h2 id="providers-title" className={styles.title}>
          Compra con respaldo
        </h2>
        <span className={styles.meta}>Detal · Mayorista</span>
      </header>

      <div className={styles.grid}>
        {providers.map((provider) => (
          <VerifiedProviderCard key={provider.id} provider={provider} />
        ))}
        <Link
          href={cta.href}
          className={`${styles.card} ${styles.ctaCard}`}
          aria-label={cta.ctaText}
        >
          <LuBadgeCheck className={styles.ctaIcon} aria-hidden="true" />
          <span className={styles.ctaTitle}>{cta.title}</span>
          <span className={styles.ctaText}>
            {cta.ctaText}
            <LuArrowRight className={styles.ctaArrow} aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  );
}
