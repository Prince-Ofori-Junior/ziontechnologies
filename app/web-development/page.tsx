
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

const SERVICES = [
  {
    number: "01",
    title: "Business Website Design",
    description:
      "Professional and modern business websites that establish your online presence, showcase your services and help potential customers connect with your brand.",
    href: "#contact",
  },
  {
    number: "02",
    title: "E-commerce Website Development",
    description:
      "Powerful online stores with product catalogues, shopping carts, secure checkout and easy product management to help your business sell online.",
    href: "#contact",
  },
  {
    number: "03",
    title: "Landing Page Design",
    description:
      "Beautiful, conversion-focused landing pages designed to promote your products, services, campaigns and business offers.",
    href: "#contact",
  },
  {
    number: "04",
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern, attractive and user-friendly experiences that better represent your brand and business.",
    href: "#contact",
  },
  {
    number: "05",
    title: "Responsive Web Design",
    description:
      "Websites that adapt seamlessly to smartphones, tablets, laptops and desktop screens for a consistent browsing experience.",
    href: "#contact",
  },
  {
    number: "06",
    title: "Website Maintenance & SEO",
    description:
      "Keep your website updated, secure and performing well with technical maintenance, search engine optimisation and ongoing website support.",
    href: "#contact",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We learn about your business, target audience, website goals, preferred design and the features your website needs.",
  },
  {
    number: "02",
    title: "Website Design",
    description:
      "We create the website layout, visual direction and user experience to reflect your brand and make navigation intuitive.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "We transform the approved design into a functional website, testing responsiveness, loading speed, functionality and browser compatibility.",
  },
  {
    number: "04",
    title: "Launch & Maintenance",
    description:
      "We publish your website, configure essential settings and provide ongoing maintenance to keep your website running smoothly.",
  },
];

