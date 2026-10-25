import { useState, useEffect, useCallback } from "react";
import {
  MapPin,
  Camera,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export type ActivityPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tag: string;
  category: "kepanitiaan" | "magang" | "kerja" | "volunteer";
  aspect: "portrait" | "landscape";
  location?: string;
  description?: string;
  objectPosition?: string;
};

// 14 Authentic Activity Photos from public folder
const activityPhotos: ActivityPhoto[] = [
  {
    id: "act-1",
    src: "/kepanitiaan3.jpg",
    alt: "Nafiatul bertugas sebagai tim dokumentasi media dengan kamera Sony Alpha",
    caption: "Divisi Dokumentasi Media",
    tag: "Kepanitiaan & Media",
    category: "kepanitiaan",
    aspect: "portrait",
    location: "Poliwangi, Banyuwangi",
    description:
      "Peliputan multimedia dan dokumentasi kegiatan resmi kampus menggunakan kamera profesional Sony Alpha telephoto.",
  },
  {
    id: "act-2",
    src: "/kepanitiaan2.jpg",
    alt: "Tim panitia jalan sehat keluarga besar Poliwangi di Pantai Marina Boom",
    caption: "Panitia Jalan Sehat Poliwangi",
    tag: "Event Kampus",
    category: "kepanitiaan",
    aspect: "landscape",
    location: "Pantai Marina Boom, Banyuwangi",
    description:
      "Kepanitiaan Jalan Sehat Keluarga Besar Politeknik Negeri Banyuwangi dalam rangka menyemarakkan Bulan Merdeka Belajar Kampus Merdeka.",
  },
  {
    id: "act-3",
    src: "/magang-bali.jpeg",
    alt: "Presentasi sistem Indo GoPermit di PT Lintas Mediatama Bali bersama tim",
    caption: "Presentasi Proyek Indo GoPermit",
    tag: "Magang Industri",
    category: "magang",
    aspect: "landscape",
    location: "PT Lintas Mediatama, Denpasar Bali",
    description:
      "Presentasi akhir dan serah terima sistem informasi perizinan Indo GoPermit di hadapan direksi dan tim software engineer.",
  },
  {
    id: "act-4",
    src: "/magang-bali2.jpg",
    alt: "Sesi diskusi teknis dan live coding bersama tim developer industri di Bali",
    caption: "Kolaborasi Tech Developer",
    tag: "Tech Discussion",
    category: "magang",
    aspect: "portrait",
    location: "Office PT Lintas Mediatama, Bali",
    description:
      "Diskusi arsitektur sistem web, sprint review, dan eksplorasi solusi teknis bersama tim software engineering di Bali.",
  },
  {
    id: "act-5",
    src: "/kepanitiaan1.jpg",
    alt: "Nafiatul bertugas dalam kepanitiaan wisuda Poliwangi divisi media dan dokumentasi",
    caption: "Tim Media Wisuda Poliwangi",
    tag: "Wisuda & Media",
    category: "kepanitiaan",
    aspect: "portrait",
    objectPosition: "center 15%",
    location: "Kampus Poliwangi",
    description:
      "Mengemban amanah sebagai divisi media dan dokumentasi dalam upacara wisuda sarjana Politeknik Negeri Banyuwangi.",
  },
  {
    id: "act-6",
    src: "/magang-jember.png",
    alt: "Sesi mentoring dan kolaborasi coding bersama mahasiswi di Hummatech Jember",
    caption: "Mentoring Coding Hummatech",
    tag: "Mentoring & Coding",
    category: "magang",
    aspect: "landscape",
    location: "PT Humma Teknologi Indonesia, Jember",
    description:
      "Bimbingan langsung logika pemrograman web dan implementasi modul sistem di kelas praktikum Hummatech Jember.",
  },
  {
    id: "act-7",
    src: "/kerja-pt-bulog2.jpeg",
    alt: "Penyaluran Bantuan Pangan Beras Pemerintah bersama Kepala Desa Purwoharjo dan tim",
    caption: "Penyaluran Pangan Purwoharjo",
    tag: "Kerja Lapangan BULOG",
    category: "kerja",
    aspect: "landscape",
    location: "Balai Desa Purwoharjo, Banyuwangi",
    description:
      "Pelaksanaan verifikasi BAST PBP dan penyerahan simbolis bantuan cadangan beras pemerintah bersama kepala desa dan aparatur.",
  },
  {
    id: "act-8",
    src: "/kerja-pt-bulog1.jpeg",
    alt: "Dokumentasi serah terima berkas bantuan pangan di Desa Sumberasri Banyuwangi",
    caption: "Penyaluran Pangan Sumberasri",
    tag: "Distribusi Lapangan",
    category: "kerja",
    aspect: "portrait",
    location: "Desa Sumberasri, Purwoharjo",
    description:
      "Rekonsiliasi berkas penerima manfaat bantuan pangan dan pengecekan fisik logistik cadangan beras di Balai Desa Sumberasri.",
  },
  {
    id: "act-9",
    src: "/kerja-pt-bulog3.jpeg",
    alt: "Penyaluran Bantuan Pangan di Balai Kecamatan Sempu Banyuwangi",
    caption: "Penyaluran Bantuan Pangan Sempu",
    tag: "Kerja Lapangan BULOG",
    category: "kerja",
    aspect: "landscape",
    location: "Kecamatan Sempu, Banyuwangi",
    description:
      "Koordinasi penyaluran bantuan cadangan beras pemerintah di pendopo Kecamatan Sempu bersama warga penerima manfaat.",
  },
  {
    id: "act-10",
    src: "/kepanitiaan 4.JPG",
    alt: "Pelatihan Capacity Building Digital Creative tim Humas Poliwangi di atas panggung",
    caption: "Digital Creative Humas Poliwangi",
    tag: "Capacity Building",
    category: "kepanitiaan",
    aspect: "landscape",
    location: "Aula Poliwangi, Banyuwangi",
    description:
      "Sesi capacity building bersama koordinator supervisor media center untuk penguatan keahlian videografi dan publikasi digital.",
  },
  {
    id: "act-11",
    src: "/kepanitiaan5.JPG",
    alt: "Seluruh kru dan panitia pelaksana di atas panggung acara malam keakraban",
    caption: "Malam Puncak & Keakraban Panitia",
    tag: "Pentas Seni & Kru",
    category: "kepanitiaan",
    aspect: "landscape",
    location: "Panggung Utama Kampus",
    description:
      "Momen kebersamaan kru dan seluruh divisi panitia setelah sukses menyelenggarakan pagelaran panggung malam pentas seni.",
  },
  {
    id: "act-12",
    src: "/magang-jember1.JPG",
    alt: "Foto bersama tim magang almamater di depan kantor Hummatech Jember",
    caption: "Tim Mahasiswa Magang Hummatech",
    tag: "Magang Industri",
    category: "magang",
    aspect: "landscape",
    location: "Hummatech, Jember",
    description:
      "Foto tim mahasiswa magang almamater bersama pembimbing industri di depan kantor PT Humma Teknologi Indonesia.",
  },
  {
    id: "act-13",
    src: "/volunteer-S2o.jpg",
    alt: "Panitia relawan dan peserta program kepemudaan S2O di aula konvensi Banyuwangi",
    caption: "Relawan Volunteer S2O Banyuwangi",
    tag: "Volunteer & Sosial",
    category: "volunteer",
    aspect: "landscape",
    location: "Aula Stikes Banyuwangi",
    description:
      "Berperan aktif sebagai relawan panitia dalam seminar edukasi dan pemberdayaan generasi muda S2O di aula konvensi Banyuwangi.",
  },
  {
    id: "act-14",
    src: "/candid-1.jpeg",
    alt: "Potret dedikasi akademis dan perjalanan studi teknik informatika",
    caption: "Perjalanan Akademis Informatika",
    tag: "Dedikasi Kampus",
    category: "volunteer",
    aspect: "portrait",
    objectPosition: "center 25%",
    location: "Banyuwangi",
    description:
      "Potret dedikasi selama menempuh studi sarjana teknik informatika dengan semangat eksplorasi dan komitmen belajar.",
  },
];

