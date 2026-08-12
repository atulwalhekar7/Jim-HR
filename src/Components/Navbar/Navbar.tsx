import { useState, useEffect } from "react";
import logo from "../../assets/logo.png"; // replace with your downloaded logo path
import "./Navbar.css";

interface ServiceLink {
  label: string;
  url: string;
}

const serviceLinks: ServiceLink[] = [
  { label: "Employer Service Packages", url: "https://hrbridgeau.com/employer-services/" },
  { label: "Employer Services Details", url: "https://hrbridgeau.com/employer-services-details/" },
  { label: "Other Service Packages", url: "https://hrbridgeau.com/training-and-workshop/" },
  { label: "Self-Assessment Training Program", url: "https://hrbridgeau.com/self-assessment-training-program/" },
  { label: "CV & Career Services", url: "https://hrbridgeau.com/cv-career-template/" },
  { label: "Employee Assistance", url: "https://hrbridgeau.com/employee-assistance/" },
  { label: "Pay, Entitlements & Contracts", url: "https://hrbridgeau.com/pay-entitlements-contracts/" },
  { label: "Workplace Issues", url: "https://hrbridgeau.com/workplace-issues/" },
  { label: "Unfair Dismissal Support", url: "https://hrbridgeau.com/unfair-dismissal-general-protection-claims/" },
];

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // tracks scroll position to trigger the shrink/shadow effect
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    setServicesOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={scrollToSection("home")}>
          <img src={logo} alt="Site Logo" />
        </a>

        <button
          className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" className="navbar-link" onClick={scrollToSection("home")}>
            Home
          </a>
          <a href="#about" className="navbar-link" onClick={scrollToSection("about")}>
            About
          </a>

          <div
            className="navbar-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="#services"
              className="navbar-link navbar-link-caret"
              onClick={scrollToSection("services")}
            >
              Services
              <svg
                className={`navbar-caret ${servicesOpen ? "is-open" : ""}`}
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <ul className={`dropdown-menu ${servicesOpen ? "is-open" : ""}`}>
              {serviceLinks.map((service, i) => (
                <li key={service.url} style={{ transitionDelay: `${i * 25}ms` }}>
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="#testimonials" className="navbar-link" onClick={scrollToSection("testimonials")}>
            Testimonials
          </a>
          <a href="#contact" className="navbar-link navbar-link-cta" onClick={scrollToSection("contact")}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;