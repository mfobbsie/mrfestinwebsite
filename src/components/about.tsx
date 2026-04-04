import { useEffect } from "react";
import "./About.css";
import studio from "../assets/studiowideshot.jpg"; // optional hero image

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    });

    document.querySelectorAll(".fade-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-page">
      {/* Optional full-bleed hero */}
      <div className="about-hero">
        <img src={studio} alt="artwork in studio" />
        <div className="hero-label">mr. festin / archive</div>
      </div>

      {/* Main content */}
      <div className="about-content fade-on-scroll">
        <h1 className="about-title">About</h1>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I’m Mary Fobbs‑Guillory — a creative technologist, designer, and
              software‑engineering transitioner building digital spaces that
              feel intentional, editorial, and alive.
            </p>

            <p>
              My work blends UI design, storytelling, and clean engineering
              patterns. I love neon accents, soft grids, and interfaces that
              feel like curated objects rather than templates.
            </p>

            <p>
              I’m currently building a portfolio of interactive projects in
              JavaScript, React, Python, and SQL — always with an eye toward
              clarity, craft, and community.
            </p>
          </div>

          <div className="about-details">
            <h3>Focus Areas</h3>
            <ul>
              <li>Frontend development (React, TypeScript)</li>
              <li>UI/UX design & branding</li>
              <li>Python + backend fundamentals</li>
              <li>Creative coding & interactive media</li>
            </ul>

            <h3>Currently Exploring</h3>
            <ul>
              <li>Neon‑accented UI systems</li>
              <li>Responsive editorial layouts</li>
              <li>Portfolio storytelling</li>
              <li>Design systems & component libraries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
