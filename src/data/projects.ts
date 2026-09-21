export interface Project {
  slug: 'carenest' | 'vertice11';
  number: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  status: string;
  stack: string[];
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'carenest', number: '01', name: 'CareNest', category: 'Salud · Proyecto personal',
    subtitle: 'Gestión médica familiar segura y colaborativa.',
    description: 'Una Progressive Web App para centralizar información médica familiar y compartirla mediante roles, permisos, fichas de emergencia y auditoría.',
    status: 'MVP funcional · v0.1.0 · En línea',
    stack: ['React', 'TypeScript', 'Firebase', 'PWA', 'Cloudflare'],
    liveUrl: 'https://carenest-abj.pages.dev',
  },
  {
    slug: 'vertice11', number: '02', name: 'Vértice11', category: 'Deporte · Proyecto personal',
    subtitle: 'Información estructurada. Análisis futbolístico.',
    description: 'Plataforma en desarrollo para analizar partidos de fútbol con entrada asistida de información, persistencia de evaluaciones y un motor de análisis para apoyar la toma de decisiones.',
    status: 'En desarrollo activo',
    stack: ['React', 'TypeScript', 'Cloudflare Workers', 'D1'],
  },
];
