import React from 'react';
import sunglassesSectionImg from '../../assets/sunglassesSectionImg.png';
import sunglassBlackImg from '../../assets/sunglassBlackImg.png';

const Sunglasses = () => {
  return (
    <div className="flex flex-col items-center w-full py-8 sm:py-12">
      <h1 className="text-[32px] text-2xl md:text-5xl xl:text-6xl text-[#06213c] font-kaisei_Decol font-normal text-center sm:mb-10">
        Our Sunglasses
      </h1>

      <div className="w-[80%] flex flex-col lg:flex-row gap-y-12 items-center justify-between gap-10">
        {/* Left Image Section */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <img
            src={sunglassesSectionImg}
            alt="Showcasing sunglasses"
            className="relative object-contain 
               h-[500px] w-[500px] 
               max-lg:h-[400px] max-lg:w-[400px] 
               max-md:h-[450px] max-md:w-[300px] 
               max-sm:h-[300px] max-sm:w-[250px] "
          />
        </div>

        {/* Text + CTA + Image Section */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end gap-[35px] text-center lg:text-right leading-tight">
          <h2 className="text-xl md:text-4xl xl:text-5xl text-[#06213c] font-kaisei_Decol font-bold">
            See Style Clearly – Where Fashion Meets Function.
          </h2>

          <p className="text-xs md:text-xl xl:text-2xl  text-[#334155] font-semibold leading-tight">
            Elevate your style while protecting your eyes with our premium
            sunglasses collection. Featuring polarized, UV-protected, and
            fashion-forward designs, our shades offer comfort, clarity, and
            confidence for every occasion.
          </p>

          <a
            href="/products"
            className="w-[200px] h-[50px] bg-[#06213c] text-white text-[20px] 
                       flex items-center justify-center font-kanit no-underline rounded 
                       transition-all duration-300 hover:bg-[#0a2e50]
                       max-md:w-[180px] max-md:h-[45px] max-md:text-[18px]
                       max-sm:w-[160px] max-sm:h-[40px] max-sm:text-[16px]"
          >
            More Products
          </a>

          <img
            src={sunglassBlackImg}
            alt="Black sunglasses"
            className="h-[300px] w-[600px] object-cover hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Sunglasses;