export default function DevelopmentPage() {
  const [menu, setMenu] = useState(false);
  const [devMenu, setDevMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* NAVIGATION */}
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
        <div className={`${display.variable} ${body.variable} wd`}>
          {/* HERO */}
          <section className="wd-hero">
            <div className="wd-wrap wd-hero-grid">
              <div className="wd-hero-content">
                <span className="wd-eyebrow">
                  Zion Technologies · Website Design & Development
                </span>

                <h1>
                  We Design Websites That{" "}
                  <span>Make Your Business Stand Out.</span>
                </h1>

                <p className="wd-lead">
                  We design and develop beautiful, responsive and
                  high-performing websites that strengthen your online
                  presence, showcase your brand and help your business
                  reach more customers.
                </p>

                <div className="wd-actions">
                  <a href="/#contact" className="wd-btn wd-btn-primary">
                    Get Your Website <span>→</span>
                  </a>

                  <a href="/about" className="wd-btn wd-btn-outline">
                    Discover Zion Technologies
                  </a>
                </div>
              </div>

              <div className="wd-hero-image">
                <Image
                  src="/Web Development.png"
                  alt="Professional website design and development"
                  width={900}
                  height={700}
                  priority
                />
              </div>
            </div>
          </section>

          {/* TRUST STRIP */}
          <section className="wd-trust">
            <div className="wd-wrap wd-trust-grid">
              <div className="wd-trust-item">
                <span className="wd-trust-number">01</span>
                Modern Website Designs
              </div>

              <div className="wd-trust-item">
                <span className="wd-trust-number">02</span>
                Mobile-Friendly Websites
              </div>

              <div className="wd-trust-item">
                <span className="wd-trust-number">03</span>
                Performance & SEO Focused
              </div>
            </div>
          </section>

          {/* INTRO */}
          <section className="wd-intro">
            <div className="wd-wrap wd-intro-inner">
              <span className="wd-eyebrow">
                Website Design & Development
              </span>

              <h2>Creating Websites That Work for Your Business</h2>

              <p>
                At Zion Technologies, we specialise in designing and
                developing professional websites for businesses,
                organisations, entrepreneurs and individuals. From
                business websites and landing pages to e-commerce
                platforms, we combine attractive designs, intuitive
                navigation, responsive layouts and reliable performance
                to create websites that help you establish your online
                presence and achieve your business goals.
              </p>
            </div>
          </section>

          {/* WEBSITE DESIGN & DEVELOPMENT SERVICES */}
          <section className="wd-section" id="website-services">
            <div className="wd-wrap">
              <div className="wd-section-heading">
                <span className="wd-eyebrow">What We Do</span>

                <h2>Our Website Design & Development Services</h2>

                <p>
                  From business websites to complete online stores,
                  we provide professional website design and development
                  services tailored to your brand, audience and business
                  objectives.
                </p>
              </div>

              <div className="wd-grid">
                {SERVICES.map((service) => (
                  <a
                    className="wd-card"
                    href={service.href}
                    key={service.number}
                  >
                    <span className="wd-card-number">
                      {service.number}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <span className="wd-card-link">
                      Get Started <span>→</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* WEBSITE DESIGN PROCESS */}
          <section className="wd-process">
            <div className="wd-wrap">
              <div className="wd-section-heading">
                <span className="wd-eyebrow">Our Working Process</span>

                <h2>How We Bring Your Website to Life</h2>

                <p>
                  Every successful website starts with a clear plan.
                  Our structured process takes your project from the
                  initial idea through design, development and launch.
                </p>
              </div>

              <div className="wd-process-grid">
                {PROCESS.map((step) => (
                  <div className="wd-process-item" key={step.number}>
                    <span>STEP {step.number}</span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WEBSITE DEVELOPMENT VIDEO */}
          <section className="wd-video">
            <div className="wd-wrap wd-video-grid">
              <div className="wd-video-container">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label="Website design and development presentation"
                >
                  <source
                    src="/web-development.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support HTML video.
                </video>
              </div>

              <div className="wd-video-content">
                <span className="wd-eyebrow">
                  Your Business Deserves a Great Website
                </span>

                <h2>Websites Designed to Attract, Engage and Convert</h2>

                <p>
                  Your website is often the first impression customers
                  have of your business. We create visually appealing,
                  easy-to-navigate and responsive websites that communicate
                  your brand professionally and make it easier for visitors
                  to discover your products and services.
                </p>

                <div className="wd-video-points">
                  <div className="wd-video-point">
                    <span>✓</span>
                    Professional and modern website designs
                  </div>

                  <div className="wd-video-point">
                    <span>✓</span>
                    Responsive layouts for all screen sizes
                  </div>

                  <div className="wd-video-point">
                    <span>✓</span>
                    Search engine optimisation
                  </div>

                  <div className="wd-video-point">
                    <span>✓</span>
                    Fast-loading and secure websites
                  </div>
                </div>

                <a
                  href="#contact"
                  className="wd-btn wd-btn-primary"
                >
                  Start Your Website Project →
                </a>
              </div>
            </div>
          </section>

          {/* WEBSITE SHOWCASE */}
          <section className="wd-gallery">
            <div className="wd-wrap">
              <div className="wd-section-heading">
                <span className="wd-eyebrow">Website Inspiration</span>

                <h2>Websites Designed for Different Business Needs</h2>

                <p>
                  Discover the different types of website experiences
                  we can create to help businesses build their online
                  presence and connect with their customers.
                </p>
              </div>

              <div className="wd-gallery-grid">
                <div className="wd-gallery-item">
                  <Image
                    src="/custom software2.jpg"
                    alt="Business website design concept"
                    width={600}
                    height={450}
                  />

                  <span className="wd-gallery-caption">
                    Business Websites
                  </span>
                </div>

                <div className="wd-gallery-item">
                  <Image
                    src="/Smiling Man Exploring Floating Analytics Dashboards.png"
                    alt="E-commerce website design concept"
                    width={600}
                    height={450}
                  />

                  <span className="wd-gallery-caption">
                    E-commerce Websites
                  </span>
                </div>

                <div className="wd-gallery-item">
                  <Image
                    src="/Excited Man Using Laptop (1).png"
                    alt="Modern responsive website experience"
                    width={600}
                    height={450}
                  />

                  <span className="wd-gallery-caption">
                    Modern Website Experiences
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="wd-cta">
            <div className="wd-wrap wd-cta-inner">
              <div>
                <span className="wd-eyebrow">
                  Let's Create Your Online Presence
                </span>

                <h2>Ready to Build Your Website?</h2>

                <p>
                  Whether you need a new business website, an online
                  store or a complete website redesign, Zion Technologies
                  is ready to bring your vision to life.
                </p>
              </div>

              <a href="/#contact" className="wd-btn wd-btn-light">
                Get a Website Quote →
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <section
        className="wd-pre-footer"
        id="contact"
        aria-label="Company information"
      >
        <div className="wd-pre-footer-wrap">
          <div className="wd-pre-footer-about">
            <h2>Website Design & Development</h2>

            <p>
              Zion Technologies designs and develops professional,
              responsive and SEO-friendly websites that help businesses
              establish their online presence, attract customers and
              grow their brands.
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
              Have a website project in mind? We'd be glad to hear
              from you.
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

      <footer className="wd-footer">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>
    </>
  );
}
