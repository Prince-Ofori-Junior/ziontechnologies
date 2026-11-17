
import type { MetadataRoute } from "next";
import { blogPosts } from "./blogs/blog-data";

const siteUrl = "https://www.ziontechnologie.com";

const siteRoutes = [
  "",
  "/about",
  "/blogs",
  "/contact",
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
      lastModified: new Date(),
      changeFrequency: route === "/blogs" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),

    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blogs/${post.slug}`,
      lastModified: new Date(
        `${post.updatedAt ?? post.publishedAt}T00:00:00Z`
      ),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
