
"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./tech-consulting.css";

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

export default function TechConsultingPage() {
  const [menu, setMenu] = useState(false);
  const [devMenu, setDevMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* =========================================
          SHARED WEBSITE NAVIGATION
      ========================================= */}

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

      {/* =========================================
          TECH CONSULTING PAGE
      ========================================= */}

      <main>
        <div className={`tc ${display.variable} ${body.variable}`}>

          {/* =====================================
              01 — HERO SECTION
          ===================================== */}

          <section className="tc-hero">

            <div className="tc-wrap tc-hero-grid">

              <div className="tc-hero-copy">

                <span className="tc-eyebrow">
                  <span className="tc-eyebrow-line"></span>
                  TECHNOLOGY CONSULTING & ADVISORY
                </span>

                <h1>
                  Think smarter.
                  <span>Build better.</span>
                  Move forward.
                </h1>

                <p className="tc-hero-description">
                  Technology decisions shape the future of your business.
                  We help organisations navigate complexity, identify the
                  right opportunities and build technology strategies that
                  create lasting business value.
                </p>

                <div className="tc-hero-actions">

                  <a href="/contact" className="tc-primary-btn">
                    DISCUSS YOUR BUSINESS <span>↗</span>
                  </a>

                  <a href="#tc-capabilities" className="tc-secondary-link">
                    Explore our expertise <span>↓</span>
                  </a>

                </div>

                <div className="tc-hero-signature">
                  <span>✳</span>
                  <span>STRATEGY</span>
                  <span>·</span>
                  <span>INNOVATION</span>
                  <span>·</span>
                  <span>TECHNOLOGY</span>
                </div>

              </div>

              <div className="tc-hero-art">

                <div className="tc-hero-photo">
                  <Image
                    src="/volvo1234-man-8149563_1920.jpg"
                    alt="Professional reviewing technology and business information"
                    width={900}
                    height={1100}
                    priority
                  />
                </div>

                <div className="tc-hero-photo-overlay"></div>

                <div className="tc-hero-coordinate">
                  <span>01 / TECHNOLOGY ADVISORY</span>
                  <span>ACC · GH</span>
                </div>

                <div className="tc-hero-insight">

                  <div className="tc-insight-icon">✳</div>

                  <div>
                    <span>OUR CONSULTING APPROACH</span>
                    <strong>Clarity before complexity.</strong>
                  </div>

                  <span className="tc-insight-arrow">↗</span>

                </div>

                <div className="tc-hero-circle">
                  <span>ZT.</span>
                </div>

                <span className="tc-hero-vertical">
                  BUILDING TECHNOLOGY WITH PURPOSE
                </span>

              </div>

            </div>

            <div className="tc-wrap tc-hero-footer">
              <span>INDEPENDENT TECHNOLOGY THINKING</span>
              <span>BUSINESS-ALIGNED SOLUTIONS</span>
              <span>DESIGNED FOR WHAT'S NEXT <i>↗</i></span>
            </div>

          </section>

          {/* =====================================
              02 — CONSULTING PHILOSOPHY
          ===================================== */}

          <section className="tc-philosophy">

            <div className="tc-wrap tc-philosophy-grid">

              <div className="tc-philosophy-label">

                <span className="tc-eyebrow">
                  <span className="tc-eyebrow-line"></span>
                  OUR PERSPECTIVE
                </span>

                <span className="tc-side-note">
                  TECHNOLOGY WITH DIRECTION — 01
                </span>

              </div>

              <div className="tc-philosophy-content">

                <h2>
                  Technology should solve business problems,
                  <span> not create new ones.</span>
                </h2>

                <div className="tc-philosophy-bottom">

                  <p>
                    The right technology is not necessarily the newest or
                    most expensive. It is the technology that addresses
                    your challenges, supports your operations and moves
                    your organisation closer to its objectives.
                    <br /><br />
                    At Zion Technologies, we combine technical knowledge
                    with practical business thinking to help you make
                    informed decisions with confidence.
                  </p>

                  <a href="/contact" className="tc-arrow-link">
                    LET'S TALK <span>↗</span>
                  </a>

                </div>

              </div>

            </div>

          </section>

          {/* =====================================
              03 — CONSULTING CAPABILITIES
          ===================================== */}

          <section className="tc-capabilities" id="tc-capabilities">

            <div className="tc-wrap">

              <div className="tc-capabilities-heading">

                <div>

                  <span className="tc-eyebrow">
                    <span className="tc-eyebrow-line"></span>
                    WHAT WE BRING TO THE TABLE
                  </span>

                  <h2>
                    The right advice.
                    <span> The right direction.</span>
                  </h2>

                </div>

                <p>
                  From initial technology planning to complex
                  digital transformation decisions, we provide
                  practical guidance that helps your organisation
                  move forward with a clear technical direction.
                </p>

              </div>

              <div className="tc-capabilities-layout">

                {/* FEATURE IMAGE */}

                <div className="tc-capability-feature">

                  <div className="tc-capability-feature-image">
                    <Image
                      src="/Blog.jpg"
                      alt="Technology consulting article and business strategy"
                      width={850}
                      height={1100}
                    />
                  </div>

                  <div className="tc-capability-feature-overlay">

                    <span>OUR CORE EXPERTISE</span>

                    <h3>
                      Turning complex technology decisions into clear
                      business opportunities.
                    </h3>

                    <p>
                      We help you understand where you are, where
                      technology can take you and what it takes
                      to get there.
                    </p>

                    <a href="/contact">
                      EXPLORE YOUR OPPORTUNITIES ↗
                    </a>

                  </div>

                </div>

                {/* CONSULTING SERVICES */}

                <div className="tc-capability-list">

                  <div className="tc-capability-item">

                    <span className="tc-cap-number">01</span>

                    <div>
                      <span className="tc-cap-label">PLANNING & DIRECTION</span>
                      <h3>Technology Strategy</h3>
                      <p>
                        Develop a practical technology roadmap that
                        connects your business objectives with the
                        right digital investments, priorities and
                        implementation plans.
                      </p>
                    </div>

                    <span className="tc-cap-arrow">↗</span>

                  </div>

                  <div className="tc-capability-item">

                    <span className="tc-cap-number">02</span>

                    <div>
                      <span className="tc-cap-label">SYSTEMS & ENGINEERING</span>
                      <h3>IT Architecture Consulting</h3>
                      <p>
                        Evaluate and plan scalable system architectures,
                        software infrastructure, integrations and
                        technology environments for your organisation.
                      </p>
                    </div>

                    <span className="tc-cap-arrow">↗</span>

                  </div>

                  <div className="tc-capability-item">

                    <span className="tc-cap-number">03</span>

                    <div>
                      <span className="tc-cap-label">MODERNISATION</span>
                      <h3>Digital Transformation</h3>
                      <p>
                        Identify opportunities to modernise business
                        operations through digital platforms,
                        intelligent workflows and connected systems.
                      </p>
                    </div>

                    <span className="tc-cap-arrow">↗</span>

                  </div>

                  <div className="tc-capability-item">

                    <span className="tc-cap-number">04</span>

                    <div>
                      <span className="tc-cap-label">TECHNOLOGY EVALUATION</span>
                      <h3>Software & Platform Advisory</h3>
                      <p>
                        Assess software options, development approaches,
                        technology stacks and platforms before making
                        important implementation decisions.
                      </p>
                    </div>

                    <span className="tc-cap-arrow">↗</span>

                  </div>

                  <div className="tc-capability-item">

                    <span className="tc-cap-number">05</span>

                    <div>
                      <span className="tc-cap-label">EFFICIENCY & AUTOMATION</span>
                      <h3>Business Process Optimisation</h3>
                      <p>
                        Identify repetitive processes, operational
                        bottlenecks and opportunities for automation
                        to improve productivity and efficiency.
                      </p>
                    </div>

                    <span className="tc-cap-arrow">↗</span>

                  </div>

                  <div className="tc-capability-item">

                    <span className="tc-cap-number">06</span>

                    <div>
                      <span className="tc-cap-label">RISK & RELIABILITY</span>
                      <h3>IT Assessment & Technical Reviews</h3>
                      <p>
                        Review existing systems, technical performance,
                        infrastructure and potential weaknesses to
                        support more reliable technology decisions.
                      </p>
                    </div>

                    <span className="tc-cap-arrow">↗</span>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =====================================
              04 — DIGITAL TRANSFORMATION
          ===================================== */}

          <section className="tc-strategy">

            <div className="tc-strategy-image">
              <Image
                src="/digital-transformation.jpg"
                alt="Digital transformation and modern business technology"
                width={1800}
                height={1000}
              />
            </div>

            <div className="tc-strategy-shade"></div>

            <div className="tc-wrap tc-strategy-content">

              <span className="tc-eyebrow">
                <span className="tc-eyebrow-line"></span>
                PREPARING YOUR BUSINESS FOR TOMORROW
              </span>

              <h2>
                Don't just adapt to change.
                <span> Make technology work for you.</span>
              </h2>

              <p>
                Digital transformation is more than adopting new
                software. It requires understanding your business,
                rethinking how work gets done and selecting the
                technology that creates meaningful improvements.
                We help you approach that journey with a clear
                strategy and practical implementation priorities.
              </p>

              <a href="/contact" className="tc-primary-btn">
                START YOUR DIGITAL TRANSFORMATION <span>↗</span>
              </a>

            </div>

            <span className="tc-strategy-caption">
              STRATEGY · SYSTEMS · INNOVATION · GROWTH
            </span>

          </section>

          {/* =====================================
              05 — OUR CONSULTING FRAMEWORK
          ===================================== */}

          <section className="tc-framework">

            <div className="tc-wrap">

              <div className="tc-framework-heading">

                <span className="tc-eyebrow">
                  <span className="tc-eyebrow-line"></span>
                  HOW WE APPROACH TECHNOLOGY
                </span>

                <h2>
                  A thoughtful process.
                  <span> Better decisions.</span>
                </h2>

                <p>
                  Effective consulting starts with understanding,
                  not assumptions. Our structured approach ensures
                  that every recommendation is grounded in your
                  business needs and technical realities.
                </p>

              </div>

              <div className="tc-framework-visual">

                <div className="tc-framework-center">

                  <div className="tc-framework-center-inner">
                    <span>ZT.</span>
                    <strong>OUR METHOD</strong>
                    <small>THINK · PLAN · ADVANCE</small>
                  </div>

                </div>

                <div className="tc-framework-stage tc-stage-one">

                  <span>01</span>

                  <div>
                    <h3>Discover</h3>
                    <p>
                      Understand your business objectives,
                      existing systems, challenges and
                      technology requirements.
                    </p>
                  </div>

                </div>

                <div className="tc-framework-stage tc-stage-two">

                  <span>02</span>

                  <div>
                    <h3>Assess</h3>
                    <p>
                      Evaluate your technology environment,
                      identify gaps and uncover opportunities
                      for improvement.
                    </p>
                  </div>

                </div>

                <div className="tc-framework-stage tc-stage-three">

                  <span>03</span>

                  <div>
                    <h3>Strategise</h3>
                    <p>
                      Develop recommendations, technical
                      roadmaps and practical implementation
                      priorities.
                    </p>
                  </div>

                </div>

                <div className="tc-framework-stage tc-stage-four">

                  <span>04</span>

                  <div>
                    <h3>Advance</h3>
                    <p>
                      Support the next steps through technical
                      guidance, implementation planning and
                      continuous improvement.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =====================================
              06 — CONSULTING PERSPECTIVES GALLERY
          ===================================== */}

          <section className="tc-perspectives">

            <div className="tc-wrap">

              <div className="tc-perspectives-heading">

                <div>

                  <span className="tc-eyebrow">
                    <span className="tc-eyebrow-line"></span>
                    TECHNOLOGY IN PERSPECTIVE
                  </span>

                  <h2>
                    Where business meets
                    <span> intelligent technology.</span>
                  </h2>

                </div>

                <p>
                  Successful technology decisions connect
                  business thinking, technical architecture
                  and forward-looking innovation.
                  Explore the areas that shape our consulting approach.
                </p>

              </div>

              <div className="tc-perspective-gallery">

                <div className="tc-perspective-card">

                  <Image
                     src="/Tech Consulting1.jpg"
                    alt="Enterprise technology architecture and system planning"
                    width={750}
                    height={900}
                  />

                  <div className="tc-perspective-info">
                    <span>01 / ENGINEERING</span>
                    <h3>Technology Architecture</h3>
                    <p>Building a stronger technical foundation.</p>
                  </div>

                </div>

                <div className="tc-perspective-card">

                  <Image
                    src="/Tech Consulting0.jpg"
                    alt="Business advisory and technology planning"
                    width={750}
                    height={900}
                  />

                  <div className="tc-perspective-info">
                    <span>02 / STRATEGY</span>
                    <h3>Business Advisory</h3>
                    <p>Making informed technology investments.</p>
                  </div>

                </div>

                <div className="tc-perspective-card">

                  <Image
                    src="/work1.avif"
                    alt="Technology professionals collaborating on digital solutions"
                    width={750}
                    height={900}
                  />

                  <div className="tc-perspective-info">
                    <span>03 / INNOVATION</span>
                    <h3>Digital Innovation</h3>
                    <p>Exploring new ways to create business value.</p>
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =====================================
              07 — WHO WE ADVISE
          ===================================== */}

          <section className="tc-clients">

            <div className="tc-wrap tc-clients-grid">

              <div className="tc-clients-copy">

                <span className="tc-eyebrow">
                  <span className="tc-eyebrow-line"></span>
                  WHO WE WORK WITH
                </span>

                <h2>
                  Different businesses.
                  <span> One clear direction.</span>
                </h2>

                <p>
                  Technology challenges are different across
                  organisations. We tailor our consulting
                  recommendations to your business model,
                  operational requirements, resources and
                  long-term objectives.
                </p>

                <a href="/contact" className="tc-arrow-link">
                  DISCUSS YOUR REQUIREMENTS <span>↗</span>
                </a>

              </div>

              <div className="tc-client-rows">

                <div>
                  <span>01</span>
                  <strong>Startups & Entrepreneurs</strong>
                  <p>Make informed technology choices from the beginning.</p>
                  <span className="tc-client-arrow">↗</span>
                </div>

                <div>
                  <span>02</span>
                  <strong>Small & Medium Businesses</strong>
                  <p>Improve operations through practical digital solutions.</p>
                  <span className="tc-client-arrow">↗</span>
                </div>

                <div>
                  <span>03</span>
                  <strong>Growing Organisations</strong>
                  <p>Prepare your systems and infrastructure for growth.</p>
                  <span className="tc-client-arrow">↗</span>
                </div>

                <div>
                  <span>04</span>
                  <strong>Established Enterprises</strong>
                  <p>Evaluate, modernise and optimise technology environments.</p>
                  <span className="tc-client-arrow">↗</span>
                </div>

                <div>
                  <span>05</span>
                  <strong>Institutions & Organisations</strong>
                  <p>Explore effective systems for better service delivery.</p>
                  <span className="tc-client-arrow">↗</span>
                </div>

              </div>

            </div>

          </section>

          {/* =====================================
              08 — FINAL CONSULTATION CTA
          ===================================== */}

          <section className="tc-contact">

            <div className="tc-contact-decoration">
              THINK BIGGER.
            </div>

            <div className="tc-wrap tc-contact-content">

              <span className="tc-eyebrow">
                <span className="tc-eyebrow-line"></span>
                YOUR NEXT TECHNOLOGY DECISION STARTS HERE
              </span>

              <h2>
                Let's make your
                <span> technology work harder.</span>
              </h2>

              <p>
                Whether you're planning a new digital initiative,
                reviewing your existing systems or looking for
                a clearer technology direction, let's discuss
                what your organisation needs.
              </p>

              <a href="/contact" className="tc-contact-btn">
                TALK TO OUR CONSULTING TEAM <span>↗</span>
              </a>

            </div>

            <div className="tc-wrap tc-contact-bottom">
              <span>ZION TECHNOLOGIES</span>
              <span>TECHNOLOGY CONSULTING & ADVISORY</span>
              <span>ACCRA, GHANA · 2026</span>
            </div>

          </section>

        </div>
      </main>

      {/* =========================================
          SHARED COMPANY FOOTER
      ========================================= */}

      <section
        className="tc-pre-footer"
        id="contact"
        aria-label="Company information"
      >

        <div className="tc-pre-footer-wrap">

          <div className="tc-pre-footer-about">

            <h2>Zion Technologies</h2>

            <p>
              We help businesses make smarter technology
              decisions through software development,
              technology consulting and digital innovation.
            </p>

          </div>

          <div className="tc-pre-footer-links">

            <h2>Explore</h2>

            <a href="/#services">Services</a>
            <a href="/#solutions">Solutions</a>
            <a href="/about">About us</a>
            <a href="/blogs">Blogs</a>

          </div>

          <div className="tc-pre-footer-contact">

            <h2>Get in touch</h2>

            <p>
              Have a technology challenge or project in mind?
              Let's discuss how we can help.
            </p>

            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>

            <a href="tel:+233595856187">
              +233 59 585 6187
            </a>

            <a
              href="https://wa.me/233595856187"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

          </div>

          <div className="tc-pre-footer-location">

            <h2>Find us</h2>

            <p>Accra, Weija, Ghana</p>

            <h2>Business hours</h2>

            <p>Monday–Friday</p>

            <h2>Follow us</h2>

            <div className="tc-social-icons" aria-label="Social media">

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

      {/* =========================================
          COPYRIGHT
      ========================================= */}

    <footer className="tc-footer">
  <p>
    © 2026 Zion Technologies. All rights reserved.
  </p>
</footer>

    </>
  );
}
