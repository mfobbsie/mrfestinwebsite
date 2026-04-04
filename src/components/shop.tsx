import React from "react";
import "../App.css";
import "./Shop.css";
import cartIcon from "../assets/cart.png"; // add a cart icon to assets

export default function Shop() {
  const categories = [
    { title: "Stickers", color: "var(--accent-teal)" },
    { title: "Prints", color: "var(--accent-pink)" },
    { title: "Original Artwork", color: "var(--accent-purple)" },
  ];

  return (
    <section className="shop-page fade-on-scroll">
      {/* Cart icon */}
      <img src={cartIcon} alt="cart" className="shop-cart-icon" />

      <h1 className="shop-title">Shop</h1>

      <div className="shop-grid">
        {categories.map((cat, i) => (
          <div key={i} className="shop-card" style={{ borderColor: cat.color }}>
            <h2>{cat.title}</h2>
            <p className="coming-soon">Coming Soon</p>
          </div>
        ))}
      </div>
    </section>
  );
}
