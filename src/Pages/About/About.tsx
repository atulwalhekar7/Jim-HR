import { useEffect, useRef, useState } from "react";
import "./About.css";
import img from "../../assets/Roli-Agarwal.jpeg";

const deliverables = [
  {
    title: "HR Advisory & Compliance",
    text: "Straight-talking guidance on the Fair Work Act, modern awards, policies, contracts, and day-to-day employment questions.",
  },
  {
    title: "Work Health & Safety",
    text: "Practical, workable WHS systems that keep your team safe and your business compliant.",
  },
  {
    title: "Onboarding & Performance",
    text: "Structured support that helps new hires settle in fast and existing team members keep growing.",
  },
  {
    title: "Employee Relations & Investigations",
    text: "Sensitive workplace issues handled fairly, confidentially, and with a clear process from start to finish.",
  },
];

const About = () => {
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
    <section className={`about-page ${visible ? "is-visible" : ""}`} id="about" ref={rootRef}>
      {/* ---------------- page title (eyebrow + heading + subtitle) ---------------- */}
      <div className="about-heading">
        <span className="about-heading-eyebrow">Who We Are</span>
        <h1 className="about-heading-title">About Us</h1>
        <p className="about-heading-subtitle">
          Get to know the team turning HR from a headache into a genuine
          advantage for growing Australian businesses.
        </p>
      </div>

      {/* ---------------- compact hero: single image + content ---------------- */}
      <div className="about-hero-split">
        <div className="hero-image-wrap">
          <div className="hero-image-glow" aria-hidden="true" />
          <img
            className="hero-image"
            src={img}
            alt="Roli Aggarwal, Founder and Director of HR Bridge"
            loading="lazy"
          />
          <div className="hero-image-badge">
            <strong>10+</strong>
            <span>Years of HR expertise</span>
          </div>
        </div>

        <div className="about-hero-content">
          <h2>Your Strategic HR Department — Without the Overhead</h2>
          <p>
            Founded in Perth, HR Bridge gives small and mid-sized Australian
            businesses expert, embedded HR support — so compliance, people,
            and process stop competing for your attention.
          </p>

          <ul className="about-hero-stats">
            <li><strong>SME-first</strong><span>Built for growing teams</span></li>
            <li><strong>Full lifecycle</strong><span>Hire to offboard</span></li>
            <li><strong>Fair Work ready</strong><span>Always compliant</span></li>
          </ul>

          <div className="hero-founder-intro">
            <div className="hero-founder-avatar" aria-hidden="true">RA</div>
            <div className="hero-founder-text">
              <strong>Roli Aggarwal</strong>
              <span>Founder &amp; Director</span>
              <p>
                With over a decade of HR experience specializing in
                recruitment, Fair Work Act compliance, and workplace health
                and safety, Roli leads HR Bridge in delivering expert,
                tailored solutions across healthcare, hospitality,
                construction, agriculture, and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- what we deliver (capsule row) ---------------- */}
      <div className="about-section">
        <span className="about-kicker">What We Deliver</span>
        <h2 className="about-section-title">End-to-end HR support</h2>
        <div className="capsule-row">
          {deliverables.map((item, i) => (
            <div className="capsule" key={item.title} title={item.text}>
              <span className="capsule-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="capsule-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;