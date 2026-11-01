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
      "Membangun dan menguji sistem digital yang fungsional dan andal, mulai dari aplikasi web berbasis Laravel dan MySQL hingga pengujian sistem komprehensif (test plan, Katalon, JMeter, & UAT) untuk memastikan performa, akurasi data, serta kualitas perangkat lunak.",
    tags: [
      "Web Development",
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "REST API",
      "Tailwind CSS",
      "Bootstrap",
      "System Testing & QA",
      "Test Case & Scenario",
      "Katalon Studio",
      "Apache JMeter",
      "UAT Testing",
      "Bug Tracking",
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
    categoryLines: ["DATA, ADMIN &", "OPERATIONS"],
    description:
      "Mendukung kelancaran operasional melalui verifikasi dan validasi data terstruktur, rekonsiliasi dokumen berita acara (BAST), pengelolaan data digital yang akurat, serta koordinasi administratif dan dokumentasi tim.",
    tags: [
      "Data Verification",
      "Data Validation",
      "BAST Reconciliation",
      "Document Management",
      "Administrative Support",
      "Data Entry",
      "Google Workspace",
      "Microsoft Office",
      "Field Coordination",
      "Digital Documentation",
      "Reporting & Archiving",
    ],
    icon: (
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Document / Clipboard Board */}
        <rect x="8" y="8" width="32" height="34" rx="6" fill="#ffffff" stroke="#1f2328" strokeWidth="2.5" />
        {/* Top Clip */}
        <path d="M18 6C18 4.9 18.9 4 20 4H28C29.1 4 30 4.9 30 6V9H18V6Z" fill="#1f2328" stroke="#1f2328" strokeWidth="1.5" />
        <circle cx="24" cy="6.5" r="1.5" fill="#ffffff" />
        {/* Row 1 - verified checkmark */}
        <path d="M14 17L17 20L23 14" stroke="#1f2328" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="27" y1="17" x2="35" y2="17" stroke="#1f2328" strokeWidth="2.2" strokeLinecap="round" />
        {/* Row 2 - verified checkmark */}
        <path d="M14 26L17 29L23 23" stroke="#1f2328" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="27" y1="26" x2="35" y2="26" stroke="#1f2328" strokeWidth="2.2" strokeLinecap="round" />
        {/* Row 3 - data bar / spreadsheet row */}
        <line x1="14" y1="35" x2="22" y2="35" stroke="#1f2328" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="27" y1="35" x2="35" y2="35" stroke="#1f2328" strokeWidth="2.2" strokeLinecap="round" />
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
