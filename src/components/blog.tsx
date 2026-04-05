/*blog.tsx*/

import { useState } from "react";
import type { ReactNode } from "react";
import "./Blog.css";
import PullQuote from "./PullQuote";
import Tag from "../components/Tag";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  accent: string;
  tags: string[];
  content?: ReactNode; 
}

export default function Blog() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const posts: BlogPost[] = [
    {
      title: "Welcome to the Studio",
      date: "March 2026",
      excerpt:
        "A behind-the-scenes look at the creative process and what’s coming next.",
      accent: "var(--accent-teal)",
      tags: ["studio", "process"],
      content: (
        <>
          <p>
            Welcome to the studio — a space where ideas stretch, bend, and
            sometimes break before becoming something new.
          </p>

          <PullQuote accent="var(--accent-pink)">
            Creativity is not a talent. It is a way of operating.
          </PullQuote>

          <p>
            This year, I’m exploring new textures, new palettes, and new ways of
            thinking about neon as a storytelling tool.
          </p>
        </>
      ),
    },
    {
      title: "New Artwork in Progress",
      date: "February 2026",
      excerpt:
        "Exploring color, texture, and the evolving world of Mr. Festin.",
      accent: "var(--accent-pink)",
      tags: ["art", "process"],
    },
    {
      title: "The Story Behind the Neon",
      date: "January 2026",
      excerpt: "How neon accents became part of the visual identity.",
      accent: "var(--accent-purple)",
      tags: ["neon", "identity"],
    },
  ];

  const allTags = ["studio", "process", "art", "neon", "identity"];

  const filteredPosts = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  const tagAccents: Record<string, string> = {
    studio: "var(--accent-teal)",
    process: "var(--accent-teal)",
    art: "var(--accent-pink)",
    neon: "var(--accent-lime)",
    identity: "var(--accent-lime)",
  };


  return (
    <section className="blog-page">
      <h1 className="blog-title">Blog</h1>

      {/* Tag Filter Bar */}
      <div className="blog-tags">
        {allTags.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            accent={tagAccents[tag]}
            active={activeTag === tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          />
        ))}
      </div>

      {/* Blog List */}
      <div className="blog-list">
        {filteredPosts.map((post, i) => (
          <article key={i} className="blog-card">
            <div
              className="blog-accent"
              style={{ backgroundColor: post.accent }}
            ></div>

            <div className="blog-content">
              <h2>{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>

              {/* Optional full content preview */}
              {post.content && (
                <div className="blog-preview">{post.content}</div>
              )}

              {/* Render tags under each post */}
              <div className="blog-post-tags">
                {post.tags.map((tag) => (
                  <Tag
                    key={tag}
                    label={tag}
                    accent={post.accent}
                    active={activeTag === tag}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
