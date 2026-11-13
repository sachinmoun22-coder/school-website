import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, Phone, GraduationCap, MessageSquare } from "lucide-react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "5f6fe484-c896-4011-8b2e-70e5db9fdf28";

export function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentName: "",
    classOfInterest: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const formRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Parent/Guardian name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.phone.trim() && !/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }
    if (!formData.studentName.trim()) newErrors.studentName = "Student name is required";
    if (!formData.classOfInterest) newErrors.classOfInterest = "Please select a class";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (formRef.current?.botcheck?.checked) {
      return;
    }

    setStatus("submitting");
    setSubmitMessage("");

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "Website se naya message - SBS School",
        from_name: "SBS School Website",
        botcheck: "",
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        student_name: formData.studentName.trim(),
        class_of_interest: formData.classOfInterest,
        message: formData.message.trim(),
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
        setSubmitMessage("Thank you for your admission enquiry! Hum jaldi aapse sampark karenge.");
        setFormData({ name: "", email: "", phone: "", studentName: "", classOfInterest: "", message: "" });
        formRef.current?.reset();
      } else {
        setStatus("error");
        setSubmitMessage(result.message || "Message bhejne me samasya aayi. Kripya dobara prayas karein.");
      }
    } catch {
      setStatus("error");
      setSubmitMessage("Message bhejne me samasya aayi. Kripya internet connection check karein.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (status === "error") {
      setStatus("idle");
      setSubmitMessage("");
    }
  };

  const classes = [
    { value: "", label: "Select Class" },
    { value: "nursery", label: "Nursery" },
    { value: "lkg", label: "LKG" },
    { value: "ukg", label: "UKG" },
    { value: "1", label: "Class 1" },
    { value: "2", label: "Class 2" },
    { value: "3", label: "Class 3" },
    { value: "4", label: "Class 4" },
    { value: "5", label: "Class 5" },
    { value: "6", label: "Class 6" },
    { value: "7", label: "Class 7" },
    { value: "8", label: "Class 8" },
    { value: "9", label: "Class 9" },
    { value: "10", label: "Class 10" },
    { value: "11-arts", label: "Class 11 - Arts" },
    { value: "11-commerce", label: "Class 11 - Commerce" },
    { value: "11-science", label: "Class 11 - Science" },
    { value: "12-arts", label: "Class 12 - Arts" },
    { value: "12-commerce", label: "Class 12 - Commerce" },
    { value: "12-science", label: "Class 12 - Science" },
  ];

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
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

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="parentName" className="label-field">
            Parent/Guardian Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              id="parentName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`input-field pl-10 ${errors.name ? "border-red-500 focus:ring-red-500" : ""}`}
              placeholder="Mr./Ms. Parent Name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "parentName-error" : undefined}
              disabled={status === "submitting"}
              required
            />
          </div>
          {errors.name && (
            <motion.p id="parentName-error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.name}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label-field">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`input-field pl-10 ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
              placeholder="your@email.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              disabled={status === "submitting"}
              required
            />
          </div>
          {errors.email && (
            <motion.p id="email-error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.email}
            </motion.p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="label-field">
            Mobile Number <span className="text-slate-400 text-xs font-normal">(optional)</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`input-field pl-10 ${errors.phone ? "border-red-500 focus:ring-red-500" : ""}`}
              placeholder="10-digit mobile number"
              maxLength={10}
              inputMode="numeric"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              disabled={status === "submitting"}
            />
          </div>
          {errors.phone && (
            <motion.p id="phone-error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.phone}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="studentName" className="label-field">
            Student Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className={`input-field pl-10 ${errors.studentName ? "border-red-500 focus:ring-red-500" : ""}`}
              placeholder="Student Full Name"
              aria-invalid={errors.studentName ? "true" : "false"}
              aria-describedby={errors.studentName ? "studentName-error" : undefined}
              disabled={status === "submitting"}
              required
            />
          </div>
          {errors.studentName && (
            <motion.p id="studentName-error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.studentName}
            </motion.p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="classOfInterest" className="label-field">
          Class of Interest <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
          <select
            id="classOfInterest"
            name="classOfInterest"
            value={formData.classOfInterest}
            onChange={handleChange}
            className={`input-field pl-10 appearance-none ${errors.classOfInterest ? "border-red-500 focus:ring-red-500" : ""}`}
            aria-invalid={errors.classOfInterest ? "true" : "false"}
            aria-describedby={errors.classOfInterest ? "classOfInterest-error" : undefined}
            disabled={status === "submitting"}
            required
          >
            {classes.map((cls) => (
              <option key={cls.value} value={cls.value}>
                {cls.label}
              </option>
            ))}
          </select>
        </div>
        {errors.classOfInterest && (
          <motion.p id="classOfInterest-error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> {errors.classOfInterest}
          </motion.p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="label-field">
          Message <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-dark-400" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`input-field pl-10 pr-4 pt-3 ${errors.message ? "border-red-500 focus:ring-red-500" : ""}`}
            placeholder="Any specific questions or requirements..."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            disabled={status === "submitting"}
            required
          />
        </div>
        {errors.message && (
          <motion.p id="message-error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> {errors.message}
          </motion.p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Submit Enquiry
          </>
        )}
      </button>

      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`flex items-start gap-2 text-sm p-4 rounded-lg ${status === "success" ? "text-forest-700 bg-forest-50 border border-forest-200" : "text-red-700 bg-red-50 border border-red-200"}`}
            role={status === "error" ? "alert" : "status"}
          >
            {status === "success" ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
            <span className="min-w-0">{submitMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}