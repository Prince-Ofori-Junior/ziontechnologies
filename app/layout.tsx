import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Zion Technologies | Software, Printing & Branding",
  description: "Custom software development, printing solutions, brand identity, and digital design for ambitious businesses.",
  keywords: ["Software Development", "Web Development", "Mobile Apps", "Brand Identity", "Print Production", "Accra Ghana", "Zion Technologies"],
  authors: [{ name: "Zion Technologies" }],
  openGraph: {
    title: "Zion Technologies | Software, Printing & Branding",
    description: "Custom software development, printing solutions, brand identity, and digital design for ambitious businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Technologies | Software, Printing & Branding",
    description: "Custom software development, printing solutions, brand identity, and digital design for ambitious businesses.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ziontechnologies.com/#organization",
      "name": "Zion Technologies",
      "url": "https://ziontechnologies.com",
      "logo": "https://ziontechnologies.com/download.png",
      "email": "hello@ziontechnologies.com",
      "telephone": "+233595856187",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Accra",
        "addressRegion": "Weija",
        "addressCountry": "GH"
      },
      "sameAs": [
        "https://wa.me/233595856187"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ziontechnologies.com/#service",
      "name": "Zion Technologies",
      "image": "https://ziontechnologies.com/download.png",
      "priceRange": "$$",
      "telephone": "+233595856187",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Accra",
        "addressRegion": "Weija",
        "addressCountry": "GH"
      }
    }
  ]
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
