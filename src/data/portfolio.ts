// ============================================================
// Portfolio Data — Edit this file to update all portfolio content
// ============================================================

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  features: string[];
  role: string;
  background: string;
  challenges: string;
  solution: string;
  github?: string;
  liveDemo?: string;
  featured?: boolean;
}

export interface TimelineItem {
  id: string;
  type: "education" | "experience" | "organization" | "certification";
  title: string;
  institution: string;
  period: string;
  location?: string;
  description: string;
  image: string;
  highlights: string[];
  skills: string[];
}

export interface SkillGroup {
  category: string;
  items: { name: string; icon: string }[];
}

// ——— Personal Info ———
export const personalInfo = {
  name: "Nafiatul Muawanah",
  initials: "NM",
  headline: "Software Engineer | Web Developer",
  shortBio:
    "Hai, saya Anna, lulusan baru dari Jurusan Bisnis dan Informatika yang memiliki minat dalam mengembangkan aplikasi web yang efisien, fungsional, dan ramah pengguna. Saya tertarik pada pemecahan masalah melalui pemrograman, pengelolaan basis data, serta pengembangan solusi digital yang inovatif dan sesuai dengan kebutuhan pengguna.",
  aboutMe: [
    "Saya adalah lulusan baru (fresh graduate) dengan dasar yang kuat di bidang rekayasa perangkat lunak dan pengembangan web. Selama masa studi, saya berfokus pada pengembangan aplikasi praktis yang menyelesaikan masalah di dunia nyata — mulai dari sistem penilaian digital hingga dasbor analitik data.",
    "Minat utama saya berfokus pada full-stack web development, manajemen basis data, dan perancangan solusi perangkat lunak yang efisien. Saya sangat tertarik pada pengembangan sistem yang memadukan logika backend yang andal dengan antarmuka pengguna yang intuitif.",
    "Saya memiliki komitmen tinggi terhadap pembelajaran berkelanjutan dan selalu antusias menghadapi tantangan baru. Baik dalam mengeksplorasi teknologi modern, mengoptimasi kueri basis data, maupun menyempurnakan interaksi pengguna, saya selalu berupaya memberikan hasil yang terbaik.",
  ],
  education: "Teknik Informatika",
  email: "nafiatulmuawanah@gmail.com",
  github: "https://github.com/nafiatulmuawanah",
  linkedin: "https://linkedin.com/in/nafiatulmuawanah",
  cvUrl: "/cv-nafiatul-muawanah.pdf",
  profileImage: "/foto-profile.png",
  profileImageNoBg: "/foto-profile-nobg.png",
};

// ——— Skills ———
export const skills: SkillGroup[] = [
  {
    category: "Bahasa Pemrograman",
    items: [
      { name: "PHP", icon: "php" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    category: "Pengembangan Frontend",
    items: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    category: "Pengembangan Backend",
    items: [
      { name: "Laravel", icon: "laravel" },
      { name: "REST API", icon: "api" },
    ],
  },
  {
    category: "Manajemen Basis Data & Server",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "XAMPP", icon: "xampp" },
    ],
  },
  {
    category: "Tools, Platform & Alur Kerja",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Antigravity IDE", icon: "antigravity" },
      { name: "Figma", icon: "figma" },
      { name: "Microsoft Office", icon: "office" },
      { name: "Antares", icon: "antares" },
    ],
  },
];

