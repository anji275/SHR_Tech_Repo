import React, { useState } from "react";
import "./../styles/Header.css"; 
import small from  "./../images/SHRTech_logo_small.png";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaBars, FaSignInAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { Link } from "react-router-dom"; 
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 


const Header1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><img src={small} alt="SHR Technologies Inc." className="logo-image"/></div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setDropdownOpen(false)}><FaHome /> Home</Link></li>
        <li><Link to="/about" onClick={() => setDropdownOpen(false)}><FaInfoCircle /> About Us</Link></li>
          <li className="dropdown">
          <button style={{fontFamily:"Lusitana', Georgia, serif"}} onClick={() => setDropdownOpen(!dropdownOpen)}>
            <AiOutlineAppstore /> Services {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <li><Link to="/development" onClick={() => setDropdownOpen(false)}> Application Development</Link></li>
             <li><Link to="/business" onClick={() => setDropdownOpen(false)}> Business Consulting</Link></li>
              <li><Link to="/cloud-solutions" onClick={() => setDropdownOpen(false)}> Cloud Solutions</Link></li>
            <li><Link to="/mobile" onClick={() => setDropdownOpen(false)}> Mobile Development</Link></li>
          </ul>
        </li>
        <li><Link to="/career" onClick={() => setDropdownOpen(false)}><MdWork /> Career</Link></li>
        <li><Link to="/contact" onClick={() => setDropdownOpen(false)}><FaPhoneAlt /> Contact Us</Link></li>
        <li><Link to="/login" onClick={() => setDropdownOpen(false)}><FaSignInAlt /> Login</Link></li>
      </ul>
    </nav>
  );
};

export default Header1;