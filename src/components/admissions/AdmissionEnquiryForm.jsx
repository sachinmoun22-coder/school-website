import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const classOptions = [
  "Nursery", "LKG", "UKG",
  ...Array.from({ length: 10 }, (_, index) => `Class ${index + 1}`),
  "Class 11 - Arts", "Class 11 - Commerce", "Class 11 - Science",
  "Class 12 - Arts", "Class 12 - Commerce", "Class 12 - Science",
];

const initialForm = {
  parentName: "",
  studentName: "",
  classApplyingFor: "",
  mobile: "",
  email: "",
  message: "",
};

export function AdmissionEnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus("idle");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    if (!form.parentName.trim()) nextErrors.parentName = "Enter a parent or guardian name.";
    if (!form.studentName.trim()) nextErrors.studentName = "Enter the student's name.";
    if (!form.classApplyingFor) nextErrors.classApplyingFor = "Select the class you are enquiring about.";
    if (!/^(?:\+?91[\s-]?)?[6-9]\d{9}$/.test(form.mobile.trim())) {
      nextErrors.mobile = "Enter a valid 10-digit Indian mobile number.";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address or leave this field blank.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      return;
    }

    setStatus("not-connected");
  }

  const fields = [
    { name: "parentName", label: "Parent/Guardian Name", required: true, autoComplete: "name" },
    { name: "studentName", label: "Student Name", required: true, autoComplete: "off" },
    { name: "mobile", label: "Mobile Number", required: true, autoComplete: "tel", type: "tel", maxLength: 16 },
    { name: "email", label: "Email Address (optional)", required: false, autoComplete: "email", type: "email" },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.slice(0, 2).map((field) => (
          <FormField key={field.name} field={field} value={form[field.name]} error={errors[field.name]} onChange={handleChange} />
        ))}
        <div>
          <label htmlFor="classApplyingFor" className="label-field">Class Applying For <span aria-hidden="true">*</span></label>
          <select
            id="classApplyingFor"
            name="classApplyingFor"
            value={form.classApplyingFor}
            onChange={handleChange}
            aria-invalid={Boolean(errors.classApplyingFor)}
            aria-describedby={errors.classApplyingFor ? "classApplyingFor-error" : undefined}
            className="input-field"
            required
          >
            <option value="">Select a class</option>
            {classOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          {errors.classApplyingFor && <FieldError id="classApplyingFor-error">{errors.classApplyingFor}</FieldError>}
        </div>
        {fields.slice(2).map((field) => (
          <FormField key={field.name} field={field} value={form[field.name]} error={errors[field.name]} onChange={handleChange} />
        ))}
      </div>
      <div>
        <label htmlFor="admissionMessage" className="label-field">Message or Question</label>
        <textarea
          id="admissionMessage"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="input-field"
          placeholder="Share any question you would like the school to address."
        />
      </div>
      <button type="submit" className="btn-primary">Check Enquiry Details</button>
      {status === "invalid" && (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          Please review the highlighted fields. No information has been sent.
        </p>
      )}
      {status === "not-connected" && (
        <p role="status" className="flex items-start gap-2 rounded-xl border border-accent-200 bg-accent-50 p-4 text-sm leading-relaxed text-dark-800">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
          Your entries passed the form checks, but this website is not connected to an enquiry service. Nothing has been sent or saved. Please contact the school through the Contact page to submit your enquiry.
        </p>
      )}
      <p className="text-xs leading-relaxed text-dark-500">
        This form is not connected to a submission service. Do not enter sensitive personal information.
      </p>
    </form>
  );
}

function FormField({ field, value, error, onChange }) {
  const id = `admission-${field.name}`;
  return (
    <div>
      <label htmlFor={id} className="label-field">
        {field.label}{field.required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        name={field.name}
        type={field.type || "text"}
        autoComplete={field.autoComplete}
        maxLength={field.maxLength}
        value={value}
        onChange={onChange}
        required={field.required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="input-field"
      />
      {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </div>
  );
}

function FieldError({ id, children }) {
  return <p id={id} className="mt-1.5 text-sm text-red-700">{children}</p>;
}
