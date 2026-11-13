import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "hi";
    const saved = window.localStorage.getItem("site-lang");
    return saved === "en" || saved === "hi" ? saved : "hi";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("site-lang", language);
    document.documentElement.lang = language === "hi" ? "hi" : "en";
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return { language: "hi", setLanguage: () => {} };
  }
  return ctx;
}
