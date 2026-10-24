import { Code, Database, Globe, Lightbulb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "../data/portfolio";

const highlights = [
  {
    icon: <Code size={20} />,
    title: "Rekayasa Perangkat Lunak",
    desc: "Membangun aplikasi terstruktur, bersih, dan mudah dirawat dengan standar modern",
  },
  {
    icon: <Globe size={20} />,
    title: "Pengembangan Web",
    desc: "Aplikasi web full-stack mulai dari perancangan database hingga antarmuka pengguna",
  },
  {
    icon: <Database size={20} />,
    title: "Manajemen Basis Data",
    desc: "Merancang skema data efisien dan mengoptimalkan kecepatan kueri",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Pemecahan Masalah",
    desc: "Menerjemahkan tantangan dan kebutuhan nyata menjadi solusi teknis yang tepat",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedSection>
          <span className="section-label">Tentang Saya</span>
          <h2 className="section-title">
            Membangun solusi digital
            <br />
            dengan tujuan & presisi
          </h2>
        </AnimatedSection>

        <div className="about-grid">
          {/* Text content */}
          <AnimatedSection delay={0.1}>
            <div className="about-text">
              {personalInfo.aboutMe.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div className="about-highlight-card" key={i}>
                  <div className="icon">{h.icon}</div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={0.2} direction="right">
            <div className="about-image-wrapper">
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} — Tentang Saya`}
                loading="lazy"
              />
              <div className="about-image-accent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
