import React, { useState } from "react";
import logo from "../../img/logo-amarillo_1.png"
import "./navbar.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
<img src={logo} />
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#profile">Home</a>
        <a href="#skills">Skills</a>
        <a href="#proyectos">Portfolio</a>
        <a href="#">Contact</a>
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Header;
