/* === SITE — Duwy-style, limpo e profissional === */

const BG = "#FAFAF7";
const SURF = "#FFFFFF";
const INK = "#0E0E0C";
const MUTED = "#6B6B66";
const BORDER = "rgba(14,14,12,0.08)";
const SUBTLE_BORDER = "rgba(14,14,12,0.06)";
const ACCENT = "#0E0E0C"; // accent é o próprio preto, Duwy é minimalista
const HIGHLIGHT = "#E8FF6C"; // amarelo sutil para destaque (substitui verde elétrico)
const HIGHLIGHT_INK = "#1A2200";

const dStyles = {
  root: {
    fontFamily: "'Inter Tight', 'Helvetica Neue', sans-serif",
    background: BG,
    color: INK,
    width: "100%",
    minHeight: "100%",
    overflow: "hidden",
  },
};

/* ---------- Reusable label ---------- */
function Pill({ children, dark = false }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "6px 14px",
      background: dark ? INK : SURF,
      color: dark ? "#fff" : INK,
      border: dark ? "none" : `1px solid ${BORDER}`,
      borderRadius: 999,
      fontSize: 13, fontWeight: 500,
      letterSpacing: "-0.005em",
      whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

/* ---------- NAV ---------- */
function DNav({ lang, setLang, t, current = "home" }) {
  const items = [
    { key: "filipe", label: t.nav.work, href: current === "filka" ? "./" : "#top" },
    { key: "filka", label: t.nav.filka, href: "filka.html" },
    { key: "about", label: t.nav.about, href: current === "filka" ? "./#about" : "#about" },
    { key: "contact", label: t.nav.contact, href: current === "filka" ? "./#contact" : "#contact" },
  ];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      padding: "20px 40px",
      background: `${BG}d8`,
      backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${SUBTLE_BORDER}`,
    }}>
      <a href="./" style={{
        display: "flex", alignItems: "center", gap: 10,
        textDecoration: "none", color: INK,
      }}>
        <div style={{
          width: 32, height: 32,
          background: INK, color: "#fff",
          borderRadius: 8,
          display: "grid", placeItems: "center",
          fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em",
        }}>F</div>
        <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-0.015em", whiteSpace: "nowrap" }}>
          Filipe Martins
        </span>
      </a>

      <div style={{
        display: "flex", gap: 2,
        padding: 4,
        background: SURF,
        border: `1px solid ${BORDER}`,
        borderRadius: 999,
      }}>
        {items.map(it => {
          const active =
            (current === "home" && it.key === "filipe") ||
            (current === "filka" && it.key === "filka");
          return (
            <a key={it.key} href={it.href} style={{
              padding: "9px 20px",
              textDecoration: "none",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "-0.005em",
              background: active ? INK : "transparent",
              color: active ? "#fff" : INK,
            }}>{it.label}</a>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, alignItems: "center" }}>
        <div style={{
          display: "flex",
          border: `1px solid ${BORDER}`,
          borderRadius: 999,
          padding: 3,
          background: SURF,
        }}>
          {["pt", "en"].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: "5px 12px", border: "none",
              background: lang === l ? INK : "transparent",
              color: lang === l ? "#fff" : INK,
              fontFamily: "inherit", fontSize: 12, cursor: "pointer",
              borderRadius: 999, fontWeight: 600,
              letterSpacing: "0.02em",
            }}>{l.toUpperCase()}</button>
          ))}
        </div>
        <a href={window.SITE_LINKS.calendly} target="_blank" style={{
          background: INK, color: "#fff",
          padding: "11px 22px", borderRadius: 999,
          textDecoration: "none", fontSize: 14, fontWeight: 500,
          letterSpacing: "-0.005em",
          whiteSpace: "nowrap",
        }}>{t.hero.cta}</a>
      </div>
    </nav>
  );
}

/* ---------- HERO ---------- */
function DHero({ t, lang }) {
  return (
    <section id="top" style={{ padding: "72px 40px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 56, alignItems: "start" }}>
        <h1 style={{
          fontSize: 168,
          lineHeight: 0.9,
          letterSpacing: "-0.055em",
          fontWeight: 500,
          margin: 0,
          fontFamily: "'Inter Tight', sans-serif",
        }}>
          {t.hero.role1}<br />{t.hero.role2}
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 20 }}>
          <div style={{
            aspectRatio: "1 / 1",
            background: `url('assets/filipe.jpg') center/cover`,
            borderRadius: 16,
            filter: "saturate(0.92) contrast(1.02)",
          }} />
          <div>
            <div style={{
              fontSize: 14, fontWeight: 500,
              color: MUTED, marginBottom: 8,
            }}>{t.hero.eyebrow}</div>
            <p style={{
              fontSize: 17, lineHeight: 1.5,
              color: INK, margin: 0,
              fontWeight: 400,
              textWrap: "pretty",
            }}>
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST STRIP ---------- */
function DTrustStrip({ t }) {
  // Duwy-style: horizontal row of brand pills (no fancy icons, just clean labels)
  return (
    <section style={{ padding: "16px 40px 48px", overflow: "hidden" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        {t.trust.items.map((name, i) => (
          <div key={name} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "12px 22px",
            background: SURF,
            border: `1px solid ${BORDER}`,
            borderRadius: 999,
            fontSize: 17, fontWeight: 500,
            letterSpacing: "-0.015em",
            whiteSpace: "nowrap",
          }}>{name}</div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function DAbout({ t }) {
  return (
    <section id="about" style={{ padding: "72px 40px" }}>
      <div style={{ marginBottom: 32 }}>
        <Pill>{t.about.eyebrow}</Pill>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: 80,
        alignItems: "start",
      }}>
        <div>
          <h2 style={{
            fontSize: 56,
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            fontWeight: 500,
            margin: "0 0 28px",
            maxWidth: 720,
            textWrap: "balance",
          }}>{t.about.title}</h2>
          <p style={{
            fontSize: 18, lineHeight: 1.55,
            color: MUTED, margin: 0,
            maxWidth: 640,
            textWrap: "pretty",
          }}>{t.about.body}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}>
          {t.about.stats.map((s, i) => (
            <div key={i} style={{
              padding: "28px 28px",
              background: SURF,
              border: `1px solid ${BORDER}`,
              borderRadius: 14,
            }}>
              <div style={{
                fontSize: 56, fontWeight: 500,
                letterSpacing: "-0.045em",
                lineHeight: 1,
                color: INK,
              }}>{s.value}</div>
              <div style={{ fontSize: 14, color: MUTED, marginTop: 10, lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function DServices({ t }) {
  return (
    <section id="services" style={{ padding: "32px 40px 72px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, marginBottom: 40 }}>
        <div>
          <div style={{ marginBottom: 20 }}>
            <Pill>{t.services.eyebrow}</Pill>
          </div>
          <h2 style={{
            fontSize: 48, lineHeight: 1, letterSpacing: "-0.035em",
            fontWeight: 500, margin: 0,
            textWrap: "balance",
          }}>{t.services.title}</h2>
          <p style={{
            fontSize: 16, lineHeight: 1.55,
            color: MUTED, margin: "20px 0 0",
            maxWidth: 360,
          }}>{t.services.subtitle}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {t.services.items.map((s, i) => {
            const dark = i === 1;
            return (
              <div key={i} style={{
                background: dark ? INK : SURF,
                color: dark ? "#fff" : INK,
                border: dark ? "none" : `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: 28,
                display: "flex", flexDirection: "column", gap: 14,
                minHeight: 240,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{
                    fontSize: 21, fontWeight: 500, margin: 0,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                    maxWidth: 220,
                  }}>{s.name}</h3>
                  <span style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: dark ? "#fff" : INK,
                    color: dark ? INK : "#fff",
                    display: "grid", placeItems: "center",
                    fontSize: 14, fontWeight: 400,
                    flexShrink: 0,
                  }}>↗</span>
                </div>
                <p style={{
                  fontSize: 14, lineHeight: 1.55,
                  color: dark ? "rgba(255,255,255,0.7)" : MUTED, margin: 0,
                  flex: 1,
                }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                  {s.tags.map(tg => (
                    <span key={tg} style={{
                      fontSize: 12, padding: "5px 11px",
                      background: dark ? "rgba(255,255,255,0.1)" : BG,
                      color: dark ? "#fff" : INK,
                      borderRadius: 999,
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}>{tg}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE TABLE ---------- */
function DExperience({ t }) {
  return (
    <section style={{ padding: "32px 40px 72px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 32, gap: 48 }}>
        <div>
          <div style={{ marginBottom: 20 }}>
            <Pill>{t.experience.eyebrow}</Pill>
          </div>
          <h2 style={{
            fontSize: 48, lineHeight: 1.02, letterSpacing: "-0.035em",
            fontWeight: 500, margin: 0,
            maxWidth: 640,
            textWrap: "balance",
          }}>{t.experience.title}</h2>
        </div>
        <p style={{
          fontSize: 15, lineHeight: 1.55,
          color: MUTED, margin: 0,
          maxWidth: 280,
        }}>{t.experience.subtitle}</p>
      </div>

      <div style={{
        background: SURF,
        border: `1px solid ${BORDER}`,
        borderRadius: 16,
        overflow: "hidden",
      }}>
        {t.experience.items.slice().reverse().map((item, i) => {
          const isCurrent = i === 0;
          return (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1.2fr 160px",
              gap: 32, alignItems: "center",
              padding: "28px 32px",
              borderTop: i === 0 ? "none" : `1px solid ${SUBTLE_BORDER}`,
              background: isCurrent ? BG : "transparent",
            }}>
              <div>
                <div style={{
                  fontSize: 19, fontWeight: 600,
                  letterSpacing: "-0.015em",
                }}>{item.role}</div>
                <div style={{ fontSize: 14, color: MUTED, marginTop: 4 }}>
                  {item.company}
                </div>
              </div>
              <div style={{ fontSize: 14, color: MUTED, lineHeight: 1.5 }}>
                {item.desc}
              </div>
              <div style={{
                fontSize: 20, fontWeight: 500,
                letterSpacing: "-0.02em",
                textAlign: "right",
                color: isCurrent ? INK : MUTED,
              }}>{item.period}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- CASES ---------- */
function DCases({ t }) {
  return (
    <section id="work" style={{ padding: "32px 40px 72px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 32, gap: 48 }}>
        <div>
          <div style={{ marginBottom: 20 }}>
            <Pill>{t.cases.eyebrow}</Pill>
          </div>
          <h2 style={{
            fontSize: 48, lineHeight: 1.02, letterSpacing: "-0.035em",
            fontWeight: 500, margin: 0,
            maxWidth: 640,
            textWrap: "balance",
          }}>{t.cases.title}</h2>
        </div>
        <p style={{ fontSize: 15, color: MUTED, margin: 0, maxWidth: 280 }}>
          {t.cases.subtitle}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14 }}>
        {/* Card grande primeiro */}
        <DCaseBig c={t.cases.items[0]} />
        <DCase c={t.cases.items[1]} />
        <DCase c={t.cases.items[2]} />
        <DCase c={t.cases.items[3]} />
        <DCase c={t.cases.items[4]} />
      </div>
    </section>
  );
}

function DCaseBig({ c }) {
  return (
    <div style={{
      gridColumn: "span 6",
      background: INK,
      color: "#fff",
      borderRadius: 18,
      padding: 40,
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 56,
      minHeight: 280,
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          fontSize: 13, color: "rgba(255,255,255,0.6)",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}>
          <span>{c.company}</span>
          <span>·</span>
          <span>{c.year}</span>
        </div>
        <h3 style={{
          fontSize: 36, fontWeight: 500, margin: 0,
          letterSpacing: "-0.03em", lineHeight: 1.05,
          maxWidth: 540,
        }}>{c.name}</h3>
        <p style={{
          fontSize: 16, lineHeight: 1.55,
          color: "rgba(255,255,255,0.7)", margin: 0,
          maxWidth: 540,
          flex: 1,
        }}>{c.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {c.tags.map(tg => (
            <span key={tg} style={{
              fontSize: 12, padding: "5px 11px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: 999, fontWeight: 500,
            }}>{tg}</span>
          ))}
        </div>
      </div>
      <div style={{
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 14,
        padding: 32,
      }}>
        <div style={{
          fontSize: 96, fontWeight: 500,
          letterSpacing: "-0.05em", lineHeight: 1,
          color: HIGHLIGHT,
        }}>{c.metric}</div>
        <div style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.7)",
          marginTop: 12, lineHeight: 1.4,
        }}>{c.metricLabel}</div>
      </div>
    </div>
  );
}

function DCase({ c }) {
  return (
    <div style={{
      gridColumn: "span 3",
      background: SURF,
      border: `1px solid ${BORDER}`,
      borderRadius: 16,
      padding: 28,
      display: "flex", flexDirection: "column", gap: 14,
      minHeight: 260,
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        fontSize: 13, color: MUTED, fontWeight: 500,
        whiteSpace: "nowrap",
      }}>
        <span>{c.company}</span>
        <span>·</span>
        <span>{c.year}</span>
      </div>
      <h3 style={{
        fontSize: 22, fontWeight: 500, margin: 0,
        letterSpacing: "-0.02em", lineHeight: 1.15,
      }}>{c.name}</h3>
      <p style={{
        fontSize: 14, lineHeight: 1.55,
        color: MUTED, margin: 0,
        flex: 1,
      }}>{c.desc}</p>
      <div style={{
        marginTop: "auto", paddingTop: 16,
        borderTop: `1px solid ${SUBTLE_BORDER}`,
        display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16,
      }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{
            fontSize: 36, fontWeight: 500,
            letterSpacing: "-0.035em", lineHeight: 1,
          }}>{c.metric}</div>
          <div style={{
            fontSize: 12, color: MUTED,
            marginTop: 6, lineHeight: 1.4,
          }}>{c.metricLabel}</div>
        </div>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 140 }}>
          {c.tags.slice(0, 2).map(tg => (
            <span key={tg} style={{
              fontSize: 11, padding: "3px 9px",
              background: BG,
              borderRadius: 999, fontWeight: 500,
              whiteSpace: "nowrap",
            }}>{tg}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- TESTIMONIAL ---------- */
function DTestimonial({ t }) {
  const [idx, setIdx] = React.useState(0);
  const items = t.testimonials.items;
  const tt = items[idx];
  return (
    <section style={{ padding: "32px 40px 72px" }}>
      <div style={{
        background: SURF,
        border: `1px solid ${BORDER}`,
        borderRadius: 18,
        padding: "80px 64px",
        position: "relative",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: 64, lineHeight: 0.6,
          fontFamily: "Georgia, serif",
          color: INK, opacity: 0.15,
          marginBottom: 32,
        }}>"</div>

        <p style={{
          fontSize: 28, lineHeight: 1.4,
          letterSpacing: "-0.015em",
          margin: "0 auto 48px",
          fontWeight: 400, color: INK,
          maxWidth: 880,
          textWrap: "balance",
        }}>{tt.quote}</p>

        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          justifyContent: "center",
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: INK, color: "#fff",
            display: "grid", placeItems: "center",
            fontWeight: 600, fontSize: 15,
            letterSpacing: "-0.02em",
          }}>{tt.author.split(" ").map(n => n[0]).slice(0, 2).join("")}</div>
          <div style={{ textAlign: "left" }}>
            <div style={{
              fontSize: 15, fontWeight: 600,
              letterSpacing: "-0.005em",
            }}>{tt.author}</div>
            <div style={{
              fontSize: 13, color: MUTED, marginTop: 2,
            }}>{tt.role}</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 32 }}>
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{
              width: i === idx ? 28 : 8, height: 8, borderRadius: 999,
              background: i === idx ? INK : `${INK}25`,
              border: "none", cursor: "pointer",
              transition: "all 0.3s",
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FILKA STRIP ---------- */
function DFilkaStrip({ t }) {
  return (
    <section style={{ padding: "32px 40px" }}>
      <a href="filka.html" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <div style={{
          background: SURF,
          border: `1px solid ${BORDER}`,
          borderRadius: 18,
          padding: "40px 48px",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 40,
          alignItems: "center",
          cursor: "pointer",
          transition: "all 0.25s",
        }} onMouseEnter={e => {
          e.currentTarget.style.borderColor = INK;
        }} onMouseLeave={e => {
          e.currentTarget.style.borderColor = BORDER;
        }}>
          <div style={{
            padding: "16px 22px",
            background: INK, color: "#fff",
            borderRadius: 12,
            fontSize: 26, fontWeight: 700,
            letterSpacing: "-0.025em",
          }}>Filka</div>
          <div>
            <div style={{
              fontSize: 22, fontWeight: 500,
              letterSpacing: "-0.015em", marginBottom: 6,
              textWrap: "balance",
            }}>{t.filkaStrip.title}</div>
            <div style={{ fontSize: 15, color: MUTED, lineHeight: 1.5 }}>
              {t.filkaStrip.desc}
            </div>
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "14px 24px",
            background: INK, color: "#fff",
            borderRadius: 999,
            fontSize: 14, fontWeight: 500,
            whiteSpace: "nowrap",
          }}>
            {t.filkaStrip.cta} <span>→</span>
          </div>
        </div>
      </a>
    </section>
  );
}

/* ---------- CTA / CONTACT ---------- */
function DContact({ t }) {
  return (
    <section id="contact" style={{ padding: "32px 40px 32px" }}>
      <div style={{
        background: INK,
        color: "#fff",
        borderRadius: 22,
        padding: "100px 64px",
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: 56,
        alignItems: "center",
      }}>
        <div>
          <div style={{
            fontSize: 14, fontWeight: 500,
            color: "rgba(255,255,255,0.5)",
            marginBottom: 20,
          }}>{t.contact.eyebrow}</div>
          <h2 style={{
            fontSize: 104, lineHeight: 0.92,
            letterSpacing: "-0.055em",
            fontWeight: 500,
            margin: "0 0 24px",
          }}>{t.contact.title}</h2>
          <p style={{
            fontSize: 18, lineHeight: 1.5,
            color: "rgba(255,255,255,0.7)",
            margin: 0, maxWidth: 540,
            textWrap: "pretty",
          }}>{t.contact.subtitle}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a href={window.SITE_LINKS.calendly} target="_blank" style={{
            background: "#fff", color: INK,
            padding: "22px 28px", borderRadius: 14,
            fontSize: 16, fontWeight: 500,
            textDecoration: "none",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span>{t.contact.cta1}</span>
            <span style={{ fontSize: 22 }}>→</span>
          </a>
          <a href={window.SITE_LINKS.email} style={{
            background: "rgba(255,255,255,0.06)",
            color: "#fff",
            padding: "22px 28px", borderRadius: 14,
            fontSize: 16, fontWeight: 500,
            textDecoration: "none",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            border: "1px solid rgba(255,255,255,0.12)",
            whiteSpace: "nowrap",
          }}>
            <span>{t.contact.cta2}</span>
            <span style={{ fontSize: 22 }}>→</span>
          </a>
          <a href={window.SITE_LINKS.linkedin} target="_blank" style={{
            color: "rgba(255,255,255,0.5)",
            padding: "22px 28px", borderRadius: 14,
            fontSize: 16, fontWeight: 500,
            textDecoration: "none",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span>LinkedIn</span>
            <span style={{ fontSize: 22 }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function DFooter({ t }) {
  return (
    <footer style={{ padding: "32px 40px 40px" }}>
      <div style={{
        padding: "24px 32px",
        borderRadius: 14,
        background: SURF,
        border: `1px solid ${BORDER}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 13,
        color: MUTED,
        flexWrap: "wrap", gap: 16,
      }}>
        <span>{t.footer.tagline}</span>
        <div style={{ display: "flex", gap: 20 }}>
          <a href={window.SITE_LINKS.linkedin} target="_blank" style={{ color: INK, textDecoration: "none", fontWeight: 500 }}>LinkedIn ↗</a>
          <a href={window.SITE_LINKS.github} target="_blank" style={{ color: INK, textDecoration: "none", fontWeight: 500 }}>GitHub ↗</a>
          <a href={window.SITE_LINKS.filka} target="_blank" style={{ color: INK, textDecoration: "none", fontWeight: 500 }}>Filka ↗</a>
        </div>
        <span style={{ fontSize: 12 }}>{t.footer.rights}</span>
      </div>
    </footer>
  );
}

/* ---------- ROOT ---------- */
function MainSite() {
  const [lang, setLang] = React.useState("pt");
  const t = window.SITE_CONTENT[lang];
  return (
    <div style={dStyles.root}>
      <DNav lang={lang} setLang={setLang} t={t} current="home" />
      <DHero t={t} lang={lang} />
      <DTrustStrip t={t} />
      <DAbout t={t} />
      <DServices t={t} />
      <DExperience t={t} />
      <DCases t={t} />
      <DTestimonial t={t} />
      <DFilkaStrip t={t} />
      <DContact t={t} />
      <DFooter t={t} />
    </div>
  );
}

window.MainSite = MainSite;
window.DNav = DNav;
window.DFooter = DFooter;
window.dStyles = dStyles;
window.D_BG = BG;
window.D_SURF = SURF;
window.D_INK = INK;
window.D_MUTED = MUTED;
window.D_BORDER = BORDER;
window.D_PILL = Pill;
