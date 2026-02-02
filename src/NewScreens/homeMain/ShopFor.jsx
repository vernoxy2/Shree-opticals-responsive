import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import EyewearImg from "../../assets/HomePageImgs/ShopFor/EyewearImg.png";
import Man from "../../assets/HomePageImgs/ShopFor/Img/Man.webp";
import women from "../../assets/HomePageImgs/ShopFor/Img/women.webp";
import Kids from "../../assets/HomePageImgs/ShopFor/Img/Kids.webp";
import unisex from "../../assets/HomePageImgs/ShopFor/Img/unisex.webp";

const data = [
  {
    id: 1,
    img: Man,
    category: "Man",
    alt: "Men's eyewear collection"
  },
  {
    id: 2,
    img: women,
    category: "Woman",
    alt: "Women's eyewear collection"
  },
  {
    id: 3,
    img: Kids,
    category: "Kids",
    alt: "Kids' eyewear collection"
  },
  {
    id: 4,
    img: unisex,
    category: "Unisex",
    alt: "Unisex eyewear collection"
  },
];

// Arrow Icon Component
const ArrowIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="w-5 h-5 md:w-6 md:h-6"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const ShopFor = () => {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    const map = { Man: "Men", Woman: "Women", Kids: "Kids", Unisex: "Unisex" };
    const gender = map[category] || category;
    navigate({ 
      pathname: "/products", 
      search: `?gender=${encodeURIComponent(gender)}`,
      hash: "#our-products" 
    });
  };

  const handleKeyPress = (e, category) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigate(category);
    }
  };

  return (
    <div className="py-10 md:py-20 space-y-6 md:space-y-10">
      <PrimaryHeading>Shop For</PrimaryHeading>
      {/* Horizontal Cards Grid */}
      <div className="container px-4 sm:px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {data.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={item.id}
              onClick={() => handleNavigate(item.category)}
              onKeyPress={(e) => handleKeyPress(e, item.category)}
              tabIndex={0}
              role="button"
              aria-label={`Shop ${item.category} eyewear`}
              className="relative bg-gray-50 rounded-2xl overflow-hidden hover:bg-primary cursor-pointer group transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#92CAD4] focus:ring-offset-2"
            >
              {/* Arrow Icon */}
              <div className="absolute top-3 left-3 z-10 bg-white/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <ArrowIcon />
              </div>

              {/* Image Container */}
              <div className="aspect-[3/4] relative overflow-hidden items-end">
                <img
                  src={item.img}
                  alt={item.alt}
                  category={item.category}
                  className="w-[80%] h-[80%] object-cover group-hover:scale-105 transition-transform duration-500 ease-out mt-24 ms-20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Eyewear Featured Section (if you still want it) */}
      {/* <div className="container px-4 sm:px-6 md:px-16 mt-8">
        <div 
          data-aos="fade-up" 
          className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
          onClick={() => navigate("/products")}
          tabIndex={0}
          role="button"
          aria-label="Shop all eyewear"
        >
          <img 
            src={EyewearImg} 
            alt="Featured eyewear collection" 
            className="object-cover w-full h-64 md:h-96 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <h2 className="absolute left-6 md:left-10 bottom-6 md:bottom-10 text-white text-3xl md:text-5xl lg:text-6xl font-kaisei_Decol drop-shadow-lg">
            Eyewear
          </h2>
        </div>
      </div> */}
    </div>
  );
};

export default ShopFor;