import { SkillCategory, ExperienceItem, AchievementItem, HobbyItem, ProjectItem } from '../types';

export const PERSONAL_INFO = {
  name: 'M. Yudi Prianto',
  fullName: 'Muhammad Yudi Prianto',
  brand: 'YUDI.DEV',
  title: 'Halo, Saya Yudi! 👋',
  role: 'Software Engineering Student',
  school: 'SMKN 1 Bintan Timur',
  tagline: 'Muhammad Yudi Prianto — Software Engineering Student @ SMKN 1 Bintan Timur. Masih belajar, tapi semangat nggak pernah berhenti! 🚀',
  profilePhoto: '/hero-photo.jpeg',
  aboutPhoto: '/about-photo.jpeg',
  birthDate: '2008-03-31',
  birthPlace: 'Pariaman',
  age: 18,
  aboutHeadline: 'Membangun Fondasi.',
  aboutParagraphs: [
    'Nama lengkap saya Muhammad Yudi Prianto, lahir di Pariaman, 31 Maret 2008. Kini berusia 18 tahun dan sedang menempuh pendidikan di jurusan Rekayasa Perangkat Lunak (RPL) SMKN 1 Bintan Timur.',
    'Masih dalam tahap belajar dan terus berkembang. Saya percaya bahwa setiap baris kode yang ditulis adalah satu langkah maju menuju versi terbaik diri sendiri. 💡'
  ],
  contact: {
    email: 'muhammadyudiprianto30@gmail.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://www.instagram.com/myuu_d1?igsh=eGQ5cWJpODdoN3c5',
    tiktok: 'https://www.tiktok.com/@itssmymyuuu?_r=1&_t=ZS-98q4RYQ7Gar',
    whatsapp: 'https://wa.me/6282389505052'
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'Code2',
    skills: [
      { name: 'HTML/CSS', percentage: 30 },
      { name: 'JavaScript', percentage: 15 },
      { name: 'Tailwind CSS', percentage: 20 }
    ]
  },
  {
    title: 'Backend',
    icon: 'Database',
    skills: [
      { name: 'PHP', percentage: 15 },
      { name: 'Laravel', percentage: 10 },
      { name: 'MySQL', percentage: 20 }
    ]
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    tools: [
      { name: 'Git/GitHub', iconName: 'GitFork' },
      { name: 'VS Code', iconName: 'Code' },
      { name: 'Figma', iconName: 'Figma' },
      { name: 'Chrome Dev', iconName: 'LayoutGrid' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'esco-1',
    role: 'Praktik Kerja Lapangan (PKL)',
    company: 'PT ESCO INDONESIA',
    department: 'Departemen Small WO',
    period: '2024',
    description: 'Menjalani program PKL sebagai siswa SMK Jurusan Rekayasa Perangkat Lunak di PT Esco Indonesia, sebuah perusahaan manufaktur peralatan laboratorium dan biomedis bertaraf internasional yang berlokasi di Batam. Ditempatkan di Departemen Small WO yang menangani pengemasan (packing) komponen dan alat-alat kecil. Meskipun berbeda dari jurusan RPL, pengalaman ini memberikan banyak pelajaran berharga tentang dunia kerja nyata, kedisiplinan industri, dan cara membangun relasi profesional.',
    tags: [
      'Packing & Inventory',
      'Microsoft Excel',
      'Microsoft Word',
      'Pendataan Stok Barang',
      'Kedisiplinan Industri',
      'Membangun Relasi',
      'Dunia Kerja Nyata'
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ranking-konsisten',
    title: 'Ranking Konsisten SD s.d. SMK',
    year: 'Kelas 1 SD – Kelas 11 SMK',
    description: 'Meraih peringkat 1–3 secara konsisten dari kelas 1 SD hingga kelas 9 SMP. Di SMK: Ranking 1 (Kelas 10 Sem 1), Ranking 3 (Kelas 10 Sem 2), Ranking 1 (Kelas 11 Sem 1), Ranking 7 (Kelas 11 Sem 2).',
    icon: 'Trophy'
  },
  {
    id: 'juara-umum-smp',
    title: 'Juara Umum SMP',
    year: 'Kelas 8 Semester 1',
    description: 'Meraih Juara Umum di SMPN 27 Bintan pada kelas 8 semester 1, membuktikan konsistensi performa akademik terbaik di seluruh angkatan.',
    icon: 'Trophy'
  },
  {
    id: 'olimpiade-mtk',
    title: 'Juara 3 Olimpiade Matematika Tingkat Kecamatan',
    year: 'SD Kelas 5',
    description: 'Meraih Juara 3 olimpiade matematika tingkat kecamatan saat kelas 5 SD, kemudian mewakili ke tingkat kabupaten. Pengalaman ini mempertajam kemampuan berpikir logis dan pemecahan masalah.',
    icon: 'Calculator'
  }
];

export const HOBBIES: HobbyItem[] = [
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Aktif bermain game kompetitif, yang melatih pemikiran strategis, pengambilan keputusan cepat, dan waktu reaksi yang tangkas dalam situasi dinamis.',
    icon: 'Gamepad2'
  },
  {
    id: 'reading',
    title: 'Membaca',
    description: 'Mengeksplorasi literatur teknis dan fiksi ilmiah untuk memperluas wawasan dan memelihara rasa ingin tahu terhadap perkembangan teknologi.',
    icon: 'BookOpen'
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Sistem Manajemen Inventaris Esco',
    category: 'Full Stack App',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    description: 'Aplikasi manajemen stok dan laporan logistik berbasis web yang efisien dengan pelacakan item real-time.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS']
  },
  {
    id: 'proj-2',
    title: 'Portal Akademik SMKN 1 Bintan Timur',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    description: 'Platform informasi dan administrasi siswa terpadu dengan antarmuka modern dan responsif.',
    techStack: ['JavaScript', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    id: 'proj-3',
    title: 'Math Logic & Algorithm Solver',
    category: 'Educational Tool',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    description: 'Modul kalkulasi logika pemrograman dan visualisasi algoritma untuk kompetisi olimpiade matematika.',
    techStack: ['JavaScript', 'React', 'Tailwind CSS']
  }
];
