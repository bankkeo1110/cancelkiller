"use client";

import { footer } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer
      className="wrap"
      style={{ paddingTop: "clamp(36px, 4vw, 56px)", paddingBottom: "clamp(36px, 4vw, 56px)" }}
    >
      <div className="footer-grid">
        <div>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: 18,
              margin: "0 0 8px",
            }}
          >
            Vững Tâm
          </p>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.6,
              margin: 0,
              color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
            }}
          >
            {t(footer.brandDesc)}
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: 12,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
              fontWeight: 600,
              margin: "0 0 10px",
            }}
          >
            {t(footer.noticeKicker)}
          </p>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.65,
              margin: "0 0 14px",
              color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
            }}
          >
            {t(footer.notice)}
          </p>
          <p
            style={{
              fontSize: 12,
              lineHeight: 1.6,
              margin: 0,
              color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
            }}
          >
            {t(footer.sources)}
          </p>
        </div>
      </div>
    </footer>
  );
}
