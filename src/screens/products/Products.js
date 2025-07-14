import React from "react";
import Header from "../../components/header/Header";
import productsHeaderImg from "../../assets/productsHeaderImg.png";
import PartnerSlider from "../../components/partnerSlider/PartnerSlider";
import ForMen from "./ForMen";
import ForWomen from "./ForWomen";
import ForKids from "./ForKids";
import EyeLens from "./EyeLens";

const Products = () => {
  return (
    <div className="w-full h-full pb-[100px] flex flex-col items-center justify-center">
      {/* Top Page Header */}
      <Header
        backgroundImage={productsHeaderImg}
        headingText="Products"
        description="Stylish and protective sunglasses for men, designed to elevate your everyday look with confidence."
      />

      {/* Brand Logos Carousel */}
      <PartnerSlider />

      {/* Product Sections */}
      <ForMen />
      <ForWomen />
      <ForKids />
      <EyeLens />
    </div>
  );
};

export default Products;
