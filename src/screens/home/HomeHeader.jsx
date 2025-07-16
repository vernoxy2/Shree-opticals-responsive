import React from "react";
import headerBgImg from "../../assets/headerBgImg.png";
import SpecsHover from "../../components/specsHover/SpecsHover";
import PrimaryBtn from "../../components/Primarycompo/PrimaryBtn";
import Navbar from "../../components/Navbar/Navbar";

const HomeHeader = () => {
  return (
    <section className="m-5">
      {/* Navbar */}
      <Navbar />

      {/* Header Section with Background */}
      <div
      
        className="w-full bg-cover bg-center py-52 md:py-64 flex items-center justify-center rounded-3xl"
        style={{ backgroundImage: `url(${headerBgImg})` }}
      >
        <div  data-aos="fade-up"  className="container mx-auto h-full flex flex-col md:flex-row justify-center lg:justify-between items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-white font-kaisei_Decol font-normal leading-tight">
              Where Vision <br /> Meets Innovation.
            </h1>

            <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-white font-kaisei_Decol leading-relaxed max-w-md">
              Stylish tortoiseshell glasses with clear nose pads, dual-tone
              temples, lightweight lenses, and UV-protected, anti-glare vision
              enhancement.
            </p>

            <div className="mt-2">
              <PrimaryBtn to="/contactus" className="group-hover:text-white"> Visit Now</PrimaryBtn>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden md:flex justify-center items-center w-[40%]">
            <SpecsHover />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
