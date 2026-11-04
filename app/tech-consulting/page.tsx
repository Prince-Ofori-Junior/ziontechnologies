export default function TechConsultingPage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>Tech Consulting</h2>
          <p>
            Expert technology consulting to help you make the right technical decisions
            for your business and avoid costly mistakes.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          From technology strategy and architecture reviews to vendor selection and
          digital transformation, we provide practical advice that aligns with your
          business goals and budget.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>Technology Strategy</h3>
            <p>A clear roadmap that aligns your technology investments with your business objectives.</p>
          </div>
          <div className="dev-card">
            <h3>System Architecture</h3>
            <p>Design scalable, secure, and maintainable system architectures tailored to your needs.</p>
          </div>
          <div className="dev-card">
            <h3>Vendor Selection</h3>
            <p>Independent guidance on choosing the right tools, platforms, and service providers.</p>
          </div>
          <div className="dev-card">
            <h3>Digital Transformation</h3>
            <p>Help modernising legacy systems and moving your business to modern digital platforms.</p>
          </div>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get a quote for tech consulting &rarr;</a>
      </section>
    </>
  );
}