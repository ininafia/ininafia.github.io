import { useState } from "react";
import { GraduationCap, Briefcase, Users, Award, Calendar, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { timeline } from "../data/portfolio";

const filterTabs = [
  { key: "all", label: "Semua" },
  { key: "experience", label: "Pengalaman Kerja" },
  { key: "education", label: "Pendidikan" },
  { key: "organization", label: "Organisasi" },
  { key: "certification", label: "Sertifikasi & Award" },
];

const typeBadgeConfig: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
  education: {
    label: "Pendidikan",
    icon: <GraduationCap size={14} />,
    color: "#60a5fa",
  },
  experience: {
    label: "Pengalaman Kerja",
    icon: <Briefcase size={14} />,
    color: "#34d399",
  },
  organization: {
    label: "Organisasi",
    icon: <Users size={14} />,
    color: "#fbbf24",
  },
  certification: {
    label: "Sertifikasi & Award",
    icon: <Award size={14} />,
    color: "#a78bfa",
  },
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = timeline.filter((item) => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

  return (
    <section id="experience" className="section experience-section" style={{ position: "relative" }}>
      {/* Anchor targets for direct links */}
      <span id="trainings" style={{ position: "absolute", top: "-90px" }} aria-hidden="true" />
      <span id="awards" style={{ position: "absolute", top: "-90px" }} aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="experience-header-block">
            <span className="section-label">Pengalaman & Rekam Jejak</span>
            <h2 className="section-title">Perjalanan & Aktivitas Profesional</h2>
            <p className="section-subtitle">
              Dokumentasi rekam jejak akademis, pengalaman industri, kepemimpinan organisasi, serta pencapaian sertifikasi kompetensi.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="experience-filter-bar">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                className={`experience-filter-btn ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience Cards Grid */}
        <div className="experience-cards-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const badge = typeBadgeConfig[item.type] || typeBadgeConfig.education;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="experience-card"
                >
                  {/* Photo Showcase with Badge Overlay */}
                  <div className="experience-card-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="experience-media-img"
                      loading="lazy"
                    />
                    <div className="experience-badge-overlay">
                      <span className="experience-type-pill" style={{ color: badge.color }}>
                        {badge.icon}
                        <span>{badge.label}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="experience-card-body">
                    {/* Meta Info (Period & Location) */}
                    <div className="experience-meta-row">
                      <span className="experience-period">
                        <Calendar size={13} />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="experience-location">
                          <MapPin size={13} />
                          {item.location}
                        </span>
                      )}
                    </div>

                    {/* Title & Institution */}
                    <h3 className="experience-card-title">{item.title}</h3>
                    <p className="experience-institution">{item.institution}</p>

                    {/* Narrative Description */}
                    <p className="experience-desc">{item.description}</p>

                    {/* Key Highlights / Achievements */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="experience-highlights-block">
                        <span className="experience-highlights-heading">
                          <Sparkles size={13} />
                          Poin Pencapaian:
                        </span>
                        <ul className="experience-highlights-list">
                          {item.highlights.map((point, hIdx) => (
                            <li key={hIdx} className="experience-highlight-item">
                              <CheckCircle2 size={14} className="highlight-check-icon" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skills / Tech Used Tags */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="experience-skills-wrap">
                        {item.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="experience-skill-chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
