import React from "react";
import "./SpecsHover.css";
import headerImg1 from "../../assets/headerImg1.png";

const SpecsHover = () => {
  return (
    <div className="specs-container">
      {" "}
      <img src={headerImg1} alt="headerImg1" className="Header-Img" />
      <div className="hover-info">
        <div className="label front">
          Front
          <br />
          Tortoiseshell acetate (plastic)
        </div>
        <div className="label lens">
          Lens Details
          <br />
          Lightweight, anti-glare, UV-protected
        </div>
        <div className="labels nose">
          Nose Pads
          <br />
          Adjustable, clear silicone nose pads
        </div>
        <div className="label temples">
          Temples (Arms)
          <br />
          dual-color transition
          <br />
          (blue-grey to brown tip)
        </div>
      </div>
    </div>
  );
};

export default SpecsHover;
