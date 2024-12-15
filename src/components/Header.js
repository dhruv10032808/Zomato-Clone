import React, { useState } from "react";
import "../App.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      {/* Overlay for Darkening */}
      <div className="overlay"></div>

      {/* Top Navigation */}
      <div className="top-nav">
        <div className="logo">Get The App</div>

        {/* Hamburger Toggle (visible only on small screens) */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        </div>

        {/* Navigation Links */}
        <div className={`top-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#">Investor Relations</a>
          <a href="#">Add restaurant</a>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>
      </div>

      {/* Center Content */}
      <div className="center-content">
        <h1>zomato</h1>
        <p>
          Discover the best food & drinks in <span>Mumbai</span>
        </p>

        {/* Search Bar */}
        <div className="search-bar">
          <div className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="currentColor"
                d="M17.657 16.657L13.414 20.9m0 0L9.172 16.657M13.414 20.9V9m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <select>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
