import type { MetadataRoute } from "next";
import { blogPosts } from "./blogs/blog-data";

const siteUrl = "https://www.ziontechnologie.com";

const siteRoutes = [
  "",
  "/about",
  "/blogs",
  "/cloud-solutions",
  "/desktop-application",
  "/development",
  "/digital-support",
  "/mobile-development",
  "/tech-consulting",
  "/ui-ux-design",
  "/web-development",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...siteRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blogs/${post.slug}`,
    })),
  ];
}
