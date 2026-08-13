import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import "./Contact.css";
import img from "../../assets/contact.jpg";

const infoStrip = [
  {
    icon: "call",
    label: "Call us",
    lines: ["08 6374 6473", "04 4452 1694"],
  },
  {
    icon: "mail",
    label: "Send us an email",
    lines: ["Director@hrbridgeau.com"],
  },
  {
    icon: "pin",
    label: "Our offices",
    lines: ["HR Bridge Pty Ltd", "Suite 22, 220 Carr Place", "Leederville WA 6007"],
  },
];

const Icon = ({ name }: { name: string }) => {
  if (name === "call") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
};

const Contact = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      window.setTimeout(() => setSubmitted(false), 4000);
    }, 500);
  };

  return (
    <section className={`contact-page ${visible ? "is-visible" : ""}`} id="contact" ref={rootRef}>
      {/* ---------------- heading (matches About page style) ---------------- */}
      <div className="contact-heading">
        <span className="contact-heading-eyebrow">We're Here to Help</span>
        <h1 className="contact-heading-title">Contact Us</h1>
        <p className="contact-heading-subtitle">
          Reach out and we'll get back to you within one business day.
        </p>
      </div>

      {/* ---------------- info strip ---------------- */}
      <div className="contact-strip">
        {infoStrip.map((item, i) => (
          <div className="contact-strip-item" key={item.label} style={{ transitionDelay: `${i * 100}ms` }}>
            <span className="contact-strip-icon">
              <Icon name={item.icon} />
            </span>
            <div className="contact-strip-copy">
              <span className="contact-strip-label">{item.label}</span>
              {item.lines.map((line) => (
                <span className="contact-strip-line" key={line}>{line}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- write us panel ---------------- */}
      <div className="contact-panel">
        <div className="contact-panel-left">
          <h3>Write us</h3>
          <p>Need assistance? We're just a message away.</p>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/company/hrbridgeau/" className="contact-social contact-social--linkedin" aria-label="LinkedIn">
              in
            </a>
            <a href="https://www.instagram.com/hrbridgeau/" className="contact-social contact-social--instagram" aria-label="Instagram">
              ig
            </a>
          </div>

          <div className="contact-photo">
            <img
              src={img}
              alt="HR Bridge team ready to help"
              loading="lazy"
            />
          </div>
        </div>

        <form className="contact-panel-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-row">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="name">Full Name</label>
              <span className="form-underline" />
            </div>

            <div className="form-row">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="email">Email address</label>
              <span className="form-underline" />
            </div>

            <div className="form-row">
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="phone">Phone number</label>
              <span className="form-underline" />
            </div>

            <div className="form-row">
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="subject">Subject</label>
              <span className="form-underline" />
            </div>
          </div>

          <div className="form-row form-row--full">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="message">Tell us how we can help</label>
            <span className="form-underline" />
          </div>

          <button type="submit" className={`contact-submit ${submitting ? "is-loading" : ""}`} disabled={submitting}>
            <span className="contact-submit-label">
              {submitting ? "Sending…" : "Submit"}
            </span>
          </button>

          <p className={`contact-success ${submitted ? "is-shown" : ""}`}>
            ✓ Thanks — your message has been sent. We'll be in touch soon.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;