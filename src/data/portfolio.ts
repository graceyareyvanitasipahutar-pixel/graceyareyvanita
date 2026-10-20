import {
  Briefcase,
  Users,
  FolderKanban,
  CalendarDays,
  MapPin,
  Mail,
  Linkedin,
  GraduationCap,
  ShieldCheck,
  ClipboardList,
  Camera,
  Boxes,
  Megaphone,
  PenTool,
  BarChart3,
  Rocket,
  Target,
  LayoutGrid,
  FileText,
  TrendingUp,
  Trophy,
  Award,
  Medal,
  Star,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Graceya Reyvanita Sipahutar',
  eyebrow: 'My Personal Portfolio',
  headline: 'Mahasiswa Bisnis Digital | Administrasi SDM dan Rekrutmen',
  supporting:
    'Saya memiliki latar belakang pendidikan Bisnis Digital serta pengalaman dalam administrasi rekrutmen, koordinasi organisasi, dan proyek bisnis. Saya tertarik pada pengelolaan sumber daya manusia dan proses administrasi yang terstruktur. Saya terus mengembangkan kompetensi profesional agar dapat memberikan kontribusi yang bertanggung jawab dan mendukung kelancaran operasional organisasi.',
  location: 'Pekanbaru, Riau, Indonesia',
  email: 'graceyareyvanitasipahutar@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/graceya-reyvanita-sipahutar',
  cvPath: '/GRACEYA_REYVANITA_SIPAHUTAR-resume.pdf',
  certificateFolderUrl: 'https://drive.google.com/drive/folders/1-Kn_vtUqz3EOvSQfwV69B152AwLzntSq?usp=drive_link',
};

export const about = {
  title: 'Tentang Saya',
  subheading: 'Mengembangkan Kompetensi dalam Administrasi dan Sumber Daya Manusia',
  description:
    'Sebagai mahasiswa D4 Bisnis Digital di Politeknik Caltex Riau, saya mempelajari hubungan antara proses bisnis, kebutuhan organisasi, dan pengembangan kompetensi profesional. Pengalaman dalam administrasi rekrutmen dan kegiatan organisasi memberikan pemahaman mengenai pentingnya ketelitian, dokumentasi, koordinasi, serta keteraturan dalam pelaksanaan pekerjaan.\n\nSaya juga memiliki pengalaman mengerjakan proyek pemasaran digital, pengembangan merek, dan perencanaan bisnis. Perpaduan pengalaman tersebut menjadi dasar bagi saya untuk terus mengembangkan kemampuan administrasi dan memperluas pemahaman mengenai pengelolaan sumber daya manusia.',
  highlights: [
    {
      icon: Users,
      title: 'Administrasi SDM dan Rekrutmen',
      desc: 'Ketertarikan pada administrasi rekrutmen dan pengelolaan sumber daya manusia.'
    },
    {
      icon: ClipboardList,
      title: 'Administrasi dan Koordinasi',
      desc: 'Pengalaman organisasi dalam administrasi, notulensi, koordinasi kegiatan, dan inventaris.'
    },
    {
      icon: Megaphone,
      title: 'Bisnis Digital dan Pemasaran',
      desc: 'Pengalaman proyek akademik dalam pemasaran digital, pengembangan merek, promosi, dan analisis pasar.'
    },
  ],
};

export type Experience = {
  id: string;
  role: string;
  org: string;
  type: 'work' | 'leadership' | 'organization';
  period: string;
  location: string;
  description?: string;
  tags?: string[];
  responsibilities?: string[];
};

