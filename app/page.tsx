"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

/* ---------- Animated Why Zion ad (photo story) ---------- */
/* Needs: images in public/zion-ad/ and the zion-ad.css styles appended to globals.css */

type AdScene = {
  src: string;
  alt: string;
  kind: "cut" | "card";
  bg: string;
  fg: string;
  tint?: string;
  cap: string;
  sub: string;
  flip?: boolean;
  end?: boolean;
};

const AD_SCENES: AdScene[] = [
  { src: "/zion-ad/listen.jpg", alt: "Black telephone handset hanging from a coiled cord", kind: "cut",
    bg: "#e4e4e4", fg: "#14312f", tint: "#cfe9ec", cap: "We listen first.",
    sub: "Your goals, your customers and your budget. Then we plan." },
  { src: "/zion-ad/brand.jpg", alt: "Designer screen showing a printed corporate profile with charts on the desk", kind: "card",
    bg: "#eef4f5", fg: "#14312f", cap: "Brand and print that look the part.",
    sub: "Profiles, brochures and logos that match your website.", flip: true },
  { src: "/zion-ad/web.jpg", alt: "Laptop, phone and tablet showing a website with development icons", kind: "card",
    bg: "#07122b", fg: "#ffffff", cap: "Websites and software, built right.",
    sub: "Custom sites, online stores, apps and ongoing care." },
  { src: "/zion-ad/trust.jpg", alt: "Two professionals shaking hands across a table", kind: "cut",
    bg: "#e8e8e8", fg: "#14312f", tint: "#d3ecef", cap: "A partner you can trust.",
    sub: "Clear quotes, honest timelines and one point of contact.", flip: true },
  { src: "/zion-ad/love.jpg", alt: "Smiling woman making a heart with her hands", kind: "cut",
    bg: "#e8f0ff", fg: "#14312f", tint: "#c9dcff", cap: "Clients who love the result.",
    sub: "Friendly people who care about your success." },
  { src: "/zion-ad/results.jpg", alt: "Woman celebrating with a laptop on an orange bean bag", kind: "cut",
    bg: "#d2cfcb", fg: "#2a1a0a", tint: "#ffd9b8", cap: "Results worth celebrating.",
    sub: "Launches that help your business grow.", flip: true },
  { src: "/zion-ad/cta.jpg", alt: "Smiling man in a suit pointing to the side", kind: "cut",
    bg: "#eaf8fb", fg: "#14312f", tint: "#bfe3e8", cap: "Ready to start? Let\u2019s talk.",
    sub: "Tell us what you need and we\u2019ll send a clear quote.", end: true },
];

