"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import PillNav from "./PillNav";
// Inline OrbitWords — two rings, icons + words, big and bold
function OrbitWords() {
  const SIZE = 420;
  const CX = SIZE / 2;
  const CY = SIZE / 2;

  // Inner ring: tech icons (emoji/symbol as SVG text)
  const inner = [
    { label: "⚛", name: "React" },
    { label: "▲", name: "Next.js" },
    { label: "✦", name: "Tailwind" },
    { label: "⬡", name: "Node" },
    { label: "🍃", name: "Mongo" },
    { label: "⌘", name: "PHP" },
  ];

  // Outer ring: words only
  const outer = [
    "MySQL",
    "Python",
    "GSAP",
    "Figma",
    "TypeScript",
    "Git",
    "Vercel",
    "REST",
  ];

  const R1 = 100; // inner ring radius
  const R2 = 175; // outer ring radius

  return (
    <div className="orbit-wrap" aria-hidden="true">
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        overflow="visible"
        style={{ display: "block" }}
      >
        {/* ── Outer dashed ring ── */}
        <circle
          cx={CX}
          cy={CY}
          r={R2}
          fill="none"
          stroke="rgba(26,24,20,0.10)"
          strokeWidth="1"
          strokeDasharray="3 8"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CX} ${CY}`}
            to={`360 ${CX} ${CY}`}
            dur="30s"
            repeatCount="indefinite"
          />
        </circle>

        {/* ── Inner dashed ring ── */}
        <circle
          cx={CX}
          cy={CY}
          r={R1}
          fill="none"
          stroke="rgba(26,24,20,0.13)"
          strokeWidth="1"
          strokeDasharray="4 6"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CX} ${CY}`}
            to={`-360 ${CX} ${CY}`}
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>

        {/* ── KC core badge ── */}
        <circle cx={CX} cy={CY} r={44} fill="#1a1814" />
        <circle
          cx={CX}
          cy={CY}
          r={44}
          fill="none"
          stroke="rgba(26,24,20,0.25)"
          strokeWidth="1.5"
        />
        <text
          x={CX}
          y={CY + 6}
          textAnchor="middle"
          fontSize="16"
          fontWeight="800"
          letterSpacing="3"
          fill="#f5f2ed"
          fontFamily="monospace"
        >
          KC
        </text>

        {/* ── Inner ring: icon pills ── */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CX} ${CY}`}
            to={`360 ${CX} ${CY}`}
            dur="18s"
            repeatCount="indefinite"
          />
          {inner.map((item, i) => {
            const deg = (i / inner.length) * 360 - 90;
            const rad = (deg * Math.PI) / 180;
            const x = CX + Math.cos(rad) * R1;
            const y = CY + Math.sin(rad) * R1;
            const PW = 70;
            const PH = 28;
            return (
              // Translate to the orbit position, then counter-rotate so pill stays upright
              <g key={item.name} transform={`translate(${x},${y})`}>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0"
                  to="-360"
                  dur="18s"
                  repeatCount="indefinite"
                  additive="sum"
                />
                {/* pill — centered on (0,0) */}
                <rect
                  x={-PW / 2}
                  y={-PH / 2}
                  width={PW}
                  height={PH}
                  rx={PH / 2}
                  fill="#edeae4"
                  stroke="rgba(26,24,20,0.15)"
                  strokeWidth="1"
                />
                {/* icon left side */}
                <text
                  x={-PW / 2 + 14}
                  y={1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="12"
                  fill="#1a1814"
                >
                  {item.label}
                </text>
                {/* divider */}
                <line
                  x1={-PW / 2 + 24}
                  y1={-8}
                  x2={-PW / 2 + 24}
                  y2={8}
                  stroke="rgba(26,24,20,0.12)"
                  strokeWidth="1"
                />
                {/* name right side */}
                <text
                  x={-PW / 2 + 24 + (PW - 24) / 2}
                  y={1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8"
                  fontWeight="700"
                  letterSpacing="0.5"
                  fill="#1a1814"
                  fontFamily="monospace"
                >
                  {item.name}
                </text>
              </g>
            );
          })}
        </g>

        {/* ── Outer ring: word tags ── */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CX} ${CY}`}
            to={`-360 ${CX} ${CY}`}
            dur="24s"
            repeatCount="indefinite"
          />
          {outer.map((w, i) => {
            const deg = (i / outer.length) * 360 - 90 + 22;
            const rad = (deg * Math.PI) / 180;
            const x = CX + Math.cos(rad) * R2;
            const y = CY + Math.sin(rad) * R2;
            const PW = w.length * 6.5 + 20;
            const PH = 22;
            return (
              <g key={w} transform={`translate(${x},${y})`}>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0"
                  to="360"
                  dur="24s"
                  repeatCount="indefinite"
                  additive="sum"
                />
                <rect
                  x={-PW / 2}
                  y={-PH / 2}
                  width={PW}
                  height={PH}
                  rx={PH / 2}
                  fill="rgba(26,24,20,0.05)"
                  stroke="rgba(26,24,20,0.12)"
                  strokeWidth="1"
                />
                <text
                  x={0}
                  y={1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="9"
                  letterSpacing="0.5"
                  fill="#6b6357"
                  fontFamily="monospace"
                >
                  {w}
                </text>
              </g>
            );
          })}
        </g>

        {/* ── Floating dots between rings ── */}
        {[45, 135, 225, 315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const r = (R1 + R2) / 2;
          const x = CX + Math.cos(rad) * r;
          const y = CY + Math.sin(rad) * r;
          return (
            <circle key={i} cx={x} cy={y} r={3} fill="rgba(26,24,20,0.18)" />
          );
        })}
      </svg>
    </div>
  );
}

