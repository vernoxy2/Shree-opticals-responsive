import React from "react";
import headerBgImg from "../../assets/headerBgImg.png";
import SpecsHover from "../../components/specsHover/SpecsHover";
import PrimaryBtn from "../../components/Primarycompo/PrimaryBtn";

const HomeHeader = () => {
  return (
    <div className="">
      <div
        className="bg-cover bg-center py-10 md:py-20 flex flex-col items-center justify-center "
        style={{ backgroundImage: `url(${headerBgImg})` }}
      >
        <div className=" container grid grid-cols-1 md:grid-cols-2 gap-y-12">
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start gap-5 sm:gap-6 lg:gap-10">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl text-white font-normal font-kaisei_Decol mt-[100px] leading-none">
                Where Vision <br /> Meets Innovation.
              </h1>

              <p className="lg:w-[400px] text-sm sm:text-lg lg:text-[24px] text-white font-normal font-kaisei_Decol leading-[40px]Home-SubContainer-Description ">
                Stylish tortoiseshell glasses with clear nose pads, dual-tone
                temples, lightweight lenses, and UV-protected, anti-glare vision
                enhancement.
              </p>

              <PrimaryBtn to={"/contactus"}>Visit Now</PrimaryBtn>
          </div>
          <div className="flex flex-col items-center justify-center  object-cover">
            <SpecsHover />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
