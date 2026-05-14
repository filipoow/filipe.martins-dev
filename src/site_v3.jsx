/* === SITE v3 — inspirado na referência Duwy, mantendo conteúdo Filipe Martins === */

const BG = "#FFFFFF"; // branco puro como a referência
const SURF = "#FFFFFF";
const INK = "#0E0E0C";
const MUTED = "#6B6B66";
const SUBTLE = "#F5F3EE"; // cinza claro warm para seções alternadas (referência)
const BORDER = "rgba(14,14,12,0.10)";
const SUBTLE_BORDER = "rgba(14,14,12,0.06)";

const MAX_W = 1440; // largura máxima maior—mais próximo da referência

/* ---------- GLOBAL ANIMATION STYLES ---------- */
function V3GlobalStyles() {
  return (
    <style>{`
      @keyframes v3FadeUp {
        from { opacity: 0; transform: translate3d(0, 28px, 0); }
        to   { opacity: 1; transform: translate3d(0, 0, 0); }
      }
      @keyframes v3FadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes v3HeroIn {
        from { opacity: 0; transform: translate3d(0, 40px, 0); letter-spacing: -0.045em; }
        to   { opacity: 1; transform: translate3d(0, 0, 0); letter-spacing: -0.055em; }
      }
      @keyframes v3Float {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50%      { transform: translate3d(0, -8px, 0); }
      }
      @keyframes v3Pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50%      { transform: scale(1.35); opacity: 0.4; }
      }
      @keyframes v3scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      .v3-reveal {
        opacity: 0;
        transform: translate3d(0, 28px, 0);
        transition: opacity 0.7s cubic-bezier(0.2, 0.7, 0.2, 1),
                    transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
        will-change: opacity, transform;
      }
      .v3-reveal.v3-in {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      .v3-hero-text { animation: v3HeroIn 1s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
      .v3-hero-image { animation: v3FadeIn 1.2s ease both 0.2s; }
      .v3-hero-image-inner { animation: v3Float 7s ease-in-out infinite; }
      .v3-hero-desc { animation: v3FadeUp 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both 0.5s; }
      .v3-card { transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.35s ease, border-color 0.35s ease, background-color 0.3s ease, color 0.3s ease; }
      .v3-card:hover { transform: translate3d(0, -6px, 0); box-shadow: 0 18px 40px -18px rgba(14,14,12,0.18); }
      .v3-arrow { display: inline-block; transition: transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1); }
      .v3-card:hover .v3-arrow-up { transform: translate3d(3px, -3px, 0); }
      .v3-card:hover .v3-arrow-right { transform: translate3d(4px, 0, 0); }
      .v3-link { position: relative; transition: color 0.2s; }
      .v3-link::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -4px;
        height: 1px; background: currentColor; transform: scaleX(0); transform-origin: right center;
        transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1);
      }
      .v3-link:hover { color: ${INK}; }
      .v3-link:hover::after { transform: scaleX(1); transform-origin: left center; }
      .v3-btn { transition: transform 0.2s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease; }
      .v3-btn:hover { transform: translate3d(0, -1px, 0); }
      .v3-btn:active { transform: translate3d(0, 1px, 0); transition: transform 0.08s; }
      .v3-pulse-dot { animation: v3Pulse 2s ease-in-out infinite; }
      .v3-cta-pill { transition: transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1), background 0.25s; }
      .v3-cta-pill:hover { transform: translate3d(-2px, 0, 0); }
      .v3-cta-pill:hover .v3-arrow-right { transform: translate3d(6px, 0, 0); }
      .v3-trust-pill { transition: transform 0.25s ease, background 0.25s, border-color 0.25s; }
      .v3-trust-strip:hover .v3-trust-track { animation-play-state: paused; }
      .v3-trust-pill:hover { transform: translate3d(0, -2px, 0); background: ${INK}; color: #fff; border-color: ${INK}; }
      .v3-trust-pill:hover > span:first-child { background: #fff; }

      /* === Responsive: tablet (1024px and below) === */
      @media (max-width: 1024px) {
        .v3-grid-services-outer { grid-template-columns: 1fr !important; gap: 32px !important; }
        .v3-grid-about { grid-template-columns: 1fr !important; gap: 32px !important; }
        .v3-grid-about-inner { grid-template-columns: 1fr !important; gap: 16px !important; }
        .v3-grid-contact { grid-template-columns: 1fr !important; gap: 32px !important; align-items: flex-start !important; }
        .v3-grid-filka-strip { grid-template-columns: 1fr !important; gap: 24px !important; }
        .v3-grid-footer { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
        .v3-grid-section-header { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
        .v3-h1 { font-size: clamp(72px, 12vw, 128px) !important; }
        .v3-h2-display { font-size: clamp(40px, 5vw, 64px) !important; }
        .v3-h2-cta { font-size: clamp(48px, 7vw, 80px) !important; }
      }

      /* === Responsive: mobile (720px and below) === */
      @media (max-width: 720px) {
        .v3-page { padding: 0 20px !important; }
        .v3-nav-center { display: none !important; }
        .v3-nav-grid { grid-template-columns: 1fr auto !important; gap: 12px !important; padding-left: 20px !important; padding-right: 20px !important; }
        .v3-cta-nav { padding: 8px 16px !important; min-width: 0 !important; font-size: 13px !important; }
        .v3-hero { padding-top: 32px !important; padding-bottom: 16px !important; }
        .v3-hero-image-wrap { justify-content: flex-start !important; margin-bottom: 16px !important; }
        .v3-hero-image-inner { width: 140px !important; height: 100px !important; }
        .v3-hero-desc { margin-top: 20px !important; justify-content: flex-start !important; }
        .v3-h1 { font-size: clamp(56px, 16vw, 80px) !important; line-height: 0.92 !important; }
        .v3-h2-display { font-size: 28px !important; }
        .v3-h2-cta { font-size: 44px !important; }
        .v3-grid-cards-2 { grid-template-columns: 1fr !important; }
        .v3-grid-cards-3 { grid-template-columns: 1fr !important; }
        .v3-grid-cards-4 { grid-template-columns: 1fr 1fr !important; }
        .v3-grid-footer { grid-template-columns: 1fr !important; }
        .v3-exp-row { grid-template-columns: 1fr !important; gap: 8px !important; padding: 18px 16px !important; margin: 0 -16px !important; }
        .v3-exp-row > div:last-child { text-align: left !important; font-size: 18px !important; }
        .v3-testimonial-card { padding: 56px 24px 36px !important; }
        .v3-testimonial-text { font-size: 18px !important; }
        .v3-filka-tag { padding: 12px 18px !important; font-size: 22px !important; }
        .v3-contact-dark { padding-top: 64px !important; padding-bottom: 32px !important; }
        .v3-section { padding-top: 48px !important; padding-bottom: 48px !important; }
        .v3-about-stats { font-size: 56px !important; }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>);

}

/* ---------- useInView hook for scroll reveals ---------- */
function useInView(threshold = 0.15) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current || inView) return;
    const el = ref.current;

    let observer = null;
    let scrollHandler = null;
    let fallbackTimer = null;

    const cleanup = () => {
      if (observer) observer.disconnect();
      if (scrollHandler) {
        window.removeEventListener("scroll", scrollHandler, true);
        window.removeEventListener("resize", scrollHandler);
      }
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };

    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92 && r.bottom > 0) {
        setInView(true);
        cleanup();
      }
    };

    // Prefer IntersectionObserver
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) { setInView(true); cleanup(); }
          });
        },
        { threshold, rootMargin: "0px 0px -8% 0px" }
      );
      observer.observe(el);
    }

    // Belt-and-suspenders: also listen to scroll/resize and check now
    scrollHandler = check;
    window.addEventListener("scroll", scrollHandler, true);
    window.addEventListener("resize", scrollHandler);
    requestAnimationFrame(check);

    // Last resort: never leave content hidden — force-reveal after 1.5s
    fallbackTimer = setTimeout(() => { setInView(true); cleanup(); }, 1500);

    return cleanup;
  }, [inView, threshold]);
  return [ref, inView];
}

function Reveal({ children, delay = 0, as: Tag = "div", style, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={"v3-reveal" + (inView ? " v3-in" : "")}
      style={{ transitionDelay: delay + "ms", ...style }}
      {...rest}>
      
      {children}
    </Tag>);

}

const v3Styles = {
  root: {
    fontFamily: "'Inter Tight', 'Helvetica Neue', sans-serif",
    background: BG,
    color: INK,
    width: "100%",
    minHeight: "100%",
    overflow: "hidden"
  },
  page: {
    maxWidth: MAX_W,
    margin: "0 auto",
    padding: "0 32px"
  }
};

/* ---------- LOGO MARK ---------- */
function V3Logo({ dark = false, size = 32 }) {
  // Mark: rounded square with geometric "F" + accent dot
  // dark=true → light bg with dark F (for use on dark backgrounds)
  // dark=false → dark bg with light F (default)
  const bg = dark ? "#fff" : INK;
  const fg = dark ? INK : "#fff";
  const accent = "#E8FF6C"; // lime accent
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 32 32" fill="none"
      style={{ flexShrink: 0, display: "block" }}
      aria-label="Filipe Martins logo"
    >
      <rect x="0" y="0" width="32" height="32" rx="8" fill={bg} />
      {/* Vertical stem */}
      <rect x="8.5" y="7.5" width="3" height="17" rx="1" fill={fg} />
      {/* Top horizontal */}
      <rect x="8.5" y="7.5" width="13" height="3" rx="1" fill={fg} />
      {/* Middle horizontal */}
      <rect x="8.5" y="14" width="9" height="3" rx="1" fill={fg} />
      {/* Accent dot — hint at data/precision */}
      <circle cx="23" cy="23" r="2" fill={accent} />
    </svg>
  );
}

/* ---------- Pill ---------- */
function V3Pill({ children, dark = false }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "8px 18px",
      background: dark ? INK : SURF,
      color: dark ? "#fff" : INK,
      border: dark ? "none" : `1px solid ${BORDER}`,
      borderRadius: 999,
      fontSize: 13, fontWeight: 500,
      letterSpacing: "-0.005em",
      whiteSpace: "nowrap"
    }}>{children}</span>);

}

/* ---------- NAV — logo left, centered text links, outlined CTA right ---------- */
function V3Nav({ lang, setLang, t, current = "home" }) {
  const items = [
  { key: "filipe", label: t.nav.work, href: current === "filka" ? "./" : "#top" },
  { key: "filka", label: t.nav.filka, href: "filka.html" },
  { key: "about", label: t.nav.about, href: current === "filka" ? "./#about" : "#about" },
  { key: "contact", label: t.nav.contact, href: current === "filka" ? "./#contact" : "#contact" }];


  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: `${BG}d8`,
      backdropFilter: "blur(12px)",
    }}>
      <div style={{
        maxWidth: MAX_W,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "20px 32px",
        gap: 24, lineHeight: "1"
      }}>
        {/* Logo */}
        <a href="./" style={{
          display: "flex", alignItems: "center", gap: 10,
          textDecoration: "none", color: INK,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
          <V3Logo dark={false} />
          <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-0.015em", whiteSpace: "nowrap" }}>
            Filipe Martins
          </span>
        </a>

        {/* Centered text links — sem fundo pill, igual referência */}
        <div className="v3-nav-center" style={{
          display: "flex", gap: 36, alignItems: "center",
          justifyContent: "center"
        }}>
          {items.map((it) => {
            const active =
            current === "home" && it.key === "filipe" ||
            current === "filka" && it.key === "filka";
            return (
              <a key={it.key} href={it.href} className="v3-link" style={{
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "-0.005em",
                color: active ? INK : MUTED,
                whiteSpace: "nowrap"
              }}>{it.label}</a>);

          })}
        </div>

        {/* CTA outlined + lang */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, alignItems: "center" }}>
          <div style={{
            display: "flex",
            position: "relative",
            border: `1px solid ${BORDER}`,
            borderRadius: 999,
            padding: 3,
            background: SURF
          }}>
            {/* Sliding indicator */}
            <span style={{
              position: "absolute",
              top: 3, left: 3,
              width: "calc(50% - 3px)",
              height: "calc(100% - 6px)",
              background: INK,
              borderRadius: 999,
              transform: lang === "en" ? "translateX(100%)" : "translateX(0)",
              transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 0
            }} />
            {["pt", "en"].map((l) =>
            <button
              key={l}
              onClick={() => setLang(l)}
              className="v3-btn"
              style={{
                position: "relative", zIndex: 1,
                padding: "5px 14px", border: "none",
                background: "transparent",
                color: lang === l ? "#fff" : INK,
                fontFamily: "inherit", fontSize: 12, cursor: "pointer",
                borderRadius: 999, fontWeight: 600,
                letterSpacing: "0.02em",
                transition: "color 0.3s ease 0.1s",
                minWidth: 36
              }}>{l.toUpperCase()}</button>
            )}
          </div>
          <a href={window.SITE_LINKS.calendly} target="_blank" className="v3-btn v3-cta-nav" style={{
            color: INK,
            padding: "10px 24px",
            border: `1px solid ${INK}`,
            borderRadius: 999,
            textDecoration: "none",
            fontSize: 14, fontWeight: 500,
            letterSpacing: "-0.005em",
            whiteSpace: "nowrap",
            background: "transparent",
            minWidth: 170,
            textAlign: "center"
          }}
          onMouseEnter={(e) => {e.currentTarget.style.background = INK;e.currentTarget.style.color = "#fff";}}
          onMouseLeave={(e) => {e.currentTarget.style.background = "transparent";e.currentTarget.style.color = INK;}}>
            {t.hero.cta}</a>
        </div>
      </div>
    </nav>);

}

/* ---------- HERO — título massivo à esquerda, card foto top-right pequeno ---------- */
function V3Hero({ t }) {
  return (
    <section id="top" className="v3-page v3-section v3-hero" style={{ ...v3Styles.page, paddingTop: 64, paddingBottom: 24 }}>
      {/* Linha do topo: image card no canto direito */}
      <div className="v3-hero-image v3-hero-image-wrap" style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: -20
      }}>
        <div className="v3-hero-image-inner" style={{
          width: 240, height: 170,
          background: `url('assets/filipe.jpg') center/cover`,
          borderRadius: 18,
          filter: "saturate(0.94) contrast(1.02)"
        }} />
      </div>

      {/* Título massivo */}
      <h1 className="v3-hero-text v3-h1" style={{
        fontSize: "clamp(96px, 14vw, 184px)",
        lineHeight: 0.88,
        letterSpacing: "-0.055em",
        fontWeight: 400,
        margin: 0,
        fontFamily: "'Inter Tight', sans-serif"
      }}>
        {t.hero.role1}<br />{t.hero.role2}
      </h1>

      {/* Descrição alinhada à direita */}
      <div className="v3-hero-desc" style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: -90,
        position: "relative",
        zIndex: 1
      }}>
        <div style={{ maxWidth: 280, textAlign: "left" }}>
          <div style={{
            fontSize: 13, fontWeight: 500,
            color: MUTED, marginBottom: 6,
            display: "inline-flex", alignItems: "center", gap: 8
          }}>
            <span className="v3-pulse-dot" style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#3DB66E", display: "inline-block"
            }} />
            {t.hero.eyebrow}
          </div>
          <p style={{
            fontSize: 15, lineHeight: 1.5,
            color: INK, margin: "4px 0 0",
            fontWeight: 400,
            textWrap: "pretty"
          }}>
            {t.hero.subtitle}
          </p>
        </div>
      </div>
    </section>);

}

/* ---------- TRUST STRIP — pills com scroll infinito ---------- */
function V3TrustStrip({ t }) {
  const items = [...t.trust.items, ...t.trust.items]; // duplicar para loop
  return (
    <section className="v3-trust-strip v3-page v3-section" style={{ ...v3Styles.page, paddingTop: 56, paddingBottom: 56, overflow: "hidden" }}>
      <div className="v3-trust-track" style={{
        display: "flex",
        gap: 12,
        animation: "v3scroll 40s linear infinite",
        width: "max-content"
      }}>
        {items.map((name, i) =>
        <div key={i} className="v3-trust-pill" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "12px 22px",
          background: SURF,
          border: `1px solid ${BORDER}`,
          borderRadius: 999,
          fontSize: 16, fontWeight: 500,
          letterSpacing: "-0.015em",
          whiteSpace: "nowrap",
          color: INK,
          cursor: "default"
        }}>
            <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: INK, opacity: 0.85,
            transition: "background 0.25s"
          }} />
            {name}
          </div>
        )}
      </div>
    </section>);

}

/* ---------- ABOUT ART — visualização abstrata do trabalho ---------- */
function V3AboutArt() {
  return (
    <div style={{
      position: "relative",
      aspectRatio: "16 / 10",
      background: INK,
      borderRadius: 18,
      overflow: "hidden",
      padding: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      {/* topo: linha mono com terminal-style */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: "rgba(255,255,255,0.5)"
      }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E8FF6C" }} />
        <span>pipeline.run() — live</span>
      </div>

      {/* Visualização SVG: gráfico de linhas + barras + nodes */}
      <svg viewBox="0 0 400 180" style={{
        position: "absolute",
        left: 0, right: 0, top: "50%",
        transform: "translateY(-50%)",
        width: "100%",
        height: "70%"
      }}>
        {/* grid */}
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="none">
          {[0, 1, 2, 3, 4].map((i) =>
          <line key={i} x1="20" y1={20 + i * 35} x2="380" y2={20 + i * 35} />
          )}
        </g>

        {/* linha de fundo cinza (baseline) */}
        <path d="M20 130 Q70 125, 110 115 T200 95 T290 80 T380 60"
        stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" strokeDasharray="3 4" />

        {/* linha destacada (resultado) */}
        <path d="M20 140 Q70 120, 110 100 T200 70 T290 45 T380 25"
        stroke="#E8FF6C" strokeWidth="2.5" fill="none" />

        {/* pontos nos vértices */}
        <g fill="#E8FF6C">
          <circle cx="20" cy="140" r="3.5" />
          <circle cx="110" cy="100" r="3.5" />
          <circle cx="200" cy="70" r="3.5" />
          <circle cx="290" cy="45" r="3.5" />
          <circle cx="380" cy="25" r="4.5" stroke="#E8FF6C" strokeWidth="6" strokeOpacity="0.25" />
        </g>

        {/* barras na base */}
        <g fill="rgba(255,255,255,0.15)">
          {[20, 56, 92, 128, 164, 200, 236, 272, 308, 344].map((x, i) =>
          <rect key={i} x={x} y={155 - (i * 1.6 + 4)} width="14" height={i * 1.6 + 4} rx="1.5" />
          )}
        </g>
      </svg>

      {/* footer: tags + valor */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", justifyContent: "space-between", alignItems: "end"
      }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["Databricks", "LLMs", "Python", "AWS"].map((tag) =>
          <span key={tag} style={{
            fontSize: 11.5, padding: "5px 11px",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            borderRadius: 999, fontWeight: 500,
            fontFamily: "'JetBrains Mono', monospace"
          }}>{tag}</span>
          )}
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "rgba(255,255,255,0.5)",
          textAlign: "right"
        }}>
          <div style={{ color: "#E8FF6C" }}>+34.2%</div>
          <div>vs. baseline</div>
        </div>
      </div>
    </div>);

}

/* ---------- ABOUT ---------- */
function V3About({ t }) {
  return (
    <section id="about" className="v3-page v3-section" style={{ ...v3Styles.page, paddingTop: 64, paddingBottom: 64 }}>
      <div style={{ marginBottom: 24 }}>
        <V3Pill>{t.about.eyebrow}</V3Pill>
      </div>

      <div className="v3-grid-about" style={{
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: 80,
        alignItems: "start"
      }}>
        <h2 className="v3-h2-display" style={{
          fontSize: 44,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          fontWeight: 400,
          margin: 0,
          maxWidth: 640,
          textWrap: "balance"
        }}>{t.about.title}</h2>

        <p style={{
          fontSize: 15, lineHeight: 1.55,
          color: MUTED, margin: 0,
          maxWidth: 360,
          textWrap: "pretty"
        }}>{t.about.body}</p>
      </div>

      <div className="v3-grid-about-inner" style={{
        marginTop: 48,
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 32,
        alignItems: "stretch"
      }}>
        {/* Card visual: visualização abstrata do trabalho (dados + ML + agentes) */}
        <V3AboutArt />
        

        {/* Stats — números grandes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {t.about.stats.map((s, i) =>
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{
              fontSize: 72, fontWeight: 400,
              letterSpacing: "-0.045em",
              lineHeight: 1,
              color: INK
            }}>{s.value}</div>
              <div style={{ fontSize: 14, color: MUTED, marginTop: 10, lineHeight: 1.4, maxWidth: 280 }}>
                {s.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- SERVICES — 2x2 com card dark e padrão sutil ---------- */
function V3Services({ t }) {
  return (
    <section id="services" className="v3-page v3-section" style={{ ...v3Styles.page, paddingTop: 32, paddingBottom: 64 }}>
      <div className="v3-grid-services-outer" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.6fr",
        gap: 56,
        alignItems: "start"
      }}>
        {/* Sidebar título */}
        <div>
          <div style={{ marginBottom: 20 }}>
            <V3Pill>{t.services.eyebrow}</V3Pill>
          </div>
          <h2 className="v3-h2-display" style={{ fontSize: 40, lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 400, margin: 0, textWrap: "balance" }}>{t.services.title}</h2>
          <p style={{
            fontSize: 15, lineHeight: 1.55,
            color: MUTED, margin: "16px 0 28px",
            maxWidth: 320
          }}>{t.services.subtitle}</p>
          <a href={window.SITE_LINKS.calendly} target="_blank" className="v3-btn v3-cta-pill" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: INK, color: "#fff",
            padding: "12px 22px", borderRadius: 999,
            fontSize: 14, fontWeight: 500,
            textDecoration: "none"
          }}>{t.hero.cta} <span className="v3-arrow v3-arrow-right">→</span></a>
        </div>

        {/* Grid 2x2 */}
        <div className="v3-grid-cards-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {t.services.items.map((s, i) =>
          <V3ServiceCard key={i} s={s} />
          )}
        </div>
      </div>
    </section>);

}

function V3ServiceCard({ s }) {
  const [hover, setHover] = React.useState(false);
  const dark = hover;
  return (
    <div
      className="v3-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: dark ? INK : SURF,
        color: dark ? "#fff" : INK,
        border: dark ? "1px solid transparent" : `1px solid ${BORDER}`,
        borderRadius: 18,
        padding: 26,
        display: "flex", flexDirection: "column", gap: 12,
        minHeight: 220,
        overflow: "hidden",
        cursor: "pointer"
      }}>
      
      {/* Padrão de círculos — fade in no hover */}
      <svg style={{
        position: "absolute",
        right: -40, top: -10,
        opacity: dark ? 0.22 : 0,
        transition: "opacity 0.35s ease",
        pointerEvents: "none"
      }} width="240" height="240" viewBox="0 0 240 240" fill="none">
        <circle cx="170" cy="60" r="58" stroke="white" strokeWidth="0.8" />
        <circle cx="170" cy="60" r="84" stroke="white" strokeWidth="0.8" />
        <circle cx="170" cy="60" r="112" stroke="white" strokeWidth="0.8" />
      </svg>

      <h3 style={{
        fontSize: 22, fontWeight: 500, margin: 0,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        maxWidth: 220,
        position: "relative"
      }}>{s.name}</h3>
      <p style={{
        fontSize: 13.5, lineHeight: 1.55,
        color: dark ? "rgba(255,255,255,0.72)" : MUTED, margin: 0,
        flex: 1,
        maxWidth: 280,
        transition: "color 0.28s ease",
        position: "relative"
      }}>{s.desc}</p>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "end",
        marginTop: 8,
        position: "relative"
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, maxWidth: "75%" }}>
          {s.tags.slice(0, 3).map((tg) =>
          <span key={tg} style={{
            fontSize: 11.5, padding: "4px 10px",
            background: dark ? "rgba(255,255,255,0.12)" : SUBTLE,
            color: dark ? "#fff" : INK,
            borderRadius: 999,
            fontWeight: 500,
            whiteSpace: "nowrap",
            transition: "background 0.28s ease, color 0.28s ease"
          }}>{tg}</span>
          )}
        </div>
        <span className="v3-arrow v3-arrow-up" style={{
          width: 34, height: 34, borderRadius: "50%",
          background: dark ? "#fff" : "transparent",
          border: dark ? "1px solid transparent" : `1px solid ${BORDER}`,
          color: INK,
          display: "grid", placeItems: "center",
          fontSize: 14, fontWeight: 400,
          flexShrink: 0
        }}>↗</span>
      </div>
    </div>);

}

/* ---------- EXPERIENCE — table style com row highlight ---------- */
function V3Experience({ t }) {
  const [hover, setHover] = React.useState(null);
  return (
    <section style={{ background: SUBTLE, marginTop: 16 }}>
      <div className="v3-page" style={{ ...v3Styles.page, paddingTop: 64, paddingBottom: 64 }}>
      <div className="v3-grid-section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 32, gap: 48 }}>
        <div>
          <div style={{ marginBottom: 18 }}>
            <V3Pill>{t.experience.eyebrow}</V3Pill>
          </div>
          <h2 className="v3-h2-display" style={{ fontSize: 40, lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 400, margin: 0, maxWidth: 560, textWrap: "balance" }}>{t.experience.title}</h2>
        </div>
        <p style={{
            fontSize: 14, lineHeight: 1.55,
            color: MUTED, margin: 0,
            maxWidth: 280
          }}>{t.experience.subtitle}</p>
      </div>

      <div style={{
          background: "transparent",
          border: "none",
          borderRadius: 0,
          overflow: "hidden"
        }}>
        {t.experience.items.slice().reverse().map((item, i) => {
            const isHover = hover === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              className="v3-exp-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1.3fr 1.4fr 160px",
                  gap: 32, alignItems: "center",
                  padding: "26px 32px",
                  margin: "0 -32px",
                  borderTop: `1px solid ${SUBTLE_BORDER}`,
                  background: isHover ? "#E9E6DE" : "transparent",
                  cursor: "default",
                  transition: "background 0.18s",
                  position: "relative"
                }}>
                
              <div>
                <div style={{
                    fontSize: 18, fontWeight: 600,
                    letterSpacing: "-0.015em"
                  }}>{item.role}</div>
                <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>
                  {item.company}
                </div>
              </div>
              <div style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.5 }}>
                {item.desc}
              </div>
              <div style={{
                  fontSize: 22, fontWeight: 400,
                  letterSpacing: "-0.02em",
                  textAlign: "right",
                  color: INK
                }}>{item.period}</div>
            </div>);

          })}
      </div>
      </div>
    </section>);

}

/* ---------- PORTFOLIO IMAGE GRID — 3x2 mockups ---------- */
function V3Portfolio({ t }) {
  // Placeholders monocromáticos para projetos — texto explica o que é
  const projects = t.cases.items.slice(0, 6);

  // Garantir 6 slots
  while (projects.length < 6) projects.push(projects[projects.length - 1]);

  return (
    <section id="work" className="v3-page v3-section" style={{ ...v3Styles.page, paddingTop: 32, paddingBottom: 64 }}>
      <div className="v3-grid-section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 32, gap: 48 }}>
        <div>
          <div style={{ marginBottom: 18 }}>
            <V3Pill>{t.cases.eyebrow}</V3Pill>
          </div>
          <h2 className="v3-h2-display" style={{ fontSize: 40, lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 400, margin: 0, maxWidth: 560, textWrap: "balance" }}>{t.cases.title}</h2>
        </div>
        <p style={{ fontSize: 14, color: MUTED, margin: 0, maxWidth: 280 }}>
          {t.cases.subtitle}
        </p>
      </div>

      <div className="v3-grid-cards-3" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 14
      }}>
        {projects.slice(0, 6).map((c, i) =>
        <V3ProjectCard key={i} c={c} variant={i} />
        )}
      </div>
    </section>);

}

function V3ProjectCard({ c, variant }) {
  // Estilos visuais variando por variant — sem inventar imagens
  const palettes = [
  { bg: "#E8E5DE", ink: "#0E0E0C" },
  { bg: "#0E0E0C", ink: "#F4F2EE" },
  { bg: "#DCD8CF", ink: "#0E0E0C" },
  { bg: "#F0EDE6", ink: "#0E0E0C" },
  { bg: "#1A1A18", ink: "#F4F2EE" },
  { bg: "#E2DED5", ink: "#0E0E0C" }];

  const p = palettes[variant % palettes.length];

  return (
    <div className="v3-card" style={{
      borderRadius: 18,
      overflow: "hidden",
      background: p.bg,
      color: p.ink,
      aspectRatio: "4 / 3",
      position: "relative",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 20,
      border: "1px solid transparent"
    }}>
      {/* Padrão geométrico sutil — substitui a imagem do projeto */}
      <V3MockupArt variant={variant} ink={p.ink} />

      {/* Tags + arrow no canto */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }}>
        <span style={{
          fontSize: 11.5, padding: "5px 11px",
          background: p.ink === "#0E0E0C" ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.18)",
          color: p.ink === "#0E0E0C" ? "#0E0E0C" : "#fff",
          backdropFilter: "blur(6px)",
          borderRadius: 999, fontWeight: 500
        }}>{c.company}</span>
        <span style={{
          fontSize: 11.5, padding: "5px 11px",
          background: p.ink === "#0E0E0C" ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.18)",
          color: p.ink === "#0E0E0C" ? "#0E0E0C" : "#fff",
          backdropFilter: "blur(6px)",
          borderRadius: 999, fontWeight: 500
        }}>{c.year}</span>
      </div>

      <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "end", gap: 12 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontSize: 14, fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: 6,
            color: p.ink,
            textWrap: "balance"
          }}>{c.name}</div>
          <div style={{
            fontSize: 28, fontWeight: 500,
            letterSpacing: "-0.035em",
            lineHeight: 1,
            color: p.ink
          }}>{c.metric}</div>
        </div>
        <span className="v3-arrow v3-arrow-up" style={{
          width: 32, height: 32, borderRadius: "50%",
          background: p.ink,
          color: p.bg,
          display: "grid", placeItems: "center",
          fontSize: 13, fontWeight: 400,
          flexShrink: 0
        }}>↗</span>
      </div>
    </div>);

}

/* Padrões visuais que evocam o tipo de trabalho — sem inventar UIs */
function V3MockupArt({ variant, ink }) {
  const stroke = ink;
  const opacity = ink === "#F4F2EE" ? 0.35 : 0.18;

  // Vários estilos diferentes — gráficos abstratos representando dados/ML/IA/CRM
  const arts = [
  // 0: Barras de dados (alocação)

  <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke={stroke} strokeWidth="0.8" fill="none" opacity={opacity}>
          {[0, 1, 2, 3].map((i) => <line key={i} x1="10" y1={30 + i * 22} x2="190" y2={30 + i * 22} />)}
        </g>
        <g fill={stroke} opacity={opacity * 1.6}>
          {[20, 40, 60, 80, 100, 120, 140, 160].map((x, i) =>
      <rect key={i} x={x} y={100 - (i * 8 + 12)} width="14" height={i * 8 + 12} rx="2" />
      )}
        </g>
      </svg>,

  // 1: Nodes/network (LLM / agentes)

  <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke={stroke} strokeWidth="0.6" fill="none" opacity={opacity}>
          <line x1="40" y1="40" x2="100" y2="65" />
          <line x1="40" y1="90" x2="100" y2="65" />
          <line x1="100" y1="65" x2="160" y2="35" />
          <line x1="100" y1="65" x2="160" y2="65" />
          <line x1="100" y1="65" x2="160" y2="95" />
          <line x1="160" y1="35" x2="190" y2="50" />
          <line x1="160" y1="95" x2="190" y2="80" />
        </g>
        <g fill={stroke} opacity={opacity * 2}>
          {[[40, 40], [40, 90], [100, 65], [160, 35], [160, 65], [160, 95], [190, 50], [190, 80]].map(([x, y], i) =>
      <circle key={i} cx={x} cy={y} r={i === 2 ? 6 : 3.5} />
      )}
        </g>
      </svg>,

  // 2: Linhas de gráfico (KPI dashboards)

  <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke={stroke} strokeWidth="0.8" fill="none" opacity={opacity}>
          {[0, 1, 2, 3].map((i) => <line key={i} x1="10" y1={30 + i * 22} x2="190" y2={30 + i * 22} />)}
        </g>
        <path d="M10 90 Q40 80, 60 70 T110 50 T160 60 T190 35" stroke={stroke} strokeWidth="1.5" fill="none" opacity={opacity * 2.5} />
        <path d="M10 100 Q40 95, 60 88 T110 75 T160 80 T190 65" stroke={stroke} strokeWidth="1.5" fill="none" opacity={opacity * 1.5} strokeDasharray="3 3" />
      </svg>,

  // 3: Grid/tabela (ETL frete)

  <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke={stroke} strokeWidth="0.6" fill="none" opacity={opacity}>
          {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} x1={20 + i * 32} y1="20" x2={20 + i * 32} y2="120" />)}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => <line key={i} x1="20" y1={20 + i * 16} x2="180" y2={20 + i * 16} />)}
        </g>
        <g fill={stroke} opacity={opacity * 1.4}>
          <rect x="20" y="20" width="32" height="16" />
          <rect x="84" y="52" width="32" height="16" />
          <rect x="116" y="84" width="32" height="16" />
          <rect x="52" y="100" width="32" height="16" />
        </g>
      </svg>,

  // 4: CRM/funil (Salesforce)

  <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke={stroke} strokeWidth="0.8" fill="none" opacity={opacity}>
          <path d="M30 30 L170 30 L150 50 L50 50 Z" />
          <path d="M50 60 L150 60 L135 80 L65 80 Z" />
          <path d="M65 90 L135 90 L122 110 L78 110 Z" />
        </g>
        <g fill={stroke} opacity={opacity * 1.4}>
          <rect x="100" y="22" width="20" height="6" rx="1" />
          <rect x="105" y="52" width="14" height="6" rx="1" />
          <rect x="108" y="82" width="10" height="6" rx="1" />
        </g>
      </svg>,

  // 5: Pipeline (modern data stack)

  <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke={stroke} strokeWidth="0.8" fill="none" opacity={opacity}>
          <rect x="20" y="56" width="32" height="22" rx="3" />
          <rect x="84" y="56" width="32" height="22" rx="3" />
          <rect x="148" y="56" width="32" height="22" rx="3" />
          <line x1="52" y1="67" x2="84" y2="67" markerEnd="url(#arr)" />
          <line x1="116" y1="67" x2="148" y2="67" />
        </g>
        <g fill={stroke} opacity={opacity * 1.6}>
          <circle cx="36" cy="40" r="2.5" />
          <circle cx="100" cy="40" r="2.5" />
          <circle cx="164" cy="40" r="2.5" />
          <circle cx="36" cy="96" r="2.5" />
          <circle cx="100" cy="96" r="2.5" />
          <circle cx="164" cy="96" r="2.5" />
        </g>
      </svg>];



  return arts[variant % arts.length];
}

/* ---------- TESTIMONIAL ---------- */
function V3Testimonial({ t }) {
  const [idx, setIdx] = React.useState(0);
  const [fade, setFade] = React.useState(true);
  const items = t.testimonials.items;
  const tt = items[idx];
  const ROTATE_MS = 7000;
  const FADE_MS = 350;

  // Auto-rotate
  React.useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % items.length);
        setFade(true);
      }, FADE_MS);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [items.length]);

  function jumpTo(i) {
    if (i === idx) return;
    setFade(false);
    setTimeout(() => { setIdx(i); setFade(true); }, FADE_MS);
  }

  return (
    <section className="v3-page v3-section" style={{ ...v3Styles.page, paddingTop: 32, paddingBottom: 64 }}>
      <div className="v3-testimonial-card" style={{
        background: SURF,
        border: `1px solid ${BORDER}`,
        borderRadius: 22,
        padding: "84px 64px 56px",
        position: "relative",
        textAlign: "center",
        overflow: "hidden"
      }}>
        {/* Serif quote mark — referência */}
        <div style={{
          fontSize: 180, lineHeight: 0.6,
          fontFamily: "'Georgia', 'Times New Roman', serif",
          color: INK, opacity: 0.07,
          position: "absolute",
          top: 40, left: "50%",
          transform: "translateX(-50%)",
          fontWeight: 400,
          pointerEvents: "none"
        }}>"</div>

        {/* Quote — minHeight para evitar pulo de altura */}
        <div style={{
          minHeight: 168,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
          position: "relative",
        }}>
          <p className="v3-testimonial-text" style={{
            fontSize: 22, lineHeight: 1.55,
            letterSpacing: "-0.01em",
            margin: 0,
            fontWeight: 400, color: INK,
            maxWidth: 820,
            textWrap: "balance",
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(6px)",
            transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
          }}>"{tt.quote}"</p>
        </div>

        <div style={{
          maxWidth: 480,
          margin: "0 auto 28px",
          height: 1,
          background: SUBTLE_BORDER
        }} />

        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          justifyContent: "center",
          opacity: fade ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease`,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: INK, color: "#fff",
            display: "grid", placeItems: "center",
            fontWeight: 600, fontSize: 14,
            letterSpacing: "-0.02em"
          }}>{tt.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}</div>
          <div style={{ textAlign: "left" }}>
            <div style={{
              fontSize: 15, fontWeight: 600,
              letterSpacing: "-0.005em"
            }}>{tt.author}</div>
            <div style={{
              fontSize: 13, color: MUTED, marginTop: 2
            }}>{tt.role}</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 32 }}>
          {items.map((_, i) =>
          <button key={i} onClick={() => jumpTo(i)} style={{
            width: i === idx ? 28 : 8, height: 8, borderRadius: 999,
            background: i === idx ? INK : `${INK}25`,
            border: "none", cursor: "pointer",
            transition: "all 0.3s",
            padding: 0,
          }} />
          )}
        </div>
      </div>
    </section>);

}

