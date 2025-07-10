import React from 'react';
import WhatSetApartBg from "../../assets/whatSetApartBg.png";

const WhatSetUsApart = () => {
  return (
    <div className="w-full my-[50px] mb-[100px] flex flex-col items-center justify-center">
      <h1 className="text-[40px] md:text-[60px] lg:text-[68px] font-normal text-[#06213C] font-kaisei_Decol my-[30px] text-center">
        What Sets Us Apart
      </h1>

      <div
        className="w-full min-h-[400px] bg-cover bg-center bg-no-repeat flex flex-col items-end justify-end"
        style={{ backgroundImage: `url(${WhatSetApartBg})` }}
      >
        <div className="w-full lg:w-[50%] px-6 md:px-[100px] py-10 flex flex-col items-end gap-[20px] text-right">
          <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-normal text-[#06213C] font-kaisei_Decol">
            See the Difference with Innovation and Care.
          </h2>
          <p className="text-[18px] md:text-[20px] lg:text-[24px] font-normal text-[#334155] font-kaisei_Decol leading-relaxed">
            Advanced digital eye testing, curated eyewear, expert staff, and personalized service make us truly unique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatSetUsApart;
