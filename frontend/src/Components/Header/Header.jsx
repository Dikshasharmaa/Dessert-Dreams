import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="left">
          <span>Cart: $</span>
        </div>
        <div className="right">
          {/* <span>🔍</span> */}
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className="main-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><Link to="/products">Products</Link></li>
          <li className="logo">Dessert <br /> Dreams</li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}