export const experiences: Experience[] = [
  {
    id: 'pkss',
    role: 'Administrasi HR Rekrutmen',
    org: 'PT Prima Karya Sarana Sejahtera (PT PKSS)',
    type: 'work',
    period: 'Agustus 2026 – Sekarang',
    location: 'Pekanbaru, Indonesia',
    description:
      'PT Prima Karya Sarana Sejahtera merupakan perusahaan penyedia jasa pengelolaan sumber daya manusia dan alih daya.',
    tags: ['Staf Administrasi Rekrutmen (Recruitment Administration)', 'Asisten Sumber Daya Manusia (HR Assistant)'],
  },
  {
    id: 'himbidi',
    role: 'Sekretaris Umum & Presidium',
    org: 'Himpunan Mahasiswa Bisnis Digital (HIMBIDI) — Politeknik Caltex Riau',
    type: 'leadership',
    period: 'Mei 2026 – Agustus 2027',
    location: 'Pekanbaru, Indonesia',
    description:
      'HIMBIDI merupakan organisasi mahasiswa yang berfokus pada pengembangan potensi mahasiswa di bidang bisnis dan teknologi digital.',
    responsibilities: [
      'Mengelola administrasi organisasi dan menyusun notulen rapat.',
      'Mendukung koordinasi dan pelaksanaan program kerja.',
      'Mengawasi serta memantau badan pengurus eksekutif dalam menjalankan tugas.',
      'Memberikan saran dan masukan untuk mendukung pelaksanaan tugas organisasi.',
    ],
  },
  {
    id: 'pmk',
    role: 'Anggota Divisi Dokumentasi',
    org: 'Persekutuan Mahasiswa Kristen (PMK) — Politeknik Caltex Riau',
    type: 'organization',
    period: 'Agustus 2025 – Agustus 2026',
    location: 'Pekanbaru, Indonesia',
    responsibilities: [
      'Mendokumentasikan kegiatan organisasi melalui foto dan video.',
      'Mengelola arsip dokumentasi kegiatan.',
      'Memastikan dokumentasi tersedia untuk kebutuhan publikasi dan laporan organisasi.',
    ],
  },
  {
    id: 'himaksi',
    role: 'Anggota Departemen Inventaris',
    org: 'Himpunan Mahasiswa Akuntansi Perpajakan (HIMAKSI) — Politeknik Caltex Riau',
    type: 'organization',
    period: 'Agustus 2025 – April 2026',
    location: 'Pekanbaru, Indonesia',
    responsibilities: [
      'Mengelola dan mendata inventaris organisasi.',
      'Mencatat keluar-masuk barang.',
      'Memastikan kondisi dan ketersediaan perlengkapan.',
      'Menjaga ketertiban administrasi inventaris untuk mendukung kegiatan organisasi.',
    ],
  },
];

export type SkillLevel = 'Pengalaman Praktis' | 'Proyek Akademik' | 'Pemahaman Dasar' | 'Penguasaan Perangkat';

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  skills: { name: string; level: SkillLevel }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Administrasi dan Sumber Daya Manusia',
    icon: Users,
    skills: [
      { name: 'Administrasi Rekrutmen', level: 'Pengalaman Praktis' },
      { name: 'Pengelolaan Administrasi', level: 'Pemahaman Dasar' },
      { name: 'Notulensi dan Dokumentasi Rapat', level: 'Pengalaman Praktis' },
      { name: 'Koordinasi Organisasi', level: 'Pengalaman Praktis' },
      { name: 'Administrasi Inventaris', level: 'Pengalaman Praktis' },
    ],
  },
  {
    category: 'Bisnis Digital dan Pemasaran',
    icon: Megaphone,
    skills: [
      { name: 'Pemasaran Digital', level: 'Proyek Akademik' },
      { name: 'Pengembangan Merek', level: 'Proyek Akademik' },
      { name: 'Pembuatan Konten Promosi', level: 'Proyek Akademik' },
      { name: 'Analisis Pasar Sasaran', level: 'Proyek Akademik' },
      { name: 'Perencanaan Bisnis', level: 'Proyek Akademik' },
    ],
  },
  {
    category: 'Perangkat dan Keterampilan Teknis',
    icon: LayoutGrid,
    skills: [
      { name: 'Microsoft Office', level: 'Penguasaan Perangkat' },
      { name: 'Canva', level: 'Penguasaan Perangkat' },
      { name: 'Figma', level: 'Pemahaman Dasar' },
      { name: 'Dasar-Dasar Pengembangan Situs Web', level: 'Pemahaman Dasar' },
    ],
  },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  icon: LucideIcon;
  description: string;
  contributions: string[];
  objective: string;
  tools?: string[];
  outcome?: string;
};

export const projects: Project[] = [
  {
    id: 'pipo-pipo',
    number: '01',
    title: 'Pipo Pipo',
    category: 'Pemasaran Digital',
    year: '2025',
    icon: Megaphone,
    description:
      'Mengembangkan strategi pemasaran digital untuk meningkatkan kesadaran merek dan keterlibatan pelanggan melalui media digital.',
    contributions: [
      'Merancang konten promosi.',
      'Melakukan pemasangan iklan digital menggunakan Meta Ads berdasarkan analisis target pasar.',
    ],
    objective:
      'Meningkatkan kesadaran merek dan keterlibatan pelanggan melalui strategi pemasaran digital yang terarah.',
    tools: ['Meta Ads', 'Canva'],
  },
  {
    id: 'business-corner',
    number: '02',
    title: 'Business Corner Koperasi Politeknik Caltex Riau',
    category: 'Bisnis Digital',
    year: '2026',
    icon: Target,
    description:
      'Mengembangkan strategi pengembangan merek dan promosi digital untuk memperkenalkan produk serta layanan koperasi.',
    contributions: [
      'Melakukan analisis target pasar.',
      'Menyusun konsep pengembangan merek untuk meningkatkan daya tarik dan jangkauan promosi.',
    ],
    objective:
      'Memperkenalkan produk dan layanan koperasi melalui strategi pengembangan merek dan promosi digital yang lebih menarik serta terarah.',
  },
  {
    id: 'bomak',
    number: '03',
    title: 'BoMak Snack Bola Makaroni Keju',
    category: 'Pengembangan Merek dan Penjualan',
    year: '2026',
    icon: Rocket,
    description:
      'Mengembangkan strategi pengembangan merek digital dan pemasaran untuk meningkatkan kesadaran merek serta penjualan produk.',
    contributions: [
      'Menyusun konten promosi.',
      'Melakukan analisis pasar sebagai dasar penyusunan strategi pemasaran.',
    ],
    objective:
      'Meningkatkan kesadaran merek dan mendukung penjualan produk melalui strategi pengembangan merek digital serta pemasaran.',
  },
];

