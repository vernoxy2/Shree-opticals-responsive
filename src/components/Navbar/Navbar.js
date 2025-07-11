import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full  mx-auto">
      <div className="w-[50%] bg-white flex flex-row justify-around items-center px-[50px] py-[10px] rounded-b-[20px] -rounded-t-[20px] mx-auto">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-[50px] w-[100px] me-[50px]" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <Link
            to="/"
            className="text-[#06213c] text-xl 2xl:text-[24px] no-underline font-normal font-kaisei_Decol"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="text-[#06213c] text-xl 2xl:text-[24px] no-underline font-normal font-kaisei_Decol"
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="text-[#06213c] text-xl 2xl:text-[24px] no-underline font-normal font-kaisei_Decol"
          >
            Products
          </Link>
          <Link
            to="/contactus"
            className="text-[#06213c] text-xl 2xl:text-[24px] no-underline font-normal font-kaisei_Decol"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6 text-[#06213c]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-4 bg-white">
          <Link
            to="/"
            className="block text-[#06213c] text-[20px] font-kaisei_Decol"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="block text-[#06213c] text-[20px] font-kaisei_Decol"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="block text-[#06213c] text-[20px] font-kaisei_Decol"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/contactus"
            className="block text-[#06213c] text-[20px] font-kaisei_Decol"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;