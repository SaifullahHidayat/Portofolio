import type { Project, Experience, SkillCategory } from '../types/index';

export const personalInfo = {
  name: 'Saifullah Hidayat',
  role: 'Front End Developer',
  email: 'syaifullah1108@gmail.com',
  location: 'Tangerang, Indonesia',
  tagline: 'I build digital experiences that matter',
  bio: [
    'Im a Computer Science graduate from Universitas Pamulang with an interest in UI/UX design, data analysis, and web development.',
    'I enjoy creating user-friendly interfaces, exploring data to find meaningful insights, and learning how technology can solve real-world problems.',
    'Currently, Im building my skills through personal projects and continuous learning, while looking for opportunities to grow and gain professional experience.'
  ],
  stats: [
    { label: 'Years Experience', value: 0 },
    { label: 'Projects Completed', value: 5 },
    { label: 'Happy Clients', value: 0 },
    { label: 'Coffee Consumed', value: 999 },
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/SaifullahHidayat', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/Saifullah-Hidayat-398653262', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'Dribbble', url: 'https://dribbble.com/saifullah-hidayat', icon: 'dribbble' },
  ]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Prisma', level: 85 },
      { name: 'REST / GraphQL', level: 80 },
    ]
  },
  {
    id: 'design',
    title: 'Design',
    icon: 'palette',
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Adobe XD', level: 75 },
      { name: 'UI/UX Principles', level: 88 },
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'wrench',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker', level: 78 },
      { name: 'Vercel', level: 90 },
      { name: 'VS Code', level: 95 },
    ]
  }
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Booking Garuda indonesia (Unofficial Concept)',
    description: 'Membuat Tampilan booking web minimalis dengan 1 landing page',
    category: 'UI/UX',
    image: '/assets/Booking.png',
    tech: ['Canva', 'Figma'],
    liveUrl: 'https://www.figma.com/design/ntVT8EEkgkJVTPo8lNBvzc/booking?node-id=66-291&t=giv6QrQiL66FKdMU-1',
  },
  {
    id: '2',
    title: 'Monitoring kualitas air akuarium',
    description: 'Aplikasi monitoring air akuarium secara real-time berbasis IoT',
    category: 'web',
    image: '/assets/monitoring.png',
    tech: ['PHP Native', 'javascript', 'C++', 'mysql'],
    liveUrl: 'https://saifulmonitoring.my.id',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'Analysist data retail',
    description: 'Memfokuskan alokasi stok pada kategori Beauty dan mempersiapkan kampanye pemasaran khusus (targeted ads) yang menyasar segmen usia 46-55 tahun, serta memaksimalkan budget promosi pada periode Mei-Juli untuk menangkap momentum lonjakan pasar.',
    category: 'design',
    image: 'public\assets\data.png',
    tech: ['Google Studio', 'Data Studio'],
    liveUrl: 'https://datastudio.google.com/s/pP5B7Z24DWM',
  },
]

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'S1 Teknik Informatika',
    company: 'Universitas Pamulang',
    companyUrl: '#',
    dateRange: '2022 - 2026',
    description: [
      'Mengembangkan berbagai project website sebagai bagian dari pembelajaran dan tugas kuliah ',
      'Mengembangkan project monitoring kalitas air berbasis iot sebagai tugas Akhir',
      'Mempelajari pemrograman, database dll'
    ],
    tech: ['HTML', 'CSS', 'Tailwind', 'mysql', 'PHP']
  },
  {
    id: '2',
    role: 'Front end Developer',
    company: 'Personal Projects',
    companyUrl: 'https://github.com/SaifullahHidayat',
    dateRange: '2025 - present',
    description: [
      'Membangun website menggunakan React dan Vite.',
      'Mengembangkan responsive UI menggunakan Tailwind CSS.',
      'Integrasi payment gateway dan sistem subscription'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker']
  },
  {
    id: '3',
    role: 'IoT & Web Development',
    company: 'Aquarium Water Quality Monitoring',
    companyUrl: 'https://saifulmonitoring.my.id',
    dateRange: '2026',
    description: [
      'Mengembangkan sistem monitoring kualitas air akuarium berbasis ESP32',
      'Membuat dashboard untuk menampilkan data sensor',
      'Maintenance dan optimasi website'
    ],
    tech: ['JavaScript', 'PHP', 'mysql', 'Fuzzy']
  }
]