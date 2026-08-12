import { useEffect, useRef, useState } from "react";
import "./About.css";

const values = [
  {
    title: "People First",
    text: "Every recommendation we make puts the wellbeing of employers and employees on equal footing.",
  },
  {
    title: "Practical Advice",
    text: "No jargon, no fence-sitting — just clear guidance you can act on the same day.",
  },
  {
    title: "Fair Process",
    text: "We help you handle workplace issues the right way, protecting both compliance and trust.",
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

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 8;
    const rotateY = (x / rect.width) * 8;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section className={`about-page ${visible ? "is-visible" : ""}`} id="about" ref={rootRef}>
      <div className="about-hero">
        <span className="about-kicker">Who We Are</span>
        <h1>About Us</h1>
        <p>
          HR Bridge was founded to make expert HR support accessible to
          businesses of every size — without the jargon, delays, or
          eye-watering retainer fees.
        </p>
      </div>

      <div className="about-body">
        <div className="about-story">
          <h2>Our Story</h2>
          <p>
            We started HR Bridge after seeing too many small and mid-sized
            employers struggle to get timely, affordable HR advice — and too
            many employees left unsure of their rights at work. Today we work
            with businesses across Australia on everything from day-to-day
            HR questions to complex workplace disputes.
          </p>
        </div>

        <div className="about-values">
          {values.map((value, i) => (
            <div
              className="value-card"
              key={value.title}
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <span className="value-index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;