import React from "react";
// import "./Footer.css";
import footerBgImg from "../../assets/footerBgImg.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className="w-full bg-cover bg-center h-[700px] flex flex-col items-center justify-between mb-0 mx-[20px] rounded-[10px]"
        style={{ backgroundImage: `url(${footerBgImg})` }}
      >
        <div className="bg-white w-[200px] h-[80px] flex items-center justify-center rounded-b-[10px]">
          <img src={logo} alt="logo" className="h-[60px] w-[120px] object-cover" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
