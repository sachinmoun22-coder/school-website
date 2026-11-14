import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocalizedData } from "../../i18n/useLocalizedData";

export function AdmissionFAQ() {
  const { t, schoolData } = useLocalizedData();
  const [openQuestion, setOpenQuestion] = useState(null);
  const questions = t.admissions.faqs || [];
  return (
    <div className="space-y-3">
      {questions.map(({ q, a }, index) => {
        const question = q;
        const answer = (a || "").replace("{email}", schoolData.email).replace("{phone}", schoolData.phone).replace("{location}", schoolData.location);
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
