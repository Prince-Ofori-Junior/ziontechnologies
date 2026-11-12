"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const EMAIL = "hello@ziontechnologies.com";

const serviceLinks = [
  { label: "Web Development", href: "/web-development" },
  { label: "Mobile Application", href: "/mobile-development" },
  { label: "Desktop Application", href: "/desktop-application" },
  { label: "UI/UX Design", href: "/ui-ux-design" },
  { label: "Tech Consulting", href: "/tech-consulting" },
  { label: "Digital Support", href: "/digital-support" },
  { label: "Cloud Solutions", href: "/cloud-solutions" },
];

export function BlogNav() {
  const [menu, setMenu] = useState(false);
  const [devMenu, setDevMenu] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="main-nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Zion Technologies home">
          <Image src="/logo.png" alt="Zion Technologies logo" width={180} height={60} priority />
          <div className="brand-text">
            <span className="logo-aqua" />
            <span className="logo-blue" />
          </div>
        </Link>

        <div className={menu ? "nav-links open" : "nav-links"}>
          <Link href="/" onClick={() => setMenu(false)} className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link href="/#solutions" onClick={() => setMenu(false)}>
            Solutions
          </Link>
          <Link href="/about" onClick={() => setMenu(false)} className={pathname === "/about" ? "active" : ""}>
            About
          </Link>
          <Link href="/blogs" onClick={() => setMenu(false)} className={pathname.startsWith("/blogs") ? "active" : ""}>
            Blogs
          </Link>

          <div className={`nav-dropdown ${devMenu ? "open" : ""}`}>
            <Link
              className="nav-dropdown-toggle"
              href="/services"
              aria-expanded={devMenu}
              onClick={(event) => {
                event.preventDefault();
                setDevMenu(!devMenu);
              }}
            >
              Services
            </Link>
            <div className="nav-dropdown-menu" aria-label="Services sub-tabs">
              {serviceLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  className="nav-dropdown-item"
                  href={href}
                  onClick={() => {
                    setMenu(false);
                    setDevMenu(false);
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            className="nav-cta nav-cta--accent mobile-only"
            href="/#contact"
            onClick={() => setMenu(false)}
          >
            Get a quote
          </Link>
        </div>

        <div className="nav-actions">
          <a href={`mailto:${EMAIL}`}>Contact</a>
          <Link className="nav-cta nav-cta--accent" href="/#contact">
            Get a quote
          </Link>
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
  );
}

export function BlogFooter() {
  return (
    <>
      <section className="pre-footer" id="contact" aria-label="Company information">
        <div className="pre-footer-about">
          <h2>Software development</h2>
          <p>
            We design and build tailored web applications, mobile apps, and business systems that help teams work smarter and grow.
          </p>
        </div>
        <div className="pre-footer-links">
          <h2>Explore</h2>
          <Link href="/#services">Services</Link>
          <Link href="/#solutions">Solutions</Link>
          <Link href="/about">About us</Link>
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
            <span aria-label="YouTube" title="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
            </span>
            <span aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z" /></svg>
            </span>
            <span aria-label="X" title="X">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.5l7.3-8.4L1.9 2h6.5l4.5 6.7L18.9 2Zm-1.1 17.9h1.7L7.4 4H5.6l12.2 15.9Z" /></svg>
            </span>
            <span aria-label="TikTok" title="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.6 6.3a5.8 5.8 0 0 1-3.5-1.2 5.8 5.8 0 0 1-1.8-3.5h-3.7v14.1a3.1 3.1 0 1 1-3.1-3.1c.5 0 .9.1 1.3.3V9.1a7 7 0 1 0 5.5 6.8V8.7a9.4 9.4 0 0 0 5.3 1.7V6.7c0-.1 0-.3 0-.4Z" /></svg>
            </span>
          </div>
        </div>
      </section>

      <footer id="about">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>
    </>
  );
}
