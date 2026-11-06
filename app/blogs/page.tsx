"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BlogFooter, BlogNav } from "./blog-nav";
import { blogCategories, blogPosts } from "./blog-data";
import "./blogs.css";

const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
const latestPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug);

export default function BlogsPage() {
  const [category, setCategory] = useState<(typeof blogCategories)[number]>("All topics");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return latestPosts.filter((post) => {
      const matchesCategory = category === "All topics" || post.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${post.title} ${post.excerpt} ${post.category} ${post.keywords.join(" ")}`
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ghana Tech & Business Blog | Zion Technologies",
    description:
      "Practical guides to website design, custom software, cloud solutions and digital strategy for businesses in Ghana and across Africa.",
    url: "https://www.ziontechnologie.com/blogs",
    inLanguage: "en-GH",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.ziontechnologie.com/blogs/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <div className="journal">
      <BlogNav />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        <section className="journal-hero">
          <div className="journal-hero-inner">
            <p className="journal-eyebrow"><span /> THE ZION JOURNAL</p>
            <h1>
              Ideas for a digital
              <br />
              world in <span>motion.</span>
            </h1>
            <p className="journal-hero-copy">
              Practical guides to website design, custom software and digital
              growth for businesses in Ghana and across Africa.
            </p>
            <a className="journal-scroll-link" href="#featured">
              Explore the journal <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="journal-hero-orbit" aria-hidden="true">
            <span className="journal-orbit-ring journal-orbit-ring-one" />
            <span className="journal-orbit-ring journal-orbit-ring-two" />
            <span className="journal-orbit-core">Z</span>
            <span className="journal-orbit-caption">Ideas into impact</span>
          </div>
          <span className="journal-hero-index" aria-hidden="true">
            01 — {String(blogPosts.length).padStart(2, "0")}
          </span>
        </section>

        <section className="journal-featured journal-shell" id="featured">
          <div className="journal-section-kicker">
            <span>01</span>
            <span>Editor&apos;s pick</span>
          </div>
          <Link className="journal-feature-card" href={`/blogs/${featuredPost.slug}`}>
            <div className="journal-feature-image">
              <Image
                src={featuredPost.image}
                alt={featuredPost.imageAlt}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 56vw"
              />
              <span className="journal-image-label">FIELD NOTES / 001</span>
            </div>
            <div className="journal-feature-copy">
              <span className="journal-category">{featuredPost.category}</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className="journal-byline">
                <span>Words by Zion Technologies</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <span className="journal-read-link">
                Read the story <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
        </section>

        <section className="journal-library" id="articles">
          <div className="journal-shell">
            <div className="journal-library-heading">
              <div>
                <div className="journal-section-kicker">
                  <span>02</span>
                  <span>Ideas worth exploring</span>
                </div>
                <h2>Latest thinking<span>.</span></h2>
              </div>
              <p>Useful perspectives for Ghanaian businesses making their next digital decision.</p>
            </div>

            <div className="journal-tools">
              <div className="journal-topics" aria-label="Filter articles by topic">
                {blogCategories.map((topic) => (
                  <button
                    className={category === topic ? "is-active" : ""}
                    key={topic}
                    type="button"
                    aria-pressed={category === topic}
                    onClick={() => setCategory(topic)}
                  >
                    {topic}
                  </button>
                ))}
              </div>
              <label className="journal-search">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="10.8" cy="10.8" r="6.8" />
                  <path d="m16 16 4.2 4.2" />
                </svg>
                <span className="visually-hidden">Search articles</span>
                <input
                  type="search"
                  placeholder="Search the journal"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <kbd>/</kbd>
              </label>
            </div>

            <div className="journal-results" aria-live="polite">
              <span>
                {filteredPosts.length} {filteredPosts.length === 1 ? "story" : "stories"}
              </span>
              {query && <span>matching “{query}”</span>}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="journal-grid">
                {filteredPosts.map((post, index) => (
                  <article className="journal-card" key={post.slug}>
                    <Link
                      className="journal-card-image"
                      href={`/blogs/${post.slug}`}
                      aria-label={`Read: ${post.title}`}
                    >
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      />
                      <span className="journal-card-number">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                      <span className="journal-card-arrow" aria-hidden="true">↗</span>
                    </Link>
                    <div className="journal-card-body">
                      <div className="journal-card-meta">
                        <span className="journal-category">{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3>
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p>{post.excerpt}</p>
                      <Link className="journal-card-link" href={`/blogs/${post.slug}`}>
                        Read article <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="journal-empty">
                <span aria-hidden="true">⌕</span>
                <h3>No stories found.</h3>
                <p>Try a different search or choose another topic.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("All topics");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="journal-contact">
          <div className="journal-shell journal-contact-inner">
            <p className="journal-eyebrow"><span /> YOUR NEXT CHAPTER</p>
            <h2>Good ideas deserve<br />to be <em>built.</em></h2>
            <p>Have a challenge you&apos;re thinking through? We&apos;d love to hear about it.</p>
            <Link href="/#contact">Start a conversation <span aria-hidden="true">↗</span></Link>
          </div>
          <span className="journal-contact-mark" aria-hidden="true">Z</span>
        </section>
      </main>

      <BlogFooter />
    </div>
  );
}
