import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";


const Navbar = () => {
  return (
    
      <div className="Header-Pages-Container">
        <img src={logo} alt="logo" className="Header-Logo" />
        <Link to="/" className="Header-Pages-Text">Home</Link>
        <Link to="/aboutus" className="Header-Pages-Text">About Us</Link>
        <Link to="/products" className="Header-Pages-Text">Products</Link>
        
        <Link to="/contactus" className="Header-Pages-Text">Contact Us</Link>
      </div>

      
  );
};

export default Navbar;
