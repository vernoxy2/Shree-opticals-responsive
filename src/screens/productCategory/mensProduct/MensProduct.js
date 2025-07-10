import React, { useState, useEffect } from "react";
import "./MensProduct.css";
import Header from "../../../components/header/Header";
import PartnerSlider from "../../../components/partnerSlider/PartnerSlider";
import categoryIcon1 from "../../../assets/categoryIcon1.png";
import categoryIcon2 from "../../../assets/categoryIcon2.png";
import categoryIcon3 from "../../../assets/categoryIcon3.png";
import sunglasses1 from "../../../assets/sunglasses1.png";
import sunglasses2 from "../../../assets/sunglasses2.png";
import mensHeaderBg from "../../../assets/mensHeaderBg.png";
import mensHeaderBg2 from "../../../assets/mensHeaderBg2.png";
import mensHeaderBg3 from "../../../assets/mensHeaderBg3.png";

// Background images array



const headerContent = [
    {
      backgroundImage: mensHeaderBg,
      headingText: "Sunglasses for men",
      description: "Stylish and protective sunglasses for men, designed to elevate your everyday look with confidence."
    },
    {
      backgroundImage: mensHeaderBg2,
      headingText: "Eye lens for men",
      description: "Stylish and protective eyelens for men, designed to elevate your everyday look with confidence."
    },
    {
      backgroundImage: mensHeaderBg3,
      headingText: "Eye glasses for men",
      description: "Our Eye Glasses are crafted for clarity, confidence, and durability in every setting."
    }
  ];

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

const MensProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("Sunglasses");
  
   const [headerIndex, setHeaderIndex] = useState(0);

  // Auto-change header background every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      
      setHeaderIndex((prev) => (prev + 1) % headerContent.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);

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

  const products = getProducts();

  return (
    <div className="MensProduct-Main-Container">
      <Header
        backgroundImage={headerContent[headerIndex].backgroundImage}
        headingText={headerContent[headerIndex].headingText}
        description={headerContent[headerIndex].description}
      />

      <PartnerSlider />

      <h1 className="MensProduct-Heading">Our Optical For Men</h1>

      <div className="MensProduct-Category-Row-Container">
        {["Eye Glasses", "Sunglasses", "Eye Lens"].map((category, index) => (
          <div key={index} className="MensProduct-Category-Container">
            <img
              src={
                category === "Eye Lens"
                  ? categoryIcon3
                  : category === "Eye Glasses"
                  ? categoryIcon1
                  : category === "Sunglasses"
                  ? categoryIcon2
                  : ""
              }
              alt={`${category} Icon`}
              className={`MensProduct-Category-Icon ${
                selectedCategory === category ? "active" : ""
              }`}
            />
            <button
              className={`MensProduct-Category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>

      <div className="grid-container">
        {products.map((product, index) => (
          <div className="grid-item" key={index}>
            <img src={product.src} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MensProduct;