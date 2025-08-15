import React from "react";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import Gray from "../../assets/HomePageImgs/Lenses/Lgray.webp";
import Brown from "../../assets/HomePageImgs/Lenses/Lbrown.webp";
import Blue from "../../assets/HomePageImgs/Lenses/Lblue.webp";
import Hazel from "../../assets/HomePageImgs/Lenses/Lhazel.webp";
import Honey from "../../assets/HomePageImgs/Lenses/Lhoney.webp";
import Violet from "../../assets/HomePageImgs/Lenses/Lviolet.webp";
import lenses from "../../assets/HomePageImgs/Lenses/LensesImg.webp";

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
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8 container ">
        {LensessData.map((item) => (
          <div className="relative flex flex-col items-end justify-start border-[3px] border-BorderColr rounded-[16px] group overflow-b-hidden ">
            <img
              src={item.image}
              alt={item.label}
              className="object-contain group-hover:scale-105 duration-300 mt-auto"
            />
            <p className=" absolute text-sm md:text-3xl text-white font-kaisei_Decol bottom-0 right-1 font-norma bg-gradient-to-l from-[#D5FEFF]/20 to-[#92CAD4] p-2 px-4">
              {item.label}
            </p>
          </div>
        ))}
        {/* Eyeglasses big image in col 1-2 */}
        <div className="hidden xl:block xl:col-start-3 xl:col-span-2 relative">
          <img
            src={lenses}
            alt="Eyeglasses showcase"
            className="w-full h-auto"
          />
          <h1 className="absolute left-48 bottom-5 text-white text-4xl md:text-7xl font-kaisei_Decol">
            Contacts
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Lensess;
