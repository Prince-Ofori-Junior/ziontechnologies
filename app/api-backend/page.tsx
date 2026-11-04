export default function ApiBackendPage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>API &amp; Backend Development</h2>
          <p>
            Secure APIs, integrations, and backend services that connect your tools, data, and teams reliably.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          Your software is only as strong as what it connects to. We build well-documented APIs and robust
          backends that let your systems talk to each other and to third-party services.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>REST APIs</h3>
            <p>Clean, secure APIs that power your web, mobile, and third-party integrations.</p>
          </div>
          <div className="dev-card">
            <h3>Third-Party Integrations</h3>
            <p>Connect payments, SMS, email, accounting, and CRM platforms to your systems.</p>
          </div>
          <div className="dev-card">
            <h3>Database Design</h3>
            <p>Structured, secure data storage optimised for your application&apos;s needs.</p>
          </div>
          <div className="dev-card">
            <h3>Backend Services</h3>
            <p>Server-side logic, authentication, and hosting guidance for dependable performance.</p>
          </div>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get a quote for API &amp; backend &rarr;</a>
      </section>
    </>
  );
}