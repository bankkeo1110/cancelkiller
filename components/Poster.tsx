"use client";

import { poster } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Poster() {
  const { t } = useLang();
  return (
    <section style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}>
      <div
        className="wrap"
        style={{
          paddingTop: "clamp(56px, 7vw, 110px)",
          paddingBottom: "clamp(56px, 7vw, 110px)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(34px, 5vw, 68px)",
            lineHeight: 1.04,
            letterSpacing: "-.02em",
            margin: 0,
            maxWidth: "16ch",
          }}
        >
          {t(poster.h2)}
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 1.6vw, 18px)",
            lineHeight: 1.6,
            maxWidth: "52ch",
            margin: "24px 0 0",
            opacity: 0.92,
          }}
        >
          {t(poster.lead)}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <a
            href="#phong-ngua"
            className="btn"
            style={{
              background: "var(--color-bg)",
              color: "var(--color-accent)",
              padding: "13px 20px",
              fontSize: 14,
            }}
          >
            {t(poster.ctaPrimary)}
          </a>
          <a
            href="#loai"
            className="btn btn-ghost"
            style={{
              color: "var(--color-bg)",
              border: "1px solid var(--color-bg)",
              padding: "13px 20px",
              fontSize: 14,
            }}
          >
            {t(poster.ctaSecondary)}
          </a>
        </div>
      </div>
    </section>
  );
}
