export const schoolData = {
  name: "S.B.S Sr.Sec. School Matour Kaithal",
  shortName: "S.B.S Sr.Sec. School",
  tagline: "Matour Kaithal",
  location: "Matour village, Kaithal, Haryana",
  email: "sbsmatour@gmail.com",
  phone: "7015056542",
  schoolCode: "10244",
  schoolType: "Senior Secondary School",
  educationLevel: "Nursery to 12th",
  streams: ["Arts", "Commerce", "Science"],
  board: "BSEH",
  introduction: "S.B.S Sr.Sec. School Matour Kaithal is a senior secondary school in Kaithal, Haryana. The school provides education from Nursery to Class 12 and offers Arts, Commerce and Science streams at the senior secondary level.",
  about: "S.B.S Sr.Sec. School is located in Matour village, Kaithal. The school provides quality school education from Nursery to the senior secondary level.",
  principalName: "Shri Rambilash Sharma",
  heroHeadline: "Nurturing Young Minds, Building Bright Futures",
  placeholderText: "Information will be updated soon.",
  currentYear: new Date().getFullYear(),
};

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/academics", label: "Academics" },
  { path: "/facilities", label: "Facilities" },
  { path: "/achievements", label: "Achievements" },
  { path: "/gallery", label: "Gallery" },
  { path: "/admissions", label: "Admissions" },
  { path: "/news", label: "News & Notices" },
  { path: "/contact", label: "Contact" },
];

// High-quality photos from public/images/ (3-3.8MB each)
export const hqImages = {
  building: "/images/1000041512.png",
  classroom: "/images/1000041517.png",
  campus: "/images/1000041518.png",
  facilities: "/images/1000041519.png",
  entrance: "/images/1000041461.jpg",
};

export const streamsData = [
  {
    id: "arts",
    name: "Arts",
    icon: "Palette",
    description: "Explore humanities, languages, and creative disciplines. Develop critical thinking, communication skills, and cultural awareness.",
    image: hqImages.campus,
  },
  {
    id: "commerce",
    name: "Commerce",
    icon: "Briefcase",
    description: "Build foundations in business, finance, and economics. Prepare for careers in accounting, management, and entrepreneurship.",
    image: hqImages.classroom,
  },
  {
    id: "science",
    name: "Science",
    icon: "Microscope",
    description: "Discover the natural world through physics, chemistry, and biology. Lay groundwork for engineering, medicine, and research careers.",
    image: hqImages.facilities,
  },
];

export const galleryImages = [
  { id: 1, src: hqImages.building, alt: "School building exterior view", caption: "School Building" },
  { id: 2, src: hqImages.classroom, alt: "Classroom learning environment", caption: "Classroom" },
  { id: 3, src: hqImages.campus, alt: "School campus and grounds", caption: "Campus View" },
  { id: 4, src: hqImages.facilities, alt: "School facilities", caption: "Facilities" },
  { id: 5, src: hqImages.entrance, alt: "School entrance", caption: "Entrance" },
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

export const facilitiesData = [
  {
    id: 1,
    name: "Classrooms",
    description: "35 spacious, well-ventilated classrooms designed for effective learning from Nursery to Class 12.",
    image: hqImages.classroom,
  },
  {
    id: 2,
    name: "Science Laboratory",
    description: "Well-equipped laboratory for Physics, Chemistry, and Biology practical work for senior secondary students.",
    image: hqImages.facilities,
  },
  {
    id: 3,
    name: "Transport Facility",
    description: "5 buses and 1 van covering routes to Ramgarh, Shimla, Kalasar, Mandi, Kheri, Bhalang, Singhwal, Sudkain, and other nearby villages.",
    image: hqImages.campus,
  },
  {
    id: 4,
    name: "Hostel Facility",
    description: "Hostel accommodation available for students requiring residential facilities.",
    image: hqImages.entrance,
  },
  {
    id: 5,
    name: "Playground",
    description: "Outdoor sports ground for physical education and recreational activities.",
    image: hqImages.campus,
  },
  {
    id: 6,
    name: "School Campus",
    description: "Safe and green campus environment for holistic student development.",
    image: hqImages.building,
  },
];

export const whyChooseData = [
  {
    id: 1,
    icon: "GraduationCap",
    title: "Academic Learning",
    description: "Strong academic foundation with BSEH curriculum from Nursery to Class 12, including Arts, Commerce, and Science streams at senior secondary level.",
  },
  {
    id: 2,
    icon: "Users",
    title: "Holistic Development",
    description: "Focus on overall student growth including academics, character building, and life skills.",
  },
  {
    id: 3,
    icon: "Palette",
    title: "Creativity & Activities",
    description: "Opportunities for creative expression and extracurricular engagement alongside studies.",
  },
  {
    id: 4,
    icon: "Target",
    title: "Values & Discipline",
    description: "Emphasis on discipline, moral values, and responsible citizenship in a supportive environment.",
  },
];

export const highlightsData = [
  {
    id: 1,
    icon: "GraduationCap",
    title: "Learning & Academics",
    description: "BSEH-affiliated curriculum from Nursery to Class 12 with three streams at senior secondary level.",
  },
  {
    id: 2,
    icon: "Users",
    title: "Student Development",
    description: "Focus on individual growth, character building, and preparing young minds for future challenges.",
  },
  {
    id: 3,
    icon: "Palette",
    title: "School Activities",
    description: "Balanced approach with curricular and co-curricular activities for well-rounded education.",
  },
  {
    id: 4,
    icon: "Target",
    title: "Supportive Environment",
    description: "Safe, disciplined campus fostering respect, responsibility, and academic excellence.",
  },
];

export const transportRoutes = [
  "Ramgarh", "Shimla", "Kalasar", "Mandi", "Kheri", "Bhalang", "Singhwal", "Sudkain"
];

export const admissionInfo = {
  title: "Admission Information",
  introduction: "Thank you for your interest in S.B.S Sr.Sec. School Matour Kaithal. We welcome inquiries from prospective students and parents for admission from Nursery to Class 12.",
  checklist: [
    "Admission opening dates and deadlines for the academic session",
    "Age criteria and eligibility for each class (Nursery to Class 12)",
    "Required documents (transfer certificate, mark sheets, photographs, birth certificate, etc.)",
    "Admission fees and tuition structure",
    "Stream eligibility criteria for Class 11 (Arts, Commerce, Science)",
    "Seat availability in each class",
    "Admission process and application procedure",
  ],
  contactCTA: "For detailed admission information, please contact the school directly.",
};

export const newsData = [
  // Placeholder - will be populated when actual notices are available
];