import React, { useState, useEffect } from "react";
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
import PrimaryHeading from "../../../components/Primarycompo/PrimaryHeading";

const headerContent = [
  {
    backgroundImage: mensHeaderBg,
    headingText: "Sunglasses for men",
    description:
      "Stylish and protective sunglasses for men, designed to elevate your everyday look with confidence.",
  },
  {
    backgroundImage: mensHeaderBg2,
    headingText: "Eye lens for men",
    description:
      "Stylish and protective eyelens for men, designed to elevate your everyday look with confidence.",
  },
  {
    backgroundImage: mensHeaderBg3,
    headingText: "Eye glasses for men",
    description:
      "Our Eye Glasses are crafted for clarity, confidence, and durability in every setting.",
  },
];

const sunglasses = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: i % 2 === 0 ? sunglasses1 : sunglasses2,
}));

const eyeGlasses = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: i % 2 === 0 ? sunglasses2 : sunglasses1,
}));

const eyeLenses = [
  { id: 1, src: sunglasses2 },
  { id: 2, src: sunglasses2 },
  { id: 3, src: sunglasses1 },
  { id: 4, src: sunglasses1 },
];

const MensProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("Sunglasses");
  const [headerIndex, setHeaderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderIndex((prev) => (prev + 1) % headerContent.length);
    }, 3000);
    return () => clearInterval(interval);
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

  const getIconForCategory = (category) => {
    switch (category) {
      case "Eye Glasses":
        return categoryIcon1;
      case "Eye Lens":
        return categoryIcon3;
      case "Sunglasses":
      default:
        return categoryIcon2;
    }
  };

  return (
    <div className="w-full h-full flex flex-col  ">
      <Header
        backgroundImage={headerContent[headerIndex].backgroundImage}
        headingText={headerContent[headerIndex].headingText}
        description={headerContent[headerIndex].description}
      />

      <PartnerSlider />

      <PrimaryHeading>Our Optical For Men</PrimaryHeading>

      <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[40px] my-[50px] md:my-[100px]">
        {["Eye Glasses", "Sunglasses", "Eye Lens"].map((category) => {
          const isActive = selectedCategory === category;
          return (
            <div
              key={category}
              className="flex flex-col items-center justify-center w-[90px] sm:w-[140px] md:w-[150px]"
            >
              <img
                src={getIconForCategory(category)}
                alt={`${category} Icon`}
                className="h-[80px] w-[100px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px] object-contain"
                style={
                  isActive
                    ? {
                        filter:
                          "brightness(0) saturate(100%) invert(11%) sepia(10%) saturate(6920%) hue-rotate(181deg) brightness(100%) contrast(100%)",
                      }
                    : {}
                }
              />
              <button
                className={`mt-1 sm:mt-4 flex items-center justify-center text-[14px] sm:text-[20px] md:text-[24px] font-normal transition-all duration-300 border-none 
            h-[30px] sm:h-[60px] md:h-[71px] 
            w-[100px] sm:w-[150px] md:w-[165px]
            ${
              isActive
                ? "bg-[#06213C] text-white"
                : "bg-[#ABA6A6] text-[#06213C]"
            }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[20px] p-[20px] w-full max-w-[1200px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="aspect-square border-[2px] border-[#ccc] flex items-center justify-center"
          >
            <img
              src={product.src}
              alt={`Product ${product.id}`}
              className="max-w-[90%] max-h-[90%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensProduct;
