import React from "react";
import lensesBg from "../../assets/lensesBg.png";
import lensImg1 from "../../assets/lensImg1.png";
import lensImg2 from "../../assets/lensImg2.png";
import lensImg3 from "../../assets/lensImg3.png";

const Lenses = () => {
  return (
    <div className="flex flex-col items-center w-full py-8 sm:py-12 ">
      <h1 className="text-[32px] text-2xl md:text-5xl xl:text-6xl text-[#06213c] font-kaisei_Decol font-normal text-center mb-5 sm:mb-10">
        Lenses
      </h1>

      <div
        className="w-full bg-cover bg-center flex flex-col lg:flex-row items-center justify-between px-4 py-8 gap-10"
        style={{ backgroundImage: `url(${lensesBg})`, minHeight: "500px" }}
      >
        {/* Left Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col text-center lg:text-left items-center lg:items-start gap-6 lg:ml-[100px]">
          <h2 className="text-2xl md:text-4xl xl:text-5xl text-[#06213c] font-kaisei_Decol">
            Eyeglass lens options include various types
          </h2>
          <p className="text-xs md:text-xl xl:text-2xl  text-[#334155] font-semibold leading-tight">
            Explore our wide range of high-quality lenses, including contact
            lenses, anti-reflective, photochromic, and blue light protection —
            designed to enhance vision clarity, comfort, and everyday eye
            protection.
          </p>
          <a
            href="/products"
            className="w-[200px] h-[50px] bg-[#06213c] text-white text-[20px] 
                       flex items-center justify-center font-kanit no-underline rounded 
                       transition-all duration-300 hover:bg-[#0a2e50]
                       max-md:w-[180px] max-md:h-[45px] max-md:text-[18px]
                       max-sm:w-[160px] max-sm:h-[40px] max-sm:text-[16px]"
          >
            More Product
          </a>
        </div>

        {/* Right Image Animation */}
        <div className="w-full lg:w-[45%] flex items-center justify-center">
          <div className="flex gap-4 group max-md:flex-col max-md:gap-6">
            {/* Image 1 */}
            <div className="transition-all duration-300 ease-in-out group-hover:blur-[2px] group-hover:scale-100 hover:blur-0 hover:scale-[1.5] hover:z-20">
              <img
                src={lensImg1}
                alt="lensImg1"
                className="h-[140px] sm:h-[160px] lg:h-[180px] w-auto"
              />
            </div>

            {/* Image 2 */}
            <div className="scale-[1.5] z-10 transition-all duration-300 ease-in-out group-hover:blur-[2px] group-hover:scale-100 hover:blur-0 hover:scale-[1.5] hover:z-20">
              <img
                src={lensImg2}
                alt="lensImg2"
                className="h-[140px] sm:h-[160px] lg:h-[180px] w-auto"
              />
            </div>

            {/* Image 3 */}
            <div className="transition-all duration-300 ease-in-out group-hover:blur-[2px] group-hover:scale-100 hover:blur-0 hover:scale-[1.5] hover:z-20">
              <img
                src={lensImg3}
                alt="lensImg3"
                className="h-[140px] sm:h-[160px] lg:h-[180px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lenses;
