import React from "react";
import aboutSectionBg from "../../assets/aboutSectionBg.png";
import aboutSectionSpeck from "../../assets/aboutSectionSpeck.png";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full my-[50px] px-4">
      {/* Heading */}
      <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[68px] text-[#06213c] font-kaisei_Decol font-normal text-center mb-10">
        About Us
      </h1>

      {/* Main Container */}
      <div className="w-[80%] flex flex-col-reverse lg:flex-row items-center justify-center gap-10 max-lg:w-[90%] max-md:flex-col max-md:w-full max-md:gap-5">
        {/* Left Text Block */}
        <div className="flex flex-col justify-center items-center lg:items-start gap-[40px] w-[45%] max-lg:w-full max-lg:gap-[30px] max-md:items-center max-md:text-center max-md:gap-[20px] text-center lg:text-start">
          {/* Subheading */}
          <h2 className="text-[48px] text-[#06213c] font-kaisei_Decol font-bold max-lg:text-[42px] max-md:text-[36px] max-sm:text-[30px]">
            We see the world through a <br /> sharper lens — Shree Opticals.
          </h2>

          {/* Description */}
          <p className="text-[24px] text-[#334155] font-kanit font-medium max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] leading-tight">
            With over Shree Opticals of expertise in the optical industry, we’re
            committed to delivering premium vision care and stylish eyewear
            solutions. Whether you're looking for prescription glasses, trendy
            sunglasses, or the latest in contact lens technology, we bring you
            the perfect blend of fashion, function, and eye health.
          </p>

          {/* CTA Button */}
          <a
            href="/contactus"
            className="w-[200px] h-[50px] bg-[#06213c] text-white text-[20px] 
                       flex items-center justify-center font-kanit no-underline rounded 
                       transition-all duration-300 hover:bg-[#0a2e50]
                       max-md:w-[180px] max-md:h-[45px] max-md:text-[18px]
                       max-sm:w-[160px] max-sm:h-[40px] max-sm:text-[16px]"
          >
            Visit Now
          </a>
        </div>

        {/* Right Image Block */}
        <div
          className="flex flex-row items-end w-[45%] 
                        max-lg:w-full max-lg:justify-center max-md:flex-col max-md:items-center"
        >
          {/* Foreground Speck Image */}
          <img
            src={aboutSectionSpeck}
            alt="aboutSectionSpeck"
            className="h-[200px] w-[400px] object-contain relative top-[90px] z-[1]
                       max-lg:h-[180px] max-lg:w-[350px] max-lg:top-[60px]
                       max-md:h-[150px] max-md:w-[300px] max-md:top-[40px]
                       max-sm:h-[120px] max-sm:w-[240px] max-sm:top-[20px]"
          />

          {/* Background Image */}
          <img
            src={aboutSectionBg}
            alt="aboutSectionBg"
            className="h-[500px] w-[500px] object-contain relative -left-[144px]
                       max-lg:h-[400px] max-lg:w-[400px] max-lg:-left-[150px]
                       max-md:h-[300px] max-md:w-[300px] max-md:left-0
                       max-sm:h-[250px] max-sm:w-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
