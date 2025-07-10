import React from "react";
import productEyelensImg from "../../assets/productEyelensImg.png";
import productEyelensItem1 from "../../assets/productEyelensItem1.png";
import productEyelensItem2 from "../../assets/productEyelensItem2.png";
import productEyelensItem3 from "../../assets/productEyelensItem3.png";
import productEyelensItem4 from "../../assets/productEyelensItem4.png";

const EyeLens = () => {
  return (
    <div className="w-full my-[100px] flex flex-col items-center justify-center">
      <h1 className="text-[68px] text-[#06213c] font-normal font-kaisei_Decol">
        Collection For Eye Lens
      </h1>
      <div
        className="w-full bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: `url(${productEyelensImg})` }}
      >
        <div className="w-[80%] flex flex-col items-start justify-center my-[30px]">
          <h1 className="text-[48px] text-[#06213c] font-kaisei_Decol font-normal">
            Types of Lens
          </h1>
          <div className="flex flex-row items-center justify-center gap-[30px] my-[30px]">
            <div className="p-[4px] rounded-[10px] bg-gradient-to-b from-[#D5FEFF] to-[#92CAD4]">
              <div className="flex flex-col items-center p-[20px] rounded-[6px] bg-white">
                <img
                  src={productEyelensItem1}
                  alt="productEyelensItem4"
                  className="h-[150px] w-[150px]"
                />
                <p className="text-[24px] font-kaisei_Decol text-[#06213c] font-normal bg-transparent">
                  Brown Color
                </p>
              </div>
            </div>
            <div className="p-[4px] rounded-[10px] bg-gradient-to-b from-[#D5FEFF] to-[#92CAD4]">
              <div className="flex flex-col items-center p-[20px] rounded-[6px] bg-white">
                <img
                  src={productEyelensItem2}
                  alt="productEyelensItem4"
                  className="h-[150px] w-[150px]"
                />
                <p className="text-[24px] font-kaisei_Decol text-[#06213c] font-normal bg-transparent">
                  Blue Color
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-[30px] my-[30px]">
            <div className="p-[4px] rounded-[10px] bg-gradient-to-b from-[#D5FEFF] to-[#92CAD4]">
              <div className="flex flex-col items-center p-[20px] rounded-[6px] bg-white">
                <img
                  src={productEyelensItem3}
                  alt="productEyelensItem4"
                  className="h-[150px] w-[150px]"
                />
                <p className="text-[24px] font-kaisei_Decol text-[#06213c] font-normal bg-transparent">
                  Gray Color
                </p>
              </div>
            </div>
            <div className="p-[4px] rounded-[10px] bg-gradient-to-b from-[#D5FEFF] to-[#92CAD4]">
              <div className="flex flex-col items-center p-[20px] rounded-[6px] bg-white">
                <img
                  src={productEyelensItem4}
                  alt="productEyelensItem4"
                  className="h-[150px] w-[150px]"
                />
                <p className="text-[24px] font-kaisei_Decol text-[#06213c] font-normal">
                  Purple Color
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeLens;
