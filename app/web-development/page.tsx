
"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./web-development.css";

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

const SERVICES = [
  {
    number: "01",
    icon: "✳",
    title: "Business Website Design",
    description:
      "Distinctive business websites with carefully composed layouts, professional visuals and clear messaging that introduce your brand with confidence.",
  },
  {
    number: "02",
    icon: "◈",
    title: "E-commerce Website Design",
    description:
      "Beautiful online storefronts with engaging product presentation, intuitive shopping journeys and thoughtfully designed customer experiences.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Landing Page Design",
    description:
      "Purposeful landing pages with strong visual hierarchy, compelling content sections and clear calls to action.",
  },
  {
    number: "04",
    icon: "▧",
    title: "Website Redesign",
    description:
      "Transform an outdated website into a modern digital experience with refreshed layouts, improved presentation and a more cohesive identity.",
  },
  {
    number: "05",
    icon: "▣",
    title: "Responsive Website Design",
    description:
      "Carefully adapted layouts that deliver a consistent, polished experience across smartphones, tablets, laptops and desktop screens.",
  },
  {
    number: "06",
    icon: "◎",
    title: "UI & UX Website Design",
    description:
      "User-focused interface design that makes your website easier to understand, navigate and interact with.",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your brand, audience, objectives and the impression you want your website to create.",
  },
  {
    number: "02",
    title: "Art Direction",
    description:
      "We establish the visual direction, page structure, typography, colour palette and overall design language.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the experience with intentional layouts, engaging imagery, thoughtful details and responsive compositions.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We review the design, improve the details and prepare the finished website experience for implementation.",
  },
];

