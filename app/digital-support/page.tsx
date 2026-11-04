export default function DigitalSupportPage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>Digital Support</h2>
          <p>
            Reliable ongoing support and maintenance for your websites, applications,
            and digital systems so they stay fast, secure, and online.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          From bug fixes and security updates to performance monitoring and technical
          assistance, our support team keeps your digital products running smoothly.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>Technical Support</h3>
            <p>Expert help when you need it, with fast response times and clear solutions.</p>
          </div>
          <div className="dev-card">
            <h3>Security Updates</h3>
            <p>Regular patches and security hardening to protect your applications and data.</p>
          </div>
          <div className="dev-card">
            <h3>Performance Monitoring</h3>
            <p>Proactive monitoring to catch and fix issues before they affect your users.</p>
          </div>
          <div className="dev-card">
            <h3>Bug Fixes</h3>
            <p>Quick resolution of bugs and issues to keep your systems running reliably.</p>
          </div>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get a quote for digital support &rarr;</a>
      </section>
    </>
  );
}