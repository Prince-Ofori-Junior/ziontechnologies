
"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./desktop-application.css";

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

const solutions = [
  {
    number: "01",
    icon: "▦",
    title: "Business Management",
    description:
      "Manage business operations, records and everyday activities from one central application.",
  },
  {
    number: "02",
    icon: "▤",
    title: "Inventory Management",
    description:
      "Monitor stock levels, organise products and keep accurate inventory records.",
  },
  {
    number: "03",
    icon: "▣",
    title: "Point of Sale Systems",
    description:
      "Handle sales, receipts, product information and transaction records efficiently.",
  },
  {
    number: "04",
    icon: "▥",
    title: "Database Applications",
    description:
      "Store, organise and retrieve important information through structured desktop systems.",
  },
  {
    number: "05",
    icon: "⌘",
    title: "Custom Desktop Software",
    description:
      "Get purpose-built applications for specialised tasks and unique business workflows.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Offline Access",
    description: "Use essential application features without constant internet access.",
  },
  {
    number: "02",
    title: "Database Integration",
    description: "Store and manage business information using structured databases.",
  },
  {
    number: "03",
    title: "Secure Access",
    description: "Use appropriate authentication and access controls to protect information.",
  },
  {
    number: "04",
    title: "System Integration",
    description: "Connect with relevant files, devices and desktop operating system features.",
  },
  {
    number: "05",
    title: "Data Synchronisation",
    description: "Synchronise local information with remote services when required.",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description: "Receive maintenance, improvements and software updates.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your requirements, users and business processes.",
  },
  {
    number: "02",
    title: "Design",
    description: "We plan the interface, features and application structure.",
  },
  {
    number: "03",
    title: "Develop",
    description: "We build and test the application for its intended environment.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "We prepare your software for installation and ongoing use.",
  },
];

export default function DesktopApplicationPage() {
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
                onClick={(e) => {
                  e.preventDefault();
                  setDevMenu(!devMenu);
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
        <div className={`da ${display.variable} ${body.variable}`}>

          {/* HERO */}
          <section className="da-hero">
            <div className="da-wrap da-hero-grid">
              <div className="da-hero-copy">
                <span className="da-kicker">
                  Desktop Application Development
                </span>

                <h1>
                  Powerful software.
                  <span> Built for your desktop.</span>
                </h1>

                <p className="da-lead">
                  We develop custom desktop applications that simplify
                  operations, manage business information and improve
                  productivity. Designed for Windows, macOS and Linux.
                </p>

                <div className="da-actions">
                  <a href="#da-contact" className="da-btn">
                    Discuss your project <span>↗</span>
                  </a>

                  <a href="#da-solutions" className="da-btn-outline">
                    Explore solutions <span>↓</span>
                  </a>
                </div>

                <div className="da-hero-note">
                  <span className="da-note-dot"></span>
                  <span>Custom-built applications for real business needs.</span>
                </div>
              </div>

              <div className="da-hero-visual">
                <div className="da-hero-image">
                  <Image
                    src="/Desktop Application0.jpg"
                    alt="Desktop application interface"
                    fill
                    priority
                    sizes="(max-width: 700px) 100vw, 55vw"
                  />
                </div>

                <div className="da-floating-card">
                  <span className="da-floating-icon">▦</span>
                  <div>
                    <strong>Designed around your workflow</strong>
                    <small>Custom desktop software</small>
                  </div>
                </div>

                <div className="da-visual-index">DESKTOP SOFTWARE</div>
              </div>
            </div>
          </section>

          {/* SOLUTIONS */}
          <section className="da-solutions" id="da-solutions">
            <div className="da-wrap">
              <div className="da-section-heading">
                <div>
                  <span className="da-kicker">What we develop</span>
                  <h2>
                    Desktop solutions for
                    <span> your business.</span>
                  </h2>
                </div>

                <p>
                  Practical applications designed around your operations,
                  requirements and the way your team works.
                </p>
              </div>

              <div className="da-solutions-grid">
                {solutions.map((item) => (
                  <article className="da-solution-card" key={item.number}>
                    <div className="da-solution-top">
                      <span className="da-solution-number">{item.number}</span>
                      <span className="da-solution-icon">{item.icon}</span>
                    </div>

                    <div className="da-solution-bottom">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <a href="#da-contact" aria-label={`Discuss ${item.title}`}>
                        Discuss your needs <span>↗</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CAPABILITIES */}
          <section className="da-capabilities">
            <div className="da-wrap">
              <div className="da-capabilities-heading">
                <span className="da-kicker">Built for performance</span>
                <h2>
                  Essential features.
                  <span> Reliable applications.</span>
                </h2>
                <p>
                  We focus on the functionality, security and usability
                  your desktop software needs.
                </p>
              </div>

              <div className="da-capabilities-layout">
                <div className="da-capabilities-visual">
                  <Image
                    src="/Desktop Application1.jpg"
                    alt="Desktop software workspace"
                    fill
                    sizes="(max-width: 700px) 100vw, 40vw"
                  />
                  <div className="da-capabilities-caption">
                    <span>DESKTOP APPLICATIONS</span>
                    <strong>Functionality meets usability.</strong>
                  </div>
                </div>

                <div className="da-capabilities-list">
                  {capabilities.map((item) => (
                    <article className="da-capability" key={item.number}>
                      <span className="da-capability-number">{item.number}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section className="da-process" id="da-process">
            <div className="da-wrap">
              <div className="da-section-heading">
                <div>
                  <span className="da-kicker">How we work</span>
                  <h2>
                    From idea to
                    <span> finished software.</span>
                  </h2>
                </div>

                <p>
                  A clear development process keeps your project focused
                  from the first discussion to deployment.
                </p>
              </div>

              <div className="da-process-grid">
                {process.map((item) => (
                  <article className="da-process-card" key={item.number}>
                    <span className="da-process-number">{item.number}</span>
                    <span className="da-process-line"></span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="da-cta" id="da-contact">
            <div className="da-wrap da-cta-inner">
              <div className="da-cta-copy">
                <span className="da-kicker">Start your project</span>
                <h2>
                  Have an idea for a desktop application?
                </h2>
                <p>
                  Tell us what you need. Let's discuss the features,
                  requirements and development approach for your software.
                </p>
              </div>

              <div className="da-cta-actions">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                    "Desktop Application Development Enquiry"
                  )}`}
                  className="da-btn da-btn-light"
                >
                  Start a project <span>↗</span>
                </a>

                <a
                  href="https://wa.me/233595856187"
                  target="_blank"
                  rel="noreferrer"
                  className="da-cta-secondary"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <section className="da-pre-footer" aria-label="Company information">
        <div className="da-pre-footer-wrap">
          <div className="da-pre-footer-about">
            <h2>Desktop Applications</h2>
            <p>
              Custom desktop software for Windows, macOS and Linux,
              developed around your business requirements.
            </p>
          </div>

          <div className="da-pre-footer-links">
            <h2>Explore</h2>
            <a href="/web-development">Web Development</a>
            <a href="/mobile-development">Mobile Applications</a>
            <a href="/desktop-application">Desktop Applications</a>
            <a href="/ui-ux-design">UI/UX Design</a>
          </div>

          <div className="da-pre-footer-contact">
            <h2>Contact</h2>
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

          <div className="da-pre-footer-location">
            <h2>Location</h2>
            <p>Accra, Ghana</p>
            <h2 className="da-footer-subheading">Business hours</h2>
            <p>Monday–Friday</p>
          </div>
        </div>
      </section>

      <footer id="da">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>
    </>
  );
}
