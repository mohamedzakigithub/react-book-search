import React, { useEffect } from "react";
import "./style.css";
import M from "materialize-css";

export default function Navbar() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <a href="/" className="logo">
              Google book search
            </a>
            <ul id="nav-mobile" className="hide-on-med-and-down">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/favorites">Favorites</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <h4>
            <a href="/" className="white-text">
              Home
            </a>
          </h4>
        </li>
        <li>
          <h4>
            <a href="/favorites" className="white-text">
              Favorites
            </a>
          </h4>
        </li>
      </ul>
    </>
  );
}
