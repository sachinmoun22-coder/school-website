export const schoolData = {
  name: "Shaheed Bhagat Singh Sr. Sec. School, Matour",
  shortName: "SBS Sr. Sec. School",
  location: "Matour, Kaithal, Haryana, India",
  email: "sbsmatour@gmail.com",
  phone: "7015056542",
  phoneVerified: false,
  schoolCode: "10244",
  schoolType: "Senior Secondary School",
  educationLevel: "Up to Class 12",
  streams: ["Arts", "Commerce", "Science"],
  board: "BSEH",
  introduction: "Shaheed Bhagat Singh Sr. Sec. School, Matour is a senior secondary school in Kaithal, Haryana. The school provides education up to Class 12 and has Arts, Commerce and Science streams.",
  about: "S.B.S. Sr. Sec. School is located in Matour, Kaithal. The school provides school education up to the senior secondary level.",
  heroHeadline: "Building Knowledge. Inspiring Futures.",
  placeholderText: "Information will be updated soon.",
  currentYear: new Date().getFullYear(),
};

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/academics", label: "Academics" },
  { path: "/achievements", label: "Achievements" },
  { path: "/gallery", label: "Gallery" },
  { path: "/admission", label: "Admission" },
  { path: "/contact", label: "Contact" },
];

export const streamsData = [
  {
    id: "arts",
    name: "Arts",
    icon: "Palette",
    description: "Explore humanities, languages, and creative disciplines.",
    image: "/images/academics-arts.jpg",
  },
  {
    id: "commerce",
    name: "Commerce",
    icon: "Briefcase",
    description: "Build foundations in business, finance, and economics.",
    image: "/images/academics-commerce.jpg",
  },
  {
    id: "science",
    name: "Science",
    icon: "Microscope",
    description: "Discover the natural world through physics, chemistry, and biology.",
    image: "/images/academics-science.jpg",
  },
];

export const galleryImages = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "School campus view", caption: "Campus View" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "Classroom environment", caption: "Classroom" },
  { id: 3, src: "/images/gallery-3.jpg", alt: "Library interior", caption: "Library" },
  { id: 4, src: "/images/gallery-4.jpg", alt: "Science laboratory", caption: "Science Lab" },
  { id: 5, src: "/images/gallery-5.jpg", alt: "School building exterior", caption: "School Building" },
  { id: 6, src: "/images/gallery-6.jpg", alt: "Playground area", caption: "Playground" },
  { id: 7, src: "/images/gallery-7.jpg", alt: "Computer lab", caption: "Computer Lab" },
  { id: 8, src: "/images/gallery-8.jpg", alt: "Assembly hall", caption: "Assembly Hall" },
];

export const achievementsCategories = [
  {
    id: "awards",
    title: "Awards & Recognition",
    items: [],
  },
  {
    id: "academic",
    title: "Academic Achievements",
    items: [],
  },
  {
    id: "student",
    title: "Student Achievements",
    items: [],
  },
  {
    id: "sports",
    title: "Sports & Extracurricular",
    items: [],
  },
];

export const admissionInfo = {
  title: "Admission Information",
  introduction: "Thank you for your interest in Shaheed Bhagat Singh Sr. Sec. School, Matour. We welcome inquiries from prospective students and parents.",
  checklist: [
    "Admission opening dates and deadlines",
    "Age criteria for each class",
    "Required documents for admission",
    "Admission fees and tuition structure",
    "Eligibility requirements for different streams (Arts, Commerce, Science)",
    "Seat availability",
    "Online admission process (if available)",
  ],
  contactCTA: "For detailed admission information, please contact the school directly.",
};