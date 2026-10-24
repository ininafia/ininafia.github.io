import AnimatedSection from "./AnimatedSection";
import { TechIcon } from "./TechIcons";

// Featured brand icons list for the squircle showcase dock
const showcaseIcons = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "Tailwind CSS",
  "Bootstrap",
  "Laravel",
  "REST API",
  "MySQL",
  "XAMPP",
  "Git",
  "GitHub",
  "VS Code",
  "Antigravity IDE",
  "Figma",
  "Microsoft Office",
  "Antares",
];

interface CapabilityCardData {
  number: string;
  categoryLines: string[];
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const capabilityCards: CapabilityCardData[] = [
  {
    number: "01",
    categoryLines: ["IT, WEB", "DEVELOPMENT &", "QA"],
    description:
      "Building and testing functional digital systems, from database-driven web applications to RFID and QR-based solutions, with a focus on reliability, usability, and practical problem-solving.",
    tags: [
      "Web Development",
      "System Testing",
      "Bug Identification",
      "System Analysis",
      "Database Management",
      "MySQL",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "RFID & QR Integration",
    ],
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="7" width="38" height="34" rx="7" fill="#ffffff" stroke="#1f2328" strokeWidth="2.5" />
        <line x1="5" y1="17" x2="43" y2="17" stroke="#1f2328" strokeWidth="2.2" />
        <circle cx="11" cy="12" r="1.8" fill="#1f2328" />
        <circle cx="17" cy="12" r="1.8" fill="#1f2328" />
        <circle cx="23" cy="12" r="1.8" fill="#1f2328" />
        <path d="M19 25L14 29L19 33" stroke="#1f2328" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29 25L34 29L29 33" stroke="#1f2328" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 23L22 35" stroke="#1f2328" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    categoryLines: ["VA & DIGITAL", "OPERATIONS"],
    description:
      "Supporting teams with organized data, documentation, research, and digital workflows while helping keep day-to-day operations accurate and efficient.",
    tags: [
      "Data Entry",
      "Data Validation",
      "Document Management",
      "Online Research",
      "Administrative Support",
      "Google Workspace",
      "Social Media Management",
      "Content Optimization",
    ],
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Speech Bubble */}
        <path d="M31 7H39C40.6 7 42 8.4 42 10V14C42 15.6 40.6 17 39 17H36L33 19.5V17H31C29.4 17 28 15.6 28 14V10C28 8.4 29.4 7 31 7Z" fill="#ffffff" stroke="#1f2328" strokeWidth="2" strokeLinejoin="round" />
        <line x1="32" y1="11" x2="38" y2="11" stroke="#1f2328" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="32" y1="13.5" x2="36" y2="13.5" stroke="#1f2328" strokeWidth="1.8" strokeLinecap="round" />
        
        {/* Headset arc */}
        <path d="M15 21C15 16 19 12 24 12C29 12 33 16 33 21" stroke="#1f2328" strokeWidth="2.2" strokeLinecap="round" />
        {/* Ear pads */}
        <rect x="13.5" y="19" width="3" height="6" rx="1.5" fill="#1f2328" />
        <rect x="31.5" y="19" width="3" height="6" rx="1.5" fill="#1f2328" />
        {/* Mic */}
        <path d="M32 23C32 26 29 27.5 26 27.5" stroke="#1f2328" strokeWidth="2" strokeLinecap="round" />
        <circle cx="25" cy="27.5" r="1.2" fill="#1f2328" />

        {/* Person Head */}
        <circle cx="24" cy="20.5" r="5" fill="#ffffff" stroke="#1f2328" strokeWidth="2.2" />
        
        {/* Torso */}
        <path d="M16 34C16 29.5 19.5 27 24 27C28.5 27 32 29.5 32 34" fill="#ffffff" stroke="#1f2328" strokeWidth="2.2" strokeLinecap="round" />
        
        {/* Laptop */}
        <rect x="18" y="31.5" width="12" height="8" rx="1.5" fill="#ffffff" stroke="#1f2328" strokeWidth="2" />
        <path d="M13 41.5H35" stroke="#1f2328" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section what-i-can-do-section" aria-label="What I Can Do">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="capabilities-header">
            <span className="capabilities-kicker">MY CAPABILITIES</span>
            <h2 className="capabilities-title">
              What I Can Do<span className="title-cursor">|</span>
            </h2>
            <p className="capabilities-subtitle">
              Saya menggabungkan kemampuan teknis, pemecahan masalah, dan keahlian rekayasa perangkat lunak untuk membangun sistem yang andal, mengelola basis data, dan menghadirkan solusi digital yang efisien.
            </p>
          </div>
        </AnimatedSection>

        {/* Squircle Brand Icons Dock with Keterangan */}
        <AnimatedSection delay={0.1}>
          <div className="squircle-icons-dock" role="region" aria-label="Koleksi Logo Teknologi">
            <div className="dock-header">
              <span className="dock-kicker">TECH STACK & TOOLS</span>
            </div>
            <div className="dock-grid">
              {showcaseIcons.map((tech) => (
                <div key={tech} className="tech-icon-card" title={tech}>
                  <div className="tech-icon-symbol">
                    <TechIcon name={tech} size={28} />
                  </div>
                  <span className="tech-icon-name">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Capability Focus Cards (Horizontal Side-by-Side as requested from reference image) */}
        <div className="capability-cards-grid">
          {capabilityCards.map((card, ci) => (
            <AnimatedSection key={card.number} delay={0.25 + ci * 0.1}>
              <div className="capability-card">
                {/* Background topographic subtle wave lines */}
                <div className="capability-card-bg-lines" aria-hidden="true">
                  <svg viewBox="0 0 400 500" fill="none" preserveAspectRatio="none">
                    <path d="M-50 120 C 100 80, 250 180, 450 140" stroke="currentColor" strokeWidth="1" />
                    <path d="M-50 220 C 80 180, 220 280, 450 240" stroke="currentColor" strokeWidth="1" />
                    <path d="M-50 320 C 120 280, 280 390, 450 340" stroke="currentColor" strokeWidth="1" />
                    <path d="M-50 420 C 140 380, 260 480, 450 440" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                <div className="cap-header">
                  <span className="cap-number">{card.number}</span>
                  <div className="cap-category">
                    {card.categoryLines.map((line, li) => (
                      <span key={li} className="cap-category-line">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="cap-icon-box" aria-hidden="true">
                  {card.icon}
                </div>

                <p className="cap-desc">{card.description}</p>

                <div className="cap-tags">
                  {card.tags.map((tag) => (
                    <span key={tag} className="cap-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
