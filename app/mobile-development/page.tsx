
"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./mobile-development.css";

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
    icon: "▣",
    title: "Android App Development",
    description:
      "Custom Android applications designed to deliver reliable performance, intuitive navigation and engaging experiences across Android smartphones and tablets.",
  },
  {
    number: "02",
    icon: "◉",
    title: "iOS App Development",
    description:
      "Modern iPhone and iPad applications built around Apple's platform conventions, usability standards and expectations for a polished mobile experience.",
  },
  {
    number: "03",
    icon: "⇄",
    title: "Cross-Platform Development",
    description:
      "Develop applications for Android and iOS using shared technologies, helping streamline development and maintain a consistent experience across platforms.",
  },
  {
    number: "04",
    icon: "✳",
    title: "Mobile UI/UX Design",
    description:
      "Thoughtfully designed mobile interfaces, intuitive navigation, interactive components and user journeys that make applications easy to use.",
  },
  {
    number: "05",
    icon: "⌘",
    title: "API & Third-Party Integration",
    description:
      "Connect mobile applications to backend services, databases, payment gateways, authentication systems and other essential integrations.",
  },
  {
    number: "06",
    icon: "↻",
    title: "App Maintenance & Support",
    description:
      "Ongoing application updates, bug fixes, compatibility improvements and performance optimisation to keep your mobile app reliable.",
  },
];

const PLATFORMS = [
  {
    label: "PLATFORM 01",
    title: "Android Applications",
    description:
      "Reach Android users with applications designed for the devices and experiences they use every day. We focus on usability, performance and compatibility.",
    features: [
      "Custom Android application development",
      "Smartphone and tablet compatibility",
      "API and backend connectivity",
      "Google Play publishing assistance",
    ],
  },
  {
    label: "PLATFORM 02",
    title: "iOS Applications",
    description:
      "Deliver polished mobile experiences for Apple's ecosystem with carefully considered interfaces, smooth interactions and dependable functionality.",
    features: [
      "Custom iPhone and iPad applications",
      "iOS interface and interaction design",
      "Backend and third-party integrations",
      "App Store publishing assistance",
    ],
  },
];

const CAPABILITIES = [
  {
    icon: "✦",
    title: "Intuitive Interfaces",
    description:
      "Clear navigation and thoughtfully designed screens that make applications easy to use.",
  },
  {
    icon: "⚡",
    title: "Performance Optimisation",
    description:
      "Efficient application architecture and performance-focused development.",
  },
  {
    icon: "🔒",
    title: "Application Security",
    description:
      "Security-conscious development practices and appropriate data protection measures.",
  },
  {
    icon: "☁",
    title: "Backend Integration",
    description:
      "Connect applications with APIs, databases, payment services and cloud infrastructure.",
  },
  {
    icon: "◈",
    title: "Push Notifications",
    description:
      "Notification functionality to support timely updates and user engagement.",
  },
  {
    icon: "↗",
    title: "Scalable Architecture",
    description:
      "Build application foundations that can accommodate new features and growing usage.",
  },
  {
    icon: "⌁",
    title: "Device Compatibility",
    description:
      "Consider screen sizes, operating system versions and device-specific behaviour.",
  },
  {
    icon: "✓",
    title: "Testing & Quality",
    description:
      "Test application workflows, usability and functionality before release.",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We discuss your app idea, target audience, business objectives, required features and technical requirements before defining the project scope.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "We plan the user journeys, application structure and interface designs to create an intuitive experience for your intended users.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We develop the application, implement its features, connect the required services and build the functionality defined in the project scope.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We test application functionality, resolve issues, prepare release builds and assist with the relevant app store submission process.",
  },
];

const PROJECTS = [
  {
    image: "/Mobile Application.jpg",
    alt: "Mobile application design and development",
    title: "Custom Mobile Applications",
    description:
      "Purpose-built mobile experiences for business and everyday needs.",
  },
  {
    image: "/Mobile Application1.jpg",
    alt: "Android and iOS mobile application interface",
    title: "Android & iOS Experiences",
    description:
      "Applications designed for intuitive interaction across mobile platforms.",
  },
  {
    image: "/Excited Man Using Laptop (1).png",
    alt: "Mobile application development workspace",
    title: "Application Development",
    description:
      "From initial planning to application testing and deployment.",
  },
];

