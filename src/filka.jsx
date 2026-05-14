/* === FILKA — alinhado ao site_v3 (mesma identidade) === */

const FILKA_BG = window.D_BG;
const FILKA_SURF = window.D_SURF;
const FILKA_INK = window.D_INK;
const FILKA_MUTED = window.D_MUTED;
const FILKA_BORDER = window.D_BORDER;
const FILKA_SUBTLE = window.D_SUBTLE;
const FILKA_HIGHLIGHT = "#E8FF6C";
const FILKA_PAGE = { maxWidth: window.D_MAX_W, margin: "0 auto", padding: "0 32px" };

function FilkaHero({ lang }) {
  return (
    <section className="v3-page v3-section v3-hero" style={{ ...FILKA_PAGE, paddingTop: 64, paddingBottom: 24 }}>
      <div style={{ marginBottom: 28 }} className="v3-hero-desc">
        <window.D_PILL>
          {lang === "pt" ? "Estúdio · Fundado em 2022 · São Paulo, BR" : "Studio · Founded in 2022 · São Paulo, BR"}
        </window.D_PILL>
      </div>

      <h1 className="v3-hero-text v3-h1" style={{
        fontSize: "clamp(96px, 14vw, 184px)",
        lineHeight: 0.88,
        letterSpacing: "-0.055em",
        fontWeight: 400,
        margin: 0,
        fontFamily: "'Inter Tight', sans-serif",
      }}>
        Filka<br />Studio
      </h1>

      <div className="v3-hero-desc" style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: -70,
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ maxWidth: 320 }}>
          <div style={{
            fontSize: 13, fontWeight: 500,
            color: FILKA_MUTED, marginBottom: 6,
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            <span className="v3-pulse-dot" style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#3DB66E", display: "inline-block",
            }} />
            {lang === "pt" ? "Aceitando novos projetos" : "Taking new projects"}
          </div>
          <p style={{
            fontSize: 15, lineHeight: 1.5,
            color: FILKA_INK, margin: "4px 0 0",
            fontWeight: 400,
            textWrap: "pretty",
          }}>
            {lang === "pt"
              ? "Cofundei em 2022 para juntar dois mundos que normalmente vivem separados: programação e design digital."
              : "I co-founded it in 2022 to bring together two worlds that usually live apart: code and digital design."}
          </p>
        </div>
      </div>
    </section>
  );
}

function FilkaMetrics({ lang }) {
  const items = lang === "pt" ? [
    { value: "2022", label: "ano de fundação" },
    { value: "2", label: "clientes ativos em Salesforce" },
    { value: "10+", label: "áreas de atuação atendidas" },
    { value: "2–10", label: "pessoas no time" },
  ] : [
    { value: "2022", label: "founded" },
    { value: "2", label: "active Salesforce clients" },
    { value: "10+", label: "service areas covered" },
    { value: "2–10", label: "people on the team" },
  ];
  return (
    <section className="v3-page v3-section" style={{ ...FILKA_PAGE, paddingTop: 56, paddingBottom: 32 }}>
      <div className="v3-grid-cards-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {items.map((m, i) => (
          <div key={i} className="v3-card" style={{
            padding: "32px 28px",
            background: FILKA_SURF,
            border: `1px solid ${FILKA_BORDER}`,
            borderRadius: 18,
            cursor: "default",
          }}>
            <div style={{
              fontSize: 56, fontWeight: 400,
              letterSpacing: "-0.045em",
              color: FILKA_INK, lineHeight: 1,
            }}>{m.value}</div>
            <div style={{ fontSize: 14, color: FILKA_MUTED, marginTop: 10, lineHeight: 1.4 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FilkaServices({ lang }) {
  const services = lang === "pt" ? [
    { name: "Salesforce sob medida", desc: "Sales Cloud, automações em Apex e Flows, LWC, integrações via API e qualidade de dados no CRM." },
    { name: "Automações em Python", desc: "Scripts e integrações que eliminam trabalho manual recorrente. ETLs sob medida, robôs de dados e conectores entre sistemas." },
    { name: "Sites e Landing Pages", desc: "Sites institucionais, páginas de conversão e e-commerce. Webflow, código sob medida e integração com tracking." },
    { name: "Identidade visual e marca", desc: "Criação de marca, identidade visual, e-mail marketing e social media. Para empresas que querem se destacar." },
    { name: "Business Intelligence", desc: "Dashboards executivos, modelagem de dados e fontes de verdade. Da extração até a apresentação." },
    { name: "Consultoria e diagnóstico", desc: "Antes de construir, entendemos. Mapeamento de processos, levantamento técnico e plano de implementação." },
  ] : [
    { name: "Custom Salesforce", desc: "Sales Cloud, Apex and Flows automations, LWC, API integrations and CRM data quality." },
    { name: "Python automations", desc: "Scripts and integrations that eliminate recurring manual work. Tailored ETLs, data bots and system connectors." },
    { name: "Websites and Landing Pages", desc: "Corporate sites, conversion pages and e-commerce. Webflow, custom code and tracking integration." },
    { name: "Brand and visual identity", desc: "Brand creation, visual identity, email marketing and social media. For companies that want to stand out." },
    { name: "Business Intelligence", desc: "Executive dashboards, data modeling and sources of truth. From extraction to presentation." },
    { name: "Consulting and discovery", desc: "Before building, we understand. Process mapping, technical scoping and implementation plans." },
  ];
  return (
    <section className="v3-page v3-section" style={{ ...FILKA_PAGE, paddingTop: 64, paddingBottom: 64 }}>
      <div className="v3-grid-services-outer" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginBottom: 40, alignItems: "end" }}>
        <div>
          <div style={{ marginBottom: 20 }}>
            <window.D_PILL>{lang === "pt" ? "O que entregamos" : "What we ship"}</window.D_PILL>
          </div>
          <h2 style={{
            fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.03em",
            fontWeight: 400, margin: 0,
            textWrap: "balance",
          }}>
            {lang === "pt" ? "Onde código encontra design." : "Where code meets design."}
          </h2>
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: FILKA_MUTED, margin: 0, maxWidth: 460 }}>
          {lang === "pt"
            ? "Não vendemos pacote pronto. Conversamos primeiro, entendemos o problema, e só depois propomos o caminho mais curto até o resultado."
            : "We don't sell off-the-shelf packages. We talk first, understand the problem, and only then propose the shortest path to results."}
        </p>
      </div>

      <div className="v3-grid-cards-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {services.map((s, i) => <FilkaServiceCard key={i} s={s} />)}
      </div>
    </section>
  );
}

