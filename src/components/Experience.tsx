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

const collagePhotos: Array<{
  id: string;
  src: string;
  alt: string;
  caption: string;
  tag: string;
  aspect: string;
  rotation: number;
  objectPosition?: string;
}> = [
  {
    id: "col-1",
    src: "/foto-profile.png",
    alt: "Momen Kelulusan & Wisuda S1",
    caption: "Wisuda S1 Informatika",
    tag: "Graduation",
    aspect: "portrait",
    rotation: -2,
  },
  {
    id: "col-2",
    src: "/exp-organization.jpg",
    alt: "Kolaborasi Tim Proyek & Workshop Teknologi",
    caption: "Kolaborasi Tim & Workshop",
    tag: "Teamwork",
    aspect: "landscape",
    rotation: 1.8,
  },
  {
    id: "col-3",
    src: "/candid-1.jpeg",
    alt: "Potret Mahasiswa Berprestasi",
    caption: "Dedikasi & Semangat Belajar",
    tag: "Milestone",
    aspect: "portrait",
    rotation: -1.5,
    objectPosition: "center 25%",
  },
  {
    id: "col-4",
    src: "/project-qa.png",
    alt: "Platform Informasi Lobi Poliwangi - Portal Beasiswa",
    caption: "Platform Lobi Poliwangi",
    tag: "Web Portal",
    aspect: "landscape",
    rotation: 2,
  },
  {
    id: "col-5",
    src: "/candid-2.jpeg",
    alt: "Dokumentasi Candid Pembelajaran",
    caption: "Eksplorasi Ide & Konsep",
    tag: "Campus Life",
    aspect: "portrait",
    rotation: -2.2,
    objectPosition: "center 40%",
  },
  {
    id: "col-6",
    src: "/exp-internship.jpg",
    alt: "Pengalaman Kerja Praktik & Coding",
    caption: "Workspace Developer",
    tag: "Engineering",
    aspect: "landscape",
    rotation: 1.6,
  },
  {
    id: "col-7",
    src: "/exp-education.jpg",
    alt: "Suasana Belajar & Lab Komputer",
    caption: "Studi Rekayasa Web",
    tag: "Academics",
    aspect: "landscape",
    rotation: 1.8,
  },
  {
    id: "col-8",
    src: "/candid-3.jpeg",
    alt: "Dokumentasi Kegiatan & Diskusi Kampus",
    caption: "Diskusi & Riset Akademis",
    tag: "Discussion",
    aspect: "portrait",
    rotation: -2,
    objectPosition: "center 70%",
  },
  {
    id: "col-9",
    src: "/project-scoring.jpg",
    alt: "Sistem Penilaian Pencak Silat Real-Time",
    caption: "Sistem Penilaian Digital",
    tag: "Capstone",
    aspect: "landscape",
    rotation: 2.2,
  },
  {
    id: "col-10",
    src: "/project-student.png",
    alt: "Sistem Informasi Akademik Siswa",
    caption: "Sistem Informasi Akademik",
    tag: "Systems",
    aspect: "portrait",
    rotation: -1.6,
  },
  {
    id: "col-11",
    src: "/project-dashboard.jpg",
    alt: "Dashboard Monitoring Data & Analitik",
    caption: "Dashboard Analitik",
    tag: "Projects",
    aspect: "landscape",
    rotation: 1.5,
  },
  {
    id: "col-12",
    src: "/project-inventory.png",
    alt: "Sistem Manajemen Inventaris Barang",
    caption: "Manajemen Inventaris",
    tag: "Database",
    aspect: "portrait",
    rotation: -2.4,
  },
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
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof collagePhotos)[0] | null>(null);

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

        {/* Top Scattered Photo Collage (Matching Reference Screenshot) */}
        <AnimatedSection delay={0.1}>
          <div className="collage-showcase-wrapper">
            <div className="collage-header-sub">
              <span className="collage-tag-pill">
                <Camera size={13} />
                <span>MOMENTS & MILESTONES</span>
              </span>
              <p className="collage-hint-text">
                Koleksi foto kegiatan, penganugerahan, dan perjalanan akademis. Klik foto untuk memperbesar.
              </p>
            </div>

            {/* 6-Photo Scattered Cluster Grid */}
            <div className="collage-cluster-grid">
              {collagePhotos.map((photo) => (
                <div
                  key={photo.id}
                  className={`collage-item ${photo.aspect}`}
                  style={{ "--rotation": `${photo.rotation}deg` } as React.CSSProperties}
                  onClick={() => setSelectedPhoto(photo)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedPhoto(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="collage-item-img"
                    style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                    loading="lazy"
                  />
                  <div className="collage-item-overlay">
                    <span className="collage-item-tag">{photo.tag}</span>
                    <span className="collage-item-caption">{photo.caption}</span>
                    <Maximize2 size={16} className="collage-zoom-icon" />
                  </div>
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
