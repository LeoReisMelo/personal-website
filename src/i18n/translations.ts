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
      title: "Building software with",
      highlight: "purpose.",
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
      title: "Engineering through",
      highlight: "real-world challenges.",
      description:
        "Experience across products, platforms, APIs, cloud environments, data, and distributed systems.",
      freelance: "Freelance",
      previous: "Previous experience",
      action: "See the projects behind my experience",
      resume: "Download resume",

      positions: {
        presenteEscola: {
          role: "IT Technician",
          company: "Presente Escola",
          period: "2018 - 2019",
          description:
            "Responsible for managing corporate platforms, optimizing technology processes, managing CRM systems, and supporting IT operations.",
        },

        goWifi: {
          role: "Full Stack Developer Intern",
          company: "Go Wi-fi Corp",
          period: "2019",
          description:
            "Developed and evolved APIs and web applications, including new features, system integrations, and solutions for lead generation.",
        },

        beneficioCerto: {
          role: "Data Analyst Intern",
          company: "Benefício Certo",
          period: "2019 - 2020",
          description:
            "Managed and evolved the CRM platform, supporting data analysis, strategic insights, and operational efficiency.",
        },

        tag2u: {
          role: "Mid-Level Backend Developer",
          company: "Tag2U",
          period: "2020 - 2021",
          description:
            "Developed APIs for an e-commerce platform in a startup environment, focusing on scalability, performance, and security using NestJS, GraphQL, and PostgreSQL.",
        },

        aerolito: {
          role: "Mid-Level Backend Developer",
          company: "Aerolito",
          period: "2021",
          description:
            "Developed and maintained APIs for an online course platform using AWS, Node.js, and DynamoDB, focusing on scalability, performance, and reliability.",
        },

        pixter: {
          role: "Mid-Level Software Engineer",
          company: "Pixter",
          period: "2021 - 2023",
          description:
            "Developed and maintained backend services and APIs, contributing to software architecture, integrations, and the evolution of digital products.",
        },

        metaInsi: {
          role: "Senior Software Engineer",
          company: "Meta (Insi)",
          period: "2023 - 2024",
          description:
            "Developed and maintained APIs and features for the Carro Fácil (Porto Bank) platform, working with microservices, database improvements, deployments, and infrastructure using Node.js, MongoDB, SQL, GCP, Docker, Cloudflare, Cloud Tasks, and Strapi.",
        },

        inex: {
          role: "Senior Software Engineer",
          company: "Inex",
          period: "2024",
          description:
            "Developed and maintained features for Telesena Virtual using NestJS and PostgreSQL, including legacy database scripts to ensure system integrity and performance.",
        },

        elasticCode: {
          role: "Senior Software Engineer · Freelancer",
          company: "Elastic Code",
          period: "2025",
          description:
            "Worked as a freelance Software Engineer developing an SST system for eSocial integration from the ground up using NestJS, PostgreSQL, and AWS, with frontend participation. Also contributed to a Honda project, developing screens, features, and API integrations using C#.",
        },

        gft: {
          role: "Senior Software Engineer",
          company: "GFT",
          period: "2024 - Present",
          description:
            "Developing and maintaining features for EDGE's gas distribution chain management platform, including inventory, scheduling, users, and contracts, using NestJS, Azure, MongoDB, and microservices architecture.",
        },
      },
    },

    projects: {
      eyebrow: "Selected work",
      title: "Things I",
      highlight: "built.",
      description:
        "A selection of products and engineering projects where architecture, product thinking, and software engineering come together.",
      action: "Discuss a project",
      projectLabel: "PROJECT",
      viewAll: "View all projects",

      modal: {
        title: "All projects",
        close: "Close projects",
      },
      links: {
        caseStudy: "Case study",
        sourceCode: "Source code",
        liveProject: "Live project",
      },
      comingSoon: {
        label: "COMING SOON",
        title: "New projects are on the way.",
        description:
          "I am preparing this section to showcase products, systems, and engineering projects that are part of my journey.",
        action: "Get in touch",
        metricOne: "Projects",
        metricTwo: "Building",
      },
    },

    expertise: {
      eyebrow: "Technical expertise",
      title: "Engineering across",
      highlight: "the stack.",
      description:
        "My work sits primarily around backend engineering and distributed systems, with experience across cloud, databases, architecture, frontend, and production environments.",
      items: {
        backend: {
          title: "Backend Engineering",
          description:
            "Building reliable APIs and backend systems with a focus on maintainability, performance, and clear boundaries.",
        },
        cloud: {
          title: "Cloud & Infrastructure",
          description:
            "Designing and operating cloud-based applications with scalable infrastructure and production-ready environments.",
        },
        data: {
          title: "Data & Persistence",
          description:
            "Working with relational and NoSQL databases according to the consistency, querying, and scalability needs of each system.",
        },
        architecture: {
          title: "Software Architecture",
          description:
            "Designing systems around clear responsibilities, modularity, evolution, and business requirements.",
        },
        frontend: {
          title: "Frontend Engineering",
          description:
            "Building modern interfaces when the product requires full-stack ownership and close integration with backend systems.",
        },
        security: {
          title: "Security & Reliability",
          description:
            "Applying engineering practices that make applications safer, observable, testable, and easier to operate.",
        },
      },
    },

    services: {
      eyebrow: "Services",
      title: "Engineering support",
      highlight: "for real products.",
      description:
        "I work with companies and teams that need hands-on engineering to build, evolve, or solve complex software systems.",

      items: [
        {
          title: "Backend Development",
          description:
            "Design and implementation of robust backend systems, APIs, integrations, and business logic for new or existing products.",
          items: ["Node.js", "NestJS", "TypeScript", "REST", "GraphQL"],
        },
        {
          title: "Software Architecture",
          description:
            "Technical design for systems that need clearer boundaries, better maintainability, and a foundation for future growth.",
          items: [
            "System Design",
            "Clean Architecture",
            "DDD",
            "Microservices",
          ],
        },
        {
          title: "Cloud & Infrastructure",
          description:
            "Cloud architecture and application infrastructure focused on reliable deployments, scalability, and operational simplicity.",
          items: ["AWS", "GCP", "Azure", "Docker", "CI/CD"],
        },
        {
          title: "Technical Consulting",
          description:
            "Hands-on technical support for teams facing architectural decisions, legacy systems, technical debt, or complex engineering problems.",
          items: [
            "Technical Strategy",
            "Code Review",
            "Technical Debt",
            "System Evolution",
          ],
        },
      ],

      bottom: {
        title: "Have a technical challenge to solve?",
        description:
          "Tell me what you are building, where you are today, and what needs to change. We can start from the problem.",
        action: "Start a conversation",
      },
    },

    contact: {
      eyebrow: "Get in touch",
      title: "Let's build something",
      highlight: " meaningful.",
      description:
        "Whether you are building a new product, evolving an existing system, or dealing with a difficult technical problem, I'm open to conversations about engineering and new opportunities.",
      sendEmail: "Send me an email",
      backToTop: "Back to top",

      details: {
        email: {
          label: "Email",
        },
        phone: {
          label: "Phone",
        },
        linkedin: {
          label: "LinkedIn",
          value: "LinkedIn profile",
        },
        github: {
          label: "GitHub",
          value: "GitHub profile",
        },
        instagram: {
          label: "Instagram",
          value: "Instagram profile",
        },
        location: {
          label: "Location",
          value: "São Paulo, Brazil · Available remotely",
        },
      },
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
    privacy: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      lastUpdated: "Last updated: September 21, 2026",
      introduction:
        "Your privacy matters. This Privacy Policy explains how Leonardo Reis Melo collects, uses, and protects information when you use this website.",
      backToWebsite: "Back to website",

      sections: {
        information: {
          title: "1. Information We Collect",
          paragraph1:
            "We may collect information that you voluntarily provide when contacting us through this website, such as your name, email address, phone number, and the content of your message.",
          paragraph2:
            "We may also collect limited technical information required for the website to operate properly, such as browser type, device information, language preference, and basic usage information.",
        },

        usage: {
          title: "2. How We Use Your Information",
          paragraph1:
            "Information provided through the website may be used to respond to inquiries, communicate about projects or professional opportunities, provide requested services, and improve the website and its user experience.",
          paragraph2:
            "We do not use personal information for purposes incompatible with the context in which it was collected.",
        },

        cookies: {
          title: "3. Cookies and Local Storage",
          paragraph1:
            "This website may use browser storage technologies, such as localStorage, to remember preferences such as language and theme selection.",
          paragraph2:
            "These preferences are used to provide a more consistent experience and are not intended to identify you personally.",
        },

        thirdParty: {
          title: "4. Third-Party Services",
          paragraph1:
            "The website may contain links to third-party services, including WhatsApp and professional or social platforms. When you follow these links, the privacy practices of the respective third party apply.",
          paragraph2:
            "We are not responsible for the privacy practices or content of external websites and services.",
        },

        security: {
          title: "5. Data Security",
          paragraph1:
            "Reasonable technical and organizational measures are used to protect information handled through this website against unauthorized access, loss, misuse, alteration, or disclosure.",
          paragraph2:
            "However, no method of transmission or electronic storage can be guaranteed to be completely secure.",
        },

        rights: {
          title: "6. Your Rights",
          paragraph1:
            "Where applicable under Brazilian data protection legislation, including the Lei Geral de Proteção de Dados Pessoais (LGPD), you may have rights regarding your personal information, including access, correction, deletion, and information about how your data is processed.",
        },

        contact: {
          title: "7. Contact",
          paragraph1:
            "If you have questions about this Privacy Policy or about the processing of your personal information, you can contact us at contato@leonardoreismelo.com.br.",
        },

        changes: {
          title: "8. Changes to This Policy",
          paragraph1:
            "This Privacy Policy may be updated from time to time to reflect changes to the website, applicable legislation, or our privacy practices. The latest version will always be published on this page.",
        },
      },
    },
    terms: {
      eyebrow: "Legal",
      title: "Terms of Use",
      lastUpdated: "Last updated: September 24, 2026",
      introduction:
        "These Terms of Use establish the conditions for accessing and using the Leonardo Reis Melo website.",
      backToWebsite: "Back to website",

      sections: {
        acceptance: {
          title: "1. Acceptance of Terms",
          paragraph1:
            "By accessing and using this website, you agree to comply with these Terms of Use and all applicable laws and regulations.",
        },

        websiteUse: {
          title: "2. Use of the Website",
          paragraph1:
            "This website is intended to present professional information, projects, services, experience, and contact channels related to Leonardo Reis Melo.",
          paragraph2:
            "You agree to use the website only for lawful purposes and in a manner that does not interfere with its operation, security, or availability.",
        },

        intellectualProperty: {
          title: "3. Intellectual Property",
          paragraph1:
            "Unless otherwise stated, the content available on this website, including text, design, visual elements, code examples, and other materials, is owned by or licensed to Leonardo Reis Melo.",
          paragraph2:
            "You may not reproduce, distribute, modify, or commercially exploit website content without prior authorization, except where permitted by applicable law.",
        },

        thirdParty: {
          title: "4. Third-Party Links",
          paragraph1:
            "This website may contain links to third-party websites and services. These links are provided for convenience and do not imply control over or responsibility for external content, services, or privacy practices.",
        },

        availability: {
          title: "5. Website Availability",
          paragraph1:
            "We may modify, suspend, or discontinue parts of the website at any time. We do not guarantee that the website will always be available, uninterrupted, secure, or free from errors.",
        },

        liability: {
          title: "6. Limitation of Liability",
          paragraph1:
            "To the extent permitted by applicable law, Leonardo Reis Melo shall not be liable for indirect, incidental, special, or consequential damages arising from the use of or inability to use this website.",
        },

        changes: {
          title: "7. Changes to These Terms",
          paragraph1:
            "These Terms of Use may be updated from time to time to reflect changes to the website, applicable legislation, or our practices. The latest version will always be published on this page.",
        },

        contact: {
          title: "8. Contact",
          paragraph1:
            "If you have questions about these Terms of Use, you can contact us at contato@leonardoreismelo.com.br.",
        },
      },
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
      title: "Construindo software com",
      highlight: "propósito.",
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
      title: "Engenharia diante de",
      highlight: "desafios reais.",
      description:
        "Experiência com produtos, plataformas, APIs, cloud, dados e sistemas distribuídos.",
      freelance: "Freelancer",
      previous: "Experiência anterior",
      action: "Ver os projetos por trás da minha experiência",
      resume: "Baixar currículo",

      positions: {
        presenteEscola: {
          role: "Técnico de Informática",
          company: "Presente Escola",
          period: "2018 - 2019",
          description:
            "Responsável pela administração de plataformas corporativas, otimização de processos tecnológicos, gestão de CRM e suporte à operação de TI.",
        },

        goWifi: {
          role: "Desenvolvedor Full Stack · Estágio",
          company: "Go Wi-fi Corp",
          period: "2019",
          description:
            "Desenvolvimento e evolução de APIs e aplicações web, incluindo criação de novas funcionalidades, integrações de sistemas e implementação de soluções para captação de leads.",
        },

        beneficioCerto: {
          role: "Analista de Dados · Estágio",
          company: "Benefício Certo",
          period: "2019 - 2020",
          description:
            "Gestão e evolução de plataforma CRM, promovendo análise de dados, geração de insights estratégicos e suporte à eficiência operacional da organização.",
        },

        tag2u: {
          role: "Desenvolvedor Backend · Pleno",
          company: "Tag2U",
          period: "2020 - 2021",
          description:
            "Desenvolvimento de APIs para plataforma de e-commerce em ambiente de startup, com foco em escalabilidade, performance e segurança, utilizando NestJS, GraphQL e PostgreSQL.",
        },

        aerolito: {
          role: "Desenvolvedor Backend · Pleno",
          company: "Aerolito",
          period: "2021",
          description:
            "Desenvolvimento e manutenção de APIs para plataforma de cursos online, utilizando AWS, Node.js e DynamoDB, com foco em escalabilidade, performance e confiabilidade.",
        },

        pixter: {
          role: "Software Engineer · Pleno",
          company: "Pixter",
          period: "2021 - 2023",
          description:
            "Desenvolvimento e manutenção de serviços backend e APIs, contribuindo para arquitetura de software, integrações e evolução de produtos digitais.",
        },

        metaInsi: {
          role: "Software Engineer · Sênior",
          company: "Meta (Insi)",
          period: "2023 - 2024",
          description:
            "Desenvolvimento e manutenção de APIs e funcionalidades no sistema Carro Fácil (Porto Bank), com atuação em microserviços, ajustes de banco de dados, deploy e sustentação de infraestrutura, utilizando Node.js, MongoDB, SQL, GCP, Docker, Cloudflare, Cloud Tasks e Strapi.",
        },

        inex: {
          role: "Software Engineer · Sênior",
          company: "Inex",
          period: "2024",
          description:
            "Desenvolvimento e manutenção de funcionalidades da Telesena Virtual, utilizando NestJS e PostgreSQL, com atuação em scripts em base legada para garantia de integridade e performance do sistema.",
        },

        elasticCode: {
          role: "Software Engineer · Sênior · Freelancer",
          company: "Elastic Code",
          period: "2025",
          description:
            "Atuação como Software Engineer freelancer no desenvolvimento do sistema SST para integração com o eSocial do zero, utilizando NestJS, PostgreSQL e AWS, com participação em frontend. Também atuei em projeto da Honda no desenvolvimento de telas, funcionalidades e integração com API utilizando C#.",
        },

        gft: {
          role: "Software Engineer · Sênior",
          company: "GFT",
          period: "2024 - Presente",
          description:
            "Desenvolvimento e manutenção de funcionalidades na plataforma de controle da cadeia de distribuição de gás da EDGE, incluindo gestão de inventário, programações, usuários e contratos, utilizando NestJS, Azure, MongoDB e arquitetura de microserviços.",
        },
      },
    },

    projects: {
      eyebrow: "Projetos selecionados",
      title: "Coisas que eu",
      highlight: "construí.",
      description:
        "Uma seleção de produtos e projetos de engenharia onde arquitetura, visão de produto e desenvolvimento de software se encontram.",
      action: "Vamos conversar sobre um projeto",
      projectLabel: "PROJETO",
      viewAll: "Ver todos os projetos",

      modal: {
        title: "Todos os projetos",
        close: "Fechar projetos",
      },
      links: {
        caseStudy: "Case study",
        sourceCode: "Código-fonte",
        liveProject: "Projeto online",
      },
      comingSoon: {
        label: "EM BREVE",
        title: "Novos projetos estão a caminho.",
        description:
          "Estou preparando esta seção para apresentar produtos, sistemas e projetos de engenharia que fazem parte da minha trajetória.",
        action: "Entrar em contato",
        metricOne: "Projetos",
        metricTwo: "Construindo",
      },
    },

    expertise: {
      eyebrow: "Especialidades técnicas",
      title: "Engenharia em",
      highlight: "toda a stack.",
      description:
        "Minha atuação está principalmente concentrada em engenharia backend e sistemas distribuídos, com experiência em cloud, bancos de dados, arquitetura, frontend e ambientes de produção.",
      items: {
        backend: {
          title: "Engenharia Backend",
          description:
            "Construção de APIs e sistemas backend confiáveis, com foco em manutenibilidade, performance e responsabilidades bem definidas.",
        },
        cloud: {
          title: "Cloud & Infraestrutura",
          description:
            "Desenvolvimento e operação de aplicações em cloud, com infraestrutura escalável e ambientes preparados para produção.",
        },
        data: {
          title: "Dados & Persistência",
          description:
            "Experiência com bancos relacionais e NoSQL de acordo com as necessidades de consistência, consultas e escalabilidade de cada sistema.",
        },
        architecture: {
          title: "Arquitetura de Software",
          description:
            "Desenvolvimento de sistemas orientados a responsabilidades claras, modularidade, evolução e requisitos de negócio.",
        },
        frontend: {
          title: "Engenharia Frontend",
          description:
            "Construção de interfaces modernas quando o produto exige atuação full-stack e integração próxima com sistemas backend.",
        },
        security: {
          title: "Segurança & Confiabilidade",
          description:
            "Aplicação de práticas de engenharia que tornam as aplicações mais seguras, observáveis, testáveis e fáceis de operar.",
        },
      },
    },

    services: {
      eyebrow: "Serviços",
      title: "Engenharia de software",
      highlight: "para produtos reais.",
      description:
        "Trabalho com empresas e equipes que precisam de engenharia hands-on para construir, evoluir ou resolver sistemas de software complexos.",

      items: [
        {
          title: "Desenvolvimento Backend",
          description:
            "Desenvolvimento e implementação de sistemas backend robustos, APIs, integrações e regras de negócio para produtos novos ou existentes.",
          items: ["Node.js", "NestJS", "TypeScript", "REST", "GraphQL"],
        },
        {
          title: "Arquitetura de Software",
          description:
            "Desenho técnico de sistemas que precisam de limites mais claros, maior manutenibilidade e uma base preparada para crescer.",
          items: [
            "System Design",
            "Clean Architecture",
            "DDD",
            "Microservices",
          ],
        },
        {
          title: "Cloud & Infraestrutura",
          description:
            "Arquitetura cloud e infraestrutura de aplicações com foco em deploys confiáveis, escalabilidade e simplicidade operacional.",
          items: ["AWS", "GCP", "Azure", "Docker", "CI/CD"],
        },
        {
          title: "Consultoria Técnica",
          description:
            "Suporte técnico hands-on para equipes que enfrentam decisões arquiteturais, sistemas legados, dívida técnica ou problemas complexos de engenharia.",
          items: [
            "Estratégia Técnica",
            "Code Review",
            "Dívida Técnica",
            "Evolução de Sistemas",
          ],
        },
      ],

      bottom: {
        title: "Tem um desafio técnico para resolver?",
        description:
          "Conte o que você está construindo, onde está hoje e o que precisa mudar. Podemos começar pelo problema.",
        action: "Vamos conversar",
      },
    },

    contact: {
      eyebrow: "Entre em contato",
      title: "Vamos construir algo",
      highlight: " significativo.",
      description:
        "Seja criando um novo produto, evoluindo um sistema existente ou lidando com um problema técnico complexo, estou aberto a conversas sobre engenharia e novas oportunidades.",
      sendEmail: "Enviar um e-mail",
      backToTop: "Voltar ao topo",

      details: {
        email: {
          label: "E-mail",
        },
        phone: {
          label: "Telefone",
        },
        linkedin: {
          label: "LinkedIn",
          value: "Perfil no LinkedIn",
        },
        github: {
          label: "GitHub",
          value: "Perfil no GitHub",
        },
        instagram: {
          label: "Instagram",
          value: "Perfil no Instagram",
        },
        location: {
          label: "Localização",
          value: "São Paulo, Brasil · Disponível remotamente",
        },
      },
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
    privacy: {
      eyebrow: "Legal",
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: 21 de setembro de 2026",
      introduction:
        "Sua privacidade é importante. Esta Política de Privacidade explica como Leonardo Reis Melo coleta, utiliza e protege informações quando você utiliza este site.",
      backToWebsite: "Voltar para o site",

      sections: {
        information: {
          title: "1. Informações que Coletamos",
          paragraph1:
            "Podemos coletar informações que você fornece voluntariamente ao entrar em contato conosco por meio deste site, como nome, endereço de e-mail, número de telefone e o conteúdo da sua mensagem.",
          paragraph2:
            "Também podemos coletar informações técnicas limitadas necessárias para o funcionamento adequado do site, como tipo de navegador, informações do dispositivo, preferência de idioma e informações básicas de uso.",
        },

        usage: {
          title: "2. Como Utilizamos suas Informações",
          paragraph1:
            "As informações fornecidas por meio do site podem ser utilizadas para responder a solicitações, entrar em contato sobre projetos ou oportunidades profissionais, fornecer os serviços solicitados e melhorar o site e a experiência do usuário.",
          paragraph2:
            "Não utilizamos informações pessoais para finalidades incompatíveis com o contexto em que foram coletadas.",
        },

        cookies: {
          title: "3. Cookies e Armazenamento Local",
          paragraph1:
            "Este site pode utilizar tecnologias de armazenamento do navegador, como localStorage, para lembrar preferências como idioma e seleção de tema.",
          paragraph2:
            "Essas preferências são utilizadas para proporcionar uma experiência mais consistente e não têm como objetivo identificar você pessoalmente.",
        },

        thirdParty: {
          title: "4. Serviços de Terceiros",
          paragraph1:
            "O site pode conter links para serviços de terceiros, incluindo o WhatsApp e plataformas profissionais ou sociais. Ao acessar esses links, aplicam-se as práticas de privacidade dos respectivos terceiros.",
          paragraph2:
            "Não somos responsáveis pelas práticas de privacidade ou pelo conteúdo de sites e serviços externos.",
        },

        security: {
          title: "5. Segurança dos Dados",
          paragraph1:
            "São utilizadas medidas técnicas e organizacionais razoáveis para proteger as informações tratadas por este site contra acesso não autorizado, perda, uso indevido, alteração ou divulgação.",
          paragraph2:
            "No entanto, nenhum método de transmissão ou armazenamento eletrônico pode ser considerado completamente seguro.",
        },

        rights: {
          title: "6. Seus Direitos",
          paragraph1:
            "Quando aplicável de acordo com a legislação brasileira de proteção de dados, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD), você poderá ter direitos relacionados às suas informações pessoais, incluindo acesso, correção, exclusão e informações sobre como seus dados são tratados.",
        },

        contact: {
          title: "7. Contato",
          paragraph1:
            "Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de suas informações pessoais, entre em contato pelo e-mail contato@leonardoreismelo.com.br.",
        },

        changes: {
          title: "8. Alterações nesta Política",
          paragraph1:
            "Esta Política de Privacidade poderá ser atualizada periodicamente para refletir alterações no site, na legislação aplicável ou em nossas práticas de privacidade. A versão mais recente estará sempre disponível nesta página.",
        },
      },
    },
    terms: {
      eyebrow: "Legal",
      title: "Termos de Uso",
      lastUpdated: "Última atualização: 24 de setembro de 2026",
      introduction:
        "Estes Termos de Uso estabelecem as condições para acesso e utilização do site de Leonardo Reis Melo.",
      backToWebsite: "Voltar para o site",

      sections: {
        acceptance: {
          title: "1. Aceitação dos Termos",
          paragraph1:
            "Ao acessar e utilizar este site, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentações aplicáveis.",
        },

        websiteUse: {
          title: "2. Uso do Site",
          paragraph1:
            "Este site tem como finalidade apresentar informações profissionais, projetos, serviços, experiências e canais de contato relacionados a Leonardo Reis Melo.",
          paragraph2:
            "Você concorda em utilizar o site apenas para fins legais e de maneira que não prejudique seu funcionamento, segurança ou disponibilidade.",
        },

        intellectualProperty: {
          title: "3. Propriedade Intelectual",
          paragraph1:
            "Salvo indicação em contrário, os conteúdos disponíveis neste site, incluindo textos, design, elementos visuais, exemplos de código e outros materiais, são de propriedade de ou licenciados para Leonardo Reis Melo.",
          paragraph2:
            "Você não poderá reproduzir, distribuir, modificar ou explorar comercialmente os conteúdos do site sem autorização prévia, exceto quando permitido pela legislação aplicável.",
        },

        thirdParty: {
          title: "4. Links de Terceiros",
          paragraph1:
            "Este site pode conter links para sites e serviços de terceiros. Esses links são disponibilizados por conveniência e não implicam controle ou responsabilidade sobre conteúdos, serviços ou práticas de privacidade externas.",
        },

        availability: {
          title: "5. Disponibilidade do Site",
          paragraph1:
            "Podemos modificar, suspender ou descontinuar partes do site a qualquer momento. Não garantimos que o site estará sempre disponível, ininterrupto, seguro ou livre de erros.",
        },

        liability: {
          title: "6. Limitação de Responsabilidade",
          paragraph1:
            "Na medida permitida pela legislação aplicável, Leonardo Reis Melo não será responsável por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da impossibilidade de utilização deste site.",
        },

        changes: {
          title: "7. Alterações nestes Termos",
          paragraph1:
            "Estes Termos de Uso poderão ser atualizados periodicamente para refletir alterações no site, na legislação aplicável ou em nossas práticas. A versão mais recente estará sempre disponível nesta página.",
        },

        contact: {
          title: "8. Contato",
          paragraph1:
            "Se você tiver dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail contato@leonardoreismelo.com.br.",
        },
      },
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
      title: "Construyendo software con",
      highlight: "propósito.",
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
      title: "Ingeniería frente a",
      highlight: "desafíos reales.",
      description:
        "Experiencia con productos, plataformas, APIs, cloud, datos y sistemas distribuidos.",
      freelance: "Freelance",
      previous: "Experiencia anterior",
      action: "Ver los proyectos detrás de mi experiencia",
      resume: "Descargar currículum",

      positions: {
        presenteEscola: {
          role: "Técnico de Informática",
          company: "Presente Escola",
          period: "2018 - 2019",
          description:
            "Responsable de la administración de plataformas corporativas, optimización de procesos tecnológicos, gestión de CRM y soporte a las operaciones de TI.",
        },

        goWifi: {
          role: "Desarrollador Full Stack · Pasantía",
          company: "Go Wi-fi Corp",
          period: "2019",
          description:
            "Desarrollo y evolución de APIs y aplicaciones web, incluyendo nuevas funcionalidades, integraciones de sistemas y soluciones para captación de leads.",
        },

        beneficioCerto: {
          role: "Analista de Datos · Pasantía",
          company: "Benefício Certo",
          period: "2019 - 2020",
          description:
            "Gestión y evolución de la plataforma CRM, realizando análisis de datos, generación de insights estratégicos y apoyo a la eficiencia operativa de la organización.",
        },

        tag2u: {
          role: "Desarrollador Backend · Mid-Level",
          company: "Tag2U",
          period: "2020 - 2021",
          description:
            "Desarrollo de APIs para una plataforma de comercio electrónico en un entorno startup, con enfoque en escalabilidad, rendimiento y seguridad utilizando NestJS, GraphQL y PostgreSQL.",
        },

        aerolito: {
          role: "Desarrollador Backend · Mid-Level",
          company: "Aerolito",
          period: "2021",
          description:
            "Desarrollo y mantenimiento de APIs para una plataforma de cursos online utilizando AWS, Node.js y DynamoDB, con enfoque en escalabilidad, rendimiento y confiabilidad.",
        },

        pixter: {
          role: "Software Engineer · Mid-Level",
          company: "Pixter",
          period: "2021 - 2023",
          description:
            "Desarrollo y mantenimiento de servicios backend y APIs, contribuyendo a la arquitectura de software, integraciones y evolución de productos digitales.",
        },

        metaInsi: {
          role: "Software Engineer · Senior",
          company: "Meta (Insi)",
          period: "2023 - 2024",
          description:
            "Desarrollo y mantenimiento de APIs y funcionalidades para la plataforma Carro Fácil (Porto Bank), trabajando con microservicios, mejoras de bases de datos, despliegues e infraestructura utilizando Node.js, MongoDB, SQL, GCP, Docker, Cloudflare, Cloud Tasks y Strapi.",
        },

        inex: {
          role: "Software Engineer · Senior",
          company: "Inex",
          period: "2024",
          description:
            "Desarrollo y mantenimiento de funcionalidades para Telesena Virtual utilizando NestJS y PostgreSQL, incluyendo scripts sobre una base de datos heredada para garantizar la integridad y el rendimiento del sistema.",
        },

        elasticCode: {
          role: "Software Engineer · Senior · Freelance",
          company: "Elastic Code",
          period: "2025",
          description:
            "Trabajo como Software Engineer freelance en el desarrollo desde cero de un sistema SST para integración con eSocial utilizando NestJS, PostgreSQL y AWS, con participación en frontend. También participé en un proyecto de Honda desarrollando pantallas, funcionalidades e integración con API utilizando C#.",
        },

        gft: {
          role: "Software Engineer · Senior",
          company: "GFT",
          period: "2024 - Presente",
          description:
            "Desarrollo y mantenimiento de funcionalidades en la plataforma de control de la cadena de distribución de gas de EDGE, incluyendo gestión de inventario, programaciones, usuarios y contratos, utilizando NestJS, Azure, MongoDB y arquitectura de microservicios.",
        },
      },
    },

    projects: {
      eyebrow: "Proyectos seleccionados",
      title: "Cosas que he",
      highlight: "construido.",
      description:
        "Una selección de productos y proyectos de ingeniería donde se encuentran la arquitectura, la visión de producto y la ingeniería de software.",
      action: "Hablemos de un proyecto",
      projectLabel: "PROYECTO",
      viewAll: "Ver todos los proyectos",

      modal: {
        title: "Todos los proyectos",
        close: "Cerrar proyectos",
      },
      links: {
        caseStudy: "Caso de estudio",
        sourceCode: "Código fuente",
        liveProject: "Proyecto online",
      },
      comingSoon: {
        label: "PRÓXIMAMENTE",
        title: "Nuevos proyectos están en camino.",
        description:
          "Estoy preparando esta sección para presentar productos, sistemas y proyectos de ingeniería que forman parte de mi trayectoria.",
        action: "Contactarme",
        metricOne: "Proyectos",
        metricTwo: "Construyendo",
      },
    },

    expertise: {
      eyebrow: "Especialidades técnicas",
      title: "Ingeniería en",
      highlight: "toda la stack.",
      description:
        "Mi trabajo se centra principalmente en ingeniería backend y sistemas distribuidos, con experiencia en cloud, bases de datos, arquitectura, frontend y entornos de producción.",
      items: {
        backend: {
          title: "Ingeniería Backend",
          description:
            "Construcción de APIs y sistemas backend confiables, con enfoque en mantenibilidad, rendimiento y responsabilidades claras.",
        },
        cloud: {
          title: "Cloud e Infraestructura",
          description:
            "Desarrollo y operación de aplicaciones en cloud, con infraestructura escalable y entornos preparados para producción.",
        },
        data: {
          title: "Datos y Persistencia",
          description:
            "Experiencia con bases de datos relacionales y NoSQL según las necesidades de consistencia, consultas y escalabilidad de cada sistema.",
        },
        architecture: {
          title: "Arquitectura de Software",
          description:
            "Diseño de sistemas basados en responsabilidades claras, modularidad, evolución y requisitos de negocio.",
        },
        frontend: {
          title: "Ingeniería Frontend",
          description:
            "Construcción de interfaces modernas cuando el producto requiere una actuación full-stack y una integración cercana con sistemas backend.",
        },
        security: {
          title: "Seguridad y Confiabilidad",
          description:
            "Aplicación de prácticas de ingeniería que hacen que las aplicaciones sean más seguras, observables, testeables y fáciles de operar.",
        },
      },
    },

    services: {
      eyebrow: "Servicios",
      title: "Ingeniería de software",
      highlight: "para productos reales.",
      description:
        "Trabajo con empresas y equipos que necesitan ingeniería práctica para construir, evolucionar o resolver sistemas de software complejos.",

      items: [
        {
          title: "Desarrollo Backend",
          description:
            "Diseño e implementación de sistemas backend robustos, APIs, integraciones y reglas de negocio para productos nuevos o existentes.",
          items: ["Node.js", "NestJS", "TypeScript", "REST", "GraphQL"],
        },
        {
          title: "Arquitectura de Software",
          description:
            "Diseño técnico para sistemas que necesitan límites más claros, mayor mantenibilidad y una base preparada para crecer.",
          items: [
            "System Design",
            "Clean Architecture",
            "DDD",
            "Microservices",
          ],
        },
        {
          title: "Cloud e Infraestructura",
          description:
            "Arquitectura cloud e infraestructura de aplicaciones enfocadas en despliegues confiables, escalabilidad y simplicidad operativa.",
          items: ["AWS", "GCP", "Azure", "Docker", "CI/CD"],
        },
        {
          title: "Consultoría Técnica",
          description:
            "Soporte técnico práctico para equipos que enfrentan decisiones arquitectónicas, sistemas heredados, deuda técnica o problemas complejos de ingeniería.",
          items: [
            "Estrategia Técnica",
            "Code Review",
            "Deuda Técnica",
            "Evolución de Sistemas",
          ],
        },
      ],

      bottom: {
        title: "¿Tienes un desafío técnico que resolver?",
        description:
          "Cuéntame qué estás construyendo, dónde estás hoy y qué necesita cambiar. Podemos empezar por el problema.",
        action: "Hablemos",
      },
    },

    contact: {
      eyebrow: "Ponte en contacto",
      title: "Construyamos algo",
      highlight: " significativo.",
      description:
        "Ya sea que estés creando un nuevo producto, evolucionando un sistema existente o enfrentando un problema técnico complejo, estoy abierto a conversaciones sobre ingeniería y nuevas oportunidades.",
      sendEmail: "Envíame un correo",
      backToTop: "Volver arriba",

      details: {
        email: {
          label: "Correo electrónico",
        },
        phone: {
          label: "Teléfono",
        },
        linkedin: {
          label: "LinkedIn",
          value: "Perfil de LinkedIn",
        },
        github: {
          label: "GitHub",
          value: "Perfil de GitHub",
        },
        instagram: {
          label: "Instagram",
          value: "Perfil de Instagram",
        },
        location: {
          label: "Ubicación",
          value: "São Paulo, Brasil · Disponible de forma remota",
        },
      },
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
    privacy: {
      eyebrow: "Legal",
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 21 de septiembre de 2026",
      introduction:
        "Tu privacidad es importante. Esta Política de Privacidad explica cómo Leonardo Reis Melo recopila, utiliza y protege la información cuando utilizas este sitio web.",
      backToWebsite: "Volver al sitio",

      sections: {
        information: {
          title: "1. Información que Recopilamos",
          paragraph1:
            "Podemos recopilar información que proporcionas voluntariamente al contactarnos a través de este sitio web, como tu nombre, dirección de correo electrónico, número de teléfono y el contenido de tu mensaje.",
          paragraph2:
            "También podemos recopilar información técnica limitada necesaria para que el sitio funcione correctamente, como el tipo de navegador, información del dispositivo, preferencia de idioma e información básica de uso.",
        },

        usage: {
          title: "2. Cómo Utilizamos tu Información",
          paragraph1:
            "La información proporcionada a través del sitio puede utilizarse para responder consultas, comunicarnos sobre proyectos u oportunidades profesionales, proporcionar los servicios solicitados y mejorar el sitio y la experiencia del usuario.",
          paragraph2:
            "No utilizamos información personal para fines incompatibles con el contexto en el que fue recopilada.",
        },

        cookies: {
          title: "3. Cookies y Almacenamiento Local",
          paragraph1:
            "Este sitio web puede utilizar tecnologías de almacenamiento del navegador, como localStorage, para recordar preferencias como el idioma y la selección del tema.",
          paragraph2:
            "Estas preferencias se utilizan para proporcionar una experiencia más consistente y no tienen como objetivo identificarte personalmente.",
        },

        thirdParty: {
          title: "4. Servicios de Terceros",
          paragraph1:
            "El sitio web puede contener enlaces a servicios de terceros, incluido WhatsApp y plataformas profesionales o sociales. Al acceder a estos enlaces, se aplican las prácticas de privacidad del tercero correspondiente.",
          paragraph2:
            "No somos responsables de las prácticas de privacidad ni del contenido de sitios web y servicios externos.",
        },

        security: {
          title: "5. Seguridad de los Datos",
          paragraph1:
            "Se utilizan medidas técnicas y organizativas razonables para proteger la información tratada a través de este sitio web contra el acceso no autorizado, pérdida, uso indebido, alteración o divulgación.",
          paragraph2:
            "Sin embargo, ningún método de transmisión o almacenamiento electrónico puede garantizarse como completamente seguro.",
        },

        rights: {
          title: "6. Tus Derechos",
          paragraph1:
            "Cuando corresponda según la legislación brasileña de protección de datos, incluida la Ley General de Protección de Datos Personales (LGPD), puedes tener derechos relacionados con tu información personal, incluido el acceso, corrección, eliminación e información sobre cómo se procesan tus datos.",
        },

        contact: {
          title: "7. Contacto",
          paragraph1:
            "Si tienes preguntas sobre esta Política de Privacidad o sobre el tratamiento de tu información personal, puedes contactarnos en contato@leonardoreismelo.com.br.",
        },

        changes: {
          title: "8. Cambios en esta Política",
          paragraph1:
            "Esta Política de Privacidad puede actualizarse periódicamente para reflejar cambios en el sitio web, la legislación aplicable o nuestras prácticas de privacidad. La versión más reciente estará siempre publicada en esta página.",
        },
      },
    },
    terms: {
      eyebrow: "Legal",
      title: "Términos de Uso",
      lastUpdated: "Última actualización: 24 de septiembre de 2026",
      introduction:
        "Estos Términos de Uso establecen las condiciones para acceder y utilizar el sitio web de Leonardo Reis Melo.",
      backToWebsite: "Volver al sitio",

      sections: {
        acceptance: {
          title: "1. Aceptación de los Términos",
          paragraph1:
            "Al acceder y utilizar este sitio web, aceptas cumplir estos Términos de Uso y todas las leyes y regulaciones aplicables.",
        },

        websiteUse: {
          title: "2. Uso del Sitio",
          paragraph1:
            "Este sitio web tiene como finalidad presentar información profesional, proyectos, servicios, experiencia y canales de contacto relacionados con Leonardo Reis Melo.",
          paragraph2:
            "Aceptas utilizar el sitio únicamente para fines legales y de una manera que no interfiera con su funcionamiento, seguridad o disponibilidad.",
        },

        intellectualProperty: {
          title: "3. Propiedad Intelectual",
          paragraph1:
            "Salvo que se indique lo contrario, el contenido disponible en este sitio web, incluidos textos, diseño, elementos visuales, ejemplos de código y otros materiales, pertenece a Leonardo Reis Melo o se encuentra debidamente licenciado.",
          paragraph2:
            "No puedes reproducir, distribuir, modificar o explotar comercialmente el contenido del sitio sin autorización previa, excepto cuando la legislación aplicable lo permita.",
        },

        thirdParty: {
          title: "4. Enlaces de Terceros",
          paragraph1:
            "Este sitio web puede contener enlaces a sitios y servicios de terceros. Estos enlaces se proporcionan por conveniencia y no implican control ni responsabilidad sobre contenidos, servicios o prácticas de privacidad externas.",
        },

        availability: {
          title: "5. Disponibilidad del Sitio",
          paragraph1:
            "Podemos modificar, suspender o descontinuar partes del sitio web en cualquier momento. No garantizamos que el sitio esté siempre disponible, ininterrumpido, seguro o libre de errores.",
        },

        liability: {
          title: "6. Limitación de Responsabilidad",
          paragraph1:
            "En la medida permitida por la legislación aplicable, Leonardo Reis Melo no será responsable de daños indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de utilizar este sitio web.",
        },

        changes: {
          title: "7. Cambios en estos Términos",
          paragraph1:
            "Estos Términos de Uso pueden actualizarse periódicamente para reflejar cambios en el sitio web, la legislación aplicable o nuestras prácticas. La versión más reciente estará siempre disponible en esta página.",
        },

        contact: {
          title: "8. Contacto",
          paragraph1:
            "Si tienes preguntas sobre estos Términos de Uso, puedes contactarnos en contato@leonardoreismelo.com.br.",
        },
      },
    },
  },
} as const;
