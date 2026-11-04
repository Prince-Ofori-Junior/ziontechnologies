export default function CloudSolutionsPage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>Cloud Solutions</h2>
          <p>
            Scalable cloud infrastructure and migration services that help your business
            grow without worrying about servers and maintenance.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          From cloud migration and deployment to managed hosting and serverless
          architecture, we build reliable cloud solutions that scale with your business.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>Cloud Migration</h3>
            <p>Smooth migration of your applications and data to the cloud with minimal downtime.</p>
          </div>
          <div className="dev-card">
            <h3>Managed Hosting</h3>
            <p>Fully managed cloud hosting with monitoring, backups, and 24/7 support.</p>
          </div>
          <div className="dev-card">
            <h3>Serverless Architecture</h3>
            <p>Cost-effective serverless solutions that scale automatically with demand.</p>
          </div>
          <div className="dev-card">
            <h3>Cloud Security</h3>
            <p>Enterprise-grade security for your cloud infrastructure and data.</p>
          </div>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get a quote for cloud solutions &rarr;</a>
      </section>
    </>
  );
}