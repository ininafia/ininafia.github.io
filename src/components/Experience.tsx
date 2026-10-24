import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Users,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Camera,
  X,
  Maximize2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { timeline } from "../data/portfolio";

type MosaicPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tag: string;
  aspect: "portrait" | "landscape";
  objectPosition?: string;
};

const mosaicColumns: MosaicPhoto[][] = [
  // Kolom 1: Atas Portrait, Bawah Landscape
  [
    {
      id: "mos-1",
      src: "/foto-profile.png",
      alt: "Momen Kelulusan & Wisuda S1 Informatika",
      caption: "Wisuda S1 Informatika",
      tag: "Graduation",
      aspect: "portrait",
    },
    {
      id: "mos-2",
      src: "/project-scoring.jpg",
      alt: "Sistem Penilaian Pencak Silat Real-Time",
      caption: "Sistem Penilaian Digital",
      tag: "Capstone System",
      aspect: "landscape",
    },
  ],
  // Kolom 2: Atas Landscape, Bawah Portrait (Interlocking)
  [
    {
      id: "mos-3",
      src: "/magang-bali.jpeg",
      alt: "Presentasi Proyek Sistem Indo GoPermit bersama Tim",
      caption: "Presentasi Proyek Indo GoPermit",
      tag: "Internship & Team",
      aspect: "landscape",
    },
    {
      id: "mos-4",
      src: "/candid-3-focused.jpeg",
      alt: "Dokumentasi Riset & Diskusi Kampus",
      caption: "Dedikasi & Semangat Belajar",
      tag: "Campus Life",
      aspect: "portrait",
    },
  ],
  // Kolom 3: Atas Portrait, Bawah Landscape
  [
    {
      id: "mos-5",
      src: "/candid-1.jpeg",
      alt: "Potret Mahasiswa Berprestasi",
      caption: "Potret Mahasiswa Berprestasi",
      tag: "Milestone",
      aspect: "portrait",
      objectPosition: "center 25%",
    },
    {
      id: "mos-6",
      src: "/magang-jember.png",
      alt: "Mentoring & Kolaborasi Coding Hummatech",
      caption: "Kolaborasi Riset & Coding",
      tag: "Engineering",
      aspect: "landscape",
    },
  ],
];

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
  const [selectedPhoto, setSelectedPhoto] = useState<MosaicPhoto | null>(null);

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
              Koleksi dokumentasi visual dan rekam jejak akademis, pengalaman industri, kepemimpinan organisasi, serta pencapaian sertifikasi kompetensi.
            </p>
          </div>
        </AnimatedSection>

        {/* 6-Photo Interlocking Mosaic Showcase (Exact Reference Layout) */}
        <AnimatedSection delay={0.1}>
          <div className="mosaic-showcase-wrapper">
            <div className="mosaic-header-sub">
              <span className="mosaic-tag-pill">
                <Camera size={13} />
                <span>MOMENTS & MILESTONES</span>
              </span>
              <p className="mosaic-hint-text">
                Koleksi foto kegiatan, penganugerahan, dan perjalanan akademis. Klik foto untuk memperbesar.
              </p>
            </div>

            {/* 3-Column Clean Interlocking Grid */}
            <div className="mosaic-columns-grid">
              {mosaicColumns.map((column, colIdx) => (
                <div key={colIdx} className="mosaic-column">
                  {column.map((photo) => (
                    <div
                      key={photo.id}
                      className={`mosaic-photo-card ${photo.aspect}`}
                      onClick={() => setSelectedPhoto(photo)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && setSelectedPhoto(photo)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="mosaic-card-img"
                        style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                        loading="lazy"
                      />
                      <div className="mosaic-card-overlay">
                        <span className="mosaic-card-tag">{photo.tag}</span>
                        <span className="mosaic-card-caption">{photo.caption}</span>
                        <Maximize2 size={16} className="mosaic-zoom-icon" />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.15}>
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

      {/* Lightbox Modal for Photo Preview */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            className="photo-lightbox-overlay"
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="photo-lightbox-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className="photo-lightbox-close"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Tutup foto"
              >
                <X size={20} />
              </button>

              <div className="photo-lightbox-media">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="photo-lightbox-img"
                />
              </div>

              <div className="photo-lightbox-caption-bar">
                <span className="photo-lightbox-tag">{selectedPhoto.tag}</span>
                <h4 className="photo-lightbox-caption">{selectedPhoto.caption}</h4>
                <p className="photo-lightbox-alt">{selectedPhoto.alt}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
