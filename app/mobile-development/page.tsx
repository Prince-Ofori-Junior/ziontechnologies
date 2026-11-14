
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

const SERVICES = [
  {
    number: "01",
    icon: "▣",
    title: "Android App Development",
    description:
      "Custom Android applications built for smartphones and tablets, with practical features, intuitive navigation and reliable performance.",
  },
  {
    number: "02",
    icon: "◉",
    title: "iOS App Development",
    description:
      "Purpose-built applications for iPhone and iPad, designed around Apple's platform standards and user experience conventions.",
  },
  {
    number: "03",
    icon: "⇄",
    title: "Cross-Platform Apps",
    description:
      "Applications for Android and iOS using shared technologies, helping reduce duplicated development while maintaining a consistent experience.",
  },
  {
    number: "04",
    icon: "✳",
    title: "Mobile UI/UX Design",
    description:
      "User-friendly interfaces, clear navigation and carefully planned screens that make your application simple to understand and use.",
  },
  {
    number: "05",
    icon: "⌘",
    title: "API & Payment Integration",
    description:
      "Connect your app to backend systems, databases, payment gateways, authentication services and other third-party platforms.",
  },
  {
    number: "06",
    icon: "↻",
    title: "App Maintenance & Support",
    description:
      "Keep your application up to date with bug fixes, security improvements, compatibility updates and new features.",
  },
];

const PLATFORMS = [
  {
    label: "01 / ANDROID",
    title: "Android Applications",
    description:
      "Reach users across Android smartphones and tablets with applications designed around your business requirements and target audience.",
    features: [
      "Custom Android applications",
      "Smartphone and tablet support",
      "API and backend integration",
      "Google Play publishing assistance",
    ],
  },
  {
    label: "02 / APPLE",
    title: "iOS Applications",
    description:
      "Build mobile experiences for Apple's ecosystem with polished interfaces, dependable functionality and platform-conscious design.",
    features: [
      "Custom iPhone and iPad apps",
      "iOS interface design",
      "Backend and payment integration",
      "App Store publishing assistance",
    ],
  },
  {
    label: "03 / MULTI-PLATFORM",
    title: "Cross-Platform Applications",
    description:
      "Develop for multiple mobile platforms through shared technologies where appropriate, while keeping the experience consistent.",
    features: [
      "Android and iOS development",
      "Shared application code",
      "Consistent user experience",
      "Simplified feature development",
    ],
  },
];

const CAPABILITIES = [
  {
    icon: "✦",
    title: "User-Friendly Design",
    description:
      "Clear layouts and intuitive navigation that make everyday tasks easier.",
  },
  {
    icon: "⚡",
    title: "Performance",
    description:
      "Efficient application architecture and responsive interactions.",
  },
  {
    icon: "🔒",
    title: "Security",
    description:
      "Security-conscious development and appropriate data protection practices.",
  },
  {
    icon: "☁",
    title: "Backend Connectivity",
    description:
      "Integration with APIs, databases, cloud services and business systems.",
  },
  {
    icon: "◈",
    title: "Push Notifications",
    description:
      "Timely notifications for important updates and user engagement.",
  },
  {
    icon: "✓",
    title: "Testing & Compatibility",
    description:
      "Testing across relevant devices, screen sizes and operating system versions.",
  },
];

const FAQS = [
  {
    question: "How much does mobile app development cost in Ghana?",
    answer:
      "The cost depends on the application's features, design complexity, platform requirements and integrations. We review your requirements before providing a project quotation.",
  },
  {
    question: "Can you develop both Android and iOS applications?",
    answer:
      "Yes. We develop Android applications, iOS applications and cross-platform solutions. The best approach depends on your target users, functionality and budget.",
  },
  {
    question: "How long does it take to build a mobile app?",
    answer:
      "Development time depends on the application's scope, features, integrations and testing requirements. We provide a project timeline after reviewing your specifications.",
  },
  {
    question: "Can you integrate mobile money and online payments?",
    answer:
      "Yes. We can integrate supported payment gateways and payment services based on your requirements, provider availability and approval processes.",
  },
  {
    question: "Do you provide support after an app is launched?",
    answer:
      "Yes. Support can include bug fixes, maintenance, compatibility updates, performance improvements and the development of additional features.",
  },
  {
    question: "Can you publish my application on Google Play or the App Store?",
    answer:
      "We can assist with preparing application builds and store submissions. Publishing is subject to the relevant developer account requirements and platform review.",
  },
];