export type Achievement = {
  title: string;
  award: string;
  event: string;
  year: string;
  category: string;
  status: 'winner' | 'participant';
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    title: 'Gold Award',
    award: 'Gold Award — Kategori Kewirausahaan',
    event: 'Global Innovation Entrepreneurship Competition',
    year: '2024',
    category: 'Kewirausahaan',
    status: 'winner',
    icon: Medal,
  },
  {
    title: 'Juara 3',
    award: 'Juara 3 — Business Plan Competition Innovation',
    event: 'Universitas Ngudi Waluyo',
    year: '2025',
    category: 'Business Plan',
    status: 'winner',
    icon: Trophy,
  },
  {
    title: 'Terbaik Kategori Ke-2',
    award: 'Terbaik Kategori Ke-2 — National Jacofest Business Plan Competition',
    event: 'Universitas Jambi',
    year: '2025',
    category: 'Business Plan',
    status: 'winner',
    icon: Award,
  },
  {
    title: 'Harapan 2',
    award: 'Harapan 2 — Business Pitching Competition APBISDI',
    event: 'UPN "Veteran" Jawa Timur',
    year: '2025',
    category: 'Business Pitching',
    status: 'winner',
    icon: Star,
  },
  {
    title: 'Harapan 1',
    award: 'Harapan 1 — Sumatera Accounting Business Plan Competition',
    event: 'Universitas Riau',
    year: '2025',
    category: 'Business Plan',
    status: 'winner',
    icon: Award,
  },
  {
    title: 'Partisipasi',
    award: 'Partisipasi — Business Plan',
    event: 'Kompetisi Mahasiswa Nasional Bidang Ilmu Bisnis, Manajemen, dan Keuangan (KBMK)',
    year: '2026',
    category: 'Business Plan',
    status: 'participant',
    icon: Sparkles,
  },
  {
    title: 'Partisipasi',
    award: 'Partisipasi — Liga Talenta Mahasiswa',
    event: 'LLDIKTI Wilayah XVII, Universitas Muhammadiyah Riau',
    year: '2026',
    category: 'Talent',
    status: 'participant',
    icon: Sparkles,
  },
];

export const competitions = [
  {
    title: 'Kompetisi Mahasiswa Nasional Bidang Ilmu Bisnis, Manajemen, dan Keuangan (KBMK)',
    category: 'Business Plan',
    year: '2026',
    status: 'Partisipasi',
  },
  {
    title: 'Sumatera Accounting Business Plan Competition',
    category: 'Business Plan',
    year: '2025',
    status: 'Juara Harapan 1',
  },
  {
    title: 'Liga Talenta Mahasiswa LLDIKTI Wilayah XVII',
    category: 'Kompetisi Mahasiswa',
    year: '2026',
    status: 'Partisipasi',
  },
];

export const education = {
  institution: 'Politeknik Caltex Riau',
  degree: 'Diploma IV (D4) — Bisnis Digital',
  period: 'Agustus 2024 – Oktober 2028 (perkiraan)',
  gpa: '3,73 / 4,00',
  icon: GraduationCap,
};

export const navLinks = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang Saya' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'projects', label: 'Proyek' },
  { id: 'achievements', label: 'Prestasi' },
  { id: 'contact', label: 'Kontak' },
];

export const contact = {
  title: 'Hubungi Saya',
  description:
    'Saya terbuka untuk membangun koneksi profesional, belajar dari pengalaman baru, dan menjajaki peluang yang relevan dengan bidang administrasi sumber daya manusia, rekrutmen, dan bisnis digital.',
  items: [
    { icon: Mail, label: 'Surel', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'Graceya Reyvanita Sipahutar', href: profile.linkedinUrl },
    { icon: MapPin, label: 'Lokasi', value: profile.location, href: undefined },
  ],
};

export const experienceTypeMeta: Record<Experience['type'], { label: string; icon: LucideIcon }> = {
  work: { label: 'Pengalaman Kerja', icon: Briefcase },
  leadership: { label: 'Kepemimpinan', icon: ShieldCheck },
  organization: { label: 'Organisasi', icon: Users },
};

export const miscIcons = {
  Briefcase, FolderKanban, CalendarDays, MapPin, Mail, Linkedin, GraduationCap, PenTool, BarChart3, FileText, TrendingUp, ClipboardList, Camera, Boxes,
};
