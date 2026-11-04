export default function BlogsPage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>Blogs</h2>
          <p>
            Insights, tips, and stories about software development, technology,
            and digital transformation from the Zion Technologies team.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          Stay up to date with the latest in web development, mobile applications,
          cloud solutions, UI/UX design, and more. Our blog shares practical
          advice and industry trends to help you make better technology decisions.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>Web Development</h3>
            <p>
              Best practices for building modern, responsive websites and web
              applications that perform and convert.
            </p>
          </div>
          <div className="dev-card">
            <h3>Mobile Applications</h3>
            <p>
              Guidance on building native and cross-platform mobile apps for
              iOS and Android.
            </p>
          </div>
          <div className="dev-card">
            <h3>Cloud Solutions</h3>
            <p>
              Learn about cloud migration, serverless architecture, and managed
              hosting for scalable applications.
            </p>
          </div>
          <div className="dev-card">
            <h3>UI/UX Design</h3>
            <p>
              Design principles and user experience tips for creating interfaces
              your users will love.
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