import React from 'react';
import sunglassesSectionImg from '../../assets/sunglassesSectionImg.png';
import sunglassBlackImg from '../../assets/sunglassBlackImg.png';

const Sunglasses = () => {
  return (
    <div className="flex flex-col items-center w-full mt-[100px] mb-[50px]">
      <h1 className="text-[48px] text-[#06213c] font-kaisei_Decol font-normal mt-[50px] mb-[30px]">
        Our Sunglasses
      </h1>

      <div className="w-[80%] flex flex-col lg:flex-row gap-y-12 items-center justify-between gap-10">
        {/* Left Image Section */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <img
            src={sunglassesSectionImg}
            alt="Showcasing sunglasses"
            className="h-[700px] w-[700px] object-contain"
          />
        </div>

        {/* Text + CTA + Image Section */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end gap-[35px] text-center lg:text-right leading-tight">
          <h2 className="text-[48px] text-[#06213c] font-bold font-kaisei_Decol">
            See Style Clearly – Where Fashion Meets Function.
          </h2>

          <p className="text-[24px] text-[#334155] font-normal font-kaisei_Decol">
            Elevate your style while protecting your eyes with our premium
            sunglasses collection. Featuring polarized, UV-protected, and
            fashion-forward designs, our shades offer comfort, clarity, and
            confidence for every occasion.
          </p>

          <a
            href="/products"
            className="w-[200px] h-[50px] bg-[#06213c] text-white text-[20px] font-kanit flex items-center justify-center rounded hover:bg-[#041728] transition"
          >
            More Products
          </a>

          <img
            src={sunglassBlackImg}
            alt="Black sunglasses"
            className="h-[300px] w-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Sunglasses;
