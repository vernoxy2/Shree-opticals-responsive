import React from "react";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import cateye from "../../assets/HomePageImgs/Eyeglasses/Ecateye.webp";
import oval from "../../assets/HomePageImgs/Eyeglasses/Eoval.webp";
import square from "../../assets/HomePageImgs/Eyeglasses/Esquare.webp";
import round from "../../assets/HomePageImgs/Eyeglasses/Eround.webp";
import hexagonal from "../../assets/HomePageImgs/Eyeglasses/Ehexagonal.webp";
import aviator from "../../assets/HomePageImgs/Eyeglasses/Eaviator.webp";
import eyeglasses from "../../assets/HomePageImgs/Eyeglasses/SunglassessImg.webp";

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
    <div className="py-10 md:py-20 space-y-4 md:space-y-8">
      <PrimaryHeading>Eyeglasses</PrimaryHeading>

      <div
        dir="rtl"
        className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8 container"
      >

        {/* Eyeglasses items */}
        {EyeglassesData.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-end justify-start border-[3px] border-BorderColr rounded-[16px] group overflow-b-hidden "
          >
              <img
                src={item.image}
                alt={item.label}
                className="object-contain group-hover:scale-105 duration-300 mt-auto"
              />
              <p className="absolute text-sm md:text-3xl text-white font-kaisei_Decol bottom-0  right-1 font-norma bg-gradient-to-l from-[#D5FEFF]/20 to-[#92CAD4] p-2 px-4">
                {item.label}
              </p>
          </div>
        ))}
        {/* Eyeglasses big image in col 1-2 */}
        <div className="hidden xl:block xl:col-start-3 xl:col-span-2 relative">
          <img src={eyeglasses} alt="Eyeglasses showcase" className="w-full h-auto" />
                <h1 className="absolute left-48 bottom-5 text-white text-4xl md:text-7xl font-kaisei_Decol">Glasses</h1>

        </div>
      </div>
    </div>
  );
};

export default Eyeglasses;
