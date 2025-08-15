import React from "react";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import Cateye from "../../assets/HomePageImgs/Sunglassess/Scateye.webp";
import oval from "../../assets/HomePageImgs/Sunglassess/Soval.webp";
import round from "../../assets/HomePageImgs/Sunglassess/Sround.webp";
import square from "../../assets/HomePageImgs/Sunglassess/Ssquare.webp";
import hexagonal from "../../assets/HomePageImgs/Sunglassess/Shexagonal.webp";
import aviator from "../../assets/HomePageImgs/Sunglassess/Saviator.webp";
import sunglasses from "../../assets/HomePageImgs/Sunglassess/SunglassessImg.webp";

const SunglassessData = [
  { id: 1, label: "Cat Eye", image: Cateye },
  { id: 2, label: "Oval", image: oval },
  { id: 3, label: "Round", image: round },
  { id: 4, label: "Square", image: square },
  { id: 5, label: "Hexagonal", image: hexagonal },
  { id: 6, label: "Aviator", image: aviator },
];

const Sunglassess = () => {
  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-8">
      <PrimaryHeading>Sunglassess</PrimaryHeading>
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8 container">
        {SunglassessData.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Insert empty space before the 3rd item on XL screens */}
            {index === 2 && (
              <div className="hidden xl:block xl:col-start-3 xl:col-span-2 relative">
                <img src={sunglasses} alt="" className="-mt-20" />
                <h1 className="absolute left-48 bottom-5 text-white text-4xl md:text-7xl font-kaisei_Decol">
                  Fashion
                </h1>
              </div>
            )}
            <div className="relative flex flex-col items-start justify-end border-[3px] border-BorderColr rounded-[16px] group overflow-b-hidden">
              
                <img
                  src={item.image}
                  alt={item.label}
                  className="object-contain group-hover:scale-105 duration-300"
                />
                <p className="absolute text-sm md:text-3xl text-white font-kaisei_Decol  right-1 font-norma bg-gradient-to-l from-[#D5FEFF]/20 to-[#92CAD4] p-2 px-4">
                  {item.label}
                </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sunglassess;
