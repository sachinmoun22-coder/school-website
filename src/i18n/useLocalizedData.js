import { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  schoolData as baseSchool,
  streamsData as baseStreams,
  highlightsData as baseHighlights,
  whyChooseData as baseWhy,
  facilitiesData as baseFacilities,
  achievementsCategories as baseAchCategories,
  transportRoutes as baseRoutes,
  navLinks as baseNavLinks,
} from "../data/schoolData";
import { homepageStatistics as baseStats } from "../data/homepageContent";
import { admissionPages as baseAdmissionPages } from "../data/admissions";
import { dataTranslations, navPathKeys } from "./dataTranslations";
import { content } from "./content";

export function useLocalizedData() {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "hi";
  const dt = dataTranslations[lang];
  const t = content[lang];

  return useMemo(() => {
    const schoolData = {
      ...baseSchool,
      ...dt.school,
      streams: lang === "hi" ? ["कला", "वाणिज्य", "विज्ञान"] : baseSchool.streams,
    };

    const streamsData = baseStreams.map((s) => ({
      ...s,
      name: dt.streams[s.id]?.name || s.name,
      description: dt.streams[s.id]?.description || s.description,
    }));

    const highlightsData = baseHighlights.map((h) => ({
      ...h,
      title: dt.highlights?.[h.id]?.title || h.title,
      description: dt.highlights?.[h.id]?.description || h.description,
    }));

    const whyChooseData = baseWhy.map((w) => ({
      ...w,
      title: dt.whyChoose?.[w.id]?.title || w.title,
      description: dt.whyChoose?.[w.id]?.description || w.description,
    }));

    const facilitiesData = baseFacilities.map((f) => ({
      ...f,
      name: dt.facilities?.[f.id]?.name || f.name,
      description: dt.facilities?.[f.id]?.description || f.description,
    }));

    const achievementsCategories = baseAchCategories.map((c) => ({
      ...c,
      title: dt.achievements?.categories?.[c.id]?.title || c.title,
      description: dt.achievements?.categories?.[c.id]?.description || c.description,
    }));

    const homepageStatistics = (dt.homepageStats || baseStats).map((s, i) => ({
      ...baseStats[i],
      ...s,
    }));

    const navLinks = baseNavLinks.map((l) => ({
      ...l,
      label: t.nav[navPathKeys[l.path]] || l.label,
    }));

    const admissionPages = baseAdmissionPages.map((p) => ({
      ...p,
      label: dt.admissionPages?.[p.path] || p.label,
    }));

    return {
      language: lang,
      t,
      schoolData,
      streamsData,
      highlightsData,
      whyChooseData,
      facilitiesData,
      achievementsCategories,
      homepageStatistics,
      navLinks,
      admissionPages,
      transportRoutes: baseRoutes,
    };
  }, [lang, dt, t]);
}
