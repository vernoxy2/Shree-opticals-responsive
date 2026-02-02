import React, { useState, useEffect } from "react";
import logo1 from "../../assets/Logo1.svg";
import { Link, useLocation } from "react-router-dom";
import { GoX } from "react-icons/go";
import { LuChevronsDown } from "react-icons/lu";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contactus" },
  ];
  const navLinkClass = () =>
    `relative inline-block leading-none
   text-white text-sm md:text-lg xl:text-xl
   font-kaisei_Decol font-medium
   transition-all duration-300
   before:content-[''] before:absolute before:-bottom-1 before:left-0
   before:h-[2px] before:bg-white before:w-0
   before:transition-all before:duration-300 before:ease-in-out
   hover:before:w-full`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="h-[64px] md:h-[72px]">
      <div className="relative flex bg-primary items-center justify-between px-4 py-3 md:px-10">
        <img
          src={logo1}
          alt="logo"
          className="h-[40px] w-[80px] lg:h-[50px] lg:w-[100px]"
        />
        <div className="hidden md:flex gap-5 lg:gap-12 2xl:gap-x-32 text-white h-full">
          {links.map(({ name, path }) => (
            <Link key={name} to={path} className={navLinkClass(path)}>
              {name}
            </Link>
          ))}
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <GoX className="w-7 h-7 text-[#06213c]" />
            ) : (
              <LuChevronsDown
                className={`w-7 h-7 text-[#06213c] transition-transform duration-300
        ${menuOpen ? "rotate-180" : "rotate-0"}`}
              />
            )}
          </button>
        </div>
        {menuOpen && (
          <div
            className={`absolute top-full left-0 right-0 z-40
    bg-primary text-white backdrop-blur-md shadow-lg
    rounded-b-2xl
    transform transition-all duration-500 ease-in-out
    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
  `}
          >
            <div className="flex flex-col items-center gap-6 py-6">
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
      </div>
    </nav>
  );
};

export default NavBar;
