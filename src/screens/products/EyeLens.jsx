import React from "react";
import productEyelensImg from "../../assets/productEyelensImg.png";
import productEyelensItem1 from "../../assets/productEyelensItem1.png";
import productEyelensItem2 from "../../assets/productEyelensItem2.png";
import productEyelensItem3 from "../../assets/productEyelensItem3.png";
import productEyelensItem4 from "../../assets/productEyelensItem4.png";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import PrimaryBtn from "../../components/Primarycompo/PrimaryBtn";

// Lens Data
const lensItems = [
  { id: 1, label: "Brown Color", image: productEyelensItem1 },
  { id: 2, label: "Blue Color", image: productEyelensItem2 },
  { id: 3, label: "Gray Color", image: productEyelensItem3 },
  { id: 4, label: "Purple Color", image: productEyelensItem4 },
];

const EyeLens = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-10 md:py-20 space-y-4 md:space-y-8 "
      style={{ backgroundImage: `url(${productEyelensImg})` }}
    >
      <div className="container flex flex-col">
        <PrimaryHeading>Collection For Eyelens</PrimaryHeading>

        <div className="w-full md:w-[50%] xl:w-[30%] flex flex-col mt-6 ">
          <h2 className="text-3xl md:text-4xl xl:text-5xl text-[#06213c] font-kaisei_Decol font-normal mb-6 text-center sm:text-start">
            Types of Lens
          </h2>

          {/* Lens Grid */}
          <div className="grid grid-cols-2 gap-6 mb-10">
  {lensItems.map((item) => (
    <div
      key={item.id}
      className="p-[4px] rounded-[10px] bg-gradient-to-b from-[#D5FEFF] to-[#92CAD4]"
    >
      <div className="flex flex-col items-center p-5 rounded-[6px] bg-white">
        <img
          src={item.image}
          alt={item.label}
          className="w-full h-auto object-contain"
        />
        <p className="mt-3 text-base md:text-lg xl:text-xl font-kaisei_Decol text-[#06213c] font-normal text-center">
          {item.label}
        </p>
      </div>
    </div>
  ))}
</div>


          <div className="flex items-center justify-center"><PrimaryBtn>Order Now</PrimaryBtn></div>
        </div>
      </div>
    </div>
  );
};

export default EyeLens;