// 4-Column Asymmetric Staggered Arrangement (All 14 Activity Photos shown directly)
const staggeredMosaicColumns: ActivityPhoto[][] = [
  // Kolom 1 (Offset 0px): Wisuda (portrait), Purwoharjo BAST (landscape), Mentoring Coding (square), Candid Kampus (portrait)
  [activityPhotos[4], activityPhotos[6], activityPhotos[5], activityPhotos[13]],
  // Kolom 2 (Offset +26px): Indo GoPermit Bali (landscape), Sony Alpha (portrait), Penyaluran Sempu (landscape)
  [activityPhotos[2], activityPhotos[0], activityPhotos[8]],
  // Kolom 3 (Offset +8px): Volunteer S2O (landscape), Workspace Bali (portrait), Penyaluran Sumberasri (portrait), Capacity Building (landscape)
  [activityPhotos[12], activityPhotos[3], activityPhotos[7], activityPhotos[9]],
  // Kolom 4 (Offset +20px): Pantai Boom (landscape), Malam Puncak (landscape), Tim Magang Hummatech (landscape)
  [activityPhotos[1], activityPhotos[10], activityPhotos[11]],
];

const categoryMeta: Record<string, { label: string; color: string }> = {
  kepanitiaan: { label: "Kepanitiaan", color: "#c084fc" },
  magang: { label: "Magang", color: "#38bdf8" },
  kerja: { label: "BULOG", color: "#34d399" },
  volunteer: { label: "Relawan", color: "#fbbf24" },
};

