import React from "react";
import Header from "../../components/header/Header";
import productsHeaderImg from "../../assets/productsHeaderImg.png";
import PartnerSlider from "../../components/partnerSlider/PartnerSlider";
import ForMen from "./ForMen";
import ForWomen from "./ForWomen";
import ForKids from "./ForKids";
import EyeLens from "./EyeLens";

const          Products = () => {
  return (
    <div className="w-full flex flex-col ">
      {/* Page Header */}
      <Header
        backgroundImage={productsHeaderImg}
        headingText="Products"
        description="Stylish and protective sunglasses for men, designed to elevate your everyday look with confidence."
      />

      {/* Partner Brands Slider */}
      <div className="w-full">
        <PartnerSlider />
      </div>

      {/* Product Sections */}
      <section className="w-full">
        <ForMen />
        <ForWomen />
        <ForKids />
        <EyeLens />
      </section>
    </div>
  );
};

export default Products;
