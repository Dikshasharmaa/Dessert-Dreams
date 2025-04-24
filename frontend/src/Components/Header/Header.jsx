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
          <h1 className="logo-text">Dessert <span>Dreams</span></h1>
          <p className="tagline">Sweet Cakes</p>
        </div>
        <div className="nav-right">
          <span className="cart">🛍️ Cart $</span>
          <span className="auth-links">Login | Register</span>
        </div>
      </nav>
    </header>
  );
}