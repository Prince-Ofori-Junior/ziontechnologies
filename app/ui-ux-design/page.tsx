"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./ui-ux-design.css";

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
    icon: "⌘",
    title: "User Interface Design",
    description:
      "Modern, visually consistent interfaces for websites, mobile applications and digital products.",
    tags: ["Visual design", "Layouts", "Components"],
  },
  {
    number: "02",
    icon: "◎",
    title: "User Experience Design",
    description:
      "Clear user journeys and intuitive interactions that help people complete tasks with less friction.",
    tags: ["User journeys", "Usability", "Navigation"],
  },
  {
    number: "03",
    icon: "▤",
    title: "Wireframing & Prototyping",
    description:
      "Early layouts and interactive prototypes to explore and validate product ideas before development.",
    tags: ["Wireframes", "Prototypes", "User flows"],
  },
  {
    number: "04",
    icon: "✳",
    title: "Design Systems",
    description:
      "Reusable components, styles and guidelines that keep your digital product consistent as it grows.",
    tags: ["Components", "Typography", "Guidelines"],
  },
  {
    number: "05",
    icon: "◉",
    title: "Responsive Interface Design",
    description:
      "Interfaces that adapt naturally to desktop, tablet and mobile screens without sacrificing usability.",
    tags: ["Mobile-first", "Responsive", "Accessibility"],
  },
  {
    number: "06",
    icon: "↗",
    title: "UX Audits & Improvements",
    description:
      "Reviews of existing interfaces to identify usability issues and recommend practical improvements.",
    tags: ["UX review", "Usability", "Optimisation"],
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your product, audience, business goals and the problems your users need to solve.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We organise content, define user journeys and create wireframes for a clear product structure.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We develop the visual direction, interface components and interactive prototype.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We review the experience, improve usability and prepare the design for development handoff.",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Clarity before complexity",
    description:
      "Every screen should communicate its purpose and make the next action easy to understand.",
  },
  {
    number: "02",
    title: "Designed around people",
    description:
      "Design decisions should reflect real user needs, behaviour and expectations.",
  },
  {
    number: "03",
    title: "Consistency across screens",
    description:
      "Reusable patterns and components create a familiar experience throughout a product.",
  },
  {
    number: "04",
    title: "Accessible by design",
    description:
      "Readable typography, clear contrast and thoughtful interactions help more people use your product.",
  },
];

