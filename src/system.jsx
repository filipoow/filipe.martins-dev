/* === Direção B — Sistema Vivo (dashboard-like com personalidade) === */

const INK_B = "#0B0F0E";
const PAPER_B = "#F4F4F0";
const SURFACE_B = "#FBFBF8";
const ACCENT_B = "#7CFF6E"; // verde elétrico
const ACCENT_DEEP = "#0F4A2A";
const MUTED_B = "#6B7370";

const systemStyles = {
  root: {
    fontFamily: "'Inter Tight', 'Helvetica Neue', sans-serif",
    background: PAPER_B,
    color: INK_B,
    width: "100%",
    minHeight: "100%",
    overflow: "hidden",
  },
};

function SystemNav({ lang, setLang, t }) {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(i);
  }, []);
  const tStr = time.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

  return (
    <nav style={{
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      padding: "20px 32px",
      borderBottom: `1px solid ${INK_B}10`,
      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
      fontSize: 12,
      background: SURFACE_B,
      position: "sticky", top: 0, zIndex: 10,
    }}>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 22, height: 22,
            background: INK_B,
            borderRadius: 5,
            display: "grid", placeItems: "center",
            color: ACCENT_B,
            fontSize: 13, fontWeight: 700,
          }}>F</div>
          <span style={{ fontWeight: 600, letterSpacing: "-0.01em" }}>filipe.martins</span>
          <span style={{ color: MUTED_B }}>/v3.0</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: MUTED_B }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: ACCENT_B,
            boxShadow: `0 0 0 3px ${ACCENT_B}30`,
          }} />
          <span>online · São Paulo {tStr}</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 4 }}>
        {["work", "about", "services", "contact"].map(k => (
          <a key={k} href={`#${k}`} style={{
            padding: "8px 14px",
            color: INK_B,
            textDecoration: "none",
            borderRadius: 6,
            fontSize: 12,
            opacity: 0.7,
          }}>{t.nav[k]}</a>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, alignItems: "center" }}>
        <div style={{ display: "flex", border: `1px solid ${INK_B}20`, borderRadius: 6, overflow: "hidden" }}>
          <button onClick={() => setLang("pt")} style={{
            padding: "5px 12px", border: "none",
            background: lang === "pt" ? INK_B : "transparent",
            color: lang === "pt" ? PAPER_B : INK_B,
            fontFamily: "inherit", fontSize: 11, cursor: "pointer",
          }}>PT</button>
          <button onClick={() => setLang("en")} style={{
            padding: "5px 12px", border: "none",
            background: lang === "en" ? INK_B : "transparent",
            color: lang === "en" ? PAPER_B : INK_B,
            fontFamily: "inherit", fontSize: 11, cursor: "pointer",
          }}>EN</button>
        </div>
        <a href={window.SITE_LINKS.calendly} target="_blank" style={{
          background: INK_B, color: ACCENT_B,
          padding: "8px 14px", borderRadius: 6,
          textDecoration: "none", fontSize: 12, fontWeight: 500,
          display: "inline-flex", gap: 6, alignItems: "center",
        }}>
          {t.hero.cta1} <span>↗</span>
        </a>
      </div>
    </nav>
  );
}

function MetricCard({ label, value, sub, accent }) {
  return (
    <div style={{
      background: SURFACE_B,
      borderRadius: 10,
      padding: "20px 22px",
      border: `1px solid ${INK_B}10`,
      display: "flex", flexDirection: "column", gap: 4,
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11, color: MUTED_B,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
      }}>{label}</div>
      <div style={{
        fontSize: 38, fontWeight: 500,
        letterSpacing: "-0.03em",
        color: accent ? ACCENT_DEEP : INK_B,
        lineHeight: 1,
      }}>{value}</div>
      <div style={{ fontSize: 12, color: MUTED_B }}>{sub}</div>
    </div>
  );
}