const FAQS = [
  {
    question: "How much does mobile app development cost in Ghana?",
    answer:
      "The cost depends on the application's features, design complexity, platforms, integrations and development requirements. We assess your project and provide a quotation based on its scope.",
  },
  {
    question: "Can you develop applications for Android and iOS?",
    answer:
      "Yes. We offer Android development, iOS development and cross-platform application development. The recommended approach depends on your audience, requirements and budget.",
  },
  {
    question: "How long does it take to develop a mobile application?",
    answer:
      "Timelines depend on the number of features, design requirements, integrations and testing needs. We establish a project timeline after understanding the requirements.",
  },
  {
    question: "Can you integrate payments into a mobile application?",
    answer:
      "Yes. Depending on your requirements, mobile applications can integrate payment gateways and payment services, subject to provider availability, approval and technical requirements.",
  },
  {
    question: "Do you provide mobile app maintenance?",
    answer:
      "Yes. We can provide maintenance, bug fixes, compatibility updates, performance improvements and additional feature development after launch.",
  },
  {
    question: "Can you help publish my app on Google Play and the App Store?",
    answer:
      "We can assist with preparing application builds, store listings and submission requirements. Publishing is subject to the relevant platform's developer account requirements and review approval.",
  },
];

export default function MobileDevelopmentPage() {
  const [menu, setMenu] = useState(false);
  const [devMenu, setDevMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
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
        <div className={`${display.variable} ${body.variable} md`}>
          {/* HERO */}
          <section className="md-hero">
            <div className="md-wrap md-hero-grid">
              <div className="md-hero-content">
                <span className="md-kicker">
                  Zion Technologies · Mobile App Development
                </span>

                <h1>
                  Mobile Apps Built to{" "}
                  <span>Connect, Engage & Grow.</span>
                </h1>

                <p className="md-lead">
                  We design and develop modern Android and iOS
                  applications that bring your ideas to life,
                  simplify everyday experiences and help businesses
                  connect with customers wherever they are.
                </p>

                <div className="md-actions">
                  <a href="/#contact" className="md-btn">
                    Start Your App Project <span>→</span>
                  </a>

                  <a href="#mobile-services" className="md-btn md-btn-outline">
                    Explore Our Services
                  </a>
                </div>

                <div className="md-hero-note">
                  <span></span>
                  Android · iOS · Cross-platform applications
                </div>
              </div>

              <div className="md-hero-visual">
                <div className="md-hero-image">
                  <Image
                    src="/Mobile Application.jpg"
                    alt="Custom mobile application development"
                    width={900}
                    height={1000}
                    priority
                  />
                </div>

                <div className="md-floating-card">
                  <div className="md-floating-icon">✦</div>
                  <div>
                    <strong>Designed Around Users</strong>
                    <small>Thoughtful mobile experiences</small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TRUST STRIP */}
          <section className="md-trust">
            <div className="md-wrap md-trust-grid">
              <div className="md-trust-item">
                <span className="md-trust-number">01</span>
                User-focused app experiences
              </div>

              <div className="md-trust-item">
                <span className="md-trust-number">02</span>
                Android & iOS development
              </div>

              <div className="md-trust-item">
                <span className="md-trust-number">03</span>
                Development & ongoing support
              </div>
            </div>
          </section>

          {/* INTRODUCTION */}
          <section className="md-intro">
            <div className="md-intro-inner">
              <span className="md-kicker">What We Build</span>

              <h2>Turning Mobile App Ideas Into Real Experiences</h2>

              <p>
                At Zion Technologies, we help businesses, startups,
                organisations and individuals transform their ideas
                into functional mobile applications. From initial
                concept and interface design to development,
                integrations, testing and deployment, we focus on
                creating applications that are practical, intuitive
                and built around the needs of their users.
              </p>
            </div>
          </section>

          {/* SERVICES */}
          <section className="md-services" id="mobile-services">
            <div className="md-wrap">
              <div className="md-section-heading">
                <span className="md-kicker">Our Expertise</span>

                <h2>Mobile App Development Services</h2>

                <p>
                  Whether you are launching a new product or improving
                  an existing application, we provide mobile development
                  services designed around your objectives.
                </p>
              </div>

              <div className="md-grid">
                {SERVICES.map((service) => (
                  <article className="md-card" key={service.number}>
                    <span className="md-card-number">
                      {service.number}
                    </span>

                    <div className="md-card-icon">
                      {service.icon}
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <a
                      href="/#contact"
                      className="md-card-link"
                    >
                      Discuss this service <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* MOBILE PLATFORMS */}
          <section className="md-platforms">
            <div className="md-wrap">
              <div className="md-section-heading">
                <span className="md-kicker">Mobile Platforms</span>

                <h2>Applications for the Platforms Your Customers Use</h2>

                <p>
                  Choose the platform that best fits your audience,
                  business model and application requirements.
                </p>
              </div>

              <div className="md-platform-grid">
                {PLATFORMS.map((platform) => (
                  <article
                    className="md-platform-card"
                    key={platform.title}
                  >
                    <span className="md-platform-label">
                      {platform.label}
                    </span>

                    <h3>{platform.title}</h3>

                    <p>{platform.description}</p>

                    <ul className="md-platform-list">
                      {platform.features.map((feature) => (
                        <li key={feature}>
                          <span>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* DEVELOPMENT CAPABILITIES */}
          <section className="md-capabilities">
            <div className="md-wrap">
              <div className="md-section-heading">
                <span className="md-kicker">
                  Built With Purpose
                </span>

                <h2>What Goes Into a Great Mobile Application?</h2>

                <p>
                  A successful mobile application requires more than
                  attractive screens. We consider the functionality,
                  performance, security and experience behind every
                  interaction.
                </p>
              </div>

              <div className="md-capability-grid">
                {CAPABILITIES.map((item) => (
                  <article
                    className="md-capability"
                    key={item.title}
                  >
                    <span>{item.icon}</span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* DEVELOPMENT PROCESS */}
          <section className="md-process">
            <div className="md-wrap">
              <div className="md-section-heading">
                <span className="md-kicker">How We Work</span>

                <h2>From Your Idea to a Published Application</h2>

                <p>
                  We follow a structured development process to
                  understand your requirements, create the right
                  experience and deliver a reliable mobile application.
                </p>
              </div>

              <div className="md-process-grid">
                {PROCESS.map((step) => (
                  <article
                    className="md-process-item"
                    key={step.number}
                  >
                    <span>STEP {step.number}</span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECT SHOWCASE */}
          <section className="md-showcase">
            <div className="md-wrap">
              <div className="md-section-heading">
                <span className="md-kicker">Our Work</span>

                <h2>Exploring Mobile Application Experiences</h2>

                <p>
                  From intuitive interfaces to feature-rich mobile
                  experiences, we focus on building applications
                  that solve practical problems and serve real users.
                </p>
              </div>

              <div className="md-gallery-grid">
                {PROJECTS.map((project) => (
                  <article
                    className="md-gallery-item"
                    key={project.title}
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={600}
                      height={750}
                    />

                    <div className="md-gallery-overlay">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="md-section">
            <div className="md-wrap">
              <div className="md-section-heading">
                <span className="md-kicker">
                  Frequently Asked Questions
                </span>

                <h2>Mobile App Development Questions</h2>

                <p>
                  Find answers to common questions about developing
                  Android and iOS applications with Zion Technologies.
                </p>
              </div>

              <div className="md-faq-list">
                {FAQS.map((faq, index) => (
                  <article
                    className={`md-faq-item ${
                      openFaq === index ? "active" : ""
                    }`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="md-faq-question"
                      aria-expanded={openFaq === index}
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <span className="md-faq-icon">
                        {openFaq === index ? "−" : "+"}
                      </span>
                    </button>

                    {openFaq === index && (
                      <div className="md-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="md-cta">
            <div className="md-wrap md-cta-inner">
              <div className="md-cta-content">
                <span className="md-kicker">
                  Let's Build Your Next App
                </span>

                <h2>Have a Mobile App Idea? Let's Make It Happen.</h2>

                <p>
                  Whether you are planning an Android application,
                  an iOS product or a cross-platform solution, tell us
                  about your idea. Let's discuss the features,
                  requirements and the right approach for your project.
                </p>
              </div>

              <a href="/#contact" className="md-btn">
                Get a Mobile App Quote <span>→</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <section
        className="md-pre-footer"
        id="contact"
        aria-label="Company information"
      >
        <div className="md-pre-footer-wrap">
          <div className="md-pre-footer-about">
            <h2>Mobile App Development</h2>

            <p>
              Zion Technologies designs and develops Android,
              iOS and cross-platform mobile applications that
              help businesses connect with customers, improve
              digital experiences and bring ideas to life.
            </p>
          </div>

          <div className="md-pre-footer-links">
            <h2>Explore</h2>
            <a href="/#services">Services</a>
            <a href="/#solutions">Solutions</a>
            <a href="/about">About us</a>
            <a href="/blogs">Blogs</a>
          </div>

          <div className="md-pre-footer-contact">
            <h2>Get in touch</h2>

            <p>
              Have a mobile application project in mind?
              Let's discuss your requirements.
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

          <div className="md-pre-footer-location">
            <h2>Find us</h2>
            <p>Accra, Weija</p>

            <h2>Business hours</h2>
            <p>Monday–Friday</p>

            <h2>Follow us</h2>

            <div className="md-social-icons" aria-label="Social media">
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

      <footer className="md-footer">
        <p>© 2026 Zion Technologies. All rights reserved.</p>
      </footer>
    </>
  );
}
