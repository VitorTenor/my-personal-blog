export const PROFILE_LINKS = {
  email: 'mailto:vitortenorio.dev@gmail.com',
  github: 'https://github.com/VitorTenor',
  linkedin: 'https://www.linkedin.com/in/vitortenor/',
  makai: 'https://www.makai.com.br/',
  resume: '/Vitor_Tenorio_Resume.pdf',
  site: 'https://www.vitortenorio.com/',
} as const;

export interface Period {
  start: string;
  end: string | null;
}

export interface RoleDefinition {
  id: string;
  period: Period;
}

export interface ExperienceDefinition {
  id: string;
  company: string;
  roles: RoleDefinition[];
}

export const PROFESSIONAL_EXPERIENCE: ExperienceDefinition[] = [
  {
    id: 'cit',
    company: 'CI&T',
    roles: [
      { id: 'senior', period: { start: '2026-01', end: null } },
      {
        id: 'software-engineer',
        period: { start: '2024-08', end: '2026-01' },
      },
    ],
  },
  {
    id: 'boavista',
    company: 'Boavista Tecnologia',
    roles: [
      { id: 'junior', period: { start: '2023-10', end: '2024-08' } },
      { id: 'trainee', period: { start: '2022-12', end: '2023-10' } },
    ],
  },
  {
    id: 'qualyvinil',
    company: 'Qualyvinil Tintas',
    roles: [
      { id: 'analyst', period: { start: '2022-10', end: '2022-12' } },
      { id: 'junior', period: { start: '2022-04', end: '2022-10' } },
      { id: 'intern', period: { start: '2021-10', end: '2022-04' } },
    ],
  },
];

export const EDUCATION = [
  { id: 'uniamerica', institution: 'Uniamérica', start: '2023', end: '2024' },
  {
    id: 'uninove',
    institution: 'Universidade Nove de Julho',
    start: '2021',
    end: '2023',
  },
  { id: 'fieb', institution: 'FIEB', start: '2018', end: '2020' },
] as const;

export const PROJECTS = [
  { id: 'makai', url: PROFILE_LINKS.makai, tags: [] },
  {
    id: 'lead-stream-service',
    url: `${PROFILE_LINKS.github}/lead-stream-service`,
    tags: ['Go', 'Huma', 'MongoDB'],
  },
  {
    id: 'notificator',
    url: `${PROFILE_LINKS.github}/notificator`,
    tags: ['Spring Boot', 'RabbitMQ'],
  },
  {
    id: 'clean-architecture',
    url: `${PROFILE_LINKS.github}/springboot-clean-architecture-example`,
    tags: ['Spring Boot', 'Java 21', 'PostgreSQL'],
  },
  {
    id: 'music-streamer',
    url: `${PROFILE_LINKS.github}/music-streamer-api`,
    tags: ['Spring Boot', 'JPA', 'PostgreSQL'],
  },
  {
    id: 'portfolio',
    url: `${PROFILE_LINKS.github}/my-personal-blog`,
    tags: ['React', 'TypeScript'],
  },
  { id: 'contact', url: PROFILE_LINKS.email, tags: [] },
] as const;

const MONTHS = {
  en: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  pt: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
} as const;

function formatMonth(value: string, language: string): string {
  const [year, month] = value.split('-');
  const locale = language.startsWith('pt') ? 'pt' : 'en';
  return `${MONTHS[locale][Number(month) - 1]}/${year}`;
}

export function formatPeriod(period: Period, language: string): string {
  const present = language.startsWith('pt') ? 'Presente' : 'Present';
  const end = period.end ? formatMonth(period.end, language) : present;
  return `${formatMonth(period.start, language)} - ${end}`;
}
