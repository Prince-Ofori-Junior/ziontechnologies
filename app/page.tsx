"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
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
        {/* <span className="zs-brand">Zion Technologies</span> */}
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

const EMAIL = "ofori24688@gmail.com";

type Cat = "all" | "digital" | "creative";
type ServiceIcon = "software" | "automation" | "support" | "shield" | "web" | "cloud" | "mobile";
const tabs: { id: Cat; label: string }[] = [
  { id: "all", label: "Core services" },
  { id: "digital", label: "Digital" },
  { id: "creative", label: "Creative & print" },
];

/* Services sub-tabs used in the navbar Services dropdown */
const DEV_SUBTABS: { label: string; href: string }[] = [
  { label: "Web Development", href: "/web-development" },
  { label: "Mobile Application", href: "/mobile-development" },
  { label: "Desktop Application", href: "/desktop-application" },
  { label: "UI/UX Design", href: "/ui-ux-design" },
  { label: "Tech Consulting", href: "/tech-consulting" },
  { label: "Digital Support", href: "/digital-support" },
  { label: "Cloud Solutions", href: "/cloud-solutions" },
];

const services: { cat: Exclude<Cat, "all">; icon: ServiceIcon; title: string; text: string; image: string; imageAlt: string }[] = [
  { cat: "digital", icon: "web", title: "Web Development", text: "Websites, mobile apps, and business systems shaped around your workflow.", image: "/Customes softwares.jpg", imageAlt: "A website design displayed across desktop and mobile devices." },
  { cat: "digital", icon: "mobile", title: "Mobile Application", text: "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.", image: "/Mobile Application1.jpg", imageAlt: "A professional working with mobile applications." },
  { cat: "digital", icon: "software", title: "Desktop Application", text: "Powerful desktop applications for Windows, macOS, and Linux that run smoothly offline.", image: "/Desktop Application0.jpg", imageAlt: "Desktop applications running on multiple devices." },
  { cat: "digital", icon: "support", title: "Tech Consulting", text: "Expert guidance to help you make the right technology decisions for your business.", image: "/Tech Consult.png", imageAlt: "Technology consulting services." },
  { cat: "digital", icon: "shield", title: "Digital Support", text: "Reliable updates, maintenance, hosting guidance, and technical support.", image: "/Digital Support2.jpg", imageAlt: "A customer support professional wearing a headset." },
  { cat: "digital", icon: "cloud", title: "Cloud Solutions", text: "Scalable cloud infrastructure and migration services that help your business grow.", image: "/Cloud Solutions00.jpg", imageAlt: "Cloud computing infrastructure and migration services." },
];

