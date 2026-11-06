
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ziontechnologie.com"),
title: "Zion Technologies | Software Development Company in Ghana",
description:
  "Zion Technologies builds custom software, websites, mobile applications, and business systems for businesses in Ghana and across Africa.",
  keywords: [
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Brand Identity",
    "Print Production",
    "Accra Ghana",
    "Software Development Ghana",
    "Website Design Ghana",
    "Zion Technologies",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zion Technologies | Software, Printing & Branding",
    description:
      "Custom software development, printing solutions, brand identity, and digital design for ambitious businesses.",
    type: "website",
    locale: "en_GH",
    siteName: "Zion Technologies",
    url: "https://www.ziontechnologie.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Technologies | Software, Printing & Branding",
    description:
      "Custom software development, printing solutions, brand identity, and digital design for ambitious businesses.",
  },
  icons: [{ rel: "icon", url: "/logo.png" }],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ziontechnologie.com/#organization",
      name: "Zion Technologies",
      url: "https://www.ziontechnologie.com",
      logo: "https://www.ziontechnologie.com/logo.png",
      email: "hello@ziontechnologies.com",
      telephone: "+233595856187",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Accra",
        addressRegion: "Greater Accra",
        addressCountry: "GH",
      },
      sameAs: ["https://wa.me/233595856187"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.ziontechnologie.com/#service",
      name: "Zion Technologies",
      url: "https://www.ziontechnologie.com",
      image: "https://www.ziontechnologie.com/logo.png",
      telephone: "+233595856187",
      email: "hello@ziontechnologies.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Accra",
        addressRegion: "Greater Accra",
        addressCountry: "GH",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics - GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RXWP0671BD"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-RXWP0671BD');
          `}
        </Script>

        {/* Structured Data - Organization and Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
