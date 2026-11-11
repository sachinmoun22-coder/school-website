// Vercel serverless function for contact form
// Handles POST /api/contact

import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || "sbsmatour@gmail.com";
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587", 10);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";

function validateBody(body) {
  const errors = {};
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  if (!name) errors.name = "Name is required";
  else if (name.length < 3) errors.name = "Name must be at least 3 characters";

  const hasEmail = email.length > 0;
  const hasPhone = phone.length > 0;

  if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (hasPhone && !/^[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Please enter a valid 10-digit Indian mobile number";
  }

  if (!hasEmail && !hasPhone) {
    errors.contact = "Email address or mobile number is required";
  }

  if (!message) errors.message = "Message is required";
  else if (message.length < 10) errors.message = "Message must be at least 10 characters";

  return { errors, name, email, phone, message };
}

function createTransporter() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { errors, name, email, phone, message } = validateBody(req.body || {});

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, message: "Validation failed", errors });
  }

  // Honeypot check
  if (req.body.honeypot && req.body.honeypot.trim() !== "") {
    return res.status(400).json({ success: false, message: "Invalid submission" });
  }

  const transporter = createTransporter();

  if (!transporter) {
    // No SMTP configured — return success so frontend shows confirmation,
    // but log for the admin to set up email.
    console.warn("[contact] SMTP not configured — message not sent:", { name, email, phone, message });
    return res.status(503).json({
      success: false,
      message: "Email service not configured. Please contact the school directly.",
    });
  }

  const contactMethod = email || phone;
  const subject = `New Contact Form Inquiry - S.B.S Sr.Sec. School Matour Kaithal`;

  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Contact:</strong> ${escapeHtml(contactMethod)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || "(not provided)")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "(not provided)")}</p>
    <h3>Message:</h3>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const textBody = `
New Contact Form Submission
---------------------------
Name: ${name}
Contact: ${contactMethod}
Email: ${email || "(not provided)"}
Phone: ${phone || "(not provided)"}

Message:
${message}
  `;

  try {
    await transporter.sendMail({
      from: `"S.B.S School Website" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      subject,
      text: textBody,
      html: htmlBody,
      replyTo: email || undefined,
    });

    return res.status(200).json({
      success: true,
      message: "Thank you! Aapka message bhej diya gaya hai. Hum jaldi aapse sampark karenge.",
    });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return res.status(500).json({
      success: false,
      message: "Kuch galat hua. Kripya thoda der baad dobara koshish karein.",
    });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}