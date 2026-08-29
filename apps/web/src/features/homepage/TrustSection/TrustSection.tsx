import Link from "next/link";
import {
  LuArrowRight,
  LuBadgeCheck,
  LuLayers,
  LuShieldCheck,
  LuTruck,
} from "react-icons/lu";
import styles from "./TrustSection.module.css";

const items = [
  { icon: LuShieldCheck, label: "Compra protegida" },
  { icon: LuBadgeCheck, label: "Proveedores verificados" },
  { icon: LuLayers, label: "Detal y mayorista" },
  { icon: LuTruck, label: "Envíos desde Panamá" },
];

export function TrustSection() {
  return (
    <section aria-labelledby="trust-title" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="trust-title" className={styles.title}>
            Comprar debe sentirse así de simple.
          </h2>
          <Link
            href="/ayuda/compra-protegida"
            className={styles.cta}
            aria-label="Conoce cómo protegemos tu compra"
          >
            Conoce cómo protegemos tu compra
            <LuArrowRight className={styles.ctaIcon} aria-hidden="true" />
          </Link>
        </div>

        <ul className={styles.list}>
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
              <span className={styles.label}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
