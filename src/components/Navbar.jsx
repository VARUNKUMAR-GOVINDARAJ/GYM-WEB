import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  const linkStyle = (name) => ({
    color: active === name ? "red" : "#fff",
    textDecoration: "none",
    fontWeight: active === name ? "bold" : "normal",
    transition: "0.3s",
    fontSize: "18px",
  });

  return (
    <header
      style={{
        width: "100%",
        padding: "20px 30px",
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
      {/* LOGO */}
      <img
        src="/25.png"
        alt="Gym Power Logo"
        style={{ height: "50px", objectFit: "contain" }}
      />

      {/* HAMBURGER BUTTON (visible only on mobile) */}
      <div
        onClick={() => setOpen(!open)}
        className="hamburger"
        style={{
          display: "none",
          cursor: "pointer",
        }}
      >
        <div style={{ width: 30, height: 3, background: "#fff", margin: "6px 0" }}></div>
        <div style={{ width: 30, height: 3, background: "#fff", margin: "6px 0" }}></div>
        <div style={{ width: 30, height: 3, background: "#fff", margin: "6px 0" }}></div>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav className="desktop-menu" style={{ display: "flex", gap: "25px" }}>
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

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            width: "100%",
            background: "#111",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "18px",
          }}
        >
          <a href="#about" style={linkStyle("about")} onClick={() => { setActive("about"); setOpen(false); }}>
            About Us
          </a>
          <a href="#facilities" style={linkStyle("facilities")} onClick={() => { setActive("facilities"); setOpen(false); }}>
            Facilities
          </a>
          <a href="#bmi" style={linkStyle("bmi")} onClick={() => { setActive("bmi"); setOpen(false); }}>
            BMI
          </a>
          <a href="#coaches" style={linkStyle("coaches")} onClick={() => { setActive("coaches"); setOpen(false); }}>
            COACHES
          </a>
          <a href="#blog" style={linkStyle("blog")} onClick={() => { setActive("blog"); setOpen(false); }}>
            BLOG
          </a>
          <a href="#gallery" style={linkStyle("gallery")} onClick={() => { setActive("gallery"); setOpen(false); }}>
            Gallery
          </a>
        </div>
      )}

      {/* RESPONSIVE CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-menu {
            gap: 15px;
          }
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
