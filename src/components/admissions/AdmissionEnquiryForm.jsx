import { useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "5f6fe484-c896-4011-8b2e-70e5db9fdf28";

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
    if (!form.name.trim()) nextErrors.name = "Enter a parent or guardian name.";
    if (!form.studentName.trim()) nextErrors.studentName = "Enter the student's name.";
    if (!form.classApplyingFor) nextErrors.classApplyingFor = "Select the class you are enquiring about.";
    if (!form.email.trim()) {
      nextErrors.email = "Enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (form.phone.trim() && !/^(?:\+?91[\s-]?)?[6-9]\d{9}$/.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid 10-digit Indian mobile number or leave it blank.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Enter your message or question.";
    } else if (form.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      return;
    }

    if (formRef.current?.botcheck?.checked) {
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "Website se naya message - SBS School",
        from_name: "SBS School Website",
        botcheck: "",
        name: form.name.trim(),
        student_name: form.studentName.trim(),
        class_applying_for: form.classApplyingFor,
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      };

      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setServerMessage("Thank you! Aapki admission enquiry bhej di gayi hai. Hum jaldi aapse sampark karenge.");
        setForm(initialForm);
        formRef.current?.reset();
      } else {
        setStatus("error");
        setServerMessage(result.message || "Enquiry bhejne me samasya aayi. Kripya thodi der baad dobara prayas karein.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Enquiry bhejne me samasya aayi. Kripya apna internet connection check karein aur dobara prayas karein.");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="Website se naya message - SBS School" />
      <input type="hidden" name="from_name" value="SBS School Website" />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="admission-name" className="label-field">
            Parent/Guardian Name <span aria-hidden="true">*</span>
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
            Student Name <span aria-hidden="true">*</span>
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
            Class Applying For <span aria-hidden="true">*</span>
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
            <option value="">Select a class</option>
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
            Email Address <span aria-hidden="true">*</span>
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
            Mobile Number <span className="text-slate-400 text-xs font-normal">(optional)</span>
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
            placeholder="10-digit mobile number"
          />
          {errors.phone && <FieldError id="admission-phone-error">{errors.phone}</FieldError>}
        </div>
      </div>

      <div>
        <label htmlFor="admissionMessage" className="label-field">
          Message or Question <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="admissionMessage"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="input-field"
          placeholder="Share any question you would like the school to address."
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
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </span>
        ) : (
          "Send Enquiry"
        )}
      </button>

      {status === "invalid" && (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          Please review the highlighted fields.
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
