import type { MetadataRoute } from "next";
import { blogPosts } from "./blogs/blog-data";

const siteUrl = "https://www.ziontechnologies.com";

const siteRoutes = [
  "",
  "/about",
  "/blogs",
  "/cloud-solutions",
  "/desktop-application",
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
      changeFrequency: route === "/blogs" ? "weekly" as const : "monthly" as const,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blogs/${post.slug}`,
      ...((post.updatedAt ?? post.publishedAt) && {
        lastModified: new Date(`${post.updatedAt ?? post.publishedAt}T00:00:00Z`),
      }),
    })),
  ];
}
