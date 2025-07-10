import React from "react";
import aboutShopImg from "../../assets/aboutShopImg.png";

const Shopstory = () => {
  return (
    <div className="w-full my-[50px] flex flex-col items-center justify-center">
      <h1 className="text-[68px] font-normal text-[#06213C] font-kaisei_Decol my-[30px] text-center">
        Our Shop Story
      </h1>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-[#BBCED4] p-6 lg:p-[40px] gap-10">
        <div className="w-full lg:w-[30%] flex flex-col gap-[30px] lg:ml-[100px]">
          <h2 className="text-[36px] lg:text-[48px] font-normal text-[#06213C] font-kaisei_Decol text-center lg:text-left">
            Where Clear Vision Meets Passionate Craftsmanship.
          </h2>

          <p className="text-[18px] lg:text-[24px] font-normal text-[#334155] font-kaisei_Decol text-center lg:text-left leading-normal">
            From a humble vision to a trusted destination, our journey began
            with a passion for redefining eyewear. Blending style, precision,
            and care, we’ve been helping people see clearly and look
            confidently. Every frame we offer reflects our commitment to
            quality, innovation, and personal service.
          </p>
        </div>

        <img
          src={aboutShopImg}
          alt="aboutShopImg"
          className="w-full lg:w-[40%] h-[300px] lg:h-[370px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Shopstory;
