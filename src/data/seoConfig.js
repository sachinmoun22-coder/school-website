export const siteName = "S.B.S Sr.Sec. School Matour Kaithal";
export const schoolName = "S.B.S Sr.Sec. School Matour Kaithal";
export const schoolShort = "S.B.S Sr.Sec. School";
export const location = "Matour village, Kaithal, Haryana, India";
export const city = "Kaithal";
export const state = "Haryana";
export const country = "IN";
export const phone = "+917015056542";
export const phoneDisplay = "+91 7015056542";
export const email = "sbsmatour@gmail.com";
export const schoolCode = "10244";
export const board = "Board of School Education Haryana (BSEH)";
export const principal = "Shri Rambilash Sharma";

export const seoPages = {
  "/": {
    title: `${schoolName} | Best Senior Secondary School in Kaithal Haryana`,
    description:
      "S.B.S Sr.Sec. School Matour Kaithal is a BSEH-affiliated senior secondary school in Kaithal, Haryana offering education from Nursery to Class 12 with Arts, Commerce and Science streams. School Code: 10244. Admissions open for Nursery to Class 12.",
    canonical: "/",
  },
  "/about": {
    title: `About ${schoolShort} Matour Kaithal | Our Story, Values & Facilities`,
    description:
      "Learn about S.B.S Sr.Sec. School Matour Kaithal — a co-educational senior secondary school in Matour village, Kaithal, Haryana. Affiliated with BSEH (School Code: 10244), offering Nursery to Class 12 with Arts, Commerce and Science streams.",
    canonical: "/about",
  },
  "/academics": {
    title: `Academic Programs | ${schoolShort} Matour Kaithal`,
    description:
      "Academics at S.B.S Sr.Sec. School Matour Kaithal — BSEH curriculum from Nursery to Class 12 with Arts, Commerce and Science streams at senior secondary level (Class 11-12). School Code: 10244, Kaithal, Haryana.",
    canonical: "/academics",
  },
  "/facilities": {
    title: `School Facilities | ${schoolShort} Matour Kaithal`,
    description:
      "Explore the campus facilities at S.B.S Sr.Sec. School Matour Kaithal — classrooms, science laboratory, transport, hostel, playground and more in Matour, Kaithal, Haryana. BSEH School Code: 10244.",
    canonical: "/facilities",
  },
  "/achievements": {
    title: `Achievements & Recognition | ${schoolShort} Matour Kaithal`,
    description:
      "Achievements and recognitions of S.B.S Sr.Sec. School Matour Kaithal — academics, sports, cultural and extracurricular accomplishments. BSEH-affiliated school in Kaithal, Haryana, School Code: 10244.",
    canonical: "/achievements",
  },
  "/gallery": {
    title: `School Gallery | ${schoolShort} Matour Kaithal`,
    description:
      "Photo gallery of S.B.S Sr.Sec. School Matour Kaithal — campus, classrooms, functions, celebrations and student activities in Kaithal, Haryana. BSEH School Code: 10244.",
    canonical: "/gallery",
  },
  "/admissions": {
    title: `Admissions | ${schoolShort} Matour Kaithal | Nursery to Class 12`,
    description:
      "Admissions at S.B.S Sr.Sec. School Matour Kaithal — Nursery to Class 12, Arts Commerce Science streams, BSEH-affiliated. Contact the school office for admission procedure, fees and documents in Kaithal, Haryana.",
    canonical: "/admissions",
  },
  "/admissions/procedure": {
    title: `Admission Procedure | ${schoolShort} Matour Kaithal`,
    description:
      "Step-by-step admission procedure at S.B.S Sr.Sec. School Matour Kaithal — application, documents, eligibility and confirmation. BSEH School Code: 10244, Kaithal, Haryana.",
    canonical: "/admissions/procedure",
  },
  "/admissions/eligibility": {
    title: `Eligibility & Age Criteria | ${schoolShort} Matour Kaithal`,
    description:
      "Eligibility and age criteria for Nursery to Class 12 at S.B.S Sr.Sec. School Matour Kaithal. Confirm current criteria with the school office in Matour, Kaithal, Haryana.",
    canonical: "/admissions/eligibility",
  },
  "/admissions/fee-structure": {
    title: `Fee Structure | ${schoolShort} Matour Kaithal`,
    description:
      "Indicative fee structure and required documents for admission at S.B.S Sr.Sec. School Matour Kaithal. Confirm current fees with the school office, Kaithal, Haryana. School Code: 10244.",
    canonical: "/admissions/fee-structure",
  },
  "/admissions/documents-faq": {
    title: `Required Documents & FAQs | ${schoolShort} Matour Kaithal`,
    description:
      "Document checklist and FAQs for admission at S.B.S Sr.Sec. School Matour Kaithal — Nursery to Class 12. Confirm document requirements with the school office in Kaithal, Haryana.",
    canonical: "/admissions/documents-faq",
  },
  "/news": {
    title: `News & Notices | ${schoolShort} Matour Kaithal`,
    description:
      "Latest news, announcements and circulars from S.B.S Sr.Sec. School Matour Kaithal — academic calendar, admission circulars, examination notices and holiday announcements. Kaithal, Haryana.",
    canonical: "/news",
  },
  "/contact": {
    title: `Contact ${schoolShort} Matour Kaithal | Admission Inquiry`,
    description:
      "Contact S.B.S Sr.Sec. School Matour Kaithal — Matour village, Kaithal, Haryana. Phone: +91 7015056542, Email: sbsmatour@gmail.com. Admission inquiry for Nursery to Class 12. BSEH School Code: 10244.",
    canonical: "/contact",
  },
};

export function getSEO(pathname) {
  return seoPages[pathname] || seoPages["/"];
}
