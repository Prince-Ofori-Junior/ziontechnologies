
"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./about.css";

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

// Company Values with SVG Icons
const values = [
  {
    t: "Quality first",
    d: "Clean code, tested applications and careful design in every project.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    t: "Transparent pricing",
    d: "Clear quotes with no hidden fees, agreed before we start.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
        <path d="M16 15h2" />
      </svg>
    ),
  },
  {
    t: "Client partnership",
    d: "We listen first, then solve your real business problems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3" />
        <path d="M8 11c-1.7 0-3-1.3-3-3s1.3-3 3-3" />
        <circle cx="12" cy="8" r="4" />
        <path d="M2 21c0-3.3 4.5-5 10-5s10 1.7 10 5" />
      </svg>
    ),
  },
  {
    t: "Ongoing support",
    d: "Launch is the beginning. We stay on after delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13a8 8 0 0 1 16 0" />
        <rect x="2" y="12" width="4" height="7" rx="2" />
        <rect x="18" y="12" width="4" height="7" rx="2" />
        <path d="M18 19a6 6 0 0 1-6 3h-2" />
      </svg>
    ),
  },
];

// Services
const services = [
  {
    t: "Web development",
    d: "Websites and web applications built for performance and scale.",
  },
  {
    t: "Mobile applications",
    d: "Apps for iOS and Android.",
  },
  {
    t: "Desktop software",
    d: "Applications for Windows, macOS and Linux.",
  },
  {
    t: "Cloud solutions",
    d: "Infrastructure, migration and managed hosting.",
  },
  {
    t: "UI/UX design",
    d: "Interfaces people understand on the first try.",
  },
  {
    t: "Brand & print",
    d: "Logos, brochures and company profiles.",
  },
];

// Why Choose Us
const reasons = [
  [
    "Local expertise",
    "We understand how business works in Ghana and across Africa.",
  ],
  [
    "Clear communication",
    "One point of contact, regular updates, honest timelines.",
  ],
  [
    "Maintainable code",
    "Well documented, so your team can extend it.",
  ],
  [
    "Fair rates",
    "Quality work at prices growing businesses can plan for.",
  ],
];

// Team Members
const team = [
  {
    name: "Team Member One",
    role: "Chief Executive Officer",
    image: "/Member1.jpg",
  },
  {
    name: "Team Member Two",
    role: "Lead Software Engineer",
    image: "/Member2.png",
  },
  {
    name: "Team Member Three",
    role: "UI/UX Designer",
    image: "/Menber3.jpg",
  },
  {
    name: "Team Member Four",
    role: "Project Manager",
    image: "/Member4.jpg",
  },
];

