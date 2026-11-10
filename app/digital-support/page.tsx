"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./digital-support.css";

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

export default function DigitalSupportPage() {
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

      {/* ================= DIGITAL SUPPORT PAGE ================= */}

      <main>
        <div className={`ds ${display.variable} ${body.variable}`}>

          {/* Hero */}
          <section className="ds-hero">
            <div className="ds-wrap ds-hero-grid">
              <div>
                <h2>Digital Support</h2>
                <p>
                  Reliable ongoing support and maintenance for your websites, applications,
                  and digital systems so they stay fast, secure, and online.
                </p>
              </div>
            </div>
          </section>

          <section className="ds-intro">
            <p>
              From bug fixes and security updates to performance monitoring and technical
              assistance, our support team keeps your digital products running smoothly.
            </p>
          </section>

          <section className="ds-section">
            <div className="ds-grid">
              <div className="ds-card">
                <h3>Technical Support</h3>
                <p>Expert help when you need it, with fast response times and clear solutions.</p>
              </div>
              <div className="ds-card">
                <h3>Security Updates</h3>
                <p>Regular patches and security hardening to protect your applications and data.</p>
              </div>
              <div className="ds-card">
                <h3>Performance Monitoring</h3>
                <p>Proactive monitoring to catch and fix issues before they affect your users.</p>
              </div>
              <div className="ds-card">
                <h3>Bug Fixes</h3>
                <p>Quick resolution of bugs and issues to keep your systems running reliably.</p>
              </div>
            </div>
          </section>

          <section className="ds-cta">
            <a href="/?#contact" className="ds-btn ds-btn-dark">
              Get a quote for digital support &rarr;
            </a>
          </section>

        </div>
      </main>

      {/* ================= SHARED FOOTER ================= */}

      <section className="ds-pre-footer" id="contact" aria-label="Company information">

        <div className="ds-pre-footer-wrap">
          <div className="ds-pre-footer-about">
            <h2>Digital Support</h2>
            <p>
              Reliable ongoing support and maintenance for your websites,
              applications, and digital systems.
            </p>
          </div>

          <div className="ds-pre-footer-links">
            <h2>Explore</h2>
            <a href="/#services">Services</a>
            <a href="/#solutions">Solutions</a>
            <a href="/about">About us</a>
            <a href="/blogs">Blogs</a>
          </div>

          <div className="ds-pre-footer-contact">
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

          <div className="ds-pre-footer-location">
            <h2>Find us</h2>
            <p>Accra, Weija</p>

            <h2>Business hours</h2>
            <p>Monday–Friday</p>

            <h2>Follow us</h2>

            <div className="ds-social-icons" aria-label="Social media">

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
      <footer id="ds">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>

    </>
  );
}