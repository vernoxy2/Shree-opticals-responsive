import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `relative text-[#06213c] text-xl 2xl:text-[24px] font-kaisei_Decol font-normal pb-1 transition-all duration-300 
     before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-[#06213c] 
     before:transition-all before:duration-300 before:ease-in-out 
     ${isActive(path) ? "before:w-full" : "before:w-0 hover:before:w-full"}`;

  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="container flex justify-between items-center px-4 py-3 rounded-b-[20px]">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-[50px] w-[100px]" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {links.map(({ name, path }) => (
            <Link key={name} to={path} className={navLinkClass(path)}>
              {name}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-7 h-7 text-[#06213c]"
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
        <div className="md:hidden w-full px-6 pb-4 pt-2 bg-white shadow-md rounded-b-[20px]">
          <div className="flex flex-col gap-4">
            {links.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={navLinkClass(path)}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
