"use client";

import { screeningSection, signsSection } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function SignsScreening() {
  const { t } = useLang();
  return (
    <section className="wrap section">
      <div className="cols-2">
        <div>
          <span className="kicker">{t(signsSection.kicker)}</span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(26px, 3vw, 38px)",
              lineHeight: 1.1,
              letterSpacing: "-.015em",
              margin: 0,
            }}
          >
            {t(signsSection.h2)}
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              margin: "16px 0 24px",
              color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
            }}
          >
            {t(signsSection.lead)}
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {signsSection.items.map((item, i) => (
              <li
                key={item.vi}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "14px 0",
                  borderTop: "2px solid var(--color-divider)",
                  borderBottom:
                    i === signsSection.items.length - 1
                      ? "2px solid var(--color-divider)"
                      : undefined,
                  fontSize: 14.5,
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "var(--color-accent)", fontWeight: 800 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{t(item)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="kicker">{t(screeningSection.kicker)}</span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(26px, 3vw, 38px)",
              lineHeight: 1.1,
              letterSpacing: "-.015em",
              margin: 0,
            }}
          >
            {t(screeningSection.h2)}
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              margin: "16px 0 24px",
              color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
            }}
          >
            {t(screeningSection.lead)}
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>{t(screeningSection.headers.cancer)}</th>
                <th>{t(screeningSection.headers.who)}</th>
                <th>{t(screeningSection.headers.often)}</th>
              </tr>
            </thead>
            <tbody>
              {screeningSection.rows.map((r) => (
                <tr key={r.cancer.en}>
                  <td>{t(r.cancer)}</td>
                  <td>{t(r.who)}</td>
                  <td>{t(r.often)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