export default function AboutPage() {
  const [menu, setMenu] = useState(false);
  const [devMenu, setDevMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="site-header">
        <nav className="main-nav" aria-label="Main navigation">

          <a
            className="brand"
            href="/"
            aria-label="Zion Technologies home"
          >
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

            <a
              href="/#solutions"
              onClick={() => setMenu(false)}
            >
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

            {/* Services Dropdown */}
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

          {/* Desktop Navigation Actions */}
          <div className="nav-actions">
            <a href={`mailto:${EMAIL}`}>Contact</a>

            <a
              className="nav-cta nav-cta--accent"
              href="/#contact"
            >
              Get a quote
            </a>
          </div>

          {/* Mobile Hamburger */}
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

     {/* ================= WORLD-CLASS ABOUT PAGE ================= */}

<main>
  <div className={`ab ${display.variable} ${body.variable}`}>

    {/* HERO */}
    <section className="ab-hero">
      <div className="ab-wrap">

        <div className="ab-hero-grid">

          <div className="ab-hero-content">
            <span className="ab-eyebrow">
              <span className="ab-eyebrow-dot" />
              WHO WE ARE · ZION TECHNOLOGIES
            </span>

            <h1>
              Technology should move your business <span>forward.</span>
            </h1>

            <p className="ab-hero-description">
              We turn ambitious ideas into dependable digital products.
              From custom software to intelligent business systems, we build
              technology that solves real problems and creates room to grow.
            </p>

            <div className="ab-hero-actions">
              <a href="/#contact" className="ab-primary-btn">
                Start a conversation <span>↗</span>
              </a>
              <a href="#our-story" className="ab-text-link">
                Discover our story <span>↓</span>
              </a>
            </div>

            <div className="ab-hero-proof">
              <div className="ab-proof-avatars">
                {team.slice(0, 3).map((member) => (
                  <Image
                    key={member.name}
                    src={member.image}
                    alt=""
                    width={42}
                    height={42}
                  />
                ))}
              </div>

              <div>
                <strong>Built around people.</strong>
                <span>Driven by technology and purpose.</span>
              </div>
            </div>
          </div>

          <div className="ab-hero-visual">

            <div className="ab-hero-image-main">
              <Image
                src="/Member1.jpg"
                alt="Zion Technologies team member"
                fill
                priority
                sizes="(max-width: 760px) 90vw, 45vw"
              />
              <div className="ab-image-shade" />

              <div className="ab-image-caption">
                <span>THE PEOPLE BEHIND THE TECHNOLOGY</span>
                <strong>Ideas into impact.</strong>
              </div>
            </div>

            <div className="ab-floating-card ab-floating-card-top">
              <span className="ab-floating-icon">✳</span>
              <div>
                <strong>Purpose-built</strong>
                <span>Digital solutions</span>
              </div>
            </div>

            <div className="ab-floating-card ab-floating-card-bottom">
              <strong>2020</strong>
              <span>Our journey began in Accra</span>
            </div>

            <div className="ab-hero-decoration" />
          </div>

        </div>

        <div className="ab-hero-bottom">
          <span>INNOVATION WITH PURPOSE</span>
          <span>SOFTWARE · DESIGN · TECHNOLOGY</span>
          <span>ACCRA, GHANA</span>
        </div>

      </div>
    </section>

    {/* COMPANY INTRODUCTION */}
    <section className="ab-intro-section">
      <div className="ab-wrap ab-intro-grid">

        <div className="ab-intro-label">
          <span className="ab-section-index">01 / THE COMPANY</span>
          <span className="ab-small-line" />
          <p>Technology with a clear direction.</p>
        </div>

        <div className="ab-intro-content">
          <h2>
            We are more than a technology provider. We are a partner in
            <span> progress.</span>
          </h2>

          <p>
            Zion Technologies is a Ghana-based technology company focused on
            building digital products and software solutions that help
            businesses operate better, serve customers effectively and
            prepare for what comes next.
          </p>

          <p>
            We combine practical thinking, thoughtful design and modern
            engineering to create solutions that are useful today and
            adaptable for tomorrow.
          </p>
        </div>

      </div>
    </section>

    {/* STATS */}
    <section className="ab-stats-section">
      <div className="ab-wrap">

        <div className="ab-stats-heading">
          <span>OUR JOURNEY IN NUMBERS</span>
          <p>Progress built through ideas, people and meaningful work.</p>
        </div>

        <div className="ab-stats-grid">
          <div className="ab-stat">
            <strong>2020</strong>
            <span>Year established</span>
          </div>

          <div className="ab-stat">
            <strong>50<span>+</span></strong>
            <span>Projects delivered</span>
          </div>

          <div className="ab-stat">
            <strong>6</strong>
            <span>Technology capabilities</span>
          </div>

          <div className="ab-stat">
            <strong>100<span>%</span></strong>
            <span>Commitment to quality</span>
          </div>
        </div>

      </div>
    </section>

    {/* STORY */}
    <section className="ab-story-section" id="our-story">
      <div className="ab-wrap ab-story-grid">

        <div className="ab-story-visual">
          <div className="ab-story-video">
            <video
              src="/story.mp4"
              poster="/Orange ZionTechnologie.png"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Zion Technologies company story"
            />
          </div>

          <div className="ab-story-stamp">
            <span>OUR</span>
            <strong>STORY</strong>
            <span>EST. 2020</span>
          </div>
        </div>

        <div className="ab-story-content">
          <span className="ab-section-index">02 / OUR STORY</span>

          <h2>
            A vision to make technology work <span>for everyone.</span>
          </h2>

          <p>
            Our journey began in 2020 with a simple idea: businesses deserve
            technology that makes their work easier, not more complicated.
          </p>

          <p>
            We started by helping businesses establish their digital
            presence. Over time, our work expanded into custom web
            applications, mobile products, desktop software, cloud
            infrastructure and ongoing technical support.
          </p>

          <p>
            Today, that same commitment drives us: understand the problem,
            build the right solution and support it beyond launch.
          </p>

          <a href="/#contact" className="ab-story-link">
            Build something with us <span>↗</span>
          </a>
        </div>

      </div>
    </section>

    {/* MISSION AND VISION */}
    <section className="ab-purpose-section">
      <div className="ab-wrap">

        <div className="ab-purpose-heading">
          <span className="ab-section-index">03 / OUR PURPOSE</span>
          <h2>What drives everything we build.</h2>
        </div>

        <div className="ab-purpose-grid">

          <article className="ab-purpose-card ab-purpose-primary">
            <span className="ab-purpose-number">01</span>
            <span className="ab-purpose-symbol">↗</span>
            <span className="ab-purpose-label">OUR MISSION</span>

            <h3>Empowering growth through technology.</h3>

            <p>
              To empower businesses with reliable, accessible and
              innovative technology that improves operations, creates
              opportunities and drives lasting success.
            </p>
          </article>

          <article className="ab-purpose-card ab-purpose-secondary">
            <span className="ab-purpose-number">02</span>
            <span className="ab-purpose-symbol">◎</span>
            <span className="ab-purpose-label">OUR VISION</span>

            <h3>Building a smarter digital future.</h3>

            <p>
              To become a trusted technology partner, recognised for
              creating meaningful digital solutions that help businesses
              and communities thrive.
            </p>
          </article>

        </div>
      </div>
    </section>

    {/* VALUES */}
    <section className="ab-values-section">
      <div className="ab-wrap">

        <div className="ab-section-heading">
          <div>
            <span className="ab-section-index">04 / WHAT WE BELIEVE</span>
            <h2>Our values shape every solution.</h2>
          </div>

          <p>
            The principles behind how we think, work, collaborate and
            deliver.
          </p>
        </div>

        <div className="ab-values-grid">
          {values.map((value, index) => (
            <article className="ab-value-card" key={value.t}>
              <div className="ab-value-card-top">
                <span>0{index + 1}</span>
                <div className="ab-value-icon">{value.icon}</div>
              </div>

              <h3>{value.t}</h3>
              <p>{value.d}</p>

              <span className="ab-value-arrow">↗</span>
            </article>
          ))}
        </div>

      </div>
    </section>

    {/* CAPABILITIES */}
    <section className="ab-capabilities-section" id="services">
      <div className="ab-wrap">

        <div className="ab-capabilities-heading">
          <span className="ab-section-index">05 / WHAT WE DO</span>

          <h2>
            The capabilities to turn your next idea into reality.
          </h2>

          <p>
            From the first concept to the finished product, we bring
            together the skills needed to build and support digital
            solutions.
          </p>
        </div>

        <div className="ab-capabilities-grid">
          {services
            .filter((service) => service.t !== "Brand & print")
            .map((service, index) => (
              <article className="ab-capability-card" key={service.t}>
                <span className="ab-capability-number">
                  0{index + 1}
                </span>

                <div>
                  <h3>{service.t}</h3>
                  <p>{service.d}</p>
                </div>

                <span className="ab-capability-arrow">↗</span>
              </article>
            ))}
        </div>

        <a href="/#services" className="ab-capabilities-link">
          Explore our services <span>↗</span>
        </a>

      </div>
    </section>

    {/* WHY ZION */}
    <section className="ab-difference-section">
      <div className="ab-wrap ab-difference-grid">

        <div className="ab-difference-intro">
          <span className="ab-section-index">06 / THE ZION DIFFERENCE</span>

          <h2>
            Good technology is built on <span>understanding.</span>
          </h2>

          <p>
            We believe the best solutions start with listening. We take
            time to understand your goals, your users and the challenges
            your business needs to overcome.
          </p>

          <a href="/#contact" className="ab-primary-btn">
            Let's work together <span>↗</span>
          </a>
        </div>

        <div className="ab-difference-list">
          {reasons.map(([title, description], index) => (
            <article className="ab-difference-item" key={title}>
              <span>0{index + 1}</span>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>

              <span className="ab-difference-arrow">↗</span>
            </article>
          ))}
        </div>

      </div>
    </section>

    {/* TEAM */}
    <section className="ab-team-section">
      <div className="ab-wrap">

        <div className="ab-section-heading ab-team-heading">
          <div>
            <span className="ab-section-index">07 / THE PEOPLE</span>
            <h2>Meet the minds behind the work.</h2>
          </div>

          <p>
            Different skills. Shared ambition. One commitment to building
            technology that makes a difference.
          </p>
        </div>

        <div className="ab-team-grid">
          {team.map((member, index) => (
            <article className="ab-team-card" key={member.name}>

              <div className="ab-team-image">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 600px) 85vw, (max-width: 1000px) 45vw, 25vw"
                />

                <span className="ab-team-number">
                  0{index + 1}
                </span>
              </div>

              <div className="ab-team-info">
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>

                <span>↗</span>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>

    {/* FINAL CTA */}
    <section className="ab-final-cta">
      <div className="ab-wrap">

        <div className="ab-final-cta-inner">
          <div className="ab-final-cta-content">
            <span>YOUR NEXT CHAPTER STARTS HERE</span>

            <h2>
              Have an idea? Let's build something <em>meaningful.</em>
            </h2>

            <p>
              Tell us about your goals. We'll help you explore the right
              technology and take the next step.
            </p>

            <a href="/#contact" className="ab-final-cta-btn">
              Start your project <span>↗</span>
            </a>
          </div>

          <div className="ab-final-decoration">
            <div className="ab-orbit ab-orbit-one" />
            <div className="ab-orbit ab-orbit-two" />
            <div className="ab-orbit-core">Z</div>
          </div>
        </div>

      </div>
    </section>

  </div>
</main>
      {/* ================= SHARED FOOTER ================= */}

      <section className="pre-footer" id="contact" aria-label="Company information">

        <div className="pre-footer-about">
          <h2>Software development</h2>
          <p>
            We design and build tailored web applications, mobile apps,
            and business systems that help teams work smarter and grow.
          </p>
        </div>

        <div className="pre-footer-links">
          <h2>Explore</h2>
          <a href="/#services">Services</a>
          <a href="/#solutions">Solutions</a>
          <a href="/about">About us</a>
          <a href="/blogs">Blogs</a>
        </div>

        <div className="pre-footer-contact">
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

        <div className="pre-footer-location">
          <h2>Find us</h2>
          <p>Accra, Weija</p>

          <h2>Business hours</h2>
          <p>Monday–Friday</p>

          <h2>Follow us</h2>

          <div className="social-icons" aria-label="Social media">

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
                <path d="M19.6 6.3a5.8 5.8 0 0 1-3.5-1.2 5.8 5.8 0 0 1-1.8-3.5h-3.7v14.1a3.1 3.1 0 1 1-3.1-3.1c.5 0 .9.1 1.3.3V9.1a7 7 0 1 0 5.5 6.8V8.7a9.4 9.4 0 0 0 5.3 1.7V6.7c0-.1 0-.3 0-.4Z"/>
              </svg>
            </a>

          </div>
        </div>

      </section>

      {/* Copyright */}
      <footer id="about">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>

    </>
  );
}
