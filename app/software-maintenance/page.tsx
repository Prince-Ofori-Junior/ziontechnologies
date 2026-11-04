export default function SoftwareMaintenancePage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>Software Maintenance &amp; Support</h2>
          <p>
            Ongoing updates, hosting guidance, security checks, and technical support so your software stays
            secure and performs well after launch.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          Launching is only the beginning. We keep your applications healthy with regular updates, performance
          monitoring, and friendly technical support you can rely on.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>Updates &amp; Patches</h3>
            <p>Regular version updates, bug fixes, and security patching to protect your application.</p>
          </div>
          <div className="dev-card">
            <h3>Hosting Guidance</h3>
            <p>Advice on reliable hosting, deployments, and environment setup for your stack.</p>
          </div>
          <div className="dev-card">
            <h3>Performance Tuning</h3>
            <p>Optimise speed and responsiveness so your users never wait.</p>
          </div>
          <div className="dev-card">
            <h3>Technical Support</h3>
            <p>One point of contact for questions, issues, and ongoing care of your software.</p>
          </div>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get a quote for maintenance &amp; support &rarr;</a>
      </section>
    </>
  );
}