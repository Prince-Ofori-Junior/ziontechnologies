export default function WebDevelopmentPage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>Web Development</h2>
          <p>
            Professional websites and web applications that represent your brand and work flawlessly on
            desktop, tablet, and mobile.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          Whether you need a company website, a customer portal, or an online store, we build fast, secure,
          and easy-to-maintain web solutions that help you reach more customers online.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>Business Websites</h3>
            <p>Clean, responsive company websites that build trust and convert visitors into leads.</p>
          </div>
          <div className="dev-card">
            <h3>E-commerce Stores</h3>
            <p>Online shops with product catalogues, secure payments, and order management built in.</p>
          </div>
          <div className="dev-card">
            <h3>Web Portals</h3>
            <p>Client and member portals with dashboards, logins, and role-based access.</p>
          </div>
          <div className="dev-card">
            <h3>Website Maintenance</h3>
            <p>Hosting guidance, updates, backups, and security checks to keep your site running.</p>
          </div>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get a quote for web development &rarr;</a>
      </section>
    </>
  );
}