"use client";

import { hero, stats } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();
  return (
    <>
      <section
        className="wrap"
        style={{
          paddingTop: "clamp(56px, 8vw, 120px)",
          paddingBottom: "clamp(40px, 5vw, 80px)",
        }}
      >
        <span className="kicker" style={{ marginBottom: 20 }}>
          {t(hero.kicker)}
        </span>
        <h1
          style={{
            fontWeight: 800,
            fontSize: "clamp(40px, 6.4vw, 84px)",
            lineHeight: 1.03,
            letterSpacing: "-.02em",
            margin: 0,
            maxWidth: "18ch",
          }}
        >
          {t(hero.h1)}
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 1.6vw, 19px)",
            lineHeight: 1.65,
            maxWidth: "56ch",
            margin: "28px 0 0",
            color: "color-mix(in srgb, var(--color-text) 80%, transparent)",
          }}
        >
          {t(hero.lead)}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <a href="#phong-ngua" className="btn btn-primary" style={{ padding: "12px 18px", fontSize: 14 }}>
            {t(hero.ctaPrimary)}
          </a>
          <a href="#danh-gia" className="btn btn-secondary" style={{ padding: "12px 18px", fontSize: 14 }}>
            {t(hero.ctaSecondary)}
          </a>
        </div>
      </section>

      <div className="rule" />

      <section
        className="wrap"
        style={{ paddingTop: "clamp(40px, 5vw, 72px)", paddingBottom: "clamp(40px, 5vw, 72px)" }}
      >
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.num}>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "clamp(34px, 3.8vw, 52px)",
                  lineHeight: 1,
                  color: "var(--color-accent)",
                  margin: 0,
                }}
              >
                {s.num}
              </p>
              <p
                style={{
                  fontSize: 13,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "color-mix(in srgb, var(--color-text) 68%, transparent)",
                  margin: "14px 0 0",
                  lineHeight: 1.4,
                }}
              >
                {t(s.label)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
