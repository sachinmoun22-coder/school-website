import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Sparkles, X, User } from "lucide-react";
import { facilitiesData, schoolData, streamsData, transportRoutes } from "../data/schoolData";
import { useLanguage } from "../context/LanguageContext";

const CHATBOT_AVATAR = "/images/school-chatbot-avatar.webp";
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const hasGroqApiKey = Boolean(GROQ_API_KEY && GROQ_API_KEY.trim());

const streamSubjects = {
  arts: "हिंदी, अंग्रेज़ी, इतिहास, राजनीति विज्ञान, भूगोल, अर्थशास्त्र, समाजशास्त्र, शारीरिक शिक्षा, गृह विज्ञान, चित्रकला / ललित कला, संस्कृत",
  commerce: "हिंदी, अंग्रेज़ी, लेखाशास्त्र, व्यवसाय अध्ययन, अर्थशास्त्र, गणित, शारीरिक शिक्षा, कंप्यूटर विज्ञान / सूचना प्रौद्योगिकी",
  science: "हिंदी, अंग्रेज़ी, भौतिकी, रसायन विज्ञान, जीव विज्ञान, गणित, शारीरिक शिक्षा, कंप्यूटर विज्ञान / सूचना प्रौद्योगिकी",
};

const streamSubjectsEn = {
  arts: "Hindi, English, History, Political Science, Geography, Economics, Sociology, Physical Education, Home Science, Drawing / Fine Arts, Sanskrit",
  commerce: "Hindi, English, Accountancy, Business Studies, Economics, Mathematics, Physical Education, Computer Science / Informatics Practices",
  science: "Hindi, English, Physics, Chemistry, Biology, Mathematics, Physical Education, Computer Science / Informatics Practices",
};

const feeDetailsHi = [
  "पूर्व-प्राथमिक (नर्सरी–केजी): प्रवेश शुल्क ₹5,000; तिमाही शुल्क ₹6,500",
  "प्राथमिक (कक्षा 1–5): प्रवेश शुल्क ₹6,000; तिमाही शुल्क ₹8,000",
  "माध्यमिक (कक्षा 6–10): प्रवेश शुल्क ₹7,500; तिमाही शुल्क ₹10,000",
  "उच्च माध्यमिक (कक्षा 11–12): प्रवेश शुल्क ₹9,000; तिमाही शुल्क ₹12,500",
];

const feeDetailsEn = [
  "Pre-Primary (Nursery–KG): Admission ₹5,000; Quarterly ₹6,500",
  "Primary (Grades 1–5): Admission ₹6,000; Quarterly ₹8,000",
  "Secondary (Grades 6–10): Admission ₹7,500; Quarterly ₹10,000",
  "Senior Secondary (Grades 11–12): Admission ₹9,000; Quarterly ₹12,500",
];

function buildSchoolContext(language) {
  const langRule =
    language === "en"
      ? "6. Always reply in clear, polite English only. Do not use Hinglish or mixed language."
      : "6. हमेशा केवल शुद्ध और स्पष्ट हिंदी में उत्तर दें। हिंग्लिश, रोमन हिंदी या मिली-जुली भाषा का उपयोग न करें।";

  return `You are a helpful assistant for S.B.S Sr.Sec. School Matour Kaithal. You ONLY answer questions related to this school.

SCHOOL INFORMATION:
- Name: ${schoolData.name}
- Location: ${schoolData.location}
- Principal: ${schoolData.principalName}
- Classes: Nursery to Class 12
- Board: Board of School Education Haryana (BSEH)
- School Code: ${schoolData.schoolCode}
- Streams (Class 11-12): ${schoolData.streams.join(", ")}
- Facilities: ${facilitiesData.map((f) => f.name).join(", ")}
- Transport Routes: ${transportRoutes.join(", ")}
- Email: ${schoolData.email}
- Phone: +91 ${schoolData.phone}
- Type: Co-educational Senior Secondary School
- Office hours: Monday to Saturday, 8:00 AM to 2:00 PM; Sunday closed.

RULES:
1. ONLY answer questions about this school (admissions, academics, facilities, contact, location, principal, transport, hostel, fees, timings, results, etc.)
2. If asked about anything else, politely decline and say you can only help with school-related queries.
3. Do not invent facts. For unconfirmed details such as current vacancies, approved fees, exact admission dates, or exam results, direct the user to the school office.
4. Be polite, professional, and concise.
5. Always refer to the school as "${schoolData.name}".
${langRule}
- Fee figures on the website are indicative references only and must be confirmed with the school office.
- Subject combinations are potential options and should be confirmed with the school office.`;
}

