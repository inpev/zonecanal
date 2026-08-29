/**
 * Acciones comerciales y de cuenta del Header.
 *
 * Agrupa moneda, cuenta, pedidos, favoritos y carrito sin introducir
 * todavía lógica de sesión o estado global.
 */

import Link from "next/link";
import {
  LuChevronDown,
  LuHeart,
  LuShoppingCart,
} from "react-icons/lu";

import styles from "./Header.module.css";

export function HeaderActions() {
  return (
    <nav
      className={styles.actions}
      aria-label="Acciones de usuario"
    >
      {/* Contexto internacional del marketplace. */}
      <button
        className={`${styles.actionItem} ${styles.currencyAction}`}
        type="button"
        aria-label="País Panamá, moneda dólar estadounidense"
      >
        <span className={styles.currencyText}>PA · USD</span>
        <LuChevronDown aria-hidden="true" />
      </button>

      {/* Cuenta del usuario. */}
      <Link
        className={`${styles.actionItem} ${styles.accountAction}`}
        href="/cuenta"
      >
        <span className={styles.actionTextGroup}>
          <span className={styles.actionEyebrow}>
            Hola, identifícate
          </span>

          <span className={styles.actionStrong}>
            Mi cuenta
            <LuChevronDown aria-hidden="true" />
          </span>
        </span>
      </Link>

      {/* Historial y devoluciones. */}
      <Link
        className={`${styles.actionItem} ${styles.ordersAction}`}
        href="/pedidos"
      >
        <span className={styles.actionTextGroup}>
          <span className={styles.actionEyebrow}>
            Devoluciones
          </span>

          <span className={styles.actionStrong}>
            y pedidos
          </span>
        </span>
      </Link>

      {/* Favoritos. */}
      <Link
        className={`${styles.iconAction} ${styles.favoriteAction}`}
        href="/favoritos"
        aria-label="Favoritos"
      >
        <LuHeart aria-hidden="true" />
      </Link>

      {/* Carrito con contador preparado para estado real futuro. */}
      <Link
        className={styles.cartAction}
        href="/carrito"
        aria-label="Carrito, 0 productos"
      >
        <span className={styles.cartIconWrapper}>
          <LuShoppingCart aria-hidden="true" />
          <span className={styles.cartBadge}>0</span>
        </span>

        <span className={styles.cartText}>Carrito</span>
      </Link>
    </nav>
  );
}