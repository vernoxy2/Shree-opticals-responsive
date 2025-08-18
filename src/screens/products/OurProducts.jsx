import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import img from "../../assets/productsSpecksImg2.png"

// Dummy product data
const products = [
  {
    id: 1,
    name: "Round, metal-frame sunglasses",
    price: 200,
    shape: "Round",
    brand: "tommy hilfiger",
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
    name: "Square sunglasses",
    price: 700,
    shape: "Square",
    brand: "french connection",
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
    name: "Aviator sunglasses",
    price: 500,
    shape: "Aviator",
    brand: "Spaco",
    gender: "Kids",
    category: "Lenses",
    image: img,
  },
  {
    id: 1,
    name: "Round, metal-frame sunglasses",
    price: 200,
    shape: "Round",
    brand: "tommy hilfiger",
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
    name: "Square sunglasses",
    price: 700,
    shape: "Square",
    brand: "french connection",
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
    name: "Aviator sunglasses",
    price: 500,
    shape: "Aviator",
    brand: "Spaco",
    gender: "Kids",
    category: "Lenses",
    image: img,
  },
];

// Filter options
const genders = ["Men", "Women", "Kids", "Unisex"];
const categories = ["Eyeglasses", "Sunglasses", "Lenses"];
const frameShapes = ["Oval", "Round", "Square", "Hexagonal", "Aviator"];
const priceRanges = [
  { label: "below 300₹", min: 0, max: 300 },
  { label: "300₹ - 500₹", min: 300, max: 500 },
  { label: "500₹ - 1000₹", min: 500, max: 1000 },
  { label: "Above 1000₹", min: 1000, max: Infinity },
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

  // State for dropdown sections
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

  // Filtering logic
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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 container mx-auto l">
      {/* Sidebar */}
      <div className="col-span-1 space-y-6 bg-[#BBCED4] p-4 rounded-lg">
        <h2 className="font-medium text-2xl flex items-center font-kaisei_Decol justify-between gap-2 bg-white px-4 py-1 rounded-md">
          Filter
          <CiFilter className="font-bold text-2xl" />
        </h2>

        {/* Gender */}
        <div className="bg-white p-2 px-3 rounded-md">
          <h3
            className="font-medium text-xl  font-kaisei_Decol flex items-center justify-between cursor-pointer"
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
            <div className=" mt-2">
              {genders.map((gender) => (
                <label key={gender} className="block text-xl font-kanit">
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
            className="font-medium text-xl font-kaisei_Decol flex items-center justify-between cursor-pointer"
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
                <label key={category} className="block text-xl font-kanit">
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
            className="font-medium text-xl  font-kaisei_Decol flex items-center justify-between cursor-pointer"
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
                <label key={shape} className="block text-xl font-kanit">
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
            className="font-medium text-xl font-kaisei_Decol flex items-center justify-between cursor-pointer"
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
                <label key={range.label} className="block text-xl font-kanit">
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
            className="font-medium text-xl  font-kaisei_Decol flex items-center justify-between cursor-pointer"
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
                <label key={brand} className="block text-xl font-kanit">
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
      <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative h-[340px] border rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full  object-contain h-full rounded-md"
            />
            <h4 className="mt-2 text-sm font-medium">{product.name}</h4>
            <p className="text-blue-600 font-semibold">
              Price {product.price}₹
            </p>
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
              ♡
            </button>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default OurProducts;