const Band3D = dynamic(() => import("../components/band/App"), {
  ssr: false,
  loading: () => <div className="card3d-fallback" />,
});

const GRID_ITEMS = [
  { src: "/assets/home page.png", label: "HEAT HAVEN" },
  { src: "/assets/BRICK BY BRICK.png", label: "BRICK BY BRICK" },
  { src: "/assets/Note nest.png", label: "Note Nest" },
  { src: "/assets/product.png", label: "Product" },
  { src: "/assets/profile.png", label: "Profile" },
  { src: "/assets/matrimony.png", label: "Matrimony" },
  { src: "/assets/about.png", label: "About" },
  { src: "/assets/login.png", label: "Login" },
];

const PROJECTS = [
  {
    name: "HEAT HAVEN",
    role: "Sole Creator · Design → Code → Deploy",
    url: "heathaven.in",
    note: "Built solo — designed the UI, engineered the backend, and shipped to production.",
  },
  {
    name: "Note Nest",
    role: "Visual Designer · Database · MongoDB",
    url: "notenest.io",
    note: "Course notes meets AI assistant — designed the experience and architected the MongoDB database.",
  },
  {
    name: "Vows4Life",
    role: "Internship · Visual Design · Animations · PHP",
    url: "",
    note: "Matrimony platform built during internship — owned the visual design, animations, and PHP backend end-to-end.",
  },
];

const TECH_STACK = [
  {
    name: "React.js",
    cls: "devicon-react-original colored",
    glow: "rgba(97,218,251,.4)",
    bg: "rgba(97,218,251,.06)",
  },
  {
    name: "TypeScript",
    cls: "devicon-typescript-plain colored",
    glow: "rgba(49,120,198,.5)",
    bg: "rgba(49,120,198,.08)",
  },
  {
    name: "Tailwind",
    cls: "devicon-tailwindcss-original colored",
    glow: "rgba(56,189,248,.4)",
    bg: "rgba(56,189,248,.06)",
  },
  {
    name: "HTML",
    cls: "devicon-html5-plain colored",
    glow: "rgba(228,77,38,.5)",
    bg: "rgba(228,77,38,.07)",
  },
  {
    name: "CSS",
    cls: "devicon-css3-plain colored",
    glow: "rgba(38,77,228,.5)",
    bg: "rgba(38,77,228,.07)",
  },
  {
    name: "PHP",
    cls: "devicon-php-plain colored",
    glow: "rgba(136,146,190,.5)",
    bg: "rgba(136,146,190,.07)",
  },
  {
    name: "MongoDB",
    cls: "devicon-mongodb-plain colored",
    glow: "rgba(0,168,107,.5)",
    bg: "rgba(0,168,107,.07)",
  },
  {
    name: "Next.js",
    cls: "devicon-nextjs-plain",
    glow: "rgba(0,0,0,.15)",
    bg: "rgba(0,0,0,.04)",
    forceColor: "#1a1814",
  },
  {
    name: "JavaScript",
    cls: "devicon-javascript-plain colored",
    glow: "rgba(240,219,79,.5)",
    bg: "rgba(240,219,79,.06)",
  },
  {
    name: "MySQL",
    cls: "devicon-mysql-original colored",
    glow: "rgba(0,117,143,.5)",
    bg: "rgba(0,117,143,.07)",
  },
];