/* ---------- FILKA STRIP ---------- */
function V3FilkaStrip({ t }) {
  return (
    <section className="v3-page v3-section" style={{ ...v3Styles.page, paddingTop: 0, paddingBottom: 24 }}>
      <a href="filka.html" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <div className="v3-card v3-grid-filka-strip" style={{
          background: SURF,
          border: `1px solid ${BORDER}`,
          borderRadius: 18,
          padding: "32px 40px",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 40,
          alignItems: "center",
          cursor: "pointer"
        }}>
          <div className="v3-filka-tag" style={{
            padding: "14px 22px",
            background: INK, color: "#fff",
            borderRadius: 12,
            fontSize: 24, fontWeight: 700,
            letterSpacing: "-0.025em"
          }}>Filka</div>
          <div>
            <div style={{
              fontSize: 20, fontWeight: 500,
              letterSpacing: "-0.015em", marginBottom: 6,
              textWrap: "balance"
            }}>{t.filkaStrip.title}</div>
            <div style={{ fontSize: 14, color: MUTED, lineHeight: 1.5 }}>
              {t.filkaStrip.desc}
            </div>
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "12px 22px",
            background: "transparent",
            border: `1px solid ${INK}`,
            color: INK,
            borderRadius: 999,
            fontSize: 14, fontWeight: 500,
            whiteSpace: "nowrap"
          }}>
            {t.filkaStrip.cta} <span className="v3-arrow v3-arrow-right">→</span>
          </div>
        </div>
      </a>
    </section>);

}

