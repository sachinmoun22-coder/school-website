import { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "./content";

export function useSiteText() {
  const { language } = useLanguage();
  return useMemo(() => content[language] || content.hi, [language]);
}

export function pick(language, en, hi) {
  return language === "en" ? en : hi;
}
