import type { Metadata } from "next";
import type { ReactNode } from "react";
import { blogPosts } from "./blog-data";

const featuredImage = blogPosts.find((post) => post.featured)?.image ?? "/logo.png";

export const metadata: Metadata = {
  title: "Ghana Tech & Business Blog | Zion Technologies",
  description:
    "Practical guides to website design, custom software, cloud solutions and digital strategy for businesses in Ghana and across Africa.",
  keywords: [
    "technology blog Ghana",
    "business technology Africa",
    "web development Ghana",
    "custom software Ghana",
    "digital transformation Ghana",
    "software development Accra",
  ],
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Ghana Tech & Business Blog | Zion Technologies",
    description:
      "Practical guides to website design, custom software, cloud solutions and digital strategy for businesses in Ghana and across Africa.",
    type: "website",
    url: "/blogs",
    locale: "en_GH",
    siteName: "Zion Technologies",
    images: [featuredImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghana Tech & Business Blog | Zion Technologies",
    description:
      "Practical guides to website design, custom software, cloud solutions and digital strategy for businesses in Ghana and across Africa.",
    images: [featuredImage],
  },
};

export default function BlogsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
