/*shop.tsx*/

import { useState, useEffect } from "react";
import "../App.css";
import "./Shop.css";
import cartIcon from "../assets/cart.svg";
import CartDrawer from "./CartDrawer";

export default function Shop() {
  const [cartOpen, setCartOpen] = useState(false);

  const categories = [
    { title: "Stickers", color: "var(--accent-teal)" },
    { title: "Prints", color: "var(--accent-pink)" },
    { title: "Original Artwork", color: "var(--accent-purple)" },
  ];

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
    <>
      <section className="shop-page fade-on-scroll">
        <img
          src={cartIcon}
          alt="cart"
          className="shop-cart-icon"
          onClick={() => setCartOpen(true)}
        />

        <h1 className="shop-title">Shop</h1>

        <div className="shop-grid">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="shop-card"
              style={{ borderColor: cat.color }}
            >
              <h2>{cat.title}</h2>
              <p className="coming-soon">Coming Soon</p>
            </div>
          ))}
        </div>
      </section>

      {/* Drawer must be OUTSIDE the section */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
