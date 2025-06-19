export const mockProjects = [
  {
    id: 'proj-1',
    name: 'Rediseño de Sitio Web Principal',
    description: 'Proyecto para actualizar la interfaz de usuario y la experiencia del sitio web principal de la empresa.',
    createdAt: '2023-09-01',
    tasksCount: 5,
    progress: 60,
    tasks: [
      {
        id: 'task-1',
        title: 'Diseño de Interfaz de Usuario (UI)',
        description: 'Crear wireframes y mockups para las nuevas páginas.',
        dueDate: '2023-11-15',
        status: 'en progreso',
        assignee: 'Ana López',
      },
      {
        id: 'task-2',
        title: 'Desarrollo Frontend',
        description: 'Implementar los diseños de UI en React con TailwindCSS.',
        dueDate: '2023-12-01',
        status: 'por hacer',
        assignee: 'Carlos Ruiz',
      },
      {
        id: 'task-3',
        title: 'Integración de API',
        description: 'Conectar el frontend con los servicios de backend existentes.',
        dueDate: '2023-11-20',
        status: 'completada',
        assignee: 'Pedro Gómez',
      },
      {
        id: 'task-4',
        title: 'Pruebas de Usabilidad',
        description: 'Realizar pruebas con usuarios para identificar mejoras.',
        dueDate: '2023-12-10',
        status: 'por hacer',
        assignee: 'Laura Díaz',
      },
      {
        id: 'task-5',
        title: 'Despliegue a Producción',
        description: 'Preparar y lanzar el nuevo sitio web.',
        dueDate: '2023-12-15',
        status: 'por hacer',
        assignee: 'Carlos Ruiz',
      },
    ],
    comments: [
      { text: '¡Excelente progreso en este proyecto!', author: 'Juan Pérez', date: '2023-10-26' },
      { text: 'Necesitamos revisar la tarea de diseño UX.', author: 'María García', date: '2023-10-25' },
    ],
  },
  {
    id: 'proj-2',
    name: 'Campaña de Marketing Digital Q4',
    description: 'Planificación y ejecución de la campaña de marketing para el cuarto trimestre del año.',
    createdAt: '2023-10-01',
    tasksCount: 3,
    progress: 30,
    tasks: [
      {
        id: 'task-6',
        title: 'Creación de Contenido',
        description: 'Desarrollar textos y gráficos para anuncios y redes sociales.',
        dueDate: '2023-11-05',
        status: 'en progreso',
        assignee: 'Sofía Vargas',
      },
      {
        id: 'task-7',
        title: 'Configuración de Anuncios',
        description: 'Configurar campañas en Google Ads y Facebook Ads.',
        dueDate: '2023-11-10',
        status: 'por hacer',
        assignee: 'Roberto Castro',
      },
      {
        id: 'task-8',
        title: 'Análisis de Resultados',
        description: 'Monitorear y analizar el rendimiento de la campaña.',
        dueDate: '2023-12-20',
        status: 'por hacer',
        assignee: 'Sofía Vargas',
      },
    ],
    comments: [], // Añadido array de comentarios vacío
  },
  {
    id: 'proj-3',
    name: 'Optimización de Base de Datos',
    description: 'Mejorar el rendimiento y la estructura de la base de datos principal.',
    createdAt: '2023-09-15',
    tasksCount: 2,
    progress: 80,
    tasks: [
      {
        id: 'task-9',
        title: 'Auditoría de Esquema',
        description: 'Revisar y optimizar el esquema de la base de datos.',
        dueDate: '2023-10-30',
        status: 'completada',
        assignee: 'Elena Torres',
      },
      {
        id: 'task-10',
        title: 'Indexación de Tablas',
        description: 'Crear y optimizar índices para consultas rápidas.',
        dueDate: '2023-11-05',
        status: 'en progreso',
        assignee: 'Elena Torres',
      },
    ],
    comments: [], // Añadido array de comentarios vacío
  },
];


// DONE