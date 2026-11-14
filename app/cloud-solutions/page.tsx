
"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./cloud-solutions.css";

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

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Cloud infrastructure",
    description:
      "Build a dependable foundation for your applications, databases and business systems.",
    features: ["Cloud environments", "Resource configuration", "Infrastructure planning"],
  },
  {
    number: "02",
    icon: "↗",
    title: "Cloud migration",
    description:
      "Move applications, workloads and business data into a cloud environment through a structured process.",
    features: ["Migration assessment", "Workload transfer", "Deployment support"],
  },
  {
    number: "03",
    icon: "▤",
    title: "Cloud hosting",
    description:
      "Deploy websites, APIs and digital platforms on hosting environments suited to their needs.",
    features: ["Website hosting", "Application deployment", "Database hosting"],
  },
  {
    number: "04",
    icon: "◫",
    title: "Storage & backup",
    description:
      "Create organised storage and backup approaches for important business information.",
    features: ["Cloud file storage", "Backup planning", "Data organisation"],
  },
  {
    number: "05",
    icon: "◇",
    title: "Cloud security",
    description:
      "Strengthen your cloud environment with sensible access, configuration and recovery practices.",
    features: ["Access controls", "Secure configuration", "Recovery planning"],
  },
  {
    number: "06",
    icon: "◎",
    title: "Cloud management",
    description:
      "Keep your environment maintained and aligned with changing operational requirements.",
    features: ["Environment monitoring", "Maintenance", "Technical support"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We assess your applications, existing infrastructure, business priorities and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We identify a suitable cloud approach, including architecture, hosting, security and resources.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "We configure the environment, deploy approved services and support the migration process.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We help maintain and refine your environment as your systems and business requirements evolve.",
  },
];

const useCases = [
  {
    number: "01",
    title: "Websites & platforms",
    description:
      "Host websites, APIs, portals and customer-facing digital platforms.",
  },
  {
    number: "02",
    title: "Business applications",
    description:
      "Support internal systems, operational tools and connected business applications.",
  },
  {
    number: "03",
    title: "Business data",
    description:
      "Organise databases, files, backups and information used across your organisation.",
  },
  {
    number: "04",
    title: "Growing products",
    description:
      "Prepare infrastructure for changing workloads, users and application requirements.",
  },
];

const faqs = [
  {
    question: "What are cloud solutions?",
    answer:
      "Cloud solutions use internet-accessible computing resources to host applications, store information, run databases and deliver digital services without depending entirely on local physical infrastructure.",
  },
  {
    question: "Can you migrate my existing website or application?",
    answer:
      "Yes. We can assess your application's architecture, database, dependencies and hosting requirements before recommending an appropriate migration approach.",
  },
  {
    question: "Are cloud solutions suitable for small businesses?",
    answer:
      "Yes. Cloud resources can be selected around a business's actual requirements. The right setup depends on expected usage, performance needs, security requirements and budget.",
  },
  {
    question: "Can you help with cloud backups and security?",
    answer:
      "We can help plan storage, backups, access controls, secure configuration and recovery practices. The specific approach depends on your systems and operational requirements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact Zion Technologies with a description of your application, existing infrastructure or business requirements. We can discuss the project and identify suitable next steps.",
  },
];

