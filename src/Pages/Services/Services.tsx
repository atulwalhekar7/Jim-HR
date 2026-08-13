import { useEffect, useRef, useState } from "react";
import "./Services.css";

interface ServiceItem {
  label: string;
  description: string;
  url: string;
  icon: JSX.Element;
}

/* Category data as shown in the "Our Services" section on the HR Bridge
   homepage (hrbridgeau.com), with short supporting copy. */
const services: ServiceItem[] = [
  {
    label: "Employers Services",
    description:
      "End-to-end HR management — contracts, compliance, and people strategy handled for you, so you can lead with confidence.",
    url: "https://hrbridgeau.com/employer-services-details/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 20V10l8-5 8 5v10" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M9 20v-6h6v6" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Employee Services",
    description: "Confidential support and resources that help your people thrive at work.",
    url: "https://hrbridgeau.com/employee-assistance/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 20c1-3.5 4-5.5 6.5-5.5s5.5 2 6.5 5.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "HR Health Check",
    description: "A full review of your contracts, policies and handbook to uncover compliance gaps.",
    url: "https://hrbridgeau.com/employer-services-details/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M9 12.5l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    label: "Training & Workshop",
    description: "Hands-on workshops that build real HR capability across your leadership team.",
    url: "https://hrbridgeau.com/training-and-workshop/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Self-Assessment Training",
    description: "A guided self-assessment program to strengthen your HR foundations from day one.",
    url: "https://hrbridgeau.com/self-assessment-training-program/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 15.9 6.5 18.6l1.4-6.1-4.7-4.2 6.2-.6L12 2z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const Services = () => {
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
    <section className={`services-page ${visible ? "is-visible" : ""}`} id="services" ref={rootRef}>
      <div className="services-hero">
        <span className="services-kicker">
          <span className="services-kicker__dot" />
          Full Range
        </span>
        <h1>Explore Our HR Service Categories</h1>
        <p>
          From day-to-day advisory to full compliance health checks, here&rsquo;s
          how HR Bridge supports employers and employees alike.
        </p>
      </div>

      <div className="services-bento">
        {services.map((service, i) => (
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="service-card"
            key={service.url + service.label}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <span className="service-card-glow" aria-hidden="true" />
            <span className="service-card__index">{String(i + 1).padStart(2, "0")}</span>
            <span className="service-card__icon">{service.icon}</span>
            <h3>{service.label}</h3>
            <p>{service.description}</p>
            <span className="service-link">
              <span className="service-link__text">Learn more</span>
              <span className="service-link__circle" aria-hidden="true">
                &rarr;
              </span>
            </span>
          </a>
        ))}
      </div>

      <a
        className="services-cta"
        href="https://hrbridgeau.com/am_services/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View All Services
        <span className="services-cta__arrow">&rarr;</span>
      </a>
    </section>
  );
};

export default Services;