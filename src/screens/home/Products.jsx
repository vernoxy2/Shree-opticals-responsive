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
    <div className="flex flex-col items-center w-full my-[100px] ">
      <h1 className="text-[68px] text-[#06213c] font-kaisei_Decol font-normal">
        Our Products
      </h1>
      <h2 className="text-[48px] text-[#06213c] font-kaisei_Decol font-normal my-[50px] mb-[30px]">
        Ours Specks
      </h2>

      <div className="w-full max-w-[80%] flex flex-col gap-y-12 lg:flex-row items-center justify-between ">
        {/* Left Main Image */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-start">
          <img
            src={mainImage}
            alt="Main Product"
            className="h-[600px] w-[600px] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-end gap-6 text-center lg:text-right">
          {/* Heading */}
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] text-[#06213c] font-bold font-kaisei_Decol">
            See Clearly, Wear Confidently
          </h2>

          {/* Description */}
          <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#334155] font-normal font-kaisei_Decol">
            Discover our premium range of eyewear — blending comfort, clarity,
            and cutting-edge style. From everyday essentials to designer frames,
            we have the perfect pair for every face and lifestyle.
          </p>

          {/* Image Thumbnails */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-8 w-full">
            <img
              src={productsSpecksImg1}
              alt="Thumbnail 1"
              onClick={() => setMainImage(productsSectionImg)}
              className="w-[100px] sm:w-[140px] lg:w-[200px] object-contain cursor-pointer"
            />
            <img
              src={productsSpecksImg2}
              alt="Thumbnail 2"
              onClick={() => setMainImage(productsSectionImg2)}
              className="w-[100px] sm:w-[140px] lg:w-[200px] object-contain cursor-pointer"
            />
            <img
              src={productsSpecksImg3}
              alt="Thumbnail 3"
              onClick={() => setMainImage(productsSectionImg3)}
              className="w-[100px] sm:w-[140px] lg:w-[200px] object-contain cursor-pointer"
            />
          </div>

          {/* CTA Button */}
          <a
            href="/products"
            className="w-[160px] sm:w-[180px] h-[45px] sm:h-[50px] bg-[#06213c] text-white text-[16px] sm:text-[18px] flex items-center justify-center font-kanit no-underline mt-4 rounded hover:bg-[#0a2e50] transition-all duration-300"
          >
            More Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
