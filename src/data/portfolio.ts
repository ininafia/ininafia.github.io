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
    institution: "Politeknik Negeri Banyuwangi (Poliwangi)",
    period: "2020 — 2024",
    location: "Banyuwangi, Indonesia",
    image: "/kepanitiaan1.jpg",
    description:
      "Lulus dengan predikat memuaskan, mendalami rekayasa perangkat lunak, arsitektur basis data, dan pengembangan aplikasi web. Aktif berpartisipasi dalam riset kelompok serta kepanitiaan media & dokumentasi resmi kampus.",
    highlights: [
      "Fokus Skripsi: Rancang bangun sistem penilaian bela diri digital pencak silat berbasis web real-time",
      "Mendalami arsitektur web MVC, database relational, dan integrasi RESTful API",
      "Aktif dalam kepanitiaan wisuda dan peliputan dokumentasi multimedia kampus",
    ],
    skills: ["Software Engineering", "Database Systems", "Web Development", "Algorithms", "Agile Methodology"],
  },
  {
    id: "exp-1",
    type: "experience",
    title: "Web Developer Intern — Indo GoPermit",
    institution: "PT Lintas Mediatama",
    period: "2023",
    location: "Denpasar, Bali",
    image: "/magang-bali.jpeg",
    description:
      "Merancang dan mengembangkan aplikasi web Indo GoPermit untuk digitalisasi alur perizinan bisnis. Berkontribusi dalam pengembangan backend Laravel, integrasi REST API, dan optimalisasi database bersama tim software engineer.",
    highlights: [
      "Membangun modul backend menggunakan Laravel & REST API dengan validasi ketat",
      "Mempresentasikan hasil proyek sistem Indo GoPermit di hadapan direktur dan tech lead perusahaan",
      "Melakukan sprint development, code review, dan pengujian sistem bersama tim tech engineer",
    ],
    skills: ["PHP", "Laravel", "MySQL", "REST API", "Git", "System Architecture", "Sprint Review"],
  },
  {
    id: "exp-2",
    type: "experience",
    title: "Petugas Penyaluran Bantuan Pangan (PBP)",
    institution: "Perum BULOG & Mitra Distribusi Lapangan",
    period: "2024",
    location: "Kabupaten Banyuwangi",
    image: "/kerja-pt-bulog2.jpeg",
    description:
      "Bertanggung jawab dalam proses verifikasi data penerima, pencatatan berita acara serah terima (BAST PBP), serta monitoring distribusi fisik cadangan beras pemerintah di balai desa Purwoharjo, Sumberasri, dan kecamatan Sempu.",
    highlights: [
      "Memvalidasi data ribuan penerima manfaat dan memastikan akurasi data serah terima",
      "Mencatat dan merekonsiliasi dokumen BAST PBP digital dan fisik tanpa selisih kuota",
      "Berkoordinasi aktif dengan kepala desa, perangkat daerah, dan tim logistik lapangan",
    ],
    skills: ["Data Verification", "Field Coordination", "BAST Reconciliation", "Logistics", "Public Service"],
  },
  {
    id: "exp-3",
    type: "experience",
    title: "Software Engineering Mentoring Intern",
    institution: "PT Humma Teknologi Indonesia (Hummatech)",
    period: "2023",
    location: "Jember, Indonesia",
    image: "/magang-jember.png",
    description:
      "Mengikuti program magang industri intensif mencakup pengembangan sistem web profesional serta mentoring logika pemrograman dan asistensi teknis coding bagi mahasiswi di Hummatech Class.",
    highlights: [
      "Memberikan asistensi teknis dan bimbingan langsung dalam praktik coding web modern",
      "Berkontribusi pada proyek pengembangan perangkat lunak berbasis tim menggunakan Git workflow",
      "Mendalami clean code, query optimization, dan deployment aplikasi web",
    ],
    skills: ["Web Development", "Programming Mentoring", "Git Workflow", "Clean Code", "Collaboration"],
  },
  {
    id: "org-1",
    type: "organization",
    title: "Tim Humas Digital Creative & Panitia Kampus",
    institution: "Humas Politeknik Negeri Banyuwangi",
    period: "2021 — 2023",
    location: "Banyuwangi",
    image: "/kepanitiaan 4.JPG",
    description:
      "Aktif dalam tim humas dan kepanitiaan kampus, mengelola publikasi media digital, dokumentasi visual acara akbar, serta mengikuti pelatihan intensif Capacity Building Digital Creative bersama tim media center.",
    highlights: [
      "Mengikuti Capacity Building Digital Creative bersama koordinator supervisor media center",
      "Menjadi panitia pelaksana berbagai agenda resmi, seminar nasional, dan jalan sehat kampus",
      "Mengoperasikan perangkat fotografi & videografi profesional untuk liputan publikasi resmi",
    ],
    skills: ["Digital Creative", "Event Organizing", "Media Production", "Public Relations", "Team Leadership"],
  },
  {
    id: "org-2",
    type: "organization",
    title: "Relawan Panitia Volunteer S2O",
    institution: "Program Kepemudaan & Edukasi Sosial S2O",
    period: "2022 — 2023",
    location: "Banyuwangi",
    image: "/volunteer-S2o.jpg",
    description:
      "Berdedikasi sebagai relawan dalam kepanitiaan program sosial kemasyarakatan dan seminar motivasi generasi muda yang melibatkan ratusan peserta dan narasumber inspiratif di Banyuwangi.",
    highlights: [
      "Mengoordinasikan alur registrasi, hospitality narasumber, dan manajemen panggung konvensi",
      "Membangun jejaring kolaborasi kepemudaan lintas institusi dan komunitas di Banyuwangi",
    ],
    skills: ["Social Volunteering", "Community Outreach", "Event Coordination", "Public Hospitality"],
  },
  {
    id: "cert-1",
    type: "certification",
    title: "Sertifikasi Web Developer & Best Capstone Award",
    institution: "Lembaga Sertifikasi Profesi & Dewan Penguji Ilmiah",
    period: "2023 — 2024",
    location: "Terakreditasi",
    image: "/kepanitiaan3.jpg",
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
