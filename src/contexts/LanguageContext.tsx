"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, type Lang } from "@/i18n/translations";

type AnyTranslation = typeof translations["en"] | typeof translations["vi"];

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: AnyTranslation;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations["en"],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
