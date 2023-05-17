import React from "react";
import logo from "../img/logo.png";
function Header() {
  return (
    <nav className="Navbar">
        <div className="container-flex">
          <a
            href="/"
            className="site-brand">
            <img
              className="logo-img"
              src={logo}
              alt="logo"
            />
            TAAF <span>Travel</span>
          </a>
          <button
            type="button"
            id="navbar-show-btn"
            className="flex">
            <i className="fas fa-bars"></i>
          </button>
          <div id="navbar-collapse">
            <button
              type="button"
              id="navbar-close-btn"
              className="flex">
              <i className="fas fa-times"></i>
            </button>
            <ul className="navbar-nav">
              <li className="nav-link">
                <a
                  className="nav-item"
                  href="/">
                  Home
                </a>
              </li>
              <li className="nav-link">
                <a
                  className="nav-item"
                  href="/">
                  Places
                </a>
              </li>
              <li className="nav-link">
                <a
                  className="nav-item"
                  href="/">
                  About
                </a>
              </li>
              <li className="nav-link">
                <a
                  className="nav-item"
                  href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
export default Header;