import React from "react";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";
import partner6 from "../../assets/partner6.png";

const partnerData = [
  partner1, partner2, partner3, partner4, partner5, partner6,
  partner1, partner2, partner3, partner4, partner5, partner6, // repeated for loop effect
];

const PartnerSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-white my-[20px]">
      <div className="flex w-fit animate-scrollLeft">
        {partnerData.map((partner, i) => (
          <img
            key={i}
            src={partner}
            alt={`partner${i}`}
            className="h-[120px] w-[200px] mr-[140px] shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerSlider;
