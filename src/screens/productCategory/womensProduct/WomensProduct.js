import React, { useState, useEffect } from "react";
import Header from "../../../components/header/Header";
import PartnerSlider from "../../../components/partnerSlider/PartnerSlider";
import categoryIcon1 from "../../../assets/categoryIcon1.png";
import categoryIcon2 from "../../../assets/categoryIcon2.png";
import categoryIcon3 from "../../../assets/categoryIcon3.png";
import sunglasses1 from "../../../assets/sunglasses1.png";
import sunglasses2 from "../../../assets/sunglasses2.png";
import womensHeaderImg1 from "../../../assets/womensHeaderImg1.png";
import womensHeaderImg2 from "../../../assets/womensHeaderImg2.png";
import womensHeaderImg3 from "../../../assets/womensHeaderImg3.png";

const womenHeaderContent = [
  {
    backgroundImage: womensHeaderImg1,
    headingText: "Sunglasses for Women",
    description:
      "Stylish and protective sunglasses for women, designed to elevate your everyday look with confidence.",
  },
  {
    backgroundImage: womensHeaderImg2,
    headingText: "Eye lens for Women",
    description:
      "Stylish and protective eye lenses for women, designed for clarity and comfort every day.",
  },
  {
    backgroundImage: womensHeaderImg3,
    headingText: "Eye glasses for Women",
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

const WomensProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("Sunglasses");
  const [headerIndex, setHeaderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderIndex((prev) => (prev + 1) % womenHeaderContent.length);
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

  const getIconForCategory = (category) => {
    switch (category) {
      case "Eye Glasses":
        return categoryIcon1;
      case "Eye Lens":
        return categoryIcon3;
      default:
        return categoryIcon2;
    }
  };

  return (
    <div className="w-full h-full pb-24 flex flex-col items-center justify-center">
      {/* Header Section */}
      <Header
        backgroundImage={womenHeaderContent[headerIndex].backgroundImage}
        headingText={womenHeaderContent[headerIndex].headingText}
        description={womenHeaderContent[headerIndex].description}
      />

      <PartnerSlider />

      {/* Heading */}
      <h1 className="mt-10 text-2xl md:text-5xl xl:text-6xl font-normal text-[#06213C] font-kaisei_Decol">
        Our Optical For Women
      </h1>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 my-12 md:my-24">
        {["Eye Glasses", "Sunglasses", "Eye Lens"].map((category) => {
          const isActive = selectedCategory === category;
          return (
            <div
              key={category}
              className="flex flex-col items-center justify-center w-[100px] sm:w-[140px] md:w-[160px]"
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
                onClick={() => setSelectedCategory(category)}
                className={`mt-3 sm:mt-4 flex items-center justify-center text-sm sm:text-lg md:text-xl font-medium transition-all duration-300 border-none 
                  h-[30px] sm:h-[55px] md:h-[65px] 
                  w-[100px] sm:w-[140px] md:w-[165px]
                  ${
                    isActive
                      ? "bg-[#06213C] text-white"
                      : "bg-[#ABA6A6] text-[#06213C]"
                  }`}
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
        {getProducts().map((product, index) => (
          <div
            key={product.id}
            className="w-[80%] mx-auto aspect-square border-2 border-gray-300 flex items-center justify-center my-6"
          >
            <img
              src={product.src}
              alt={`Product ${index + 1}`}
              className="max-w-[90%] max-h-[90%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomensProduct;
