import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Github } from "./Icons";
import { projects, type Project } from "../data/portfolio";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Detail proyek: ${project.title}`}
      >
        <button className="modal-close" onClick={onClose} aria-label="Tutup dialog">
          <X size={18} />
        </button>

        <div className="modal-header">
          <div className="project-tag">Proyek Unggulan</div>
          <h2>{project.title}</h2>
          <p className="tagline">{project.tagline}</p>
        </div>

        {project.thumbnail && (
          <div className="modal-thumbnail-wrap">
            <img src={project.thumbnail} alt={project.title} loading="lazy" />
          </div>
        )}

        <div className="modal-section">
          <h4>Latar Belakang</h4>
          <p>{project.background}</p>
        </div>

        <div className="modal-section">
          <h4>Deskripsi</h4>
          <p>{project.description}</p>
        </div>

        <div className="modal-section">
          <h4>Fitur Utama</h4>
          <ul>
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h4>Peran Saya</h4>
          <p>{project.role}</p>
        </div>

        <div className="modal-section">
          <h4>Tantangan</h4>
          <p>{project.challenges}</p>
        </div>

        <div className="modal-section">
          <h4>Solusi</h4>
          <p>{project.solution}</p>
        </div>

        <div className="modal-section">
          <h4>Teknologi</h4>
          <div className="modal-tech-tags">
            {project.technologies.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github size={16} />
              Lihat di GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <ExternalLink size={16} />
              Kunjungi Web
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// All Projects Grid Drawer / Modal
function AllProjectsModal({
  onClose,
  onSelectProject,
}: {
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content all-projects-modal"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          <X size={18} />
        </button>

        <div className="modal-header">
          <div className="project-tag">Daftar Lengkap</div>
          <h2>Semua Proyek & Karya Teknis</h2>
          <p className="tagline">Katalog aplikasi yang telah dibangun oleh Nafiatul Muawanah</p>
        </div>

        <div className="all-projects-grid">
          {projects.map((p) => (
            <div
              key={p.id}
              className="all-project-card"
              onClick={() => {
                onClose();
                onSelectProject(p);
              }}
            >
              <div className="all-project-thumb">
                <img src={p.thumbnail} alt={p.title} />
              </div>
              <div className="all-project-info">
                <h3>{p.title}</h3>
                <p>{p.tagline}</p>
                <div className="tech-badge-list">
                  {p.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const [claps, setClaps] = useState(306);
  const [clapped, setClapped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = projects.length;

  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevProject = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject || showAllModal) return;
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject, selectedProject, showAllModal]);

  const activeProject = projects[activeIndex];

  const handleClap = () => {
    setClaps((c) => c + 1);
    setClapped(true);
    setTimeout(() => setClapped(false), 600);
  };

  return (
    <section id="projects" className="work-gallery-section" aria-label="Galeri Proyek">
      {/* Background Subtle Wavy Lines (Matching reference screenshot) */}
      <div className="gallery-wavy-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path
            d="M-50 180 C 300 280, 600 60, 950 160 C 1200 240, 1400 120, 1500 140"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.12"
          />
          <path
            d="M-50 320 C 250 420, 700 200, 1050 300 C 1300 370, 1450 260, 1500 290"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.08"
          />
          <path
            d="M-50 480 C 400 380, 800 520, 1150 440 C 1350 400, 1450 460, 1500 450"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.06"
          />
        </svg>
      </div>

      {/* Floating Interactive Badge on Left (matching reference: coffee / counter badge) */}
      <motion.button
        className={`gallery-floating-badge ${clapped ? "bouncing" : ""}`}
        onClick={handleClap}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Apresiasi proyek"
        title="Klik untuk apresiasi karya!"
      >
        <span className="badge-icon">☕</span>
        <span className="badge-count">{claps}</span>
      </motion.button>

      <div className="container gallery-inner">
        {/* Section Header */}
        <div className="gallery-header-row">
          <div className="gallery-header-text">
            <span className="gallery-kicker">SELECTED WORK</span>
            <h2 className="gallery-main-title">
              Work Gallery<span className="title-cursor">|</span>
            </h2>
            <p className="gallery-subtext">
              Kumpulan sistem, proyek digital, dan karya teknis yang telah saya bangun.
            </p>
          </div>

          <div className="gallery-header-action">
            <button
              className="gallery-view-more-btn"
              onClick={() => setShowAllModal(true)}
              aria-label="Lihat Semua Proyek"
            >
              <span>View More Projects</span>
              <ExternalLink size={15} />
            </button>
          </div>
        </div>

        {/* 3D Coverflow Slider ("Card-card yang bisa di geser") */}
        <div className="coverflow-stage" ref={containerRef}>
          {/* Navigation Arrows */}
          <button
            className="coverflow-nav-btn prev"
            onClick={prevProject}
            aria-label="Proyek sebelumnya"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="coverflow-nav-btn next"
            onClick={nextProject}
            aria-label="Proyek selanjutnya"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Track with drag capability */}
          <motion.div
            className="coverflow-track"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_e, { offset, velocity }) => {
              if (offset.x < -40 || velocity.x < -400) {
                nextProject();
              } else if (offset.x > 40 || velocity.x > 400) {
                prevProject();
              }
            }}
          >
            {projects.map((project, index) => {
              // Calculate relative offset from active card
              let offset = index - activeIndex;
              // Wrap-around for infinite feel with total items
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;

              return (
                <motion.div
                  key={project.id}
                  className={`coverflow-card ${isActive ? "active" : ""}`}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(index);
                    } else {
                      setSelectedProject(project);
                    }
                  }}
                  animate={{
                    x: `${offset * 58}%`,
                    scale: isActive ? 1 : Math.max(0.72, 1 - Math.abs(offset) * 0.16),
                    zIndex: isActive ? 10 : 8 - Math.abs(offset),
                    opacity: isActive ? 1 : Math.max(0.3, 0.75 - Math.abs(offset) * 0.25),
                    rotateY: offset * -12,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 28,
                    mass: 0.8,
                  }}
                >
                  <div className="card-window">
                    {/* Window Title Bar */}
                    <div className="card-window-bar">
                      <div className="window-dots">
                        <span className="dot red" />
                        <span className="dot yellow" />
                        <span className="dot green" />
                      </div>
                      <span className="window-title">{project.title}</span>
                      <div className="window-right-space" />
                    </div>

                    {/* Window Image Preview */}
                    <div className="card-img-wrap">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      {/* Active Card Quick Overlay */}
                      {isActive && (
                        <div className="card-hover-overlay">
                          <span className="overlay-pill">
                            <Sparkles size={14} />
                            Klik untuk Detail
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Dots Indicator */}
          <div className="coverflow-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`coverflow-dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Buka slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Project Details Below Carousel (Matching Reference Layout) */}
        <div className="gallery-details-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              className="gallery-project-details"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Title */}
              <h3 className="gallery-detail-title">{activeProject.title}</h3>

              {/* Project Description */}
              <p className="gallery-detail-desc">{activeProject.description}</p>

              {/* Technologies Badges */}
              <div className="gallery-detail-tags">
                {activeProject.technologies.map((tech) => (
                  <span key={tech} className="gallery-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="gallery-detail-actions">
                <button
                  className="gallery-view-project-link"
                  onClick={() => setSelectedProject(activeProject)}
                >
                  <span>View Project</span>
                  <ArrowRight size={16} />
                </button>

                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery-github-icon-btn"
                    aria-label="Lihat kode di GitHub"
                    title="Lihat Source Code di GitHub"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* View All Projects Modal */}
      <AnimatePresence>
        {showAllModal && (
          <AllProjectsModal
            onClose={() => setShowAllModal(false)}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
