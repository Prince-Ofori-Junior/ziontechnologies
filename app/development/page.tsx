import Image from "next/image";

export default function DevelopmentPage() {
  return (
    <>
      <section className="dev-hero">
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2>Software Development Built for Your Business</h2>
          <p>
            We design and build tailored web applications, mobile apps, and business systems that help teams
            work smarter, serve customers better, and grow.
          </p>  
        </div>
      </section>

      <section className="dev-intro">
        <p>
          From startup ideas to enterprise systems, our development team turns requirements into reliable,
          maintainable software. We work with you through planning, design, build, testing, launch, and ongoing
          support — so your technology keeps pace with your business.
        </p>
      </section>

      <section className="dev-section">
        <div className="dev-grid">
          <a className="dev-card" href="/web-development">
            <Image src="/Web Development.png" alt="Web Development" width={400} height={300} className="dev-card-image" />
            <h3>Web Development</h3>
            <p>Responsive websites, web applications, and online stores built to perform on every device.</p>
          </a>
          <a className="dev-card" href="/mobile-development">
            <h3>Mobile App Development</h3>
            <p>iOS and Android apps that feel native, load fast, and keep your users engaged.</p>
          </a>
          <a className="dev-card" href="/custom-software">
            <h3>Custom Software</h3>
            <p>Business systems, dashboards, and tools shaped around your actual workflow.</p>
          </a>
          <a className="dev-card" href="/api-backend">
            <h3>API &amp; Backend</h3>
            <p>Secure APIs, integrations, and backend services that connect your tools and data.</p>
          </a>
          <a className="dev-card" href="/ui-ux-design">
            <h3>UI/UX Design</h3>
            <p>Clean interfaces and user experiences designed for clarity and ease of use.</p>
          </a>
          <a className="dev-card" href="/software-maintenance">
            <h3>Maintenance &amp; Support</h3>
            <p>Ongoing updates, hosting guidance, security checks, and technical support.</p>
          </a>
        </div>
      </section>

      <section className="dev-cta">
        <a href="/?#contact">Get a quote for your project &rarr;</a>
      </section>
    </>
  );
}