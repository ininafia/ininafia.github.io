import { GraduationCap, Briefcase, Users, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { timeline } from "../data/portfolio";

const typeConfig: Record<string, { label: string; icon: React.ReactNode }> = {
  education: { label: "Pendidikan", icon: <GraduationCap size={12} /> },
  experience: { label: "Pengalaman Kerja", icon: <Briefcase size={12} /> },
  organization: { label: "Organisasi", icon: <Users size={12} /> },
  certification: { label: "Sertifikasi", icon: <Award size={12} /> },
};

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: "relative" }}>
      {/* Anchor targets for navbar links AWARDS & TRAININGS */}
      <span id="trainings" style={{ position: "absolute", top: "-90px" }} aria-hidden="true" />
      <span id="awards" style={{ position: "absolute", top: "-90px" }} aria-hidden="true" />
      <div className="container">
        <AnimatedSection>
          <span className="section-label">Pengalaman & Pendidikan</span>
          <h2 className="section-title">Perjalanan Saya</h2>
          <p className="section-subtitle">
            Latar belakang akademis, pengalaman praktis, dan proses belajar berkelanjutan yang membentuk keahlian saya.
          </p>
        </AnimatedSection>

        <div className="timeline-wrapper">
          {timeline.map((item, i) => {
            const config = typeConfig[item.type] || typeConfig.education;
            return (
              <AnimatedSection key={item.id} delay={i * 0.1} direction="left">
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="timeline-type-badge">
                      {config.icon}
                      {config.label}
                    </span>
                    <h3>{item.title}</h3>
                    <p className="institution">{item.institution}</p>
                    <p className="period">{item.period}</p>
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
