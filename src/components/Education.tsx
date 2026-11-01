import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export interface EducationPhoto {
  id: string;
  src: string;
  alt: string;
}

const educationPhotos: EducationPhoto[] = [
  {
    id: "edu-9",
    src: "/education9.jpeg",
    alt: "Momen Wisuda Sarjana Terapan Politeknik Negeri Banyuwangi",
  },
  {
    id: "edu-12",
    src: "/education12.jpeg",
    alt: "Nafiatul Muawanah memegang Laporan Tugas Akhir Teknik Informatika Poliwangi",
  },
  {
    id: "edu-5",
    src: "/education5.jpg",
    alt: "Pengujian dan operasional sistem Digital Scoring tugas akhir bersama panitia",
  },
  {
    id: "edu-6",
    src: "/education6.jpg",
    alt: "Sesi bimbingan tugas akhir dan rekayasa sistem bersama dosen pembimbing",
  },
  {
    id: "edu-1",
    src: "/education1.jpg",
    alt: "Sosialisasi Creativity Station Village Digitalitation di Aula Poliwangi",
  },
  {
    id: "edu-4",
    src: "/education4.jpg",
    alt: "Mahasiswi berjas almamater Poliwangi TRPL di halaman kampus",
  },
  {
    id: "edu-3",
    src: "/education3.webp",
    alt: "Suasana perkuliahan dan diskusi kelompok di kelas kampus",
  },
  {
    id: "edu-7",
    src: "/education7.jpeg",
    alt: "Mahasiswa di depan gedung Jurusan Bisnis dan Informatika (JBI) Poliwangi",
  },
  {
    id: "edu-10",
    src: "/education10.jpeg",
    alt: "Foto bersama dosen dan mahasiswa Teknik Informatika Poliwangi",
  },
  {
    id: "edu-13",
    src: "/education13.jpeg",
    alt: "Kunjungan kegiatan pengabdian dan studi di Yayasan Pendidikan Darun Najah",
  },
  {
    id: "edu-2",
    src: "/education2.jpg",
    alt: "Kelompok mahasiswa membawa berkas laporan tugas akhir di kampus",
  },
  {
    id: "edu-8",
    src: "/education8.jpeg",
    alt: "Momen kebersamaan angkatan di koridor kampus Poliwangi",
  },
  {
    id: "edu-11",
    src: "/education11.jpeg",
    alt: "Kebersamaan mahasiswa dan rekan sejawat di pelataran kampus",
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section" aria-label="Pendidikan">
      <div className="container education-container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="education-header">
            <span className="education-kicker">EDUCATION & ACADEMICS</span>
            <h2 className="education-title">Latar Belakang Pendidikan</h2>
            <p className="education-subtitle">
              Pendidikan formal di bidang Teknik Informatika serta dokumentasi momen perkuliahan dan kelulusan di Politeknik Negeri Banyuwangi.
            </p>
          </div>
        </AnimatedSection>

        {/* Education Main Card */}
        <AnimatedSection delay={0.1}>
          <div className="education-main-card">
            <div className="education-card-top">
              <div className="education-badge-row">
                <span className="education-type-pill">
                  <GraduationCap size={15} />
                  <span>Pendidikan Formal</span>
                </span>
                <span className="education-status-pill">Lulusan 2026</span>
              </div>

              <h3 className="education-degree">
                Sarjana Terapan Bisnis & Informatika
              </h3>
              <h4 className="education-campus">
                Politeknik Negeri Banyuwangi (Poliwangi)
              </h4>

              <div className="education-meta-row">
                <span className="education-meta-item">
                  <Calendar size={14} />
                  <span>2022 — 2026</span>
                </span>
                <span className="education-meta-item">
                  <MapPin size={14} />
                  <span>Banyuwangi, Jawa Timur</span>
                </span>
                <span className="education-meta-item">
                  <Award size={14} />
                  <span>Predikat Cumlaude</span>
                </span>
              </div>
            </div>

            <p className="education-desc-text">
              Menyelesaikan studi Sarjana Terapan dengan mendalami rekayasa perangkat lunak, arsitektur sistem web, perancangan basis data relasional, dan pengujian perangkat lunak (Software Quality Assurance). Selama masa studi, aktif mempraktikkan teori ke dalam implementasi proyek nyata berbasis tim serta kegiatan kepanitiaan kampus.
            </p>
          </div>
        </AnimatedSection>

        {/* Education Photos Showcase Header */}
        <AnimatedSection delay={0.15}>
          <div className="edu-gallery-header">
            <span className="edu-gallery-pill">
              <Sparkles size={13} />
              <span>MOMEN & DOKUMENTASI STUDI</span>
            </span>
          </div>
        </AnimatedSection>

        {/* Aesthetic Modern Education Photo Collage (Compact All-in-View) */}
        <AnimatedSection delay={0.2}>
          <div className="edu-compact-gallery">
            {educationPhotos.map((photo) => (
              <div key={photo.id} className="edu-compact-card">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="edu-compact-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
