import React from "react";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import Gray from "../../assets/HomePageImgs/Lenses/Lgray.webp";
import Brown from "../../assets/HomePageImgs/Lenses/Lbrown.webp";
import Blue from "../../assets/HomePageImgs/Lenses/Lblue.webp";
import Hazel from "../../assets/HomePageImgs/Lenses/Lhazel.webp";
import Honey from "../../assets/HomePageImgs/Lenses/Lhoney.webp";
import Violet from "../../assets/HomePageImgs/Lenses/Lviolet.webp";

const LensessData = [
  {
    id: 1,
    label: "Gray",
    image: Gray,
  },
  {
    id: 2,
    label: "Brown",
    image: Brown,
  },
  {
    id: 3,
    label: "Blue",
    image: Blue,
  },
  {
    id: 4,
    label: "Hazel",
    image: Hazel,
  },
  {
    id: 5,
    label: "Honey",
    image: Honey,
  },
  {
    id: 6,
    label: "Violet",
    image: Violet,
  },
];

const Lensess = () => {
  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-8" dir="rtl">
      <PrimaryHeading>Lenses</PrimaryHeading>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 container ">
        {LensessData.map((item) => (
          <div className="p-[3px] rounded-[10px] bg-gradient-to-b from-[#D5FEFF] to-[#92CAD4] group">
            <div className="flex flex-col items-end rounded-[6px] bg-white duration-300 group-hover:bg-[#D5FEFF]">
              <img
                src={item.image}
                alt={item.label}
                className="object-contain group-hover:scale-90 duration-300"
              />
              <p className="text-base md:text-lg xl:text-xl font-kaisei_Decol text-[#06213c] font-normal text-center">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lensess;
