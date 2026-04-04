import React, { useEffect, useState } from "react";
import "./Gallery.css";

import gal1 from "../assets/gal1.jpg";
import gal2 from "../assets/gal2.jpg";
import gal3 from "../assets/gal3.jpg";
import gal4 from "../assets/gal4.jpg";
import gal5 from "../assets/gal5.jpg";

export default function Gallery() {
  const images = [gal1, gal2, gal3, gal4, gal5];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const closeLightbox = () => setCurrentIndex(null);

  const nextImage = React.useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % images.length;
    });
  }, [images.length]);

  const prevImage = React.useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX - endX;

    if (diff > 50) nextImage(); // swipe left → next
    if (diff < -50) prevImage(); // swipe right → prev

    setTouchStartX(null);
  };

  // Keyboard navigation
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, nextImage, prevImage]);

  // Scroll fade
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
    <section className="gallery-page fade-on-scroll">
      <h1 className="gallery-title">Gallery</h1>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setCurrentIndex(i)}
          >
            <img src={src} alt={`Artwork ${i + 1}`} />
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>

            <button className="lightbox-arrow left" onClick={prevImage}>
              ‹
            </button>

            <img src={images[currentIndex]} alt="Expanded artwork" />

            <button className="lightbox-arrow right" onClick={nextImage}>
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
