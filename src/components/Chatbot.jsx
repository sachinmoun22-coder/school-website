import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Loader2, User } from "lucide-react";
import { facilitiesData, schoolData, streamsData, transportRoutes } from "../data/schoolData";

const CHATBOT_AVATAR = "/images/School_Photos/ChatGPT%20Image%20Nov%202,%202026,%2010_43_19%20AM.jpg";
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const hasGroqApiKey = Boolean(GROQ_API_KEY && GROQ_API_KEY.trim());

const SCHOOL_CONTEXT = `
You are a helpful assistant for S.B.S Sr.Sec. School Matour Kaithal. You ONLY answer questions related to this school.

SCHOOL INFORMATION:
- Name: S.B.S Sr.Sec. School Matour Kaithal
- Location: Matour village, Kaithal, Haryana
- Principal: Shri Rambilash Sharma
- Classes: Nursery to Class 12
- Board: Board of School Education Haryana (BSEH)
- School Code: 10244
- Streams (Class 11-12): Arts, Commerce, Science
- Facilities: 35 classrooms, 1 science laboratory, transport (5 buses + 1 van), hostel facility, playground
- Transport Routes: Ramgarh, Shimla, Kalasar, Mandi, Kheri, Bhalang, Singhwal, Sudkain, and other nearby villages
- Email: sbsmatour@gmail.com
- Phone: +91 7015056542
- Type: Co-educational Senior Secondary School

RULES:
1. ONLY answer questions about this school (admissions, academics, facilities, contact, location, principal, transport, hostel, fees, timings, results, etc.)
2. If asked about anything else (politics, other schools, general knowledge, coding, personal advice, etc.), politely decline and say you can only help with school-related queries
3. Do not invent facts. For unconfirmed details such as current vacancies, approved fees, exact admission dates, or exam results, direct the user to the school office.
4. Be polite, professional, and concise
5. Always refer to the school as "S.B.S Sr.Sec. School Matour Kaithal"
6. Answer in the language used by the user, including Hindi or Hinglish. Give a specific answer whenever the information is available; only direct them to the school for unconfirmed details.
- Office hours: Monday to Saturday, 8:00 AM to 2:00 PM; Sunday closed.
- Senior secondary streams: Arts, Commerce, and Science for Classes 11-12.
- Potential Arts subject areas: Hindi, English, History, Political Science, Geography, Economics, Sociology, Physical Education, Home Science, Drawing / Fine Arts, Sanskrit.
- Potential Commerce subject areas: Hindi, English, Accountancy, Business Studies, Economics, Mathematics, Physical Education, Computer Science / Informatics Practices.
- Potential Science subject areas: Hindi, English, Physics, Chemistry, Biology, Mathematics, Physical Education, Computer Science / Informatics Practices.
- Subject combinations listed on the website are potential options and should be confirmed with the school office.
- Fee figures on the admissions page are indicative references only and are not confirmed approved fees.
- Website fee references: Nursery-KG admission ₹5,000 and quarterly ₹6,500; Grades 1-5 admission ₹6,000 and quarterly ₹8,000; Grades 6-10 admission ₹7,500 and quarterly ₹10,000; Grades 11-12 admission ₹9,000 and quarterly ₹12,500.
`;

const streamSubjects = {
  arts: "Hindi, English, History, Political Science, Geography, Economics, Sociology, Physical Education, Home Science, Drawing / Fine Arts, and Sanskrit",
  commerce: "Hindi, English, Accountancy, Business Studies, Economics, Mathematics, Physical Education, and Computer Science / Informatics Practices",
  science: "Hindi, English, Physics, Chemistry, Biology, Mathematics, Physical Education, and Computer Science / Informatics Practices",
};

