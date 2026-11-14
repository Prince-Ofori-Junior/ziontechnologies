"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const service = String(formData.get("service") ?? "") || "General enquiry";
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Website enquiry: ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterested in: ${service}\n\n${message}`);

    window.location.href = `mailto:hello@ziontechnologies.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">Your name</label>
      <input id="contact-name" name="name" autoComplete="name" required />

      <label htmlFor="contact-email">Email address</label>
      <input id="contact-email" name="email" type="email" autoComplete="email" required />

      <label htmlFor="contact-service">What can we help with?</label>
      <select id="contact-service" name="service" defaultValue="">
        <option value="" disabled>Select a service</option>
        <option>Web development</option>
        <option>Mobile application</option>
        <option>Custom software</option>
        <option>Cloud solutions</option>
        <option>Technology consulting</option>
        <option>Digital support</option>
        <option>UI/UX design</option>
        <option>Something else</option>
      </select>

      <label htmlFor="contact-message">Tell us a little about it</label>
      <textarea id="contact-message" name="message" rows={5} required />

      <button type="submit">Continue by email <span aria-hidden="true">→</span></button>
      <small>Your email app will open with your message ready to send.</small>
    </form>
  );
}
