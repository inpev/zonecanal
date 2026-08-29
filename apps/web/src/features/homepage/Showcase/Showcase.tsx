"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { KeyboardEvent } from "react";
import { LuArrowRight, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import styles from "./Showcase.module.css";
import type { ShowcaseData, ShowcaseMainCampaign } from "@/data/showcase";

export interface ShowcaseProps {
  data: ShowcaseData;
}

export function Showcase({ data }: ShowcaseProps) {
  const { mainCampaigns, HOME_HERO_B2B: b2b, HOME_HERO_PROMO: promo } = data;
  const sideCards = [b2b, promo];

  return (
    <section aria-labelledby="showcase-title" className={styles.section}>
      <h2 id="showcase-title" className="u-visually-hidden">
        Campañas destacadas
      </h2>

      <div className={styles.grid}>
        <MainCarousel slides={mainCampaigns} />

        <div className={styles.sideColumn}>
          {sideCards.map((card) => (
            <Link
              key={card.id}
              href={card.ctaHref}
              className={`${styles.sideCard} ${styles[card.variant]}`}
              aria-label={`${card.title} - ${card.ctaText}`}
            >
              <div className={styles.sideImage}>
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.sideContent}>
                {card.subtitle && (
                  <span className={styles.subtitle}>{card.subtitle}</span>
                )}
                <h3 className={styles.sideTitle}>{card.title}</h3>
                <span className={styles.sideCta}>
                  {card.ctaText}
                  <LuArrowRight className={styles.ctaIcon} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function MainCarousel({ slides }: { slides: ShowcaseMainCampaign[] }) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reduced || count <= 1) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, reduced, count]);

  const go = (i: number) => setIndex(((i % count) + count) % count);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  };

  return (
    <article
      className={styles.mainCampaign}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Campañas principales"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      <div
        className={styles.track}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            className={styles.slide}
            key={slide.id}
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${count}`}
            aria-hidden={i !== index}
            inert={i !== index}
          >
            <div className={styles.mainContent}>
              {slide.badge && <span className={styles.badge}>{slide.badge}</span>}
              <h3 className={styles.title}>{slide.title}</h3>
              <p className={styles.description}>{slide.description}</p>
              <div className={styles.actions}>
                <Link
                  href={slide.ctaHref}
                  className={styles.cta}
                  aria-label={`${slide.ctaText} - ${slide.title}`}
                >
                  {slide.ctaText}
                  <LuArrowRight className={styles.ctaIcon} aria-hidden="true" />
                </Link>
                {slide.secondaryCtaText && slide.secondaryCtaHref && (
                  <Link
                    href={slide.secondaryCtaHref}
                    className={styles.ctaSecondary}
                    aria-label={`${slide.secondaryCtaText} - ${slide.title}`}
                  >
                    {slide.secondaryCtaText}
                  </Link>
                )}
              </div>
            </div>
            <div className={styles.mainImage}>
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className={styles.image}
                priority={i === 0}
              />
              <button
                type="button"
                className={`${styles.arrow} ${styles.arrowPrev}`}
                onClick={prev}
                aria-label="Anterior"
              >
                <LuChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.arrow} ${styles.arrowNext}`}
                onClick={next}
                aria-label="Siguiente"
              >
                <LuChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dots} role="tablist" aria-label="Selector de diapositivas">
        {slides.map((slide, i) => (
          <button
            type="button"
            key={slide.id}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => go(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Ir a la diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </article>
  );
}
