import { useState, useEffect, useCallback, useRef } from "react";
import "./Banner.css";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.gif";
import img3 from "../../assets/banner3.jpeg";

interface Slide {
  eyebrow: string;
  title: string;
  text: string;
  ctaLabel: string;
  ctaTo: string;
  image: string;
}

const slides: Slide[] = [
  {
    eyebrow: "For Employers",
    title: "HR Support That Puts People First",
    text: "From contracts to compliance, we help your business build a workplace people actually want to stay in.",
    ctaLabel: "Explore Employer Services",
    ctaTo: "services",
    image: img1,
  },
  {
    eyebrow: "For Employees",
    title: "Know Your Rights, Get Real Answers",
    text: "Confused about pay, entitlements, or a workplace issue? Talk to someone who can actually explain it.",
    ctaLabel: "Get in Touch",
    ctaTo: "contact",
    image: img2,
  },
  {
    eyebrow: "Trusted Across Australia",
    title: "Practical Advice, No Jargon",
    text: "Hundreds of businesses and employees rely on us for fast, clear HR guidance they can act on.",
    ctaLabel: "Read Testimonials",
    ctaTo: "testimonials",
    image: img3,
  },
];

const AUTOPLAY_MS = 5500;

const scrollToSection = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Banner = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
      setProgressKey((k) => k + 1);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section
      className="banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="banner-blob blob-one" />
      <div className="banner-blob blob-two" />
      <div className="banner-grain" aria-hidden="true" />

      <div className="banner-bg-layer">
        {slides.map((slide, i) => (
          <img
            key={slide.image}
            src={slide.image}
            alt=""
            className={`banner-bg-image ${i === active ? "is-active" : ""}`}
            aria-hidden="true"
          />
        ))}
        <div className="banner-overlay" />
      </div>

      <div className="banner-slides">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className={`banner-slide ${i === active ? "is-active" : ""}`}
            aria-hidden={i !== active}
          >
            <span className="banner-eyebrow">
              <span className="banner-eyebrow-dot" />
              {slide.eyebrow}
            </span>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <div className="banner-actions">
              <a
                href={`#${slide.ctaTo}`}
                className="banner-btn primary"
                onClick={scrollToSection(slide.ctaTo)}
              >
                <span className="banner-btn-label">{slide.ctaLabel}</span>
                <span className="banner-btn-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                href="#about"
                className="banner-btn secondary"
                onClick={scrollToSection("about")}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="banner-arrow arrow-left" onClick={prev} aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="banner-arrow arrow-right" onClick={next} aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="banner-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            className={`banner-dot ${i === active ? "is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === active && !paused && (
              <span
                key={progressKey}
                className="banner-dot-progress"
                style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Banner;