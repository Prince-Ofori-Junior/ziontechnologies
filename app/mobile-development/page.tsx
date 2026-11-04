export default function MobileDevelopmentPage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>Mobile App Development</h2>
          <p>
            iOS and Android apps that feel native, load fast, and keep your users engaged wherever they are.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          We build cross-platform and native mobile applications with smooth navigation, offline support,
          push notifications, and app store publishing handled for you.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>iOS &amp; Android Apps</h3>
            <p>Native-feeling mobile applications built for performance and reliability.</p>
          </div>
          <div className="dev-card">
            <h3>Cross-Platform Apps</h3>
            <p>One codebase that runs on both iOS and Android, saving time and cost.</p>
          </div>
          <div className="dev-card">
            <h3>App Store Publishing</h3>
            <p>We handle submissions, listings, and compliance for Apple and Google app stores.</p>
          </div>
          <div className="dev-card">
            <h3>Mobile Support</h3>
            <p>Updates, bug fixes, and performance tuning after your app launches.</p>
          </div>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get a quote for mobile development &rarr;</a>
      </section>
    </>
  );
}