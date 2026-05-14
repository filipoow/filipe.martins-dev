/* === Direção A — Editorial Bold === */

const editorialStyles = {
  root: {
    fontFamily: "'Instrument Serif', 'Cormorant Garamond', Georgia, serif",
    background: "#F5F1EA",
    color: "#1A1816",
    width: "100%",
    minHeight: "100%",
    overflow: "hidden",
    position: "relative",
  },
  sans: {
    fontFamily: "'Inter Tight', 'Helvetica Neue', sans-serif",
  },
  mono: {
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  },
};

const ACCENT_A = "#D2543A"; // terracota quente
const INK_A = "#1A1816";
const PAPER_A = "#F5F1EA";
const PAPER_DEEP = "#EBE4D6";

function EditorialNav({ lang, setLang, t }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "32px 56px",
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 14,
      letterSpacing: "0.02em",
      borderBottom: `1px solid ${INK_A}15`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, fontWeight: 500 }}>
        <span style={{
          width: 10, height: 10, borderRadius: "50%",
          background: "#3DAA6A",
          boxShadow: "0 0 0 3px #3DAA6A30",
        }} />
        <span>Filipe Martins</span>
        <span style={{ opacity: 0.4 }}>—</span>
        <span style={{ opacity: 0.6 }}>{t.hero.eyebrow}</span>
      </div>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <a href="#work" style={{ color: INK_A, textDecoration: "none", opacity: 0.7 }}>{t.nav.work}</a>
        <a href="#about" style={{ color: INK_A, textDecoration: "none", opacity: 0.7 }}>{t.nav.about}</a>
        <a href="#services" style={{ color: INK_A, textDecoration: "none", opacity: 0.7 }}>{t.nav.services}</a>
        <a href="#contact" style={{ color: INK_A, textDecoration: "none", opacity: 0.7 }}>{t.nav.contact}</a>
        <div style={{ display: "flex", border: `1px solid ${INK_A}30`, borderRadius: 999, overflow: "hidden" }}>
          <button onClick={() => setLang("pt")} style={{
            padding: "6px 14px", border: "none",
            background: lang === "pt" ? INK_A : "transparent",
            color: lang === "pt" ? PAPER_A : INK_A,
            fontFamily: "inherit", fontSize: 12, cursor: "pointer", letterSpacing: "0.05em",
          }}>PT</button>
          <button onClick={() => setLang("en")} style={{
            padding: "6px 14px", border: "none",
            background: lang === "en" ? INK_A : "transparent",
            color: lang === "en" ? PAPER_A : INK_A,
            fontFamily: "inherit", fontSize: 12, cursor: "pointer", letterSpacing: "0.05em",
          }}>EN</button>
        </div>
      </div>
    </nav>
  );
}

function EditorialHero({ t }) {
  return (
    <section style={{ padding: "80px 56px 120px", position: "relative" }}>
      {/* status pill */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "8px 16px",
        border: `1px solid ${INK_A}25`,
        borderRadius: 999,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        letterSpacing: "0.04em",
        marginBottom: 56,
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: "50%",
          background: "#3DAA6A",
          animation: "pulse 2s infinite",
        }} />
        <span style={{ opacity: 0.75 }}>{t.hero.availability}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
        <div>
          <h1 style={{
            fontSize: 116,
            lineHeight: 0.94,
            letterSpacing: "-0.035em",
            fontWeight: 400,
            margin: 0,
            marginBottom: 40,
          }}>
            {t.hero.title.split(" ").map((w, i) => {
              const isEmphasis = ["pensam", "think"].includes(w.toLowerCase().replace(/[.,]/g, ""));
              return (
                <span key={i} style={{
                  fontStyle: isEmphasis ? "italic" : "normal",
                  color: isEmphasis ? ACCENT_A : INK_A,
                }}>{w} </span>
              );
            })}
          </h1>
          <p style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: 21, lineHeight: 1.45,
            maxWidth: 620,
            color: `${INK_A}cc`,
            margin: 0,
            marginBottom: 40,
          }}>
            {t.hero.subtitle}
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href={window.SITE_LINKS.calendly} target="_blank" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: INK_A, color: PAPER_A,
              padding: "18px 28px", borderRadius: 999,
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: 16, fontWeight: 500, textDecoration: "none",
            }}>
              {t.hero.cta1}
              <span style={{ fontSize: 18 }}>→</span>
            </a>
            <a href="#work" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "18px 24px",
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: 16, fontWeight: 500,
              color: INK_A, textDecoration: "none",
              borderBottom: `2px solid ${INK_A}`,
            }}>
              {t.hero.cta2}
            </a>
          </div>
        </div>

        {/* Foto editorial */}
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "4/5",
            background: `url('assets/filipe.jpg') center/cover`,
            borderRadius: 4,
            filter: "grayscale(0.15) contrast(1.05)",
            boxShadow: "0 40px 80px rgba(26,24,22,0.18)",
          }} />
          <div style={{
            position: "absolute",
            bottom: -20, left: -20,
            background: ACCENT_A,
            color: PAPER_A,
            padding: "14px 20px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: "0.05em",
            transform: "rotate(-2deg)",
          }}>
            {t.proof.role}
          </div>
        </div>
      </div>

      {/* infinite ticker */}
      <div style={{
        marginTop: 100, paddingTop: 32,
        borderTop: `1px solid ${INK_A}20`,
        display: "flex", justifyContent: "space-between",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        opacity: 0.6,
      }}>
        <span>Databricks · AWS · Python · LLMs</span>
        <span>SP — BR  /  available worldwide</span>
        <span>est. 2021 — 5 yrs in data</span>
      </div>
    </section>
  );
}

