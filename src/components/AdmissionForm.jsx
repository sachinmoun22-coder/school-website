import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, User, Phone, Mail, GraduationCap, MessageSquare, Home, Bed } from "lucide-react";

export function AdmissionForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    contactNumber: "",
    studentName: "",
    classOfInterest: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = "Parent/Guardian name is required";
    if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.contactNumber.replace(/\D/g, ''))) {
      newErrors.contactNumber = "Please enter a valid 10-digit Indian mobile number";
    }
    if (!formData.studentName.trim()) newErrors.studentName = "Student name is required";
    if (!formData.classOfInterest) newErrors.classOfInterest = "Please select a class";
    if (formData.message.trim() && formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");
    setSubmitMessage("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Admission Enquiry Submitted:", formData);

    setStatus("success");
    setSubmitMessage("Thank you for your admission enquiry! We will contact you soon.");
    setFormData({ parentName: "", contactNumber: "", studentName: "", classOfInterest: "", message: "" });

    setTimeout(() => {
      setStatus("idle");
      setSubmitMessage("");
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
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
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              className={`input-field pl-10 ${errors.parentName ? "border-red-500 focus:ring-red-500" : ""}`}
              placeholder="Mr./Ms. Parent Name"
              aria-invalid={errors.parentName ? "true" : "false"}
              aria-describedby={errors.parentName ? "parentName-error" : undefined}
              disabled={status === "submitting"}
            />
          </div>
          {errors.parentName && (
            <motion.p
              id="parentName-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.parentName}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="contactNumber" className="label-field">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className={`input-field pl-10 ${errors.contactNumber ? "border-red-500 focus:ring-red-500" : ""}`}
              placeholder="9876543210"
              maxLength={10}
              aria-invalid={errors.contactNumber ? "true" : "false"}
              aria-describedby={errors.contactNumber ? "contactNumber-error" : undefined}
              disabled={status === "submitting"}
            />
          </div>
          {errors.contactNumber && (
            <motion.p
              id="contactNumber-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.contactNumber}
            </motion.p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
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
            />
          </div>
          {errors.studentName && (
            <motion.p
              id="studentName-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.studentName}
            </motion.p>
          )}
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
            >
              {classes.map((cls) => (
                <option key={cls.value} value={cls.value}>
                  {cls.label}
                </option>
              ))}
            </select>
          </div>
          {errors.classOfInterest && (
            <motion.p
              id="classOfInterest-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.classOfInterest}
            </motion.p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label-field">
          Message (Optional)
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
          />
        </div>
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

      <div className="p-4 rounded-lg bg-cream-100 border border-border-light text-sm text-dark-600">
        <p className="flex items-start gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-500" />
          <span>
            <strong>Note:</strong> This is an admission enquiry form. Backend email delivery integration is required.
            Your message will be logged to the console for demonstration purposes.
          </span>
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Submit Enquiry
          </>
        )}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-start gap-2 text-sm text-forest-600"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span className="min-w-0">{submitMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}