// ——— Projects ———
export const projects: Project[] = [
  {
    id: "silat-scoring",
    title: "Sistem Penilaian Digital — Pencak Silat",
    tagline: "Digitalisasi penilaian pertandingan bela diri untuk kompetisi yang lebih adil dan transparan",
    description:
      "Aplikasi penilaian digital berbasis web yang dirancang untuk pertandingan olahraga pencak silat. Sistem ini menggantikan penilaian manual konvensional dengan antarmuka digital real-time, memungkinkan dewan juri memasukkan skor secara bersamaan dan menghasilkan rekapitulasi poin instan.",
    thumbnail: "/project-scoring.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Input skor real-time oleh beberapa juri secara simultan",
      "Kalkulasi nilai otomatis dan penentuan pemenang secara akurat",
      "Manajemen pertandingan dan pelacakan babak turnamen",
      "Dashboard admin untuk pengelolaan jadwal dan peserta",
      "Riwayat skor lengkap dan jejak audit (audit trail)",
    ],
    role: "Full-stack Developer — merancang arsitektur basis data, membangun logika penilaian backend, serta mengembangkan antarmuka pengguna yang responsif.",
    background:
      "Pertandingan pencak silat tradisional sering menghadapi kendala kesalahan pencatatan dan lambatnya rekapitulasi nilai berbasis kertas. Proyek ini hadir untuk memodernisasi proses tersebut dengan sistem digital yang cepat dan akurat.",
    challenges:
      "Menangani pengiriman nilai secara bersamaan (konkurensi tinggi) dari seluruh juri secara real-time dengan tetap menjamin konsistensi dan integritas data.",
    solution:
      "Menerapkan transaksi basis data dengan optimistic locking untuk mencegah konflik data, serta mengintegrasikan pembaruan berbasis AJAX polling tanpa memuat ulang halaman.",
    github: "https://github.com/nafiatulmuawanah/silat-scoring",
    featured: true,
  },
  {
    id: "analytics-dashboard",
    title: "Dashboard Monitoring Data",
    tagline: "Mengubah data mentah menjadi wawasan visual yang informatif dan terstruktur",
    description:
      "Dashboard analitik interaktif untuk memantau dan memvisualisasikan indikator utama bisnis. Dilengkapi dengan grafik dinamis, tabel filter data, dan kartu metrik KPI yang diperbarui secara otomatis berdasarkan rentang tanggal yang dipilih.",
    thumbnail: "/project-dashboard.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "Chart.js", "Bootstrap"],
    features: [
      "Grafik visual dan diagram interaktif",
      "Penyaringan data berdasarkan rentang waktu fleksibel",
      "Kartu ringkasan metrik kinerja utama (KPI)",
      "Ekspor laporan data ke format populer",
      "Tampilan responsif di desktop maupun perangkat mobile",
    ],
    role: "Full-stack Developer — merancang API agregasi data backend, membuat tata letak dashboard yang bersih, dan mengintegrasikan Chart.js untuk visualisasi data.",
    background:
      "Kebutuhan akan visualisasi data yang terpusat untuk memantau kinerja operasional yang sebelumnya tersebar di berbagai catatan terpisah. Dashboard ini menyatukan semua informasi dalam satu layar.",
    challenges:
      "Mengoptimalkan performa kueri database pada volume data yang besar agar visualisasi dashboard tetap cepat dimuat tanpa lag.",
    solution:
      "Menggunakan database view terindeks dan caching kueri untuk mempercepat pengambilan data, serta teknik lazy loading pada visualisasi grafik.",
    github: "https://github.com/nafiatulmuawanah/analytics-dashboard",
    featured: true,
  },
  {
    id: "inventory-management",
    title: "Sistem Manajemen Inventaris",
    tagline: "Optimalisasi pengelolaan dan kontrol stok barang usaha",
    description:
      "Aplikasi web komprehensif untuk mendata produk inventaris, melacak keluar-masuk barang secara berkala, dan membuat laporan persediaan otomatis. Dibangun menggunakan Laravel untuk kemudahan operasional UMKM.",
    thumbnail: "/project-inventory.png",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    features: [
      "Manajemen data produk (CRUD) disertai unggah gambar",
      "Pelacakan stok barang real-time dan notifikasi stok menipis",
      "Pencatatan data supplier dan riwayat pengadaan",
      "Rekapitulasi riwayat transaksi dan ekspor laporan",
      "Hak akses berjenjang (Role-Based Access Control)",
    ],
    role: "Full-stack Developer — merancang arsitektur sistem dari awal, mulai dari pemodelan basis data hingga pembuatan antarmuka pengguna yang ramah pakai.",
    background:
      "Banyak usaha mikro dan menengah masih mengandalkan pencatatan manual yang rentan selisih stok. Sistem ini dirancang untuk mempermudah kontrol inventaris dengan biaya terjangkau.",
    challenges:
      "Merancang struktur basis data fleksibel yang dapat menampung berbagai variasi kategori produk dan satuan ukuran yang berbeda.",
    solution:
      "Menerapkan relasi basis data polimorfik dengan atribut yang dapat disesuaikan serta pengelompokan kategori yang intuitif.",
    github: "https://github.com/nafiatulmuawanah/inventory-system",
  },
  {
    id: "student-database",
    title: "Sistem Informasi Akademik",
    tagline: "Sentralisasi data akademik siswa untuk kemudahan administrasi",
    description:
      "Aplikasi web berbasis database untuk mengelola data induk siswa, rekam nilai akademik, dan status pendaftaran. Dilengkapi fitur pencarian cepat, filter multi-kriteria, dan pembuatan transkrip nilai.",
    thumbnail: "/project-student.png",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Pendaftaran siswa baru dan manajemen profil lengkap",
      "Pencatatan nilai semester dan pembuatan transkrip",
      "Pelacakan status akademik dan kehadiran",
      "Pencarian lanjutan dan filter multi-kolom",
      "Ekspor laporan ke format dokumen PDF dan Excel",
    ],
    role: "Backend Developer — merancang skema database ternormalisasi dan membangun alur logika backend PHP dengan fokus pada validasi serta keamanan data.",
    background:
      "Institusi pendidikan membutuhkan platform terpusat untuk mengelola berkas data siswa yang terus bertambah agar rapi, aman, dan mudah diakses saat dibutuhkan.",
    challenges:
      "Menjaga konsistensi dan integritas data di antara banyak tabel yang saling berelasi, serta menjaga efisiensi kueri pencarian.",
    solution:
      "Menerapkan referential integrity constraints, prepared statements untuk mencegah injeksi SQL, dan indeks full-text untuk mempercepat pencarian data.",
    github: "https://github.com/nafiatulmuawanah/student-info-system",
  },
];

