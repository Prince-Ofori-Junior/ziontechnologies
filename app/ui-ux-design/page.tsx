"use client";

import Image from "next/image";
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

      {/* ================= UI/UX DESIGN PAGE ================= */}

      <main>
        <div className={`ux ${display.variable} ${body.variable}`}>

          {/* Hero */}
          <section className="ux-hero">
            <div className="ux-wrap ux-hero-grid">
              <div>
                <h2>UI/UX Design</h2>
                <p>
                  Clean interfaces and user experiences designed for clarity, ease of use, and alignment with your brand.
                </p>
              </div>
            </div>
          </section>

          <section className="ux-intro">
            <p>
              Great software starts with great design. We create wireframes, prototypes, and design systems that put
              your users first and make every interaction feel intentional.
            </p>
          </section>

          <section className="ux-section">
            <div className="ux-grid">
              <div className="ux-card">
                <h3>Wireframing &amp; Prototyping</h3>
                <p>Low-fidelity layouts and interactive prototypes before a single line of code is written.</p>
              </div>
              <div className="ux-card">
                <h3>User Interface Design</h3>
                <p>Polished, on-brand interfaces that are beautiful and easy to navigate.</p>
              </div>
              <div className="ux-card">
                <h3>Design Systems</h3>
                <p>Reusable components and guidelines that keep your product consistent as it grows.</p>
              </div>
              <div className="ux-card">
                <h3>Usability Review</h3>
                <p>Assess existing interfaces and recommend improvements that reduce friction and boost conversions.</p>
              </div>
            </div>
          </section>

          <section className="ux-cta">
            <a href="/?#contact" className="ux-btn ux-btn-dark">
              Get a quote for UI/UX design &rarr;
            </a>
          </section>

          {/* Video Section */}
          <section className="ux-video">
            <div className="ux-video-wrap">
              <h2>See Our UI/UX Design Process</h2>
              <div className="ux-video-container">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="UI/UX Design Portfolio"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          {/* Picture Gallery */}
          <section className="ux-gallery">
            <div className="ux-gallery-wrap">
              <h2>Our UI/UX Design Projects</h2>
              <div className="ux-gallery-grid">
                <div className="ux-gallery-item">
                  <Image src="/Creative Design.jpg" alt="Creative Design Project" width={400} height={300} priority />
                  <span>Creative Design</span>
                </div>
                <div className="ux-gallery-item">
                  <Image src="/Brand Identity.jpg" alt="Brand Identity" width={400} height={300} />
                  <span>Brand Identity</span>
                </div>
                <div className="ux-gallery-item">
                  <Image src="/Print Production.jpg" alt="Print Production" width={400} height={300} />
                  <span>Print Production</span>
                </div>
                <div className="ux-gallery-item">
                  <Image src="/Print Production1.jpg" alt="Print Design" width={400} height={300} />
                  <span>Print Design</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ================= SHARED FOOTER ================= */}

      <section className="ux-pre-footer" id="contact" aria-label="Company information">

        <div className="ux-pre-footer-wrap">
          <div className="ux-pre-footer-about">
            <h2>UI/UX Design</h2>
            <p>
              We design user-centered interfaces and experiences that make your product
              intuitive, accessible, and a pleasure to use.
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

          <div className="ux-pre-footer-location">
            <h2>Find us</h2>
            <p>Accra, Weija</p>

            <h2>Business hours</h2>
            <p>Monday–Friday</p>

            <h2>Follow us</h2>

            <div className="ux-social-icons" aria-label="Social media">

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
      <footer id="ux">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>

    </>
  );
}