function EditorialIntro({ t }) {
  return (
    <section id="about" style={{
      padding: "120px 56px",
      background: PAPER_DEEP,
      position: "relative",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
        <div>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: ACCENT_A,
          }}>§ 01</span>
          <h2 style={{
            fontSize: 64, lineHeight: 0.95,
            letterSpacing: "-0.03em",
            fontWeight: 400,
            margin: "16px 0 0",
          }}>
            <em>{t.intro.title}</em>
          </h2>
        </div>
        <div>
          <p style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: 22, lineHeight: 1.55,
            color: INK_A,
            margin: 0,
            textWrap: "pretty",
          }}>
            {t.intro.body}
          </p>
        </div>
      </div>
    </section>
  );
}

function EditorialServices({ t }) {
  return (
    <section id="services" style={{ padding: "120px 56px" }}>
      <div style={{ marginBottom: 64, display: "flex", justifyContent: "space-between", alignItems: "end" }}>
        <div>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: ACCENT_A,
          }}>§ 02</span>
          <h2 style={{
            fontSize: 80, lineHeight: 0.95, letterSpacing: "-0.03em",
            fontWeight: 400, margin: "16px 0 0",
          }}>{t.services.title}</h2>
        </div>
        <p style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontSize: 18, color: `${INK_A}aa`, maxWidth: 360, margin: 0,
        }}>{t.services.subtitle}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        {t.services.items.map((s, i) => (
          <div key={i} style={{
            padding: "40px 32px",
            borderTop: `1px solid ${INK_A}25`,
            borderRight: i % 2 === 0 ? `1px solid ${INK_A}25` : "none",
            display: "flex", flexDirection: "column", gap: 16,
            minHeight: 280,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13, opacity: 0.5,
              }}>{s.tag}</span>
              <span style={{ fontSize: 22, color: ACCENT_A }}>↗</span>
            </div>
            <h3 style={{
              fontSize: 36, lineHeight: 1, letterSpacing: "-0.02em",
              fontWeight: 400, margin: 0,
            }}><em>{s.name}</em></h3>
            <p style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: 16, lineHeight: 1.5,
              color: `${INK_A}c0`, margin: 0,
              flex: 1,
            }}>{s.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {s.tags.map(tg => (
                <span key={tg} style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11, padding: "4px 10px",
                  border: `1px solid ${INK_A}30`,
                  borderRadius: 999,
                }}>{tg}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EditorialCases({ t }) {
  return (
    <section id="work" style={{
      padding: "120px 56px",
      background: INK_A,
      color: PAPER_A,
    }}>
      <div style={{ marginBottom: 80 }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: ACCENT_A,
        }}>§ 03</span>
        <h2 style={{
          fontSize: 96, lineHeight: 0.92, letterSpacing: "-0.035em",
          fontWeight: 400, margin: "16px 0 16px",
        }}>{t.cases.title}</h2>
        <p style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontSize: 20, color: `${PAPER_A}aa`, margin: 0,
        }}>{t.cases.subtitle}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {t.cases.items.map((c, i) => (
          <div key={i} style={{
            padding: "40px 0",
            borderTop: `1px solid ${PAPER_A}20`,
            display: "grid",
            gridTemplateColumns: "120px 1fr 1fr 200px",
            gap: 40,
            alignItems: "start",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              opacity: 0.5,
              letterSpacing: "0.1em",
              paddingTop: 8,
            }}>
              {String(i + 1).padStart(2, "0")} / {c.year}
            </div>
            <div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: ACCENT_A,
                marginBottom: 8,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>{c.company}</div>
              <h3 style={{
                fontSize: 38, lineHeight: 1.05, letterSpacing: "-0.02em",
                fontWeight: 400, margin: 0,
              }}><em>{c.name}</em></h3>
            </div>
            <p style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: 16, lineHeight: 1.55,
              color: `${PAPER_A}b8`, margin: 0,
            }}>{c.desc}</p>
            <div>
              <div style={{
                fontSize: 56,
                lineHeight: 1,
                color: ACCENT_A,
                fontStyle: "italic",
                fontWeight: 400,
              }}>{c.metric}</div>
              <div style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: 12,
                opacity: 0.6,
                marginTop: 4,
                lineHeight: 1.3,
              }}>{c.metricLabel}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EditorialTimeline({ t }) {
  return (
    <section style={{ padding: "120px 56px", background: PAPER_DEEP }}>
      <div style={{ marginBottom: 72 }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, letterSpacing: "0.15em",
          textTransform: "uppercase", color: ACCENT_A,
        }}>§ 04</span>
        <h2 style={{
          fontSize: 80, lineHeight: 0.95, letterSpacing: "-0.03em",
          fontWeight: 400, margin: "16px 0 0",
        }}>{t.timeline.title}</h2>
      </div>

      <div style={{ position: "relative", paddingLeft: 40 }}>
        <div style={{
          position: "absolute",
          left: 0, top: 12, bottom: 12,
          width: 1,
          background: `${INK_A}30`,
        }} />
        {t.timeline.items.map((item, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr 1fr",
            gap: 40,
            paddingBottom: 40,
            position: "relative",
          }}>
            <div style={{
              position: "absolute",
              left: -45, top: 12,
              width: 11, height: 11,
              borderRadius: "50%",
              background: i === t.timeline.items.length - 1 ? ACCENT_A : INK_A,
              boxShadow: i === t.timeline.items.length - 1 ? `0 0 0 5px ${ACCENT_A}25` : "none",
            }} />
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13, opacity: 0.6, paddingTop: 6,
            }}>{item.date}</div>
            <div>
              <h4 style={{
                fontSize: 28, fontWeight: 400, margin: 0,
                letterSpacing: "-0.01em",
              }}>{item.role}</h4>
              <div style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: 14, color: ACCENT_A, marginTop: 4,
                fontWeight: 500,
              }}>{item.company}</div>
            </div>
            <p style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: 15, color: `${INK_A}aa`, margin: 0,
              lineHeight: 1.5,
            }}>{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EditorialStack({ t }) {
  return (
    <section style={{ padding: "120px 56px" }}>
      <div style={{ marginBottom: 64 }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, letterSpacing: "0.15em",
          textTransform: "uppercase", color: ACCENT_A,
        }}>§ 05</span>
        <h2 style={{
          fontSize: 80, lineHeight: 0.95, letterSpacing: "-0.03em",
          fontWeight: 400, margin: "16px 0 0",
        }}>{t.stack.title}</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
        {t.stack.groups.map((g, i) => (
          <div key={i} style={{
            padding: "32px 24px 32px 0",
            borderTop: `1px solid ${INK_A}25`,
            borderRight: (i + 1) % 3 !== 0 ? `1px solid ${INK_A}25` : "none",
            paddingRight: (i + 1) % 3 !== 0 ? 32 : 0,
          }}>
            <h4 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              opacity: 0.6,
              margin: "0 0 16px",
            }}>{g.name}</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {g.items.map(it => (
                <li key={it} style={{
                  fontSize: 22, lineHeight: 1.5, fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function EditorialTestimonials({ t }) {
  return (
    <section style={{
      padding: "120px 56px",
      background: ACCENT_A,
      color: PAPER_A,
    }}>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12, letterSpacing: "0.15em",
        textTransform: "uppercase",
        opacity: 0.7,
      }}>§ 06 — {t.testimonials.title}</span>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        marginTop: 56,
      }}>
        {t.testimonials.items.map((tt, i) => (
          <blockquote key={i} style={{ margin: 0 }}>
            <div style={{ fontSize: 80, lineHeight: 0.6, opacity: 0.4 }}>"</div>
            <p style={{
              fontSize: 32, lineHeight: 1.25,
              letterSpacing: "-0.015em",
              margin: "16px 0 24px",
              fontStyle: "italic",
            }}>{tt.quote}</p>
            <footer style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.1em",
              opacity: 0.85,
              textTransform: "uppercase",
            }}>{tt.author} {tt.role}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function EditorialFAQ({ t }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ padding: "120px 56px" }}>
      <div style={{ marginBottom: 56 }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, letterSpacing: "0.15em",
          textTransform: "uppercase", color: ACCENT_A,
        }}>§ 07</span>
        <h2 style={{
          fontSize: 72, lineHeight: 0.95, letterSpacing: "-0.03em",
          fontWeight: 400, margin: "16px 0 0",
        }}>{t.faq.title}</h2>
      </div>
      <div>
        {t.faq.items.map((f, i) => (
          <div key={i} onClick={() => setOpen(open === i ? -1 : i)} style={{
            borderTop: `1px solid ${INK_A}25`,
            padding: "28px 0",
            cursor: "pointer",
          }}>
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "center", gap: 32,
            }}>
              <h4 style={{
                fontSize: 28, fontWeight: 400, margin: 0,
                letterSpacing: "-0.01em",
              }}>{f.q}</h4>
              <span style={{
                fontSize: 24, opacity: 0.5,
                transform: open === i ? "rotate(45deg)" : "none",
                transition: "transform 0.3s",
              }}>+</span>
            </div>
            {open === i && (
              <p style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: 18, lineHeight: 1.55,
                color: `${INK_A}b0`,
                margin: "16px 0 0",
                maxWidth: 720,
              }}>{f.a}</p>
            )}
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${INK_A}25` }} />
      </div>
    </section>
  );
}

function EditorialContact({ t }) {
  return (
    <section id="contact" style={{
      padding: "160px 56px",
      background: INK_A,
      color: PAPER_A,
      textAlign: "center",
    }}>
      <h2 style={{
        fontSize: 144, lineHeight: 0.92,
        letterSpacing: "-0.04em",
        fontWeight: 400,
        margin: "0 0 32px",
      }}>
        <em>{t.contact.title}</em>
      </h2>
      <p style={{
        fontFamily: "'Inter Tight', sans-serif",
        fontSize: 22,
        color: `${PAPER_A}b0`,
        maxWidth: 640,
        margin: "0 auto 56px",
        lineHeight: 1.5,
      }}>{t.contact.subtitle}</p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a href={window.SITE_LINKS.calendly} target="_blank" style={{
          background: ACCENT_A, color: PAPER_A,
          padding: "20px 36px", borderRadius: 999,
          fontFamily: "'Inter Tight', sans-serif",
          fontSize: 17, fontWeight: 500,
          textDecoration: "none",
          display: "inline-flex", gap: 12, alignItems: "center",
        }}>{t.contact.cta1} <span>→</span></a>
        <a href={window.SITE_LINKS.email} style={{
          color: PAPER_A,
          padding: "20px 36px", borderRadius: 999,
          fontFamily: "'Inter Tight', sans-serif",
          fontSize: 17, fontWeight: 500,
          textDecoration: "none",
          border: `1px solid ${PAPER_A}40`,
        }}>{t.contact.cta2}</a>
      </div>

      <div style={{
        marginTop: 100, paddingTop: 32,
        borderTop: `1px solid ${PAPER_A}20`,
        display: "flex", justifyContent: "space-between",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        opacity: 0.5,
      }}>
        <span>{t.footer.tagline}</span>
        <div style={{ display: "flex", gap: 24 }}>
          <a href={window.SITE_LINKS.linkedin} target="_blank" style={{ color: PAPER_A, textDecoration: "none" }}>LinkedIn ↗</a>
          <a href={window.SITE_LINKS.github} target="_blank" style={{ color: PAPER_A, textDecoration: "none" }}>GitHub ↗</a>
          <a href={window.SITE_LINKS.filka} target="_blank" style={{ color: PAPER_A, textDecoration: "none" }}>Filka Studio ↗</a>
        </div>
        <span>{t.footer.rights}</span>
      </div>
    </section>
  );
}

function EditorialSite() {
  const [lang, setLang] = React.useState("pt");
  const t = window.SITE_CONTENT[lang];
  return (
    <div style={editorialStyles.root}>
      <EditorialNav lang={lang} setLang={setLang} t={t} />
      <EditorialHero t={t} />
      <EditorialIntro t={t} />
      <EditorialServices t={t} />
      <EditorialCases t={t} />
      <EditorialTimeline t={t} />
      <EditorialStack t={t} />
      <EditorialTestimonials t={t} />
      <EditorialFAQ t={t} />
      <EditorialContact t={t} />
    </div>
  );
}

window.EditorialSite = EditorialSite;
