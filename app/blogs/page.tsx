
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BlogFooter, BlogNav } from "./blog-nav";
import { blogCategories, blogPosts } from "./blog-data";
import "./blogs.css";

const SITE_URL = "https://www.ziontechnologie.com";

const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];

const latestPosts = blogPosts.filter(
  (post) => post.slug !== featuredPost?.slug
);

function formatDate(date?: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-GH", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.2 4.2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M7 5h12v12" />
    </svg>
  );
}

export default function BlogsPage() {
  const [category, setCategory] =
    useState<(typeof blogCategories)[number]>("All topics");

  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return latestPosts.filter((post) => {
      const matchesCategory =
        category === "All topics" || post.category === category;

      const searchableContent = [
        post.title,
        post.excerpt,
        post.category,
        ...(post.keywords ?? []),
        post.author ?? "",
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedQuery || searchableContent.includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ghana Tech & Business Journal | Zion Technologies",
    description:
      "Practical technology insights, software development guides, business technology advice and digital innovation perspectives from Zion Technologies in Ghana.",
    url: `${SITE_URL}/blogs`,
    inLanguage: "en-GH",
    publisher: {
      "@type": "Organization",
      name: "Zion Technologies",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blogs/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <div className="journal-home">
      <BlogNav />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {/* HERO */}
        <section className="jhome-hero">
          <div className="jhome-hero-noise" aria-hidden="true" />

          <div className="jhome-shell jhome-hero-inner">
            <div className="jhome-hero-content">
              <div className="jhome-eyebrow">
                <span className="jhome-eyebrow-line" />
                THE ZION TECHNOLOGIES JOURNAL
              </div>

              <h1>
                Ideas that move
                <br />
                <span>technology forward.</span>
              </h1>

              <p className="jhome-hero-description">
                Thoughtful perspectives on software, business technology and
                digital innovation — written for people building what comes next.
              </p>

              <div className="jhome-hero-actions">
                <a href="#jhome-featured" className="jhome-primary-link">
                  Explore the journal
                  <span>↓</span>
                </a>

                <span className="jhome-hero-location">
                  ACCRA, GHANA <i /> GLOBAL PERSPECTIVES
                </span>
              </div>
            </div>

            {/* CREATIVE JOURNAL HERO ARTWORK */}
            <div className="jhome-hero-art" aria-hidden="true">
              <div className="jhome-art-backdrop" />

              <div className="jhome-art-orbit jhome-art-orbit-one" />
              <div className="jhome-art-orbit jhome-art-orbit-two" />

              <span className="jhome-art-spark jhome-art-spark-one" />
              <span className="jhome-art-spark jhome-art-spark-two" />
              <span className="jhome-art-spark jhome-art-spark-three" />

              {/* Main editorial card */}
              <div className="jhome-float-card jhome-float-feature">
                <div className="jhome-float-feature-top">
                  <span className="jhome-float-kicker">
                    <i />
                    THE JOURNAL
                  </span>

                  <span className="jhome-float-number">01 / 04</span>
                </div>

                <div className="jhome-float-feature-body">
                  <span className="jhome-float-category">
                    IDEAS &amp; PERSPECTIVES
                  </span>

                  <h3>
                    The future
                    <br />
                    is built on
                    <br />
                    <span>better ideas.</span>
                  </h3>

                  <p>
                    Exploring technology, business and the ideas shaping
                    tomorrow.
                  </p>
                </div>

                <div className="jhome-float-feature-footer">
                  <span>READ. LEARN. BUILD.</span>
                  <span className="jhome-float-arrow">
                    <ArrowIcon />
                  </span>
                </div>
              </div>

              {/* Editorial pick */}
              <div className="jhome-float-card jhome-float-insight">
                <span className="jhome-float-insight-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3.5 14.6 9l5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5Z" />
                  </svg>
                </span>

                <span className="jhome-float-insight-copy">
                  <small>EDITOR&apos;S PICK</small>
                  <strong>Ideas worth exploring</strong>
                  <span>Selected reads from our journal</span>
                </span>
              </div>

              {/* Topics card */}
              <div className="jhome-float-card jhome-float-topics">
                <div className="jhome-float-topics-heading">
                  <span>EXPLORE TOPICS</span>
                  <span>03</span>
                </div>

                <div className="jhome-float-topic">
                  <i className="jhome-topic-dot jhome-topic-dot-green" />
                  Software &amp; Development
                </div>

                <div className="jhome-float-topic">
                  <i className="jhome-topic-dot jhome-topic-dot-blue" />
                  Business Technology
                </div>

                <div className="jhome-float-topic">
                  <i className="jhome-topic-dot jhome-topic-dot-gold" />
                  Digital Innovation
                </div>
              </div>

              {/* Reading time card */}
              <div className="jhome-float-card jhome-float-reading">
                <span className="jhome-reading-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                </span>

                <span>
                  <strong>5–8 min</strong>
                  <small>WORTH YOUR TIME</small>
                </span>
              </div>

              <span className="jhome-art-label jhome-art-label-top">
                THINK / BUILD / GROW
              </span>

              <span className="jhome-art-label jhome-art-label-bottom">
                KNOWLEDGE IN MOTION
              </span>
            </div>
          </div>

          <div className="jhome-hero-bottom">
            <span>INDEPENDENT THINKING. PRACTICAL KNOWLEDGE.</span>
            <span>SCROLL TO DISCOVER ↓</span>
          </div>
        </section>

        {/* EDITORIAL INTRO */}
        <section className="jhome-intro">
          <div className="jhome-shell jhome-intro-inner">
            <div className="jhome-intro-label">
              <span>01</span>
              <span>OUR PERSPECTIVE</span>
            </div>

            <p>
              Technology should do more than look impressive. It should solve
              meaningful problems, improve how people work and create
              opportunities for businesses to grow.
            </p>

            <div className="jhome-intro-aside">
              <span>FROM GHANA</span>
              <span>FOR A DIGITAL WORLD.</span>
            </div>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        {featuredPost && (
          <section
            className="jhome-featured jhome-shell"
            id="jhome-featured"
          >
            <div className="jhome-section-heading">
              <div>
                <span className="jhome-section-index">
                  02 / EDITOR&apos;S PICK
                </span>

                <h2>
                  Worth your attention<span>.</span>
                </h2>
              </div>

              <span className="jhome-section-note">
                A story selected by our editorial team
              </span>
            </div>

            <Link
              href={`/blogs/${featuredPost.slug}`}
              className="jhome-feature-card"
            >
              <div className="jhome-feature-image">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 800px) 100vw, 58vw"
                />

                <span className="jhome-image-overlay" />

                <span className="jhome-feature-image-tag">
                  FEATURED STORY
                </span>

                <span className="jhome-feature-image-number">
                  001
                </span>
              </div>

              <div className="jhome-feature-content">
                <div className="jhome-feature-meta">
                  <span className="jhome-category-tag">
                    {featuredPost.category}
                  </span>

                  <span>{featuredPost.readTime}</span>
                </div>

                <h3>{featuredPost.title}</h3>

                <p>{featuredPost.excerpt}</p>

                <div className="jhome-feature-footer">
                  <div className="jhome-author">
                    <span className="jhome-author-avatar">Z</span>

                    <span>
                      <small>WRITTEN BY</small>
                      <strong>
                        {featuredPost.author ?? "Zion Technologies"}
                      </strong>
                    </span>
                  </div>

                  <span className="jhome-feature-date">
                    {formatDate(featuredPost.publishedAt)}
                  </span>
                </div>

                <div className="jhome-feature-read">
                  <span>Read the full story</span>

                  <span className="jhome-round-arrow">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ARTICLE LIBRARY */}
        <section className="jhome-library" id="jhome-articles">
          <div className="jhome-shell">
            <div className="jhome-library-heading">
              <div>
                <span className="jhome-section-index">
                  03 / THE COLLECTION
                </span>

                <h2>
                  Explore the <span>thinking.</span>
                </h2>

                <p>
                  Useful knowledge, fresh perspectives and practical ideas
                  for a changing digital world.
                </p>
              </div>

              <div className="jhome-library-count">
                <strong>
                  {blogPosts.length.toString().padStart(2, "0")}
                </strong>

                <span>
                  STORIES
                  <br />
                  AND COUNTING
                </span>
              </div>
            </div>

            {/* SEARCH AND FILTERS */}
            <div className="jhome-discovery">
              <div
                className="jhome-topics"
                aria-label="Filter articles by topic"
              >
                {blogCategories.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    className={category === topic ? "is-active" : ""}
                    aria-pressed={category === topic}
                    onClick={() => setCategory(topic)}
                  >
                    {topic}

                    {category === topic && (
                      <span className="jhome-topic-indicator" />
                    )}
                  </button>
                ))}
              </div>

              <label className="jhome-search">
                <SearchIcon />

                <span className="visually-hidden">
                  Search articles
                </span>

                <input
                  type="search"
                  placeholder="Search articles..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />

                <kbd>/</kbd>
              </label>
            </div>

            <div className="jhome-results-bar" aria-live="polite">
              <span>
                SHOWING{" "}
                <strong>
                  {filteredPosts.length.toString().padStart(2, "0")}
                </strong>{" "}
                {filteredPosts.length === 1 ? "STORY" : "STORIES"}
              </span>

              {query && (
                <span className="jhome-search-status">
                  SEARCH: &ldquo;{query}&rdquo;
                </span>
              )}
            </div>

            {/* ARTICLE CARDS */}
            {filteredPosts.length > 0 ? (
              <div className="jhome-grid">
                {filteredPosts.map((post, index) => (
                  <article className="jhome-card" key={post.slug}>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="jhome-card-image"
                      aria-label={`Read ${post.title}`}
                    >
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 33vw"
                      />

                      <span className="jhome-card-image-shade" />

                      <span className="jhome-card-number">
                        {String(index + 2).padStart(2, "0")}
                      </span>

                      <span className="jhome-card-arrow">
                        <ArrowIcon />
                      </span>
                    </Link>

                    <div className="jhome-card-content">
                      <div className="jhome-card-meta">
                        <span className="jhome-category-tag">
                          {post.category}
                        </span>

                        <span>{post.readTime}</span>
                      </div>

                      <h3>
                        <Link href={`/blogs/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <div className="jhome-card-bottom">
                        <span>{formatDate(post.publishedAt)}</span>

                        <Link href={`/blogs/${post.slug}`}>
                          READ STORY <span>↗</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="jhome-empty">
                <span className="jhome-empty-icon">⌕</span>

                <h3>No stories found.</h3>

                <p>
                  We couldn&apos;t find an article matching your search.
                  Try another keyword or topic.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("All topics");
                  }}
                >
                  Clear all filters <span>↗</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="jhome-contact">
          <div className="jhome-shell jhome-contact-inner">
            <div className="jhome-contact-copy">
              <span className="jhome-section-index">
                04 / LET&apos;S BUILD SOMETHING
              </span>

              <h2>
                Have an idea?
                <br />
                Let&apos;s make it <em>real.</em>
              </h2>

              <p>
                Have a technology challenge, a business idea or a project
                worth exploring? Start a conversation with our team.
              </p>

              <Link href="/#contact" className="jhome-contact-link">
                Talk to Zion Technologies

                <span>
                  <ArrowIcon />
                </span>
              </Link>
            </div>

            <div className="jhome-contact-graphic" aria-hidden="true">
              <div className="jhome-contact-ring jhome-contact-ring-one" />
              <div className="jhome-contact-ring jhome-contact-ring-two" />
              <div className="jhome-contact-image jhome-contact-image-one">
                <Image
                  src={featuredPost.image}
                  alt=""
                  fill
                  sizes="(max-width: 680px) 45vw, 220px"
                />
              </div>
              <div className="jhome-contact-image jhome-contact-image-two">
                <Image
                  src={latestPosts[0]?.image ?? featuredPost.image}
                  alt=""
                  fill
                  sizes="(max-width: 680px) 45vw, 220px"
                />
              </div>
              <span>IDEAS INTO IMPACT</span>
            </div>
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  );
}
