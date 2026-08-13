import { Mail, User, Users, Phone, MapPin } from "lucide-react";
import logo from "../../assets/Logo.png"; // HR Bridge circular logo
import badge from "../../assets/Award.webp"; // 2025 Belmont & WA Small Business Awards badge
import "./Footer.css";

// lucide-react dropped brand/social icons (trademark reasons), so these
// four are small inline SVGs instead of a lucide import.
const Facebook = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.35c-.26-.03-1.15-.11-2.19-.11-2.17 0-3.66 1.32-3.66 3.75V10.5H8v3h2.65V21h2.85z" />
  </svg>
);

const Instagram = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Linkedin = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3.5 9h3V21h-3V9zm6 0h2.9v1.64h.04c.4-.76 1.4-1.56 2.86-1.56 3.06 0 3.62 2.02 3.62 4.64V21h-3v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-3V9z" />
  </svg>
);

const Youtube = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12s0-3.16-.4-4.68a2.5 2.5 0 0 0-1.76-1.77C18.32 5.15 12 5.15 12 5.15s-6.32 0-7.84.4A2.5 2.5 0 0 0 2.4 7.32C2 8.84 2 12 2 12s0 3.16.4 4.68a2.5 2.5 0 0 0 1.76 1.77c1.52.4 7.84.4 7.84.4s6.32 0 7.84-.4a2.5 2.5 0 0 0 1.76-1.77C22 15.16 22 12 22 12z" stroke="none" />
    <path d="M10 15.02V8.98L15.5 12z" fill="#0c2b2a" stroke="none" />
  </svg>
);

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
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <img src={logo} alt="HR Bridge" className="footer-logo" />
          <p>Empowering your business through effective HR solutions.</p>
          <img
            src={badge}
            alt="32nd Belmont & Western Australian Small Business Awards 2025 Finalist"
            className="footer-badge"
          />
        </div>

        {/* Explore */}
        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#home" onClick={scrollToSection("home")}>Home</a>
          <a href="#about" onClick={scrollToSection("about")}>About Us</a>
          <a href="#services" onClick={scrollToSection("services")}>Services</a>
          <a href="#testimonials" onClick={scrollToSection("testimonials")}>Testimonials</a>
          {/* <a href="#blog" onClick={scrollToSection("blog")}>Blog</a> */}
          <a href="#contact" onClick={scrollToSection("contact")}>Contact Us</a>
        </div>

        {/* Follow Us */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com/hrbridgeau" target="_blank" rel="noopener noreferrer">
            <Facebook size={16} /> Facebook
          </a>
          <a href="https://www.instagram.com/hrbridgeau" target="_blank" rel="noopener noreferrer">
            <Instagram size={16} /> Instagram
          </a>
          <a href="https://www.linkedin.com/company/hrbridgeau" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://www.youtube.com/@hrbridgeau" target="_blank" rel="noopener noreferrer">
            <Youtube size={16} /> Youtube
          </a>
        </div>

        {/* Get In Touch */}
        <div className="footer-contact-card">
          <div className="footer-contact-glow" aria-hidden="true" />
          <h4>Get In Touch</h4>

          <a href="mailto:Director@hrbridgeau.com" className="footer-contact-link">
            <span className="footer-contact-icon"><Mail size={14} /></span>
            Director@hrbridgeau.com
          </a>
          <a href="mailto:info@hrbridgeau.com" className="footer-contact-link">
            <span className="footer-contact-icon"><User size={14} /></span>
            info@hrbridgeau.com
          </a>
          <a href="mailto:advisors@hrbridgeau.com" className="footer-contact-link">
            <span className="footer-contact-icon"><Users size={14} /></span>
            advisors@hrbridgeau.com
          </a>
          <a href="tel:+61863746473" className="footer-contact-link">
            <span className="footer-contact-icon"><Phone size={14} /></span>
            08 6374 6473
          </a>
          <a href="tel:+61444521694" className="footer-contact-link">
            <span className="footer-contact-icon"><Phone size={14} /></span>
            04 4452 1694
          </a>
          <p className="footer-contact-link footer-contact-address">
            <span className="footer-contact-icon"><MapPin size={14} /></span>
            HR Bridge Pty Ltd Suite 22, 220 Carr Place Leederville WA 6007
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Copyright {year} HR Bridge Australia.</p>
      </div>
    </footer>
  );
};

export default Footer;