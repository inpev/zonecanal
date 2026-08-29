/**
 * Header global de ZoneCanal.
 *
 * Responsabilidad:
 * - componer marca y ubicación;
 * - integrar el buscador;
 * - integrar las acciones del usuario;
 * - montar la navegación comercial secundaria.
 *
 * No contiene lógica de negocio ni comunicación con APIs.
 */

import Image from "next/image";
import Link from "next/link";
import { LuMapPin } from "react-icons/lu";

import { CommercialNav } from "./CommercialNav";
import { HeaderActions } from "./HeaderActions";
import { HeaderSearch } from "./HeaderSearch";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      {/* Primera franja: identidad, búsqueda y acciones comerciales. */}
      <div className={styles.primaryBar}>
        <div className={styles.primaryInner}>
          {/* Logo oficial ZC almacenado en public/brand. */}
          <Link
            className={styles.brandLink}
            href="/"
            aria-label="ZoneCanal - Inicio"
          >
            <Image
              className={styles.brandLogo}
              src="/brand/zomecanalimagen.png"
              alt="ZoneCanal"
              width={707}
              height={353}
              priority
              unoptimized
            />
          </Link>

          {/* Ubicación actual del marketplace. */}
          <button
            className={styles.location}
            type="button"
            aria-label="Ubicación actual: Panamá"
          >
            <LuMapPin
              className={styles.locationIcon}
              aria-hidden="true"
            />

            <span className={styles.locationText}>
              <span className={styles.locationLabel}>
                Ubicación
              </span>

              <strong className={styles.locationValue}>
                Panamá
              </strong>
            </span>
          </button>

          <HeaderSearch />

          <HeaderActions />
        </div>
      </div>

      {/* Segunda franja: navegación puramente comercial. */}
      <CommercialNav />
    </header>
  );
}