"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/* ---------- Animated Why Zion ad ---------- */

const delayClass = (seconds: number) =>
  `delay-${seconds.toFixed(2).replace(/\.?0+$/, "").replace(".", "-")}`;

const SCENES = [
  { id: "idea", cap: "It starts with your idea." },
  { id: "listen", cap: "We listen first." },
  { id: "design", cap: "Your brand, designed." },
  { id: "build", cap: "Your software, built." },
  { id: "print", cap: "Your print, delivered." },
  { id: "end", cap: "One connected team." },
];

const Z = ({ delay = 0 }: { delay?: number }) => (
  <svg viewBox="0 0 40 40" className="zlogo" aria-hidden="true">
    <path className={`draw ${delayClass(delay)}`} d="M11 11h18L11 29h18" />
  </svg>
);

const Tick = ({ delay }: { delay: number }) => (
  <svg viewBox="0 0 20 20" className="tick" aria-hidden="true">
    <path className={`draw ${delayClass(delay)}`} d="M4 10l4 4 8-8" />
  </svg>
);

function Scene({ id }: { id: string }) {
  switch (id) {
    case "idea":
      return (
        <div className="scene">
          <p className="mono type delay-0-4">I need a website, a brand and print.</p>
          <div className="chips">
            {["Website", "Logo", "Brochures", "Signage"].map((c, i) => <span key={c} className={`a pop ${delayClass(2.2 + i * 0.35)}`}>{c}</span>)}
          </div>
        </div>
      );
    case "listen":
      return (
        <div className="scene">
          <div className="list">
            {[["Your goal", "Launch a better product"], ["Your audience", "Who it is really for"], ["Your constraints", "Budget, time, and tools"]].map(([t, s], i) => (
              <div key={t} className={`row a sr ${delayClass(0.3 + i * 0.9)}`}>
                <Tick delay={0.8 + i * 0.9} />
                <div><b>{t}</b><span>{s}</span></div>
              </div>
            ))}
          </div>
        </div>
      );
    case "design":
      return (
        <div className="scene row-scene">
          <div className="tile a pop"><Z delay={0.4} /></div>
          <div className="design-side">
            <div className="swatches">
              {["green", "orange", "blue", "cream"].map((color, i) => <i key={color} className={`a pop swatch-${color} ${delayClass(1.3 + i * 0.3)}`} />)}
            </div>
            <p className="specimen a rise delay-2-6">Aa <small>Type and colour, set as a system</small></p>
          </div>
        </div>
      );
    case "build":
      return (
        <div className="scene row-scene">
          <div className="win a pop">
            <div className="wbar"><i /><i /><i /></div>
            <div className="wbody">
              <i className="grow bl build-title delay-0-6" />
              <i className="grow bl g build-hero delay-1" />
              <div className="two">
                <i className="grow bl build-card delay-1-5" />
                <i className="grow bl build-card delay-1-8" />
              </div>
            </div>
          </div>
          <div className="code">
            {[0, 1, 2, 3, 4].map((i) => <i key={i} className={`grow code-line-${i} ${delayClass(0.5 + i * 0.35)}`} />)}
            <b className="live a pop delay-3-4">Live</b>
          </div>
        </div>
      );
    case "print":
      return (
        <div className="scene row-scene">
          <div className="pcard a sl delay-0-3"><span className="mini"><Z delay={0.6} /></span>Zion</div>
          <div className="fold">
            {["green", "pale", "orange"].map((color, i) => <i key={color} className={`a rise fold-${color} ${delayClass(1 + i * 0.35)}`} />)}
          </div>
          <div className="sign a sr delay-1-8">Open</div>
        </div>
      );
    default:
      return (
        <div className="scene">
          <div className="tile a pop"><Z delay={0.3} /></div>
          <h3 className="a rise delay-1-1">Zion Technologies</h3>
          <p className="a rise delay-1-5">Software, print, and brand, working as one.</p>
          <a className="endbtn a pop delay-2-2" href="#contact">Request a quote</a>
        </div>
      );
  }
}