export default function DevelopmentPage() {
  const [menu, setMenu] = useState(false);
  const [devMenu, setDevMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="main-nav" aria-label="Main navigation">
          <a className="brand" href="/" aria-label="Zion Technologies home">
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

            <a href="/#solutions" onClick={() => setMenu(false)}>
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

          <div className="nav-actions">
            <a href={`mailto:${EMAIL}`}>Contact</a>
            <a className="nav-cta nav-cta--accent" href="/#contact">
              Get a quote
            </a>
          </div>

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

      <main>
        <div className={`${display.variable} ${body.variable} wd`}>
          {/* HERO */}
          <section className="wd-hero">
            <div className="wd-wrap wd-hero-grid">
              <div className="wd-hero-content">
                <span className="wd-hero-kicker">
                  <span></span>
                  Zion Technologies · Website Design Studio
                </span>

                <h1>
                  Digital
                  <span>Experiences</span>
                  <em>With Character.</em>
                </h1>

                <p className="wd-hero-description">
                  Your website should be more than a place people visit.
                  It should express your identity, capture attention and
                  make your brand unforgettable. We create distinctive
                  website designs that bring ideas to life.
                </p>

                {/* <div className="wd-actions">
                  <a href="/#contact" className="wd-btn wd-btn-primary">
                    Let's Create Together <span>↗</span>
                  </a>

                  <a href="#design-gallery" className="wd-btn wd-btn-outline">
                    Explore Design <span>↓</span>
                  </a>
                </div> */}

                <div className="wd-hero-meta">
                  <span><i></i> Brand-led creativity</span>
                  <span><i></i> Thoughtful experiences</span>
                  <span><i></i> Responsive layouts</span>
                </div>
              </div>

              <div className="wd-hero-visual">
                <div className="wd-hero-main-image">
                  <Image
                    src="/Web Development.png"
                    alt="Creative website design concept displayed on a digital screen"
                    width={1100}
                    height={950}
                    priority
                  />
                </div>

                <div className="wd-hero-mini-image">
                  <Image
                    src="/Excited Man Using Laptop (1).png"
                    alt="Person exploring a digital experience on a laptop"
                    width={650}
                    height={500}
                    priority
                  />
                </div>

                <div className="wd-hero-label">
                  <span className="wd-hero-label-mark">✳</span>
                  <div>
                    <strong>Creative Direction</strong>
                    <small>Made around your identity</small>
                  </div>
                </div>

                <div className="wd-hero-bubble">
                  IDEAS
                  <br />
                  INTO
                  <br />
                  DESIGN
                </div>

                <span className="wd-hero-caption">
                  Designed to make an impression
                </span>
              </div>
            </div>
          </section>

          {/* MOVING DESIGN STRIP */}
          <section className="wd-marquee" aria-label="Design specialties">
            <div className="wd-marquee-track">
              {[0, 1].map((item) => (
                <span key={item}>
                  Website Design <b>✳</b>
                  Creative Direction <b>✳</b>
                  Digital Experiences <b>✳</b>
                  UI & UX Design <b>✳</b>
                  Visual Storytelling <b>✳</b>
                  Responsive Design <b>✳</b>
                </span>
              ))}
            </div>
          </section>

          {/* INTRODUCTION */}
          <section className="wd-intro">
            <div className="wd-wrap wd-intro-layout">
              <div className="wd-intro-side">
                <strong>01.</strong>
                <span>
                  A fresh perspective on how your brand appears online.
                </span>
              </div>

              <div className="wd-intro-main">
                <span className="wd-eyebrow">A Different Kind of Website</span>

                <h2>
                  Your brand deserves a digital presence that feels
                  <span> unmistakably yours.</span>
                </h2>

                <p>
                  Every brand has a story. The right website design gives
                  that story a visual identity, a clear structure and a
                  memorable place to live. At Zion Technologies, we combine
                  creative thinking, purposeful layouts and user-centred
                  design to create digital experiences that feel considered
                  from the first impression to the final detail.
                </p>
              </div>
            </div>
          </section>

          {/* DESIGN SERVICES */}
          <section className="wd-services" id="website-services">
            <div className="wd-wrap">
              <div className="wd-services-heading">
                <div className="wd-section-heading">
                  <span className="wd-eyebrow">What We Create</span>

                  <h2>
                    One vision. Endless ways to make it visible.
                  </h2>

                  <p>
                    From a bold business presence to an elegant online
                    storefront, we design websites around the character
                    and needs of your brand.
                  </p>
                </div>

                <p className="wd-services-note">
                  Thoughtful design begins with understanding what makes
                  your business different.
                </p>
              </div>

              <div className="wd-service-grid">
                {SERVICES.map((service) => (
                  <a
                    className="wd-service-card"
                    href="/#contact"
                    key={service.number}
                  >
                    <div className="wd-service-card-top">
                      <span className="wd-service-number">
                        / {service.number}
                      </span>

                      <span className="wd-service-icon" aria-hidden="true">
                        {service.icon}
                      </span>
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <span className="wd-service-link">
                      Explore this service <span>↗</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* DESIGN PHILOSOPHY */}
          <section className="wd-philosophy">
            <div className="wd-wrap wd-philosophy-grid">
              <div className="wd-philosophy-visual">
                <div className="wd-philosophy-image-main">
                  <Image
                    src="/custom software2.jpg"
                    alt="Creative digital interface and website design inspiration"
                    width={1000}
                    height={1200}
                  />
                </div>

                <div className="wd-philosophy-image-small">
                  <Image
                    src="/Smiling Man Exploring Floating Analytics Dashboards.png"
                    alt="Digital interface displayed as a modern visual experience"
                    width={700}
                    height={550}
                  />
                </div>

                <div className="wd-philosophy-sticker">
                  DESIGN
                  <br />
                  WITH
                  <br />
                  INTENTION
                </div>
              </div>

              <div className="wd-philosophy-content">
                <span className="wd-eyebrow">The Thinking Behind the Design</span>

                <h2>
                  Not just beautiful.
                  <br />
                  <span>Beautifully considered.</span>
                </h2>

                <p>
                  Great website design is a balance between expression
                  and usability. The colours should feel right. The
                  typography should communicate clearly. The layout should
                  guide visitors naturally. Every visual decision should
                  have a reason behind it.
                </p>

                <div className="wd-philosophy-list">
                  <div className="wd-philosophy-point">
                    <span className="wd-philosophy-check">✓</span>
                    <div>
                      <strong>A recognisable visual identity</strong>
                      <p>
                        A consistent combination of colour, typography,
                        imagery and design elements.
                      </p>
                    </div>
                  </div>

                  <div className="wd-philosophy-point">
                    <span className="wd-philosophy-check">✓</span>
                    <div>
                      <strong>Layouts with purpose</strong>
                      <p>
                        Clear visual hierarchy that helps visitors
                        understand your content and move through your site.
                      </p>
                    </div>
                  </div>

                  <div className="wd-philosophy-point">
                    <span className="wd-philosophy-check">✓</span>
                    <div>
                      <strong>Designed for every screen</strong>
                      <p>
                        Responsive compositions that preserve the quality
                        of the experience on different devices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DESIGN PROCESS */}
          <section className="wd-process">
            <div className="wd-wrap">
              <div className="wd-section-heading">
                <span className="wd-eyebrow">How We Bring Ideas to Life</span>

                <h2>
                  From a blank canvas to a complete visual experience.
                </h2>

                <p>
                  A considered creative process helps turn your ideas into
                  a website design with clarity, consistency and character.
                </p>
              </div>

              <div className="wd-process-grid">
                {PROCESS.map((step) => (
                  <article className="wd-process-card" key={step.number}>
                    <span>STEP {step.number}</span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CINEMATIC VIDEO SHOWCASE */}
          <section className="wd-video">
            <div className="wd-wrap">
              <div className="wd-video-heading">
                <div>
                  <span className="wd-eyebrow">Design in Motion</span>

                  <h2>
                    See how a digital idea becomes an experience.
                  </h2>
                </div>

                <p>
                  A closer look at the visual world of digital design:
                  composition, interfaces, presentation and the details
                  that make a website feel complete.
                </p>
              </div>

              <div className="wd-video-container">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label="Website design visual showcase"
                >
                  <source src="/web-development.mp4" type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              </div>

              <div className="wd-video-bottom">
                <span>Zion Technologies / Creative Website Design</span>
                <span>Visual ideas. Digital experiences.</span>
              </div>
            </div>
          </section>

          {/* WEBSITE DESIGN GALLERY */}
          <section className="wd-gallery" id="design-gallery">
            <div className="wd-wrap">
              <div className="wd-section-heading">
                <span className="wd-eyebrow">The Visual Playground</span>

                <h2>
                  Different ideas deserve different design expressions.
                </h2>

                <p>
                  Every business has its own personality. Explore a few
                  visual directions that can inspire the design of a
                  distinctive online presence.
                </p>
              </div>

              <div className="wd-gallery-grid">
                <div className="wd-gallery-item">
                  <Image
                    src="/Web Development.png"
                    alt="Business website design visual concept"
                    width={1100}
                    height={1000}
                  />

                  <div className="wd-gallery-caption">
                    <small>01 / Brand Presence</small>
                    <strong>Business Website Experiences</strong>
                  </div>
                </div>

                <div className="wd-gallery-item">
                  <Image
                    src="/Smiling Man Exploring Floating Analytics Dashboards.png"
                    alt="Digital commerce and interface design concept"
                    width={850}
                    height={650}
                  />

                  <div className="wd-gallery-caption">
                    <small>02 / Digital Commerce</small>
                    <strong>Online Store Experiences</strong>
                  </div>
                </div>

                <div className="wd-gallery-item">
                  <Image
                    src="/Excited Man Using Laptop (1).png"
                    alt="Modern website experience being explored on a laptop"
                    width={850}
                    height={650}
                  />

                  <div className="wd-gallery-caption">
                    <small>03 / Modern Interfaces</small>
                    <strong>Digital Experiences That Connect</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DESIGN STATEMENT */}
          <section className="wd-statement">
            <div className="wd-wrap wd-statement-inner">
              <span className="wd-statement-label">
                The Zion Design Perspective
              </span>

              <h2>
                Don't just show up online.
                <span> Show the world who you are.</span>
              </h2>
            </div>
          </section>

          {/* CALL TO ACTION */}
          <section className="wd-cta">
            <div className="wd-wrap wd-cta-inner">
              <div>
                <span className="wd-eyebrow">
                  Your Idea Deserves Great Design
                </span>

                <h2>
                  Let's create something remarkable for your brand.
                </h2>

                <p>
                  Tell us about your business, your ideas and the digital
                  experience you want to create. Let's give your brand a
                  website that feels distinctive and thoughtfully designed.
                </p>
              </div>

              <a href="/#contact" className="wd-btn wd-btn-light">
                Start Your Design Project <span>↗</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <section
        className="wd-pre-footer"
        id="contact"
        aria-label="Company information"
      >
        <div className="wd-pre-footer-wrap">
          <div className="wd-pre-footer-about">
            <h2>Creative Website Design</h2>

            <p>
              Zion Technologies creates distinctive, responsive and
              user-focused website designs that help businesses present
              their brands, communicate their ideas and build a memorable
              online presence.
            </p>
          </div>

          <div className="wd-pre-footer-links">
            <h2>Explore</h2>
            <a href="/#services">Services</a>
            <a href="/#solutions">Solutions</a>
            <a href="/about">About us</a>
            <a href="/blogs">Blogs</a>
          </div>

          <div className="wd-pre-footer-contact">
            <h2>Get in touch</h2>

            <p>
              Have a website design project in mind? Let's discuss
              your ideas.
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

          <div className="wd-pre-footer-location">
            <h2>Find us</h2>
            <p>Accra, Weija</p>

            <h2>Business hours</h2>
            <p>Monday–Friday</p>
          </div>
        </div>
      </section>

      <footer className="wd-footer">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>
    </>
  );
}
