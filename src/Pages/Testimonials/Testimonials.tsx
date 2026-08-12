import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Small Business Owner",
    quote:
      "HR Bridge helped us put proper contracts and policies in place within a week. Fast, clear, and genuinely affordable.",
  },
  {
    name: "David T.",
    role: "Operations Manager",
    quote:
      "We had a difficult workplace issue and their guidance kept us compliant while being fair to everyone involved.",
  },
  {
    name: "Priya K.",
    role: "Employee",
    quote:
      "I didn't know my entitlements until I spoke with HR Bridge. They explained everything in plain English.",
  },
  {
    name: "James O.",
    role: "Startup Founder",
    quote:
      "As a first-time employer, their employer service package gave me the confidence to hire without second-guessing myself.",
  },
];

const Testimonials = () => {
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
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`testimonials-page ${visible ? "is-visible" : ""}`} id="testimonials" ref={rootRef}>
      <div className="testimonials-hero">
        <span className="testimonials-kicker">Trusted By Many</span>
        <h1>What Our Clients Say</h1>
        <p>
          Real feedback from the employers and employees we've supported.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div
            className="testimonial-card"
            key={t.name}
            style={{ transitionDelay: `${i * 110}ms` }}
          >
            <span className="testimonial-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="testimonial-author">
              <span className="testimonial-avatar">{t.name.charAt(0)}</span>
              <div>
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;