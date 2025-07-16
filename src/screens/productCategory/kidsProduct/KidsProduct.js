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
import PrimaryHeading from "../../../components/Primarycompo/PrimaryHeading";

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
    <div className="w-full h-full pb-[100px] flex flex-col ">
      <Header
        backgroundImage={mensHeaderBg}
        headingText={"Sunglasses for Kids"}
        description={
          "Stylish and protective sunglasses for men, designed to elevate your everyday look with confidence."
        }
      />

      <PartnerSlider />

      
      <PrimaryHeading className="mt-12">Our Optical For Kids</PrimaryHeading>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 my-12 md:my-24">
        {["Eye Glasses", "Sunglasses", "Eye Lens"].map((category) => {
          const isActive = selectedCategory === category;
          return (
            <div
            data-aos="fade-up"

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

      <div data-aos="fade" className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
        {kidsProducts.map((product, index) => (
          <div className="w-[80%] mx-auto aspect-square border-2 border-gray-300 flex items-center justify-center my-6" key={index}>
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

export default KidsProduct;
