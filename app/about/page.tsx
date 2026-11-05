
import Image from "next/image";
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

const values = [
  {
    t: "Quality first",
    d: "Clean code, tested applications and careful design in every project.",
  },
  {
    t: "Transparent pricing",
    d: "Clear quotes with no hidden fees, agreed before we start.",
  },
  {
    t: "Client partnership",
    d: "We listen first, then solve your real business problems.",
  },
  {
    t: "Ongoing support",
    d: "Launch is the beginning. We stay on after delivery.",
  },
];

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

export default function AboutPage() {
  return (
    <div className={`ab ${display.variable} ${body.variable}`}>

      {/* Hero */}
      <section className="ab-hero">
        <div className="ab-wrap ab-hero-grid">

          {/* Hero Text */}
          <div>
            <a href="/" className="ab-kicker">
              About Zion Technologies
            </a>

            <h1>
              We help businesses grow with technology that works.
            </h1>

            <p className="ab-lead">
              Zion Technologies is a digital agency in Weija, Accra. We build
              websites, apps, software and brands for startups, SMEs and
              corporate teams.
            </p>

            <div className="ab-actions"></div>
          </div>

          {/* Hero Images and Stats */}
          <div className="ab-hero-media">

            {/* Large Image with Stats Beneath */}
            <div className="ab-hero-main">
              <Image
                src="/Zion.png"
                alt="Zion Technologies logo"
                width={300}
                height={250}
                className="ab-hero-img ab-hero-img-main"
              />

              <section className="ab-stats-band">
                <dl className="ab-stats">
                  <div>
                    <dd>2020</dd>
                    <dt>Founded in Accra</dt>
                  </div>

                  <div>
                    <dd>50+</dd>
                    <dt>Projects delivered</dt>
                  </div>

                  <div>
                    <dd>6</dd>
                    <dt>Core services</dt>
                  </div>
                </dl>
              </section>
            </div>

            {/* Two Smaller Images on the Right */}
            <div className="ab-hero-side">
              <Image
                src="/Zion.png"
                alt="Zion Technologies logo"
                width={300}
                height={250}
                className="ab-hero-img"
              />

              <Image
                src="/Zion.png"
                alt="Zion Technologies logo"
                width={300}
                height={250}
                className="ab-hero-img"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="ab-section ab-tint">
        <div className="ab-wrap ab-mission-vision">

          <div className="ab-mv-card">
            <h2>Our mission</h2>
            <p>
              To empower businesses with reliable, affordable technology
              that drives growth, efficiency and lasting success.
            </p>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="ab-section">
        <div className="ab-wrap">

          {/* <h2 className="ab-title">What we stand for</h2> */}

          <ul className="ab-cols ab-cols-4 ab-value-cards">
            {values.map((v, index) => (
              <li key={v.t} className="ab-value-card">

                <span className="ab-value-number">
                  0{index + 1}
                </span>

                <h3>{v.t}</h3>

                <p>{v.d}</p>

              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="ab-section ab-tint">
        <div className="ab-wrap">

          <h2 className="ab-title">What we do</h2>

          <ul className="ab-cols ab-cols-3">
            {services.map((s) => (
              <li key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* Why Us */}
      <section className="ab-section">
        <div className="ab-wrap ab-split ab-split-wide">

          <h2>Why teams choose Zion</h2>

          <ul className="ab-rows">
            {reasons.map(([t, d]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* Story */}
      <section className="ab-section">
        <div className="ab-wrap ab-split">

          <div>
            <Image
              src="/Orange ZionTechnologie.png"
              alt="Zion Technologies team at work"
              width={500}
              height={450}
              sizes="(max-width: 900px) 90vw, 460px"
              className="ab-story-img"
            />
          </div>

          <div>
            <h2>Our story</h2>

            <p>
              We started in 2020 by helping local businesses get online:
              websites, branding and simple software tools. As our clients
              grew, we grew with them.
            </p>

            <p>
              Today we deliver custom web applications, mobile apps, desktop
              software, cloud infrastructure and long-term support. Every
              project is built to be maintainable, fast and ready to scale,
              so your technology keeps up with your business.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="ab-cta">
        <div className="ab-wrap ab-cta-inner">

          <div>
            <h2>Ready to start your project?</h2>

            <p>
              Tell us what you need and we&apos;ll send a clear,
              no-obligation quote.
            </p>
          </div>

          <a href="/?#contact" className="ab-btn ab-btn-dark">
            Get a quote
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="ab-footer">
        <div className="ab-wrap">
          <p>© 2026 Zion Technologies. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
