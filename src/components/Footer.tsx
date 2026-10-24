import { Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-name">{personalInfo.name}</span>
          <span className="footer-tagline">Dirancang & dibangun dengan dedikasi.</span>
        </div>

        <div className="footer-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn-icon" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>

        <span className="footer-copyright">© {year} {personalInfo.name}. Seluruh hak cipta dilindungi.</span>
      </div>
    </footer>
  );
}