function ZionAd() {
  const [i, setI] = useState(0);
  const [inView, setInView] = useState(true);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const s = AD_SCENES[i];
  const next = () => setI((n) => (n + 1) % AD_SCENES.length);
  const style = {
    "--zs-bg": s.bg,
    "--zs-fg": s.fg,
    "--zs-tint": s.tint ?? "transparent",
  } as CSSProperties;

  return (
    <section
      ref={root}
      className="zs"
      style={style}
      data-run={inView}
      aria-label="Why choose Zion Technologies"
    >
      <div className={`zs-scene${s.flip ? " flip" : ""}`} key={`scene-${i}`}>
        <div className={`zs-media ${s.kind === "cut" ? "zs-cut" : "zs-cardwrap"}`}>
          {s.kind === "cut" ? (
            <>
              <i className="zs-ring" />
              <Image src={s.src} alt={s.alt} fill sizes="(max-width: 640px) 90vw, 480px" priority={i === 0} className="zs-cut-img" />
            </>
          ) : (
            <div className="zs-card">
              <Image src={s.src} alt={s.alt} fill sizes="(max-width: 640px) 90vw, 480px" className="zs-card-img" />
            </div>
          )}
        </div>
        <div className="zs-txt">
          <h2 className="zs-cap" aria-live="polite">{s.cap}</h2>
          <i className="zs-bar" />
          <p className="zs-sub">{s.sub}</p>
          {s.end && <a className="zs-btn" href="#contact">Request a quote</a>}
        </div>
      </div>

      <div className="zs-top">
        <span className="zs-brand">Zion Technologies</span>
      </div>

      <div className="zs-tl">
        {AD_SCENES.map((x, n) => (
          <button
            key={x.cap}
            type="button"
            className={`zs-seg${n < i ? " done" : ""}`}
            aria-label={`Go to scene ${n + 1}: ${x.cap}`}
            onClick={() => setI(n)}
          >
            {n === i && <i key={`f${i}`} onAnimationEnd={next} />}
          </button>
        ))}
      </div>
    </section>
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
  const [marqueePaused, setMarqueePaused] = useState(false);
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
          <a className="brand" href="#top" aria-label="Zion Technologies home"><img src="/favicon.ico" alt="Zion Technologies logo" width={72} height={72} /><div className="brand-text"><span className="logo-aqua">ionTechnologies</span><span className="logo-blue">.com</span></div></a>

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
          <button className="menu-btn" type="button" aria-expanded={menu} aria-label="Toggle menu" onClick={() => setMenu(!menu)}>
  <svg
    className={`hamburger ${menu ? 'active' : ''}`}
    viewBox="0 0 24 24"
    strokeWidth={2}
    fill="none"
  >
    <path className="first" d="M3.75 6.5h14" />
    <path className="middle" d="M3.75 12h20" />
    <path className="last" d="M3.75 17.5h14" /> 
  </svg>
</button>
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
                {/* <button type="button" aria-label="Show previous services" onClick={() => serviceGallery.current?.scrollBy({ left: -380, behavior: "smooth" })}>←</button> */}
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
                {/* <button type="button" aria-label="Show next services" onClick={() => serviceGallery.current?.scrollBy({ left: 380, behavior: "smooth" })}>→</button> */}
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
            <div className="marquee-track" onMouseEnter={() => setMarqueePaused(true)} onMouseLeave={() => setMarqueePaused(false)} style={{ animationPlayState: marqueePaused ? 'paused' : 'running' }}>
              {["/Brand Identity.jpg", "/Creative Design.jpg", "/Print Production.jpg", "/Customes softwares.jpg", "/Digital Support.jpg", "/image2.jpg"].map((src, i) => (
                <figure key={src} className="work-img-card">
                  <Image src={src} alt="Work" width={340} height={200} />
                </figure>
              ))}
              {["/Brand Identity.jpg", "/Creative Design.jpg", "/Print Production.jpg", "/Customes softwares.jpg", "/Digital Support.jpg", "/image2.jpg"].map((src, i) => (
                <figure key={src + "-a"} className="work-img-card">
                  <Image src={src} alt="Work" width={340} height={200} />
                </figure>
              ))}
            </div>
          </div>
          <div className="marquee-row marquee-row--reverse">
            <div className="marquee-track" onMouseEnter={() => setMarqueePaused(true)} onMouseLeave={() => setMarqueePaused(false)} style={{ animationPlayState: marqueePaused ? 'paused' : 'running' }}>
              {["/Brand Identity.jpg", "/Creative Design.jpg", "/Print Production.jpg", "/Customes softwares.jpg", "/Digital Support.jpg", "/image2.jpg"].map((src, i) => (
                <figure key={src + "-b"} className="work-img-card">
                  <Image src={src} alt="Work" width={280} height={200} />
                </figure>
              ))}
              {["/Brand Identity.jpg", "/Creative Design.jpg", "/Print Production.jpg", "/Customes softwares.jpg", "/Digital Support.jpg", "/image2.jpg"].map((src, i) => (
                <figure key={src + "-c"} className="work-img-card">
                  <Image src={src} alt="Work" width={280} height={200} />
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
