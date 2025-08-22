import React from "react";
import Header from "../../components/header/Header";
import productsHeaderImg from "../../assets/ProductHeaderImg.png";
import PartnerSlider from "../../components/partnerSlider/PartnerSlider";
/* import ForMen from "./ForMen";
import ForWomen from "./ForWomen";
import ForKids from "./ForKids";
import EyeLens from "./EyeLens"; */
import OurProducts from "./OurProducts";
import Brand from "./Brand";

const Products = () => {
  return (
    <div className="w-full flex flex-col ">
      {/* Page Header */}
      <Header
        backgroundImage={productsHeaderImg}
        headingText="Sunglasses for man"
        description="Stylish and protective sunglasses for men, designed to elevate your everyday look with confidence."
      />

      {/* Partner Brands Slider */}
      <div className="w-full">
        <PartnerSlider />
      </div>

      {/* Product Sections */}
      <section className="w-full">
        <Brand />
        <OurProducts />
        {/*  <ForMen />
        <ForWomen />
        <ForKids />
        <EyeLens /> */}
      </section>
    </div>
  );
};

export default Products;
