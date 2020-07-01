import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Google Book Search
        </a>
        <ul id="nav-mobile" className="hide-on-med-and-down right">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/saved">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
