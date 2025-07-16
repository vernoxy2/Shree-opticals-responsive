import React, { useState } from "react";
import productMenCollectionImg from "../../assets/productMenCollectionImg.png";
import productCollectionTest1 from "../../assets/productCollectionTest1.png";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import PrimaryBtn from "../../components/Primarycompo/PrimaryBtn";

const productItems = [
  { id: 1, label: "Sunglasses", image: productCollectionTest1 },
  { id: 2, label: "Sunglasses", image: productCollectionTest1 },
  { id: 3, label: "Sunglasses", image: productCollectionTest1 },
  { id: 4, label: "Sunglasses", image: productCollectionTest1 },
];

const ForMen = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [clickIndex, setClickIndex] = useState(null);

  return (
    <section className="py-8 md:py-16 space-y-4 md:space-y-8">
      <div className="2xl:container flex flex-col xl:flex-row items-center gap-y-12">
      {/* Banner Image */}
      <img
       data-aos="zoom-out-up"
        src={productMenCollectionImg}
        alt="Men's Collection"
        className="w-full xl:w-[35%] 2xl:w-[40%] h-full object-cover"
      />

      {/* Content Section */}
      <div className="w-full xl:w-[60%] flex flex-col items-center justify-center text-center gap-8">
        <PrimaryHeading>Collection For Men</PrimaryHeading>

        {/* Product Grid */}
         <div
         data-aos="zoom-out-up"
          className="w-[90%] grid grid-cols-3 md:grid-cols-4 justify-items-center items-end"
          onMouseLeave={() => setHoverIndex(null)}
        >
          {productItems.map((item, index) => {
            const isActive = index === hoverIndex || index === clickIndex;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoverIndex(index)}
                onClick={() => setClickIndex(index)}
                className={`relative w-[100px] sm:w-[140px] 2xl:w-[160px] aspect-square bg-center bg-cover rounded-[10px] flex items-end justify-center transition-all duration-300 ease-in-out cursor-pointer
                  ${isActive ? "scale-105" : "scale-100"}
                  ${index > 2 ? "hidden md:flex" : ""}
                `}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {isActive && (
                  <p className="absolute bottom-0 py-1 sm:py-2 bg-white/80 w-full sm:text-xl font-kanit flex items-center justify-center">
                    {item.label}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* More Products Button */}
        <PrimaryBtn to={"/mens-product"}>More Products</PrimaryBtn>
      </div>
    </div>
    </section>
  );
};

export default ForMen;
