import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import styles from "./BusinessBuyingSection.module.css";

export function BusinessBuyingSection() {
  return (
    <section aria-labelledby="b2b-title" className={styles.section}>
      <div className={styles.band}>
        <div className={styles.content}>
          <h2 id="b2b-title" className={styles.title}>
            Cuando tu compra crece, ZoneCanal crece contigo.
          </h2>
          <p className={styles.text}>
            Cotiza por volumen, conecta con proveedores y encuentra oportunidades
            para abastecer tu negocio desde Panamá.
          </p>
        </div>
        <Link
          href="/mayoristas"
          className={styles.cta}
          aria-label="Explorar compras mayoristas"
        >
          Explorar compras mayoristas
          <LuArrowRight className={styles.ctaIcon} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
