import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zion Technologies | Software, Printing & Branding",
  description:
    "Custom software development, printing solutions, brand identity, and digital design for ambitious businesses.",
  keywords: [
    "Software Development",
    "Web Development",
    "Mobile Apps",
    "Brand Identity",
    "Print Production",
    "Accra Ghana",
    "Zion Technologies",
  ],
  openGraph: {
    title: "Zion Technologies | Software, Printing & Branding",
    description:
      "Custom software development, printing solutions, brand identity, and digital design for ambitious businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Technologies | Software, Printing & Branding",
    description:
      "Custom software development, printing solutions, brand identity, and digital design for ambitious businesses.",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ziontechnologies.com/#organization",
      name: "Zion Technologies",
      url: "https://ziontechnologies.com",
      logo: "https://ziontechnologies.com/favicon.ico",
      email: "hello@ziontechnologies.com",
      telephone: "+233595856187",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Accra",
        addressRegion: "Weija",
        addressCountry: "GH",
      },
      sameAs: ["https://wa.me/233595856187"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ziontechnologies.com/#service",
      name: "Zion Technologies",
      image: "https://ziontechnologies.com/favicon.ico",
      priceRange: "",
      telephone: "+233595856187",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Accra",
        addressRegion: "Weija",
        addressCountry: "GH",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
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
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}