function FilkaServiceCard({ s }) {
  const [hover, setHover] = React.useState(false);
  const dark = hover;
  return (
    <div
      className="v3-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: dark ? FILKA_INK : FILKA_SURF,
        color: dark ? "#fff" : FILKA_INK,
        border: dark ? "1px solid transparent" : `1px solid ${FILKA_BORDER}`,
        borderRadius: 18,
        padding: 26,
        display: "flex", flexDirection: "column", gap: 12,
        minHeight: 220,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Padrão sutil — aparece no hover */}
      <svg style={{
        position: "absolute",
        right: -40, top: -10,
        opacity: dark ? 0.22 : 0,
        transition: "opacity 0.35s ease",
        pointerEvents: "none",
      }} width="240" height="240" viewBox="0 0 240 240" fill="none">
        <circle cx="170" cy="60" r="58" stroke="white" strokeWidth="0.8" />
        <circle cx="170" cy="60" r="84" stroke="white" strokeWidth="0.8" />
        <circle cx="170" cy="60" r="112" stroke="white" strokeWidth="0.8" />
      </svg>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", position: "relative" }}>
        <h3 style={{
          fontSize: 22, fontWeight: 500, margin: 0,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          maxWidth: 220,
        }}>{s.name}</h3>
        <span className="v3-arrow v3-arrow-up" style={{
          width: 34, height: 34, borderRadius: "50%",
          background: dark ? "#fff" : "transparent",
          border: dark ? "1px solid transparent" : `1px solid ${FILKA_BORDER}`,
          color: FILKA_INK,
          display: "grid", placeItems: "center",
          fontSize: 14, fontWeight: 400,
          flexShrink: 0,
        }}>↗</span>
      </div>
      <p style={{
        fontSize: 13.5, lineHeight: 1.55,
        color: dark ? "rgba(255,255,255,0.72)" : FILKA_MUTED, margin: 0,
        flex: 1,
        position: "relative",
        transition: "color 0.28s ease",
      }}>{s.desc}</p>
    </div>
  );
}

