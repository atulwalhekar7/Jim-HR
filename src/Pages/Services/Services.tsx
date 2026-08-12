import { useEffect, useRef, useState } from "react";
import "./Services.css";

interface ServiceItem {
  label: string;
  description: string;
  url: string;
}

const services: ServiceItem[] = [
  {
    label: "Employer Service Packages",
    description: "Ongoing HR support packages tailored to your business size and needs.",
    url: "https://hrbridgeau.com/employer-services/",
  },
  {
    label: "Employer Services Details",
    description: "A closer look at what's included in each employer support package.",
    url: "https://hrbridgeau.com/employer-services-details/",
  },
  {
    label: "Other Service Packages",
    description: "Training and workshop options to build HR capability in-house.",
    url: "https://hrbridgeau.com/training-and-workshop/",
  },
  {
    label: "Self-Assessment Training Program",
    description: "A guided program to help you self-assess and strengthen HR practices.",
    url: "https://hrbridgeau.com/self-assessment-training-program/",
  },
  {
    label: "CV & Career Services",
    description: "Resume, cover letter, and career support for job seekers.",
    url: "https://hrbridgeau.com/cv-career-template/",
  },
  {
    label: "Employee Assistance",
    description: "Confidential support services for employee wellbeing.",
    url: "https://hrbridgeau.com/employee-assistance/",
  },
  {
    label: "Pay, Entitlements & Contracts",
    description: "Guidance on pay rates, entitlements, and employment contracts.",
    url: "https://hrbridgeau.com/pay-entitlements-contracts/",
  },
  {
    label: "Workplace Issues",
    description: "Support resolving conflicts, complaints, and workplace concerns.",
    url: "https://hrbridgeau.com/workplace-issues/",
  },
  {
    label: "Unfair Dismissal Support",
    description: "Assistance with unfair dismissal and general protections claims.",
    url: "https://hrbridgeau.com/unfair-dismissal-general-protection-claims/",
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
        <span className="services-kicker">Full Range</span>
        <h1>Our Services</h1>
        <p>
          Explore our full range of HR services below. Each service opens on
          our detailed page in a new tab.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="service-card"
            key={service.url}
            style={{ transitionDelay: `${(i % 3) * 90 + Math.floor(i / 3) * 60}ms` }}
          >
            <span className="service-card-sheen" aria-hidden="true" />
            <h3>{service.label}</h3>
            <p>{service.description}</p>
            <span className="service-link">
              Learn more <span className="service-link-arrow">&rarr;</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;