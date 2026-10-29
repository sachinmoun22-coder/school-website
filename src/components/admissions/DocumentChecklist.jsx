import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { documentExamples } from "../../data/admissions";

export function DocumentChecklist() {
  const [checked, setChecked] = useState([]);
  const toggleItem = (item) => {
    setChecked((current) => current.includes(item)
      ? current.filter((entry) => entry !== item)
      : [...current, item]);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-dark-600" aria-live="polite">
          {checked.length} of {documentExamples.length} items checked
        </p>
        <button type="button" onClick={() => setChecked([])} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-forest-800 hover:bg-forest-50 focus-visible:outline">
          <RotateCcw className="h-4 w-4" /> Reset checklist
        </button>
      </div>
      <ul className="space-y-3">
        {documentExamples.map((item, index) => {
          const id = `document-check-${index}`;
          return (
            <li key={item} className="rounded-xl border border-border-light bg-white p-4 transition-colors hover:border-forest-200">
              <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-dark-700">
                <input
                  id={id}
                  type="checkbox"
                  checked={checked.includes(item)}
                  onChange={() => toggleItem(item)}
                  className="mt-1 h-4 w-4 shrink-0 accent-forest-700"
                />
                <span>{item}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
