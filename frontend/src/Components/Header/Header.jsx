import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="top-bar">
        <div className="cart">Cart: $</div>
        <div className="auth-links">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div className="logo">
        <h1>Sweet <span>Cakes</span></h1>
        <p>Awesome Bakery Theme</p>
      </div>
    </header>
  );
}