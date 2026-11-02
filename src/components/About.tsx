import { Code2, FlaskConical, Lightbulb, FileText } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "../data/portfolio";

const currentlyItems = [
  {
    icon: <Code2 size={15} />,
    action: "Building",
    target: "Web & digital projects",
  },
  {
    icon: <FlaskConical size={15} />,
    action: "Exploring",
    target: "Software testing & QA",
  },
  {
    icon: <Lightbulb size={15} />,
    action: "Learning",
    target: "Full-stack development",
  },
];

function VerifiedBadge() {
  return (
    <span className="about-verified-badge" title="Verified Professional" aria-label="Verified">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <path
          d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6s-2.95.875-3.6 2.148c-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5s.875 2.95 2.148 3.6c-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238 1.29 1.135 2.66 2.01 4.24 2.01s2.95-.875 3.6-2.148c.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z"
          fill="#1D9BF0"
        />
        <path
          d="M10.2 16.2l-3.7-3.7 1.4-1.4 2.3 2.3 6.3-6.3 1.4 1.4-7.7 7.7z"
          fill="#ffffff"
        />
      </svg>
    </span>
  );
}

function ContourLines() {
  return (
    <div className="about-contour-bg" aria-hidden="true">
      <svg viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
        <path
          d="M-50 160 C 250 80, 520 260, 850 140 C 1050 80, 1150 140, 1250 120"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M-50 250 C 200 180, 480 340, 800 230 C 1020 160, 1180 230, 1250 190"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M-50 340 C 180 290, 430 430, 760 310 C 980 240, 1120 310, 1250 270"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M-50 430 C 220 370, 530 490, 830 390 C 1040 330, 1160 400, 1250 360"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="about-modern-section">
      <ContourLines />

      <div className="container about-modern-container">
        {/* Top Header */}
        <AnimatedSection>
          <div className="about-header-block">
            <span className="about-kicker">ABOUT ME</span>
            <h2 className="about-headline">Problem Solver. Digital Generalist.</h2>
          </div>
        </AnimatedSection>

        {/* Profile Card & Bio Content */}
        <AnimatedSection delay={0.1}>
          <div className="about-main-card">
            {/* Profile Row: Avatar + Name & Stats */}
            <div className="about-profile-row">
              <div className="about-avatar-wrapper">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="about-avatar-img"
                  loading="lazy"
                />
              </div>

              <div className="about-identity-stats">
                <div className="about-name-title">
                  <h3 className="about-fullname">{personalInfo.name.toUpperCase()}</h3>
                  <VerifiedBadge />
                </div>
                <span className="about-role-tag">{personalInfo.headline}</span>
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="about-narrative">
              <p>
                Saya adalah lulusan Teknik Informatika yang berfokus pada software testing,
                pengembangan web, dan arsitektur sistem digital. Saya senang mengubah ide dan
                tantangan di dunia nyata menjadi solusi digital praktis, khususnya melalui aplikasi
                web, sistem basis data, dan optimalisasi sistem. Selama studi, saya memperoleh
                pengalaman langsung dalam membangun sistem berbasis data dan bekerja dengan teknologi
                seperti PHP, Laravel, MySQL, dan JavaScript.
              </p>
              <p>
                Melalui pengerjaan tugas akhir dan berbagai proyek perkuliahan, saya terbiasa
                membangun aplikasi web serta melakukan pengujian sistem agar berjalan dengan baik.
                Selain di bidang teknis, saya juga terbiasa dengan pengelolaan data, dokumentasi,
                dan pekerjaan administratif digital yang membutuhkan ketelitian.
              </p>

              <div className="about-resume-cta">
                <span>Ingin mengetahui lebih banyak tentang pengalaman saya? </span>
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-resume-link"
                >
                  <FileText size={15} />
                  <span>Download my resume</span>
                </a>
              </div>
            </div>

            {/* Bottom Row: Currently */}
            <div className="about-bottom-bar">
              <div className="about-currently-col">
                <span className="currently-label">CURRENTLY</span>
                <div className="currently-items-row">
                  {currentlyItems.map((item, idx) => (
                    <div className="currently-pill" key={idx}>
                      <div className="currently-icon">{item.icon}</div>
                      <div className="currently-texts">
                        <span className="currently-action">{item.action}</span>
                        <span className="currently-target">{item.target}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
