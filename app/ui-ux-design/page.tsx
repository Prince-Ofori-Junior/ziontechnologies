export default function UiUxDesignPage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>UI/UX Design</h2>
          <p>
            Clean interfaces and user experiences designed for clarity, ease of use, and alignment with your brand.
          </p>
        </div>
      </section>

      <section className="dev-intro">
        <p>
          Great software starts with great design. We create wireframes, prototypes, and design systems that put
          your users first and make every interaction feel intentional.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <div className="dev-card">
            <h3>Wireframing &amp; Prototyping</h3>
            <p>Low-fidelity layouts and interactive prototypes before a single line of code is written.</p>
          </div>
          <div className="dev-card">
            <h3>User Interface Design</h3>
            <p>Polished, on-brand interfaces that are beautiful and easy to navigate.</p>
          </div>
          <div className="dev-card">
            <h3>Design Systems</h3>
            <p>Reusable components and guidelines that keep your product consistent as it grows.</p>
          </div>
          <div className="dev-card">
            <h3>Usability Review</h3>
            <p>Assess existing interfaces and recommend improvements that reduce friction and boost conversions.</p>
          </div>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get a quote for UI/UX design &rarr;</a>
      </section>
    </>
  );
}