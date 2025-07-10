import React from "react";
// import "./AboutUs.css";
import aboutHeaderImg from "../../assets/aboutHeaderImg.png";
import Header from "../../components/header/Header";
import PartnerSlider from "../../components/partnerSlider/PartnerSlider";
// import aboutShopImg from "../../assets/aboutShopImg.png";
// import aboutValueMissionImg from "../../assets/aboutValueMissionImg.png";
// import WhatSetApartBg from "../../assets/whatSetApartBg.png";
import GetQuote from "../../components/getQuote/GetQuote";
import aboutGetQuotebg from "../../assets/aboutGetQuotebg.png";
import Shopstory from "./Shopstory";
import ValuesAndMission from "./ValuesAndMission";
import WhatSetUsApart from "./WhatSetUsApart";

const AboutUs = () => {
  return (
    <div className="w-full h-full pb-[100px] flex flex-col items-center justify-center">
      <Header
        backgroundImage={aboutHeaderImg}
        headingText={"About Us"}
        description={
          "Experience expert eye care and stylish eyewear, combining innovation, precision, and personalized service for crystal-clear vision and lasting confidence"
        }
      />

      <PartnerSlider />
      {/* shop story */}
      {/* <div className="About-Shop-Story-Main-Container">
        <h1 className="About-Shop-Heading">Our Shop Story</h1>
        <div className="About-Shop-Row-Align-Container">
          <div className="About-Shop-Text-Container">
            <h2 className="About-Shop-SubHeading">
              Where Clear Vision Meets Passionate Craftsmanship.
            </h2>
            <p className="About-Shop-Description">
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
            className="About-Shop-Img"
          />
        </div>
      </div> */}
      <Shopstory />
      {/* values and mission */}
      {/* <div className="About-ValuesMission-Main-Container">
        <h1 className="About-ValueMission-Heading">Our Values & Mission</h1>

        <div className="About-ValuesMission-Row-Align-Container">
          <div className="About-ValuesMission-Text-Container">
            <h2 className="About-ValuesMission-SubHeading">
              Clarity in Vision, Integrity in Service
            </h2>
            <p className="About-ValuesMission-Description">
              Committed to clarity, care, and quality eyewear that enhances
              vision and builds lasting customer trust.
            </p>
          </div>
          <img
            src={aboutValueMissionImg}
            alt="aboutValueMissionImg"
            className="About-ValuesMission-Img"
          />
        </div>
      </div> */}
      <ValuesAndMission/>
      {/* What Sets Us Apart */}
      {/* <div className="About-WhatSetsApart-Main-Container">
        <h1 className="About-WhatSetsApart-Heading">What Sets Us Apart</h1>
        <div
          className="About-WhatSetsApart-Bg-Img-Container"
          style={{ backgroundImage: `url(${WhatSetApartBg})` }}
        >
          <div className="About-WhatSetsApart-Text-Container">
            <h2 className="About-WhatSetsApart-SubHeading">
              See the Difference with Innovation and Care.
            </h2>
            <p className="About-WhatSetsApart-Description">
              Advanced digital eye testing, curated eyewear, expert staff, and
              personalized service make us truly unique.
            </p>
          </div>
        </div>
      </div> */}
      <WhatSetUsApart />
      

      <GetQuote backgroundImage={aboutGetQuotebg} />
    </div>
  );
};

export default AboutUs;
