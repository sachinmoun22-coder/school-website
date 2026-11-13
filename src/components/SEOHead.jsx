import { useEffect } from "react";

const SITE_NAME = "S.B.S Sr.Sec. School Matour Kaithal";
const SCHOOL_NAME = "S.B.S Sr.Sec. School Matour Kaithal";
const DEFAULT_OG_IMAGE = "/images/school-main-matour-kaithal.webp";
const SCHOOL_URL = "/";
const ADDRESS = {
  streetAddress: "Matour village",
  addressLocality: "Kaithal",
  addressRegion: "Haryana",
  postalCode: "",
  addressCountry: "IN",
};

function setMeta({ name, property, content }) {
  if (!content) return;
  const existing =
    (name && document.querySelector(`meta[name="${name}"]`)) ||
    (property && document.querySelector(`meta[property="${property}"]`));
  if (existing) {
    existing.setAttribute("content", content);
  } else {
    const meta = document.createElement("meta");
    if (name) meta.setAttribute("name", name);
    if (property) meta.setAttribute("property", property);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
  }
}

function setLink({ rel, href }) {
  const existing = document.querySelector(`link[rel="${rel}"]`);
  if (existing) {
    existing.setAttribute("href", href);
  } else {
    const link = document.createElement("link");
    link.setAttribute("rel", rel);
    link.setAttribute("href", href);
    document.head.appendChild(link);
  }
}

function setJsonLd(scriptId, data) {
  let el = document.getElementById(scriptId);
  if (el) {
    el.textContent = JSON.stringify(data);
    return;
  }
  el = document.createElement("script");
  el.id = scriptId;
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
}) {
  useEffect(() => {
    if (title) document.title = title;

    setMeta({ name: "description", content: description });
    setMeta({ property: "og:title", content: title || SITE_NAME });
    setMeta({ property: "og:description", content: description });
    setMeta({ property: "og:type", content: ogType });
    setMeta({ property: "og:image", content: ogImage });
    setMeta({ property: "og:site_name", content: SITE_NAME });
    setMeta({ name: "twitter:title", content: title || SITE_NAME });
    setMeta({ name: "twitter:description", content: description });
    setMeta({ name: "twitter:card", content: "summary_large_image" });
    setMeta({ name: "twitter:image", content: ogImage });

    if (canonical) setLink({ rel: "canonical", href: canonical });

    if (noIndex) {
      setMeta({ name: "robots", content: "noindex,nofollow" });
    } else {
      const existingRobots = document.querySelector('meta[name="robots"]');
      if (!existingRobots) {
        setMeta({ name: "robots", content: "index,follow" });
      }
    }

    const schoolSchema = {
      "@context": "https://schema.org",
      "@type": "School",
      "@id": SCHOOL_URL + "#school",
      name: SCHOOL_NAME,
      url: SCHOOL_URL,
      telephone: "+917015056542",
      email: "sachinmoun22@gmail.com",
      address: {
        "@type": "PostalAddress",
        ...ADDRESS,
      },
      description:
        "S.B.S Sr.Sec. School Matour Kaithal is a BSEH-affiliated co-educational senior secondary school in Matour village, Kaithal, Haryana, India. Offers education from Nursery to Class 12 with Arts, Commerce and Science streams. School Code: 10244.",
      educationalOrganization: {
        "@type": "EducationalOrganization",
        name: SCHOOL_NAME,
      },
      founder: {},
      alumni: [],
      sameAs: [],
      logo: "/images/school-logo-matour-kaithal.webp",
      image: "/images/school-main-matour-kaithal.webp",
      areaServed: [
        {
          "@type": "City",
          name: "Kaithal",
        },
        {
          "@type": "City",
          name: "Matour",
        },
        {
          "@type": "City",
          name: "Haryana",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+917015056542",
          contactType: "admissions",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    };

    setJsonLd("schema-school", schoolSchema);
  }, [title, description, canonical, ogImage, ogType, noIndex]);

  return null;
}

export default SEOHead;
