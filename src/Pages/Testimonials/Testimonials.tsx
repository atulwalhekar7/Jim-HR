import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

/* Paraphrased in our own words, based on client feedback shared on the
   HR Bridge testimonials page — not reproduced verbatim. */
const testimonials: Testimonial[] = [
  {
    name: "Nelly Torque",
    role: "General Manager",
    company: "Smart Healthcare Solutions",
    quote:
      "Since partnering with HR Bridge in 2022, their on-call support has kept us fully aligned with Fair Work rules and running smoothly day to day.",
  },
  {
    name: "Ripple Deep Kaur",
    role: "Founder & Director",
    company: "Dream Way",
    quote:
      "From payroll to recruitment to staying ahead of policy changes, HR Bridge lets us focus on the business knowing HR is genuinely taken care of.",
  },
  {
    name: "Nicks P.",
    role: "Client",
    company: "Esprit Auto Services",
    quote:
      "They resolved a tricky people issue for us and set up custom contracts, plus helped shape our whole approach to staff recognition and budgeting.",
  },
  {
    name: "Aditya Kumar",
    role: "Client",
    company: "Unitree Finance",
    quote:
      "In just a few months they've updated our contracts, tightened compliance, and streamlined our processes — like having a full HR team on tap.",
  },
  {
    name: "Elektra Veron",
    role: "Client",
    company: "Meta Cleaning",
    quote:
      "Our handbook and contracts were built specifically around our cleaning business, not off a template. The team induction was thoughtful and genuinely engaging.",
  },
  {
    name: "David",
    role: "Client",
    company: "Awake Tradies",
    quote:
      "Clear, compliant subcontractor agreements and solid guidance on managing them — their advice made our whole process more efficient and legally sound.",
  },
  {
    name: "Chai Kada",
    role: "Client",
    company: "Chai Kada",
    quote:
      "Great guidance right from the moment we launched the business. Roli and the team made a real difference early on.",
  },
  {
    name: "Karan Dhanako",
    role: "Client",
    company: "Unitree Finance",
    quote:
      "Fair pricing, quick replies, and work done properly. Came recommended by a friend and it's easy to see why.",
  },
  {
    name: "Stan Makumbe",
    role: "Client",
    company: "Celsius Air",
    quote:
      "A team that actually understands HR. Roli and her people are an easy recommendation.",
  },
  {
    name: "Jehan Peddar",
    role: "Client",
    company: "West Coast Exterior Pros",
    quote:
      "Professional from start to finish, with honest advice on what to do — and just as importantly, what not to.",
  },
  {
    name: "Pritesh Solanki",
    role: "Owner",
    company: "The Clean Scene WA",
    quote:
      "From contracts to a full staff handbook, everything was tailored to my business and kept compliant. It gave me real confidence as we scaled up.",
  },
  {
    name: "Caroline Shaw",
    role: "Client",
    company: "Caroline Shaw",
    quote:
      "Friendly, reliable, and genuinely easy to work with — exactly the kind of HR support you want when you'd rather not deal with the stress yourself.",
  },
];

/* split into rows for the horizontal wall-of-love marquee */
const rows = [
  testimonials.filter((_, i) => i % 3 === 0),
  testimonials.filter((_, i) => i % 3 === 1),
  testimonials.filter((_, i) => i % 3 === 2),
];

const Stars = () => (
  <div className="testimonial-stars" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1 5.9L10 14.8 4.8 17.6l1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
      </svg>
    ))}
  </div>
);

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
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`testimonials-page ${visible ? "is-visible" : ""}`} id="testimonials" ref={rootRef}>
      <div className="testimonials-hero">
        <span className="testimonials-kicker">
          <span className="testimonials-kicker__dot" />
          Trusted By Many
        </span>
        <h1>What Our Clients Say</h1>
        <p>Real feedback from the employers and employees we&rsquo;ve supported across Australia.</p>
      </div>

      <div className="testimonials-wall">
        {rows.map((row, rowIndex) => (
          <div
            className={`testimonials-row ${rowIndex % 2 === 1 ? "testimonials-row--reverse" : ""}`}
            key={rowIndex}
          >
            <div className="testimonials-row__track">
              {[...row, ...row].map((t, i) => (
                <div className="testimonial-card" key={`${t.name}-${i}`}>
                  <Stars />
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-author">
                    <span className="testimonial-avatar">{t.name.charAt(0)}</span>
                    <div>
                      <span className="testimonial-name">{t.name}</span>
                      <span className="testimonial-role">
                        {t.role} · {t.company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="testimonials-wall__fade testimonials-wall__fade--left" aria-hidden="true" />
        <div className="testimonials-wall__fade testimonials-wall__fade--right" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Testimonials;