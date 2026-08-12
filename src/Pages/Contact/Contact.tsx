import { useState } from "react";
import type { FormEvent } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire this up to your email service / backend API
    setSubmitting(true);
    console.log("Contact form submitted:", formData);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      window.setTimeout(() => setSubmitted(false), 4000);
    }, 500);
  };

  const fields: {
    id: "name" | "email" | "phone" | "message";
    label: string;
    type?: string;
    required?: boolean;
  }[] = [
    { id: "name", label: "Full Name", type: "text", required: true },
    { id: "email", label: "Email", type: "email", required: true },
    { id: "phone", label: "Phone (optional)", type: "tel" },
  ];

  return (
    <section className="contact-page" id="contact">
      <div className="contact-hero">
        <span className="contact-kicker">We Reply Fast</span>
        <h1>Get in Touch</h1>
        <p>
          Have a question about our services? Send us a message and we'll
          get back to you within one business day.
        </p>
      </div>

      <div className="contact-body">
        <form className="contact-form" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div className="form-row" key={field.id}>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                value={formData[field.id]}
                onChange={handleChange}
                required={field.required}
                placeholder=" "
              />
              <label htmlFor={field.id}>{field.label}</label>
              <span className="form-underline" />
            </div>
          ))}

          <div className="form-row">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="message">Message</label>
            <span className="form-underline" />
          </div>

          <button type="submit" className={`contact-submit ${submitting ? "is-loading" : ""}`} disabled={submitting}>
            <span className="contact-submit-label">
              {submitting ? "Sending…" : "Send Message"}
            </span>
          </button>

          <p className={`contact-success ${submitted ? "is-shown" : ""}`}>
            ✓ Thanks — your message has been sent. We'll be in touch soon.
          </p>
        </form>

        <div className="contact-info">
          <h3>Contact Details</h3>
          <p className="contact-info-row">
            <span className="contact-info-icon">✉</span>
            <span><strong>Email</strong><br />info@hrbridgeau.com</span>
          </p>
          <p className="contact-info-row">
            <span className="contact-info-icon">☎</span>
            <span><strong>Phone</strong><br />+61 000 000 000</span>
          </p>
          <p className="contact-info-row">
            <span className="contact-info-icon">⏱</span>
            <span><strong>Hours</strong><br />Mon–Fri, 9am–5pm AEST</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;