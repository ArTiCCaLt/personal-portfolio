export const experience = [
  {
    title: 'Indicadores que reflejan el trabajo pendiente',
    area: 'ERP educativo · Workflows administrativos',
    summary: 'Contadores, estados y actualizaciones en tiempo real alineados con los permisos efectivos de cada usuario.',
    problem: 'El significado de una tarea pendiente cambia según el estado del proceso y la persona que debe actuar.',
    work: 'Implementé y corregí indicadores integrando API y frontend, lógica por estados, destinatarios según permisos efectivos y actualizaciones en tiempo real. Las pruebas automatizadas ayudaron a validar los escenarios del flujo.',
    stack: ['.NET 8', 'React', 'TypeScript', 'SQL Server', 'SignalR'],
  },
  {
    title: 'Conectar un ERP con Moodle',
    area: 'Integración · Automatización',
    summary: 'Creación de usuarios, enrolamiento en cursos y asignación de roles desde procesos del ERP.',
    problem: 'La información administrativa y el acceso al aula virtual debían mantenerse conectados.',
    work: 'Trabajé en la integración con Moodle Web Services y procesos con Hangfire para automatizar la creación de usuarios, el enrolamiento y la asignación de roles.',
    stack: ['.NET', 'Moodle Web Services', 'Hangfire'],
  },
  {
    title: 'Importar asistencias con control',
    area: 'Importación · Validación de datos',
    summary: 'Un flujo con vista previa, validaciones, errores recuperables y confirmación protegida.',
    problem: 'Un archivo incorrecto podía introducir cambios silenciosos o difíciles de revertir.',
    work: 'Trabajé en un flujo de importación CSV con vista previa, validación, confirmación protegida y reversión. El objetivo fue permitir revisar y controlar los cambios antes de aplicarlos.',
    stack: ['React', '.NET', 'CSV', 'Validación'],
  },
];

export const technologies = [
  { title: 'Backend', items: ['C#', '.NET', 'ASP.NET Core', 'PHP', 'Laravel'] },
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Nx'] },
  { title: 'Bases de datos', items: ['SQL Server', 'MySQL', 'Oracle', 'Firestore'] },
  { title: 'Cloud e infraestructura', items: ['Cloudflare', 'Firebase', 'Linux', 'Docker', 'GitHub'] },
  { title: 'Integraciones', items: ['APIs REST', 'Moodle', 'Servicios externos'] },
  { title: 'Ingeniería', items: ['Git', 'CI/CD', 'Testing', 'Debugging', 'Troubleshooting'] },
];
