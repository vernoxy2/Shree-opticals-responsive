import React from "react";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import Cateye from "../../assets/HomePageImgs/Sunglassess/Scateye.webp";
import oval from "../../assets/HomePageImgs/Sunglassess/Soval.webp";
import round from "../../assets/HomePageImgs/Sunglassess/Sround.webp";
import square from "../../assets/HomePageImgs/Sunglassess/Ssquare.webp";
import hexagonal from "../../assets/HomePageImgs/Sunglassess/Shexagonal.webp";
import aviator from "../../assets/HomePageImgs/Sunglassess/Saviator.webp";

const SunglassessData = [
  {
    id: 1,
    label: "Cat Eye",
    image: Cateye,
  },
  {
    id: 2,
    label: "Oval",
    image: oval,
  },
  {
    id: 3,
    label: "Round",
    image: round,
  },
  {
    id: 4,
    label: "Square",
    image: square,
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

const Sunglassess = () => {
  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-8">
      <PrimaryHeading>Sunglassess</PrimaryHeading>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 container ">
        {SunglassessData.map((item) => (
          <div className="p-[3px] rounded-[10px] bg-gradient-to-b from-[#D5FEFF] to-[#92CAD4] group">
            <div className="  rounded-[6px] bg-white duration-300 group-hover:bg-[#D5FEFF]">
              <img
                src={item.image}
                alt={item.label}
                className=" object-contain group-hover:scale-90 duration-300"
              />
              <p className=" text-base md:text-lg xl:text-xl font-kaisei_Decol text-[#06213c] font-normal text-center">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sunglassess;
