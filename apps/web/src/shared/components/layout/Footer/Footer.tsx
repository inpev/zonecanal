import Image from "next/image";
import Link from "next/link";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
  LuYoutube,
} from "react-icons/lu";
import styles from "./Footer.module.css";

const columns = [
  {
    title: "Comprar",
    links: [
      { label: "Productos", href: "#" },
      { label: "Categorías", href: "#" },
      { label: "Ofertas", href: "#" },
      { label: "Marcas", href: "#" },
      { label: "Proveedores", href: "#" },
    ],
  },
  {
    title: "Vender",
    links: [
      { label: "Vender en ZoneCanal", href: "#" },
      { label: "Venta al detal", href: "#" },
      { label: "Venta al por mayor", href: "#" },
      { label: "Publicidad", href: "#" },
    ],
  },
  {
    title: "ZoneCanal",
    links: [
      { label: "Sobre nosotros", href: "#" },
      { label: "Cómo funciona", href: "#" },
      { label: "Mapa Zona Libre", href: "#" },
      { label: "Logística", href: "#" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "Centro de ayuda", href: "#" },
      { label: "Envíos", href: "#" },
      { label: "Devoluciones", href: "#" },
      { label: "Compra protegida", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  },
];

const legalLinks = [
  { label: "Términos", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Cookies", href: "#" },
];

const socials = [
  { icon: LuFacebook, label: "Facebook", href: "#" },
  { icon: LuInstagram, label: "Instagram", href: "#" },
  { icon: LuTwitter, label: "X", href: "#" },
  { icon: LuLinkedin, label: "LinkedIn", href: "#" },
  { icon: LuYoutube, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Pie de página de ZoneCanal">
      <div className={`container ${styles.inner}`}>
        <nav className={styles.columns} aria-label="Mapa del sitio">
          {columns.map((column) => (
            <div key={column.title} className={styles.column}>
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link className={styles.link} href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className={styles.secondary}>
          <ul className={styles.legal}>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link className={styles.legalLink} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <span className={styles.country}>País / moneda: Panamá · USD</span>

          <div className={styles.social} aria-label="Redes sociales">
            {socials.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                className={styles.socialLink}
                href={href}
                aria-label={label}
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.signature}>
          <Image
            className={styles.logo}
            src="/brand/zomecanalimagen.png"
            alt="ZoneCanal"
            width={707}
            height={353}
            unoptimized
          />
          <p className={styles.copyright}>© ZoneCanal · Panamá</p>
        </div>
      </div>
    </footer>
  );
}
