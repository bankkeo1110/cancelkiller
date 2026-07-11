"use client";

import { useState } from "react";
import {
  Activity,
  Apple,
  Ban,
  Scale,
  Search,
  Sun,
  Syringe,
  Wine,
} from "lucide-react";
import { prevention } from "@/lib/content";
import { useLang } from "@/lib/i18n";

const ICONS = {
  ban: Ban,
  apple: Apple,
  activity: Activity,
  scale: Scale,
  wine: Wine,
  sun: Sun,
  syringe: Syringe,
  search: Search,
} as const;

export default function Prevention() {
  const { lang, t } = useLang();
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const total = prevention.checklist.length;
  const count = prevention.checklist.filter((_, i) => checked[i]).length;
  const pct = Math.round((count / total) * 100);

  return (
    <section id="phong-ngua" className="wrap section">
      <span className="kicker">{t(prevention.kicker)}</span>
      <h2 className="h2" style={{ maxWidth: "20ch" }}>
        {t(prevention.h2)}
      </h2>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.6,
          maxWidth: "52ch",
          margin: "18px 0 0",
          color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
        }}
      >
        {t(prevention.lead)}
      </p>

      <div className="grid-4" style={{ marginTop: 40 }}>
        {prevention.habits.map((h) => {
          const Icon = ICONS[h.icon as keyof typeof ICONS];
          return (
            <div key={h.icon} style={{ background: "var(--color-bg)", padding: "26px 22px" }}>
              <Icon size={30} strokeWidth={1.7} color="var(--color-accent)" aria-hidden />
              <h3 style={{ fontSize: 17, margin: "16px 0 6px", lineHeight: 1.2 }}>{t(h.title)}</h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  margin: 0,
                  color: "color-mix(in srgb, var(--color-text) 72%, transparent)",
                }}
              >
                {t(h.desc)}
              </p>
            </div>
          );
        })}
      </div>

      <div className="checklist-split" style={{ marginTop: 56 }}>
        <div>
          <h3 style={{ fontSize: 24, margin: "0 0 6px", lineHeight: 1.2 }}>
            {t(prevention.checklistTitle)}
          </h3>
          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.55,
              margin: "0 0 20px",
              color: "color-mix(in srgb, var(--color-text) 75%, transparent)",
            }}
          >
            {t(prevention.checklistLead)}
          </p>
          <div style={{ border: "2px solid var(--color-divider)" }}>
            {prevention.checklist.map((item, i) => {
              const on = !!checked[i];
              return (
                <button
                  key={item.vi}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setChecked((s) => ({ ...s, [i]: !s[i] }))}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "15px 18px",
                    background: on ? "var(--color-accent-100)" : "transparent",
                    border: 0,
                    borderTop: i ? "1px solid var(--color-divider)" : undefined,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: 22,
                      height: 22,
                      display: "grid",
                      placeItems: "center",
                      fontSize: 13,
                      fontWeight: 800,
                      border: `2px solid ${on ? "var(--color-accent)" : "var(--color-neutral-400)"}`,
                      background: on ? "var(--color-accent)" : "transparent",
                      color: "var(--color-bg)",
                    }}
                  >
                    {on ? "✓" : ""}
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      lineHeight: 1.4,
                      color: "var(--color-text)",
                      fontWeight: on ? 600 : 400,
                    }}
                  >
                    {t(item)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          style={{
            border: "2px solid var(--color-divider)",
            padding: "28px 26px",
            position: "sticky",
            top: 88,
          }}
        >
          <p
            style={{
              fontSize: 13,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
              margin: 0,
            }}
          >
            {t(prevention.progressKicker)}
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: 64,
              lineHeight: 1,
              color: "var(--color-accent)",
              margin: "12px 0 4px",
            }}
          >
            {pct}%
          </p>
          <p
            style={{
              fontSize: 14,
              margin: "0 0 18px",
              color: "color-mix(in srgb, var(--color-text) 75%, transparent)",
            }}
          >
            {prevention.progressOf(count, total, lang)}
          </p>
          <div
            style={{
              height: 10,
              background: "var(--color-neutral-200)",
              border: "1px solid var(--color-divider)",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${pct}%`,
                background: "var(--color-accent)",
                transition: "width .3s",
              }}
            />
          </div>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.5,
              margin: "18px 0 0",
              color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
            }}
          >
            {prevention.hint(pct, lang)}
          </p>
        </div>
      </div>
    </section>
  );
}
