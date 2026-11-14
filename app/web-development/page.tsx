
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

const EMAIL = "hello@ziontechnologies.com";

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
      "A polished website that tells your story, builds trust and helps the right customers take action.",
  },
  {
    number: "02",
    icon: "◈",
    title: "E-commerce Website Design",
    description:
      "A considered storefront that presents products clearly and makes browsing and buying feel effortless.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Landing Page Design",
    description:
      "Focused landing pages with persuasive content, strong visual hierarchy and a clear next step.",
  },
  {
    number: "04",
    icon: "▧",
    title: "Website Redesign",
    description:
      "Refresh your layout, content and visual identity to make your website feel current and easier to use.",
  },
  {
    number: "05",
    icon: "▣",
    title: "Responsive Website Design",
    description:
      "Responsive layouts that feel natural and readable on phones, tablets, laptops and large screens.",
  },
  {
    number: "06",
    icon: "◎",
    title: "UI & UX Website Design",
    description:
      "Intuitive page structures and interfaces that help visitors find information and complete tasks.",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We align on your goals, audience, priorities and what success should look like.",
  },
  {
    number: "02",
    title: "Art Direction",
    description:
      "We define the visual direction, page structure, typography and colour palette for your brand.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create page layouts and responsive designs that make your content clear and engaging.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We review the details with you, make refinements and prepare the design for implementation.",
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
            <a href="/contact">Contact</a>
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
                  Distinctive websites that express your brand, engage visitors
                  and help your business grow, designed with clarity and
                  personality for every screen.
                </p>

                <div className="wd-actions">
                  <a href="/contact" className="wd-btn wd-btn-primary">
                    Start a Website Project
                  </a>
                </div>

              </div>

              <div className="wd-hero-visual">
                <div className="wd-hero-main-image">
                  <Image
                    src="/peteralison-web-development-10407063_1920.png"
                    alt="Web developer working on a website"
                    width={1100}
                    height={950}
                    priority
                  />
                </div>

                <div className="wd-hero-mini-image">
                  <Image
                    src="/web-development-8554218_1280.jpg"
                    alt="Web development project displayed on a screen"
                    width={650}
                    height={500}
                    priority
                  />
                </div>

              </div>
            </div>
          </section>

          {/* MOVING DESIGN STRIP */}
          <section className="wd-marquee" aria-label="Design specialties">
            <div className="wd-marquee-track">
              {[0, 1].map((item) => (
                <span key={item}>
                  Website Design <b></b>
                  Creative Direction <b></b>
                  Digital Experiences <b></b>
                  UI & UX Design <b></b>
                  Visual Storytelling <b></b>
                  Responsive Design <b></b>
                </span>
              ))}
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
                    href="/contact"
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
                    src="/geralt-ai-10171006_1920.jpg"
                    alt="Artificial intelligence concept for digital design"
                    width={1000}
                    height={1200}
                  />
                </div>

                <div className="wd-philosophy-image-small">
                  <Image
                    src="/geralt-seo-3007488_1920.jpg"
                    alt="Search engine optimization concept"
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
                    src="/businesswomen-seal-report-achievement.jpg"
                    alt="Businesswomen celebrating a successful report"
                    width={1100}
                    height={1000}
                  />

                </div>

                <div className="wd-gallery-item">
                  <Image
                    src="/financial-advisor-works-revenue-balance-with-annual-statistics.jpg"
                    alt="Financial advisor reviewing revenue and annual statistics"
                    width={850}
                    height={650}
                  />

                </div>

                <div className="wd-gallery-item">
                  <Image
                    src="/flutie8211-man-10379289.jpg"
                    alt="Man working with digital technology"
                    width={850}
                    height={650}
                  />

                </div>
              </div>
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

              <a href="/contact" className="wd-btn wd-btn-light">
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
