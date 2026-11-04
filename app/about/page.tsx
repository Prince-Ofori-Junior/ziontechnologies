export default function AboutPage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>About Us</h2>
          <p>
            Zion Technologies is a software development company based in Accra, Weija.
            We help businesses build custom web applications, mobile apps, and digital
            systems that drive growth and efficiency.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          Founded with a passion for technology and problem-solving, we work with
          startups, small businesses, and enterprises to turn ideas into working
          software. Our team combines technical expertise with a deep understanding
          of business needs to deliver solutions that actually work for you.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>Our Mission</h3>
            <p>
              To empower businesses with reliable, scalable, and easy-to-use
              software that solves real problems and creates lasting value.
            </p>
          </div>
          <div className="dev-card">
            <h3>Our Values</h3>
            <p>
              Quality, transparency, and customer-first service. We believe in
              clear communication, honest timelines, and delivering on our promises.
            </p>
          </div>
          <div className="dev-card">
            <h3>What We Do</h3>
            <p>
              We build web applications, mobile apps, desktop software, cloud
              solutions, and provide ongoing digital support and tech consulting.
            </p>
          </div>
          <div className="dev-card">
            <h3>Where We Are</h3>
            <p>
              Based in Accra, Weija, Ghana, serving clients locally and around
              the world with remote-friendly development and support.
            </p>
          </div>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get in touch &rarr;</a>
      </section>
    </>
  );
}