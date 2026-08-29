import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuBadgeCheck, LuMapPin, LuShieldCheck } from "react-icons/lu";
import styles from "./VerifiedProviderCard.module.css";
import type { VerifiedProvider } from "@/data/providers";

export interface VerifiedProviderCardProps {
  provider: VerifiedProvider;
}

export function VerifiedProviderCard({ provider }: VerifiedProviderCardProps) {
  const initials = provider.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0] ?? "")
    .join("")
    .toUpperCase();

  const isRetail = provider.saleModes.includes("retail");
  const isWholesale = provider.saleModes.includes("wholesale");

  return (
    <Link
      href={provider.href}
      className={styles.card}
      aria-label={`Ver proveedor ${provider.name}`}
    >
      <div className={styles.top}>
        {provider.image ? (
          <span className={styles.avatar}>
            <Image
              src={provider.image}
              alt={provider.name}
              fill
              sizes="48px"
              className={styles.avatarImage}
            />
          </span>
        ) : (
          <span className={styles.avatar} aria-hidden="true">
            {initials}
          </span>
        )}
        <div className={styles.headings}>
          <h3 className={styles.name}>{provider.name}</h3>
          {provider.verified && (
            <span className={styles.verified}>
              <LuBadgeCheck aria-hidden="true" />
              Verificado
            </span>
          )}
        </div>
      </div>

      <p className={styles.category}>{provider.category}</p>

      <p className={styles.location}>
        <LuMapPin aria-hidden="true" />
        {provider.location}
      </p>

      <div className={styles.modes}>
        {isRetail && (
          <span className={`${styles.chip} ${styles.chipRetail}`}>Detal</span>
        )}
        {isWholesale && (
          <span className={`${styles.chip} ${styles.chipWholesale}`}>
            Mayorista
          </span>
        )}
      </div>

      <p className={styles.protected}>
        <LuShieldCheck aria-hidden="true" />
        Compra protegida
      </p>

      <span className={styles.cta}>
        Ver proveedor
        <LuArrowRight className={styles.ctaIcon} aria-hidden="true" />
      </span>
    </Link>
  );
}
