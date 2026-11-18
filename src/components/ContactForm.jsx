import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Loader2, Send } from "lucide-react";
import { useSiteText } from "../i18n/useSiteText";

const API_URL = import.meta.env.VITE_API_URL || "";

export function ContactForm() {
  const t = useSiteText();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState("");
  const formRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name) newErrors.name = t.forms.requiredName;
    else if (name.length < 3) newErrors.name = t.forms.nameMin;

    if (!email) {
      newErrors.email = t.forms.requiredEmail;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t.forms.invalidEmail;
    }

    if (phone && !/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ""))) {
      newErrors.phone = t.forms.invalidPhone;
    }

    if (!message) newErrors.message = t.forms.requiredMessage;
    else if (message.length < 10) {
      newErrors.message = t.forms.messageMin;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus("idle");
    setServerMessage("");
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

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
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setServerMessage(result.message || t.forms.successContact);
        setFormData({ name: "", email: "", phone: "", message: "" });
        formRef.current?.reset();
      } else {
        setStatus("error");
        setServerMessage(result.message || t.forms.errorGeneric);
      }
    } catch {
      setStatus("error");
      setServerMessage(t.forms.errorNetwork);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>

      <div>
        <label htmlFor="name" className="label-field">
          {t.forms.name} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`input-field ${errors.name ? "border-red-500 focus:ring-red-500" : ""}`}
          placeholder={t.forms.namePlaceholder}
          required
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          disabled={status === "submitting"}
        />
        {errors.name && (
          <motion.p
            id="name-error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.name}
          </motion.p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="label-field">
            {t.forms.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-field ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
            placeholder={t.forms.emailPlaceholder}
            required
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={status === "submitting"}
          />
          {errors.email && (
            <motion.p
              id="email-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="label-field">
            {t.forms.phone} <span className="text-slate-400 text-xs font-normal">{t.forms.optional}</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            value={formData.phone}
            onChange={handleChange}
            className={`input-field ${errors.phone ? "border-red-500 focus:ring-red-500" : ""}`}
            placeholder={t.forms.phonePlaceholder}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            disabled={status === "submitting"}
          />
          {errors.phone && (
            <motion.p
              id="phone-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.phone}
            </motion.p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label-field">
          {t.forms.message} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`input-field resize-y min-h-[120px] ${errors.message ? "border-red-500 focus:ring-red-500" : ""}`}
          placeholder={t.forms.messagePlaceholder}
          required
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={status === "submitting"}
        />
        {errors.message && (
          <motion.p
            id="message-error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.message}
          </motion.p>
        )}
      </div>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg border border-forest-200 bg-forest-50 flex items-start gap-3 text-sm leading-relaxed text-forest-700"
          role="status"
          aria-live="polite"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0 text-forest-600 mt-0.5" />
          <span className="min-w-0">{serverMessage}</span>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg border border-red-200 bg-red-50 flex items-start gap-3 text-sm leading-relaxed text-red-700"
          role="alert"
          aria-live="polite"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
          <span className="min-w-0">{serverMessage}</span>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            {t.forms.sending}
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            {t.forms.send}
          </>
        )}
      </button>
    </form>
  );
}
