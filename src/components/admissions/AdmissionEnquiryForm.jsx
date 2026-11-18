import { useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useSiteText } from "../../i18n/useSiteText";

const API_URL = import.meta.env.VITE_API_URL || "";

const classOptions = [
  "Nursery", "LKG", "UKG",
  ...Array.from({ length: 10 }, (_, index) => `Class ${index + 1}`),
  "Class 11 - Arts", "Class 11 - Commerce", "Class 11 - Science",
  "Class 12 - Arts", "Class 12 - Commerce", "Class 12 - Science",
];

const initialForm = {
  name: "",
  studentName: "",
  classApplyingFor: "",
  phone: "",
  email: "",
  message: "",
};

export function AdmissionEnquiryForm() {
  const t = useSiteText();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | invalid | submitting | success | error
  const [serverMessage, setServerMessage] = useState("");
  const formRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (status === "invalid" || status === "error") setStatus("idle");
    setServerMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = t.forms.requiredParentName;
    if (!form.studentName.trim()) nextErrors.studentName = t.forms.requiredStudentName;
    if (!form.classApplyingFor) nextErrors.classApplyingFor = t.forms.requiredClass;
    if (!form.email.trim()) {
      nextErrors.email = t.forms.requiredEmail;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = t.forms.invalidEmail;
    }
    if (form.phone.trim() && !/^(?:\+?91[\s-]?)?[6-9]\d{9}$/.test(form.phone.trim())) {
      nextErrors.phone = t.forms.invalidPhone;
    }
    if (!form.message.trim()) {
      nextErrors.message = t.forms.requiredQuestion;
    } else if (form.message.trim().length < 10) {
      nextErrors.message = t.forms.questionMin;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: `Admission Enquiry\nParent: ${form.name.trim()}\nStudent: ${form.studentName.trim()}\nClass: ${form.classApplyingFor}\n${form.message.trim()}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setServerMessage(result.message || t.forms.enquirySuccess);
        setForm(initialForm);
        formRef.current?.reset();
      } else {
        setStatus("error");
        setServerMessage(result.message || t.forms.errorGeneric);
      }
    } catch {
      setStatus("error");
      setServerMessage(t.forms.errorNetwork);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="admission-name" className="label-field">
            {t.forms.parentName} <span aria-hidden="true">*</span>
          </label>
          <input
            id="admission-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "admission-name-error" : undefined}
            className="input-field"
            disabled={status === "submitting"}
          />
          {errors.name && <FieldError id="admission-name-error">{errors.name}</FieldError>}
        </div>

        <div>
          <label htmlFor="admission-studentName" className="label-field">
            {t.forms.studentName} <span aria-hidden="true">*</span>
          </label>
          <input
            id="admission-studentName"
            name="studentName"
            type="text"
            autoComplete="off"
            value={form.studentName}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.studentName)}
            aria-describedby={errors.studentName ? "admission-studentName-error" : undefined}
            className="input-field"
            disabled={status === "submitting"}
          />
          {errors.studentName && <FieldError id="admission-studentName-error">{errors.studentName}</FieldError>}
        </div>

        <div>
          <label htmlFor="classApplyingFor" className="label-field">
            {t.forms.classApplying} <span aria-hidden="true">*</span>
          </label>
          <select
            id="classApplyingFor"
            name="classApplyingFor"
            value={form.classApplyingFor}
            onChange={handleChange}
            aria-invalid={Boolean(errors.classApplyingFor)}
            aria-describedby={errors.classApplyingFor ? "classApplyingFor-error" : undefined}
            className="input-field"
            required
            disabled={status === "submitting"}
          >
            <option value="">{t.forms.selectClass}</option>
            {classOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.classApplyingFor && <FieldError id="classApplyingFor-error">{errors.classApplyingFor}</FieldError>}
        </div>

        <div>
          <label htmlFor="admission-email" className="label-field">
            {t.forms.email} <span aria-hidden="true">*</span>
          </label>
          <input
            id="admission-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "admission-email-error" : undefined}
            className="input-field"
            disabled={status === "submitting"}
          />
          {errors.email && <FieldError id="admission-email-error">{errors.email}</FieldError>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="admission-phone" className="label-field">
            {t.forms.phone} <span className="text-slate-400 text-xs font-normal">{t.forms.optional}</span>
          </label>
          <input
            id="admission-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            maxLength={16}
            value={form.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "admission-phone-error" : undefined}
            className="input-field"
            disabled={status === "submitting"}
            placeholder={t.forms.phonePlaceholder}
          />
          {errors.phone && <FieldError id="admission-phone-error">{errors.phone}</FieldError>}
        </div>
      </div>

      <div>
        <label htmlFor="admissionMessage" className="label-field">
          {t.forms.message} <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="admissionMessage"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="input-field"
          placeholder={t.forms.messagePlaceholder}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "admission-message-error" : undefined}
          disabled={status === "submitting"}
        />
        {errors.message && <FieldError id="admission-message-error">{errors.message}</FieldError>}
      </div>

      <button type="submit" className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> {t.forms.sending}
          </span>
        ) : (
          t.common.submitEnquiry
        )}
      </button>

      {status === "invalid" && (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          {t.forms.reviewFields}
        </p>
      )}

      {status === "success" && (
        <p role="status" className="flex items-start gap-2 rounded-xl border border-forest-200 bg-forest-50 p-4 text-sm leading-relaxed text-forest-800">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
          {serverMessage}
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          {serverMessage}
        </p>
      )}
    </form>
  );
}

function FieldError({ id, children }) {
  return (
    <p id={id} className="mt-1.5 text-sm text-red-700">
      {children}
    </p>
  );
}