/* ---------- CONTACT — dark block "Let's Connect There" style ---------- */
function V3Contact({ t }) {
  return (
    <section id="contact" className="v3-contact-dark" style={{
      background: INK,
      color: "#fff",
      marginTop: 24
    }}>
      <div className="v3-page" style={{ ...v3Styles.page,
        paddingTop: 96, paddingBottom: 56
      }}>
        <div className="v3-grid-contact" style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 56,
          alignItems: "end"
        }}>
          <div>
            <div style={{
              fontSize: 13, fontWeight: 500,
              color: "rgba(255,255,255,0.55)",
              marginBottom: 16
            }}>{t.contact.eyebrow}</div>
            <h2 className="v3-h2-cta" style={{
              fontSize: "clamp(56px, 8vw, 104px)",
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
              fontWeight: 400,
              margin: 0,
              maxWidth: 720,
              textWrap: "balance"
            }}>{t.contact.title}</h2>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a href={window.SITE_LINKS.calendly} target="_blank" className="v3-cta-pill" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "16px 26px 16px 18px",
              background: "linear-gradient(135deg, #2A2A26, #0E0E0C)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 14, fontWeight: 500,
              whiteSpace: "nowrap"
            }}>
              <span className="v3-arrow v3-arrow-right" style={{
                width: 26, height: 26, borderRadius: "50%",
                background: "#fff", color: INK,
                display: "grid", placeItems: "center",
                fontSize: 13
              }}>→</span>
              {t.contact.cta1}
            </a>
          </div>
        </div>

        <p style={{
          fontSize: 16, lineHeight: 1.55,
          color: "rgba(255,255,255,0.7)",
          margin: "32px 0 0", maxWidth: 540,
          textWrap: "pretty"
        }}>{t.contact.subtitle}</p>
      </div>
    </section>);

}

