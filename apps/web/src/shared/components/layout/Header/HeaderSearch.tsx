/**
 * Buscador principal del marketplace ZoneCanal.
 *
 * Mantiene integrada la selección rápida "Todo" con el campo de búsqueda
 * y el CTA de búsqueda. Por ahora funciona como estructura semántica;
 * posteriormente su comportamiento será conectado al dominio marketplace.
 */

import { LuChevronDown, LuSearch } from "react-icons/lu";

import { SEARCH_CATEGORIES } from "./header.config";
import styles from "./Header.module.css";

export function HeaderSearch() {
  return (
    <form
      className={styles.searchForm}
      action="/buscar"
      method="get"
      role="search"
    >
      <label className={styles.srOnly} htmlFor="zonecanal-search">
        Buscar en ZoneCanal
      </label>

      {/* Selector contextual integrado en el buscador. */}
      <div className={styles.searchScope}>
        <select
          className={styles.searchScopeSelect}
          name="categoria"
          aria-label="Seleccionar categoría de búsqueda"
          defaultValue="todo"
        >
          {SEARCH_CATEGORIES.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>

        <LuChevronDown
          className={styles.searchScopeIcon}
          aria-hidden="true"
        />
      </div>

      {/* El input ocupa todo el espacio flexible disponible. */}
      <input
        id="zonecanal-search"
        className={styles.searchInput}
        type="search"
        name="q"
        placeholder="Buscar productos, marcas, proveedores o empresas..."
        autoComplete="off"
      />

      <button
        className={styles.searchButton}
        type="submit"
        aria-label="Buscar"
      >
        <LuSearch aria-hidden="true" />
      </button>
    </form>
  );
}