function ZionAd() {
  const [scene, setScene] = useState(0);
  const [on, setOn] = useState(true);
  const [inView, setInView] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setOn(false);
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const run = on && inView;
  const next = () => setScene((s) => (s + 1) % SCENES.length);

  return (
    <div className="zad" ref={root} data-run={run} role="region" aria-label="Zion Technologies animated introduction">
      <div className="zad-top">
        <b>Why Zion</b>
        <span>{scene + 1} / {SCENES.length}</span>
        <button type="button" onClick={() => setOn(!on)} aria-label={on ? "Pause animation" : "Play animation"}>{on ? "Pause" : "Play"}</button>
      </div>
      <div className="stage">
        <Scene key={scene} id={SCENES[scene].id} />
        <p className="cap" key={`c${scene}`} aria-live="polite">{SCENES[scene].cap}</p>
      </div>
      <div className="timeline">
        {SCENES.map((s, i) => (
          <button key={s.id} type="button" className={`seg seg-${s.id}${i < scene ? " done" : ""}`} aria-label={`Go to scene ${i + 1}: ${s.cap}`} onClick={() => setScene(i)}>
            {i === scene && <i key={`f${scene}`} onAnimationEnd={next} />}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

const EMAIL = "hello@ziontechnologies.com";

type Cat = "all" | "digital" | "creative";
type ServiceIcon = "software" | "automation" | "support" | "brand" | "print" | "creative";
const tabs: { id: Cat; label: string }[] = [
  { id: "all", label: "Core services" },
  { id: "digital", label: "Digital" },
  { id: "creative", label: "Creative & print" },
];

const services: { cat: Exclude<Cat, "all">; icon: ServiceIcon; title: string; text: string; image: string; imageAlt: string }[] = [
  { cat: "digital", icon: "software", title: "Custom software", text: "Websites, mobile apps, and business systems shaped around your workflow.", image: "/custom software2.jpg", imageAlt: "A website design displayed across desktop and mobile devices." },
  { cat: "digital", icon: "automation", title: "Smart automation", text: "Connect tools and remove repetitive work from daily operations.", image: "/Smiling Man Exploring Floating Analytics Dashboards.png", imageAlt: "A professional working with floating analytics dashboards." },
  { cat: "digital", icon: "support", title: "Digital support", text: "Reliable updates, maintenance, hosting guidance, and technical support.", image: "/87d0a1aba271991647c19601708dbd72.jpg", imageAlt: "A customer support professional wearing a headset." },
  { cat: "creative", icon: "brand", title: "Brand identity", text: "Distinctive logos, visual systems, and brand guidelines.", image: "/Brand Identity.jpg", imageAlt: "Branded promotional products displaying a company identity." },
  { cat: "creative", icon: "print", title: "Print production", text: "Brochures, signage, packaging, stationery, and large-format prints.", image: "/Print Production1.jpg", imageAlt: "A wide-format printer producing colorful prints in a print studio." },
  { cat: "creative", icon: "creative", title: "Creative materials", text: "Campaigns, presentations, uniforms, merchandise, and branded assets.", image: "/Creative Design.jpg", imageAlt: "A heat press producing custom-designed apparel and merchandise." },
];

function ServiceIconGraphic({ icon }: { icon: ServiceIcon }) {
  const paths: Record<ServiceIcon, ReactNode> = {
    software: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4M7 9l2 2-2 2m4 0h3" /></>,
    automation: <><path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.64 5.64l2.83 2.83m7.06 7.06 2.83 2.83m0-12.72-2.83 2.83m-7.06 7.06-2.83 2.83" /><circle cx="12" cy="12" r="4" /></>,
    support: <><path d="M3 13v-2a9 9 0 0 1 18 0v2" /><path d="M5 13h2v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Zm14 0h-2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Zm0 6a5 5 0 0 1-5 3h-2" /></>,
    brand: <><path d="m12 3 2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3Z" /><path d="m19 3 .8 2.2L22 6l-2.2.8L19 9l-.8-2.2L16 6l2.2-.8L19 3Z" /></>,
    print: <><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 14h12v7H6zM18 12h.01" /></>,
    creative: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="m21 15-5-5L5 20" /></>,
  };

  return (
    <span className="feature-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {paths[icon]}
      </svg>
    </span>
  );
}

const steps = [
  ["Discover", "Goals, audience, scope, and success measures."],
  ["Design", "Direction, prototypes, identity, and practical specifications."],
  ["Deliver", "Development, production, quality checks, and launch."],
  ["Support", "Training, updates, refinements, and ongoing care."],
];

const solutions = [
  ["Startups & SMEs", "Launch a polished digital product and brand without adding unnecessary complexity."],
  ["Corporate teams", "Build internal systems, reports, presentations, and consistent communications."],
  ["Retail & commerce", "Create ecommerce experiences, packaging, signage, and promotional materials."],
  ["Education", "Develop portals, prospectuses, certificates, and learning resources."],
  ["Events & hospitality", "Design invitations, menus, displays, campaigns, and guest experiences."],
  ["Institutions", "Deliver accessible websites, public documents, and clear civic branding."],
];

export default function Home() {
  const [tab, setTab] = useState<Cat>("all");
  const [menu, setMenu] = useState(false);
  const features = useRef<HTMLElement>(null);
  const serviceGallery = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = features.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (el.classList.add("is-visible"), io.disconnect()), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shown = services.filter((s) => tab === "all" || s.cat === tab);

  return (
    <>
            <header className="site-header">
        <nav className="main-nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Zion Technologies home"><span>Z</span>Zion Technologies</a>
          <div className={menu ? "nav-links open" : "nav-links"}>
            {[["Services", "#services"], ["Solutions", "#solutions"], ["How it works", "#process"], ["About", "#about"]].map(([l, h]) => (
              <a key={l} href={h} onClick={() => setMenu(false)}>{l}</a>
            ))}
            <a className="nav-cta mobile-only" href="#contact" onClick={() => setMenu(false)}>Get a quote</a>
          </div>
          <div className="nav-actions">
            <a href={`mailto:${EMAIL}`}>Contact</a>
            <a className="nav-cta" href="#contact">Get a quote</a>
          </div>
          <button className="menu-btn" type="button" aria-expanded={menu} aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? "Close" : "Menu"}</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>Technology, print, <span>and brand, working as one.</span></h1>
            <p>Zion Technologies helps businesses launch better digital products, build memorable brands, and produce polished materials.</p>
          </div>

          <ZionAd />
        </section>

        <section className="proof-strip" aria-label="Zion Technologies strengths">
          <div><strong>Custom software</strong><small>Web, mobile, and business systems</small></div>
          <div><strong>Clear branding</strong><small>Identity built to be used</small></div>
          <div><strong>Reliable production</strong><small>Print checked before it ships</small></div>
        </section>

        <section className="features-section" id="services" ref={features}>
          <div className="section-heading">
            <h2 className="services-title">Powerful work, made simple.</h2>
          </div>
          <div className="feature-tabs" role="group" aria-label="Service categories">
            {tabs.map((t) => <button key={t.id} type="button" aria-pressed={tab === t.id} onClick={() => setTab(t.id)}>{t.label}</button>)}
          </div>
          <div className="feature-grid">
            {shown.map((s) => (
              <article key={s.title}>
                <ServiceIconGraphic icon={s.icon} />
                <div className="feature-content">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="service-gallery">
            <div className="service-gallery-row">
              <div className="service-gallery-controls">
                <button type="button" aria-label="Show previous services" onClick={() => serviceGallery.current?.scrollBy({ left: -380, behavior: "smooth" })}>←</button>
              </div>
              <div className="service-gallery-track" ref={serviceGallery} tabIndex={0} aria-label="Swipe or scroll to explore images of our six services">
                {services.map((service) => (
                  <article className="service-gallery-card" key={service.title}>
                    <Image src={service.image} alt={service.imageAlt} width={540} height={360} />
                    <h4>{service.title}</h4>
                  </article>
                ))}
              </div>
              <div className="service-gallery-controls">
                <button type="button" aria-label="Show next services" onClick={() => serviceGallery.current?.scrollBy({ left: 380, behavior: "smooth" })}>→</button>
              </div>
            </div>
          </div>
        </section>

        <section className="payment-section" aria-labelledby="payment-heading">
          <div className="payment-copy">
            <p className="kicker">Flexible payment options</p>
            <h2 id="payment-heading">Flexible payments, agreed upfront.</h2>
            <p>We’ll agree on a payment schedule that fits your project, with clear costs and milestones before work begins.</p>
            <a className="payment-link" href={`mailto:${EMAIL}?subject=Discuss%20a%20project%20payment%20schedule`}>Discuss your project <span>→</span></a>
          </div>
          <Image
            src="/Excited Man Using Laptop (1).png"
            alt="A customer viewing a project on a laptop."
            width={640}
            height={480}
            style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
          />
        </section>

        {/* <section className="process-section" id="process">
          <div className="process-copy">
            <p className="kicker">How it works</p>
            <h2>Clear steps. No lost context.</h2>
            <p>One accountable team manages the project from briefing to delivery, with regular updates along the way.</p>
            <a href="#contact">Plan a project <span>→</span></a>
          </div>
          <ol className="process-board">
            {steps.map(([t, d], i) => (
              <li key={t}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{t}</h3><p>{d}</p></div></li>
            ))}
          </ol>
        </section> */}

        <section className="solutions-section" id="solutions">
          <div className="solutions-heading">
            <p className="kicker">Solutions for every sector</p>
            <h2>Built around the way you work.</h2>
            <p>Flexible support for organisations at every stage of growth.</p>
          </div>
          <div className="solution-grid">
            {solutions.map(([t, d]) => <article key={t}><h3>{t}</h3><p>{d}</p><b aria-hidden="true">↗</b></article>)}
          </div>
        </section>

        <section className="work-partners-section">
          <div className="marquee-row">
            <div className="marquee-track">
              {["/Brand Identity.jpg", "/Creative Design.jpg", "/Print Production.jpg", "/Customes softwares.jpg", "/Digital Support.jpg", "/image2.jpg"].map((src, i) => (
                <figure key={src} className="work-img-card">
                  <Image src={src} alt="Work" width={180} height={180} />
                </figure>
              ))}
              {["/Brand Identity.jpg", "/Creative Design.jpg", "/Print Production.jpg", "/Customes softwares.jpg", "/Digital Support.jpg", "/image2.jpg"].map((src, i) => (
                <figure key={src + "-a"} className="work-img-card">
                  <Image src={src} alt="Work" width={180} height={180} />
                </figure>
              ))}
            </div>
          </div>
          <div className="marquee-row marquee-row--reverse">
            <div className="marquee-track">
              {["/Brand Identity.jpg", "/Creative Design.jpg", "/Print Production.jpg", "/Customes softwares.jpg", "/Digital Support.jpg", "/image2.jpg"].map((src, i) => (
                <figure key={src + "-b"} className="work-img-card">
                  <Image src={src} alt="Work" width={180} height={180} />
                </figure>
              ))}
              {["/Brand Identity.jpg", "/Creative Design.jpg", "/Print Production.jpg", "/Customes softwares.jpg", "/Digital Support.jpg", "/image2.jpg"].map((src, i) => (
                <figure key={src + "-c"} className="work-img-card">
                  <Image src={src} alt="Work" width={180} height={180} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="pre-footer" id="contact" aria-label="Company information">
          <div className="pre-footer-about">
            <h2>Software development</h2>
            <p>We design and build tailored web applications, mobile apps, and business systems that help teams work smarter and grow.</p>
            <span className="pre-footer-logo" aria-label="Zion Technologies">Z</span>
          </div>
          <div className="pre-footer-links">
            <h2>Explore</h2>
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
            <a href="#about">About us</a>
          </div>
          <div className="pre-footer-contact">
            <h2>Get in touch</h2>
            <p>Have a project in mind? We&apos;d be glad to hear from you.</p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href="tel:+233595856187">+233 59 585 6187</a>
            <a href="https://wa.me/233595856187" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <div className="pre-footer-location">
            <h2>Find us</h2>
            <p>Accra, Weija</p>
            <h2>Business hours</h2>
            <p>Monday–Friday</p>
            <h2>Follow us</h2>
            <div className="social-icons" aria-label="Social media">
              <span aria-label="YouTube" title="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg></span>
              <span aria-label="Facebook" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z"/></svg></span>
              <span aria-label="X" title="X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.5l7.3-8.4L1.9 2h6.5l4.5 6.7L18.9 2Zm-1.1 17.9h1.7L7.4 4H5.6l12.2 15.9Z"/></svg></span>
              <span aria-label="TikTok" title="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.6 6.3a5.8 5.8 0 0 1-3.5-1.2 5.8 5.8 0 0 1-1.8-3.5h-3.7v14.1a3.1 3.1 0 1 1-3.1-3.1c.5 0 .9.1 1.3.3V9.1a7 7 0 1 0 5.5 6.8V8.7a9.4 9.4 0 0 0 5.3 1.7V6.7c0-.1 0-.3 0-.4Z"/></svg></span>
            </div>
          </div>
        </section>
      </main>

      <footer id="about">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>
    </>
  );
}