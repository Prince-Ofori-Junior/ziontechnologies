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

export default function WebDevelopmentPage() {
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
            <a href="/" onClick={() => setMenu(false)} className={pathname === "/" ? "active" : ""}>
              Home
            </a>
            <a href="/#solutions" onClick={() => setMenu(false)}>Solutions</a>
            <a href="/about" onClick={() => setMenu(false)} className={pathname === "/about" ? "active" : ""}>
              About
            </a>
            <a href="/blogs" onClick={() => setMenu(false)} className={pathname === "/blogs" ? "active" : ""}>
              Blogs
            </a>
            <div className={`nav-dropdown ${devMenu ? "open" : ""}`}>
              <a className="nav-dropdown-toggle" href="/services" onClick={(e) => { e.preventDefault(); setDevMenu(!devMenu); }} aria-expanded={devMenu}>
                Services
              </a>
              <div className="nav-dropdown-menu" aria-label="Services sub-tabs">
                {DEV_SUBTABS.map(({ label, href }) => (
                  <a key={label} className="nav-dropdown-item" href={href} onClick={() => { setMenu(false); setDevMenu(false); }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <a className="nav-cta nav-cta--accent mobile-only" href="/#contact" onClick={() => setMenu(false)}>
              Get a quote
            </a>
          </div>
          <div className="nav-actions">
            <a href={`mailto:${EMAIL}`}>Contact</a>
            <a className="nav-cta nav-cta--accent" href="/#contact">Get a quote</a>
          </div>
          <button className="menu-btn" type="button" aria-expanded={menu} aria-label="Toggle menu" onClick={() => { setMenu(!menu); if (menu) setDevMenu(false); }}>
            <svg className={`hamburger ${menu ? "active" : ""}`} viewBox="0 0 24 24" strokeWidth={2} fill="none">
              <path className="first" d="M3.75 6.5h14" />
              <path className="middle" d="M3.75 12.5h20" />
              <path className="last" d="M3.75 18.5h14" />
            </svg>
          </button>
        </nav>
      </header>

      {/* ================= WEB DEVELOPMENT PAGE ================= */}

      <main>
        <div className={`wd ${display.variable} ${body.variable}`}>

          {/* Hero */}
          <section className="wd-hero">
            <div className="wd-wrap wd-hero-grid">
              <div>
                <h2>Web Development</h2>
                <p>
                  Professional websites and web applications that represent your brand and work flawlessly on
                  desktop, tablet, and mobile.
                </p>
              </div>
            </div>
          </section>

          <section className="wd-intro">
            <p>
              Whether you need a company website, a customer portal, or an online store, we build fast, secure,
              and easy-to-maintain web solutions that help you reach more customers online.
            </p>
          </section>

          <section className="wd-section">
            <div className="wd-grid">
              <div className="wd-card">
                <h3>Business Websites</h3>
                <p>Clean, responsive company websites that build trust and convert visitors into leads.</p>
              </div>
              <div className="wd-card">
                <h3>E-commerce Stores</h3>
                <p>Online shops with product catalogues, secure payments, and order management built in.</p>
              </div>
              <div className="wd-card">
                <h3>Web Portals</h3>
                <p>Client and member portals with dashboards, logins, and role-based access.</p>
              </div>
              <div className="wd-card">
                <h3>Website Maintenance</h3>
                <p>Hosting guidance, updates, backups, and security checks to keep your site running.</p>
              </div>
            </div>
          </section>

          <section className="wd-cta">
            <a href="/?#contact" className="wd-btn wd-btn-dark">
              Get a quote for web development &rarr;
            </a>
          </section>

        </div>
      </main>

      {/* ================= SHARED FOOTER ================= */}

      <section className="wd-pre-footer" id="contact" aria-label="Company information">

        <div className="wd-pre-footer-wrap">
          <div className="wd-pre-footer-about">
            <h2>Web Development</h2>
            <p>
              We design and build tailored websites and web applications that help businesses
              reach more customers online and grow.
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

          <div className="wd-pre-footer-location">
            <h2>Find us</h2>
            <p>Accra, Weija</p>

            <h2>Business hours</h2>
            <p>Monday–Friday</p>

            <h2>Follow us</h2>

            <div className="wd-social-icons" aria-label="Social media">

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
                  <path d="M19.6 6.3a5.8 5.8 0 0 1-3.5-1.2 5.8 5.8 0 0 1-1.8-3.5h-3.7v14.1a3.1 3.1 0 1 1-3.1-3.1c.5 0 .9.1 1.3 .3V9.1a7 7 0 1 0 5.5 6.8V8.7a9.4 9.4 0 0 0 5.3 1.7V6.7c0-.1 0-.3 0-.4Z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

      </section>

      {/* Copyright */}
      <footer id="wd">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>

    </>
  );
}