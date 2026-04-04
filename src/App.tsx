import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

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

  // ✨ scroll-fade animation 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    const el = document.querySelector(".fade-on-scroll");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

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
      </Routes>
    </>
  );
}

export default App;