export default function MobileDevelopmentPage() {
  const [menu, setMenu] = useState(false);
  const [devMenu, setDevMenu] = useState(false);

  // FIX: FAQ state accepts either a number or null.
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                  Zion Technologies / Mobile Development
                </span>

                <h1>
                  Mobile apps that turn{" "}
                  <span>ideas into experiences.</span>
                </h1>

                <p className="md-lead">
                  We design and develop Android, iOS and cross-platform
                  applications that help businesses serve customers,
                  simplify processes and deliver useful digital experiences.
                </p>

                <div className="md-actions">
                  <a href="/#contact" className="md-btn">
                    Start Your App Project <span>→</span>
                  </a>

                  <a href="#mobile-services" className="md-btn md-btn-outline">
                    Explore Services
                  </a>
                </div>

                <div className="md-hero-note">
                  <span></span>
                  Android · iOS · Cross-platform
                </div>
              </div>

              <div className="md-hero-visual">
                <div className="md-hero-image">
                  <Image
                    src="/tech3.jpg"
                    alt="Technology and mobile application development"
                    width={900}
                    height={1000}
                    priority
                  />
                </div>

                <div className="md-floating-card">
                  <div className="md-floating-icon">✦</div>
                  <div>
                    <strong>Built Around Your Users</strong>
                    <small>Design, development and support</small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="md-services" id="mobile-services">
            <div className="md-wrap">
              <div className="md-section-heading">
                <span className="md-kicker">What We Do</span>
                <h2>Mobile App Development Services</h2>
                <p>
                  From the first concept to ongoing improvements, we provide
                  the services needed to plan, build and maintain your mobile
                  application.
                </p>
              </div>

              <div className="md-grid">
                {SERVICES.map((service) => (
                  <article className="md-card" key={service.number}>
                    <span className="md-card-number">{service.number}</span>
                    <div className="md-card-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <a href="/#contact" className="md-card-link">
                      Discuss your project <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* PLATFORMS */}
          <section className="md-platforms">
            <div className="md-wrap">
              <div className="md-section-heading">
                <span className="md-kicker">Supported Platforms</span>
                <h2>Choose the Right Platform for Your App</h2>
                <p>
                  We help you select an approach based on your audience,
                  application requirements and available budget.
                </p>
              </div>

              <div className="md-platform-grid">
                {PLATFORMS.map((platform) => (
                  <article className="md-platform-card" key={platform.title}>
                    <span className="md-platform-label">{platform.label}</span>
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

          {/* CAPABILITIES */}
          <section className="md-capabilities">
            <div className="md-wrap">
              <div className="md-section-heading">
                <span className="md-kicker">Application Features</span>
                <h2>More Than Just an App Interface</h2>
                <p>
                  We consider the technology behind the screens to create
                  applications that are useful, dependable and ready to grow.
                </p>
              </div>

              <div className="md-capability-grid">
                {CAPABILITIES.map((item) => (
                  <article className="md-capability" key={item.title}>
                    <span>{item.icon}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* MOBILE APP VISUAL SHOWCASE */}
          <section className="md-visual-showcase">
            <div className="md-wrap md-visual-grid">
              <div className="md-visual-collage">
                <div className="md-collage-image md-collage-one">
                  <Image
                    src="/apexdigitalagency-laptop-8305452_1920.jpg"
                    alt="Laptop displaying a digital agency website"
                    fill
                    sizes="(max-width: 768px) 45vw, 300px"
                  />
                </div>

                <div className="md-collage-image md-collage-two">
                  <Image
                    src="/geralt-social-media-4140959_1920.jpg"
                    alt="Social media content displayed on a digital device"
                    fill
                    sizes="(max-width: 768px) 45vw, 300px"
                  />
                </div>

                <div className="md-collage-image md-collage-three">
                  <Image
                    src="/Mobile Application Page Hero1.avif"
                    alt="Mobile application shown on a smartphone"
                    fill
                    sizes="(max-width: 768px) 45vw, 300px"
                  />
                </div>

                <div className="md-collage-image md-collage-four">
                  <Image
                    src="/Mobile Application Page1.avif"
                    alt="Mobile application interface displayed on a phone"
                    fill
                    sizes="(max-width: 768px) 45vw, 300px"
                  />
                </div>

                <div className="md-collage-decoration">
                  <span>APP</span>
                  <strong>DESIGN</strong>
                  <span>& DEVELOPMENT</span>
                </div>
              </div>

              <div className="md-visual-content">
                <span className="md-kicker">Mobile Innovation</span>

                <h2>
                  Ideas That Become
                  <span> Powerful Mobile Experiences.</span>
                </h2>

                <p>
                  We transform ideas into mobile applications that make a
                  difference. From intuitive interfaces to powerful
                  functionality, every application is developed with its
                  users and purpose in mind.
                </p>

                <div className="md-visual-points">
                  <div>
                    <span>01</span>
                    <p>
                      <strong>Thoughtful Design</strong>
                      Interfaces designed around real user needs.
                    </p>
                  </div>

                  <div>
                    <span>02</span>
                    <p>
                      <strong>Purposeful Development</strong>
                      Features built to solve practical problems.
                    </p>
                  </div>

                  <div>
                    <span>03</span>
                    <p>
                      <strong>Connected Technology</strong>
                      Integrations that bring your application together.
                    </p>
                  </div>
                </div>

                <a href="/#contact" className="md-btn">
                  Discuss Your App Idea <span>→</span>
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="md-section">
            <div className="md-wrap">
              <div className="md-section-heading">
                <span className="md-kicker">Frequently Asked Questions</span>
                <h2>Mobile App Development in Ghana</h2>
                <p>
                  Answers to common questions about mobile application
                  development, costs, platforms and support.
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
                <span className="md-kicker">Have an App Idea?</span>
                <h2>Let's Build Your Mobile Application.</h2>
                <p>
                  Tell us what you want to build, who it is for and what you
                  want it to achieve. We will discuss the requirements and
                  the right development approach for your project.
                </p>
              </div>

              <a href="/#contact" className="md-btn">
                Request a Mobile App Quote <span>→</span>
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
              Zion Technologies develops Android, iOS and cross-platform
              applications for businesses, organisations and individuals.
              We focus on practical functionality and useful digital
              experiences.
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
            <p>Discuss your mobile application requirements with us.</p>
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
