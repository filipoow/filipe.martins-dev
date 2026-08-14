window.V3 = {
  links: {
    calendly: "https://calendly.com/emaildofilipe-m/30min",
    email: "mailto:fmartins.nascimento@outlook.com",
    linkedin: "https://linkedin.com/in/filipoow",
    github: "https://github.com/filipoow",
    filka: "https://filkastudio.com.br",
  },
  tech: [
    { n: "Databricks", c: "#FF3621", t: "#fff", s: "databricks" },
    { n: "AWS", c: "#FF9900", t: "#14110F", s: "amazonwebservices" },
    { n: "Python", c: "#3776AB", t: "#fff", s: "python" },
    { n: "Airflow", c: "#017CEE", t: "#fff", s: "apacheairflow" },
    { n: "Spark", c: "#E25A1C", t: "#fff", s: "apachespark" },
    { n: "dbt", c: "#FF694B", t: "#fff", s: "dbt" },
    { n: "Snowflake", c: "#29B5E8", t: "#fff", s: "snowflake" },
    { n: "Power BI", c: "#F2C811", t: "#14110F", s: "powerbi" },
    { n: "PostgreSQL", c: "#4169E1", t: "#fff", s: "postgresql" },
    { n: "Oracle", c: "#C74634", t: "#fff", s: "oracle" },
    { n: "OpenAI", c: "#10A37F", t: "#fff", s: "openai" },
    { n: "Salesforce", c: "#00A1E0", t: "#fff", s: "salesforce" },
    { n: "LangChain", c: "#1C3C3C", t: "#fff", s: "langchain" },
    { n: "Git", c: "#F05032", t: "#fff", s: "git" },
  ],
  pt: {
    nav: { work: "Trabalho.", exp: "Experiência.", filka: "Filka.", contact: "Contato." },
    hero: {
      rotate: ["Analytics", "Dados", "IA", "Automação"],
      fixed: "Engineer.",
      sub: "Construo soluções de dados, machine learning e IA generativa para empresas que querem decisões melhores e mais rápidas.",
      cta1: "Vamos conversar",
      cta2: "Ver trabalho",
      notes: [
        "Hoje sou Analytics Engineer Sênior na **Omie** e cofundador do **Filka Studio**, em São Paulo.",
        "Trabalho com **Databricks**, **AWS** e **Python** todos os dias, do pipeline ao modelo em produção.",
        "Já entreguei automações que economizam mais de **500 horas por mês** para os times que atendo.",
        "Cofundei o **Filka Studio** em 2022, onde juntamos programação e design digital.",
      ],
    },
    skills: { title: "Sempre construindo.", title2: "Sempre aprendendo." },
    work: {
      heading: "Meu trabalho.",
      tabs: ["Cases.", "Filka.", "Terminal."],
      hint: "Cinco projetos recentes. Resultado primeiro, tecnologia depois.",
      cases: [
        {
          co: "Omie", yr: "2025",
          name: "Alocação inteligente de clientes para franquias",
          metric: "100%", label: "do roteamento agora é automatizado",
          desc: "Antes o time fazia o match manual. Construí um modelo que calcula um score por cliente e cruza com o perfil de cada franquia.",
          tags: ["Python", "Scikit-learn", "Databricks"],
        },
        {
          co: "Omie", yr: "2025",
          name: "Chatbot interno com LLMs",
          metric: "−400h", label: "por mês de busca em base de conhecimento",
          desc: "Agente que consulta políticas, processos e documentação técnica em linguagem natural. Acelerou o onboarding do time.",
          tags: ["LLMs", "RAG", "OpenAI"],
        },
        {
          co: "Jadlog", yr: "2023",
          name: "ETL de KPIs comerciais",
          metric: "12", label: "dashboards executivos em uma fonte de verdade",
          desc: "Desenhei a estrutura comercial em Oracle e os pipelines em Spark e Airflow, alimentando o Power BI da diretoria.",
          tags: ["PL/SQL", "Spark", "Airflow"],
        },
        {
          co: "Jadlog", yr: "2023",
          name: "Automação da tabela de fretes",
          metric: "−60h", label: "por semana de trabalho manual",
          desc: "Scripts que formatam tabelas de frete para VTEX, Intelipost e Loja Integrada. Eliminou retrabalho recorrente.",
          tags: ["Python", "Pandas"],
        },
        {
          co: "Filka Studio", yr: "2024",
          name: "Salesforce sob medida",
          metric: "2", label: "clientes ativos com Sales Cloud customizado",
          desc: "Implementações de Sales Cloud, automações em Apex e Flows, integrações via API e dashboards executivos.",
          tags: ["Apex", "Flows", "LWC"],
        },
      ],
      filka: {
        kicker: "Estúdio, desde 2022",
        title: "Cofundei o Filka Studio para juntar dois mundos que costumam viver separados.",
        body: "Programação e design digital. Atendemos clientes que precisam dos dois, entregues juntos e bem feitos. Não vendemos pacote pronto: conversamos primeiro, entendemos o problema, e só depois propomos o caminho mais curto até o resultado.",
        items: [
          "Salesforce sob medida",
          "Automações em Python",
          "Sites e landing pages",
          "Identidade visual e marca",
          "Business Intelligence",
          "Consultoria e diagnóstico",
        ],
        cta: "Ver o site da Filka",
      },
      terminalHint: "Digite help para ver os comandos.",
    },
    stats: {
      heading: "Alguns números.",
      items: [
        { v: "+500h", l: "economizadas por mês", n: "Python", c: "#3776AB", t: "#fff", s: "python" },
        { v: "20+", l: "soluções em produção", n: "Databricks", c: "#FF3621", t: "#fff", s: "databricks" },
        { v: "5 anos", l: "trabalhando com dados", n: "AWS", c: "#FF9900", t: "#14110F", s: "amazonwebservices" },
        { v: "2", l: "clientes na Filka", n: "Salesforce", c: "#00A1E0", t: "#fff", s: "salesforce" },
      ],
    },
    exp: {
      accent: "Desconstruindo",
      rest: "minha experiência.",
      items: [
        {
          role: "Analytics Engineer Sênior", co: "Omie", period: "2026 até hoje",
          bullets: [
            "Desenvolvo projetos de **IA aplicada** e dados em **Databricks**",
            "Modelos de **Machine Learning** para alocação e scoring",
            "Agentes com **LLMs** e **RAG** sobre a base de conhecimento interna",
          ],
        },
        {
          role: "Analista de Dados Pleno", co: "Omie", period: "2024 a 2026",
          bullets: [
            "Novo desafio em **SaaS**, com foco em analytics de produto",
            "Comecei a explorar **ML** e **IA generativa** dentro da empresa",
          ],
        },
        {
          role: "Cofundador", co: "Filka Studio", period: "2022 até hoje",
          bullets: [
            "Estúdio de **programação e design digital**, fundado em São Paulo",
            "Soluções em **Salesforce**, automações e **Business Intelligence**",
            "Atendimento de clientes de ponta a ponta, do diagnóstico ao handover",
          ],
        },
        {
          role: "Analista de Dados Júnior a Pleno", co: "Jadlog", period: "2022 a 2024",
          bullets: [
            "Construí **ETLs** e a base de **KPIs comerciais** da operação",
            "Pipelines em **Spark** e **Airflow** alimentando **Power BI**",
            "Modelagem em **Oracle** e **PL/SQL** para a área comercial",
          ],
        },
        {
          role: "Aprendiz, Backoffice", co: "Jadlog", period: "2021 a 2022",
          bullets: [
            "Comecei automatizando planilhas por conta própria, com **Python**",
            "Foi ali que descobri que dados era o que eu queria fazer",
          ],
        },
      ],
    },
    quotes: {
      heading: "O que dizem sobre mim.",
      items: [
        {
          q: "Profissional ímpar. Comprometimento e profissionalismo incomparáveis. Toda demanda destinada a ele era entregue no prazo, com riqueza de detalhes e aperfeiçoamentos.",
          a: "Michele Lopes", r: "Coordenadora Comercial, minha gestora na Jadlog",
        },
        {
          q: "Nenhum obstáculo é grande demais para ele no desenvolvimento. Sempre traz inovação e melhorias, visão de processos surpreendente, frequentemente entrega mais do que o esperado. Foi meu braço direito como dev e tech lead, impecavelmente confiável.",
          a: "Lorena Santos Andrade", r: "Product Owner, colega de equipe na Jadlog",
        },
      ],
    },
    cta: {
      heading: "Bora trocar uma ideia?",
      sub: "Diagnóstico inicial gratuito. Em trinta minutos saio com o problema entendido e uma proposta na sua caixa em até três dias.",
      b1: "Agendar 30 minutos",
      b2: "Mandar um email",
    },
    footer: { tag: "Dados que viram decisão." },
  },
  en: {
    nav: { work: "Work.", exp: "Experience.", filka: "Filka.", contact: "Contact." },
    hero: {
      rotate: ["Analytics", "Data", "AI", "Automation"],
      fixed: "Engineer.",
      sub: "I build data, machine learning and generative AI solutions for companies that want better decisions, faster.",
      cta1: "Let's talk",
      cta2: "See work",
      notes: [
        "Today I'm a Senior Analytics Engineer at **Omie** and co-founder of **Filka Studio**, in São Paulo.",
        "I work with **Databricks**, **AWS** and **Python** every day, from pipeline to model in production.",
        "I have shipped automations that save over **500 hours a month** for the teams I serve.",
        "I co-founded **Filka Studio** in 2022, where we bring code and digital design together.",
      ],
    },
    skills: { title: "Always building.", title2: "Always learning." },
    work: {
      heading: "My work.",
      tabs: ["Cases.", "Filka.", "Terminal."],
      hint: "Five recent projects. Results first, technology second.",
      cases: [
        {
          co: "Omie", yr: "2025",
          name: "Smart client to franchise allocation",
          metric: "100%", label: "of routing is now automated",
          desc: "The team used to match clients manually. I built a model that scores each client and crosses it with every franchise profile.",
          tags: ["Python", "Scikit-learn", "Databricks"],
        },
        {
          co: "Omie", yr: "2025",
          name: "Internal LLM chatbot",
          metric: "−400h", label: "per month searching the knowledge base",
          desc: "An agent that queries policies, processes and technical docs in natural language. Sped up onboarding across the team.",
          tags: ["LLMs", "RAG", "OpenAI"],
        },
        {
          co: "Jadlog", yr: "2023",
          name: "Commercial KPI ETL",
          metric: "12", label: "executive dashboards on one source of truth",
          desc: "Designed the commercial structure in Oracle and the Spark and Airflow pipelines feeding leadership's Power BI.",
          tags: ["PL/SQL", "Spark", "Airflow"],
        },
        {
          co: "Jadlog", yr: "2023",
          name: "Freight table automation",
          metric: "−60h", label: "per week of manual work",
          desc: "Scripts that format freight tables for VTEX, Intelipost and Loja Integrada. Killed recurring rework for good.",
          tags: ["Python", "Pandas"],
        },
        {
          co: "Filka Studio", yr: "2024",
          name: "Tailored Salesforce",
          metric: "2", label: "active clients on customized Sales Cloud",
          desc: "Sales Cloud implementations, Apex and Flows automations, API integrations and executive dashboards.",
          tags: ["Apex", "Flows", "LWC"],
        },
      ],
      filka: {
        kicker: "Studio, since 2022",
        title: "I co-founded Filka Studio to bring together two worlds that usually live apart.",
        body: "Code and digital design. We work with clients who need both, delivered together and done well. We don't sell off-the-shelf packages: we talk first, understand the problem, and only then propose the shortest path to results.",
        items: [
          "Tailored Salesforce",
          "Python automations",
          "Websites and landing pages",
          "Brand and visual identity",
          "Business Intelligence",
          "Consulting and discovery",
        ],
        cta: "Visit the Filka site",
      },
      terminalHint: "Type help to see the commands.",
    },
    stats: {
      heading: "A few numbers.",
      items: [
        { v: "+500h", l: "saved every month", n: "Python", c: "#3776AB", t: "#fff", s: "python" },
        { v: "20+", l: "solutions in production", n: "Databricks", c: "#FF3621", t: "#fff", s: "databricks" },
        { v: "5 years", l: "working with data", n: "AWS", c: "#FF9900", t: "#14110F", s: "amazonwebservices" },
        { v: "2", l: "clients at Filka", n: "Salesforce", c: "#00A1E0", t: "#fff", s: "salesforce" },
      ],
    },
    exp: {
      accent: "Destructuring",
      rest: "my work experience.",
      items: [
        {
          role: "Sr. Analytics Engineer", co: "Omie", period: "2026 to present",
          bullets: [
            "Building **applied AI** and data projects on **Databricks**",
            "**Machine Learning** models for allocation and scoring",
            "**LLM** and **RAG** agents over the internal knowledge base",
          ],
        },
        {
          role: "Mid Data Analyst", co: "Omie", period: "2024 to 2026",
          bullets: [
            "New challenge in **SaaS**, focused on product analytics",
            "Started exploring **ML** and **generative AI** inside the company",
          ],
        },
        {
          role: "Co-founder", co: "Filka Studio", period: "2022 to present",
          bullets: [
            "A **code and digital design** studio, founded in São Paulo",
            "**Salesforce** solutions, automations and **Business Intelligence**",
            "End to end client work, from discovery to handover",
          ],
        },
        {
          role: "Jr to Mid Data Analyst", co: "Jadlog", period: "2022 to 2024",
          bullets: [
            "Built the **ETLs** and the **commercial KPI** foundation",
            "**Spark** and **Airflow** pipelines feeding **Power BI**",
            "Modeling in **Oracle** and **PL/SQL** for the commercial team",
          ],
        },
        {
          role: "Apprentice, Back office", co: "Jadlog", period: "2021 to 2022",
          bullets: [
            "Started automating spreadsheets on my own, with **Python**",
            "That's where I found out data was what I wanted to do",
          ],
        },
      ],
    },
    quotes: {
      heading: "What people say about me.",
      items: [
        {
          q: "Outstanding professional. Unmatched commitment and professionalism. Every task assigned to him was delivered on time, with rich detail and refinement.",
          a: "Michele Lopes", r: "Commercial Coordinator, my manager at Jadlog",
        },
        {
          q: "No obstacle is too big for him in development. Always brings innovation and improvements, a surprising eye for process, frequently delivers more than expected. He was my right hand as dev and tech lead, impeccably reliable.",
          a: "Lorena Santos Andrade", r: "Product Owner, teammate at Jadlog",
        },
      ],
    },
    cta: {
      heading: "Want to chat?",
      sub: "Free initial diagnostic. In thirty minutes I walk away with the problem understood and a proposal in your inbox within three days.",
      b1: "Book 30 minutes",
      b2: "Send an email",
    },
    footer: { tag: "Data that turns into decisions." },
  },
};

