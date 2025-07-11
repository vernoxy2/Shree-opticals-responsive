import React, { useState } from "react";
import productsSectionImg from "../../assets/productsSectionImg.png";
import productsSectionImg2 from "../../assets/productsSectionImg2.png";
import productsSectionImg3 from "../../assets/productsSectionImg3.png";
import productsSpecksImg1 from "../../assets/productsSpecksImg1.png";
import productsSpecksImg2 from "../../assets/productsSpecksImg2.png";
import productsSpecksImg3 from "../../assets/productsSpecksImg3.png";

const Products = () => {
  const [mainImage, setMainImage] = useState(productsSectionImg);

  return (
    <div className="flex flex-col items-center w-full my-12 md:my-24 ">
      <h1 className="text-[32px] text-2xl md:text-5xl xl:text-6xl text-[#06213c] font-kaisei_Decol font-normal text-center mb-10 md:mb-20">
        Ours Specks
      </h1>
      

      <div className="w-full max-w-[80%] flex flex-col gap-y-12 lg:flex-row items-center justify-between ">
        {/* Left Main Image */}
        <div className="w-full lg:w-[50%] ">
          <img
            src={mainImage}
            alt="Main Product"
            className="h-[280px] sm:h-[500px] w-[600px] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-end gap-4 md:gap-8 xl:gap-10 text-center lg:text-right">
          {/* Heading */}
          <h2 className="text-lg md:text-4xl xl:text-5xl text-[#06213c] font-kaisei_Decol font-bold">
            See Clearly, Wear Confidently
          </h2>

          {/* Description */}
          <p className="text-xs md:text-xl xl:text-2xl  text-[#334155] font-semibold leading-tight">
            Discover our premium range of eyewear — blending comfort, clarity,
            and cutting-edge style. From everyday essentials to designer frames,
            we have the perfect pair for every face and lifestyle.
          </p>

          {/* Image Thumbnails */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-3 sm:gap-8 w-full">
            <img
              src={productsSpecksImg1}
              alt="Thumbnail 1"
              onClick={() => setMainImage(productsSectionImg)}
              className="w-[80px] sm:w-[140px] lg:w-[200px] object-contain cursor-pointer"
            />
            <img
              src={productsSpecksImg2}
              alt="Thumbnail 2"
              onClick={() => setMainImage(productsSectionImg2)}
              className="w-[80px] sm:w-[140px] lg:w-[200px] object-contain cursor-pointer"
            />
            <img
              src={productsSpecksImg3}
              alt="Thumbnail 3"
              onClick={() => setMainImage(productsSectionImg3)}
              className="w-[80px] sm:w-[140px] lg:w-[200px] object-contain cursor-pointer"
            />
          </div>

          {/* CTA Button */}
          <a
            href="/products"
           className="w-[200px] h-[50px] bg-[#06213c] text-white text-[20px] 
                       flex items-center justify-center font-kanit no-underline rounded 
                       transition-all duration-300 hover:bg-[#0a2e50]
                       max-md:w-[180px] max-md:h-[45px] max-md:text-[18px]
                       max-sm:w-[160px] max-sm:h-[40px] max-sm:text-[16px]"
          >
            More Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
