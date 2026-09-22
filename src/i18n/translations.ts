export type Language = "en-US" | "pt-BR" | "es";

export const languages: Array<{
  code: Language;
  label: string;
  flag: string;
}> = [
  {
    code: "en-US",
    label: "EN-US",
    flag: "🇺🇸",
  },
  {
    code: "pt-BR",
    label: "PT-BR",
    flag: "🇧🇷",
  },
  {
    code: "es",
    label: "ES",
    flag: "🇪🇸",
  },
];

export const translations = {
  "en-US": {
    navigation: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      expertise: "Expertise",
      services: "Services",
      contact: "Let's talk",
      language: "Language",
    },

    hero: {
      eyebrow: "Software Engineer",
      title: "I build software that",
      highlight: "solves real problems.",
      description:
        "Software Engineer focused on backend engineering, cloud infrastructure, distributed systems, and building products designed to evolve.",
      primaryAction: "View my work",
      secondaryAction: "Let's talk",
      scroll: "Scroll",
      photoAlt: "Leonardo Reis Melo",
    },

    about: {
      eyebrow: "About me",
      title: "Building software with purpose.",
      lead: "I am a Senior Software Engineer focused on building reliable software, scalable architectures, and products that solve real problems.",
      paragraphs: [
        "My experience is primarily focused on backend engineering, cloud infrastructure, databases, distributed systems, and software architecture.",
        "I care about more than making software work. I care about making it understandable, maintainable, observable, and ready to evolve.",
      ],
      stats: {
        senior: "Senior",
        seniorLabel: "Engineering level",
        backend: "Backend",
        backendLabel: "Primary focus",
        cloud: "Cloud",
        cloudLabel: "Infrastructure",
      },
      principles: {
        backend: {
          title: "Backend first",
          description:
            "Building robust APIs, services, integrations, and business logic.",
        },
        engineering: {
          title: "Good engineering",
          description:
            "Code should be clear, predictable, testable, and maintainable.",
        },
        architecture: {
          title: "Architecture",
          description:
            "Designing systems that can evolve without unnecessary complexity.",
        },
        delivery: {
          title: "Real delivery",
          description:
            "Engineering decisions should ultimately create useful products.",
        },
      },
      action: "More about my experience",
    },

    experience: {
      eyebrow: "Experience",
      title: "Engineering through real-world challenges.",
      description:
        "Experience across products, platforms, APIs, cloud environments, and distributed systems.",
      freelance: "Freelance",
      previous: "Previous experience",
      action: "See the projects behind my experience",
      positions: {
        elastic: {
          role: "Senior Software Engineer",
          company: "Elastic Code",
          description:
            "Building software products and platforms from the ground up, with a focus on backend engineering, APIs, cloud infrastructure, and scalable architecture.",
        },
        telesena: {
          role: "Senior Software Engineer",
          company: "Telesena Virtual",
          description:
            "Working on backend services, APIs, databases, and the evolution of existing software systems.",
        },
        edge: {
          role: "Software Engineer",
          company: "EDGE",
          description:
            "Developing backend services and integrations with a focus on APIs, data persistence, cloud infrastructure, and production reliability.",
        },
        carroFacil: {
          role: "Software Engineer",
          company: "Carro Fácil / Porto Bank",
          description:
            "Developing services and integrations for a large-scale digital platform using cloud infrastructure and distributed application patterns.",
        },
      },
    },

    projects: {
      eyebrow: "Selected projects",
      title: "Things I've built.",
      description:
        "A selection of products and platforms built around real-world problems.",
      viewProject: "View project",
      categories: {
        product: "SaaS / Product",
        workflow: "AI / Workflow",
        assistant: "AI / Assistant",
        platform: "SaaS / Platform",
      },
      aprendfy: {
        title: "Aprendfy",
        description:
          "A SaaS platform designed to help teachers organize their workflow, planning, reports, and daily activities.",
      },
      heloisa: {
        title: "Heloísa App",
        description:
          "A digital collaborator platform designed to help professionals organize tasks, information, and workflows with AI.",
      },
    },

    expertise: {
      eyebrow: "Technical expertise",
      title: "Engineering across the stack.",
      description:
        "From backend engineering and distributed systems to cloud infrastructure, databases, architecture, and frontend applications.",
      cards: {
        backend: {
          title: "Backend Engineering",
          description:
            "Building APIs, services, integrations, and business logic for reliable products.",
          technologies: "Node.js, NestJS, TypeScript, REST, GraphQL",
        },
        cloud: {
          title: "Cloud & Infrastructure",
          description:
            "Designing and operating applications across modern cloud environments.",
          technologies: "AWS, GCP, Azure, Docker, CI/CD",
        },
        data: {
          title: "Data & Persistence",
          description:
            "Designing data models and persistence strategies for different workloads.",
          technologies: "PostgreSQL, MySQL, MongoDB, DynamoDB",
        },
        architecture: {
          title: "Software Architecture",
          description:
            "Designing systems that remain understandable and adaptable as they grow.",
          technologies:
            "Clean Architecture, DDD, Microservices, Distributed Systems",
        },
        frontend: {
          title: "Frontend Engineering",
          description:
            "Building modern interfaces and product experiences when the work requires it.",
          technologies: "React, TypeScript, Vite, JavaScript",
        },
        security: {
          title: "Security & Reliability",
          description:
            "Applying engineering practices that make production systems safer and more reliable.",
          technologies: "Authentication, Authorization, Testing, Observability",
        },
      },
    },

    services: {
      eyebrow: "Services",
      title: "Engineering support for real products.",
      description:
        "Technical expertise for companies and products that need to build, improve, or evolve software.",
      cards: {
        backend: {
          title: "Backend Development",
          description:
            "Design and development of APIs, services, integrations, and backend systems.",
          technologies: "Node.js, NestJS, TypeScript, REST, GraphQL",
        },
        architecture: {
          title: "Software Architecture",
          description:
            "Architecture decisions and system design focused on maintainability and evolution.",
          technologies: "System Design, Clean Architecture, DDD, Microservices",
        },
        cloud: {
          title: "Cloud & Infrastructure",
          description:
            "Cloud architecture and infrastructure for reliable software delivery.",
          technologies: "AWS, GCP, Azure, Docker, CI/CD",
        },
        consulting: {
          title: "Technical Consulting",
          description:
            "Technical guidance for difficult engineering decisions and existing systems.",
          technologies:
            "Technical Strategy, Code Review, Technical Debt, System Evolution",
        },
      },
      ctaTitle: "Have a technical challenge to solve?",
      ctaAction: "Start a conversation",
    },

    contact: {
      eyebrow: "Contact",
      title: "Let's build something meaningful.",
      description:
        "Have a project, technical challenge, or opportunity? Get in touch and let’s start a conversation.",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram",
      location: "Location",
      locationValue: "Brazil",
      emailAction: "Send me an email",
      backToTop: "Back to top",
    },

    footer: {
      description:
        "Senior Software Engineer focused on backend engineering, cloud infrastructure, distributed systems, and scalable software products.",
      builtWith: "Built with ♥ and good engineering.",
      navigation: "Navigation",
      contact: "Contact",
      company: "Company",
      workWithMe: "Work with me",
      privacy: "Privacy",
      terms: "Terms",
      brazil: "Brazil",
      cnpj: "CNPJ",
      copyright: "All rights reserved.",
      backToTop: "Back to top",
    },

    accessibility: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      selectLanguage: "Select language",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      whatsapp: "Contact me on WhatsApp",
      backToTop: "Back to top",
    },
  },

  "pt-BR": {
    navigation: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      expertise: "Especialidades",
      services: "Serviços",
      contact: "Vamos conversar",
      language: "Idioma",
    },

    hero: {
      eyebrow: "Engenheiro de Software",
      title: "Eu desenvolvo software que",
      highlight: "resolve problemas reais.",
      description:
        "Engenheiro de Software focado em engenharia backend, infraestrutura em nuvem, sistemas distribuídos e produtos preparados para evoluir.",
      primaryAction: "Ver meus projetos",
      secondaryAction: "Vamos conversar",
      scroll: "Explorar",
      photoAlt: "Leonardo Reis Melo",
    },

    about: {
      eyebrow: "Sobre mim",
      title: "Construindo software com propósito.",
      lead: "Sou Engenheiro de Software Sênior focado em construir software confiável, arquiteturas escaláveis e produtos que resolvem problemas reais.",
      paragraphs: [
        "Minha experiência é principalmente concentrada em engenharia backend, infraestrutura em nuvem, bancos de dados, sistemas distribuídos e arquitetura de software.",
        "Eu me preocupo com mais do que fazer o software funcionar. Busco torná-lo compreensível, sustentável, observável e preparado para evoluir.",
      ],
      stats: {
        senior: "Sênior",
        seniorLabel: "Nível de engenharia",
        backend: "Backend",
        backendLabel: "Foco principal",
        cloud: "Cloud",
        cloudLabel: "Infraestrutura",
      },
      principles: {
        backend: {
          title: "Backend primeiro",
          description:
            "Construção de APIs, serviços, integrações e regras de negócio robustas.",
        },
        engineering: {
          title: "Boa engenharia",
          description:
            "Código deve ser claro, previsível, testável e sustentável.",
        },
        architecture: {
          title: "Arquitetura",
          description:
            "Sistemas projetados para evoluir sem complexidade desnecessária.",
        },
        delivery: {
          title: "Entrega real",
          description:
            "Decisões de engenharia devem gerar produtos úteis de verdade.",
        },
      },
      action: "Ver minha experiência",
    },

    experience: {
      eyebrow: "Experiência",
      title: "Engenharia diante de desafios reais.",
      description:
        "Experiência com produtos, plataformas, APIs, ambientes cloud e sistemas distribuídos.",
      freelance: "Freelancer",
      previous: "Experiência anterior",
      action: "Ver os projetos por trás da minha experiência",
      positions: {
        elastic: {
          role: "Engenheiro de Software Sênior",
          company: "Elastic Code",
          description:
            "Construção de produtos e plataformas de software do zero, com foco em backend, APIs, infraestrutura cloud e arquitetura escalável.",
        },
        telesena: {
          role: "Engenheiro de Software Sênior",
          company: "Telesena Virtual",
          description:
            "Atuação em serviços backend, APIs, bancos de dados e evolução de sistemas de software existentes.",
        },
        edge: {
          role: "Engenheiro de Software",
          company: "EDGE",
          description:
            "Desenvolvimento de serviços backend e integrações com foco em APIs, persistência de dados, infraestrutura cloud e confiabilidade.",
        },
        carroFacil: {
          role: "Engenheiro de Software",
          company: "Carro Fácil / Porto Bank",
          description:
            "Desenvolvimento de serviços e integrações para uma plataforma digital de grande escala utilizando infraestrutura cloud e sistemas distribuídos.",
        },
      },
    },

    projects: {
      eyebrow: "Projetos selecionados",
      title: "Coisas que construí.",
      description:
        "Uma seleção de produtos e plataformas construídos para resolver problemas reais.",
      viewProject: "Ver projeto",
      categories: {
        product: "SaaS / Produto",
        workflow: "IA / Workflow",
        assistant: "IA / Assistente",
        platform: "SaaS / Plataforma",
      },
      aprendfy: {
        title: "Aprendfy",
        description:
          "Uma plataforma SaaS criada para ajudar professores a organizar seu fluxo de trabalho, planejamento, relatórios e atividades diárias.",
      },
      heloisa: {
        title: "Heloísa App",
        description:
          "Uma plataforma de colaboradora digital criada para ajudar profissionais a organizar tarefas, informações e fluxos de trabalho com IA.",
      },
    },

    expertise: {
      eyebrow: "Especialidades técnicas",
      title: "Engenharia em diferentes camadas.",
      description:
        "Da engenharia backend e sistemas distribuídos à infraestrutura cloud, bancos de dados, arquitetura e aplicações frontend.",
      cards: {
        backend: {
          title: "Engenharia Backend",
          description:
            "Construção de APIs, serviços, integrações e regras de negócio para produtos confiáveis.",
          technologies: "Node.js, NestJS, TypeScript, REST, GraphQL",
        },
        cloud: {
          title: "Cloud & Infraestrutura",
          description:
            "Arquitetura e operação de aplicações em ambientes modernos de cloud.",
          technologies: "AWS, GCP, Azure, Docker, CI/CD",
        },
        data: {
          title: "Dados & Persistência",
          description:
            "Modelagem de dados e estratégias de persistência para diferentes necessidades.",
          technologies: "PostgreSQL, MySQL, MongoDB, DynamoDB",
        },
        architecture: {
          title: "Arquitetura de Software",
          description:
            "Sistemas projetados para continuar compreensíveis e adaptáveis durante seu crescimento.",
          technologies:
            "Clean Architecture, DDD, Microservices, Distributed Systems",
        },
        frontend: {
          title: "Engenharia Frontend",
          description:
            "Construção de interfaces modernas e experiências de produto quando necessário.",
          technologies: "React, TypeScript, Vite, JavaScript",
        },
        security: {
          title: "Segurança & Confiabilidade",
          description:
            "Práticas de engenharia que tornam sistemas de produção mais seguros e confiáveis.",
          technologies: "Authentication, Authorization, Testing, Observability",
        },
      },
    },

    services: {
      eyebrow: "Serviços",
      title: "Engenharia para produtos reais.",
      description:
        "Experiência técnica para empresas e produtos que precisam construir, melhorar ou evoluir software.",
      cards: {
        backend: {
          title: "Desenvolvimento Backend",
          description:
            "Projeto e desenvolvimento de APIs, serviços, integrações e sistemas backend.",
          technologies: "Node.js, NestJS, TypeScript, REST, GraphQL",
        },
        architecture: {
          title: "Arquitetura de Software",
          description:
            "Decisões arquiteturais e desenho de sistemas focados em manutenção e evolução.",
          technologies: "System Design, Clean Architecture, DDD, Microservices",
        },
        cloud: {
          title: "Cloud & Infraestrutura",
          description:
            "Arquitetura cloud e infraestrutura para entrega confiável de software.",
          technologies: "AWS, GCP, Azure, Docker, CI/CD",
        },
        consulting: {
          title: "Consultoria Técnica",
          description:
            "Orientação técnica para decisões difíceis de engenharia e sistemas existentes.",
          technologies:
            "Technical Strategy, Code Review, Technical Debt, System Evolution",
        },
      },
      ctaTitle: "Tem um desafio técnico para resolver?",
      ctaAction: "Iniciar uma conversa",
    },

    contact: {
      eyebrow: "Contato",
      title: "Vamos construir algo significativo.",
      description:
        "Tem um projeto, desafio técnico ou oportunidade? Entre em contato e vamos começar uma conversa.",
      email: "E-mail",
      phone: "Telefone",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram",
      location: "Localização",
      locationValue: "Brasil",
      emailAction: "Enviar um e-mail",
      backToTop: "Voltar ao topo",
    },

    footer: {
      description:
        "Engenheiro de Software Sênior focado em engenharia backend, infraestrutura cloud, sistemas distribuídos e produtos escaláveis.",
      builtWith: "Construído com ♥ e boa engenharia.",
      navigation: "Navegação",
      contact: "Contato",
      company: "Empresa",
      workWithMe: "Trabalhe comigo",
      privacy: "Privacidade",
      terms: "Termos",
      brazil: "Brasil",
      cnpj: "CNPJ",
      copyright: "Todos os direitos reservados.",
      backToTop: "Voltar ao topo",
    },

    accessibility: {
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      selectLanguage: "Selecionar idioma",
      switchToLight: "Mudar para modo claro",
      switchToDark: "Mudar para modo escuro",
      whatsapp: "Entrar em contato pelo WhatsApp",
      backToTop: "Voltar ao topo",
    },
  },

  es: {
    navigation: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      expertise: "Especialidades",
      services: "Servicios",
      contact: "Hablemos",
      language: "Idioma",
    },

    hero: {
      eyebrow: "Ingeniero de Software",
      title: "Construyo software que",
      highlight: "resuelve problemas reales.",
      description:
        "Ingeniero de Software enfocado en ingeniería backend, infraestructura cloud, sistemas distribuidos y productos diseñados para evolucionar.",
      primaryAction: "Ver mis proyectos",
      secondaryAction: "Hablemos",
      scroll: "Explorar",
      photoAlt: "Leonardo Reis Melo",
    },

    about: {
      eyebrow: "Sobre mí",
      title: "Construyendo software con propósito.",
      lead: "Soy Ingeniero de Software Senior enfocado en construir software confiable, arquitecturas escalables y productos que resuelven problemas reales.",
      paragraphs: [
        "Mi experiencia se concentra principalmente en ingeniería backend, infraestructura cloud, bases de datos, sistemas distribuidos y arquitectura de software.",
        "Me importa más que simplemente hacer que el software funcione. Busco hacerlo comprensible, mantenible, observable y preparado para evolucionar.",
      ],
      stats: {
        senior: "Senior",
        seniorLabel: "Nivel de ingeniería",
        backend: "Backend",
        backendLabel: "Enfoque principal",
        cloud: "Cloud",
        cloudLabel: "Infraestructura",
      },
      principles: {
        backend: {
          title: "Backend primero",
          description:
            "Construcción de APIs, servicios, integraciones y lógica de negocio robusta.",
        },
        engineering: {
          title: "Buena ingeniería",
          description:
            "El código debe ser claro, predecible, testeable y mantenible.",
        },
        architecture: {
          title: "Arquitectura",
          description:
            "Diseño de sistemas que puedan evolucionar sin complejidad innecesaria.",
        },
        delivery: {
          title: "Entrega real",
          description:
            "Las decisiones de ingeniería deben generar productos útiles.",
        },
      },
      action: "Ver mi experiencia",
    },

    experience: {
      eyebrow: "Experiencia",
      title: "Ingeniería frente a desafíos reales.",
      description:
        "Experiencia con productos, plataformas, APIs, entornos cloud y sistemas distribuidos.",
      freelance: "Freelance",
      previous: "Experiencia anterior",
      action: "Ver los proyectos detrás de mi experiencia",
      positions: {
        elastic: {
          role: "Ingeniero de Software Senior",
          company: "Elastic Code",
          description:
            "Construcción de productos y plataformas de software desde cero, con enfoque en backend, APIs, infraestructura cloud y arquitectura escalable.",
        },
        telesena: {
          role: "Ingeniero de Software Senior",
          company: "Telesena Virtual",
          description:
            "Trabajo con servicios backend, APIs, bases de datos y evolución de sistemas de software existentes.",
        },
        edge: {
          role: "Ingeniero de Software",
          company: "EDGE",
          description:
            "Desarrollo de servicios backend e integraciones con enfoque en APIs, persistencia de datos, infraestructura cloud y confiabilidad.",
        },
        carroFacil: {
          role: "Ingeniero de Software",
          company: "Carro Fácil / Porto Bank",
          description:
            "Desarrollo de servicios e integraciones para una plataforma digital de gran escala utilizando infraestructura cloud y sistemas distribuidos.",
        },
      },
    },

    projects: {
      eyebrow: "Proyectos seleccionados",
      title: "Cosas que he construido.",
      description:
        "Una selección de productos y plataformas construidos para resolver problemas reales.",
      viewProject: "Ver proyecto",
      categories: {
        product: "SaaS / Producto",
        workflow: "IA / Workflow",
        assistant: "IA / Asistente",
        platform: "SaaS / Plataforma",
      },
      aprendfy: {
        title: "Aprendfy",
        description:
          "Una plataforma SaaS diseñada para ayudar a profesores a organizar su flujo de trabajo, planificación, informes y actividades diarias.",
      },
      heloisa: {
        title: "Heloísa App",
        description:
          "Una plataforma de colaboradora digital diseñada para ayudar a profesionales a organizar tareas, información y flujos de trabajo con IA.",
      },
    },

    expertise: {
      eyebrow: "Especialidades técnicas",
      title: "Ingeniería en diferentes capas.",
      description:
        "Desde ingeniería backend y sistemas distribuidos hasta infraestructura cloud, bases de datos, arquitectura y aplicaciones frontend.",
      cards: {
        backend: {
          title: "Ingeniería Backend",
          description:
            "Construcción de APIs, servicios, integraciones y lógica de negocio para productos confiables.",
          technologies: "Node.js, NestJS, TypeScript, REST, GraphQL",
        },
        cloud: {
          title: "Cloud e Infraestructura",
          description:
            "Diseño y operación de aplicaciones en entornos cloud modernos.",
          technologies: "AWS, GCP, Azure, Docker, CI/CD",
        },
        data: {
          title: "Datos y Persistencia",
          description:
            "Diseño de modelos de datos y estrategias de persistencia para diferentes necesidades.",
          technologies: "PostgreSQL, MySQL, MongoDB, DynamoDB",
        },
        architecture: {
          title: "Arquitectura de Software",
          description:
            "Diseño de sistemas que continúan siendo comprensibles y adaptables a medida que crecen.",
          technologies:
            "Clean Architecture, DDD, Microservices, Distributed Systems",
        },
        frontend: {
          title: "Ingeniería Frontend",
          description:
            "Construcción de interfaces modernas y experiencias de producto cuando es necesario.",
          technologies: "React, TypeScript, Vite, JavaScript",
        },
        security: {
          title: "Seguridad y Confiabilidad",
          description:
            "Prácticas de ingeniería que hacen los sistemas de producción más seguros y confiables.",
          technologies: "Authentication, Authorization, Testing, Observability",
        },
      },
    },

    services: {
      eyebrow: "Servicios",
      title: "Ingeniería para productos reales.",
      description:
        "Experiencia técnica para empresas y productos que necesitan construir, mejorar o evolucionar software.",
      cards: {
        backend: {
          title: "Desarrollo Backend",
          description:
            "Diseño y desarrollo de APIs, servicios, integraciones y sistemas backend.",
          technologies: "Node.js, NestJS, TypeScript, REST, GraphQL",
        },
        architecture: {
          title: "Arquitectura de Software",
          description:
            "Decisiones arquitectónicas y diseño de sistemas enfocados en mantenimiento y evolución.",
          technologies: "System Design, Clean Architecture, DDD, Microservices",
        },
        cloud: {
          title: "Cloud e Infraestructura",
          description:
            "Arquitectura cloud e infraestructura para una entrega confiable de software.",
          technologies: "AWS, GCP, Azure, Docker, CI/CD",
        },
        consulting: {
          title: "Consultoría Técnica",
          description:
            "Orientación técnica para decisiones difíciles de ingeniería y sistemas existentes.",
          technologies:
            "Technical Strategy, Code Review, Technical Debt, System Evolution",
        },
      },
      ctaTitle: "¿Tienes un desafío técnico que resolver?",
      ctaAction: "Iniciar una conversación",
    },

    contact: {
      eyebrow: "Contacto",
      title: "Construyamos algo significativo.",
      description:
        "¿Tienes un proyecto, desafío técnico u oportunidad? Ponte en contacto y comencemos una conversación.",
      email: "Correo electrónico",
      phone: "Teléfono",
      linkedin: "LinkedIn",
      github: "GitHub",
      instagram: "Instagram",
      location: "Ubicación",
      locationValue: "Brasil",
      emailAction: "Enviarme un correo",
      backToTop: "Volver arriba",
    },

    footer: {
      description:
        "Engenheiro de Software Sênior focado em engenharia backend, infraestrutura cloud, sistemas distribuídos e produtos escaláveis.",
      builtWith: "Construído com ♥ e boa engenharia.",
      navigation: "Navegação",
      contact: "Contato",
      company: "Empresa",
      workWithMe: "Trabalhe comigo",
      privacy: "Privacidade",
      terms: "Termos",
      brazil: "Brasil",
      cnpj: "CNPJ",
      copyright: "Todos os direitos reservados.",
      backToTop: "Voltar ao topo",
    },

    accessibility: {
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      selectLanguage: "Seleccionar idioma",
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro",
      whatsapp: "Contactarme por WhatsApp",
      backToTop: "Volver arriba",
    },
  },
} as const;
