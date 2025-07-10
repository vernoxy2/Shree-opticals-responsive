import React from "react";
import productWomenCollectionImg from "../../assets/productWomenCollectionImg.png";
import productCollectionTest1 from "../../assets/productCollectionTest1.png";

const ForWomen = () => {
  return (
    <div className="w-full flex flex-row items-center justify-end my-[100px]">
      <div className="w-[60%] flex flex-col items-center justify-center text-center gap-[30px]">
        <h1 className="text-[68px] text-[#06213c] font-normal font-kaisei_Decol">
          Collection For Women
        </h1>
        <div className="w-full flex flex-row items-center justify-center gap-[30px]">
          <div
            className="h-[200px] w-[200px] bg-center bg-cover rounded-[10px] flex items-end justify-center"
            style={{ backgroundImage: `url(${productCollectionTest1})` }}
          >
            <p className="h-[50px] bg-white/80 w-full text-[24px] font-kanit flex items-center justify-center">
              Sunglasses
            </p>
          </div>
          <div
            className="h-[200px] w-[200px] bg-center bg-cover rounded-[10px] flex items-end justify-center"
            style={{ backgroundImage: `url(${productCollectionTest1})` }}
          >
            <p className="h-[50px] bg-white/80 w-full text-[24px] font-kanit flex items-center justify-center">
              Sunglasses
            </p>
          </div>

          <div
            className="h-[200px] w-[200px] bg-center bg-cover rounded-[10px] flex items-end justify-center"
            style={{ backgroundImage: `url(${productCollectionTest1})` }}
          >
            <p className="h-[50px] bg-white/80 w-full text-[24px] font-kanit flex items-center justify-center">
              Sunglasses
            </p>
          </div>
          <div
            className="h-[200px] w-[200px] bg-center bg-cover rounded-[10px] flex items-end justify-center"
            style={{ backgroundImage: `url(${productCollectionTest1})` }}
          >
            <p className="h-[50px] bg-white/80 w-full text-[24px] font-kanit flex items-center justify-center">
              Sunglasses
            </p>
          </div>
        </div>
        <a
          href="/womens-product"
          className="w-[200px] h-[50px] bg-[#06213c] text-[20px] text-white flex items-center justify-center font-kanit no-underline"
        >
          More Product
        </a>
      </div>
      <img
        src={productWomenCollectionImg}
        alt="productWomenCollectionImg"
        className="Product-Men-Collection-Img"
      />
    </div>
  );
};

export default ForWomen;
