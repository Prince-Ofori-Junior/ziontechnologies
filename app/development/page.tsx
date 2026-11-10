"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./development.css";

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

export default function DevelopmentPage() {
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

      {/* ================= DEVELOPMENT PAGE ================= */}

      <main>
        <div className={`dev ${display.variable} ${body.variable}`}>

          {/* Hero */}
          <section className="dev-hero">
            <div className="dev-wrap dev-hero-grid">
              <div>
                <h2>Software Development Built for Your Business</h2>
                <p>
                  We design and build tailored web applications, mobile apps, and business systems that help teams
                  work smarter, serve customers better, and grow.
                </p>
              </div>
            </div>
          </section>

          <section className="dev-intro">
            <p>
              From startup ideas to enterprise systems, our development team turns requirements into reliable,
              maintainable software. We work with you through planning, design, build, testing, launch, and ongoing
              support — so your technology keeps pace with your business.
            </p>
          </section>

          <section className="dev-section">
            <div className="dev-grid">
              <a className="dev-card" href="/web-development">
                <Image src="/Web Development.png" alt="Web Development" width={400} height={300} className="dev-card-image" />
                <h3>Web Development</h3>
                <p>Responsive websites, web applications, and online stores built to perform on every device.</p>
              </a>
              <a className="dev-card" href="/mobile-development">
                <h3>Mobile App Development</h3>
                <p>iOS and Android apps that feel native, load fast, and keep your users engaged.</p>
              </a>
              <a className="dev-card" href="/custom-software">
                <h3>Custom Software</h3>
                <p>Business systems, dashboards, and tools shaped around your actual workflow.</p>
              </a>
              <a className="dev-card" href="/api-backend">
                <h3>API &amp; Backend</h3>
                <p>Secure APIs, integrations, and backend services that connect your tools and data.</p>
              </a>
              <a className="dev-card" href="/ui-ux-design">
                <h3>UI/UX Design</h3>
                <p>Clean interfaces and user experiences designed for clarity and ease of use.</p>
              </a>
              <a className="dev-card" href="/software-maintenance">
                <h3>Maintenance &amp; Support</h3>
                <p>Ongoing updates, hosting guidance, security checks, and technical support.</p>
              </a>
            </div>
          </section>

          <section className="dev-cta">
            <a href="/?#contact" className="dev-btn dev-btn-dark">
              Get a quote for your project &rarr;
            </a>
          </section>

          {/* Video Section */}
          <section className="dev-video">
            <div className="dev-video-wrap">
              <h2>See Our Software Development Work</h2>
              <div className="dev-video-container">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Software Development Portfolio"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          {/* Picture Gallery */}
          <section className="dev-gallery">
            <div className="dev-gallery-wrap">
              <h2>Our Software Development Projects</h2>
              <div className="dev-gallery-grid">
                <div className="dev-gallery-item">
                  <Image src="/custom software2.jpg" alt="Custom Software Project" width={400} height={300} priority />
                  <span>Custom Software</span>
                </div>
                <div className="dev-gallery-item">
                  <Image src="/Smiling Man Exploring Floating Analytics Dashboards.png" alt="Analytics Dashboard" width={400} height={300} />
                  <span>Analytics Dashboard</span>
                </div>
                <div className="dev-gallery-item">
                  <Image src="/Excited Man Using Laptop (1).png" alt="Development Work" width={400} height={300} />
                  <span>Development</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ================= SHARED FOOTER ================= */}

      <section className="dev-pre-footer" id="contact" aria-label="Company information">

        <div className="dev-pre-footer-wrap">
          <div className="dev-pre-footer-about">
            <h2>Software Development</h2>
            <p>
              We design and build tailored web applications, mobile apps,
              and business systems that help teams work smarter and grow.
            </p>
          </div>

          <div className="dev-pre-footer-links">
            <h2>Explore</h2>
            <a href="/#services">Services</a>
            <a href="/#solutions">Solutions</a>
            <a href="/about">About us</a>
            <a href="/blogs">Blogs</a>
          </div>

          <div className="dev-pre-footer-contact">
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

          <div className="dev-pre-footer-location">
            <h2>Find us</h2>
            <p>Accra, Weija</p>

            <h2>Business hours</h2>
            <p>Monday–Friday</p>

            <h2>Follow us</h2>

            <div className="dev-social-icons" aria-label="Social media">

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
      <footer id="dev">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>

    </>
  );
}