const uiText = {
  hi: {
    title: "एस.बी.एस. विद्यालय सहायक",
    status: "ऑनलाइन • केवल विद्यालय संबंधी प्रश्न",
    greeting:
      "नमस्ते! मैं एस.बी.एस. सीनियर सेकेंडरी स्कूल, मटौर कैथल का सहायक हूँ। आप प्रवेश, कक्षाएँ, विषय, शुल्क, सुविधाएँ, परिवहन, छात्रावास, समय या संपर्क जानकारी के बारे में पूछ सकते हैं।",
    placeholder: "प्रवेश, सुविधाएँ, परिवहन आदि के बारे में पूछें...",
    disclaimer: "मैं केवल एस.बी.एस. सीनियर सेकेंडरी स्कूल, मटौर कैथल से संबंधित प्रश्नों के उत्तर देता हूँ।",
    open: "चैट खोलें",
    close: "चैट बंद करें",
    typing: "उत्तर तैयार किया जा रहा है...",
    nonSchool:
      "मैं केवल एस.बी.एस. सीनियर सेकेंडरी स्कूल, मटौर कैथल से संबंधित प्रश्नों में आपकी सहायता कर सकता हूँ। कृपया प्रवेश, पढ़ाई, सुविधाएँ, परिवहन या संपर्क जानकारी के बारे में पूछें।",
    error:
      `क्षमा करें, अभी संपर्क में समस्या आ रही है। कृपया बाद में पुनः प्रयास करें या विद्यालय से सीधे ${schoolData.email} पर संपर्क करें।`,
  },
  en: {
    title: "S.B.S School Assistant",
    status: "Online • School queries only",
    greeting:
      "Hello! I am the assistant for S.B.S Sr.Sec. School, Matour Kaithal. You can ask about admissions, classes, subjects, fees, facilities, transport, hostel, timings, or contact information.",
    placeholder: "Ask about admissions, facilities, transport...",
    disclaimer: "I only answer questions about S.B.S Sr.Sec. School, Matour Kaithal.",
    open: "Open chat",
    close: "Close chat",
    typing: "Preparing a reply...",
    nonSchool:
      "I can only help with questions about S.B.S Sr.Sec. School, Matour Kaithal. Please ask about admissions, academics, facilities, transport, or contact details.",
    error:
      `Sorry, I am having trouble connecting right now. Please try again later or contact the school directly at ${schoolData.email}.`,
  },
};

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 px-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-2 w-2 rounded-full bg-forest-500"
          animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function Chatbot() {
  const { language } = useLanguage();
  const t = uiText[language] || uiText.hi;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => [
    { id: 1, role: "assistant", content: uiText.hi.greeting },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const prevLang = useRef(language);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    if (prevLang.current === language) return;
    prevLang.current = language;
    setMessages([{ id: Date.now(), role: "assistant", content: (uiText[language] || uiText.hi).greeting }]);
  }, [language]);

  const schoolContext = useMemo(() => buildSchoolContext(language), [language]);

  const isSchoolRelated = (question) => {
    const schoolKeywords = [
      "school", "sbs", "matour", "kaithal", "admission", "admissions", "academic", "academics",
      "facility", "facilities", "transport", "bus", "van", "hostel", "class", "classes",
      "nursery", "principal", "shri", "rambilash", "sharma", "fee", "fees", "result",
      "exam", "examination", "board", "bseh", "stream", "arts", "commerce", "science",
      "contact", "email", "phone", "address", "location", "village", "haryana",
      "playground", "laboratory", "lab", "classroom", "teacher", "staff", "student",
      "curriculum", "syllabus", "timing", "hour", "schedule", "calendar", "event",
      "vision", "mission", "history", "established", "code", "subject", "subjects",
      "10244", "ramgarh", "shimla", "kalasar", "mandi", "kheri", "bhalang", "singhwal", "sudkain",
      "website", "site", "11th", "12th", "vidyalaya", "padhai", "kaksha", "vishay", "suvidha",
      "shulk", "pradhanacharya", "pata", "sampark", "samay", "chhutti", "chhatravas", "parivahan",
      "pariksha", "pravesh", "स्कूल", "विद्यालय", "फीस", "दाखिला", "समय", "कक्षा", "विषय",
      "प्रवेश", "संपर्क", "पता", "प्रधानाचार्य", "छात्रावास", "परिवहन", "छुट्टी", "परिणाम", "सुविधा",
    ];
    const lowerQuestion = question.toLocaleLowerCase();
    return schoolKeywords.some((keyword) => lowerQuestion.includes(keyword));
  };

  const getOfflineSchoolAnswer = (question) => {
    const query = question.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const hasAny = (...terms) => terms.some((term) => query.includes(term));
    const hi = language === "hi";
    const schoolName = schoolData.name;
    const contactHi = `अधिक जानकारी के लिए कृपया विद्यालय कार्यालय से ${schoolData.phone} पर संपर्क करें या ${schoolData.email} पर ईमेल करें।`;
    const contactEn = `For more information, please contact the school office at ${schoolData.phone} or email ${schoolData.email}.`;

    if (hasAny("email", "e-mail", "gmail", "ईमेल")) {
      return hi ? `विद्यालय का ईमेल पता ${schoolData.email} है।` : `The school's email address is ${schoolData.email}.`;
    }
    if (hasAny("phone", "mobile", "call", "number", "contact", "sampark", "फोन", "मोबाइल", "संपर्क")) {
      return hi
        ? `विद्यालय का संपर्क नंबर +91 ${schoolData.phone} है और ईमेल पता ${schoolData.email} है।`
        : `The school contact number is +91 ${schoolData.phone} and the email address is ${schoolData.email}.`;
    }
    if (hasAny("address", "location", "where", "kahan", "pata", "पता", "स्थान", "कहाँ")) {
      return hi
        ? `${schoolName}, मटौर गाँव, कैथल, हरियाणा में स्थित है।`
        : `${schoolName} is located in Matour village, Kaithal, Haryana.`;
    }
    if (hasAny("timing", "hours", "open", "close", "sunday", "samay", "समय", "खुलता", "बंद")) {
      return hi
        ? "विद्यालय कार्यालय का समय सोमवार से शनिवार, सुबह 8:00 बजे से दोपहर 2:00 बजे तक है। रविवार को कार्यालय बंद रहता है।"
        : "Office hours are Monday to Saturday, 8:00 AM to 2:00 PM. The office remains closed on Sunday.";
    }
    if (hasAny("principal", "pradhanacharya", "प्रधानाचार्य")) {
      return hi
        ? `विद्यालय के प्रधानाचार्य ${schoolData.principalName} हैं।`
        : `The principal of the school is ${schoolData.principalName}.`;
    }
    if (hasAny("about", "school ke bare", "school ke baare", "विद्यालय के बारे", "जानकारी")) {
      return hi
        ? `${schoolName} एक सह-शिक्षा वरिष्ठ माध्यमिक विद्यालय है, जहाँ नर्सरी से कक्षा 12 तक शिक्षा दी जाती है और कक्षा 11–12 में कला, वाणिज्य व विज्ञान संकाय उपलब्ध हैं।`
        : `${schoolName} is a co-educational senior secondary school offering education from Nursery to Class 12, with Arts, Commerce, and Science streams in Classes 11–12.`;
    }
    if (hasAny("fee", "fees", "shulk", "शुल्क", "फीस")) {
      const details = (hi ? feeDetailsHi : feeDetailsEn).join("\n");
      return hi
        ? `वेबसाइट पर दिए गए सांकेतिक शुल्क विवरण:\n${details}\nयह स्वीकृत/वर्तमान शुल्क की पुष्टि नहीं है। ${contactHi}`
        : `Indicative fee references on the website:\n${details}\nThese are not confirmed approved fees. ${contactEn}`;
    }
    if (hasAny("subject", "vishay", "vishayon", "stream", "arts", "commerce", "science", "विषय", "संकाय")) {
      const requested = ["arts", "commerce", "science"].find((s) => query.includes(s));
      if (requested) {
        const nameMap = hi ? { arts: "कला", commerce: "वाणिज्य", science: "विज्ञान" } : { arts: "Arts", commerce: "Commerce", science: "Science" };
        const subjects = hi ? streamSubjects[requested] : streamSubjectsEn[requested];
        return hi
          ? `${nameMap[requested]} संकाय के संभावित विषय: ${subjects}। विषय संयोजन की पुष्टि विद्यालय कार्यालय से करें।`
          : `Potential subjects for ${nameMap[requested]} stream: ${subjects}. Please confirm subject combinations with the school office.`;
      }
      return hi
        ? `कक्षा 11–12 में कला, वाणिज्य और विज्ञान संकाय उपलब्ध हैं। कृपया बताएं कि आप किस संकाय के विषयों की जानकारी चाहते हैं।`
        : `Classes 11–12 offer Arts, Commerce, and Science streams. Please tell me which stream's subjects you want to know about.`;
    }
    if (hasAny("class", "classes", "grade", "nursery", "lkg", "ukg", "kaksha", "कक्षा")) {
      return hi
        ? `${schoolName} में नर्सरी से कक्षा 12 तक शिक्षा प्रदान की जाती है।`
        : `${schoolName} provides education from Nursery to Class 12.`;
    }
    if (hasAny("board", "bseh", "code", "affiliation", "बोर्ड")) {
      return hi
        ? `${schoolName}, हरियाणा विद्यालय शिक्षा बोर्ड (BSEH) से संबद्ध है। विद्यालय कोड ${schoolData.schoolCode} है।`
        : `${schoolName} is affiliated with the Board of School Education Haryana (BSEH). The school code is ${schoolData.schoolCode}.`;
    }
    if (hasAny("transport", "bus", "van", "route", "परिवहन", "बस")) {
      return hi
        ? `विद्यालय परिवहन में 5 बसें और 1 वैन उपलब्ध हैं। निर्धारित मार्ग: ${transportRoutes.join(", ")} तथा आसपास के अन्य गाँव। सटीक पिकअप स्थान और समय के लिए ${contactHi.replace("अधिक जानकारी के लिए कृपया ", "")}`
        : `School transport includes 5 buses and 1 van. Routes: ${transportRoutes.join(", ")} and other nearby villages. ${contactEn}`;
    }
    if (hasAny("facility", "facilities", "suvidha", "सुविधा", "सुविधाएँ")) {
      return hi
        ? `विद्यालय की उपलब्ध सुविधाएँ: ${facilitiesData.map((f) => f.name).join(", ")}।`
        : `Available facilities: ${facilitiesData.map((f) => f.name).join(", ")}.`;
    }
    if (hasAny("hostel", "chhatravas", "छात्रावास")) {
      return hi
        ? `विद्यालय में छात्रावास सुविधा उपलब्ध है। उपलब्धता और विवरण के लिए ${contactHi}`
        : `Hostel facility is available. ${contactEn} for availability and details.`;
    }
    if (hasAny("admission", "admissions", "enrol", "pravesh", "प्रवेश", "दाखिला")) {
      return hi
        ? `प्रवेश नर्सरी से कक्षा 12 तक के लिए उपलब्ध हैं। पात्रता, रिक्त सीटें और आवश्यक दस्तावेज़ कक्षा एवं सत्र के अनुसार बदल सकते हैं। ${contactHi}`
        : `Admissions are available from Nursery to Class 12. Eligibility, vacancies, and required documents may vary by class and session. ${contactEn}`;
    }
    if (hasAny("result", "exam", "examination", "pariksha", "परिणाम", "परीक्षा")) {
      return hi
        ? `वर्तमान परीक्षा कार्यक्रम और परिणाम की पुष्ट जानकारी वेबसाइट पर उपलब्ध नहीं है। ${contactHi}`
        : `Confirmed current exam schedules and results are not available on the website. ${contactEn}`;
    }

    return hi
      ? `इस प्रश्न की पुष्ट जानकारी उपलब्ध नहीं है। आप प्रवेश, कक्षाएँ, विषय, शुल्क, सुविधाएँ, परिवहन या संपर्क जानकारी के बारे में पूछ सकते हैं। ${contactHi}`
      : `Confirmed information for this question is not available. You can ask about admissions, classes, subjects, fees, facilities, transport, or contact details. ${contactEn}`;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    setMessages((prev) => [...prev, { id: Date.now(), role: "user", content: userMessage }]);

    if (!hasGroqApiKey) {
      const content = isSchoolRelated(userMessage) ? getOfflineSchoolAnswer(userMessage) : t.nonSchool;
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: Date.now() + 1, role: "assistant", content }]);
        setIsLoading(false);
      }, 500);
      return;
    }

    try {
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            { role: "system", content: schoolContext },
            { role: "user", content: userMessage },
          ],
          temperature: 0.3,
          max_tokens: 500,
        }),
      });

      if (!response.ok) throw new Error(`Groq API request failed with status ${response.status}`);
      const data = await response.json();
      const answer = data.choices?.[0]?.message?.content;

      if (answer) {
        setMessages((prev) => [...prev, { id: Date.now() + 1, role: "assistant", content: answer }]);
      } else {
        throw new Error("Invalid response");
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      const content = isSchoolRelated(userMessage) ? getOfflineSchoolAnswer(userMessage) : t.nonSchool;
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "assistant", content: content || t.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        className="chat-toggle fixed bottom-4 right-4 z-[70] flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-forest-800 to-forest-950 shadow-lg ring-2 ring-white/20 sm:bottom-6 sm:right-6"
        aria-label={isOpen ? t.close : t.open}
        initial={false}
        animate={isOpen ? { scale: 1, rotate: 0 } : { scale: [1, 1.05, 1], y: [0, -4, 0] }}
        transition={isOpen ? { duration: 0.25 } : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="h-6 w-6 text-white" />
            </motion.span>
          ) : (
            <motion.span key="open" className="relative flex h-full w-full items-center justify-center" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }} transition={{ duration: 0.2 }}>
              <motion.span
                className="absolute inset-0 rounded-full bg-accent-400/30"
                animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              />
              <img src={CHATBOT_AVATAR} alt="" className="h-full w-full bg-black object-contain" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="chat-window fixed bottom-20 left-3 right-3 z-[55] flex h-[70vh] max-h-[calc(100dvh-9.5rem)] w-auto flex-col overflow-hidden rounded-2xl border border-border-light bg-white shadow-2xl sm:bottom-24 sm:left-auto sm:right-6 sm:h-[520px] sm:max-h-[calc(100dvh-6rem)] sm:w-[390px]"
            role="dialog"
            aria-label={t.title}
          >
            <motion.div
              className="relative overflow-hidden border-b border-forest-700 bg-gradient-to-r from-forest-900 via-forest-800 to-forest-700 p-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-400/20 blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div className="relative" animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                    <img src={CHATBOT_AVATAR} alt="" className="h-10 w-10 rounded-xl bg-black object-contain ring-2 ring-white/20" />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-forest-800 bg-green-400" />
                  </motion.div>
                  <div>
                    <h3 className="flex items-center gap-1.5 text-sm font-semibold">
                      {t.title}
                      <Sparkles className="h-3.5 w-3.5 text-accent-300" aria-hidden="true" />
                    </h3>
                    <p className="text-xs text-forest-100">{t.status}</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
                  aria-label={t.close}
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-cream-50/60 to-white p-4">
              <AnimatePresence initial={false}>
                {messages.map((message, idx) => (
                  <motion.div
                    key={message.id}
                    layout
                    initial={{ opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.28, delay: idx === messages.length - 1 ? 0.02 : 0 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                        message.role === "user"
                          ? "rounded-br-md bg-gradient-to-br from-forest-800 to-forest-900 text-white"
                          : "rounded-bl-md border border-border-light bg-white text-dark-900"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.role === "assistant" && (
                          <img src={CHATBOT_AVATAR} alt="" className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-black object-contain" />
                        )}
                        <div className="min-w-0 text-sm leading-relaxed whitespace-pre-wrap">{message.content}</div>
                        {message.role === "user" && (
                          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-border-light bg-white px-4 py-3 shadow-sm">
                    <Bot className="h-4 w-4 text-forest-600" aria-hidden="true" />
                    <TypingDots />
                    <span className="sr-only">{t.typing}</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="border-t border-border-light bg-white p-4">
              <div className="flex min-w-0 gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.placeholder}
                  className="min-w-0 flex-1 rounded-xl border border-border-light bg-cream-100 px-4 py-2.5 text-dark-900 placeholder:text-dark-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-forest-500"
                  disabled={isLoading}
                  aria-label={t.placeholder}
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="flex shrink-0 items-center justify-center rounded-xl bg-forest-800 px-4 py-2.5 text-white transition-colors hover:bg-forest-900 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label={language === "hi" ? "संदेश भेजें" : "Send message"}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
              <p className="mt-2 text-center text-xs text-dark-500">{t.disclaimer}</p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