function FilkaApproach({ lang }) {
  const steps = lang === "pt" ? [
    { n: "01", title: "Diagnóstico", desc: "Entendemos o problema antes da solução. Conversa, escuta e mapeamento." },
    { n: "02", title: "Proposta com 3 caminhos", desc: "MVP, recomendado e completo. Você escolhe escopo, prazo e investimento." },
    { n: "03", title: "Execução enxuta", desc: "Sprints curtas, entrega contínua, sem dependência cega. Você acompanha em tempo real." },
    { n: "04", title: "Handover e cuidado", desc: "Documentação, treinamento e suporte pós-entrega. Não sumimos quando o projeto acaba." },
  ] : [
    { n: "01", title: "Discovery", desc: "We understand the problem before the solution. Conversation, listening and mapping." },
    { n: "02", title: "3-path proposal", desc: "MVP, recommended and full. You choose scope, timeline and investment." },
    { n: "03", title: "Lean execution", desc: "Short sprints, continuous delivery, no blind dependency. You follow in real time." },
    { n: "04", title: "Handover and care", desc: "Documentation, training and post-delivery support. We don't disappear when projects end." },
  ];
  return (
    <section style={{ background: FILKA_SUBTLE, marginTop: 16 }}>
      <div className="v3-page" style={{ ...FILKA_PAGE, paddingTop: 64, paddingBottom: 64 }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ marginBottom: 18 }}>
            <window.D_PILL>{lang === "pt" ? "Como trabalhamos" : "How we work"}</window.D_PILL>
          </div>
          <h2 style={{
            fontSize: 40, lineHeight: 1.05, letterSpacing: "-0.03em",
            fontWeight: 400, margin: 0, maxWidth: 720,
            textWrap: "balance",
          }}>
            {lang === "pt"
              ? "Processo claro. Sem promessa que não cabe no prazo."
              : "Clear process. No promises that don't fit the timeline."}
          </h2>
        </div>
        <div className="v3-grid-cards-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {steps.map((s, i) => (
            <div key={i} className="v3-card" style={{
              padding: 26,
              background: FILKA_SURF,
              border: `1px solid ${FILKA_BORDER}`,
              borderRadius: 18,
              display: "flex", flexDirection: "column", gap: 12,
              minHeight: 200,
              cursor: "default",
            }}>
              <div style={{
                fontSize: 13, fontWeight: 600,
                color: FILKA_MUTED,
                letterSpacing: "0.04em",
              }}>{s.n}</div>
              <h3 style={{
                fontSize: 22, fontWeight: 500,
                letterSpacing: "-0.02em",
                margin: 0,
              }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: FILKA_MUTED, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilkaCTA({ lang }) {
  return (
    <section className="v3-contact-dark" style={{
      background: FILKA_INK,
      color: "#fff",
      marginTop: 24,
    }}>
      <div className="v3-page" style={{ ...FILKA_PAGE, paddingTop: 96, paddingBottom: 56 }}>
        <div className="v3-grid-contact" style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 56,
          alignItems: "end",
        }}>
          <div>
            <div style={{
              fontSize: 13, fontWeight: 500,
              color: "rgba(255,255,255,0.55)",
              marginBottom: 16,
            }}>{lang === "pt" ? "Portfólio" : "Portfolio"}</div>
            <h2 className="v3-h2-cta" style={{
              fontSize: "clamp(56px, 8vw, 96px)",
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
              fontWeight: 400,
              margin: 0,
              maxWidth: 720,
              textWrap: "balance",
            }}>
              {lang === "pt" ? "Veja todos os projetos da Filka." : "See all Filka projects."}
            </h2>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a href={window.SITE_LINKS.filka} target="_blank" className="v3-cta-pill" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "16px 26px 16px 18px",
              background: "linear-gradient(135deg, #2A2A26, #0E0E0C)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 14, fontWeight: 500,
              whiteSpace: "nowrap",
            }}>
              <span className="v3-arrow v3-arrow-right" style={{
                width: 26, height: 26, borderRadius: "50%",
                background: FILKA_HIGHLIGHT, color: FILKA_INK,
                display: "grid", placeItems: "center",
                fontSize: 13,
              }}>↗</span>
              {lang === "pt" ? "Ver no Behance" : "View on Behance"}
            </a>
          </div>
        </div>

        <p style={{
          fontSize: 16, lineHeight: 1.55,
          color: "rgba(255,255,255,0.7)",
          margin: "32px 0 0", maxWidth: 540,
          textWrap: "pretty",
        }}>
          {lang === "pt"
            ? "Cases completos com processo, telas, branding e detalhes técnicos. Hospedados no Behance."
            : "Full cases with process, screens, branding and technical details. Hosted on Behance."}
        </p>
      </div>
    </section>
  );
}

function FilkaSite() {
  const [lang, setLang] = React.useState("pt");
  const t = window.SITE_CONTENT[lang];
  const Reveal = window.V3Reveal;
  const GlobalStyles = window.V3GlobalStyles;
  return (
    <div style={window.dStyles.root}>
      <GlobalStyles />
      <window.DNav lang={lang} setLang={setLang} t={t} current="filka" />
      <FilkaHero lang={lang} />
      <Reveal><FilkaMetrics lang={lang} /></Reveal>
      <Reveal><FilkaServices lang={lang} /></Reveal>
      <Reveal><FilkaApproach lang={lang} /></Reveal>
      <Reveal><FilkaCTA lang={lang} /></Reveal>
      <window.DFooter t={t} />
    </div>
  );
}

window.FilkaSite = FilkaSite;