/* ---------- FOOTER ---------- */
function V3Footer({ t }) {
  return (
    <footer style={{
      background: INK,
      color: "#fff",
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }}>
      <div className="v3-page" style={{ ...v3Styles.page,
        paddingTop: 56, paddingBottom: 40
      }}>
        <div className="v3-grid-footer" style={{
          display: "grid",
          gridTemplateColumns: "1.4fr repeat(3, 1fr)",
          gap: 32,
          alignItems: "start",
          paddingBottom: 40,
          borderBottom: "1px solid rgba(255,255,255,0.08)"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <V3Logo dark={true} />
              <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-0.015em" }}>
                Filipe Martins
              </span>
            </div>
            <p style={{
              fontSize: 13.5, lineHeight: 1.55,
              color: "rgba(255,255,255,0.55)",
              margin: 0, maxWidth: 280
            }}>{t.footer.tagline}</p>
          </div>

          <div>
            <div style={{
              fontSize: 12, fontWeight: 500,
              color: "rgba(255,255,255,0.45)",
              marginBottom: 12,
              letterSpacing: "0.04em",
              textTransform: "uppercase"
            }}>{t.contact.eyebrow}</div>
            <a href={window.SITE_LINKS.email} style={{
              color: "#fff", textDecoration: "none",
              fontSize: 14, fontWeight: 500
            }}>fmartins.nascimento@outlook.com</a>
          </div>

          <div>
            <div style={{
              fontSize: 12, fontWeight: 500,
              color: "rgba(255,255,255,0.45)",
              marginBottom: 12,
              letterSpacing: "0.04em",
              textTransform: "uppercase"
            }}>Links</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href={window.SITE_LINKS.linkedin} target="_blank" style={{ color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>LinkedIn ↗</a>
              <a href={window.SITE_LINKS.github} target="_blank" style={{ color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>GitHub ↗</a>
              <a href={window.SITE_LINKS.filka} target="_blank" style={{ color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Filka Studio ↗</a>
            </div>
          </div>

          <div>
            <div style={{
              fontSize: 12, fontWeight: 500,
              color: "rgba(255,255,255,0.45)",
              marginBottom: 12,
              letterSpacing: "0.04em",
              textTransform: "uppercase"
            }}>Localização</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "#fff", lineHeight: 1.5 }}>
              São Paulo, Brasil<br />
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>Remoto · GMT-3</span>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
          fontSize: 12.5,
          color: "rgba(255,255,255,0.45)"
        }}>
          <span>{t.footer.rights}</span>
          <span>Construído com cuidado.</span>
        </div>
      </div>
    </footer>);

}

/* ---------- ROOT ---------- */
function MainSite() {
  const [lang, setLang] = React.useState("pt");
  const t = window.SITE_CONTENT[lang];
  return (
    <div style={v3Styles.root}>
      <V3GlobalStyles />
      <V3Nav lang={lang} setLang={setLang} t={t} current="home" />
      <V3Hero t={t} />
      <V3TrustStrip t={t} />
      <Reveal><V3About t={t} /></Reveal>
      <Reveal><V3Services t={t} /></Reveal>
      <Reveal><V3Experience t={t} /></Reveal>
      <Reveal><V3Portfolio t={t} /></Reveal>
      <Reveal><V3Testimonial t={t} /></Reveal>
      <Reveal><V3FilkaStrip t={t} /></Reveal>
      <Reveal><V3Contact t={t} /></Reveal>
      <V3Footer t={t} />
    </div>);

}

window.MainSite = MainSite;
window.DNav = V3Nav;
window.DFooter = V3Footer;
window.dStyles = v3Styles;
window.D_BG = BG;
window.D_SURF = SURF;
window.D_INK = INK;
window.D_MUTED = MUTED;
window.D_BORDER = BORDER;
window.D_PILL = V3Pill;
window.V3Reveal = Reveal;
window.V3Logo = V3Logo;
window.V3GlobalStyles = V3GlobalStyles;
window.D_SUBTLE = SUBTLE;
window.D_MAX_W = MAX_W;