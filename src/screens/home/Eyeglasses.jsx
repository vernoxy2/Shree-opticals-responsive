import React from "react";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import cateye from "../../assets/HomePageImgs/Eyeglasses/Ecateye.webp";
import oval from "../../assets/HomePageImgs/Eyeglasses/Eoval.webp";
import square from "../../assets/HomePageImgs/Eyeglasses/Esquare.webp";
import round from "../../assets/HomePageImgs/Eyeglasses/Eround.webp";
import hexagonal from "../../assets/HomePageImgs/Eyeglasses/Ehexagonal.webp";
import aviator from "../../assets/HomePageImgs/Eyeglasses/Eaviator.webp";

const EyeglassesData = [
  { id: 1, label: "Cat Eye", image: cateye },
  { id: 2, label: "Oval", image: oval },
  { id: 3, label: "Square", image: square },
  { id: 4, label: "Round", image: round },
  { id: 5, label: "Hexagonal", image: hexagonal },
  { id: 6, label: "Aviator", image: aviator },
];

const Eyeglasses = () => {
  return (
    <div
      className="py-10 md:py-20 space-y-4 md:space-y-8"
       // This changes direction to Right-to-Left
    >
      <PrimaryHeading>Eyeglasses</PrimaryHeading>
      <div dir="rtl" className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8 container">
        {EyeglassesData.map((item) => (
          <div
            key={item.id}
            className="p-[3px] rounded-[10px] bg-gradient-to-t from-[#D5FEFF] to-[#92CAD4] group"
          >
            <div className="relative flex flex-col items-end rounded-[6px] bg-white duration-300 group-hover:bg-[#D5FEFF]">
              <img
                src={item.image}
                alt={item.label}
                className="h-full object-contain group-hover:scale-90 duration-300"
              />
              <p className="text-base md:text-lg xl:text-xl font-kaisei_Decol text-[#06213c] font-normal text-center w-full">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eyeglasses;
