import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="left">
          <span>Cart: $</span>
        </div>
        <div className="right">
          <span>🔍</span>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className="main-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li className="logo">Dessert <br /> Dreams</li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}