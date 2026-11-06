
"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./about.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const EMAIL = "ofori24688@gmail.com";

const DEV_SUBTABS = [
  { label: "Web Development", href: "/web-development" },
  { label: "Mobile Application", href: "/mobile-development" },
  { label: "Desktop Application", href: "/desktop-application" },
  { label: "UI/UX Design", href: "/ui-ux-design" },
  { label: "Tech Consulting", href: "/tech-consulting" },
  { label: "Digital Support", href: "/digital-support" },
  { label: "Cloud Solutions", href: "/cloud-solutions" },
];

// Company Values with SVG Icons
const values = [
  {
    t: "Quality first",
    d: "Clean code, tested applications and careful design in every project.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    t: "Transparent pricing",
    d: "Clear quotes with no hidden fees, agreed before we start.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
        <path d="M16 15h2" />
      </svg>
    ),
  },
  {
    t: "Client partnership",
    d: "We listen first, then solve your real business problems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3" />
        <path d="M8 11c-1.7 0-3-1.3-3-3s1.3-3 3-3" />
        <circle cx="12" cy="8" r="4" />
        <path d="M2 21c0-3.3 4.5-5 10-5s10 1.7 10 5" />
      </svg>
    ),
  },
  {
    t: "Ongoing support",
    d: "Launch is the beginning. We stay on after delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13a8 8 0 0 1 16 0" />
        <rect x="2" y="12" width="4" height="7" rx="2" />
        <rect x="18" y="12" width="4" height="7" rx="2" />
        <path d="M18 19a6 6 0 0 1-6 3h-2" />
      </svg>
    ),
  },
];

// Services
const services = [
  {
    t: "Web development",
    d: "Websites and web applications built for performance and scale.",
  },
  {
    t: "Mobile applications",
    d: "Apps for iOS and Android.",
  },
  {
    t: "Desktop software",
    d: "Applications for Windows, macOS and Linux.",
  },
  {
    t: "Cloud solutions",
    d: "Infrastructure, migration and managed hosting.",
  },
  {
    t: "UI/UX design",
    d: "Interfaces people understand on the first try.",
  },
  {
    t: "Brand & print",
    d: "Logos, brochures and company profiles.",
  },
];

// Why Choose Us
const reasons = [
  [
    "Local expertise",
    "We understand how business works in Ghana and across Africa.",
  ],
  [
    "Clear communication",
    "One point of contact, regular updates, honest timelines.",
  ],
  [
    "Maintainable code",
    "Well documented, so your team can extend it.",
  ],
  [
    "Fair rates",
    "Quality work at prices growing businesses can plan for.",
  ],
];

// Team Members
const team = [
  {
    name: "Team Member One",
    role: "Chief Executive Officer",
    image: "/team/member-1.jpg",
  },
  {
    name: "Team Member Two",
    role: "Lead Software Engineer",
    image: "/team/member-2.jpg",
  },
  {
    name: "Team Member Three",
    role: "UI/UX Designer",
    image: "/team/member-3.jpg",
  },
  {
    name: "Team Member Four",
    role: "Project Manager",
    image: "/team/member-4.jpg",
  },
];

