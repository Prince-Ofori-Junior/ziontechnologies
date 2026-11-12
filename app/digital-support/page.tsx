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

    {/* HERO */}
    <section className="ds-hero">
      <div className="ds-hero-grid ds-wrap">
        <div className="ds-hero-copy">
          <div className="ds-eyebrow">
            <span className="ds-eyebrow-line" />
            DIGITAL SUPPORT / 2026
          </div>

          <h1>
            Technology
            <span> should just</span>
            <em> work.</em>
          </h1>

          <p className="ds-lead">
            Your business depends on technology every day. We help keep
            your websites, applications and digital systems reliable,
            secure and ready for what comes next.
          </p>

          <div className="ds-actions">
            <a href="/#contact" className="ds-btn">
              Get technical support <span>↗</span>
            </a>
            <a href="#ds-services" className="ds-secondary-link">
              Explore our services <span>↓</span>
            </a>
          </div>

          <div className="ds-hero-meta">
            <span><i /> Practical technical assistance</span>
            <span><i /> Ongoing digital care</span>
          </div>
        </div>

        <div className="ds-hero-visual">
          <div className="ds-hero-image">
            <Image
              src="/Digital Support.jpg"
              alt="Technical support professional working with digital systems"
              fill
              priority
              sizes="(max-width: 850px) 100vw, 52vw"
            />
          </div>

          <div className="ds-visual-label">
            <span>01</span>
            <span>SUPPORT THAT KEEPS YOU MOVING</span>
          </div>

          <div className="ds-dashboard">
            <div className="ds-dashboard-top">
              <div>
                <span className="ds-dashboard-overline">DIGITAL CARE</span>
                <strong>Support overview</strong>
              </div>
              <span className="ds-dashboard-menu">•••</span>
            </div>

            <div className="ds-dashboard-status">
              <div className="ds-dashboard-status-icon">✓</div>
              <div>
                <small>OUR APPROACH</small>
                <strong>Proactive support</strong>
              </div>
              <span className="ds-dashboard-status-dot" />
            </div>

            <div className="ds-dashboard-metrics">
              <div>
                <span className="ds-metric-icon">⌘</span>
                <small>01</small>
                <strong>Diagnose</strong>
              </div>
              <div>
                <span className="ds-metric-icon">↻</span>
                <small>02</small>
                <strong>Maintain</strong>
              </div>
              <div>
                <span className="ds-metric-icon">◇</span>
                <small>03</small>
                <strong>Improve</strong>
              </div>
            </div>

            <div className="ds-dashboard-footer">
              <span className="ds-dashboard-pulse" />
              SUPPORT BUILT AROUND YOUR SYSTEMS
            </div>
          </div>

          <span className="ds-hero-decoration">DS.</span>
        </div>
      </div>

      <div className="ds-hero-bottom ds-wrap">
        <span>TECHNICAL ASSISTANCE</span>
        <span>SYSTEM MAINTENANCE</span>
        <span>SECURITY &amp; PERFORMANCE</span>
        <span>WEBSITE &amp; APP CARE</span>
      </div>
    </section>

    {/* INTRO */}
    <section className="ds-intro">
      <div className="ds-wrap ds-intro-grid">
        <div className="ds-intro-side">
          <span className="ds-section-label">01 / THE BIGGER PICTURE</span>
          <span className="ds-intro-index">DIGITAL OPERATIONS</span>
        </div>

        <div className="ds-intro-content">
          <h2>
            The best technology is the technology that
            <span> works when you need it.</span>
          </h2>
          <p>
            A slow website, a system error or an outdated application
            can interrupt the way your business operates. Zion Technologies
            provides practical digital support to help you solve technical
            issues, maintain your platforms and get more from the technology
            you already use.
          </p>
          <a href="/#contact" className="ds-inline-link">
            Let's discuss your support needs <span>↗</span>
          </a>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="ds-services ds-section" id="ds-services">
      <div className="ds-wrap">
        <div className="ds-section-heading">
          <div>
            <span className="ds-section-label">02 / WHAT WE TAKE CARE OF</span>
            <h2>
              Everything your
              <span> digital environment needs.</span>
            </h2>
          </div>
          <p>
            From resolving everyday technical issues to looking after
            business-critical platforms, we help you keep things running.
          </p>
        </div>

        <div className="ds-service-grid">

          <article className="ds-service-card ds-service-card-featured">
            <div className="ds-card-top">
              <span className="ds-service-number">01 — SUPPORT</span>
              <span className="ds-service-symbol">⌘</span>
            </div>
            <div className="ds-service-content">
              <h3>Technical assistance</h3>
              <p>
                Get help with software errors, configuration issues,
                system problems and the technical challenges that interrupt
                your workflow.
              </p>
              <a href="/#contact">Get assistance <span>↗</span></a>
            </div>
            <span className="ds-card-watermark">01</span>
          </article>

          <article className="ds-service-card">
            <div className="ds-card-top">
              <span className="ds-service-number">02 — UPKEEP</span>
              <span className="ds-service-symbol">↻</span>
            </div>
            <div className="ds-service-content">
              <h3>System maintenance</h3>
              <p>
                Keep your digital tools updated and properly maintained
                through routine checks and technical upkeep.
              </p>
              <a href="/#contact">Maintain your systems <span>↗</span></a>
            </div>
            <span className="ds-card-watermark">02</span>
          </article>

          <article className="ds-service-card">
            <div className="ds-card-top">
              <span className="ds-service-number">03 — PROTECTION</span>
              <span className="ds-service-symbol">◇</span>
            </div>
            <div className="ds-service-content">
              <h3>Security support</h3>
              <p>
                Get help with software updates, security checks and
                practical recommendations to reduce avoidable risks.
              </p>
              <a href="/#contact">Improve protection <span>↗</span></a>
            </div>
            <span className="ds-card-watermark">03</span>
          </article>

          <article className="ds-service-card">
            <div className="ds-card-top">
              <span className="ds-service-number">04 — PERFORMANCE</span>
              <span className="ds-service-symbol">⌁</span>
            </div>
            <div className="ds-service-content">
              <h3>Performance optimisation</h3>
              <p>
                Identify bottlenecks and improve the speed, responsiveness
                and usability of your websites and applications.
              </p>
              <a href="/#contact">Improve performance <span>↗</span></a>
            </div>
            <span className="ds-card-watermark">04</span>
          </article>

          <article className="ds-service-card">
            <div className="ds-card-top">
              <span className="ds-service-number">05 — CONTINUITY</span>
              <span className="ds-service-symbol">▤</span>
            </div>
            <div className="ds-service-content">
              <h3>Backup and recovery</h3>
              <p>
                Establish practical backup routines and recovery plans
                to help protect important business information.
              </p>
              <a href="/#contact">Protect your data <span>↗</span></a>
            </div>
            <span className="ds-card-watermark">05</span>
          </article>

          <article className="ds-service-card">
            <div className="ds-card-top">
              <span className="ds-service-number">06 — PLATFORM CARE</span>
              <span className="ds-service-symbol">◎</span>
            </div>
            <div className="ds-service-content">
              <h3>Website and app care</h3>
              <p>
                Ongoing technical attention for business websites,
                web applications and essential digital products.
              </p>
              <a href="/#contact">Support my platform <span>↗</span></a>
            </div>
            <span className="ds-card-watermark">06</span>
          </article>

        </div>
      </div>
    </section>

    {/* FEATURE */}
    <section className="ds-feature">
      <div className="ds-feature-grid ds-wrap">
        <div className="ds-feature-visual">
          <div className="ds-feature-image">
            <Image
              src="/Digital Support2.jpg"
              alt="IT specialist working on digital systems and technical maintenance"
              fill
              sizes="(max-width: 850px) 100vw, 50vw"
            />
          </div>
          <div className="ds-feature-stamp">
            <span>CARE</span>
            <strong>BEYOND<br />THE FIX.</strong>
            <span>PREVENT / MAINTAIN / IMPROVE</span>
          </div>
          <span className="ds-feature-vertical">DIGITAL SYSTEMS / CONTINUOUS CARE</span>
        </div>

        <div className="ds-feature-copy">
          <span className="ds-section-label">03 / A SMARTER WAY TO SUPPORT</span>
          <h2>
            Don't wait for
            <span> technology to let you down.</span>
          </h2>
          <p>
            Fixing a problem matters. Preventing the next one matters too.
            We take a practical approach to digital support by helping you
            identify issues, maintain your systems and make informed
            technical decisions.
          </p>

          <div className="ds-feature-points">
            <div>
              <span>01</span>
              <p><strong>Stay up to date</strong>Keep software and platforms properly maintained.</p>
            </div>
            <div>
              <span>02</span>
              <p><strong>Address issues early</strong>Identify technical problems before they grow.</p>
            </div>
            <div>
              <span>03</span>
              <p><strong>Protect your work</strong>Use practical backup and security measures.</p>
            </div>
          </div>

          <a href="/#contact" className="ds-btn">
            Talk to a technical specialist <span>↗</span>
          </a>
        </div>
      </div>
    </section>

    {/* SUPPORT PROCESS */}
    <section className="ds-process ds-section">
      <div className="ds-wrap">
        <div className="ds-process-heading">
          <span className="ds-section-label">04 / OUR SUPPORT WORKFLOW</span>
          <h2>
            A problem-solving process
            <span> with a clear direction.</span>
          </h2>
          <p>
            Every support request starts with understanding what is happening
            and ends with a practical way forward.
          </p>
        </div>

        <div className="ds-process-grid">
          <article className="ds-process-step">
            <div className="ds-process-step-top">
              <span>01</span><i>↗</i>
            </div>
            <div className="ds-process-marker" />
            <h3>Understand</h3>
            <p>
              We learn about your platform, the issue and how it affects
              your daily operations.
            </p>
          </article>

          <article className="ds-process-step">
            <div className="ds-process-step-top">
              <span>02</span><i>⌕</i>
            </div>
            <div className="ds-process-marker" />
            <h3>Diagnose</h3>
            <p>
              We investigate the issue, assess possible causes and
              identify the right approach.
            </p>
          </article>

          <article className="ds-process-step">
            <div className="ds-process-step-top">
              <span>03</span><i>✓</i>
            </div>
            <div className="ds-process-marker" />
            <h3>Resolve</h3>
            <p>
              We work through the required fixes, adjustments or
              maintenance tasks.
            </p>
          </article>

          <article className="ds-process-step">
            <div className="ds-process-step-top">
              <span>04</span><i>↻</i>
            </div>
            <div className="ds-process-marker" />
            <h3>Maintain</h3>
            <p>
              We recommend practical next steps to help keep your
              digital environment dependable.
            </p>
          </article>
        </div>
      </div>
    </section>

    {/* WHO WE SUPPORT */}
    <section className="ds-audience">
      <div className="ds-wrap ds-audience-grid">
        <div className="ds-audience-visual">
          <div className="ds-audience-image">
            <Image
              src="/Digital Support.jpg"
              alt="Technology professional providing digital support"
              fill
              sizes="(max-width: 850px) 100vw, 48vw"
            />
          </div>
          <div className="ds-audience-note">
            <span>TECHNOLOGY THAT WORKS FOR YOU</span>
            <strong>Support for the way your business operates.</strong>
          </div>
        </div>

        <div className="ds-audience-copy">
          <span className="ds-section-label">05 / WHO WE WORK WITH</span>
          <h2>
            Your business is different.
            <span> Your support should be too.</span>
          </h2>
          <p>
            Whether you are running a growing business or managing an
            established digital platform, we help you get more value
            from the technology you rely on.
          </p>

          <div className="ds-audience-list">
            <div><span>01</span><strong>Small and growing businesses</strong><i>↗</i></div>
            <div><span>02</span><strong>Established organisations</strong><i>↗</i></div>
            <div><span>03</span><strong>Website and application owners</strong><i>↗</i></div>
            <div><span>04</span><strong>Teams using digital tools</strong><i>↗</i></div>
          </div>
        </div>
      </div>
    </section>

    {/* VISUAL GALLERY */}
    <section className="ds-gallery ds-section">
      <div className="ds-wrap">
        <div className="ds-gallery-heading">
          <div>
            <span className="ds-section-label">06 / THE WORK BEHIND THE SCENES</span>
            <h2>
              Better support.
              <span> Better digital experiences.</span>
            </h2>
          </div>
          <p>
            Reliable digital systems are supported by consistent
            maintenance, careful troubleshooting and attention to detail.
          </p>
        </div>

        <div className="ds-gallery-grid">
          <div className="ds-gallery-main">
            <Image
              src="/Digital Support2.jpg"
              alt="Technical specialist maintaining digital systems"
              fill
              sizes="(max-width: 760px) 100vw, 58vw"
            />
            <div className="ds-gallery-caption">
              <span>01 / SYSTEM MAINTENANCE</span>
              <h3>Keep your digital environment in good shape.</h3>
            </div>
          </div>

          <div className="ds-gallery-side">
            <div className="ds-gallery-side-image">
              <Image
                src="/Digital Support.jpg"
                alt="Professional technical assistance"
                fill
                sizes="(max-width: 760px) 100vw, 38vw"
              />
            </div>
            <div className="ds-gallery-side-copy">
              <span>02 / TECHNICAL ASSISTANCE</span>
              <h3>Practical help when you need it.</h3>
              <a href="/#contact">Speak with our team <span>↗</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="ds-final-cta">
      <div className="ds-cta-orbit ds-cta-orbit-one" />
      <div className="ds-cta-orbit ds-cta-orbit-two" />
      <div className="ds-wrap ds-final-cta-inner">
        <span className="ds-section-label">07 / LET'S GET YOUR SYSTEMS WORKING</span>
        <h2>
          Need a hand with
          <span> your technology?</span>
        </h2>
        <p>
          Tell us what needs attention. Whether it is a technical issue,
          ongoing maintenance or a digital platform that needs care,
          let's work out the next step.
        </p>
        <div className="ds-cta-actions">
          <a href="/#contact" className="ds-btn">
            Contact Zion Technologies <span>↗</span>
          </a>
          <a href={`mailto:${EMAIL}`} className="ds-cta-email">
            {EMAIL}
          </a>
        </div>
        <span className="ds-cta-watermark">ZION / DIGITAL SUPPORT</span>
      </div>
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