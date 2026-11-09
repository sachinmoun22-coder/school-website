import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Loader2, Send } from "lucide-react";

// Web3Forms access key - get your free key from https://web3forms.com
// Add it to .env file: VITE_WEB3FORMS_ACCESS_KEY=your_key_here
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

// Optional reCAPTCHA v3 site key - add to .env: VITE_RECAPTCHA_SITE_KEY=your_key
const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const honeypotRef = useRef(null);
  const formRef = useRef(null);

  // Load reCAPTCHA v3 and get token on mount
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY || RECAPTCHA_SITE_KEY === "your_recaptcha_key_here") return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: "contact" })
            .then((token) => setRecaptchaToken(token));
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name) newErrors.name = "Name is required";
    else if (name.length < 3) newErrors.name = "Name must be at least 3 characters";

    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!phone) newErrors.phone = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    if (!message) newErrors.message = "Message is required";
    else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
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

    // Honeypot check - if filled, it's a bot
    if (honeypotRef.current && honeypotRef.current.value.trim() !== "") {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_ACCESS_KEY);
      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("message", formData.message.trim());
      payload.append(
        "subject",
        "New Contact Form Inquiry - S.B.S Sr.Sec. School Matour Kaithal"
      );
      payload.append("reply_to", formData.email.trim());
      payload.append("honeypot", "");
      if (recaptchaToken) {
        payload.append("recaptcha", recaptchaToken);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setServerMessage(
          "Thank you! Aapka message bhej diya gaya hai. Hum jaldi aapse sampark karenge."
        );
        formRef.current.reset();
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Refresh reCAPTCHA token after success
        if (
          window.grecaptcha &&
          RECAPTCHA_SITE_KEY &&
          RECAPTCHA_SITE_KEY !== "your_recaptcha_key_here"
        ) {
          window.grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: "contact" })
            .then((token) => setRecaptchaToken(token));
        }
      } else {
        throw new Error(result.message || "Message send failed");
      }
    } catch (err) {
      setStatus("error");
      setServerMessage(
        err.message ||
          "Kuch galat hua. Kripya thoda der baad dobara koshish karein."
      );
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot field - hidden from humans, filled by bots */}
      <div
        style={{ display: "none", visibility: "hidden" }}
        aria-hidden="true"
      >
        <label htmlFor="hp">Leave this field empty</label>
        <input
          id="hp"
          name="honeypot"
          type="text"
          ref={honeypotRef}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="label-field">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`input-field ${errors.name ? "border-red-500 focus:ring-red-500" : ""}`}
          placeholder="Your full name"
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
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-field ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
            placeholder="your@email.com"
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
            Mobile Number <span className="text-red-500">*</span>
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
            placeholder="10-digit mobile number"
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
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`input-field resize-y min-h-[120px] ${errors.message ? "border-red-500 focus:ring-red-500" : ""}`}
          placeholder="Your message..."
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

      {/* Success Message */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-4 rounded-lg border border-forest-200 bg-forest-50 flex items-start gap-3 text-sm leading-relaxed text-forest-700"
          role="status"
          aria-live="polite"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0 text-forest-600 mt-0.5" />
          <span className="min-w-0">{serverMessage}</span>
        </motion.div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-4 rounded-lg border border-red-200 bg-red-50 flex items-start gap-3 text-sm leading-relaxed text-red-700"
          role="status"
          aria-live="polite"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
          <span className="min-w-0">{serverMessage}</span>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
