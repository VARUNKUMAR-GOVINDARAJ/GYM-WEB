import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("about");

  const linkStyle = (name) => ({
    color: active === name ? "red" : "#fff",
    textDecoration: "none",
    fontWeight: active === name ? "bold" : "normal",
    transition: "0.3s"
  });

  return (
    <header
      style={{
        width: "100%",
        padding: "20px 40px",
        background: "#111",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <img
        src="/25.png"
        alt="Gym Power Logo"
        style={{ height: '50px', objectFit: 'contain' }}
      />

      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="#about" style={linkStyle("about")} onClick={() => setActive("about")}>
          About Us
        </a>

        <a href="#facilities" style={linkStyle("facilities")} onClick={() => setActive("facilities")}>
          Facilities
        </a>

        <a href="#bmi" style={linkStyle("bmi")} onClick={() => setActive("bmi")}>
          BMI
        </a>

        <a href="#coaches" style={linkStyle("coaches")} onClick={() => setActive("coaches")}>
          COACHES
        </a>

        <a href="#blog" style={linkStyle("blog")} onClick={() => setActive("blog")}>
          BLOG
        </a>

        <a href="#gallery" style={linkStyle("gallery")} onClick={() => setActive("gallery")}>
          Gallery
        </a>
      </nav>
    </header>
  );
}