function SystemHero({ t, lang }) {
  return (
    <section style={{ padding: "48px 32px 24px" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "6px 12px", borderRadius: 999,
        background: ACCENT_B,
        color: ACCENT_DEEP,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11, fontWeight: 600,
        marginBottom: 32,
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: "50%",
          background: ACCENT_DEEP,
        }} />
        {t.hero.availability.toUpperCase()}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 56, alignItems: "start" }}>
        <div>
          <h1 style={{
            fontSize: 88,
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            fontWeight: 500,
            margin: 0,
            marginBottom: 28,
          }}>
            {t.hero.title}
          </h1>
          <p style={{
            fontSize: 19, lineHeight: 1.5,
            color: MUTED_B,
            maxWidth: 580,
            margin: "0 0 36px",
          }}>{t.hero.subtitle}</p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href={window.SITE_LINKS.calendly} target="_blank" style={{
              background: INK_B, color: ACCENT_B,
              padding: "14px 22px", borderRadius: 8,
              fontSize: 15, fontWeight: 500,
              textDecoration: "none",
              display: "inline-flex", gap: 8, alignItems: "center",
            }}>{t.hero.cta1} <span>→</span></a>
            <a href="#work" style={{
              padding: "14px 22px", borderRadius: 8,
              fontSize: 15, fontWeight: 500,
              textDecoration: "none",
              color: INK_B,
              border: `1px solid ${INK_B}25`,
            }}>{t.hero.cta2}</a>
          </div>
        </div>

        {/* stack widget */}
        <div style={{
          background: INK_B,
          borderRadius: 14,
          padding: 20,
          color: PAPER_B,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, opacity: 0.7 }}>
            <span>~/filipe/now</span>
            <span style={{ color: ACCENT_B }}>● live</span>
          </div>
          <div style={{ lineHeight: 1.9 }}>
            <div><span style={{ color: ACCENT_B }}>$</span> who_am_i</div>
            <div style={{ color: PAPER_B, opacity: 0.85 }}>{lang === "pt" ? "Analytics Engineer Sr." : "Sr. Analytics Engineer"}</div>
            <div style={{ marginTop: 10 }}><span style={{ color: ACCENT_B }}>$</span> where</div>
            <div style={{ color: PAPER_B, opacity: 0.85 }}>Omie · São Paulo, BR</div>
            <div style={{ marginTop: 10 }}><span style={{ color: ACCENT_B }}>$</span> shipping</div>
            <div style={{ color: PAPER_B, opacity: 0.85 }}>ML allocation · LLM agents · ETL @ Databricks</div>
            <div style={{ marginTop: 10 }}><span style={{ color: ACCENT_B }}>$</span> side_project</div>
            <div style={{ color: PAPER_B, opacity: 0.85 }}>Filka Studio (cofounder, since 2022)</div>
            <div style={{ marginTop: 14, color: ACCENT_B }}>
              <span className="cursor-blink">_</span>
            </div>
          </div>
        </div>
      </div>

      {/* métricas pessoais */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 12,
        marginTop: 48,
      }}>
        <MetricCard label="experiência em dados" value="5 anos" sub="2021 → hoje" />
        <MetricCard label="cases entregues" value="20+" sub="Omie · Jadlog · Filka" />
        <MetricCard label="horas/mês economizadas" value="500+" sub="média via automação" accent />
        <MetricCard label="clientes Filka" value="8" sub="ativos & atendidos" />
      </div>
    </section>
  );
}

