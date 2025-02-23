import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import korek_logo from "../assets/korek_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={korek_logo} alt="Logo" className="logo" />
      </Link>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Search</NavLink>
        <NavLink to="/pdfManager" onClick={() => setMenuOpen(false)}>PDF Manager</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
