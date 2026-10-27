import { motion } from "framer-motion";
import { ArrowDown, Download, ArrowRight, Sparkles, Code2 } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background Running Text (Marquee di belakang foto) */}
      <div className="hero-marquee-wrap" aria-hidden="true">
        <div className="hero-marquee-track">
          <span className="marquee-name">NAFIATUL MUAWANAH</span>
          <span className="marquee-separator" />
          <span className="marquee-tag">SOFTWARE ENGINEER</span>
          <span className="marquee-separator" />
          <span className="marquee-name">NAFIATUL MUAWANAH</span>
          <span className="marquee-separator" />
          <span className="marquee-tag">FULLSTACK DEVELOPER</span>
          <span className="marquee-separator" />
        </div>
        <div className="hero-marquee-track" aria-hidden="true">
          <span className="marquee-name">NAFIATUL MUAWANAH</span>
          <span className="marquee-separator" />
          <span className="marquee-tag">SOFTWARE ENGINEER</span>
          <span className="marquee-separator" />
          <span className="marquee-name">NAFIATUL MUAWANAH</span>
          <span className="marquee-separator" />
          <span className="marquee-tag">FULLSTACK DEVELOPER</span>
          <span className="marquee-separator" />
        </div>
      </div>

      {/* Hero Center Stage */}
      <div className="container hero-center-stage">
        {/* Status Chip */}
        <motion.div
          className="hero-badge-pill"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-status-dot" />
          <span>Fresh Graduate • Terbuka untuk Peluang Kerja</span>
        </motion.div>

        {/* Photo Cutout with floating tags */}
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-photo-cutout">
            <img
              src={personalInfo.profileImageNoBg}
              alt={`${personalInfo.name} — Foto Profil`}
              loading="eager"
            />
          </div>

          <div className="hero-float-pill pill-left">
            <Code2 size={16} color="var(--accent)" />
            <span>Software Engineer</span>
          </div>

          <div className="hero-float-pill pill-right">
            <Sparkles size={16} color="var(--accent)" />
            <span>Web Developer</span>
          </div>
        </motion.div>

        {/* Name, Headline, Bio, Buttons */}
        <motion.div
          className="hero-text-block"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h1 className="hero-name-heading">{personalInfo.name}</h1>
          <p className="hero-role-sub">{personalInfo.headline}</p>
          <p className="hero-bio-para">{personalInfo.shortBio}</p>

          <div className="hero-action-buttons">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projects");
                if (el) {
                  const navOffset = 75;
                  const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({ top: Math.max(0, elementTop - navOffset), behavior: "smooth" });
                }
              }}
            >
              Lihat Portofolio
              <ArrowRight size={16} />
            </a>

            <a
              href={personalInfo.cvUrl}
              className="btn btn-secondary"
              download
              aria-label="Unduh CV"
            >
              <Download size={16} />
              Unduh CV
            </a>

            <div className="hero-social-group">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Profil GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Profil LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => {
            const el = document.getElementById("projects");
            if (el) {
              const navOffset = 75;
              const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({ top: Math.max(0, elementTop - navOffset), behavior: "smooth" });
            }
          }}
          style={{ cursor: "pointer" }}
          role="button"
          aria-label="Scroll ke Galeri Proyek"
        >
          <span>Scroll</span>
          <div className="scroll-indicator-line" />
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
