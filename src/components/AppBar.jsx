import React from "react";
import logo from "../img/logo.png";
// import cart from "../img/bag.svg";

// code for inline style and you have to
// use a constant that has all the value in it
// as a dictionary.

function AppBar() {
  return (
    <header>
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo" width="140px" />
        </a>
      </div>
      <nav className="nav-links-group">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Contact
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Privacy
          </a>
        </li>
      </nav>
      <div className="cart">
        {/* <img src={cart} alt="Cart" width="20px" /> */}
        <p>Cart</p>
      </div>
    </header>
  );
}

export default AppBar;