export default function UiUxDesignPage() {
  const [menu, setMenu] = useState(false);
  const [devMenu, setDevMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
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
                onClick={(event) => {
                  event.preventDefault();
                  setDevMenu((current) => !current);
                }}
                aria-expanded={devMenu}
              >
                Services
              </a>

              <div className="nav-dropdown-menu" aria-label="Services sub-tabs">
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
              setMenu((current) => !current);
              setDevMenu(false);
            }}
          >
            <svg
              className={`hamburger ${menu ? "active" : ""}`}
              viewBox="0 0 24 24"
              strokeWidth={2}
              fill="none"
              aria-hidden="true"
            >
              <path className="first" d="M3.75 6.5h14" />
              <path className="middle" d="M3.75 12.5h20" />
              <path className="last" d="M3.75 18.5h14" />
            </svg>
          </button>
        </nav>
      </header>

      {/* The .ux wrapper now contains the page and footer so its
          typography and CSS variables apply consistently. */}
      <div className={`ux ${display.variable} ${body.variable}`}>
        <main>
          {/* HERO */}
          <section className="ux-hero">
            <div className="ux-wrap ux-hero-grid">
              <div className="ux-hero-content">
                <span className="ux-kicker">
                  ZION TECHNOLOGIES / UI & UX DESIGN
                </span>

                <h1>
                  Design that makes
                  <span> digital feel effortless.</span>
                </h1>

                <p className="ux-lead">
                  We create intuitive digital experiences and thoughtful
                  interfaces that make websites, mobile applications and
                  software easier and more enjoyable to use.
                </p>

                <div className="ux-actions">
                  <a href="/#contact" className="ux-btn">
                    Start a Design Project <span>→</span>
                  </a>

                  <a href="#ux-services" className="ux-text-link">
                    Explore our services <span>↘</span>
                  </a>
                </div>

                <div className="ux-hero-meta">
                  <span>UX Strategy</span>
                  <i />
                  <span>Interface Design</span>
                  <i />
                  <span>Prototyping</span>
                </div>
              </div>

              <div className="ux-hero-visual">
                <div className="ux-visual-orbit ux-orbit-one" />
                <div className="ux-visual-orbit ux-orbit-two" />

                <div className="ux-design-window">
                  <div className="ux-window-top">
                    <div className="ux-window-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span>Product interface concept</span>
                    <span className="ux-window-menu">•••</span>
                  </div>

                  <div className="ux-window-body">
                    <aside className="ux-mock-sidebar">
                      <div className="ux-mock-logo">Z.</div>
                      <span className="selected">▦</span>
                      <span>◷</span>
                      <span>▤</span>
                      <span>⚙</span>
                    </aside>

                    <div className="ux-mock-content">
                      <div className="ux-mock-heading">
                        <div>
                          <small>OVERVIEW</small>
                          <strong>Your workspace</strong>
                        </div>
                        <div className="ux-mock-avatar">P</div>
                      </div>

                      <div className="ux-mock-welcome">
                        <div>
                          <small>MONDAY, 10:30 AM</small>
                          <h3>Good design starts here.</h3>
                          <p>A clear view of your digital workspace.</p>
                        </div>
                        <span className="ux-mock-spark">✳</span>
                      </div>

                      <div className="ux-mock-stats">
                        <div>
                          <small>Projects</small>
                          <strong>37</strong>
                          <span>Active work</span>
                        </div>
                        <div>
                          <small>Progress</small>
                          <strong>84%</strong>
                          <span>Design complete</span>
                        </div>
                      </div>

                      <div className="ux-mock-bottom">
                        <div className="ux-mock-chart">
                          <div className="ux-mock-line" />
                          <div className="ux-mock-chart-label">
                            <span>Activity overview</span>
                            <span>This week</span>
                          </div>
                        </div>

                        <div className="ux-mock-task">
                          <span className="ux-task-check">✓</span>
                          <div>
                            <strong>Design review</strong>
                            <small>Ready for feedback</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ux-floating-note ux-note-top">
                  <span>✳</span>
                  Thoughtful design
                </div>

                <div className="ux-floating-note ux-note-bottom">
                  <span>✓</span>
                  Made for people
                </div>

                <div className="ux-visual-caption">
                  <span>01 — DIGITAL PRODUCT DESIGN</span>
                  <span>INTUITIVE BY DESIGN</span>
                </div>
              </div>
            </div>
          </section>

          {/* INTRODUCTION */}
          <section className="ux-intro">
            <div className="ux-wrap ux-intro-grid">
              <span className="ux-section-index">01 / THE EXPERIENCE</span>

              <div>
                <h2>
                  Good design is not just how a product looks. It is how it
                  <span> works, feels and connects.</span>
                </h2>

                <p>
                  We bring structure, usability and visual design together
                  to create digital products that are easy to understand
                  and enjoyable to use. Every design decision has a purpose:
                  helping your users move naturally from one action to the next.
                </p>
              </div>
            </div>
          </section>

          {/* INTERFACE SHOWCASE */}
          <section className="ux-showcase">
            <div className="ux-wrap">
              <div className="ux-section-heading">
                <div>
                  <span className="ux-kicker">DESIGN IN PRACTICE</span>
                  <h2>Different screens. One seamless experience.</h2>
                </div>
                <p>
                  We design connected digital experiences that feel clear,
                  consistent and natural across devices.
                </p>
              </div>

              <div className="ux-showcase-grid">
                <article className="ux-showcase-card ux-showcase-dashboard">
                  <div className="ux-showcase-copy">
                    <span>01 / WEB INTERFACE</span>
                    <h3>Business dashboards</h3>
                    <p>
                      Organised information, clear data visualisation and
                      practical navigation.
                    </p>
                  </div>

                  <div className="ux-dashboard-preview">
                    <div className="ux-preview-top">
                      <span className="ux-preview-brand">workspace.</span>
                      <span className="ux-preview-avatar">JD</span>
                    </div>
                    <div className="ux-preview-dashboard-body">
                      <div className="ux-preview-side">
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="ux-preview-main">
                        <div className="ux-preview-title">
                          <span />
                          <i />
                        </div>
                        <div className="ux-preview-metrics">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="ux-preview-chart">
                          <div />
                          <div />
                          <div />
                          <div />
                          <div />
                          <div />
                          <div />
                        </div>
                        <div className="ux-preview-table">
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="ux-showcase-card ux-showcase-mobile">
                  <div className="ux-showcase-copy">
                    <span>02 / MOBILE EXPERIENCE</span>
                    <h3>Mobile app interfaces</h3>
                    <p>
                      Simple navigation and focused interactions designed
                      for smaller screens.
                    </p>
                  </div>

                  <div className="ux-phone-stage">
                    <div className="ux-phone">
                      <div className="ux-phone-speaker" />
                      <div className="ux-phone-screen">
                        <div className="ux-phone-status">
                          <span>9:41</span>
                          <span>● ● ▰</span>
                        </div>
                        <div className="ux-phone-greeting">
                          <small>YOUR SPACE</small>
                          <strong>Make room for what matters.</strong>
                        </div>
                        <div className="ux-phone-feature">
                          <span>✳</span>
                          <div>
                            <i />
                            <i />
                          </div>
                        </div>
                        <div className="ux-phone-section">
                          <i />
                          <span />
                        </div>
                        <div className="ux-phone-list">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="ux-phone-nav">
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                    </div>
                    <span className="ux-phone-orbit" />
                  </div>
                </article>

                <article className="ux-showcase-card ux-showcase-commerce">
                  <div className="ux-showcase-copy">
                    <span>03 / E-COMMERCE DESIGN</span>
                    <h3>Shopping experiences</h3>
                    <p>
                      Product discovery, clean layouts and friction-free
                      shopping journeys.
                    </p>
                  </div>

                  <div className="ux-commerce-preview">
                    <div className="ux-commerce-nav">
                      <strong>form & function</strong>
                      <span>SHOP&nbsp;&nbsp; ABOUT&nbsp;&nbsp; BAG (0)</span>
                    </div>
                    <div className="ux-commerce-content">
                      <div className="ux-commerce-copy">
                        <small>THE EVERYDAY COLLECTION</small>
                        <strong>Designed for your daily rhythm.</strong>
                        <span>Explore the collection ↗</span>
                      </div>
                      <div className="ux-commerce-product">
                        <div className="ux-product-shape">
                          <span />
                        </div>
                        <small>EVERYDAY OBJECT / 001</small>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              <p className="ux-showcase-note">
                Illustrative interface concepts created to demonstrate our
                design direction.
              </p>
            </div>
          </section>

          {/* SERVICES */}
          <section className="ux-services" id="ux-services">
            <div className="ux-wrap">
              <div className="ux-section-heading">
                <div>
                  <span className="ux-kicker">WHAT WE DESIGN</span>
                  <h2>Design services for better digital products.</h2>
                </div>

                <p>
                  From early product ideas to polished interfaces, we help
                  shape every part of your users&apos; digital experience.
                </p>
              </div>

              <div className="ux-service-grid">
                {SERVICES.map((service) => (
                  <article className="ux-service-card" key={service.number}>
                    <div className="ux-service-top">
                      <span className="ux-service-icon">{service.icon}</span>
                      <span className="ux-service-number">
                        {service.number}
                      </span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <div className="ux-tags">
                      {service.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

         {/* CREATIVE DESIGN GALLERY */}
<section className="ux-process">
  <div className="ux-wrap">
    <div className="ux-section-heading ux-process-heading">
      <div>
        <span className="ux-kicker">THE ART OF DIGITAL DESIGN</span>
        <h2>Ideas transformed into digital experiences.</h2>
      </div>

      <p>
        We bring creativity, usability and visual consistency together
        to create digital experiences that feel natural to use.
      </p>
    </div>

    <div className="ux-gallery">
      <article className="ux-gallery-item ux-gallery-featured">
        <img
          src="/images/ux-gallery-01.jpg"
          alt="Creative website interface design displayed on a desktop screen"
          loading="lazy"
        />
        <div className="ux-gallery-overlay">
          <span>01 / DIGITAL EXPERIENCES</span>
          <h3>Interfaces that make an impression.</h3>
        </div>
      </article>

      <article className="ux-gallery-item ux-gallery-tall">
        <img
          src="/images/ux-gallery-02.jpg"
          alt="Modern mobile application interface design"
          loading="lazy"
        />
        <div className="ux-gallery-overlay">
          <span>02 / MOBILE DESIGN</span>
          <h3>Designed for life on the move.</h3>
        </div>
      </article>

      <article className="ux-gallery-item">
        <img
          src="/images/ux-gallery-03.jpg"
          alt="Creative user experience wireframes and design process"
          loading="lazy"
        />
        <div className="ux-gallery-overlay">
          <span>03 / USER EXPERIENCE</span>
          <h3>Every detail has a purpose.</h3>
        </div>
      </article>

      <article className="ux-gallery-item">
        <img
          src="/images/ux-gallery-04.jpg"
          alt="Modern e-commerce website and product interface design"
          loading="lazy"
        />
        <div className="ux-gallery-overlay">
          <span>04 / WEB DESIGN</span>
          <h3>Beautifully simple interactions.</h3>
        </div>
      </article>
    </div>

    <div className="ux-gallery-footer">
      <span>CREATIVITY MEETS FUNCTIONALITY</span>
      <p>
        Great design is more than appearance. It is how effortlessly
        people interact with your product.
      </p>
    </div>
  </div>
</section>

          {/* DESIGN PRINCIPLES */}
          <section className="ux-principles">
            <div className="ux-wrap ux-principles-grid">
              <div className="ux-principles-intro">
                <span className="ux-kicker">OUR DESIGN APPROACH</span>
                <h2>
                  Every detail should make the experience
                  <span> better.</span>
                </h2>
                <p>
                  We focus on the fundamentals that make digital products
                  understandable, consistent and accessible.
                </p>

                <a href="/#contact" className="ux-btn ux-btn-dark">
                  Work with our design team <span>→</span>
                </a>
              </div>

              <div className="ux-principle-list">
                {PRINCIPLES.map((principle) => (
                  <article
                    className="ux-principle-item"
                    key={principle.number}
                  >
                    <span>{principle.number}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.description}</p>
                    </div>
                    <span className="ux-principle-arrow">↗</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <section
          className="ux-pre-footer"
          id="contact"
          aria-label="Company information"
        >
          <div className="ux-pre-footer-wrap">
            <div className="ux-pre-footer-about">
              <h2>UI/UX Design</h2>
              <p>
                Zion Technologies creates user-focused interfaces and digital
                experiences for websites, mobile applications and software
                products.
              </p>
            </div>

            <div className="ux-pre-footer-links">
              <h2>Explore</h2>
              <a href="/#services">Services</a>
              <a href="/#solutions">Solutions</a>
              <a href="/about">About us</a>
              <a href="/blogs">Blogs</a>
            </div>

            <div className="ux-pre-footer-contact">
              <h2>Get in touch</h2>
              <p>Let&apos;s discuss your next digital product design.</p>
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

            <div className="ux-pre-footer-location">
              <h2>Find us</h2>
              <p>Accra, Weija</p>

              <h2>Business hours</h2>
              <p>Monday–Friday</p>

              <h2>Follow us</h2>
              <div className="ux-social-icons" aria-label="Social media">
                <a href="#" aria-label="YouTube" title="YouTube">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                  </svg>
                </a>

                <a href="#" aria-label="Facebook" title="Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z" />
                  </svg>
                </a>

                <a href="#" aria-label="X" title="X">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.5l7.3-8.4L1.9 2h6.5l4.5 6.7L18.9 2Zm-1.1 17.9h1.7L7.4 4H5.6l12.2 15.9Z" />
                  </svg>
                </a>

                <a href="#" aria-label="TikTok" title="TikTok">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.6 6.3a5.8 5.8 0 0 1-3.5-1.2 5.8 5.8 0 0 1-1.8-3.5h-3.7v14.1a3.1 3.1 0 1 1-3.1-3.1c.5 0 .9.1 1.3.3V9.1a7 7 0 1 0 5.5 6.8V8.7a9.4 9.4 0 0 0 5.3 1.7V6.7c0-.1 0-.3 0-.4Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="ux-footer">
          <p>© 2026 Zion Technologies. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}