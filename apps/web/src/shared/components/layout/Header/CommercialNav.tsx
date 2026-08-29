/**
 * Navegación comercial secundaria de ZoneCanal.
 *
 * Expone los principales caminos de descubrimiento y compra sin mezclar
 * esta responsabilidad con el buscador o las acciones de cuenta.
 *
 * Estructura:
 * - Escritorio: navegación comercial completa en una sola franja.
 * - Tablet / móvil: barra de 5 accesos fijos (Todo, Ofertas, Detal,
 *   Mayoristas, Más) implementada con CSS Grid. "Más" agrupa los accesos
 *   secundarios en un desplegable flotante sin desplazamiento horizontal.
 */

import Link from "next/link";
import { LuBadgeCheck, LuChevronDown, LuMenu } from "react-icons/lu";

import { COMMERCIAL_NAV_ITEMS } from "./header.config";
import styles from "./Header.module.css";

/**
 * Accesos que viven dentro del desplegable "Más" en tablet/móvil.
 * Se excluyen de la barra principal para no comprimirla.
 */
const MORE_MENU_HREFS = new Set([
  "/proveedores",
  "/envios",
  "/mapa-zona-libre",
  "/vender",
]);

/** Etiquetas compactas para la barra responsive. */
const MOBILE_LABELS: Record<string, string> = {
  "Compra al detal": "Detal",
  "Compra al por mayor": "Mayoristas",
};

function linkClassNames(variant: string): string {
  return [
    styles.navLink,
    variant === "accent" ? styles.navAccent : "",
    variant === "seller" ? styles.navSeller : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function CommercialNav() {
  const mainItems = COMMERCIAL_NAV_ITEMS.filter(
    (item) => !MORE_MENU_HREFS.has(item.href),
  );
  const moreItems = COMMERCIAL_NAV_ITEMS.filter((item) =>
    MORE_MENU_HREFS.has(item.href),
  );

  return (
    <nav
      className={styles.commercialNav}
      aria-label="Navegación comercial"
    >
      {/* Escritorio: navegación comercial completa. */}
      <div className={styles.desktopCommercialNav}>
        <Link
          className={`${styles.navLink} ${styles.navAll}`}
          href="/categorias"
        >
          <LuMenu aria-hidden="true" />
          <span>Todo</span>
        </Link>

        {COMMERCIAL_NAV_ITEMS.map((item) => (
          <Link
            className={linkClassNames(item.variant)}
            href={item.href}
            key={item.href}
          >
            <span>{item.label}</span>

            {item.variant === "verified" ? (
              <LuBadgeCheck
                className={styles.verifiedIcon}
                aria-hidden="true"
              />
            ) : null}
          </Link>
        ))}
      </div>

      {/* Tablet / móvil: cinco accesos fijos + desplegable "Más". */}
      <div className={styles.mobileCommercialNav}>
        <Link
          className={`${styles.navLink} ${styles.navAll}`}
          href="/categorias"
        >
          <LuMenu aria-hidden="true" />
          <span className={styles.mobileNavLabel}>Todo</span>
        </Link>

        {mainItems.map((item) => (
          <Link
            className={linkClassNames(item.variant)}
            href={item.href}
            key={item.href}
          >
            <span className={styles.mobileNavLabel}>
              {MOBILE_LABELS[item.label] ?? item.label}
            </span>

            {item.variant === "verified" ? (
              <LuBadgeCheck
                className={styles.verifiedIcon}
                aria-hidden="true"
              />
            ) : null}
          </Link>
        ))}

        <details className={styles.moreWrapper}>
          <summary className={styles.moreTrigger}>
            <span className={styles.mobileNavLabel}>Más</span>
            <LuChevronDown
              className={styles.moreChevron}
              aria-hidden="true"
            />
          </summary>

          <div className={styles.moreMenu}>
            {moreItems.map((item) => (
              <Link
                className={styles.moreMenuItem}
                href={item.href}
                key={item.href}
              >
                <span>{item.label}</span>

                {item.variant === "verified" ? (
                  <LuBadgeCheck
                    className={styles.verifiedIcon}
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </nav>
  );
}
