"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { Bi, Lang } from "./content";

type LangContextValue = {
  lang: Lang;
  toggle: () => void;
  t: (bi: Bi) => string;
  pick: <T>(o: { vi: T; en: T }) => T;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");
  const toggle = useCallback(() => {
    setLang((l) => (l === "vi" ? "en" : "vi"));
  }, []);
  const t = useCallback((bi: Bi) => bi[lang], [lang]);
  const pick = useCallback(
    function pick<T>(o: { vi: T; en: T }): T {
      return o[lang];
    },
    [lang]
  );
  return (
    <LangContext.Provider value={{ lang, toggle, t, pick }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
