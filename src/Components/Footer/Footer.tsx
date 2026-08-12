import logo from "../../assets/logo.png"; // replace with your downloaded logo path
import "./Footer.css";

const scrollToSection = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Site Logo" className="footer-logo" />
          <p>
            Practical, people-focused HR support for employers and employees
            across Australia.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home" onClick={scrollToSection("home")}>Home</a>
          <a href="#about" onClick={scrollToSection("about")}>About</a>
          <a href="#services" onClick={scrollToSection("services")}>Services</a>
          <a href="#testimonials" onClick={scrollToSection("testimonials")}>Testimonials</a>
          <a href="#contact" onClick={scrollToSection("contact")}>Contact</a>
        </div>

        <div className="footer-services">
          <h4>Services</h4>
          <a href="https://hrbridgeau.com/employer-services/" target="_blank" rel="noopener noreferrer">
            Employer Service Packages
          </a>
          <a href="https://hrbridgeau.com/pay-entitlements-contracts/" target="_blank" rel="noopener noreferrer">
            Pay, Entitlements & Contracts
          </a>
          <a href="https://hrbridgeau.com/workplace-issues/" target="_blank" rel="noopener noreferrer">
            Workplace Issues
          </a>
          <a href="https://hrbridgeau.com/unfair-dismissal-general-protection-claims/" target="_blank" rel="noopener noreferrer">
            Unfair Dismissal Support
          </a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <a href="mailto:info@hrbridgeau.com" className="footer-contact-link">
            <span className="footer-contact-icon">✉</span> info@hrbridgeau.com
          </a>
          <a href="tel:+610000000000" className="footer-contact-link">
            <span className="footer-contact-icon">☎</span> +61 000 000 000
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} HR Bridge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;