const SKILL_PROJECTS = [
  {
    name: "HeatHaven",
    tag: "Tailwind CSS · Node.js · MongoDB · Vercel",
    note: "Built a sneaker e-commerce store from scratch — smooth UI with Tailwind, Node.js backend, and live on Vercel.",
  },
  {
    name: "Note Nest",
    tag: "React · MongoDB · Next.js · Vercel",
    note: "Built a study platform with React and Next.js — MongoDB-backed notes library with an integrated AI assistant.",
  },
  {
    name: "Vows4Life",
    tag: "PHP · MySQL · React · GSAP",
    note: "Matrimony platform built during internship — handled visual design, animations, and PHP backend.",
  },
  {
    name: "AI Voice Assistant",
    tag: "Python · SpeechRecognition · pyttsx3",
    note: "Built a voice assistant in Python during school — responds to commands, answers questions, and speaks back in real time.",
  },
  {
    name: "Portfolio",
    tag: "React · Next.js · Tailwind CSS",
    note: "Designed and built my own portfolio from scratch — custom UI, smooth animations, and shipped with Next.js.",
  },
];

const CERTS = [
  {
    name: "SOBHRI  Front-End Developer",
    issuer: "SOBHRI TECHNOLOGIES",
    year: "2025",
    icon: "devicon-github-plain colored",
  },
  {
    name: "Basic Computer Certification",
    issuer: "Softzone Technologies",
    year: "2019",
    icon: "devicon-linux-plain colored",
  },
  {
    name: "Python Programming",
    issuer: "Softzone Technologies",
    year: "2019",
    icon: "devicon-python-plain colored",
  },
  {
    name: "Typing Speed Certification",
    issuer: "Softzone Technologies",
    year: "2019",
    icon: "devicon-chrome-plain colored",
  },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [pct, setPct] = useState(0);
  const [activeTab, setActiveTab] = useState("techstack");
  const [activeSection, setActiveSection] = useState("#work");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const start = performance.now();
    const duration = 2800;
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setPct(Math.round(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLoaded(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const els = sectionRefs.current.filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        }),
      { threshold: 0.18 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const sections = [
      { id: "work", href: "#work" },
      { id: "about", href: "#about" },
      { id: "contact", href: "#contact" },
    ];

    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      let current = "#work";
      for (const { id, href } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = href;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [loaded]);

  const col1 = [...GRID_ITEMS, ...GRID_ITEMS];
  const col2 = [
    ...GRID_ITEMS.slice(3),
    ...GRID_ITEMS,
    ...GRID_ITEMS.slice(0, 3),
  ];
  const col3 = [
    ...GRID_ITEMS.slice(5),
    ...GRID_ITEMS,
    ...GRID_ITEMS.slice(0, 5),
  ];

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        />
      </Head>

      {!loaded && (
        <div className="preloader" aria-hidden="true">
          <div className="pre-lines">
            <div className="pre-line" />
            <div className="pre-line" />
            <div className="pre-line" />
          </div>
          <div className="pre-stack">
            {[
              "/assets/home page.png",
              "/assets/about.png",
              "/assets/login.png",
              "/assets/product.png",
              "/assets/profile.png",
            ].map((src, i) => (
              <div
                className="pre-card"
                key={i}
                style={{ animationDelay: `${i * 0.38}s` }}
              >
                <img src={src} alt="" />
              </div>
            ))}
          </div>
          <div className="pre-label">KC</div>
          <div className="pre-counter">{String(pct).padStart(2, "0")}</div>
        </div>
      )}

      <PillNav
        items={[
          { label: "Work", href: "#work" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        activeHref={activeSection}
        ease="power2.easeOut"
        baseColor="#1a1814"
        pillColor="#f5f2ed"
        hoveredPillTextColor="#f5f2ed"
        pillTextColor="#1a1814"
      />

      <main className={loaded ? "reveal-root in" : "reveal-root"}>
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">Frontend developer, Bengaluru</p>
            <h1>
              I build interfaces that feel <em>considered</em>, not assembled.
            </h1>
            <p className="hero-sub">
              I think about timing and easing like a designer, then make sure it
              ships clean and performant like an engineer. Two years building
              with React and Tailwind, equally proud of both halves of that
              sentence.
            </p>
            <div className="hero-cta">
              <a className="btn-primary" href="#work">
                See the work
              </a>
              <a className="btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="hero-scene">
              <img
                src="/assets/hero-bg.png"
                alt=""
                className="hero-bg-img"
                aria-hidden="true"
              />
              <div className="card3d-wrap">
                <Band3D />
              </div>
            </div>
            <p className="photo-caption">
              drag the card — it&apos;s on a physics rope
            </p>
          </div>
        </section>

        <section
          id="work"
          className="showcase reveal"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <p className="eyebrow">Selected work</p>
          <h2>Three things I&apos;d actually show a client.</h2>
          <div className="project-grid">
            {PROJECTS.map((p, i) => (
              <article
                className="project-card reveal"
                key={p.name}
                style={{ transitionDelay: `${i * 90}ms` }}
                ref={(el) => (sectionRefs.current[i + 1] = el)}
              >
                <div className="window-bar">
                  <span className="dot dot-r" />
                  <span className="dot dot-y" />
                  <span className="dot dot-g" />
                  <span className="window-url">{p.url}</span>
                </div>
                <div className="window-body">
                  <h3>{p.name}</h3>
                  <p className="project-role">{p.role}</p>
                  <p className="project-note">{p.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="strip-section">
          <div className="strip-text">
            <p className="eyebrow">A bit of texture</p>
            <h2 className="strip-heading">
              Stuff I&apos;ve made, <em>scattered on purpose.</em>
            </h2>
          </div>
          <div className="strip-outer">
            <div className="strip-stage">
              <div className="strip-col strip-col-1">
                {col1.map((item, i) => (
                  <div className="strip-card" key={`c1-${i}`}>
                    <img src={item.src} alt={item.label} loading="lazy" />
                    <span className="strip-card-label">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="strip-col strip-col-2">
                {col2.map((item, i) => (
                  <div className="strip-card" key={`c2-${i}`}>
                    <img src={item.src} alt={item.label} loading="lazy" />
                    <span className="strip-card-label">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="strip-col strip-col-3">
                {col3.map((item, i) => (
                  <div className="strip-card" key={`c3-${i}`}>
                    <img src={item.src} alt={item.label} loading="lazy" />
                    <span className="strip-card-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <p className="eyebrow">Skills &amp; experience</p>
          <h2 className="skills-heading">
            Explore my journey through <em>projects, certifications,</em> and
            technical expertise.
          </h2>
          <div className="skills-tabs">
            {[
              { id: "projects", label: "Projects" },
              { id: "techstack", label: "Tech Stack" },
              { id: "certs", label: "Certifications" },
            ].map((t) => (
              <button
                key={t.id}
                className={`skills-tab${activeTab === t.id ? " skills-tab-active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {activeTab === "techstack" && (
            <div className="tech-grid">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-card"
                  style={{ "--glow": tech.glow, "--hover-bg": tech.bg }}
                >
                  <i
                    className={tech.cls}
                    style={tech.forceColor ? { color: tech.forceColor } : {}}
                  />
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "projects" && (
            <div className="skill-project-list">
              {SKILL_PROJECTS.map((p) => (
                <div key={p.name} className="skill-proj-row">
                  <div className="skill-proj-dot" />
                  <span className="skill-proj-name">{p.name}</span>
                  <span className="skill-proj-tag">{p.tag}</span>
                  <span className="skill-proj-note">{p.note}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certs" && (
            <div className="cert-grid">
              {CERTS.map((c) => (
                <div key={c.name} className="cert-card">
                  {c.img ? (
                    <img src={c.img} alt={c.name} className="cert-img" />
                  ) : (
                    <i className={c.icon} />
                  )}
                  <div className="cert-info">
                    <h4>{c.name}</h4>
                    <p>{c.issuer}</p>
                  </div>
                  <span className="cert-year">{c.year}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section
          id="about"
          className="about reveal"
          ref={(el) => (sectionRefs.current[5] = el)}
        >
          <div className="about-grid">
            <div className="about-copy">
              <p className="eyebrow">About</p>
              <p className="about-text">
                I build digital experiences where design and engineering meet
                with intention — the rhythm of an animation, the clarity of an
                interface, the milliseconds that shape how something feels. From
                sneaker marketplaces like Heat Haven to platforms like Vows4Life
                and NoteNest, I work across frontend, backend, and mobile with
                React, Next.js, Tailwind, and Python. What matters most:
                products that feel alive.
              </p>
            </div>
            {/* ✅ Fixed: replaced undefined <InteractiveSphere /> with <OrbitWords /> */}
            <div className="about-mark" aria-hidden="true">
              <OrbitWords />
            </div>
          </div>
        </section>

        <footer id="contact" className="footer">
          <h2>Let&apos;s build something considered.</h2>
          <a
            className="btn-primary"
            href="mailto:kanishakchoudhary1327@gmail.com"
          >
            kanishakchoudhary1327@gmail.com
          </a>
          <div className="footer-links">
            <a
              href="https://github.com/KANNI44"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-github-original" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kanishak-choudhary-588284297/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-linkedin-plain colored" />
              LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <i className="ri-file-text-line" />
              Resume
            </a>
          </div>
          <p className="footer-fine">
            &copy; 2026 Kanishak Choudhary. Built with Next.js.
          </p>
        </footer>
      </main>

      <style jsx global>{`
        :root {
          --font-display: var(--font-mono);
          --paper: #1a1814;
          --slate: #6b6357;
          --amber: #1a1814;
          --line: rgba(26, 24, 20, 0.12);
        }
        body {
          background: #f5f2ed;
          color: #1a1814;
        }
        h1,
        h2,
        h3,
        h4 {
          font-family: var(--font-mono) !important;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        em {
          font-style: normal !important;
        }
        p,
        span,
        a,
        button,
        .eyebrow {
          font-family: var(--font-mono);
        }
        .btn-primary {
          background: #1a1814 !important;
          color: #f5f2ed !important;
        }
        .btn-ghost {
          color: #1a1814 !important;
          border-color: rgba(26, 24, 20, 0.25) !important;
        }
      `}</style>
      <style jsx>{`
        /* ── PRELOADER ── */
        .preloader {
          position: fixed;
          inset: 0;
          background: #f5f2ed;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .pre-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .pre-line {
          position: absolute;
          background: rgba(0, 0, 0, 0.1);
        }
        .pre-line:nth-child(1) {
          width: 1px;
          height: 100%;
          left: 33%;
          top: 0;
          animation: lineGrow 1.8s ease-in-out infinite alternate;
        }
        .pre-line:nth-child(2) {
          width: 100%;
          height: 1px;
          top: 50%;
          left: 0;
          animation: lineGrow 1.8s ease-in-out infinite alternate;
          animation-delay: 0.3s;
        }
        .pre-line:nth-child(3) {
          width: 1px;
          height: 100%;
          left: 66%;
          top: 0;
          animation: lineGrow 1.8s ease-in-out infinite alternate;
          animation-delay: 0.6s;
        }
        @keyframes lineGrow {
          0% {
            opacity: 0.15;
            transform: scaleY(0.3);
          }
          100% {
            opacity: 0.8;
            transform: scaleY(1);
          }
        }
        .pre-stack {
          position: relative;
          width: 320px;
          height: 220px;
        }
        .pre-card {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.14);
          opacity: 0;
          animation: cardDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .pre-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pre-card:nth-child(1) {
          z-index: 5;
          animation-delay: 0s;
          --rot: -9deg;
          --tx: -34px;
          --ty: 14px;
          --sc: 0.94;
        }
        .pre-card:nth-child(2) {
          z-index: 3;
          animation-delay: 0.32s;
          --rot: 13deg;
          --tx: 40px;
          --ty: -10px;
          --sc: 0.97;
        }
        .pre-card:nth-child(3) {
          z-index: 4;
          animation-delay: 0.64s;
          --rot: -16deg;
          --tx: 18px;
          --ty: 30px;
          --sc: 0.9;
        }
        .pre-card:nth-child(4) {
          z-index: 2;
          animation-delay: 0.96s;
          --rot: 7deg;
          --tx: -22px;
          --ty: -26px;
          --sc: 1;
        }
        .pre-card:nth-child(5) {
          z-index: 1;
          animation-delay: 1.28s;
          --rot: -4deg;
          --tx: 30px;
          --ty: 22px;
          --sc: 0.92;
        }
        @keyframes cardDrop {
          0% {
            opacity: 0;
            transform: translate(calc(var(--tx) * 1.6), 50px)
              rotate(calc(var(--rot) * 1.8)) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translate(var(--tx), var(--ty)) rotate(var(--rot))
              scale(var(--sc));
          }
        }
        .pre-label {
          position: absolute;
          top: 2rem;
          left: 2rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--amber);
          letter-spacing: 0.1em;
        }
        .pre-counter {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--slate);
          letter-spacing: 0.08em;
        }

        .reveal-root {
          opacity: 0;
        }
        .reveal-root.in {
          opacity: 1;
          transition: opacity 0.6s ease;
        }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 2rem;
          padding: 0 clamp(1.5rem, 5vw, 4rem);
          max-width: 1280px;
          margin: 0 auto;
        }
        .eyebrow {
          font-family: var(--font-mono);
          color: var(--amber);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .hero-text h1 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          line-height: 1.12;
          margin: 0 0 1.4rem;
          color: var(--paper);
        }
        .hero-text em {
          font-style: italic;
          color: var(--amber);
        }
        .hero-sub {
          color: var(--slate);
          font-size: 0.98rem;
          line-height: 1.65;
          max-width: 36ch;
          margin: 0 0 2rem;
        }
        .hero-cta {
          display: flex;
          gap: 1rem;
        }
        .btn-primary {
          background: var(--amber);
          color: #f5f2ed;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        .btn-ghost {
          border: 1px solid var(--line);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.9rem;
          color: var(--paper);
          transition: border-color 0.2s ease;
        }
        .btn-ghost:hover {
          border-color: var(--amber);
        }

        /* ── HERO PHOTO + SCENE ── */
        .hero-photo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          overflow: visible;
        }

        .hero-scene {
          position: relative;
          width: 100%;
          max-width: 720px;
          height: 640px;
          overflow: visible;
        }

        .hero-bg-img {
          position: absolute;
          top: -80px;
          left: -550px;
          width: calc(100% + 600px);
          height: calc(100% + 160px);
          object-fit: contain;
          object-position: center;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        .card3d-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          max-width: 460px;
          height: 520px;
          z-index: 10;
          overflow: visible;
        }

        .card3d-fallback {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: transparent;
        }

        .photo-caption {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--slate);
          text-align: center;
          margin: 0;
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }
        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── SHOWCASE ── */
        .showcase,
        .about {
          max-width: 1280px;
          margin: 0 auto;
          padding: 8rem clamp(1.5rem, 5vw, 4rem) 4rem;
        }
        .showcase h2 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          max-width: 40ch;
          margin: 0 0 3rem;
          line-height: 1.25;
          color: var(--paper);
        }
        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .project-card {
          background: #edeae4;
          border: 1px solid var(--line);
          border-radius: 20px;
          overflow: hidden;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }
        .project-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        .window-bar {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.7rem 0.9rem;
          background: #e8e4dc;
          border-bottom: 1px solid var(--line);
        }
        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: inline-block;
        }
        .dot-r {
          background: #e5635a;
        }
        .dot-y {
          background: #e0b04c;
        }
        .dot-g {
          background: #5fb37a;
        }
        .window-url {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--slate);
          margin-left: 0.6rem;
        }
        .window-body {
          padding: 1.4rem;
        }
        .window-body h3 {
          font-family: var(--font-display);
          font-size: 1.1rem;
          margin: 0 0 0.3rem;
          color: var(--paper);
        }
        .project-role {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--amber);
          margin: 0 0 0.8rem;
        }
        .project-note {
          color: var(--slate);
          font-size: 0.88rem;
          line-height: 1.55;
          margin: 0;
        }

        /* ── STRIP ── */
        .strip-section {
          position: relative;
          width: 100%;
          padding: 6rem 0;
          overflow: hidden;
        }
        .strip-text {
          position: relative;
          z-index: 2;
          padding: 0 clamp(1.5rem, 5vw, 4rem);
          margin-bottom: 3rem;
          pointer-events: none;
        }
        .strip-heading {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          max-width: 40ch;
          margin: 0;
          line-height: 1.25;
          color: var(--paper);
        }
        .strip-heading em {
          font-style: italic;
          color: var(--amber);
        }
        .strip-outer {
          width: 100%;
          height: 500px;
          overflow: hidden;
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
        .strip-stage {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          gap: 16px;
          justify-content: center;
          transform: rotate(-18deg) scale(1.35);
          transform-origin: center center;
        }
        .strip-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex-shrink: 0;
          will-change: transform;
        }
        .strip-col-1 {
          animation: scrollUp 20s linear infinite;
        }
        .strip-col-2 {
          animation: scrollUp 15s linear infinite;
          margin-top: -80px;
        }
        .strip-col-3 {
          animation: scrollUp 24s linear infinite;
          margin-top: -160px;
        }
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .strip-card {
          position: relative;
          width: 220px;
          height: 155px;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--line);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        .strip-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(0.7) contrast(1);
        }
        .strip-card-label {
          position: absolute;
          left: 0.5rem;
          bottom: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: #1a1814;
          background: rgba(245, 242, 237, 0.8);
          padding: 0.15rem 0.45rem;
          border-radius: 3px;
          backdrop-filter: blur(4px);
        }

        /* ── SKILLS ── */
        .skills-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 6rem clamp(1.5rem, 5vw, 4rem) 4rem;
        }
        .skills-heading {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          max-width: 48ch;
          margin: 0 0 2.5rem;
          line-height: 1.25;
          color: var(--paper);
        }
        .skills-heading em {
          font-style: italic;
          color: var(--amber);
        }
        .skills-tabs {
          display: flex;
          gap: 0.3rem;
          background: #edeae4;
          border: 1px solid var(--line);
          border-radius: 40px;
          padding: 0.25rem;
          width: fit-content;
          margin-bottom: 2rem;
        }
        .skills-tab {
          padding: 0.45rem 1.1rem;
          border-radius: 40px;
          font-size: 0.78rem;
          cursor: pointer;
          color: var(--slate);
          border: none;
          background: transparent;
          font-family: var(--font-mono);
          transition: all 0.2s ease;
        }
        .skills-tab:hover {
          color: var(--paper);
        }
        .skills-tab-active {
          background: var(--paper);
          color: #f5f2ed;
          font-weight: 500;
        }
        .skills-tab-active:hover {
          color: #f5f2ed;
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.9rem;
        }
        .tech-card {
          background: #edeae4;
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 1.2rem 0.6rem 0.9rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          cursor: default;
          position: relative;
          overflow: hidden;
          transition:
            border-color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }
        .tech-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--hover-bg);
          opacity: 0;
          transition: opacity 0.25s ease;
          border-radius: 13px;
        }
        .tech-card:hover {
          border-color: var(--glow);
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }
        .tech-card:hover::before {
          opacity: 1;
        }
        .tech-card:hover i {
          transform: scale(1.15);
        }
        .tech-card:hover .tech-name {
          color: var(--paper);
        }
        .tech-card i {
          font-size: 2.2rem;
          line-height: 1;
          position: relative;
          z-index: 1;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .tech-name {
          font-size: 0.65rem;
          color: var(--slate);
          font-family: var(--font-mono);
          text-align: center;
          position: relative;
          z-index: 1;
          transition: color 0.25s ease;
        }
        .skill-project-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .skill-proj-row {
          background: #edeae4;
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 1.1rem 1.3rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: default;
          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }
        .skill-proj-row:hover {
          border-color: rgba(139, 111, 71, 0.4);
          background: #e8e4dc;
          transform: translateX(4px);
        }
        .skill-proj-row:hover .skill-proj-dot {
          transform: scale(1.4);
        }
        .skill-proj-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--amber);
          flex-shrink: 0;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .skill-proj-name {
          font-size: 0.9rem;
          font-weight: 500;
          flex: 1;
          color: var(--paper);
        }
        .skill-proj-tag {
          font-size: 0.65rem;
          font-family: var(--font-mono);
          color: var(--amber);
          background: rgba(139, 111, 71, 0.1);
          border: 1px solid rgba(139, 111, 71, 0.2);
          padding: 0.18rem 0.55rem;
          border-radius: 20px;
          flex-shrink: 0;
        }
        .skill-proj-note {
          font-size: 0.74rem;
          color: var(--slate);
          max-width: 340px;
          text-align: right;
          line-height: 1.4;
        }
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem;
        }
        .cert-card {
          background: #edeae4;
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 1.1rem 1.2rem;
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          cursor: default;
          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }
        .cert-card:hover {
          border-color: rgba(139, 111, 71, 0.4);
          background: #e8e4dc;
          transform: translateY(-3px);
        }
        .cert-card i {
          font-size: 1.6rem;
          flex-shrink: 0;
          margin-top: 2px;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .cert-card:hover i {
          transform: rotate(-8deg) scale(1.1);
        }
        .cert-info {
          flex: 1;
        }
        .cert-info h4 {
          font-size: 0.85rem;
          font-weight: 500;
          margin: 0 0 0.25rem;
          color: var(--paper);
        }
        .cert-info p {
          font-size: 0.7rem;
          color: var(--slate);
          margin: 0;
          font-family: var(--font-mono);
        }
        .cert-year {
          font-size: 0.65rem;
          color: var(--amber);
          font-family: var(--font-mono);
          flex-shrink: 0;
        }
        .cert-img {
          width: 1.6rem;
          height: 1.6rem;
          object-fit: contain;
          flex-shrink: 0;
          margin-top: 2px;
          border-radius: 4px;
        }

        /* ── ABOUT ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 2rem;
        }
        .about-mark {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        /* ── ORBIT WORDS ── */
        .orbit-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: min(420px, 90vw);
          height: min(420px, 90vw);
          flex-shrink: 0;
        }
        .orbit-wrap svg {
          width: 100%;
          height: 100%;
        }

        .about-text {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: clamp(1rem, 2vw, 1.3rem);
          max-width: 58ch;
          margin: 0 0 3rem;
          line-height: 1.6;
          color: var(--slate);
        }

        /* ── FOOTER ── */
        .footer {
          text-align: center;
          padding: 6rem clamp(1.5rem, 5vw, 4rem) 3rem;
          border-top: 1px solid var(--line);
          margin-top: 4rem;
        }
        .footer h2 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.5rem, 3.2vw, 2.4rem);
          margin: 0 0 2rem;
          color: var(--paper);
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 2rem 0 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.82rem;
        }
        .footer-links a {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          text-decoration: none;
          color: var(--slate);
          transition: color 0.2s ease;
        }
        .footer-links a i {
          font-size: 1rem;
          line-height: 1;
        }
        .footer-links a:hover {
          color: var(--paper);
        }
        .footer-links a:hover i {
          color: var(--amber);
        }
        .footer-fine {
          color: var(--slate);
          font-size: 0.72rem;
        }

        /* ── MOBILE ── */
        @media (max-width: 860px) {
          .hero {
            grid-template-columns: 1fr;
            padding-top: 7rem;
            text-align: left;
            min-height: auto;
            gap: 1.5rem;
          }
          .hero-photo {
            order: -1;
            margin-bottom: 1rem;
          }
          .hero-scene {
            height: 380px;
            max-width: 100%;
          }
          .hero-bg-img {
            top: -40px;
            left: -40px;
            width: calc(100% + 80px);
            height: calc(100% + 80px);
          }
          .card3d-wrap {
            max-width: 300px;
            height: 340px;
          }
          .hero-sub {
            max-width: 100%;
          }
          .hero-cta {
            flex-wrap: wrap;
          }
          .showcase,
          .about,
          .skills-section {
            padding-top: 5rem;
          }
          .project-grid {
            grid-template-columns: 1fr;
          }
          .nav-links {
            gap: 1.2rem;
          }
          .strip-outer {
            height: 340px;
          }
          .strip-card {
            width: 160px;
            height: 115px;
          }
          .strip-col-3 {
            display: none;
          }
          .skills-tabs {
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          .skills-tab {
            white-space: nowrap;
          }
          .tech-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .cert-grid {
            grid-template-columns: 1fr;
          }
          .skill-proj-row {
            flex-wrap: wrap;
          }
          .skill-proj-note {
            display: none;
          }
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-mark {
            order: -1;
            margin-bottom: 1rem;
          }
          .footer-links {
            flex-wrap: wrap;
            gap: 1.2rem;
          }
        }

        /* ── SMALL TABLETS / LARGE PHONES ── */
        @media (max-width: 600px) {
          .hero {
            padding-top: 6rem;
          }
          .hero-scene {
            height: 320px;
          }
          .card3d-wrap {
            max-width: 260px;
            height: 290px;
          }
          .hero-cta {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-primary,
          .btn-ghost {
            text-align: center;
          }
          .pre-stack {
            width: 240px;
            height: 165px;
          }
          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .strip-card {
            width: 130px;
            height: 95px;
          }
          .cert-card {
            flex-wrap: wrap;
          }
          .cert-year {
            width: 100%;
            text-align: left;
            margin-top: 0.4rem;
          }
        }

        /* ── SMALL PHONES ── */
        @media (max-width: 420px) {
          .hero-text h1 {
            font-size: 1.7rem;
          }
          .showcase h2,
          .skills-heading,
          .strip-heading {
            font-size: 1.3rem;
          }
          .window-body {
            padding: 1rem;
          }
          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.6rem;
          }
          .pre-label {
            top: 1.2rem;
            left: 1.2rem;
          }
          .pre-counter {
            bottom: 1.2rem;
            right: 1.2rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .strip-col {
            animation: none;
          }
          .pre-card {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .pre-line {
            animation: none;
          }
          .tech-card,
          .tech-card i,
          .skill-proj-row,
          .skill-proj-dot,
          .cert-card,
          .cert-card i {
            transition: none;
          }
          .mark-letter {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
