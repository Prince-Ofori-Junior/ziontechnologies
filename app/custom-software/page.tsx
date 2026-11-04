export default function CustomSoftwarePage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>Custom Software Development</h2>
          <p>
            Tailored business systems, dashboards, and tools shaped around your actual workflow — not the other
            way around.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          Off-the-shelf software often forces you to change how you work. We build custom systems that match your
          processes, integrate with your existing tools, and scale as your team grows.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>Business Systems</h3>
            <p>Custom applications for operations, reporting, inventory, and team collaboration.</p>
          </div>
          <div className="dev-card">
            <h3>Dashboards &amp; Analytics</h3>
            <p>Clear, real-time views of your key metrics so you can make better decisions faster.</p>
          </div>
          <div className="dev-card">
            <h3>Workflow Automation</h3>
            <p>Remove repetitive manual work by connecting the tools your team already uses.</p>
          </div>
          <div className="dev-card">
            <h3>Legacy Modernisation</h3>
            <p>Upgrade outdated software into secure, maintainable systems without disrupting your business.</p>
          </div>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get a quote for custom software &rarr;</a>
      </section>
    </>
  );
}