import React from 'react';
import aboutValueMissionImg from "../../assets/aboutValueMissionImg.png";

const ValuesAndMission = () => {
  return (
    <div className="w-full my-[50px] flex flex-col items-center justify-center">
      <h1 className="text-[40px] md:text-[60px] lg:text-[68px] font-normal text-[#06213C] font-kaisei_Decol my-[30px] text-center">
        Our Values & Mission
      </h1>

      <div className="w-full px-6 md:w-[90%] flex flex-col lg:flex-row items-center justify-between gap-10 p-6 md:p-[40px]">
        <div className="w-full lg:w-[40%] flex flex-col gap-[30px] text-center lg:text-left">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-normal text-[#06213C] font-kaisei_Decol">
            Clarity in Vision, Integrity in Service
          </h2>
          <p className="text-[18px] md:text-[20px] lg:text-[24px] font-normal text-[#334155] font-kaisei_Decol leading-relaxed">
            Committed to clarity, care, and quality eyewear that enhances
            vision and builds lasting customer trust.
          </p>
        </div>

        <img
          src={aboutValueMissionImg}
          alt="About Values and Mission"
          className="w-full lg:w-[40%] h-[250px] md:h-[300px] lg:h-[370px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ValuesAndMission;
