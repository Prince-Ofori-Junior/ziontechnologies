"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode, MouseEvent } from "react";

/* Needs: extras.css appended to globals.css. Class names are all prefixed "ex-". */

/* ---------- Reveal on scroll ---------- */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`ex-reveal${seen ? " in" : ""} ${className}`} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

/* ---------- Scroll progress bar ---------- */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const p = h.scrollHeight - h.clientHeight;
        if (bar.current) bar.current.style.transform = `scaleX(${p > 0 ? h.scrollTop / p : 0})`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <div className="ex-progress" aria-hidden="true"><div ref={bar} /></div>;
}

/* ---------- Floating WhatsApp button ---------- */
export function WhatsAppFab() {
  return (
    <a className="ex-fab" href="https://wa.me/233595856187" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.2A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M9 9c.2 2.2 2.8 4.8 5 5l1.3-1.3-1.8-1-.8.6c-.8-.3-1.6-1.1-1.9-1.9l.6-.8-1-1.8L9 9Z" />
      </svg>
    </a>
  );
}

/* ---------- Why Zion: spotlight tiles ---------- */
const ICONS: Record<string, ReactNode> = {
  ear: <><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.2A8.5 8.5 0 1 1 21 11.5Z" /><path d="M8.5 11h7M8.5 14h4" /></>,
  quote: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>,
};

const WHY: { n: string; icon: string; title: string; text: string; big?: boolean }[] = [
  { n: "01", icon: "ear", title: "We listen before we build", text: "Every project starts with your goals, your customers and your budget, so the software we build solves a real problem and not an imagined one.", big: true },
  { n: "02", icon: "quote", title: "Clear quotes", text: "Costs and milestones are agreed before work begins." },
  { n: "03", icon: "user", title: "One point of contact", text: "A single accountable person, from briefing to launch." },
  { n: "04", icon: "shield", title: "Built to last", text: "Updates, hosting guidance and support after go-live." },
];

function Tile({ n, icon, title, text, big }: (typeof WHY)[number]) {
  const move = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <article className={`ex-tile${big ? " ex-tile--big" : ""}`} onMouseMove={move}>
      <span className="ex-tile-top">
        <span className="ex-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{ICONS[icon]}</svg>
        </span>
        <span className="ex-tile-n">{n}</span>
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function WhyZion() {
  return (
    <section className="ex-why" aria-labelledby="ex-why-h">
      <Reveal className="ex-head">
        <p className="kicker">Why Zion Technologies</p>
        <h2 id="ex-why-h">A partner, not just a vendor.</h2>
      </Reveal>
      <div className="ex-bento">
        {WHY.map((w, i) => (
          <Reveal key={w.n} delay={i * 90} className={w.big ? "ex-span" : ""}>
            <Tile {...w} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Technology logos (animated, logos only) ---------- */
type Tech = { name: string; slug?: string; icon?: ReactNode };

/* Official logos load from the Simple Icons CDN. React and React Native share the same logo. */
const logo = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const line = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);

const TECH: Tech[] = [
  { name: "Next.js", slug: "nextdotjs" },
  {
    name: "React and React Native",
    icon: (
      <svg viewBox="-11.5 -10.2 23 20.4">
        <circle r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" fill="none" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Flutter", slug: "flutter" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Cloud hosting", icon: line(<path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.3 8.6 5 5 0 0 0 7 19h10.5Z" />) },
  { name: "REST APIs", icon: line(<path d="m8 6-5 6 5 6M16 6l5 6-5 6M14 4l-4 16" />) },
  { name: "UI/UX design", icon: line(<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />) },
  { name: "Ecommerce", icon: line(<><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H6" /></>) },
];

export function TechTicker() {
  const row = [...TECH, ...TECH];
  return (
    <section className="ex-tech" aria-label="Technologies we work with">
      <p className="kicker">Tools we build with</p>
      <div className="ex-tech-mask">
        <div className="ex-tech-track">
          {row.map((t, i) => {
            const dup = i >= TECH.length;
            return (
              <span key={`${t.name}-${i}`} className="ex-logo" title={t.name} aria-hidden={dup || undefined}>
                {t.slug ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={logo(t.slug)} alt={dup ? "" : t.name} height={40} loading="lazy" />
                ) : (
                  <span className="ex-logo-svg" role={dup ? undefined : "img"} aria-label={dup ? undefined : t.name}>{t.icon}</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing call-to-action ---------- */
export function CtaBanner() {
  return (
    <section className="ex-cta" aria-labelledby="ex-cta-h">
      <Reveal className="ex-cta-inner">
        <span className="ex-orb ex-orb--a" aria-hidden="true" />
        <span className="ex-orb ex-orb--b" aria-hidden="true" />
        <p className="ex-cta-kicker">Let&apos;s build something</p>
        <h2 id="ex-cta-h">Have an idea? Let&apos;s turn it into software.</h2>
        <p className="ex-cta-text">Tell us what you need and we&apos;ll send a clear, no-surprises quote.</p>
        <ul className="ex-chips">
          <li>Clear quotes</li><li>One point of contact</li><li>Remote-friendly across Ghana</li>
        </ul>
        <div className="ex-cta-actions">
          <a className="ex-btn ex-btn--solid" href="#contact">Request a quote</a>
          <a className="ex-btn ex-btn--ghost" href="https://wa.me/233595856187" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </div>
      </Reveal>
    </section>
  );
}