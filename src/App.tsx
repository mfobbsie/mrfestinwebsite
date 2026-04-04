/*App.tsx*/

import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import Shop from "./components/shop";
import Blog from "./components/blog";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🌙 theme toggle 
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark",
    );
  };

  return (
    <>
      <nav className="nav">
        <img src="/mffavicon.png" alt="mf logo" className="nav-logo" />

        {/* Hamburger button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="tag">
            home
          </Link>
          <Link to="/about" className="tag">
            about
          </Link>
          <Link to="/gallery" className="tag">
            gallery
          </Link>
          <Link to="/contact" className="tag">
            contact
          </Link>
          <Link to="/blog" className="tag">
            blog
          </Link>
          <Link to="/shop" className="tag">
            shop
          </Link>
        </div>
      </nav>

      <button onClick={toggleTheme} className="theme-toggle">
        theme
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
