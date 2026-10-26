// ============================================================
// Portfolio Data — Edit this file to update all portfolio content
// ============================================================

export interface Project {
  id: string;
  title: string;
  category: string;
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
    title: "Sistem Digital Scoring — Pencak Silat (IPSI)",
    category: "Project Tugas Akhir Kuliah",
    tagline: "Digitalisasi penilaian pertandingan pencak silat untuk kejuaraan yang lebih adil dan transparan",
    description:
      "Aplikasi web penilaian pertandingan pencak silat berbasis real-time yang dirancang khusus sesuai regulasi resmi Ikatan Pencak Silat Indonesia (IPSI). Sistem ini menggantikan penilaian manual konvensional dengan antarmuka digital yang memungkinkan dewan juri memasukkan skor secara bersamaan, kalkulasi nilai otomatis, serta penayangan papan skor langsung (live score board) tanpa jeda.",
    thumbnail: "/project-scoring.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "REST API", "AJAX"],
    features: [
      "Input skor real-time oleh beberapa juri secara simultan untuk sudut merah dan biru",
      "Kalkulasi nilai otomatis, deteksi hukuman, dan penentuan pemenang secara akurat",
      "Layar monitor digital (live scoreboard) pertandingan untuk penonton dan official",
      "Dashboard admin untuk manajemen bagan turnamen, babak pertandingan, dan verifikasi juri",
      "Pencatatan pelanggaran, teguran, peringatan, dan riwayat jejak audit (audit trail)",
      "Cetak otomatis berita acara dan lembar hasil pertandingan ke format PDF",
    ],
    role: "Full-stack Developer — merancang arsitektur basis data, membangun logika penilaian backend sesuai standar IPSI, serta mengembangkan antarmuka pengguna responsif dengan latensi rendah.",
    background:
      "Pertandingan pencak silat konvensional kerap menghadapi kendala subjektivitas, human error dalam penjumlahan nilai manual berbasis kertas, dan lambatnya rekapitulasi poin antar babak.",
    challenges:
      "Menangani pengiriman skor secara bersamaan dari multi-juri dalam hitungan detik (konkurensi tinggi) dengan tetap menjamin konsistensi dan integritas data secara real-time.",
    solution:
      "Menerapkan transaksi basis data terisolasi dengan locking berjenjang dan mekanisme sinkronisasi AJAX polling asinkron untuk menjamin pencatatan poin presisi.",
    github: "https://github.com/nafiatulmuawanah/silat-scoring",
    featured: true,
  },
  {
    id: "indo-gopermit",
    title: "Indo GoPermit — platform Layanan Perizinan",
    category: "Project Magang",
    tagline: "Platform terintegrasi pengurusan berbagai jenis perizinan bisnis secara cepat dan transparan",
    description:
      "Platform layanan perizinan LKP berbasis digital yang dikembangkan untuk menyederhanakan proses pengajuan izin secara online. Melalui IndoGoPermit, pemohon dapat mengajukan perizinan, mengunggah dokumen persyaratan, memantau status verifikasi secara real-time, serta menerima notifikasi perkembangan perizinan untuk mewujudkan proses yang lebih cepat, efisien, dan transparan.",
    thumbnail: "/project-lkp.png",
    technologies: ["PHP", "Laravel", "MySQL", "REST API", "Bootstrap", "JavaScript", "Git"],
    features: [
      "Pengajuan perizinan usaha terpadu dengan formulir bertahap (multi-step form)",
      "Upload dan verifikasi dokumen legalitas usaha dengan validasi tipe berkas ketat",
      "Pelacakan status berkas real-time (Verifikasi Berkas, Review Teknis, Izin Terbit)",
      "Dashboard verifikator dinas untuk peninjauan berkas dan pemberian catatan evaluasi",
      "Penerbitan dokumen sertifikat perizinan resmi otomatis berformat digital",
      "Manajemen hak akses pengguna berjenjang (Pelaku Usaha, Verifikator, Administrator)",
    ],
    role: "Web Developer Intern (PT Lintas Mediatama Bali) — merancang skema database perizinan, membangun endpoint RESTful API backend dengan Laravel, serta memvalidasi alur verifikasi berkas perizinan.",
    background:
      "Birokrasi perizinan usaha konvensional seringkali memakan waktu berbulan-bulan, memerlukan kedatangan fisik berulang, dan rentan terhadap keterlambatan pelacakan berkas.",
    challenges:
      "Mengakomodasi alur verifikasi dokumen multi-tahap yang membutuhkan fleksibilitas perubahan status berkas serta penanganan file dokumen legalitas berukuran besar.",
    solution:
      "Merancang state machine alur verifikasi berkas izin yang modular, didukung sistem validasi server-side yang aman dan penyimpanan file terstruktur.",
    github: "https://github.com/nafiatulmuawanah/indo-gopermit",
    featured: true,
  },
  {
    id: "lobi-poliwangi",
    title: "Lobi Poliwangi — Platform Informasi Lomba, Beasiswa & Prestasi Mahasiswa",
    category: "Project Based Learning",
    tagline: "Pusat informasi terpadu ribuan beasiswa dan ajang kompetisi prestasi mahasiswa",
    description:
      "Platform informasi berbasis web yang dikembangkan untuk memudahkan mahasiswa Politeknik Negeri Banyuwangi dalam mengakses informasi perlombaan, beasiswa, serta prestasi mahasiswa di bidang akademik maupun nonakademik. Dilengkapi penyajian informasi yang lengkap dan terkini untuk mendukung pengembangan potensi mahasiswa sekaligus menjadi media branding dan publikasi prestasi Politeknik Negeri Banyuwangi.",
    thumbnail: "/project-lobi.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "REST API"],
    features: [
      "Katalog cerdas pencarian beasiswa (D1-S3, Dalam & Luar Negeri) dan kompetisi lomba",
      "Filter multi-kategori berdasarkan jenjang, instansi penyelenggara, dan cakupan pendanaan",
      "Countdown timer tenggat waktu pendaftaran (deadline reminder) otomatis",
      "Halaman detail komprehensif memuat syarat berkas, alur seleksi, dan tautan resmi pendaftaran",
      "Fitur simpan beasiswa/lomba favorit (bookmark) ke akun mahasiswa",
      "Panel admin untuk kurasi, verifikasi keabsahan informasi, dan publikasi konten beasiswa",
    ],
    role: "Full-stack Developer — merancang arsitektur basis data relasional, mengimplementasikan algoritma pencarian & filter dinamis, serta mengoptimalkan antarmuka pengguna.",
    background:
      "Banyak mahasiswa kehilangan kesempatan beasiswa berharga dan lomba bergengsi karena informasi yang tersebar di beragam kanal tanpa pengingat tenggat waktu yang terpusat.",
    challenges:
      "Mengoptimalkan kinerja pencarian dan filtering pada ribuan baris data beasiswa dan lomba agar tetap responsif saat diakses mahasiswa secara bersamaan.",
    solution:
      "Menerapkan indexing database pada kolom-kolom kunci pencarian, pagination asinkron, dan arsitektur kueri efisien untuk menjamin waktu muat halaman di bawah 1 detik.",
    github: "https://github.com/nafiatulmuawanah/lobi-poliwangi",
    featured: true,
  },
  {
    id: "love-and-learn",
    title: "Love & Learn — Layanan Konseling & Edukasi Keluarga",
    category: "Project Based Learning",
    tagline: "Platform bimbingan pranikah, konseling keluarga, dan edukasi kesehatan mental terpercaya",
    description:
      "Platform edukasi pernikahan berbasis web yang dikembangkan untuk membantu calon pengantin mempersiapkan kehidupan berumah tangga melalui penyediaan materi edukasi pernikahan. Dilengkapi fitur konseling bagi pasangan suami istri serta pendataan peserta konseling oleh pihak KB Kecamatan Muncar untuk mendukung layanan konsultasi yang lebih terstruktur dan mudah diakses.",
    thumbnail: "/project-love&learn.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "CSS3"],
    features: [
      "Direktori profil konselor profesional lengkap dengan bidang keahlian, tarif, dan jadwal praktik",
      "Sistem booking jadwal konsultasi online dan tatap muka secara interaktif",
      "Formulir asesmen mandiri kebutuhan klien dengan jaminan kerahasiaan data privasi",
      "Katalog artikel dan modul edukasi pranikah, pola asuh anak, dan kesehatan relasi",
      "Dashboard rekam catatan sesi konsultasi dan jadwal temu untuk konselor",
      "Antarmuka pengguna bernuansa hangat, ramah, dan menenangkan (calm & trustworthy UI)",
    ],
    role: "Full-stack Developer — membangun arsitektur alur booking konsultasi, manajemen ketersediaan jadwal konselor, serta memastikan kerahasiaan dan keamanan data klien.",
    background:
      "Kesadaran akan pentingnya kesehatan mental keluarga dan persiapan pranikah semakin meningkat, namun masyarakat sering kesulitan menemukan konselor tepat dengan jadwal yang transparan.",
    challenges:
      "Mencegah bentrok jadwal konsultasi (double booking) antar klien pada waktu yang sama serta merancang antarmuka yang memberikan rasa nyaman dan aman bagi pengguna.",
    solution:
      "Mengembangkan sistem time-slot booking berbasis validasi ketersediaan real-time dengan status lock otomatis saat klien sedang menyelesaikan proses konfirmasi jadwal.",
    github: "https://github.com/nafiatulmuawanah/love-and-learn",
    featured: true,
  },
  {
    id: "smartkoding-academy",
    title: "SmartKoding Academy — E-Learning & Bootcamp Pemrograman",
    category: "Project Magang",
    tagline: "Platform kursus koding interaktif dan kelas industri terstruktur #2025BisaNgoding",
    description:
      "Platform pembelajaran pemrograman web interaktif yang dikembangkan untuk mendukung kegiatan belajar siswa di kelas industri Rekayasa Perangkat Lunak (RPL) SMK Negeri 8 Jember agar menguasai skill coding web (HTML, CSS, PHP, JavaScript, MySQL) dari dasar hingga siap terjun ke industri. Dilengkapi fitur modul pembelajaran, video rekaman pertemuan, pengumpulan dan revisi tugas, pemantauan nilai, serta informasi pembayaran untuk menciptakan pengalaman belajar yang terstruktur, interaktif, dan mudah diakses.",
    thumbnail: "/project-smartkoding.png",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    features: [
      "Katalog kelas industri terstruktur (Web Design Dasar, Backend PHP, Pemrograman Berorientasi Objek)",
      "Materi video dan modul panduan belajar langkah demi langkah (step-by-step tutorial)",
      "Pelacak progres belajar siswa (learning progress tracker) dengan persentase modul selesai",
      "Kuis interaktif dan latihan studi kasus untuk evaluasi pemahaman di tiap akhir bab",
      "Sistem generasi sertifikat kelulusan digital otomatis dengan kode verifikasi unik",
      "Dashboard instruktur untuk pemantauan perkembangan belajar siswa dan manajemen tugas",
    ],
    role: "Full-stack Developer — merancang sistem Learning Management System (LMS), tracking persentase progres belajar dinamis, dan sistem templating sertifikat digital otomatis.",
    background:
      "Kebutuhan talenta digital di bidang web development semakin tinggi, mendorong perlunya platform edukasi berbahasa Indonesia yang praktis, ramah pemula, dan berfokus pada praktik nyata.",
    challenges:
      "Mencatat kemajuan belajar siswa pada setiap sub-bab materi secara akurat tanpa membuat siswa harus me-refresh halaman yang dapat mengganggu konsentrasi belajar.",
    solution:
      "Menggunakan request AJAX asinkron untuk update checklist progres belajar secara instan dan kalkulasi persentase kelulusan kursus secara otomatis di sisi server.",
    github: "https://github.com/nafiatulmuawanah/smartkoding-academy",
    featured: true,
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
