/* Filipe Martins — bundled components. Source: src/v4/*.jsx */

const { useEffect: useE4, useRef: useR4, useState: useS4 } = React;

const clamp1 = n => Math.max(-1, Math.min(1, n));

/* --- lanyard badge: swings with the pointer, or with device tilt on mobile --- */
function Badge({ b, side, tiltHint }) {
  const rig = useR4(null);
  const card = useR4(null);
  const inp = useR4({ x: 0, y: 0 });
  const [needsAsk, setAsk] = useS4(false);

  useE4(() => {
    let a = 0, v = 0, ty = 0, tx = 0, raf, t0 = performance.now();
    const soft = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onMove = e => {
      inp.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      inp.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const tick = now => {
      const { x, y } = inp.current;
      const idle = Math.sin((now - t0) / 1500) * 1.15;
      const target = x * 13 + idle;
      v += (target - a) * 0.014;
      v *= 0.915;
      a += v;
      ty += (x * 15 - ty) * 0.075;
      tx += (-y * 9 - tx) * 0.075;
      if (rig.current) rig.current.style.transform = `rotate(${a.toFixed(3)}deg)`;
      if (card.current) card.current.style.transform = `perspective(900px) rotateY(${ty.toFixed(3)}deg) rotateX(${tx.toFixed(3)}deg)`;
      raf = requestAnimationFrame(tick);
    };
    if (!soft) {
      window.addEventListener("pointermove", onMove);
      raf = requestAnimationFrame(tick);
    }
    return () => { window.removeEventListener("pointermove", onMove); if (raf) cancelAnimationFrame(raf); };
  }, []);

  /* device tilt — gyroscope on phones and tablets */
  useE4(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: coarse)").matches) return;
    if (typeof DeviceOrientationEvent === "undefined") return;

    let base = null;
    const onTilt = e => {
      if (e.gamma == null && e.beta == null) return;
      const rot = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
      const land = rot === 90 || rot === -90 || rot === 270;
      const g = e.gamma || 0, be = e.beta || 0;
      const lr = land ? be : g;
      const fb = land ? -g : be;
      if (base === null) base = fb;
      inp.current.x = clamp1((land ? -lr : lr) / 32);
      inp.current.y = clamp1((fb - base) / 30);
    };

    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      setAsk(true);
      window.__badgeTilt = async () => {
        try {
          const r = await DeviceOrientationEvent.requestPermission();
          if (r === "granted") { window.addEventListener("deviceorientation", onTilt); setAsk(false); }
        } catch (err) { setAsk(false); }
      };
    } else {
      window.addEventListener("deviceorientation", onTilt);
    }
    return () => { window.removeEventListener("deviceorientation", onTilt); delete window.__badgeTilt; };
  }, []);

  const strapText = Array(9).fill(b.name.toUpperCase()).join("  ·  ");

  return (
    <div className="rig-wrap">
      <span className="side-tag">{side}</span>
      <div className="rig" ref={rig}>
        <div className="strap"><span>{strapText}</span></div>
        <div className="clip"></div>
        <div className="ring"></div>
        <div className="card3d" ref={card}>
          <div className="badge">
            <span className="punch"></span>
            <div className="badge-photo">
              <img src="assets/filipe.jpg" alt={b.name} width="240" height="240" />
            </div>
            <div className="badge-foot">
              <p className="badge-name">{b.name}</p>
              <p className="badge-role">{b.role}</p>
              <div className="badge-pills">
                {b.pills.map(p => <span key={p}>{p}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {needsAsk && tiltHint && (
        <button className="tilt-ask" onClick={() => window.__badgeTilt && window.__badgeTilt()}>
          {tiltHint}
        </button>
      )}
    </div>
  );
}

window.Badge = Badge;


const { useState: useS3, useEffect: useE3, useRef: useR3 } = React;

const ICON_CDN = "https://cdn.jsdelivr.net/npm/simple-icons/icons/";

/* brand hexes can be near-black; lift them so they read on the dark page */
function liftColor(hex) {
  if (!hex || hex[0] !== "#") return "#FFFFFF";
  const h = hex.length === 4
    ? "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
    : hex;
  let r = parseInt(h.slice(1, 3), 16), g = parseInt(h.slice(3, 5), 16), b = parseInt(h.slice(5, 7), 16);
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (lum < 0.42) {
    const k = Math.min(0.78, (0.42 - lum) * 1.5);
    r = Math.round(r + (255 - r) * k);
    g = Math.round(g + (255 - g) * k);
    b = Math.round(b + (255 - b) * k);
  }
  return `rgb(${r},${g},${b})`;
}

/* --- brand mark, falls back to the name if the icon 404s --- */
function Mark({ x, size }) {
  const [err, setErr] = useS3(false);
  useE3(() => {
    let live = true;
    const probe = new Image();
    probe.onerror = () => { if (live) setErr(true); };
    probe.src = ICON_CDN + x.s + ".svg";
    return () => { live = false; };
  }, [x.s]);
  if (err) return <span className="mark-fb">{x.n}</span>;
  return (
    <span
      className="mark"
      role="img"
      aria-label={x.n}
      title={x.n}
      style={{
        width: size, height: size,
        "--mi": `url("${ICON_CDN + x.s}.svg")`,
        "--mc": liftColor(x.c),
      }}
    ></span>
  );
}

/* --- tech field: clustered at center, spreads open on scroll --- */
const FIELD = [
  [16, 13, -7], [9, 37, 6], [21, 62, -5], [13, 84, 7],
  [34, 24, 5], [30, 74, -6], [46, 8, -4], [44, 90, 6],
  [58, 30, 7], [62, 68, -7], [72, 16, 5], [76, 52, -5],
  [70, 86, 6], [86, 38, -6],
];
function Skills({ t }) {
  const wrap = useR3(null);
  const [k, setK] = useS3(1);
  const [box, setBox] = useS3({ w: 1100, h: 520 });

  useE3(() => {
    const measure = () => {
      const el = wrap.current;
      if (el) setBox({ w: el.clientWidth, h: el.clientHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useE3(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setK(0); return; }
    const on = () => {
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight - r.top) / (window.innerHeight * 0.7);
      const clamped = Math.min(1, Math.max(0, p));
      setK(0.25 * (1 - clamped));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [box.h]);

  const kk = Math.min(0.25, Math.max(0, k));
  return (
    <section className="sec skills" data-rv>
      <div className="field" ref={wrap} style={{ "--k": kk }} aria-hidden="true">
        {window.V3.tech.map((x, i) => {
          const [top, left, rot] = FIELD[i % FIELD.length];
          const ang = Math.atan2(top - 50, left - 50);
          const rx = 50 + Math.cos(ang) * 30;
          const ry = 50 + Math.sin(ang) * 40;
          return (
            <span key={x.n} className="tile" style={{
              top: top + "%", left: left + "%",
              "--rot": rot + "deg",
              "--dx": ((rx - left) / 100) * box.w + "px",
              "--dy": ((ry - top) / 100) * box.h + "px",
            }}><Mark x={x} size={30} /></span>
          );
        })}
      </div>
      <h2 className="skills-h">
        {t.skills.title}<br /><span className="dim">{t.skills.title2}</span>
      </h2>
    </section>
  );
}

/* --- one stat at a time, cycling + two marquee rows --- */
function Stats({ t }) {
  const items = t.stats.items;
  const [i, setI] = useS3(0);
  const [vis, setVis] = useS3(true);
  useE3(() => {
    let swap;
    const id = setInterval(() => {
      setVis(false);
      swap = setTimeout(() => { setI(v => (v + 1) % items.length); setVis(true); }, 320);
    }, 3400);
    return () => { clearInterval(id); clearTimeout(swap); };
  }, [items.length]);
  const s = items[i % items.length];
  const row = [...window.V3.tech, ...window.V3.tech];
  return (
    <section className="sec stats-sec" data-rv>
      <h2 className="stats-h">{t.stats.heading}</h2>
      <div className={vis ? "stat-one on" : "stat-one"}>
        <span className="stat-ico">
          <Mark x={s} size={46} />
        </span>
        <p className="stat-line">
          <span className="acc">{s.v}</span> {s.l}
        </p>
      </div>
      <div className="dots stat-dots">
        {items.map((_, n) => (
          <button key={n} className={n === i ? "dot on" : "dot"}
            onClick={() => { setI(n); setVis(true); }} aria-label={"número " + (n + 1)}></button>
        ))}
      </div>
      <div className="marq">
        <div className="marq-in">
          {row.map((x, n) => <span key={n} className="marq-t"><Mark x={x} size={26} /></span>)}
        </div>
      </div>
      <div className="marq">
        <div className="marq-in rev">
          {row.map((x, n) => <span key={n} className="marq-t"><Mark x={x} size={26} /></span>)}
        </div>
      </div>
    </section>
  );
}

/* --- experience --- */
function Experience({ t }) {
  return (
    <section className="sec exp-sec" id="exp" data-rvi>
      <h2 className="sec-h exp-h" data-rv>
        <span className="acc">{t.exp.accent}</span> {t.exp.rest}
      </h2>
      <div className="exp-grid">
        <div className="exp-aside">
          <div className="exp-span">
            <span>{t.h4.axis[0]}</span>
            <span className="exp-line"></span>
            <span>{t.h4.axis[1]}</span>
          </div>
        </div>
        <div className="exp-list">
          {t.exp.items.map((e, i) => (
            <article className="exp-row" key={i} data-rvi>
              <h3 className="exp-role">
                {e.role} <span className="dim">@</span> <span className="acc">{e.co}</span>
              </h3>
              <p className="exp-period">{e.period}</p>
              <ul className="exp-b">
                {e.bullets.map((b, k) => <li key={k}>{window.richText(b)}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- testimonials --- */
function Quotes({ t }) {
  const [i, setI] = useS3(0);
  const items = t.quotes.items;
  const q = items[i];
  return (
    <section className="sec quote-sec" data-rv>
      <h2 className="sec-h">{t.quotes.heading}</h2>
      <blockquote className="quote">
        <span className="quote-mark">&ldquo;</span>
        <p className="quote-t">{q.q}</p>
        <footer className="quote-f">
          {q.url
            ? <a className="quote-who" href={q.url} target="_blank" rel="noopener">
                <span className="ava">
                  {q.img
                    ? <img className="ava-img" src={q.img} alt={q.a} width="42" height="42" />
                    : <image-slot id={"quote-" + i} shape="circle" placeholder={q.a}></image-slot>}
                  <span className="ava-in">{q.a.split(" ").map(n => n[0]).slice(0, 2).join("")}</span>
                </span>
                <span className="quote-id">
                  <span className="quote-a">{q.a}</span>
                  <span className="quote-r">{q.r}</span>
                </span>
              </a>
            : <span className="quote-who">
                <span className="ava">
                  {q.img
                    ? <img className="ava-img" src={q.img} alt={q.a} width="42" height="42" />
                    : <image-slot id={"quote-" + i} shape="circle" placeholder={q.a}></image-slot>}
                  <span className="ava-in">{q.a.split(" ").map(n => n[0]).slice(0, 2).join("")}</span>
                </span>
                <span className="quote-id">
                  <span className="quote-a">{q.a}</span>
                  <span className="quote-r">{q.r}</span>
                </span>
              </span>}
        </footer>
      </blockquote>
      <div className="dots">
        {items.map((_, k) => (
          <button key={k} className={k === i ? "dot on" : "dot"} onClick={() => setI(k)} aria-label={"depoimento " + (k + 1)}></button>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Skills, Stats, Experience, Quotes, Mark });


const { useState: useSW, useEffect: useEW, useRef: useRW } = React;

/* --- interactive terminal --- */
function Terminal({ t, lang }) {
  const T = window.V3.terminal[lang];
  const [lines, setLines] = useSW(() => T.boot.map(l => ({ k: "o", v: l })));
  const [val, setVal] = useSW("");
  const bodyRef = useRW(null);
  const inRef = useRW(null);

  useEW(() => { setLines(T.boot.map(l => ({ k: "o", v: l }))); }, [lang]);
  useEW(() => {
    const b = bodyRef.current;
    if (b) b.scrollTop = b.scrollHeight;
  }, [lines]);

  function run(raw) {
    const cmd = raw.trim().toLowerCase();
    const out = [{ k: "i", v: raw }];
    if (!cmd) { setLines(l => [...l, ...out]); return; }
    if (cmd === "clear") { setLines([]); return; }
    let res;
    if (cmd === "help") res = T.help;
    else if (cmd === "whoami") res = T.whoami;
    else if (cmd === "filka") res = T.filka;
    else if (cmd === "contact") res = T.contact;
    else if (cmd === "stack") res = ["", ...chunk(window.V3.tech.map(x => x.n), 4).map(r => "  " + r.join("   ")), ""];
    else if (cmd === "cases") res = ["", ...t.work.cases.map(c => `  ${c.metric.padEnd(7)} ${c.name}  [${c.co}, ${c.yr}]`), ""];
    else if (cmd === "exp") res = ["", ...t.exp.items.map(e => `  ${e.period.padEnd(16)} ${e.role} @ ${e.co}`), ""];
    else res = [T.notFound(cmd)];
    setLines(l => [...l, ...out, ...res.map(v => ({ k: "o", v }))]);
  }

  function chunk(a, n) {
    const r = [];
    for (let i = 0; i < a.length; i += n) r.push(a.slice(i, i + n));
    return r;
  }

  return (
    <div className="term" onClick={() => inRef.current && inRef.current.focus()}>
      <div className="term-bar">
        <span className="tl tl-r"></span><span className="tl tl-y"></span><span className="tl tl-g"></span>
        <span className="term-title">filipe@portfolio:~</span>
      </div>
      <div className="term-body" ref={bodyRef}>
        {lines.map((l, i) => (
          <div key={i} className={l.k === "i" ? "term-in" : "term-out"}>
            {l.k === "i" && <span className="term-ps">filipe@portfolio:~$</span>}
            <span>{l.v}</span>
          </div>
        ))}
        <form className="term-form" onSubmit={e => { e.preventDefault(); run(val); setVal(""); }}>
          <span className="term-ps">filipe@portfolio:~$</span>
          <input
            ref={inRef} value={val} onChange={e => setVal(e.target.value)}
            spellCheck="false" autoComplete="off" aria-label="terminal"
          />
        </form>
      </div>
    </div>
  );
}

/* --- case cards --- */
function CaseCard({ c, i, viewLabel, onOpen }) {
  // Focus the card explicitly before opening — click-driven focus isn't
  // reliable across engines, and the overlay's close hands focus back here.
  const open = e => { if (e.currentTarget.focus) e.currentTarget.focus(); onOpen(i); };
  return (
    <article
      className="card" tabIndex="0" role="button" aria-haspopup="dialog"
      onClick={open}
      onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(e); } }}
    >
      <div className="card-shot">
        <image-slot
          id={"case-" + i} shape="rounded" radius="14" placeholder={"Print de " + c.name}
          src={c.img} alt={c.alt}
        ></image-slot>
      </div>
      <div className="card-meta">
        <span>{c.co}</span><span className="dim">·</span><span>{c.yr}</span>
      </div>
      <h3 className="card-t">{c.name}</h3>
      <p className="card-d">{c.desc}</p>
      <div className="card-foot">
        <div>
          <div className="card-m">{c.metric}</div>
          <div className="card-ml">{c.label}</div>
        </div>
        <div className="card-tags">
          {c.tags.map(x => <span key={x}>{x}</span>)}
        </div>
      </div>
      <span className="card-view">
        {viewLabel}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </article>
  );
}

/* --- case detail overlay: opens as a sheet rising from the card, not a centered dialog --- */
function CaseDetail({ c, i, dl, onClose }) {
  const [closing, setClosing] = useSW(false);
  const backRef = useRW(null);

  const startClose = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { onClose(); return; }
    setClosing(true);
    setTimeout(onClose, 260);
  };

  useEW(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = e => { if (e.key === "Escape") startClose(); };
    document.addEventListener("keydown", onKey);
    if (backRef.current) backRef.current.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className={"cd-back" + (closing ? " closing" : "")} onClick={startClose}>
      <div
        className={"cd-panel" + (closing ? " closing" : "")}
        role="dialog" aria-modal="true" aria-label={c.name}
        onClick={e => e.stopPropagation()}
      >
        <div className="cd-top">
          <button className="cd-back-btn" ref={backRef} onClick={startClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M17 7L7 17M7 17V8M7 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 12 12)"/></svg>
            {dl.back}
          </button>
          <span className="cd-crumb">{c.co} <span className="dim">/</span> {c.yr}</span>
        </div>
        <div className="cd-body">
          <div className="cd-shot">
            <image-slot id={"case-detail-" + i} shape="rect" src={c.img} alt={c.alt}></image-slot>
          </div>
          <div className="cd-meta">
            <div>
              <div className="card-m">{c.metric}</div>
              <div className="card-ml">{c.label}</div>
            </div>
            <div className="cd-tags">
              {c.tags.map(x => {
                const tech = window.V3.tech.find(t => t.n.toLowerCase() === x.toLowerCase());
                return (
                  <span key={x} className="cd-tag">
                    {tech && <Mark x={tech} size={14} />}
                    {x}
                  </span>
                );
              })}
            </div>
          </div>
          <h2 className="cd-title">{c.name}</h2>
          <p className="cd-desc">{c.desc}</p>
          <div className="cd-cols">
            <section>
              <h3 className="cd-h">{dl.discovery}</h3>
              <ul className="cd-list">
                {c.detail.discovery.map((d, k) => <li key={k}>{d}</li>)}
              </ul>
            </section>
            <section>
              <h3 className="cd-h">{dl.steps}</h3>
              <ol className="cd-steps">
                {c.detail.steps.map((s, k) => (
                  <li key={k}><span className="cd-step-n">{k + 1}</span>{s}</li>
                ))}
              </ol>
            </section>
          </div>
          <div className="cd-cta">
            <a
              className="pill pill-solid" href={window.V3.links.agenda} target="_blank" rel="noopener"
              onClick={() => window.track && window.track("agenda_case")}
            >
              {dl.cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- filka panel --- */
function FilkaPanel({ t }) {
  const f = t.work.filka;
  return (
    <div className="filka">
      <div className="filka-l">
        <span className="filka-badge">Filka</span>
        <p className="filka-kick">{f.kicker}</p>
        <h3 className="filka-t">{f.title}</h3>
        <p className="filka-b">{f.body}</p>
        <a className="btn btn-dark" href={window.V3.links.filka} target="_blank" rel="noopener">
          {f.cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
      <ul className="filka-list">
        {f.items.map(x => <li key={x}>{x}</li>)}
      </ul>
    </div>
  );
}

/* --- work section with tabs --- */
function Work({ t, lang }) {
  const [tab, setTab] = useSW(0);
  const [ind, setInd] = useSW({ opacity: 0 });
  const [openIdx, setOpenIdx] = useSW(null);
  const btns = useRW([]);
  const wrapRef = useRW(null);
  const lastFocus = useRW(null);

  const openCase = i => { lastFocus.current = document.activeElement; setOpenIdx(i); };
  const closeCase = () => {
    setOpenIdx(null);
    if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
  };

  useEW(() => {
    const place = () => {
      const b = btns.current[tab];
      if (!b) return;
      setInd({ opacity: 1, width: b.offsetWidth + "px", transform: `translateX(${b.offsetLeft}px)` });
    };
    place();
    const id = setTimeout(place, 120);
    window.addEventListener("resize", place);
    return () => { clearTimeout(id); window.removeEventListener("resize", place); };
  }, [tab, lang]);
  useEW(() => {
    const onHash = () => {
      if (location.hash !== "#filka") return;
      setTab(1);
      requestAnimationFrame(() => {
        const el = document.querySelector(".work-sec");
        if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
      });
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return (
    <section className="sec work-sec" id="work">
      <span id="filka" className="anchor"></span>
      <h2 className="sec-h" data-rv>{t.work.heading}</h2>
      <div className="tabs" ref={wrapRef}>
        <span className="tab-ind" style={ind}></span>
        {t.work.tabs.map((x, i) => (
          <button key={x} ref={el => (btns.current[i] = el)}
            className={i === tab ? "tab on" : "tab"} onClick={() => setTab(i)}>
            {x}
            {i === 2 && <span className="tab-new">NEW</span>}
          </button>
        ))}
      </div>
      {tab === 0 && (
        <React.Fragment>
          <p className="tab-hint">{t.work.hint}</p>
          <div className="cards pop">
            {t.work.cases.map((c, i) => (
              <CaseCard key={i} c={c} i={i} viewLabel={t.work.detailLabels.view} onOpen={openCase} />
            ))}
          </div>
        </React.Fragment>
      )}
      {tab === 1 && <div className="pop"><FilkaPanel t={t} /></div>}
      {tab === 2 && (
        <React.Fragment>
          <p className="tab-hint">{t.work.terminalHint}</p>
          <div className="pop"><Terminal t={t} lang={lang} /></div>
        </React.Fragment>
      )}
      {openIdx !== null && (
        <CaseDetail c={t.work.cases[openIdx]} i={openIdx} dl={t.work.detailLabels} onClose={closeCase} />
      )}
    </section>
  );
}

Object.assign(window, { Work, Terminal });


const { useState: useS, useEffect: useE, useRef: useR } = React;

function richText(s) {
  return s.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

function Progress() {
  const [p, setP] = useS(0);
  useE(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return <div className="prog" style={{ width: p + "%" }}></div>;
}

function Nav({ t, lang, setLang }) {
  const [hover, setHover] = useS(false);
  const [pin, setPin] = useS(false);
  const [shut, setShut] = useS(false);
  const open = pin || (hover && !shut);
  const close = () => { setPin(false); setHover(false); setShut(true); };
  return (
    <nav className="nav-wrap">
      <div
        className={"nav" + (open ? " nav-open" : "")}
        onPointerEnter={e => { if (e.pointerType === "mouse") setHover(true); }}
        onPointerLeave={e => { if (e.pointerType === "mouse") { setHover(false); setShut(false); } }}
      >
        <button className="nav-toggle" onClick={() => { if (open) close(); else { setPin(true); setShut(false); } }} aria-label="menu" aria-expanded={open}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className={open ? "bars x" : "bars"}>
            <path className="b1" d="M1 1.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            <path className="b2" d="M1 10.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>
        <span className="nav-brand">Filipe Martins</span>
        <div className="nav-links" aria-hidden={!open}>
          <a href="#work" onClick={close}>{t.nav.work}</a>
          <a href="#exp" onClick={close}>{t.nav.exp}</a>
          <a href="#filka" onClick={close}>{t.nav.filka}</a>
          <a href="#contact" onClick={close}>{t.nav.contact}</a>
        </div>
      </div>
      <button className="lang" onClick={() => setLang(lang === "pt" ? "en" : "pt")}>
        {lang === "pt" ? "PT" : "EN"}
      </button>
    </nav>
  );
}

function Hero({ t }) {
  const h = t.h4;
  return (
    <header className="hero">
      <div className="hero-grid">
        <div className="hero-l">
          <span className="loc"><i></i>{h.loc}</span>
          <h1 className="hero-title">
            {h.lines.map((l, i) => <span key={i}>{l}</span>)}
          </h1>
          <p className="strip">
            {h.strip.map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="bar">|</span>}
                <span>{s}</span>
              </React.Fragment>
            ))}
          </p>
          <div className="hero-ctas">
            <a className="pill" href="#work">{h.cta1}</a>
            <a className="pill pill-solid" href={window.V3.links.agenda} target="_blank" rel="noopener" onClick={() => window.track && window.track("agenda_hero")}>{h.cta2}</a>
          </div>
        </div>
        <div className="hero-r">
          <window.Badge b={h.badge} side={h.side} tiltHint={h.tiltHint} />
        </div>
      </div>
    </header>
  );
}

function FAQ({ t }) {
  const [open, setOpen] = useS(0);
  return (
    <section className="sec faq-sec" id="faq">
      <h2 className="sec-h" data-rv>{t.faq.heading}</h2>
      <div className="faq-list" data-rvi>
        {t.faq.items.map((f, i) => (
          <div className={"faq-row" + (open === i ? " on" : "")} key={i} style={{ "--d": i * 0.07 + "s" }}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span>{f.q}</span>
              <i className="faq-ic"></i>
            </button>
            <div className="faq-a"><p>{f.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section className="sec cta-sec" id="contact" data-rv>
      <h2 className="cta-h">{t.cta.heading}</h2>
      <p className="cta-sub">{t.cta.sub}</p>
      <div className="hero-ctas cta-btns">
        <a className="pill pill-solid" href={window.V3.links.agenda} target="_blank" rel="noopener" onClick={() => window.track && window.track("agenda_cta")}>{t.cta.b1}</a>
        <a className="pill" href={window.V3.links.email} onClick={() => window.track && window.track("email_cta")}>{t.cta.b2}</a>
      </div>
      <p className="cta-reply"><i></i>{t.cta.reply}</p>
    </section>
  );
}

function MobileBar({ t }) {
  const [on, setOn] = useS(false);
  useE(() => {
    const check = () => setOn(window.scrollY > window.innerHeight * 0.72);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);
  return (
    <div className={on ? "mbar on" : "mbar"}>
      <span className="mbar-t">{t.cta.reply}</span>
      <a className="mbar-b" href={window.V3.links.agenda} target="_blank" rel="noopener" onClick={() => window.track && window.track("agenda_mobile")}>{t.h4.barCta}</a>
    </div>
  );
}

function Footer({ t }) {
  return (
    <footer className="foot">
      <p className="foot-tag">{t.footer.tag}</p>
      <div className="foot-links">
        <a href={window.V3.links.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        <a href={window.V3.links.github} target="_blank" rel="noopener">GitHub</a>
        <a href={window.V3.links.email}>Email</a>
        <a href={window.V3.links.filka} target="_blank" rel="noopener">Filka</a>
        <a href="llms.txt" target="_blank" rel="noopener">llms.txt</a>
        <a href="privacidade.html">{t.footer.privacy}</a>
      </div>
      <p className="foot-copy">© 2026</p>
    </footer>
  );
}

function App() {
  const [lang, setLang] = useS(() => localStorage.getItem("fm_lang") || "pt");
  useE(() => { localStorage.setItem("fm_lang", lang); }, [lang]);

  useE(() => {
    const nodes = () => Array.from(document.querySelectorAll("[data-rv],[data-rvi]"));
    const showAll = () => nodes().forEach(e => e.classList.add("in"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { showAll(); return; }
    let raf = 0;
    const pass = () => {
      raf = 0;
      const h = window.innerHeight;
      nodes().forEach(e => {
        if (e.classList.contains("in")) return;
        const r = e.getBoundingClientRect();
        if (r.top < h * 0.9 && r.bottom > 0) e.classList.add("in");
      });
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(pass); };
    pass();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    const safety = setTimeout(showAll, 6000);
    return () => {
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(safety);
    };
  }, [lang]);

  const t = window.V3[lang];
  return (
    <React.Fragment>
      <Progress />
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <window.Skills t={t} />
      <window.Work t={t} lang={lang} />
      <window.Stats t={t} />
      <window.Experience t={t} />
      <window.Quotes t={t} />
      <FAQ t={t} />
      <Contact t={t} />
      <Footer t={t} />
      <MobileBar t={t} />
    </React.Fragment>
  );
}

Object.assign(window, { richText, App });
