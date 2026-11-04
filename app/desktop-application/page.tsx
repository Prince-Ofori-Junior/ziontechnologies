export default function DesktopApplicationPage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>Desktop Application</h2>
          <p>
            Powerful desktop applications built for Windows, macOS, and Linux that run
            smoothly offline and integrate deeply with your operating system.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          Whether you need an internal business tool, a desktop client for your service,
          or a cross-platform utility, we build fast, secure desktop applications tailored
          to your workflow.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>Cross-Platform Apps</h3>
            <p>Desktop applications that run on Windows, macOS, and Linux from a single codebase.</p>
          </div>
          <div className="dev-card">
            <h3>Native Performance</h3>
            <p>Optimised for speed and responsiveness with full access to system resources.</p>
          </div>
          <div className="dev-card">
            <h3>Offline-First</h3>
            <p>Applications that work without an internet connection and sync when back online.</p>
          </div>
          <div className="dev-card">
            <h3>Auto Updates</h3>
            <p>Seamless background updates so your users always have the latest version.</p>
          </div>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get a quote for desktop application &rarr;</a>
      </section>
    </>
  );
}