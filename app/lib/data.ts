import type { Project, Experience, SkillCategory } from '../types/index';

export const personalInfo = {
  name: 'Saifullah Hidayat',
  role: 'Front End Developer',
  email: 'syaifullah1108@gmail.com',
  location: 'Tangerang, Indonesia',
  tagline: 'I build digital experiences that matter',
  bio: [
    'Saya adalah developer passionate dengan pengalaman 5+ tahun membangun aplikasi web modern yang scalable dan user-friendly.',
    'Fokus utama saya pada ekosistem React, Node.js, dan cloud infrastructure. Saya percaya bahwa kode yang baik adalah kode yang readable, maintainable, dan performant.',
    'Saat ini saya terbuka untuk kesempatan freelance, full-time, atau kolaborasi project menarik.'
  ],
  stats: [
    { label: 'Years Experience', value: 0 },
    { label: 'Projects Completed', value: 5 },
    { label: 'Happy Clients', value: 2 },
    { label: 'Coffee Consumed', value: 999 },
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/SaifullahHidayat', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
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
    title: 'E-Commerce Dashboard',
    description: 'Dashboard analytics real-time dengan visualisasi data interaktif dan manajemen inventory.',
    category: 'web',
    image: '/project-1.jpg',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    liveUrl: '#',
    githubUrl: '#',
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
    title: 'Finance Mobile App',
    description: 'Aplikasi mobile tracking keuangan pribadi dengan budgeting dan report otomatis.',
    category: 'mobile',
    image: '/project-3.jpg',
    tech: ['React Native', 'TypeScript', 'Firebase'],
    liveUrl: '#',
  },
  {
    id: '4',
    title: 'Design System',
    description: 'Komprehensif design system dengan komponen reusable, dokumentasi, dan token system.',
    category: 'design',
    image: '/project-4.jpg',
    tech: ['Figma', 'Storybook', 'React'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '5',
    title: 'Open Source CLI Tool',
    description: 'Command line interface untuk scaffolding project Next.js dengan best practices.',
    category: 'open-source',
    image: '/project-5.jpg',
    tech: ['TypeScript', 'Node.js', 'CLI'],
    githubUrl: '#',
  },
]

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'TechCorp Indonesia',
    companyUrl: '#',
    dateRange: '2022 - Present',
    description: [
      'Memimpin tim frontend 5 orang dalam pengembangan platform SaaS',
      'Mengimplementasikan design system yang mengurangi development time 40%',
      'Optimasi performa mencapai Lighthouse score 95+ di semua metrics'
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'GraphQL']
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    companyUrl: '#',
    dateRange: '2020 - 2022',
    description: [
      'Mengembangkan MVP dari nol hingga 10K+ active users',
      'Setup CI/CD pipeline dan infrastructure di AWS/Vercel',
      'Integrasi payment gateway dan sistem subscription'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker']
  },
  {
    id: '3',
    role: 'Junior Web Developer',
    company: 'Digital Agency',
    companyUrl: '#',
    dateRange: '2019 - 2020',
    description: [
      'Mengerjakan 20+ website untuk klien dari berbagai industri',
      'Collaboration dengan tim design untuk implementasi pixel-perfect',
      'Maintenance dan optimasi website existing'
    ],
    tech: ['JavaScript', 'PHP', 'WordPress', 'SASS']
  }
]