function SystemAbout({ t }) {
  return (
    <section id="about" style={{ padding: "32px" }}>
      <div style={{
        background: SURFACE_B,
        borderRadius: 14,
        border: `1px solid ${INK_B}10`,
        overflow: "hidden",
      }}>
        <div style={{
          padding: "14px 20px",
          borderBottom: `1px solid ${INK_B}10`,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: MUTED_B,
          display: "flex", justifyContent: "space-between",
        }}>
          <span>// {t.intro.title.toUpperCase()}</span>
          <span>about.md</span>
        </div>
        <div style={{
          padding: "40px",
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: 56,
          alignItems: "start",
        }}>
          <div>
            <div style={{
              aspectRatio: "1",
              background: `url('assets/filipe.jpg') center/cover`,
              borderRadius: 12,
              filter: "saturate(0.85)",
            }} />
            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em" }}>Filipe Martins</div>
              <div style={{ fontSize: 13, color: MUTED_B, marginTop: 2 }}>Analytics Engineer Sr.</div>
              <div style={{
                marginTop: 12,
                display: "flex", gap: 6,
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, padding: "3px 8px",
                  background: INK_B, color: PAPER_B, borderRadius: 4,
                }}>OMIE</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, padding: "3px 8px",
                  background: ACCENT_B, color: ACCENT_DEEP, borderRadius: 4,
                  fontWeight: 600,
                }}>FILKA</span>
              </div>
            </div>
          </div>
          <div>
            <p style={{
              fontSize: 22, lineHeight: 1.55,
              margin: 0,
              letterSpacing: "-0.005em",
              textWrap: "pretty",
            }}>{t.intro.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemServices({ t }) {
  return (
    <section id="services" style={{ padding: "48px 32px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 32 }}>
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: MUTED_B, marginBottom: 8,
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>// services</div>
          <h2 style={{
            fontSize: 56, lineHeight: 1, letterSpacing: "-0.035em",
            fontWeight: 500, margin: 0,
          }}>{t.services.title}</h2>
        </div>
        <p style={{ fontSize: 16, color: MUTED_B, maxWidth: 320, margin: 0 }}>{t.services.subtitle}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
        {t.services.items.map((s, i) => (
          <div key={i} style={{
            background: SURFACE_B,
            border: `1px solid ${INK_B}10`,
            borderRadius: 12,
            padding: 24,
            display: "flex", flexDirection: "column", gap: 14,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11, color: MUTED_B,
              }}>service_{s.tag}</span>
              <span style={{
                width: 32, height: 32, borderRadius: 8,
                background: INK_B, color: ACCENT_B,
                display: "grid", placeItems: "center", fontSize: 14,
              }}>↗</span>
            </div>
            <h3 style={{
              fontSize: 26, fontWeight: 500, margin: 0,
              letterSpacing: "-0.02em",
            }}>{s.name}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.5, color: MUTED_B, margin: 0 }}>{s.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 4 }}>
              {s.tags.map(tg => (
                <span key={tg} style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11, padding: "3px 8px",
                  background: `${INK_B}08`,
                  borderRadius: 4,
                }}>{tg}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SystemCases({ t }) {
  return (
    <section id="work" style={{ padding: "48px 32px" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: MUTED_B, marginBottom: 8,
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>// case_studies</div>
        <h2 style={{
          fontSize: 64, lineHeight: 1, letterSpacing: "-0.035em",
          fontWeight: 500, margin: 0,
        }}>{t.cases.title}</h2>
        <p style={{ fontSize: 17, color: MUTED_B, marginTop: 12, marginBottom: 0 }}>{t.cases.subtitle}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
        {t.cases.items.map((c, i) => {
          // first card big, others smaller
          const big = i === 0;
          return (
            <div key={i} style={{
              gridColumn: big ? "span 6" : "span 3",
              background: big ? INK_B : SURFACE_B,
              color: big ? PAPER_B : INK_B,
              borderRadius: 14,
              padding: big ? 36 : 24,
              border: big ? "none" : `1px solid ${INK_B}10`,
              display: "grid",
              gridTemplateColumns: big ? "1.4fr 1fr" : "1fr",
              gap: big ? 40 : 16,
              minHeight: big ? 280 : 220,
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: big ? ACCENT_B : MUTED_B,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  <span>{c.company}</span>
                  <span style={{ opacity: 0.5 }}>·</span>
                  <span>{c.year}</span>
                </div>
                <h3 style={{
                  fontSize: big ? 38 : 22,
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  margin: 0,
                }}>{c.name}</h3>
                <p style={{
                  fontSize: big ? 16 : 14,
                  lineHeight: 1.55,
                  color: big ? `${PAPER_B}c0` : MUTED_B,
                  margin: 0,
                  flex: 1,
                }}>{c.desc}</p>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                  {c.tags.map(tg => (
                    <span key={tg} style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      padding: "3px 7px",
                      background: big ? `${PAPER_B}15` : `${INK_B}08`,
                      borderRadius: 4,
                    }}>{tg}</span>
                  ))}
                </div>
              </div>
              <div style={{
                display: "flex", flexDirection: "column",
                justifyContent: big ? "center" : "flex-start",
                alignItems: big ? "flex-end" : "flex-start",
                gap: 4,
                ...(big ? {} : { marginTop: -4 }),
              }}>
                <div style={{
                  fontSize: big ? 96 : 44,
                  lineHeight: 1,
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  color: big ? ACCENT_B : INK_B,
                  fontFeatureSettings: "'tnum'",
                }}>{c.metric}</div>
                <div style={{
                  fontSize: big ? 14 : 12,
                  color: big ? `${PAPER_B}90` : MUTED_B,
                  textAlign: big ? "right" : "left",
                  maxWidth: big ? 200 : "100%",
                  lineHeight: 1.4,
                }}>{c.metricLabel}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SystemTimeline({ t }) {
  return (
    <section style={{ padding: "48px 32px" }}>
      <div style={{
        background: SURFACE_B,
        border: `1px solid ${INK_B}10`,
        borderRadius: 14,
        overflow: "hidden",
      }}>
        <div style={{
          padding: "14px 20px",
          borderBottom: `1px solid ${INK_B}10`,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          display: "flex", justifyContent: "space-between",
          color: MUTED_B,
        }}>
          <span>// timeline.log</span>
          <span>5 entries · 2021–2026</span>
        </div>
        <div style={{ padding: "32px 40px" }}>
          <h2 style={{
            fontSize: 48, lineHeight: 1, letterSpacing: "-0.035em",
            fontWeight: 500, margin: "0 0 32px",
          }}>{t.timeline.title}</h2>
          <div style={{ display: "flex", gap: 0, position: "relative" }}>
            {t.timeline.items.map((item, i) => {
              const isCurrent = i === t.timeline.items.length - 1;
              return (
                <div key={i} style={{
                  flex: 1, position: "relative",
                  paddingTop: 32,
                  borderTop: `1px solid ${INK_B}20`,
                }}>
                  <div style={{
                    position: "absolute",
                    top: -7, left: 0,
                    width: 13, height: 13, borderRadius: "50%",
                    background: isCurrent ? ACCENT_B : INK_B,
                    boxShadow: isCurrent ? `0 0 0 4px ${ACCENT_B}40` : "none",
                  }} />
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11, color: MUTED_B, marginBottom: 8,
                  }}>{item.date}</div>
                  <div style={{
                    fontSize: 16, fontWeight: 600,
                    letterSpacing: "-0.005em",
                    marginBottom: 4,
                  }}>{item.role}</div>
                  <div style={{
                    fontSize: 13,
                    color: ACCENT_DEEP,
                    fontWeight: 500, marginBottom: 8,
                  }}>{item.company}</div>
                  <div style={{ fontSize: 13, color: MUTED_B, lineHeight: 1.5, paddingRight: 12 }}>
                    {item.note}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemStack({ t }) {
  return (
    <section style={{ padding: "48px 32px" }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: MUTED_B, marginBottom: 8,
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>// stack</div>
        <h2 style={{
          fontSize: 56, lineHeight: 1, letterSpacing: "-0.035em",
          fontWeight: 500, margin: 0,
        }}>{t.stack.title}</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {t.stack.groups.map((g, i) => (
          <div key={i} style={{
            background: SURFACE_B,
            border: `1px solid ${INK_B}10`,
            borderRadius: 10,
            padding: 20,
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, color: MUTED_B,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 14,
            }}>{g.name}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {g.items.map(it => (
                <span key={it} style={{
                  fontSize: 13, padding: "6px 11px",
                  background: PAPER_B,
                  border: `1px solid ${INK_B}10`,
                  borderRadius: 6,
                  fontWeight: 500,
                }}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SystemTestimonials({ t }) {
  return (
    <section style={{ padding: "48px 32px" }}>
      <div style={{
        background: INK_B,
        color: PAPER_B,
        borderRadius: 14,
        padding: "48px",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: ACCENT_B, marginBottom: 24,
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>// {t.testimonials.title}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          {t.testimonials.items.map((tt, i) => (
            <div key={i}>
              <div style={{
                color: ACCENT_B,
                fontSize: 56, lineHeight: 0.6,
                marginBottom: 16, fontFamily: "Georgia, serif",
              }}>"</div>
              <p style={{
                fontSize: 22, lineHeight: 1.4,
                letterSpacing: "-0.01em",
                margin: "0 0 20px",
              }}>{tt.quote}</p>
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                paddingTop: 16,
                borderTop: `1px solid ${PAPER_B}15`,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: ACCENT_B, color: ACCENT_DEEP,
                  display: "grid", placeItems: "center",
                  fontWeight: 600, fontSize: 14,
                  letterSpacing: "-0.02em",
                }}>{tt.author.split(" ").map(n => n[0]).slice(0, 2).join("")}</div>
                <div>
                  <div style={{
                    fontSize: 14, fontWeight: 600,
                    letterSpacing: "-0.005em",
                  }}>{tt.author}</div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10, color: `${PAPER_B}70`,
                    letterSpacing: "0.05em",
                    marginTop: 2,
                  }}>{tt.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemFAQ({ t }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ padding: "48px 32px" }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: MUTED_B, marginBottom: 8,
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>// faq</div>
        <h2 style={{
          fontSize: 56, lineHeight: 1, letterSpacing: "-0.035em",
          fontWeight: 500, margin: 0,
        }}>{t.faq.title}</h2>
      </div>
      <div style={{
        background: SURFACE_B,
        border: `1px solid ${INK_B}10`,
        borderRadius: 14,
        overflow: "hidden",
      }}>
        {t.faq.items.map((f, i) => (
          <div key={i} onClick={() => setOpen(open === i ? -1 : i)} style={{
            padding: "20px 24px",
            cursor: "pointer",
            borderTop: i === 0 ? "none" : `1px solid ${INK_B}10`,
            background: open === i ? PAPER_B : "transparent",
          }}>
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "center", gap: 24,
            }}>
              <h4 style={{
                fontSize: 18, fontWeight: 500, margin: 0,
                letterSpacing: "-0.005em",
              }}>{f.q}</h4>
              <span style={{
                fontSize: 18,
                fontFamily: "'JetBrains Mono', monospace",
                color: MUTED_B,
                transform: open === i ? "rotate(45deg)" : "none",
                transition: "transform 0.25s",
              }}>+</span>
            </div>
            {open === i && (
              <p style={{
                fontSize: 15, lineHeight: 1.55,
                color: MUTED_B,
                margin: "12px 0 0",
                maxWidth: 720,
              }}>{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function SystemContact({ t }) {
  return (
    <section id="contact" style={{ padding: "48px 32px 32px" }}>
      <div style={{
        background: ACCENT_B,
        color: ACCENT_DEEP,
        borderRadius: 14,
        padding: "72px 48px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          right: -80, top: -80,
          width: 320, height: 320,
          borderRadius: "50%",
          background: `${ACCENT_DEEP}10`,
        }} />
        <div style={{ position: "relative", maxWidth: 720 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, marginBottom: 16,
            letterSpacing: "0.08em", textTransform: "uppercase",
            opacity: 0.7,
          }}>// {t.contact.title}</div>
          <h2 style={{
            fontSize: 88, lineHeight: 0.95,
            letterSpacing: "-0.04em",
            fontWeight: 500,
            margin: "0 0 24px",
          }}>{t.contact.title}.</h2>
          <p style={{
            fontSize: 19, lineHeight: 1.5,
            margin: "0 0 36px",
            opacity: 0.85,
            maxWidth: 540,
          }}>{t.contact.subtitle}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={window.SITE_LINKS.calendly} target="_blank" style={{
              background: ACCENT_DEEP, color: ACCENT_B,
              padding: "16px 26px", borderRadius: 8,
              fontSize: 15, fontWeight: 500,
              textDecoration: "none",
              display: "inline-flex", gap: 8, alignItems: "center",
            }}>{t.contact.cta1} <span>→</span></a>
            <a href={window.SITE_LINKS.email} style={{
              padding: "16px 26px", borderRadius: 8,
              fontSize: 15, fontWeight: 500,
              textDecoration: "none",
              color: ACCENT_DEEP,
              border: `1px solid ${ACCENT_DEEP}40`,
            }}>{t.contact.cta2}</a>
          </div>
        </div>
      </div>

      <footer style={{
        marginTop: 24,
        padding: "20px 24px",
        background: INK_B,
        color: PAPER_B,
        borderRadius: 14,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
      }}>
        <span style={{ opacity: 0.6 }}>{t.footer.tagline}</span>
        <div style={{ display: "flex", gap: 20 }}>
          <a href={window.SITE_LINKS.linkedin} target="_blank" style={{ color: PAPER_B, textDecoration: "none" }}>linkedin ↗</a>
          <a href={window.SITE_LINKS.github} target="_blank" style={{ color: PAPER_B, textDecoration: "none" }}>github ↗</a>
          <a href={window.SITE_LINKS.filka} target="_blank" style={{ color: ACCENT_B, textDecoration: "none" }}>filka.studio ↗</a>
        </div>
        <span style={{ opacity: 0.4 }}>{t.footer.rights}</span>
      </footer>
    </section>
  );
}

function SystemSite() {
  const [lang, setLang] = React.useState("pt");
  const t = window.SITE_CONTENT[lang];
  return (
    <div style={systemStyles.root}>
      <SystemNav lang={lang} setLang={setLang} t={t} />
      <SystemHero t={t} lang={lang} />
      <SystemAbout t={t} />
      <SystemServices t={t} />
      <SystemCases t={t} />
      <SystemTimeline t={t} />
      <SystemStack t={t} />
      <SystemTestimonials t={t} />
      <SystemFAQ t={t} />
      <SystemContact t={t} />
    </div>
  );
}

window.SystemSite = SystemSite;
