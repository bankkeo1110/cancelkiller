"use client";

import { nav } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Nav() {
  const { lang, toggle, t } = useLang();
  return (
    <nav className="nav">
      <span className="nav-brand">Vững Tâm</span>
      {nav.links.map((l) => (
        <a key={l.href} className="nav-link" href={l.href}>
          {t(l.label)}
        </a>
      ))}
      <button
        type="button"
        className="btn btn-secondary"
        onClick={toggle}
        aria-label="Language"
        style={{ minWidth: 52, padding: "9px 12px", lineHeight: 1.5, justifyContent: "flex-start" }}
      >
        {lang === "vi" ? "EN" : "VI"}
      </button>
      <a
        href="#danh-gia"
        className="btn btn-primary"
        style={{ padding: "9px 16px", lineHeight: 1.5 }}
      >
        {t(nav.cta)}
      </a>
    </nav>
  );
}
