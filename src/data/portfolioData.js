// src/data/portfolioData.js

const portfolioData = {
  // ====== NAVEGACIÓN ======
  navegacion: [
    { nombre: { es: "Sobre mí", en: "About me" }, href: "#about" },
    { nombre: { es: "Trayectoria", en: "Career" }, href: "#experiencia" },
    { nombre: { es: "Proyectos", en: "Projects" }, href: "#projects" },
    { nombre: { es: "Contacto", en: "Contact" }, href: "#contact" },
  ],

  // ====== DATOS PERSONALES ======
  personal: {
    nombre: "Nahuel Batista",
    titulo: {
      es: "Desarrollador Web Full Stack",
      en: "Full Stack Web Developer",
    },

    email: "nbatistamador@gmail.com",
    ubicacion: {
      es: "Canarias, España",
      en: "Canary Islands, Spain",
    },
    nick: "NbatistaDev",
  },

  // ====== REDES SOCIALES ======
  social: {
    github: "https://github.com/nbatista04",
    linkedin: "https://linkedin.com/in/nahuel-batista-62b0052b5",
  },

  // ====== HERO ======
  hero: {
    saludo: { es: "¡Hola! 👋 Soy", en: "Hello! 👋 I'm" },
    botonProyectos: { es: "Ver Proyectos", en: "View Projects" },
    botonContacto: { es: "Contactar", en: "Contact Me" },
    cvLink: "/cv_nahuel_batista.pdf",
    botonCV: { es: "Descargar CV", en: "Download CV" },
  },

  // ====== ABOUT ======
  about: {
    titulo: { es: "Sobre Mí", en: "About Me" },
    descripcion: {
      es: "Desarrollador web con formación en Desarrollo de Aplicaciones Web y especialización en Big Data e Inteligencia Artificial. Actualmente trabajo como consultor tecnológico en PwC España.\n\nMe apasiona crear interfaces limpias y funcionales. Este portfolio está construido con React y Tailwind CSS, y refleja mi forma de trabajar: código limpio, diseño cuidado y ganas de seguir aprendiendo.",
      en: "Web developer with a background in Web Application Development and a specialization in Big Data and Artificial Intelligence. Currently working as a technology consultant at PwC Spain.\n\nI'm passionate about creating clean and functional interfaces. This portfolio is built with React and Tailwind CSS, and reflects my way of working: clean code, thoughtful design and a drive to keep learning.",
    },
    avatar: "/mi-foto.png"

  },

  // ====== SKILLS ======
  skills: [
    { nombre: "Javascript", categoria: { es: "Lenguajes", en: "Languages" },},
    { nombre: "PHP", categoria: { es: "Lenguajes", en: "Languages" },},
    { nombre: "Java", categoria: { es: "Lenguajes", en: "Languages" },},
    { nombre: "Python", categoria: { es: "Lenguajes", en: "Languages" },},

    { nombre: "React", categoria: { es: "Frontend", en: "Frontend" },},
    { nombre: "jQuery", categoria: { es: "Frontend", en: "Frontend" },},
    { nombre: "HTML", categoria: { es: "Frontend", en: "Frontend" },},
    { nombre: "CSS", categoria: { es: "Frontend", en: "Frontend" },},
    { nombre: "Bootstrap", categoria: { es: "Frontend", en: "Frontend" },},
    { nombre: "Tailwind CSS", categoria: { es: "Frontend", en: "Frontend" },},

    { nombre: "Node.js", categoria: { es: "Backend", en: "Backend" },},
    { nombre: "Espress.js", categoria: { es: "Backend", en: "Backend" },},
    { nombre: "REST API", categoria: { es: "Backend", en: "Backend" },},

    { nombre: "MongoDB", categoria: { es: "Bases de datos", en: "Databases" },},
    { nombre: "MySQL", categoria: { es: "Bases de datos", en: "Databases" },},
    { nombre: "MariaDB", categoria: { es: "Bases de datos", en: "Databases" },},
    { nombre: "SQL", categoria: { es: "Bases de datos", en: "Databases" },},
    { nombre: "Oracle", categoria: { es: "Bases de datos", en: "Databases" },},

    { nombre: "Git", categoria: { es: "Herramientas", en: "Tools" },},
    { nombre: "Github", categoria: { es: "Herramientas", en: "Tools" },},
    { nombre: "Figma", categoria: { es: "Herramientas", en: "Tools" },},
    { nombre: "Drupal", categoria: { es: "Herramientas", en: "Tools" },},

    { nombre: "Oracle Cloud", categoria: { es: "Cloud y despliegue", en: "Cloud and deployment" },},
    { nombre: "Ubuntu Server", categoria: { es: "Cloud y despliegue", en: "Cloud and deployment" },},
    { nombre: "Apache", categoria: { es: "Cloud y despliegue", en: "Cloud and deployment" },},
    { nombre: "NGINX", categoria: { es: "Cloud y despliegue", en: "Cloud and deployment" },},
    { nombre: "SSL", categoria: { es: "Cloud y despliegue", en: "Cloud and deployment" },},

    { nombre: "Hadoop", categoria: { es: "Big Data", en: "Big Data" },},
    { nombre: "Flume", categoria: { es: "Big Data", en: "Big Data" },},
    { nombre: "Hive", categoria: { es: "Big Data", en: "Big Data" },},
    { nombre: "Sqoop", categoria: { es: "Big Data", en: "Big Data" },},

  ],

  // ====== PROYECTOS ======
  projects: [
    {
      id: 1,
      titulo: { es: "Portfolio Personal", en: "Personal Portfolio" },
      descripcion: {
        es: "Portfolio profesional con soporte multiidioma y diseño responsive.",
        en: "Personal portfolio with multilingual support and responsive design.",
      },
      imagen:
        "/portfolio-img.png",
      tecnologias: ["Vite", "React", "Tailwind", "EmailJS"],
      github: "https://github.com/portfolio",
      demo: "https://nbatistadev.eu",
    },
    {
      id: 2,
      titulo: { es: "Gestor de Gastos Personal", en: "Personal Expense Manager" },
      descripcion: {
        es: "Gestor de finanzas personales con presupuestos mensuales, seguimiento de gastos y estadísticas visuales.",
        en: "Personal finance manager with monthly budgets, expense tracking and visual statistics.",
      },
      imagen:
        "/gestor-gastos-img.png",
      tecnologias: ["Node.js", "Vite", "React", "Tailwind", "Express", "MongoDB"],
      github: "https://github.com/gestor-gastos",
      demo: "https://gestor-gastos.nbatistadev.eu",
    },
     {
      id: 3,
      titulo: { es: "Mealweek - Planificador de recetas semanal", en: "Mealweek - Weekly Meal Planner" },
      descripcion: {
        es: "Aplicación fullstack para planificar menús semanales. Permite explorar recetas por categoría, añadirlas a un planificador semanal, generar la lista de la compra automáticamente y controlar el coste por plato.",
        en: "Full-stack app for planning weekly menus. Browse recipes by category, add them to a weekly planner, auto-generate a shopping list, and track the cost per meal.",
      },
      imagen:
        "/mealweek-img.png",
      tecnologias: ["Node.js", "Vite", "React", "Tailwind", "Express", "MongoDB"],
      github: "https://github.com/mealweek",
      demo: "https://mealweek.nbatistadev.eu",
    },
  ],

  // ====== EXPERIENCIA ======
  experiencia: [
    {
      id: 1,
      puesto: "Consulting Specialist",
      empresa: "PricewaterhouseCoopers S.L.",
      periodo: { es: "Diciembre 2025 - Presente", en: "December 2025 - Present" },
      descripcion: {
        es: `Elaboración y maquetación de documentación profesional, propuestas, informes y planes de actuación en entorno de consultoría.
        Desarrollo de tareas de análisis y benchmarking para apoyar la preparación de entregables y documentación de proyectos.
        Organización y estructuración de contenidos para su publicación en entornos digitales.
        Participación en la definición de un MVP informativo orientado a la organización de servicios, trámites y contenidos sectoriales.
        Publicación, actualización y mantenimiento de contenidos web mediante Drupal.`,
        en: `Drafting and formatting professional documentation, proposals, reports and action plans in a consulting environment.
        Carrying out analysis and benchmarking tasks to support the preparation of deliverables and project documentation.
        Organising and structuring content for publication in digital environments.
        Participating in the definition of an informational MVP aimed at organising services, procedures and sector-specific content.
        Publishing, updating and maintaining web content using Drupal.`,
      },
    },
    {
      id: 3,
      puesto: {
        es: "Ingeniero de Software (Prácticas)",
        en: "Product Software Engineer (Internship)",
      },
      empresa: "Domino Amjet Ibérica S.A.U.",
      periodo: { es: "Abril-Junio 2024", en: "April-June 2024" },
      descripcion: {
        es: `Participación en el desarrollo y pruebas de software interno utilizado en entorno industrial.
        Colaboración en la validación funcional y detección de incidencias durante el ciclo de pruebas.
        Apoyo en tareas de mantenimiento y mejora de soluciones software existentes.
        Trabajo en un entorno técnico orientado a la calidad y fiabilidad del software.`,
        en: `Participating in the development and testing of internal software used in an industrial environment.
        Collaborating in functional validation and incident detection during the testing cycle.
        Supporting maintenance and improvement tasks for existing software solutions.
        Working in a technical environment focused on software quality and reliability.`,
      },
    },
    {
      id: 4,
      puesto: {
        es: "Técnico Informático (Prácticas)",
        en: "IT Technician (Internship)",
      },
      empresa: { es: "Ayuntamiento de Pájara", en: "Pájara City Council" },
      periodo: { es: "Abril-Junio 2022 | Julio-Agosto 2025", en: "April-June 2022 | July-August 2025" },
      descripcion: {
        es: `Soporte técnico a usuarios y resolución de incidencias relacionadas con hardware, software y configuración de equipos.
        Mantenimiento, instalación y actualización de equipos y sistemas informáticos.
        Apoyo en tareas de revisión, puesta a punto y asistencia técnica general del entorno IT.
        Colaboración en la continuidad operativa de los recursos informáticos de la organización.`,
        en: `Providing technical support to users and resolving incidents related to hardware, software and equipment configuration.
        Maintaining, installing and updating computer equipment and systems.
        Supporting review, troubleshooting and general technical assistance tasks within the IT environment.
        Collaborating in the operational continuity of the organisation's computing resources.`,
      },
    },
  ],

  // ====== EDUCACIÓN ======
  educacion: [
    {
      id: 1,
      titulo: {
        es: "Curso de Especialización en Big Data e Inteligencia Artificial",
        en: "Postgraduate Specialization Course in Big Data and Artificial Intelligence",
      },
      institucion: "CIFP Majada Marcial",
      periodo: "2024 - 2025",
      descripcion: {
        es: "Gestión y análisis de grandes volúmenes de datos, desarrollo de modelos de aprendizaje automático y soluciones de inteligencia artificial.",
        en: "Management and analysis of large data volumes, development of machine learning models and artificial intelligence solutions.",
      },
    },
    {
      id: 2,
      titulo: {
        es: "Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web",
        en: "Higher Vocational Diploma in Web Application Development",
      },
      institucion: "IES Virgen de la Paz",
      periodo: "2022 - 2024",
      descripcion: {
        es: "Desarrollo, implantación y mantenimiento de aplicaciones web utilizando tecnologías frontend y backend.",
        en: "Development, deployment and maintenance of web applications using frontend and backend technologies.",
      },
    },
    {
      id: 3,
      titulo: {
        es: "Ciclo Formativo de Grado Medio en Sistemas Microinformáticos y Redes",
        en: "Intermediate Vocational Diploma in Microcomputer Systems and Networks",
      },
      institucion: "CIFP Majada Marcial",
      periodo: "2020 - 2022",
      descripcion: {
        es: "Configuración, mantenimiento y reparación de sistemas informáticos, redes locales y servicios en red.",
        en: "Configuration, maintenance and repair of computer systems, local networks and network services.",
      },
    },
  ],

  // ====== TÍTULOS DE SECCIONES ======
  secciones: {
    trayectoria: { es: "Trayectoria", en: "Career" },
    proyectos: { es: "Proyectos", en: "Projects" },
    contacto: {
      titulo: { es: "Contacto", en: "Contact" },
      subtitulo: {
        es: "¿Tienes un proyecto en mente? ¡Hablemos!",
        en: "Have a project in mind? Let's talk!",
      },
    },
  },

  // ====== TABS DE TRAYECTORIA ======
  tabs: {
    experiencia: { es: "Experiencia", en: "Experience" },
    educacion: { es: "Educación", en: "Education" },
  },

  // ====== TEXTOS DEL FORMULARIO DE CONTACTO ======
  contacto: {
    infoTitulo: {
      es: "Información de contacto",
      en: "Contact information",
    },
    labels: {
      email: "Email",
      ubicacion: { es: "Ubicación", en: "Location" },
      redes: { es: "Redes", en: "Social" },
      nombre: { es: "Nombre", en: "Name" },
      mensaje: { es: "Mensaje", en: "Message" },
    },
    placeholders: {
      nombre: { es: "Tu nombre", en: "Your name" },
      email: { es: "tu@email.com", en: "your@email.com" },
      mensaje: {
        es: "Cuéntame sobre tu proyecto...",
        en: "Tell me about your project...",
      },
    },
    botonEnviar: { es: "Enviar Mensaje", en: "Send Message" },
    botonEnviando: { es: "Enviando...", en: "Sending..." },
    mensajeExito: {
      es: "✅ ¡Mensaje enviado! Te responderé pronto.",
      en: "✅ Message sent! I'll get back to you soon.",
    },
  },

  mensajeError: {
    es: "Error al enviar. Prueba a escribirme directamente al email.",
    en: "Failed to send. Try emailing me directly.",
  },

  // ====== FOOTER ======
  footer: {
    hechoCon: { es: "Hecho con", en: "Made with" },
  },

  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
};

export default portfolioData;
