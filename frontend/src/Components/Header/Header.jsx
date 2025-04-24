import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <div className="logo-card">
          <h1 className="logo-text">Sweet <span>Cakes</span></h1>
          <p className="tagline">Awesome Bakery Theme</p>
        </div>
        <div className="nav-right">
          <span className="cart">🛍️ Cart $</span>
          <span className="auth-links">Login | Register</span>
        </div>
      </nav>
    </header>
  );
}