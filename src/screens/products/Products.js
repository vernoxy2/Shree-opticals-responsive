import React from "react";
// import "./Products.css";
import Header from "../../components/header/Header";
import productsHeaderImg from "../../assets/productsHeaderImg.png";
import PartnerSlider from "../../components/partnerSlider/PartnerSlider";
// import productMenCollectionImg from "../../assets/productMenCollectionImg.png";
// import productWomenCollectionImg from "../../assets/productWomenCollectionImg.png";
// import productKidsCollectionImg from "../../assets/productKidsCollectionImg.png";
// import productCollectionTest1 from "../../assets/productCollectionTest1.png";
// import productEyelensImg from "../../assets/productEyelensImg.png";
// import productEyelensItem1 from "../../assets/productEyelensItem1.png";
// import productEyelensItem2 from "../../assets/productEyelensItem2.png";
// import productEyelensItem3 from "../../assets/productEyelensItem3.png";
// import productEyelensItem4 from "../../assets/productEyelensItem4.png";
import ForMen from "./ForMen";
import ForWomen from "./ForWomen";
import ForKids from "./ForKids";
import EyeLens from "./EyeLens";

const Products = () => {
  return (
    <div className="w-full h-full pb-[100px] flex flex-col items-center justify-center">
      <Header
        backgroundImage={productsHeaderImg}
        headingText={"Products"}
        description={
          "Stylish and protective sunglasses for men, designed to elevate your everyday look with confidence."
        }
      />
      <PartnerSlider />

      {/* Collection For Men */}
      {/* <div className="Product-Men-Row-Container">
        <img
          src={productMenCollectionImg}
          alt="productMenCollectionImg"
          className="Product-Men-Collection-Img"
        />
        <div className="Product-Men-Sub-Container">
          <h1 className="Product-Collection-Heading">Collection For Men</h1>
          <div className="Product-Men-Inner-Item-Row-Container">
            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>

            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>

            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>

            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>
          </div>
          <a href="/mens-product" className="Products-More-Btn">
            More Product
          </a>
        </div>
      </div> */}
      <ForMen/>

      {/* Collection For Women */}
      {/* <div className="Product-Women-Row-Container">
        <div className="Product-Men-Sub-Container">
          <h1 className="Product-Collection-Heading">Collection For Women</h1>
          <div className="Product-Men-Inner-Item-Row-Container">
            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>
            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>

            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>
            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>
          </div>
          <a href="/womens-product" className="Products-More-Btn">
            More Product
          </a>
        </div>
        <img
          src={productWomenCollectionImg}
          alt="productWomenCollectionImg"
          className="Product-Men-Collection-Img"
        />
      </div> */}
      <ForWomen/>

      {/* Collection For Kids */}
      {/* <div className="Product-Men-Row-Container">
        <img
          src={productKidsCollectionImg}
          alt="productKidsCollectionImg"
          className="Product-Men-Collection-Img"
        />
        <div className="Product-Men-Sub-Container">
          <h1 className="Product-Collection-Heading">Collection For Kids</h1>
          <div className="Product-Men-Inner-Item-Row-Container">
            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>
            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>

            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>
            <div
              className="Product-Collection-Image"
              style={{ backgroundImage: `url(${productCollectionTest1})` }}
            >
              <p className="Product-Collection-Type">Sunglasses</p>
            </div>
          </div>
          <a href="/kids-product" className="Products-More-Btn">
            More Product
          </a>
        </div>
      </div> */}
      <ForKids/>

      {/* Collection For Eye Lens */}
      {/* <div className="Product-Collection-Eye-Lens-Main-Container">
        <h1 className="Product-Collection-Heading">Collection For Eye Lens</h1>
        <div
          className="Product-Collection-Eye-Lens-Bg-Container"
          style={{ backgroundImage: `url(${productEyelensImg})` }}
        >
          <div className="Product-Collection-Eye-Lens-SubContainer">
            <h1 className="Product-Collection-Eye-Lens-SubHeading">
              Types of Lens
            </h1>
            <div className="Product-Collection-Eye-Lens-Item-Row-Container">
              <div className="Product-Eye-Lens-Box">
                <img
                  src={productEyelensItem1}
                  alt="productEyelensItem1"
                  className="Product-Eyelens-Item-Image"
                />
                <p className="Product-Collection-Eye-Lens-Name">Brown Color</p>
              </div>
              <div className="Product-Eye-Lens-Box">
                <img
                  src={productEyelensItem2}
                  alt="productEyelensItem2"
                  className="Product-Eyelens-Item-Image"
                />
                <p className="Product-Collection-Eye-Lens-Name">Blue Color</p>
              </div>
            </div>

            <div className="Product-Collection-Eye-Lens-Item-Row-Container">
              <div className="Product-Eye-Lens-Box">
                <img
                  src={productEyelensItem3}
                  alt="productEyelensItem3"
                  className="Product-Eyelens-Item-Image"
                />
                <p className="Product-Collection-Eye-Lens-Name">Gray Color</p>
              </div>
              <div className="Product-Eye-Lens-Box">
                <img
                  src={productEyelensItem4}
                  alt="productEyelensItem4"
                  className="Product-Eyelens-Item-Image"
                />
                <p className="Product-Collection-Eye-Lens-Name">Purple Color</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <EyeLens/>

    </div>
  );
};

export default Products;
