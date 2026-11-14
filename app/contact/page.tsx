import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./contact-form";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Zion Technologies | Let's Talk About Your Project",
  description:
    "Get in touch with Zion Technologies in Accra, Ghana. Tell us about your software, web, mobile, or technology support needs.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-header">
        <Link href="/" aria-label="Zion Technologies home">
          <Image src="/logo.png" alt="Zion Technologies" width={180} height={60} priority />
        </Link>
        <Link className="contact-home-link" href="/">Back to home</Link>
      </header>

      <section className="contact-hero">
        <p className="contact-eyebrow">CONTACT ZION TECHNOLOGIES</p>
        <h1>Let&apos;s talk about what you&apos;re building.</h1>
        <p className="contact-intro">
          Tell us what your business needs. Our team in Accra will help you figure out a clear next step.
        </p>
      </section>

      <section className="contact-layout" aria-label="Contact our team">
        <div className="contact-details">
          <h2>Get in touch</h2>
          <p>Choose the way that works best for you. We&apos;re happy to discuss a new project or an existing system.</p>

          <a className="contact-method" href="mailto:hello@ziontechnologies.com">
            <span className="contact-method-icon" aria-hidden="true">@</span>
            <span><small>Email</small><strong>hello@ziontechnologies.com</strong></span>
          </a>
          <a className="contact-method" href="tel:+233595856187">
            <span className="contact-method-icon" aria-hidden="true">☎</span>
            <span><small>Call us</small><strong>+233 59 585 6187</strong></span>
          </a>
          <a className="contact-method" href="https://wa.me/233595856187" target="_blank" rel="noreferrer">
            <span className="contact-method-icon" aria-hidden="true">↗</span>
            <span><small>WhatsApp</small><strong>Message our team</strong></span>
          </a>
          <div className="contact-location">
            <small>Based in</small>
            <strong>Accra, Greater Accra Region, Ghana</strong>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send us a message</h2>
          <p>Share a few details and we&apos;ll help you plan the next step.</p>
          <ContactForm />
        </div>
      </section>

      <footer className="contact-footer">
        <Link href="/">Zion Technologies</Link>
        <span>Software and digital solutions for growing businesses.</span>
      </footer>
    </main>
  );
}