const activityCategories = [
  { key: "all", label: "Semua Kegiatan", count: activityPhotos.length },
  {
    key: "kepanitiaan",
    label: "Kepanitiaan & Event",
    count: activityPhotos.filter((p) => p.category === "kepanitiaan").length,
  },
  {
    key: "magang",
    label: "Magang Industri",
    count: activityPhotos.filter((p) => p.category === "magang").length,
  },
  {
    key: "kerja",
    label: "Kerja Lapangan BULOG",
    count: activityPhotos.filter((p) => p.category === "kerja").length,
  },
  {
    key: "volunteer",
    label: "Relawan & Komunitas",
    count: activityPhotos.filter((p) => p.category === "volunteer").length,
  },
];

export default function Experience() {
  const [activeActivityCat, setActiveActivityCat] = useState("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Determine which photos are active based on the category filter
  const displayedPhotos =
    activeActivityCat === "all"
      ? activityPhotos
      : activityPhotos.filter((p) => p.category === activeActivityCat);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev - 1 + displayedPhotos.length) % displayedPhotos.length : 0
        );
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev + 1) % displayedPhotos.length : 0
        );
      } else if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
      }
    },
    [selectedPhotoIndex, displayedPhotos.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const openLightboxByPhoto = (photo: ActivityPhoto) => {
    const idx = displayedPhotos.findIndex((p) => p.id === photo.id);
    setSelectedPhotoIndex(idx !== -1 ? idx : 0);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + displayedPhotos.length) % displayedPhotos.length
      );
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % displayedPhotos.length);
    }
  };

  const selectedPhoto =
    selectedPhotoIndex !== null && displayedPhotos[selectedPhotoIndex]
      ? displayedPhotos[selectedPhotoIndex]
      : null;

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
              Koleksi dokumentasi visual kegiatan nyata dan rekam jejak akademis, magang industri teknologi, kepanitiaan, serta pengabdian masyarakat.
            </p>
          </div>
        </AnimatedSection>

        {/* Authentic Activity Photo Mosaic Showcase */}
        <AnimatedSection delay={0.1}>
          <div className="mosaic-showcase-wrapper">
            <div className="mosaic-header-sub">
              <span className="mosaic-tag-pill">
                <Camera size={13} />
                <span>GALERI DOKUMENTASI KEGIATAN</span>
              </span>
              <p className="mosaic-hint-text">
                Foto-foto asli dokumentasi kepanitiaan kampus, magang industri teknologi, kerja lapangan bantuan pangan BULOG, dan kegiatan relawan. Klik untuk tampilan penuh.
              </p>
            </div>

            {/* Activity Category Filter Bar */}
            <div className="activity-filter-bar">
              {activityCategories.map((cat) => (
                <button
                  key={cat.key}
                  className={`activity-filter-btn ${activeActivityCat === cat.key ? "active" : ""}`}
                  onClick={() => setActiveActivityCat(cat.key)}
                >
                  <span>{cat.label}</span>
                  <span style={{ opacity: 0.75, fontSize: "0.72rem" }}>({cat.count})</span>
                </button>
              ))}
            </div>

            {/* Layout 1: Staggered 4-Column Mosaic for "all" */}
            {activeActivityCat === "all" ? (
              <div className="staggered-mosaic-container">
                {staggeredMosaicColumns.map((column, colIdx) => (
                  <div key={colIdx} className={`staggered-column col-${colIdx + 1}`}>
                    {column.map((photo, itemIdx) => {
                      const isTiltLeft = (colIdx + itemIdx) % 2 === 0;
                      const cat = categoryMeta[photo.category] || { label: photo.tag, color: "#34d399" };
                      return (
                        <div
                          key={photo.id}
                          className={`mosaic-photo-card ${photo.aspect} ${isTiltLeft ? "tilt-left" : "tilt-right"}`}
                          onClick={() => openLightboxByPhoto(photo)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === "Enter" && openLightboxByPhoto(photo)}
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="mosaic-card-img"
                            style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                            loading="lazy"
                          />
                          <div className="mosaic-badge-pill" style={{ color: cat.color }}>
                            <span className="mosaic-badge-dot" style={{ backgroundColor: cat.color }} />
                            <span>{cat.label}</span>
                          </div>
                          <div className="mosaic-card-overlay">
                            <span className="mosaic-card-location">{photo.location}</span>
                            <span className="mosaic-card-caption">{photo.caption}</span>
                          </div>
                          <div className="mosaic-zoom-btn">
                            <Maximize2 size={13} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : (
              /* Layout 2: Adaptive Grid for Category Filtered View */
              <motion.div
                className="activity-filtered-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {displayedPhotos.map((photo, index) => {
                  const isTiltLeft = index % 2 === 0;
                  const cat = categoryMeta[photo.category] || { label: photo.tag, color: "#34d399" };
                  return (
                    <div
                      key={photo.id}
                      className={`mosaic-photo-card ${photo.aspect} ${isTiltLeft ? "tilt-left" : "tilt-right"}`}
                      onClick={() => openLightboxByPhoto(photo)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && openLightboxByPhoto(photo)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="mosaic-card-img"
                        style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                        loading="lazy"
                      />
                      <div className="mosaic-badge-pill" style={{ color: cat.color }}>
                        <span className="mosaic-badge-dot" style={{ backgroundColor: cat.color }} />
                        <span>{cat.label}</span>
                      </div>
                      <div className="mosaic-card-overlay">
                        <span className="mosaic-card-location">{photo.location}</span>
                        <span className="mosaic-card-caption">{photo.caption}</span>
                      </div>
                      <div className="mosaic-zoom-btn">
                        <Maximize2 size={13} />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </AnimatedSection>

      </div>

      {/* Lightbox Modal for Photo Preview with Prev / Next Navigation */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            className="photo-lightbox-overlay"
            onClick={() => setSelectedPhotoIndex(null)}
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
                onClick={() => setSelectedPhotoIndex(null)}
                aria-label="Tutup foto"
              >
                <X size={20} />
              </button>

              {/* Navigation Arrows */}
              {displayedPhotos.length > 1 && (
                <>
                  <button
                    className="photo-lightbox-nav-btn photo-lightbox-prev"
                    onClick={handlePrevPhoto}
                    aria-label="Foto sebelumnya"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    className="photo-lightbox-nav-btn photo-lightbox-next"
                    onClick={handleNextPhoto}
                    aria-label="Foto selanjutnya"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}

              <div className="photo-lightbox-media">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="photo-lightbox-img"
                />
              </div>

              <div className="photo-lightbox-caption-bar">
                <div className="photo-lightbox-tag-row">
                  <span className="photo-lightbox-tag">{selectedPhoto.tag}</span>
                  {selectedPhoto.location && (
                    <span className="photo-lightbox-location">
                      <MapPin size={12} />
                      {selectedPhoto.location}
                    </span>
                  )}
                </div>
                <h4 className="photo-lightbox-caption">{selectedPhoto.caption}</h4>
                <p className="photo-lightbox-alt">{selectedPhoto.description || selectedPhoto.alt}</p>

                {displayedPhotos.length > 1 && selectedPhotoIndex !== null && (
                  <span className="photo-lightbox-counter">
                    {selectedPhotoIndex + 1} / {displayedPhotos.length}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