function ServiceIconGraphic({ icon }: { icon: ServiceIcon }) {
  const paths: Record<ServiceIcon, ReactNode> = {
    software: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4M7 9l2 2-2 2m4 0h3" /></>,
    automation: <><path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.64 5.64l2.83 2.83m7.06 7.06 2.83 2.83m0-12.72-2.83 2.83m-7.06 7.06-2.83 2.83" /><circle cx="12" cy="12" r="4" /></>,
    support: <><path d="M3 13v-2a9 9 0 0 1 18 0v2" /><path d="M5 13h2v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Zm14 0h-2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Zm0 6a5 5 0 0 1-5 3h-2" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v4" /></>,
    web: <><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9c0-2.5.5-4.9 1.4-7m14 7a9 9 0 0 0-9-9m0 18c4.71 0 8.54-3.42 9.67-8z" /></>,
    cloud: <><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 2.55 1.28 4.82 3.18 6.04A10.55 10.55 0 0 0 12 22c3.17 0 6.04-1.5 7.8-3.85C21.33 20.97 23 18.44 23 16c0-1.46-.6-2.78-1.52-3.77z" /></>,
    mobile: <><rect x="2" y="3" width="20" height="18" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></>,
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
  const [devMenu, setDevMenu] = useState(false);
  const [marqueePaused, setMarqueePaused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const features = useRef<HTMLElement>(null);
  const serviceGallery = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = features.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (el.classList.add("is-visible"), io.disconnect()), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [tab]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handleChange = () => setIsMobile(mq.matches);
    handleChange();
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const allShown = services.filter((s) => tab === "all" || s.cat === tab);
  const shown = (isMobile && !expanded) ? allShown.slice(0, 3) : allShown;

  return (  
    <>
      <header className="site-header">
        <nav className="main-nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Zion Technologies home"><img src="/logo.png" alt="Zion Technologies logo" /><div className="brand-text"><span className="logo-aqua"> </span><span className="logo-blue"></span></div></a>

          <div className={menu ? "nav-links open" : "nav-links"}>
            {["Home", "Solutions", "About", "Blogs"].map((l, index) => {
              const h = index === 0 ? "#top" : index === 1 ? "#solutions" : index === 2 ? "/about" : "/blogs";
              const isActive = pathname === h || (h === "#top" && pathname === "/");
              return <a key={index} href={h} onClick={() => setMenu(false)} className={isActive ? "active" : ""}>{l}</a>;
            })}
            <div className={`nav-dropdown ${devMenu ? "open" : ""}`}>
              <a className="nav-dropdown-toggle" href="/services" onClick={(e) => { e.preventDefault(); setDevMenu(!devMenu); }}>Services</a>
              <div className="nav-dropdown-menu" aria-label="Services sub-tabs">
                {DEV_SUBTABS.map(({ label, href }) => (
                  <a key={label} className="nav-dropdown-item" href={href}>{label}</a>
                ))}
              </div>
            </div>
            <a className="nav-cta nav-cta--accent mobile-only" href="#contact" onClick={() => setMenu(false)}>Get a quote</a>
          </div>
          <div className="nav-actions">
            <a href={`mailto:${EMAIL}`}>Contact</a>
            <a className="nav-cta nav-cta--accent" href="#contact">Get a quote</a>
          </div>
          <button className="menu-btn" type="button" aria-expanded={menu} aria-label="Toggle menu" onClick={() => setMenu(!menu)}>
  <svg
    className={`hamburger ${menu ? 'active' : ''}`}
    viewBox="0 0 24 24"
    strokeWidth={2}
    fill="none"
  >
    <path className="first" d="M3.75 6.5h14" />
    <path className="middle" d="M3.75 12.5h20" />
    <path className="last" d="M3.75 18.5h14" /> 
  </svg>
</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>Software Technology And Digital<br />Innovation Working As One.</h1>
            <p>Zion Technologies helps businesses launch<br />better software, build scalable web applications, and grow with modern technology.</p>
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
          {isMobile && !expanded && allShown.length > 3 && (
            <button type="button" onClick={() => setExpanded(true)} className="view-more">
              View more →
            </button>
          )}
          {expanded && (
            <button type="button" onClick={() => setExpanded(false)} className="view-more">
              View less →
            </button>
          )}
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
            <a href={`mailto:${EMAIL}`}>Discuss your project</a>
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

        <section className="seoFaqSection" id="faq" aria-label="Frequently asked questions">
          <h2>FAQ</h2>
          <div className="seoFaqList">
            <details className="seoFaqItem" open>
              <summary className="seoFaqQuestion">
                Which is the best software development company in Ghana for my business?
              </summary>
              <div className="seoFaqAnswer">
                <p>
                  Choosing the right software development company depends on its technical expertise, completed projects, communication, pricing transparency and ability to understand your business requirements. Zion Technologies provides custom software development, website development, mobile applications and digital solutions for businesses and organisations in Ghana. We encourage prospective clients to review our work and discuss their requirements before choosing a development partner.
                </p>
              </div>
            </details>

            <details className="seoFaqItem">
              <summary className="seoFaqQuestion">
                How much does it cost to develop custom software in Ghana?
              </summary>
              <div className="seoFaqAnswer">
                <p>
                  The cost of custom software development in Ghana depends on the project's complexity, features, user requirements, database structure, integrations and development time. A simple business application will require a different budget from a complete management system or ecommerce platform. Zion Technologies provides project-specific quotations in Ghanaian cedis (GHS) based on your requirements.
                </p>
              </div>
            </details>

            <details className="seoFaqItem">
              <summary className="seoFaqQuestion">
                How long does it take to develop software in Ghana?
              </summary>
              <div className="seoFaqAnswer">
                <p>
                  Software development timelines depend on the type of application, number of features, design requirements, integrations and testing. A simple business website generally requires less development time than a complex web application or business management system. Zion Technologies establishes project milestones and an estimated delivery schedule after assessing the project requirements.
                </p>
              </div>
            </details>

            <details className="seoFaqItem">
              <summary className="seoFaqQuestion">
                Can I hire a software development company in Ghana if my business is located in Kumasi or New Edubiase?
              </summary>
              <div className="seoFaqAnswer">
                <p>
                  Yes. Zion Technologies welcomes project enquiries from businesses and organisations in Accra, Kumasi, New Edubiase and other parts of Ghana. Project discussions, requirements gathering and progress updates can be conducted remotely, making it possible to work together without being in the same city.
                </p>
              </div>
            </details> 

            <details className="seoFaqItem">
              <summary className="seoFaqQuestion">
                Which company can develop an Android and iOS mobile application in Ghana?
              </summary>
              <div className="seoFaqAnswer">
                <p>
                  Zion Technologies provides mobile application development solutions for businesses and entrepreneurs looking to build digital products. Depending on your requirements, we can discuss application design, user registration, dashboards, backend development, integrations and the appropriate mobile platforms.
                </p>
              </div>
            </details>

            <details className="seoFaqItem">
              <summary className="seoFaqQuestion">
                How do software developers protect business data and customer information?
              </summary>
              <div className="seoFaqAnswer">
                <p>
                  Data security should be considered throughout software design and development. Depending on the application, important considerations include secure authentication, user permissions, data protection, encrypted communication, database security, backups and testing. Zion Technologies can assess your security requirements and incorporate the appropriate measures into the agreed development scope.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section className="pre-footer" id="contact" aria-label="Company information">
          <div className="pre-footer-about">
            <h2>Software development</h2>
            <p>We design and build tailored web applications, mobile apps, and business systems that help teams work smarter and grow.</p>
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