export default function CloudSolutionsPage() {
  const [menu, setMenu] = useState(false);
  const [devMenu, setDevMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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

      <main>
        <div className={`cs ${display.variable} ${body.variable}`}>

          {/* HERO */}
          <section className="cs-hero">
            <div className="cs-hero-grid" aria-hidden="true"></div>
            <div className="cs-hero-glow cs-glow-one"></div>
            <div className="cs-hero-glow cs-glow-two"></div>

            <div className="cs-wrap cs-hero-inner">

              {/* HERO COPY */}
              <div className="cs-hero-copy">
                <div className="cs-eyebrow">
                  <span className="cs-status-dot"></span>
                  CLOUD SOLUTIONS
                  <span className="cs-eyebrow-divider">/</span>
                  ZION TECHNOLOGIES
                </div>

                <h1>
                  Take your business
                  <span className="cs-heading-highlight"> beyond limits.</span>
                </h1>

                <p>
                  Move beyond traditional infrastructure. We design, deploy
                  and manage cloud solutions that keep your business connected,
                  protected and ready for what comes next.
                </p>

                <div className="cs-hero-actions">
                  <a href="/contact" className="cs-primary-button">
                    Build your cloud strategy <span>↗</span>
                  </a>

                  <a href="#cs-services" className="cs-secondary-link">
                    Explore our solutions <span>↓</span>
                  </a>
                </div>

                <div className="cs-hero-proof">
                  <div>
                    <span className="cs-proof-number">01</span>
                    <div>
                      <strong>Designed for you</strong>
                      <small>Business-first infrastructure</small>
                    </div>
                  </div>

                  <div>
                    <span className="cs-proof-number">02</span>
                    <div>
                      <strong>Built to scale</strong>
                      <small>Infrastructure that grows</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* CLOUD DASHBOARD VISUAL */}
              <div className="cs-hero-visual">

                {/* FLOATING CLOUD IMAGE */}
                <div className="cs-hero-floating-image">
                  <Image
                    src="/Cloud Solutions2.jpg"
                    alt="Modern cloud computing infrastructure and server technology"
                    fill
                    priority
                    sizes="(max-width: 760px) 80vw, 360px"
                  />

                  <div className="cs-floating-image-overlay"></div>

                  <span>SMART CLOUD INFRASTRUCTURE</span>
                </div>

                {/* MAIN DASHBOARD */}
                <div className="cs-dashboard">

                  <div className="cs-dashboard-header">
                    <div className="cs-dashboard-brand">
                      <span className="cs-dashboard-logo">Z</span>
                      <div>
                        <strong>Cloud workspace</strong>
                        <small>Infrastructure dashboard</small>
                      </div>
                    </div>

                    <span className="cs-dashboard-menu">•••</span>
                  </div>

                  <div className="cs-dashboard-status">
                    <div>
                      <span className="cs-status-label">
                        INFRASTRUCTURE STATUS
                      </span>
                      <strong>
                        <i></i> All systems operational
                      </strong>
                    </div>

                    <span className="cs-status-live">LIVE</span>
                  </div>

                  <div className="cs-cloud-main">
                    <div className="cs-cloud-orbit cs-orbit-one"></div>
                    <div className="cs-cloud-orbit cs-orbit-two"></div>

                    <div className="cs-cloud-icon">
                      <span>☁</span>
                    </div>

                    <div className="cs-cloud-caption">
                      <strong>Your business in the cloud.</strong>
                      <span>Connected. Protected. Scalable.</span>
                    </div>

                    <div className="cs-cloud-particle cs-particle-one"></div>
                    <div className="cs-cloud-particle cs-particle-two"></div>
                    <div className="cs-cloud-particle cs-particle-three"></div>
                  </div>

                  <div className="cs-dashboard-metrics">
                    <div className="cs-metric-card">
                      <span className="cs-metric-icon">▤</span>
                      <small>APPLICATIONS</small>
                      <strong>Connected</strong>
                      <span className="cs-metric-note">
                        Web · API · Software
                      </span>
                    </div>

                    <div className="cs-metric-card">
                      <span className="cs-metric-icon">◫</span>
                      <small>CLOUD STORAGE</small>
                      <strong>Organised</strong>
                      <span className="cs-metric-note">
                        Files · Databases
                      </span>
                    </div>

                    <div className="cs-metric-card">
                      <span className="cs-metric-icon">◇</span>
                      <small>SECURITY</small>
                      <strong>Protected</strong>
                      <span className="cs-metric-note">
                        Access · Backups
                      </span>
                    </div>
                  </div>

                  <div className="cs-dashboard-footer">
                    <span><i></i> CLOUD INFRASTRUCTURE</span>
                    <span>ZT / 001</span>
                  </div>
                </div>

                {/* FLOATING CARDS */}
                <div className="cs-float-card cs-float-top">
                  <span className="cs-float-icon">↗</span>
                  <div>
                    <small>READY FOR GROWTH</small>
                    <strong>Scale without limits</strong>
                  </div>
                </div>

                <div className="cs-float-card cs-float-bottom">
                  <span className="cs-float-icon cs-security-icon">◇</span>
                  <div>
                    <small>BUILT-IN PRIORITY</small>
                    <strong>Security by design</strong>
                  </div>
                  <span className="cs-float-check">✓</span>
                </div>

                <div className="cs-visual-index">
                  01 <span>/</span> CLOUD SYSTEMS
                </div>
              </div>
            </div>

            <div className="cs-hero-bottom">
              <div className="cs-wrap">
                <span>SMART INFRASTRUCTURE</span>
                <i></i>
                <span>SECURE HOSTING</span>
                <i></i>
                <span>CLOUD MIGRATION</span>
                <i></i>
                <span>DATA PROTECTION</span>
                <i></i>
                <span>MANAGED SERVICES</span>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="cs-services" id="cs-services">
            <div className="cs-wrap">
              <div className="cs-section-heading">
                <div>
                  <span className="cs-kicker">WHAT WE DO</span>
                  <h2>
                    Cloud capabilities.<br />
                    <span>Built for business.</span>
                  </h2>
                </div>

                <p>
                  Practical cloud services that help you deploy, connect,
                  protect and manage the technology your organisation depends on.
                </p>
              </div>

              <div className="cs-service-grid">
                {services.map((service) => (
                  <article className="cs-service-card" key={service.number}>
                    <div className="cs-service-card-top">
                      <span className="cs-service-number">
                        {service.number}
                      </span>
                      <span className="cs-service-icon">
                        {service.icon}
                      </span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <ul>
                      {service.features.map((feature) => (
                        <li key={feature}>
                          <span>+</span>{feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      <span>Discuss this service</span>
                      <i>↗</i>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* INFRASTRUCTURE FEATURE */}
          <section className="cs-platform">
            <div className="cs-wrap cs-platform-layout">
              <div className="cs-platform-image">
                <Image
                  src="/Cloud Solutions1.jpg"
                  alt="Modern cloud computing infrastructure"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />

                <div className="cs-platform-image-shade"></div>

                <div className="cs-platform-image-caption">
                  <span>THE FOUNDATION</span>
                  <strong>One connected environment.</strong>
                </div>

                <div className="cs-platform-image-mark">ZT / 02</div>
              </div>

              <div className="cs-platform-copy">
                <span className="cs-kicker">A CONNECTED APPROACH</span>

                <h2>
                  Bring your digital environment
                  <span> together.</span>
                </h2>

                <p>
                  Instead of treating hosting, applications, databases and
                  storage as separate concerns, we help you plan how they
                  work together. The result is a more organised foundation
                  for delivering and managing digital services.
                </p>

                <div className="cs-platform-points">
                  <div>
                    <span>01</span>
                    <strong>Connected applications</strong>
                    <p>
                      Bring your websites, APIs and business tools into a
                      coordinated environment.
                    </p>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>Organised data</strong>
                    <p>
                      Plan how your databases, files and backups are stored
                      and accessed.
                    </p>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Managed infrastructure</strong>
                    <p>
                      Build around the resources and operational needs of
                      your organisation.
                    </p>
                  </div>
                </div>

                <a href="/contact" className="cs-inline-link">
                  Discuss your infrastructure <span>↗</span>
                </a>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section className="cs-process">
            <div className="cs-wrap">
              <div className="cs-section-heading cs-process-heading">
                <div>
                  <span className="cs-kicker">HOW WE WORK</span>
                  <h2>
                    A clear path from<br />
                    <span>plan to performance.</span>
                  </h2>
                </div>

                <p>
                  Every cloud project starts with understanding what you need.
                  We follow a considered process to make implementation
                  structured and manageable.
                </p>
              </div>

              <div className="cs-process-grid">
                {process.map((step, index) => (
                  <article className="cs-process-step" key={step.number}>
                    <div className="cs-process-step-top">
                      <span>{step.number}</span>
                      {index !== process.length - 1 && <i></i>}
                    </div>

                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* SECURITY */}
          <section className="cs-security">
            <div className="cs-wrap cs-security-panel">
              <div className="cs-security-copy">
                <span className="cs-kicker">PROTECTION BY DESIGN</span>

                <h2>
                  Build on a foundation
                  <span> you can trust.</span>
                </h2>

                <p>
                  Security and reliability should be considered from the
                  beginning of a cloud project. We help plan the essential
                  safeguards that support responsible cloud operations.
                </p>

                <div className="cs-security-features">
                  <div><span>01</span> Access management</div>
                  <div><span>02</span> Backup strategies</div>
                  <div><span>03</span> Secure configuration</div>
                  <div><span>04</span> Recovery planning</div>
                </div>

                <a href="/contact" className="cs-security-link">
                  Talk about cloud security <span>↗</span>
                </a>
              </div>

              <div className="cs-security-visual">
                <Image
                  src="/Cloud Solutions00.jpg"
                  alt="Digital infrastructure and cloud technology"
                  fill
                  sizes="(max-width: 760px) 100vw, 45vw"
                />

                <div className="cs-security-image-overlay"></div>

                <div className="cs-security-shield">
                  <span>◇</span>
                  <strong>SECURITY</strong>
                  <small>BUILT INTO THE PLAN</small>
                </div>

                <div className="cs-security-corner">
                  ZT / PROTECTION
                </div>
              </div>
            </div>
          </section>

          {/* CLOUD ENVIRONMENTS — VISUAL IMAGE FEATURE */}
          <section className="cs-image-story">
            <div className="cs-wrap">
              <div className="cs-image-story-heading">
                <div>
                  <span className="cs-kicker">BEHIND THE TECHNOLOGY</span>
                  <h2>
                    Infrastructure that<br />
                    <span>moves business forward.</span>
                  </h2>
                </div>

                <p>
                  From reliable computing environments to connected digital
                  infrastructure, we help create the technical foundation
                  behind modern business operations.
                </p>
              </div>

              <div className="cs-image-story-grid">
                <div className="cs-story-image cs-story-image-main">
                  <Image
                    src="/Cloud Solutions2.jpg"
                    alt="Modern cloud computing data centre with server infrastructure"
                    fill
                    sizes="(max-width: 760px) 100vw, 65vw"
                  />

                  <div className="cs-story-image-overlay"></div>

                  <div className="cs-story-image-content">
                    <span>01 / CLOUD INFRASTRUCTURE</span>
                    <h3>Powering your digital operations.</h3>
                  </div>

                  <span className="cs-story-image-index">ZT / 03</span>
                </div>

                <div className="cs-story-side">
                  <div className="cs-story-image cs-story-image-secondary">
                    <Image
                      src="/Cloud Solutions3.jpg"
                      alt="Connected cloud technology and modern business network"
                      fill
                      sizes="(max-width: 760px) 100vw, 35vw"
                    />

                    <div className="cs-story-image-overlay"></div>

                    <div className="cs-story-image-content">
                      <span>02 / CONNECTED SYSTEMS</span>
                      <h3>Everything working together.</h3>
                    </div>
                  </div>

                  <div className="cs-story-note">
                    <span className="cs-story-note-icon">↗</span>

                    <div>
                      <strong>Built around your needs.</strong>
                      <p>
                        Practical cloud environments designed around your
                        applications, data and business requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section className="cs-use-cases">
            <div className="cs-wrap">
              <div className="cs-use-heading">
                <span className="cs-kicker">WHERE CLOUD FITS</span>
                <h2>
                  Technology that supports<br />
                  <span>the way you work.</span>
                </h2>
              </div>

              <div className="cs-use-grid">
                {useCases.map((item) => (
                  <article className="cs-use-item" key={item.number}>
                    <span>{item.number}</span>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <i>↗</i>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="cs-faq">
            <div className="cs-wrap cs-faq-layout">
              <div className="cs-faq-intro">
                <span className="cs-kicker">NEED TO KNOW</span>

                <h2>
                  Questions about<br />
                  <span>the cloud?</span>
                </h2>

                <p>
                  A few useful answers to help you understand cloud
                  infrastructure, hosting and migration.
                </p>

                <a href="/contact" className="cs-inline-link">
                  Speak with our team <span>↗</span>
                </a>
              </div>

              <div className="cs-faq-list">
                {faqs.map((item, index) => (
                  <article
                    className={`cs-faq-item ${
                      openFaq === index ? "active" : ""
                    }`}
                    key={item.question}
                  >
                    <button
                      type="button"
                      aria-expanded={openFaq === index}
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <span>{item.question}</span>
                      <i>{openFaq === index ? "−" : "+"}</i>
                    </button>

                    {openFaq === index && <p>{item.answer}</p>}
                  </article>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* COMPANY FOOTER */}
      <section
        className="cs-pre-footer"
        id="contact"
        aria-label="Company information"
      >
        <div className="cs-pre-footer-wrap">
          <div>
            <h2>Cloud Solutions</h2>
            <p>
              Cloud infrastructure, migration, hosting and management
              solutions for a more flexible digital foundation.
            </p>
          </div>

          <div>
            <h2>Explore</h2>
            <a href="/#services">Services</a>
            <a href="/#solutions">Solutions</a>
            <a href="/about">About us</a>
            <a href="/blogs">Blogs</a>
          </div>

          <div>
            <h2>Get in touch</h2>
            <p>
              Have a cloud project in mind? Contact our team to discuss
              your requirements.
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

          <div>
            <h2>Find us</h2>
            <p>Accra, Weija</p>

            <h2 className="cs-footer-subheading">Business hours</h2>
            <p>Monday–Friday</p>
          </div>
        </div>
      </section>

      <footer className="cs-footer">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>
    </>
  );
}
