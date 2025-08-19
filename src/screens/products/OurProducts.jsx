import React, { useState } from "react";
import { CiFilter, CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import img from "../../assets/ProductImg.png";
import { FaHeart } from "react-icons/fa";

// Dummy product data (unique ids ✅)
const products = [
  {
    id: 1,
    name: "Round, metal-frame sunglasses",
    price: 200,
    shape: "Round",
    brand: "Tommy Hilfiger",
    gender: "Men",
    category: "Sunglasses",
    image: img,
  },
  {
    id: 2,
    name: "Oval sunglasses",
    price: 400,
    shape: "Oval",
    brand: "Scott",
    gender: "Women",
    category: "Sunglasses",
    image: img,
  },
  {
    id: 3,
    name: "Square eyeglasses",
    price: 700,
    shape: "Square",
    brand: "French Connection",
    gender: "Unisex",
    category: "Eyeglasses",
    image: img,
  },
  {
    id: 4,
    name: "Hexagonal sunglasses",
    price: 1200,
    shape: "Hexagonal",
    brand: "Page 4",
    gender: "Men",
    category: "Sunglasses",
    image: img,
  },
  {
    id: 5,
    name: "Aviator lenses",
    price: 500,
    shape: "Aviator",
    brand: "Spaco",
    gender: "Kids",
    category: "Lenses",
    image: img,
  },
  {
    id: 6,
    name: "Round eyeglasses",
    price: 350,
    shape: "Round",
    brand: "Scavin",
    gender: "Women",
    category: "Eyeglasses",
    image: img,
  },
  {
    id: 7,
    name: "Square sunglasses",
    price: 450,
    shape: "Square",
    brand: "Wolf Eye",
    gender: "Men",
    category: "Sunglasses",
    image: img,
  },
  {
    id: 8,
    name: "Oval prescription lenses",
    price: 600,
    shape: "Oval",
    brand: "Ray-Ban",
    gender: "Unisex",
    category: "Lenses",
    image: img,
  },
  {
    id: 9,
    name: "Hexagonal eyeglasses",
    price: 900,
    shape: "Hexagonal",
    brand: "Boss",
    gender: "Men",
    category: "Eyeglasses",
    image: img,
  },
  {
    id: 10,
    name: "Classic aviator sunglasses",
    price: 1100,
    shape: "Aviator",
    brand: "Police",
    gender: "Women",
    category: "Sunglasses",
    image: img,
  },
  {
    id: 11,
    name: "Round lightweight sunglasses",
    price: 250,
    shape: "Round",
    brand: "Vogue",
    gender: "Kids",
    category: "Sunglasses",
    image: img,
  },
  {
    id: 12,
    name: "Square bold eyeglasses",
    price: 750,
    shape: "Square",
    brand: "Prada",
    gender: "Unisex",
    category: "Eyeglasses",
    image: img,
  },
  {
    id: 13,
    name: "Oval fashion sunglasses",
    price: 550,
    shape: "Oval",
    brand: "Gucci",
    gender: "Women",
    category: "Sunglasses",
    image: img,
  },
  {
    id: 14,
    name: "Hexagonal rimless lenses",
    price: 1300,
    shape: "Hexagonal",
    brand: "Calvin Klein",
    gender: "Men",
    category: "Lenses",
    image: img,
  },
  {
    id: 15,
    name: "Aviator sporty sunglasses",
    price: 650,
    shape: "Aviator",
    brand: "Adidas",
    gender: "Unisex",
    category: "Sunglasses",
    image: img,
  },
  {
    id: 16,
    name: "Round retro eyeglasses",
    price: 480,
    shape: "Round",
    brand: "Fastrack",
    gender: "Women",
    category: "Eyeglasses",
    image: img,
  },
  {
    id: 17,
    name: "Square sleek sunglasses",
    price: 800,
    shape: "Square",
    brand: "Oakley",
    gender: "Men",
    category: "Sunglasses",
    image: img,
  },
  {
    id: 18,
    name: "Oval stylish eyeglasses",
    price: 370,
    shape: "Oval",
    brand: "Titan",
    gender: "Kids",
    category: "Eyeglasses",
    image: img,
  },
  {
    id: 19,
    name: "Hexagonal gold sunglasses",
    price: 1400,
    shape: "Hexagonal",
    brand: "Versace",
    gender: "Unisex",
    category: "Sunglasses",
    image: img,
  },
  {
    id: 20,
    name: "Aviator premium lenses",
    price: 950,
    shape: "Aviator",
    brand: "Armani",
    gender: "Men",
    category: "Lenses",
    image: img,
  },
];

// Filter options
const genders = ["Men", "Women", "Kids", "Unisex"];
const categories = ["Eyeglasses", "Sunglasses", "Lenses"];
const frameShapes = ["Oval", "Round", "Square", "Hexagonal", "Aviator"];
const priceRanges = [
  { label: "below 300₹", min: 0, max: 299 },
  { label: "300₹ - 500₹", min: 300, max: 500 },
  { label: "500₹ - 1000₹", min: 501, max: 1000 },
  { label: "Above 1000₹", min: 1001, max: Infinity },
];
const brands = [
  "tommy hilfiger",
  "Scott",
  "french connection",
  "Page 4",
  "Scavin",
  "Wolf Eye",
  "Spaco",
];

const OurProducts = () => {
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
   // ✅ Track liked product IDs
  const [likedProducts, setLikedProducts] = useState([]);

  const [expandedSections, setExpandedSections] = useState({
    gender: true,
    category: false,
    frameShape: false,
    priceRange: false,
    brands: false,
  });

  // Handle checkbox toggle
  const toggleSelection = (value, setSelected) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Handle dropdown toggle
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

    // ✅ Toggle liked status for each product
  const toggleLike = (id) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  // Filtering logic ✅
  const filteredProducts = products.filter((product) => {
    const shapeMatch =
      selectedShapes.length === 0 || selectedShapes.includes(product.shape);

    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    const genderMatch =
      selectedGender.length === 0 || selectedGender.includes(product.gender);

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const priceMatch =
      selectedPrices.length === 0 ||
      selectedPrices.some((rangeLabel) => {
        const range = priceRanges.find((r) => r.label === rangeLabel);
        return product.price >= range.min && product.price <= range.max;
      });

    return (
      shapeMatch && brandMatch && genderMatch && categoryMatch && priceMatch
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 container mx-auto">
      {/* Sidebar */}
      <div className="col-span-1 space-y-6 bg-[#BBCED4] p-4 rounded-lg h-fit">
        <h2 className="font-medium text-2xl flex items-center justify-between gap-2 bg-white px-4 py-1 rounded-md">
          Filter
          <CiFilter className="font-bold text-2xl" />
        </h2>

        {/* Gender */}
        <div className="bg-white p-2 px-3 rounded-md">
          <h3
            className="font-medium text-xl flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("gender")}
          >
            Gender
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                expandedSections.gender ? "rotate-180" : ""
              }`}
            />
          </h3>
          {expandedSections.gender && (
            <div className="mt-2">
              {genders.map((gender) => (
                <label key={gender} className="block">
                  <input
                    type="checkbox"
                    checked={selectedGender.includes(gender)}
                    onChange={() => toggleSelection(gender, setSelectedGender)}
                    className="mr-2"
                  />
                  {gender}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Category */}
        <div className="bg-white p-2 px-4 rounded-md">
          <h3
            className="font-medium text-xl flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("category")}
          >
            Category
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                expandedSections.category ? "rotate-180" : ""
              }`}
            />
          </h3>
          {expandedSections.category && (
            <div className="mt-2">
              {categories.map((category) => (
                <label key={category} className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() =>
                      toggleSelection(category, setSelectedCategories)
                    }
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Frame Shape */}
        <div className="bg-white p-2 px-4 rounded-md">
          <h3
            className="font-medium text-xl flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("frameShape")}
          >
            Frame shape
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                expandedSections.frameShape ? "rotate-180" : ""
              }`}
            />
          </h3>
          {expandedSections.frameShape && (
            <div className="mt-2">
              {frameShapes.map((shape) => (
                <label key={shape} className="block">
                  <input
                    type="checkbox"
                    checked={selectedShapes.includes(shape)}
                    onChange={() => toggleSelection(shape, setSelectedShapes)}
                    className="mr-2"
                  />
                  {shape}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="bg-white p-2 px-4 rounded-md">
          <h3
            className="font-medium text-xl flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("priceRange")}
          >
            Price range
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                expandedSections.priceRange ? "rotate-180" : ""
              }`}
            />
          </h3>
          {expandedSections.priceRange && (
            <div className="mt-2">
              {priceRanges.map((range) => (
                <label key={range.label} className="block">
                  <input
                    type="checkbox"
                    checked={selectedPrices.includes(range.label)}
                    onChange={() =>
                      toggleSelection(range.label, setSelectedPrices)
                    }
                    className="mr-2"
                  />
                  {range.label}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brands */}
        <div className="bg-white p-2 px-4 rounded-md">
          <h3
            className="font-medium text-xl flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("brands")}
          >
            Brand Select
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                expandedSections.brands ? "rotate-180" : ""
              }`}
            />
          </h3>
          {expandedSections.brands && (
            <div className="mt-2">
              {brands.map((brand) => (
                <label key={brand} className="block">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleSelection(brand, setSelectedBrands)}
                    className="mr-2"
                  />
                  {brand}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products */}
      <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            {/* Like Button Per Product */}
            <button
              onClick={() => toggleLike(product.id)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
            >
              {likedProducts.includes(product.id) ? (
                <FaHeart className="w-5 h-5 text-red-500" />
              ) : (
                <CiHeart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors duration-300" />
              )}
            </button>
            
            {/* Product Image Container */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">₹{product.price}</span>
                    <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{product.brand}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                <span className="text-sm text-gray-500">{product.brand}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="bg-gray-100 px-2 py-1 rounded-full">{product.shape}</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters to see more products.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProducts;
