import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogFooter, BlogNav } from "../blog-nav";
import { blogPosts } from "../blog-data";
import "../blogs.css";

export const instant = false;

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((article) => article.slug === slug);

  if (!post) {
    return { title: "Article not found | Zion Journal" };
  }

  return {
    title: `${post.seoTitle ?? post.title} | Zion Technologies`,
    description: post.metaDescription ?? post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.metaDescription ?? post.excerpt,
      type: "article",
      images: [post.image],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["Zion Technologies"],
      url: `https://www.ziontechnologies.com/blogs/${post.slug}`,
      locale: "en_GH",
      siteName: "Zion Technologies",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description: post.metaDescription ?? post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((article) => article.slug === slug);

  if (!post) notFound();

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: new URL(post.image, "https://www.ziontechnologies.com").toString(),
    url: `https://www.ziontechnologies.com/blogs/${post.slug}`,
    mainEntityOfPage: `https://www.ziontechnologies.com/blogs/${post.slug}`,
    articleSection: post.category,
    keywords: post.keywords,
    citation: post.sources?.map((source) => source.url),
    inLanguage: "en-GH",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Zion Technologies",
      url: "https://www.ziontechnologies.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Zion Technologies",
      url: "https://www.ziontechnologies.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ziontechnologies.com/logo.png",
      },
    },
  };

  return (
    <div className="journal">
      <BlogNav />
      <main className="journal-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        <div className="journal-shell">
          <nav className="journal-breadcrumb" aria-label="Breadcrumb">
            <Link href="/blogs">Journal</Link>
            <span aria-hidden="true">/</span>
            <span>{post.category}</span>
          </nav>

          <header className="journal-article-header">
            <span className="journal-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="journal-article-dek">{post.excerpt}</p>
            <div className="journal-byline">
              <span>Words by {post.author ?? "Zion Technologies"}</span>
              <span>{post.readTime}</span>
              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {new Intl.DateTimeFormat("en-GH", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    timeZone: "UTC",
                  }).format(new Date(`${post.publishedAt}T00:00:00Z`))}
                </time>
              )}
            </div>
          </header>

          <div className="journal-article-cover">
            <Image
              src={post.image}
              alt=""
              aria-hidden="true"
              fill
              className="journal-article-cover-blur"
              sizes="(max-width: 760px) 100vw, 900px"
            />
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="journal-article-main-image"
              sizes="(max-width: 760px) 100vw, 1120px"
            />
          </div>

          <div className="journal-article-layout">
            <aside className="journal-article-aside">
              <span>IN THIS STORY</span>
              <ol>
                {post.sections.map((section, index) => (
                  <li key={section.heading}>
                    <a href={`#section-${index + 1}`}>{section.heading}</a>
                  </li>
                ))}
              </ol>
              <Link href="/blogs" className="journal-back-link">← All stories</Link>
            </aside>

            <article className="journal-prose">
              {post.sections.map((section, index) => (
                <section id={`section-${index + 1}`} key={section.heading}>
                  <span className="journal-prose-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <div className="journal-article-end">
                <span>End of story</span>
                <Link href="/blogs">Explore more ideas ↗</Link>
              </div>
              {post.sources && post.sources.length > 0 && (
                <aside className="journal-sources" aria-labelledby="journal-sources-title">
                  <h2 id="journal-sources-title">Sources &amp; further reading</h2>
                  <ul>
                    {post.sources.map((source) => (
                      <li key={source.url}>
                        <a href={source.url} target="_blank" rel="noreferrer">
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Company descriptions summarize each organization&apos;s own materials; they are not independent product reviews.
                  </p>
                </aside>
              )}
            </article>
          </div>
        </div>
      </main>
      <BlogFooter />
    </div>
  );
}
