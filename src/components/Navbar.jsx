import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let scrollY = window.pageYOffset;
      sections.forEach((sec) => {
        const secTop = sec.offsetTop - 120;
        const secHeight = sec.offsetHeight;
        const secId = sec.getAttribute("id");
        if (scrollY >= secTop && scrollY < secTop + secHeight) {
          setActiveSection(secId);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <h2>BHARATHWAJ P</h2>

      {/* Menu Links */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {["home", "about", "skills", "projects", "education", "contact"].map(
          (id) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          )
        )}
      </div>

      {/* Hamburger Menu */}
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}
