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
  education: "Bisnis & Informatika",
  email: "nafiatulmuawanah23@gmail.com",
  phone: "085961560498",
  whatsapp: "6285961560498",
  whatsappUrl: "https://wa.me/6285961560498",
  github: "https://github.com/ininafia",
  linkedin: "https://linkedin.com/in/nafiatulmuawanah",
  cvUrl: "/CV_Nafiatul_Muawanah.pdf",
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
      "Aplikasi web penilaian pertandingan pencak silat yang dirancang sesuai dengan regulasi resmi IPSI. Sistem ini menggantikan proses penilaian manual dengan penilaian digital yang memungkinkan beberapa juri memasukkan skor secara bersamaan, menghitung nilai secara otomatis, dan menampilkan hasil pertandingan secara langsung melalui papan skor digital (live score board).",
    thumbnail: "/project-scoring.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
    features: [
      "Input skor real-time oleh beberapa juri secara bersamaan untuk sudut merah dan biru",
      "Kalkulasi nilai otomatis, deteksi hukuman, dan penentuan pemenang secara akurat",
      "Layar monitor digital (live scoreboard) pertandingan untuk penonton dan official",
      "Dashboard admin untuk manajemen bagan turnamen, babak pertandingan, dan verifikasi juri",
      "Pencatatan pelanggaran, teguran, peringatan, dan riwayat jejak audit (audit trail)",
      "Cetak otomatis berita acara dan lembar hasil pertandingan ke format PDF",
    ],
    role: "Full-stack Developer — merancang arsitektur basis data, membangun logika penilaian backend sesuai standar IPSI, serta mengembangkan antarmuka pengguna responsif dengan latensi rendah.",
    background:
      "Pertandingan pencak silat yang menggunakan sistem penilaian manual masih berpotensi mengalami penilaian yang subjektif, kesalahan dalam penghitungan poin, serta keterlambatan dalam merekap nilai setiap babak.",
    challenges:
      "Menerima dan memproses input skor dari beberapa juri secara bersamaan dalam waktu singkat, serta memastikan data tetap akurat, konsisten, dan langsung diperbarui secara real-time.",
    solution:
      "Menggunakan transaksi database dan pengaturan akses data untuk mencegah benturan saat beberapa juri memasukkan skor secara bersamaan, serta memanfaatkan AJAX polling agar pembaruan skor dapat ditampilkan secara berkala tanpa harus memuat ulang halaman.",
    github: "https://github.com/nafiatulmuawanah/silat-scoring",
    featured: true,
  },
  {
    id: "indo-gopermit",
    title: "Indo GoPermit — platform Layanan Perizinan",
    category: "Project Magang",
    tagline: "Platform digital untuk pengajuan, pemrosesan, dan pemantauan perizinan operasional Lembaga Kursus dan Pelatihan (LKP) secara online.",
    description:
      "Platform layanan perizinan LKP berbasis digital yang dikembangkan untuk menyederhanakan proses pengajuan izin secara online. Melalui IndoGoPermit, pemohon dapat mengajukan perizinan, mengunggah dokumen persyaratan, memantau status verifikasi secara real-time, serta menerima notifikasi perkembangan perizinan untuk mewujudkan proses yang lebih cepat, efisien, dan transparan.",
    thumbnail: "/project-lkp.png",
    technologies: ["PHP", "Laravel", "MySQL", "Tailwindcss", "JavaScript"],
    features: [
      "Pengajuan perizinan usaha terpadu dengan formulir bertahap (multi-step form)",
      "Upload dan verifikasi dokumen legalitas usaha dengan validasi tipe berkas ketat",
      "Pelacakan status berkas real-time (Verifikasi Berkas, Review Teknis, Izin Terbit)",
      "Dashboard verifikator dinas untuk peninjauan berkas dan pemberian catatan evaluasi",
    ],
    role: "Web Developer Intern (PT. Indo Apps Solusindo, BALI) — Berkontribusi dalam pengembangan fitur autentikasi, profil pengguna, riwayat aktivitas pengajuan, dan halaman detail perizinan, serta mendukung transparansi proses perizinan melalui fitur pelacakan status permohonan dan notifikasi otomatis.",
    background:
      "Proses perizinan usaha secara konvensional sering kali membutuhkan waktu lama, mengharuskan pemohon datang langsung ke kantor berkali-kali, serta menyulitkan pemantauan status dan perkembangan berkas permohonan.",
    challenges:
      "Memastikan pemohon dapat memantau perkembangan pengajuan izin dengan mudah, sekaligus menjaga transparansi proses verifikasi dokumen dan memastikan setiap perubahan status permohonan dapat diketahui oleh pemohon.",
    solution:
      "Mengembangkan fitur pelacakan status permohonan, riwayat aktivitas pengajuan, dan notifikasi otomatis untuk memberikan informasi perkembangan perizinan secara berkala, sehingga proses pengajuan menjadi lebih transparan, terstruktur, dan mudah dipantau.",
    github: "https://github.com/nafiatulmuawanah/indo-gopermit",
    featured: true,
  },
  {
    id: "lobi-poliwangi",
    title: "Lobi Poliwangi — Platform Informasi Lomba, Beasiswa & Prestasi Mahasiswa",
    category: "Project Based Learning",
    tagline: "Platform web untuk mengelola dan mempublikasikan informasi lomba, beasiswa, serta prestasi mahasiswa Politeknik Negeri Banyuwangi.",
    description:
      "Situs web yang dikembangkan untuk mengelola informasi lomba, beasiswa, dan prestasi mahasiswa Politeknik Negeri Banyuwangi. Platform ini memfasilitasi publikasi informasi yang terpusat dan terstruktur, memudahkan mahasiswa dalam mencari peluang kompetisi dan beasiswa, serta mendokumentasikan pencapaian prestasi mahasiswa.",
    thumbnail: "/project-lobi.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Katalon", "JMeter", "Web Hosting"],
    features: [
      "Pengelolaan dan publikasi informasi perlombaan akademik maupun nonakademik",
      "Pengelolaan katalog informasi beasiswa lengkap dengan persyaratan dan jadwal pendaftaran",
      "Pencatatan dan publikasi data capaian prestasi mahasiswa Politeknik Negeri Banyuwangi",
      "Penyusunan test plan, test case & test scenario, serta pelaporan bug terstruktur",
      "Pengujian otomatisasi fungsionalitas dan uji performa menggunakan Katalon dan JMeter",
      "Pelaksanaan UAT (User Acceptance Testing) dan deployment situs ke layanan web hosting",
    ],
    role: "QA Tester — Mengembangkan situs website untuk mengelola informasi lomba, beasiswa, dan prestasi mahasiswa Politeknik Negeri Banyuwangi, berkontribusi membuat test plan, penulisan test case & test scenario, pelaporan bug, melakukan pengujian menggunakan Katalon dan JMeter, melakukan UAT (User Acceptance Testing), serta menerapkan situs website ke layanan web hosting.",
    background:
      "Informasi mengenai kompetisi lomba, peluang beasiswa, dan capaian prestasi mahasiswa sebelumnya belum terkelola masih menggunakan WhatsApp, sehingga menyulitkan mahasiswa untuk mengakses informasi terkini secara efektif.",
    challenges:
      "Memastikan seluruh alur sistem berjalan optimal dan bebas kendala sebelum dirilis ke pengguna melalui pengujian fungsional dan performa yang ketat, serta melakukan konfigurasi deployment situs ke layanan web hosting.",
    solution:
      "Membuat test plan yang sistematis, menyusun test case dan skenario pengujian, mencatat dan menindaklanjuti pelaporan bug, menjalankan pengujian otomatisasi dan beban menggunakan Katalon serta JMeter, melaksanakan UAT bersama pengguna, dan menerapkan situs website ke layanan web hosting.",
    github: "https://github.com/nafiatulmuawanah/lobi-poliwangi",
    featured: true,
  },
  {
    id: "love-and-learn",
    title: "Love & Learn — Layanan Konseling & Edukasi Pernikahan",
    category: "Project Based Learning",
    tagline: "Platform edukasi pernikahan bagi calon pengantin muda dan pendataan sesi konseling pasangan suami istri bersama KB Kecamatan Muncar.",
    description:
      "Aplikasi Love & Learn dirancang sebagai media edukasi pernikahan dalam bentuk platform Web untuk membantu calon pengantin, khususnya di kalangan anak muda, agar lebih siap menghadapi kehidupan berumah tangga. Sistem ini juga dilengkapi fitur konseling bagi pasangan suami istri serta mempermudah pihak KB Kecamatan Muncar dalam mendata masyarakat yang telah mengikuti sesi konseling.",
    thumbnail: "/project-love&learn.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Penyediaan modul materi edukasi persiapan pernikahan terstruktur bagi calon pengantin muda",
      "Fitur konseling interaktif bagi pasangan suami istri untuk konsultasi permasalahan rumah tangga",
      "Sistem pendataan dan rekapitulasi masyarakat yang telah melaksanakan sesi konseling di KB Kecamatan Muncar",
      "Desain antarmuka responsif yang dirancang untuk platform Web",
    ],
    role: "Web Developer — Berkontribusi dalam perancangan dan pengembangan aplikasi Love & Learn  untuk edukasi pernikahan calon pengantin muda, implementasi fitur konseling pasangan suami istri, serta pembuatan sistem pendataan sesi konseling untuk pihak KB Kecamatan Muncar.",
    background:
      "Peningkatan angka perceraian setiap tahunnya menjadi isu mendesak yang memerlukan solusi nyata melalui edukasi pernikahan yang efektif bagi calon pengantin di kalangan anak muda. Selain itu, observasi bersama pihak KB Kecamatan Muncar menunjukkan perlunya sistem konseling pasangan suami istri yang memudahkan pendataan siapa saja masyarakat yang telah melakukan sesi konseling.",
    challenges:
      "Merancang media edukasi pranikah yang interaktif dan mudah diakses oleh pasangan muda di platform Web, sekaligus menyediakan alur pendataan sesi konseling yang rapi dan terorganisir bagi pihak KB Kecamatan Muncar.",
    solution:
      "Mengembangkan aplikasi Love & Learn dengan penyampaian materi edukasi pernikahan yang komprehensif, fitur konseling terpadu untuk pasangan suami istri, serta sistem pendataan yang memudahkan pihak KB Kecamatan Muncar dalam mengelola riwayat sesi konseling masyarakat.",
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
      "Dashboard instruktur untuk pemantauan perkembangan belajar siswa dan manajemen tugas",
    ],
    role: "Full-stack Web Developer — Mengembangkan LMS berbasis web untuk mendukung proses pembelajaran digital, termasuk pengelolaan materi, tugas, dan penilaian siswa, serta fitur unggah modul, video pembelajaran, pemberian poin apresiasi, dan ekspor data ke Excel.",
    background:
      "Proses pembelajaran dan pengelolaan data siswa yang masih dilakukan secara manual dan terpisah menyulitkan pengajar dalam menyampaikan materi, memberikan penilaian, serta mendokumentasikan perkembangan belajar siswa. Oleh karena itu, diperlukan sistem kursus online berbasis web untuk mempermudah kegiatan belajar mengajar dan pengelolaan data siswa secara digital.",
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
    title: "Sarjana Terapan Bisnis & Informatika",
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
    institution: "Smart Technology Solution (Smartlogy)",
    period: "2023",
    location: "Jember, Indonesia",
    image: "/magang-jember.png",
    description:
      "Mengikuti program magang industri intensif mencakup pengembangan sistem web profesional serta mentoring logika pemrograman dan asistensi teknis coding bagi mahasiswi di Smartlogy Class.",
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
    title: "Volunteer STIKES Science Olympiad (S2O)",
    institution: "Sekolah Tinggi Ilmu Kesehatan (STIKES) Banyuwangi",
    period: "2024",
    location: "Banyuwangi",
    image: "/volunteer-S2o.jpg",
    description:
      "Berperan aktif sebagai relawan (volunteer) dalam penyelenggaraan kompetisi STIKES Science Olympiad (S2O) 2024 di Sekolah Tinggi Ilmu Kesehatan Banyuwangi.",
    highlights: [
      "Mendukung kelancaran pelaksanaan kompetisi olimpiade sains bagi pelajar",
      "Berkoordinasi dengan tim panitia dan peserta selama kegiatan berlangsung",
    ],
    skills: ["Event Volunteer", "Event Coordination", "Public Hospitality", "Teamwork"],
  },
  {
    id: "cert-1",
    type: "certification",
    title: "Sertifikasi Web Developer & Pencapaian Tugas Akhir",
    institution: "Lembaga Sertifikasi Profesi & Dewan Penguji Ilmiah",
    period: "2023 — 2024",
    location: "Terakreditasi",
    image: "/kepanitiaan3.jpg",
    description:
      "Meraih pencapaian akademis tugas akhir atas inovasi digitalisasi sistem penilaian real-time, serta lulus uji kompetensi sertifikasi profesional rekayasa web.",
    highlights: [
      "Penghargaan Terbaik: Sistem Penilaian Digital Turnamen Pencak Silat (Kategori Inovasi Sistem)",
      "Sertifikasi Kompetensi Resmi Web Developer & Database Management Specialist",
      "Mendapat apresiasi dewan juri atas keandalan transaksi data tanpa konflik saat penilaian simultan",
    ],
    skills: ["Full-stack Architecture", "Database Locking", "Technical Certification", "Innovation Award"],
  },
];