export default function AboutPage() {
  const [menu, setMenu] = useState(false);
  const [devMenu, setDevMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="site-header">
        <nav className="main-nav" aria-label="Main navigation">

          <a
            className="brand"
            href="/"
            aria-label="Zion Technologies home"
          >
            <img src="/logo.png" alt="Zion Technologies logo" />
            <div className="brand-text">
              <span className="logo-aqua"></span>
              <span className="logo-blue"></span>
            </div>
          </a>

          <div className={menu ? "nav-links open" : "nav-links"}>

            <a
              href="/"
              onClick={() => setMenu(false)}
              className={pathname === "/" ? "active" : ""}
            >
              Home
            </a>

            <a
              href="/#solutions"
              onClick={() => setMenu(false)}
            >
              Solutions
            </a>

            <a
              href="/about"
              onClick={() => setMenu(false)}
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </a>

            <a
              href="/blogs"
              onClick={() => setMenu(false)}
              className={pathname === "/blogs" ? "active" : ""}
            >
              Blogs
            </a>

            {/* Services Dropdown */}
            <div className={`nav-dropdown ${devMenu ? "open" : ""}`}>

              <a
                className="nav-dropdown-toggle"
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  setDevMenu(!devMenu);
                }}
                aria-expanded={devMenu}
              >
                Services
              </a>

              <div
                className="nav-dropdown-menu"
                aria-label="Services sub-tabs"
              >
                {DEV_SUBTABS.map(({ label, href }) => (
                  <a
                    key={label}
                    className="nav-dropdown-item"
                    href={href}
                    onClick={() => {
                      setMenu(false);
                      setDevMenu(false);
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>

            </div>

            <a
              className="nav-cta nav-cta--accent mobile-only"
              href="/#contact"
              onClick={() => setMenu(false)}
            >
              Get a quote
            </a>

          </div>

          {/* Desktop Navigation Actions */}
          <div className="nav-actions">
            <a href={`mailto:${EMAIL}`}>Contact</a>

            <a
              className="nav-cta nav-cta--accent"
              href="/#contact"
            >
              Get a quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="menu-btn"
            type="button"
            aria-expanded={menu}
            aria-label="Toggle menu"
            onClick={() => {
              setMenu(!menu);
              if (menu) setDevMenu(false);
            }}
          >
            <svg
              className={`hamburger ${menu ? "active" : ""}`}
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

      {/* ================= ABOUT PAGE ================= */}

      <main>
        <div className={`ab ${display.variable} ${body.variable}`}>

          {/* Hero */}
          <section className="ab-hero">
            <div className="ab-wrap ab-hero-grid">

              <div>
                <a href="/" className="ab-kicker">
                  About Zion Technologies
                </a>

                <h1>
                  We help businesses grow with technology that works.
                </h1>

                <p className="ab-lead">
                  Zion Technologies is a digital agency in Weija, Accra. We build
                  websites, apps, software and brands for startups, SMEs and
                  corporate teams.
                </p>

                <div className="ab-actions"></div>
              </div>

              {/* Hero Images and Stats */}
              <div className="ab-hero-media">

                <div className="ab-hero-main">
                  <Image
                    src="/Zion.png"
                    alt="Zion Technologies logo"
                    width={300}
                    height={250}
                    className="ab-hero-img ab-hero-img-main"
                  />

                  <section className="ab-stats-band">
                    <dl className="ab-stats">
                      <div>
                        <dd>2020</dd>
                        <dt>Founded in Accra</dt>
                      </div>

                      <div>
                        <dd>50+</dd>
                        <dt>Projects delivered</dt>
                      </div>

                      <div>
                        <dd>6</dd>
                        <dt>Core services</dt>
                      </div>
                    </dl>
                  </section>
                </div>

                <div className="ab-hero-side">
                  <Image
                    src="/Zion.png"
                    alt="Zion Technologies logo"
                    width={300}
                    height={250}
                    className="ab-hero-img"
                  />

                  <Image
                    src="/Zion.png"
                    alt="Zion Technologies logo"
                    width={300}
                    height={250}
                    className="ab-hero-img"
                  />
                </div>

              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="ab-section ab-tint">
            <div className="ab-wrap ab-mission-vision">

              <div className="ab-mv-card">
                <h2>Our mission</h2>
                <p>
                  To empower businesses with reliable, affordable technology
                  that drives growth, efficiency and lasting success.
                </p>
              </div>

            </div>
          </section>

          {/* Values */}
          <section className="ab-section">
            <div className="ab-wrap">

              <ul className="ab-cols ab-cols-4 ab-value-cards">
                {values.map((v, index) => (
                  <li key={v.t} className="ab-value-card">

                    <div className="ab-value-top">
                      <span className="ab-value-number">
                        0{index + 1}
                      </span>

                      <span className="ab-value-icon">
                        {v.icon}
                      </span>
                    </div>

                    <h3>{v.t}</h3>
                    <p>{v.d}</p>

                  </li>
                ))}
              </ul>

            </div>
          </section>

          {/* Services */}
          <section id="services" className="ab-section ab-tint">
            <div className="ab-wrap">

              <h2 className="ab-title">What we do</h2>

              <ul className="ab-cols ab-cols-3">
                {services.map((s) => (
                  <li key={s.t}>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </li>
                ))}
              </ul>

            </div>
          </section>

          {/* Why Us */}
          <section className="ab-section">
            <div className="ab-wrap ab-split ab-split-wide">

              <h2>Why teams choose Zion</h2>

              <ul className="ab-rows">
                {reasons.map(([t, d]) => (
                  <li key={t}>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </li>
                ))}
              </ul>

            </div>
          </section>

          {/* Meet the Team */}
          <section className="ab-section ab-team-section">
            <div className="ab-wrap">

              <div className="ab-team-heading">
                <span className="ab-kicker">
                  The People Behind Zion
                </span>

                <h2>Meet the team</h2>

                <p>
                  Meet the talented people behind our technology,
                  innovation and commitment to delivering quality solutions.
                </p>
              </div>

              <div className="ab-team-grid">
                {team.map((member, index) => (
                  <article className="ab-team-card" key={member.name}>

                    <div className="ab-team-image">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={450}
                        sizes="(max-width: 600px) 45vw, (max-width: 1000px) 45vw, 25vw"
                      />

                      <span className="ab-team-number">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="ab-team-info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>

                  </article>
                ))}
              </div>

            </div>
          </section>

          {/* Story */}
          <section className="ab-section">
            <div className="ab-wrap ab-split">

              <div>
                <Image
                  src="/Orange ZionTechnologie.png"
                  alt="Zion Technologies team at work"
                  width={500}
                  height={450}
                  sizes="(max-width: 900px) 90vw, 460px"
                  className="ab-story-img"
                />
              </div>

              <div>
                <h2>Our story</h2>

                <p>
                  We started in 2020 by helping local businesses get online:
                  websites, branding and simple software tools. As our clients
                  grew, we grew with them.
                </p>

                <p>
                  Today we deliver custom web applications, mobile apps, desktop
                  software, cloud infrastructure and long-term support. Every
                  project is built to be maintainable, fast and ready to scale,
                  so your technology keeps up with your business.
                </p>
              </div>

            </div>
          </section>

          {/* CTA */}
          <section className="ab-cta">
            <div className="ab-wrap ab-cta-inner">

              <div>
                <h2>Ready to start your project?</h2>

                <p>
                  Tell us what you need and we&apos;ll send a clear,
                  no-obligation quote.
                </p>
              </div>

              <a href="/#contact" className="ab-btn ab-btn-dark">
                Get a quote
              </a>

            </div>
          </section>

        </div>
      </main>

      {/* ================= SHARED FOOTER ================= */}

      <section className="pre-footer" id="contact" aria-label="Company information">

        <div className="pre-footer-about">
          <h2>Software development</h2>
          <p>
            We design and build tailored web applications, mobile apps,
            and business systems that help teams work smarter and grow.
          </p>
        </div>

        <div className="pre-footer-links">
          <h2>Explore</h2>
          <a href="/#services">Services</a>
          <a href="/#solutions">Solutions</a>
          <a href="/about">About us</a>
          <a href="/blogs">Blogs</a>
        </div>

        <div className="pre-footer-contact">
          <h2>Get in touch</h2>
          <p>
            Have a project in mind? We&apos;d be glad to hear from you.
          </p>

          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href="tel:+233595856187">+233 59 585 6187</a>

          <a
            href="https://wa.me/233595856187"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div className="pre-footer-location">
          <h2>Find us</h2>
          <p>Accra, Weija</p>

          <h2>Business hours</h2>
          <p>Monday–Friday</p>

          <h2>Follow us</h2>

          <div className="social-icons" aria-label="Social media">

            <a href="#" aria-label="YouTube" title="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
              </svg>
            </a>

            <a href="#" aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z"/>
              </svg>
            </a>

            <a href="#" aria-label="X" title="X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.5l7.3-8.4L1.9 2h6.5l4.5 6.7L18.9 2Zm-1.1 17.9h1.7L7.4 4H5.6l12.2 15.9Z"/>
              </svg>
            </a>

            <a href="#" aria-label="TikTok" title="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.6 6.3a5.8 5.8 0 0 1-3.5-1.2 5.8 5.8 0 0 1-1.8-3.5h-3.7v14.1a3.1 3.1 0 1 1-3.1-3.1c.5 0 .9.1 1.3.3V9.1a7 7 0 1 0 5.5 6.8V8.7a9.4 9.4 0 0 0 5.3 1.7V6.7c0-.1 0-.3 0-.4Z"/>
              </svg>
            </a>

          </div>
        </div>

      </section>

      {/* Copyright */}
      <footer id="about">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>

    </>
  );
}