const feeDetails = [
  "Pre-Primary (Nursery-KG): admission ₹5,000; quarterly ₹6,500",
  "Primary (Grades 1-5): admission ₹6,000; quarterly ₹8,000",
  "Secondary (Grades 6-10): admission ₹7,500; quarterly ₹10,000",
  "Senior Secondary (Grades 11-12): admission ₹9,000; quarterly ₹12,500",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I'm the virtual assistant for S.B.S Sr.Sec. School Matour Kaithal. How can I help you today? You can ask about admissions, academics, facilities, transport, hostel, or contact information."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const isSchoolRelated = (question) => {
    const schoolKeywords = [
      'school', 'sbs', 'matour', 'kaithal', 'admission', 'admissions', 'academic', 'academics',
      'facility', 'facilities', 'transport', 'bus', 'van', 'hostel', 'class', 'classes',
      'nursery', 'principal', 'shri', 'rambilash', 'sharma', 'fee', 'fees', 'result',
      'result', 'exam', 'examination', 'board', 'bseh', 'stream', 'arts', 'commerce', 'science',
      'contact', 'email', 'phone', 'address', 'location', 'village', 'haryana',
      'playground', 'laboratory', 'lab', 'classroom', 'teacher', 'staff', 'student',
      'curriculum', 'syllabus', 'timing', 'hour', 'schedule', 'calendar', 'event',
      'principal', 'message', 'vision', 'mission', 'history', 'established', 'code',
      '10244', 'ramgarh', 'shimla', 'kalasar', 'mandi', 'kheri', 'bhalang', 'singhwal', 'sudkain',
      'website', 'site', 'subject', 'subjects', 'vishay', '11th', '12th', 'स्कूल', 'विद्यालय',
      'फीस', 'दाखिला', 'समय', 'कक्षा', 'विषय', 'प्रवेश', 'संपर्क', 'पता', 'प्रधानाचार्य',
      'छात्रावास', 'परिवहन', 'छुट्टी', 'परिणाम', 'सुविधा'
    ];

    const lowerQuestion = question.toLocaleLowerCase();
    const hindiKeywords = [
      'vidyalaya', 'school mein', 'school ka', 'school ki', 'hamare school',
      'padhai', 'kaksha', 'vishay', 'vishayon', 'suvidha', 'shulk', 'pradhanacharya',
      'pata', 'sampark', 'samay', 'chhutti', 'chhatravas', 'parivahan', 'pariksha',
      'pravesh', 'kaun si class', 'kitni class', 'kahan hai', 'kab khulta', 'kab band',
    ];

    return [...schoolKeywords, ...hindiKeywords].some(keyword => lowerQuestion.includes(keyword));
  };

  const getOfflineSchoolAnswer = (question) => {
    const query = question.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const hasAny = (...terms) => terms.some(term => query.includes(term));
    const schoolName = schoolData.name;
    const contact = `School office se ${schoolData.phone} par sampark karein ya ${schoolData.email} par email bhejein.`;

    if (hasAny("email", "e-mail", "gmail", "ईमेल")) {
      return `School ka email address ${schoolData.email} hai.`;
    }
    if (hasAny("phone", "mobile", "call", "number", "contact", "sampark", "फोन", "मोबाइल")) {
      return `School ka contact number +91 ${schoolData.phone} hai aur email ${schoolData.email} hai.`;
    }
    if (hasAny("address", "location", "where", "kahan", "pata", "पता", "स्थान")) {
      return `${schoolName}, Matour village, Kaithal, Haryana mein sthit hai.`;
    }
    if (hasAny("timing", "hours", "open", "close", "sunday", "samay", "kab khulta", "kab band", "समय")) {
      return "Office hours Monday se Saturday, 8:00 AM se 2:00 PM hain. Sunday ko office band rehta hai.";
    }
    if (hasAny("principal", "pradhanacharya", "प्रधानाचार्य")) {
      return `School ke principal ${schoolData.principalName} hain.`;
    }
    if (hasAny("about school", "tell me about", "school ke bare", "school ke baare", "school kya hai", "website par kya")) {
      return `${schoolData.introduction} ${schoolData.schoolType} hai aur yahan ${schoolData.streams.join(", ")} streams available hain.`;
    }
    if (hasAny("fee", "fees", "shulk", "शुल्क")) {
      return `Website par diye gaye indicative fee references:\n${feeDetails.join("\n")}\nYe approved/current fees ki pushti nahi hain; exact fees ke liye ${contact}`;
    }
    if (hasAny("subject", "vishay", "vishayon", "arts", "commerce", "science", "stream", "विषय")) {
      const requestedStream = Object.keys(streamSubjects).find(stream => query.includes(stream));
      if (requestedStream) {
        return `${requestedStream[0].toUpperCase()}${requestedStream.slice(1)} Stream ke potential subject areas: ${streamSubjects[requestedStream]}. Subject combinations school office se confirm karein.`;
      }
      return `Classes 11-12 mein ${streamsData.map(stream => stream.name).join(", ")} streams hain. Aap kis stream ke subjects ke baare mein pooch rahe hain?`;
    }
    if (hasAny("class", "classes", "grade", "nursery", "lkg", "ukg", "kaksha", "कक्षा")) {
      return `${schoolName} mein education Nursery se Class 12 tak hai.`;
    }
    if (hasAny("board", "bseh", "code", "affiliation", "बोर्ड")) {
      return `${schoolName}, Board of School Education Haryana (BSEH) se affiliated hai. School code ${schoolData.schoolCode} hai.`;
    }
    if (hasAny("transport", "bus", "van", "route", "parivahan", "परिवहन")) {
      return `School transport mein 5 buses aur 1 van hain. Listed routes: ${transportRoutes.join(", ")} aur aas-paas ke anya gaon. Exact pickup point aur timing ke liye school office se confirm karein.`;
    }
    if (hasAny("facility", "facilities", "suvidha", "सुविधा")) {
      return `Website par listed facilities: ${facilitiesData.map(facility => facility.name).join(", ")}.`;
    }
    if (hasAny("hostel", "chhatravas", "छात्रावास")) {
      return `School website par hostel facility listed hai. Availability aur details ke liye ${contact}`;
    }
    if (hasAny("admission", "admissions", "enrol", "pravesh", "प्रवेश")) {
      return `Admissions Nursery se Class 12 tak ke liye hain. Eligibility, current vacancies aur required documents class aur session ke hisaab se badal sakte hain; latest details ke liye ${contact}`;
    }
    if (hasAny("result", "exam", "examination", "pariksha", "परिणाम", "परीक्षा")) {
      return `Current exam schedule aur results ki confirmed details website par available nahi hain. Latest information ke liye ${contact}`;
    }

    return `School website par is sawal ki confirmed detail nahi mili. Aap admissions, classes, subjects, fees, facilities, transport ya contact details ke baare mein pooch sakte hain. Current confirmation ke liye ${contact}`;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    const newUserMessage = {
      id: Date.now(),
      role: "user",
      content: userMessage
    };

    setMessages(prev => [...prev, newUserMessage]);

    if (!hasGroqApiKey) {
      const content = isSchoolRelated(userMessage)
        ? getOfflineSchoolAnswer(userMessage)
        : "I'm here to help with questions about S.B.S Sr.Sec. School Matour Kaithal only. Please ask about admissions, academics, facilities, transport, or contact details.";
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          role: "assistant",
          content
        };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 500);
      return;
    }

    try {
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            { role: "system", content: SCHOOL_CONTEXT },
            { role: "user", content: userMessage }
          ],
          temperature: 0.3,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error(`Groq API request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data.choices && data.choices[0]?.message?.content) {
        const botMessage = {
          id: Date.now() + 1,
          role: "assistant",
          content: data.choices[0].message.content
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error("Invalid response");
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: isSchoolRelated(userMessage)
          ? getOfflineSchoolAnswer(userMessage)
          : "Sorry, I'm having trouble connecting right now. Please try again later or contact the school directly at sbsmatour@gmail.com."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-toggle fixed bottom-4 right-4 z-[70] flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-black shadow-lg ring-1 ring-gray-800 transition-all duration-300 hover:shadow-xl hover:ring-forest-300 sm:bottom-6 sm:right-6"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        animate={isOpen ? { y: 0 } : { y: [0, -4, 0] }}
        transition={isOpen ? { duration: 0.2 } : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <img src={CHATBOT_AVATAR} alt="" className="h-full w-full bg-black object-contain" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="chat-window fixed bottom-20 left-3 right-3 z-[55] flex h-[70vh] max-h-[calc(100dvh-9.5rem)] w-auto flex-col overflow-hidden rounded-2xl border border-border-light bg-white shadow-2xl sm:bottom-24 sm:left-auto sm:right-6 sm:h-[500px] sm:max-h-[calc(100dvh-6rem)] sm:w-[380px]"
            role="dialog"
            aria-label="School chatbot"
          >
            {/* Header */}
            <div className="p-4 bg-forest-800 text-white flex items-center justify-between border-b border-forest-700">
              <div className="flex items-center gap-3">
                <img src={CHATBOT_AVATAR} alt="" className="w-10 h-10 rounded-lg bg-black object-contain" />
                <div>
                  <h3 className="font-semibold text-sm">S.B.S School Assistant</h3>
                  <p className="text-xs text-forest-200">Online • School queries only</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-forest-800 text-white rounded-br-md"
                      : "bg-cream-100 text-dark-900 rounded-bl-md"
                  }`}>
                    <div className="flex items-start gap-2">
                      {message.role === "assistant" && (
                        <img src={CHATBOT_AVATAR} alt="" className="w-6 h-6 rounded-full bg-black object-contain flex-shrink-0 mt-0.5" />
                      )}
                      <div className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </div>
                      {message.role === "user" && (
                        <div className="w-6 h-6 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Loading Indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-4 pb-2"
              >
                <div className="flex items-start gap-2">
                  <img src={CHATBOT_AVATAR} alt="" className="w-6 h-6 rounded-full bg-black object-contain flex-shrink-0" />
                  <div className="flex gap-1 py-2">
                    <Loader2 className="w-4 h-4 text-forest-400 animate-spin" />
                    <Loader2 className="w-4 h-4 text-forest-400 animate-spin" style={{ animationDelay: "100ms" }} />
                    <Loader2 className="w-4 h-4 text-forest-400 animate-spin" style={{ animationDelay: "200ms" }} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-border-light bg-white">
              <div className="flex min-w-0 gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about admissions, facilities, transport..."
                  className="min-w-0 flex-1 px-4 py-2.5 bg-cream-100 border border-border-light rounded-xl text-dark-900 placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all"
                  disabled={isLoading}
                  aria-label="Type your question"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="shrink-0 px-5 py-2.5 bg-forest-800 text-white rounded-xl hover:bg-forest-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-dark-500 text-center mt-2">
                I only answer questions about S.B.S Sr.Sec. School Matour Kaithal
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}