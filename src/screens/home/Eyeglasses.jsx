import React from "react";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import cateye from "../../assets/Ecateye.webp";
import oval from "../../assets/Eoval.webp";
import square from "../../assets/Esquare.webp";
import round from "../../assets/Eround.webp";
import hexagonal from "../../assets/Ehexagonal.webp";
import aviator from "../../assets/Eaviator.webp";

const EyeglassesData = [
  {
    id: 1,
    label: "Cat Eye",
    image: cateye,
  },
  {
    id: 2,
    label: "Oval",
    image: oval,
  },
  {
    id: 3,
    label: "Square",
    image: square,
  },
  {
    id: 4,
    label: "Round",
    image: round,
  },
  {
    id: 5,
    label: "Hexagonal",
    image: hexagonal,
  },
  {
    id: 6,
    label: "Aviator",
    image: aviator,
  },
];

const Eyeglasses = () => {
  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-8">
      <PrimaryHeading>Eyeglasses</PrimaryHeading>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 container ">
        {EyeglassesData.map((item) => (
          <div className="p-[3px] rounded-[10px] bg-gradient-to-t from-[#D5FEFF] to-[#92CAD4] group">
            <div className="relative flex flex-col items-start rounded-[6px] bg-white duration-300 group-hover:bg-[#D5FEFF]">
              <img
                src={item.image}
                alt={item.label}
                className=" object-contain group-hover:scale-90 duration-300"
              />
              <p className="abulute  text-base md:text-lg xl:text-xl font-kaisei_Decol text-[#06213c] font-normal text-center">
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
