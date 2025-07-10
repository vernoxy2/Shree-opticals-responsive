import React, { useState } from "react";
import "./KidsProduct.css";
import mensHeaderBg from "../../../assets/mensHeaderBg.png";
import Header from "../../../components/header/Header";
import PartnerSlider from "../../../components/partnerSlider/PartnerSlider";
import categoryIcon1 from "../../../assets/categoryIcon1.png";
import categoryIcon2 from "../../../assets/categoryIcon2.png";
import categoryIcon3 from "../../../assets/categoryIcon3.png";
import sunglasses1 from "../../../assets/sunglasses1.png";
import sunglasses2 from "../../../assets/sunglasses2.png";

const sunglasses = [
  { id: 1, src: sunglasses1 },
  { id: 2, src: sunglasses2 },
  { id: 3, src: sunglasses1 },
  { id: 4, src: sunglasses2 },
  { id: 5, src: sunglasses1 },
  { id: 6, src: sunglasses2 },
  { id: 7, src: sunglasses1 },
  { id: 8, src: sunglasses2 },
  { id: 9, src: sunglasses1 },
  { id: 10, src: sunglasses2 },
  { id: 11, src: sunglasses1 },
  { id: 12, src: sunglasses2 },
];

const eyeGlasses = [
  { id: 1, src: sunglasses2 },
  { id: 2, src: sunglasses1 },
  { id: 3, src: sunglasses2 },
  { id: 4, src: sunglasses1 },
  { id: 5, src: sunglasses2 },
  { id: 6, src: sunglasses1 },
  { id: 7, src: sunglasses2 },
  { id: 8, src: sunglasses1 },
];

const eyeLenses = [
  { id: 1, src: sunglasses2 },
  { id: 2, src: sunglasses2 },
  { id: 3, src: sunglasses1 },
  { id: 4, src: sunglasses1 },
];

const KidsProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("Sunglasses");

  const getProducts = () => {
    switch (selectedCategory) {
      case "Eye Glasses":
        return eyeGlasses;
      case "Eye Lens":
        return eyeLenses;
      default:
        return sunglasses;
    }
  };

  const kidsProducts = getProducts();

  return (
    <div className="KidsProduct-Main-Container">
      <Header
        backgroundImage={mensHeaderBg}
        headingText={"Sunglasses for Kids"}
        description={
          "Stylish and protective sunglasses for men, designed to elevate your everyday look with confidence."
        }
      />

      <PartnerSlider />

      <h1 className="KidsProduct-Heading">Our Optical For Kids</h1>

      <div className="KidsProduct-Category-Row-Container">
        {["Eye Glasses", "Sunglasses", "Eye Lens"].map((category, index) => (
          <div key={index} className="KidsProduct-Category-Container">
            <img
              src={
                category === "Eye Lens"
                  ? categoryIcon3
                  : category === "Eye Glasses"
                  ? categoryIcon1
                  : category === "Sunglasses"
                  ? categoryIcon2
                  : "" // fallback if none match
              }
              alt={`${category} Icon`}
              className={`KidsProduct-Category-Icon ${
                selectedCategory === category ? "active" : ""
              }`}
            />
            <button
              className={`KidsProduct-Category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>

      <div className="KidsProduct-grid-container">
        {kidsProducts.map((product, index) => (
          <div className="KidsProduct-grid-item" key={index}>
            <img src={product.src} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsProduct;
