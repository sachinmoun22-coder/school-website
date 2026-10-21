import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageSquare, Loader2, Bot, User } from "lucide-react";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

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
- Phone: 7015056542 (verification pending)
- Type: Co-educational Senior Secondary School

RULES:
1. ONLY answer questions about this school (admissions, academics, facilities, contact, location, principal, transport, hostel, fees, timings, results, etc.)
2. If asked about anything else (politics, other schools, general knowledge, coding, personal advice, etc.), politely decline and say you can only help with school-related queries
3. For information not available (fees, exact admission dates, exam results, principal's message, school history), say "This information will be updated soon. Please contact the school directly for current details."
4. Be polite, professional, and concise
5. Always refer to the school as "S.B.S Sr.Sec. School Matour Kaithal"
`;

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
      '10244', 'ramgarh', 'shimla', 'kalasar', 'mandi', 'kheri', 'bhalang', 'singhwal', 'sudkain'
    ];
    
    const lowerQuestion = question.toLowerCase();
    return schoolKeywords.some(keyword => lowerQuestion.includes(keyword));
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

    if (!isSchoolRelated(userMessage)) {
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          role: "assistant",
          content: "I'm here to help with questions about S.B.S Sr.Sec. School Matour Kaithal only. I can't answer questions about other topics. Please ask me about admissions, academics, facilities, transport, hostel, contact details, or any other school-related information."
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

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
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
        content: "Sorry, I'm having trouble connecting right now. Please try again later or contact the school directly at sbsmatour@gmail.com."
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
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-forest-800 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-forest-900 hover:scale-105 ${isOpen ? "rotate-45" : ""}`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm md:max-w-md lg:max-w-lg h-[500px] bg-white rounded-2xl shadow-2xl border border-border-light overflow-hidden flex flex-col"
            role="dialog"
            aria-label="School chatbot"
          >
            {/* Header */}
            <div className="p-4 bg-forest-800 text-white flex items-center justify-between border-b border-forest-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
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
                        <div className="w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Bot className="w-4 h-4 text-forest-600" />
                        </div>
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
                  <div className="w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-forest-600" />
                  </div>
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
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about admissions, facilities, transport..."
                  className="flex-1 px-4 py-2.5 bg-cream-100 border border-border-light rounded-xl text-dark-900 placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all"
                  disabled={isLoading}
                  aria-label="Type your question"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="px-5 py-2.5 bg-forest-800 text-white rounded-xl hover:bg-forest-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
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