import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LOGO / NAME */}
        <div className="logo">
          Rajyaguru Hir Ashishbhai
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a
            href="https://github.com/H-1709"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="#contact">Contact</a>

          <a
            href="mailto:hirrajyaguru@gmail.com?subject=Hiring%20Inquiry"
            className="hire-btn"
          >
            Hire Me
          </a>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
