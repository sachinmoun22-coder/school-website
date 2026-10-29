import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "How can I enquire about admission?",
    answer: "Use the Contact page to reach the school or contact the school office directly. Please confirm current vacancies and the applicable process with the administration.",
  },
  {
    question: "How do I obtain the admission application form?",
    answer: "Ask the school office which method is currently approved for obtaining the official application form.",
  },
  {
    question: "Which classes are available for admission?",
    answer: "The school information currently lists education from Nursery to Class 12. Availability for a particular class and session can change, so confirm it with the school office.",
  },
  {
    question: "What are the age requirements for different classes?",
    answer: "Age requirements can depend on the class and academic session. Contact the school office for its current official age criteria; no age limits are published here.",
  },
  {
    question: "Which documents may be required?",
    answer: "The checklist on this page gives common examples only. Ask the school for the documents required for the student's class and circumstances.",
  },
  {
    question: "How can I obtain the official fee structure?",
    answer: "Request the latest official fee schedule from the school office. This website does not publish unverified amounts or payment instructions.",
  },
  {
    question: "Is an entrance examination required?",
    answer: "An assessment or interaction may apply only if required by the school for the relevant class. Confirm the current requirement with the administration.",
  },
  {
    question: "How can I confirm whether seats are available?",
    answer: "Contact the school office and ask about current vacancies for the class and academic session you are interested in.",
  },
  {
    question: "Can I visit the school before applying?",
    answer: "Ask the school office whether a visit can be arranged and confirm suitable visiting hours before travelling.",
  },
  {
    question: "How can I contact the school for further information?",
    answer: "Use the Contact page for the contact details currently listed on this website. The phone number is marked as pending verification, so please confirm it before relying on it.",
  },
];

export function AdmissionFAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <div className="space-y-3">
      {questions.map(({ question, answer }, index) => {
        const isOpen = openQuestion === index;
        const buttonId = `admission-faq-button-${index}`;
        const answerId = `admission-faq-answer-${index}`;
        return (
          <div key={question} className="overflow-hidden rounded-xl border border-border-light bg-white">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenQuestion(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-dark-800 transition-colors hover:bg-forest-50"
              >
                {question}
                <ChevronDown className={`h-5 w-5 shrink-0 text-forest-700 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </h3>
            {isOpen && (
              <div id={answerId} role="region" aria-labelledby={buttonId} className="border-t border-border-light px-5 py-4 text-sm leading-relaxed text-dark-600">
                {answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