// ——— Timeline ———
export const timeline: TimelineItem[] = [
  {
    id: "edu-1",
    type: "education",
    title: "S1 Teknik Informatika",
    institution: "Universitas / Fakultas Teknologi Informasi",
    period: "2020 — 2024",
    location: "Indonesia",
    image: "/exp-education.jpg",
    description:
      "Lulus dengan predikat memuaskan, fokus mendalami rekayasa perangkat lunak, sistem manajemen basis data, dan pengembangan aplikasi web. Mempelajari struktur data, algoritma, pemrograman berorientasi objek, serta metodologi pengembangan perangkat lunak modern.",
    highlights: [
      "Fokus Skripsi: Rancang bangun sistem penilaian bela diri digital pencak silat berbasis web real-time",
      "Mendalami arsitektur web MVC, database relational, dan integrasi API",
      "Aktif berpartisipasi dalam riset kelompok dan implementasi proyek praktis berbasis teknologi",
    ],
    skills: ["Software Engineering", "Database Systems", "Web Development", "Algorithms", "Agile Methodology"],
  },
  {
    id: "exp-1",
    type: "experience",
    title: "Web Developer Intern",
    institution: "Perusahaan Teknologi / Software House",
    period: "2023",
    location: "Indonesia",
    image: "/exp-internship.jpg",
    description:
      "Berkontribusi aktif dalam tim rekayasa perangkat lunak untuk merancang, membangun, dan menguji modul-modul aplikasi web bisnis internal berbasis framework Laravel dan basis data MySQL.",
    highlights: [
      "Mengembangkan modul backend menggunakan Laravel & REST API dengan validasi ketat",
      "Mengoptimalkan query database MySQL untuk memangkas waktu load halaman hingga 35%",
      "Berkolaborasi erat dengan frontend developer dan tim QA dalam pengujian sistem menyeluruh",
    ],
    skills: ["PHP", "Laravel", "MySQL", "REST API", "Git", "Bug Fixing", "Unit Testing"],
  },
  {
    id: "org-1",
    type: "organization",
    title: "Anggota Divisi IT & Media Kreatif",
    institution: "Himpunan Mahasiswa Informatika",
    period: "2021 — 2023",
    location: "Kampus",
    image: "/exp-organization.jpg",
    description:
      "Mengemban tanggung jawab dalam pengelolaan platform digital himpunan, maintenance portal informasi, serta mengoordinasikan workshop dan bootcamp teknologi untuk mahasiswa.",
    highlights: [
      "Memimpin pemeliharaan teknis portal web resmi dan sistem registrasi acara mahasiswa",
      "Menjadi panitia teknis dalam workshop pemrograman web dan seminar teknologi nasional",
      "Mengembangkan kemampuan komunikasi interpersonal, manajemen waktu, dan kepemimpinan tim",
    ],
    skills: ["Team Leadership", "Web Maintenance", "Event Management", "Collaboration", "Public Speaking"],
  },
  {
    id: "cert-1",
    type: "certification",
    title: "Sertifikasi Web Developer & Best Capstone Award",
    institution: "Lembaga Sertifikasi Profesi & Dewan Penguji Ilmiah",
    period: "2023 — 2024",
    location: "Terakreditasi",
    image: "/exp-award.jpg",
    description:
      "Meraih penghargaan bergengsi Capstone Project Terbaik atas inovasi digitalisasi sistem penilaian real-time, serta lulus uji kompetensi sertifikasi profesional rekayasa web.",
    highlights: [
      "Penghargaan Terbaik: Sistem Penilaian Digital Turnamen Pencak Silat (Kategori Inovasi Sistem)",
      "Sertifikasi Kompetensi Resmi Web Developer & Database Management Specialist",
      "Mendapat apresiasi dewan juri atas keandalan transaksi data tanpa konflik saat penilaian simultan",
    ],
    skills: ["Full-stack Architecture", "Database Locking", "Technical Certification", "Innovation Award"],
  },
];