window.V3.terminal = {
  pt: {
    boot: [
      "Portfolio OS v3.0 [Filipe Martins Edition]",
      "Carregando módulos ... ok",
      "Conectando ao Databricks ... ok",
      "Pronto.",
      "",
      'Digite "help" para ver os comandos disponíveis.',
    ],
    help: [
      "Comandos disponíveis:",
      "  whoami     quem eu sou",
      "  stack      tecnologias que eu uso",
      "  cases      projetos com resultado",
      "  exp        trajetória profissional",
      "  filka      sobre o meu estúdio",
      "  contact    como falar comigo",
      "  clear      limpa a tela",
    ],
    whoami: [
      "Filipe Martins",
      "Analytics Engineer Sênior na Omie, São Paulo, BR.",
      "Cofundador do Filka Studio desde 2022.",
      "Cinco anos transformando dados em decisão.",
    ],
    filka: [
      "Filka Studio, fundado em 2022.",
      "Programação e design digital no mesmo lugar.",
      "Salesforce, automações, sites, marca e BI.",
      "Site: filkastudio.com.br",
    ],
    contact: [
      "Email     fmartins.nascimento@outlook.com",
      "LinkedIn  linkedin.com/in/filipoow",
      "GitHub    github.com/filipoow",
      "Agenda    calendly.com/emaildofilipe-m/30min",
    ],
    notFound: (c) => `comando não encontrado: ${c}. Digite "help".`,
  },
  en: {
    boot: [
      "Portfolio OS v3.0 [Filipe Martins Edition]",
      "Loading modules ... ok",
      "Connecting to Databricks ... ok",
      "Ready.",
      "",
      'Type "help" to see the available commands.',
    ],
    help: [
      "Available commands:",
      "  whoami     who I am",
      "  stack      the tech I work with",
      "  cases      projects with results",
      "  exp        career track",
      "  filka      about my studio",
      "  contact    how to reach me",
      "  clear      clears the screen",
    ],
    whoami: [
      "Filipe Martins",
      "Senior Analytics Engineer at Omie, São Paulo, BR.",
      "Co-founder of Filka Studio since 2022.",
      "Five years turning data into decisions.",
    ],
    filka: [
      "Filka Studio, founded in 2022.",
      "Code and digital design in the same place.",
      "Salesforce, automations, websites, brand and BI.",
      "Site: filkastudio.com.br",
    ],
    contact: [
      "Email     fmartins.nascimento@outlook.com",
      "LinkedIn  linkedin.com/in/filipoow",
      "GitHub    github.com/filipoow",
      "Calendar  calendly.com/emaildofilipe-m/30min",
    ],
    notFound: (c) => `command not found: ${c}. Type "help".`,
  },
};

/* v4 hero copy — extends the shared V3 content */
window.V3.pt.h4 = {
  loc: "são paulo, brasil",
  lines: ["Construído para escalar.", "Desenhado para decidir."],
  strip: ["5 anos", "+500h/mês", "20+ soluções"],
  cta1: "Ver trabalho",
  cta2: "Vamos conversar",
  side: "dados · ml · ia generativa",
  axis: ["ATUALMENTE", "2021"],
  badge: { name: "Filipe Martins", role: "(Sr.) Analytics Engineer", pills: ["Omie", "Filka"] },
};
window.V3.en.h4 = {
  loc: "são paulo, brazil",
  lines: ["Engineered to scale.", "Designed to decide."],
  strip: ["5 years", "+500h/mo", "20+ solutions"],
  cta1: "See work",
  cta2: "Let's chat",
  side: "data · ml · generative ai",
  axis: ["PRESENT", "2021"],
  badge: { name: "Filipe Martins", role: "(Sr.) Analytics Engineer", pills: ["Omie", "Filka"] },
};
