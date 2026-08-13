import { SkillCategory, ExperienceItem, AchievementItem, HobbyItem, ProjectItem } from '../types';

export const PERSONAL_INFO = {
  name: 'M. Yudi Prianto',
  brand: 'YUDI.DEV',
  title: 'Halo, Saya Yudi.',
  role: 'Software Engineering Student',
  school: 'SMKN 1 Bintan Timur',
  tagline: 'Software Engineering Student @ SMKN 1 Bintan Timur. Membangun masa depan digital dengan presisi.',
  birthDate: '2008-03-31',
  birthPlace: 'Pariaman',
  age: 18,
  aboutHeadline: 'Membangun Fondasi.',
  aboutParagraphs: [
    'Lahir di Pariaman, 31 Maret 2008. Kini berusia 18 tahun dan berdedikasi dalam dunia Rekayasa Perangkat Lunak.',
    'Berfokus pada pengembangan solusi digital yang efisien dan scalable. Memadukan logika pemrograman dengan desain antarmuka yang fungsional.'
  ],
  contact: {
    email: 'm.yudi.prianto@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/6281234567890'
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'Code2',
    skills: [
      { name: 'HTML/CSS', percentage: 90 },
      { name: 'JavaScript', percentage: 80 },
      { name: 'Tailwind CSS', percentage: 85 }
    ]
  },
  {
    title: 'Backend',
    icon: 'Database',
    skills: [
      { name: 'PHP', percentage: 75 },
      { name: 'Laravel', percentage: 70 },
      { name: 'MySQL', percentage: 80 }
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
    role: 'Industrial Attachment Program',
    company: 'PT Esco Indonesia',
    period: '2023 - Present',
    description: 'Mengembangkan soft skill profesional, termasuk pemahaman dunia kerja dan membangun relasi profesional yang luas.',
    tags: [
      'Inventory Management',
      'Microsoft Excel',
      'Microsoft Word',
      'Professional Networking'
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'juara-smp',
    title: 'Juara Umum SMP',
    year: '2023',
    description: 'Mempertahankan konsistensi dalam performa akademik, meraih peringkat pertama secara keseluruhan di angkatan.',
    icon: 'Trophy'
  },
  {
    id: 'olimpiade-mtk',
    title: 'Olimpiade Sains (Matematika)',
    year: '2022',
    description: 'Berpartisipasi aktif dalam olimpiade matematika, sebuah tantangan yang secara signifikan mempertajam kemampuan berpikir logis dan pemecahan masalah.',
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
