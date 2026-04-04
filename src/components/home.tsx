/*home.tsx*/

import { useEffect } from "react";
import hero from "../assets/hero.jpg";
import "../App.css";

export default function Home() {
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
    <section id="center">
      <img src={hero} alt="hero" className="hero-full" />

      <div className="title-block fade-on-scroll">
        <h1>mr. festin</h1>
      </div>
    </section>
  );
}
