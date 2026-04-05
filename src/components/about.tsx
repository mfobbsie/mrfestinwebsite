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
          <div className="about-text">
            <p>
              Mr. Festin is the pen name of a Bay Area–based artist whose work
              drifts between the playful and the uncanny. His world is built
              from neon edges, soft shadows, and the quiet tension between order
              and improvisation. What begins as a sketch or a fragment often
              grows into something stranger — a character, a symbol, a small
              universe with its own rules.
            </p>
            <p>
              Working across illustration, mixed media, and digital
              experimentation, Mr. Festin treats each piece as a conversation
              with curiosity itself. He’s drawn to textures that feel lived‑in,
              colors that hum with energy, and stories that reveal themselves
              slowly. His process is equal parts intuition and craft: layering,
              erasing, rebuilding, and letting accidents become part of the
              final language.
            </p>
            <p>
              The name mr. festin is a reminder not to take the work too
              seriously — to stay open, playful, and a little mischievous.
              Behind the scenes, he’s constantly collecting moments: a crooked
              sign, a forgotten object, a flash of neon on a rainy night. These
              fragments become the raw material for a visual world that feels
              both familiar and dreamlike.
            </p>

            <p>
              Whether he’s sketching in a notebook, building a digital
              composition, or experimenting with new mediums, Mr. Festin’s work
              invites viewers to linger, look closer, and step into a story
              that’s still unfolding.
            </p>
          </div>
      </div>
    </section>
  );
}
