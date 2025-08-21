import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import SunglassesR from "../../assets/HomePageImgs/Sunglassess/SunglassessR.png";
import SunglassesL from "../../assets/HomePageImgs/Sunglassess/SunglassessL.png";
import { productslist } from "../../Data/productslist";

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
const brands = ["Tommy Hilfiger", "Scott", "French Connection", "Page 4", "Scavin", "Wolf Eye", "Spaco"];

const OurProducts = () => {
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("none");
  const location = useLocation();

  const [expandedSections, setExpandedSections] = useState({
    gender: true,
    category: false,
    frameShape: false,
    priceRange: false,
    brands: false,
  });

  const toggleSelection = (value, setSelected) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // ✅ Clear all filters
  const clearAllFilters = () => {
    setSelectedShapes([]);
    setSelectedPrices([]);
    setSelectedBrands([]);
    setSelectedGender([]);
    setSelectedCategories([]);
    setSortBy("none");
  };

  // Pre-apply gender filter from query param if present and scroll to section via hash
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const genderParam = params.get("gender");
    if (genderParam) {
      const normalized = genderParam.toLowerCase();
      const map = { men: "Men", women: "Women", kids: "Kids", unisex: "Unisex" };
      const value = map[normalized] || genderParam;
      if (genders.includes(value)) {
        setSelectedGender([value]);
        setExpandedSections((prev) => ({ ...prev, gender: true }));
      }
    }
  }, [location.search]);

  // Filtering logic ✅
  const filteredProducts = productslist.filter((product) => {
    const shapeMatch = selectedShapes.length === 0 || selectedShapes.includes(product.shape);
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const genderMatch = selectedGender.length === 0 || selectedGender.includes(product.gender);
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const priceMatch =
      selectedPrices.length === 0 ||
      selectedPrices.some((rangeLabel) => {
        const range = priceRanges.find((r) => r.label === rangeLabel);
        return product.price >= range.min && product.price <= range.max;
      });

    return shapeMatch && brandMatch && genderMatch && categoryMatch && priceMatch;
  });

  // ✅ Apply sorting after filtering
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    return 0;
  });

  return (
    <section id="our-products" className="py-10 md:py-20 space-y-4 md:space-y-8 relative">
      <img src={SunglassesR} alt="" className="absolute top-10 md:top-16 h-14 md:h-20 xl:h-auto right-0 xl:-right-28" />
      <img src={SunglassesL} alt="" className="absolute top-0 h-10 md:h-14 xl:h-auto xl:-left-16" />
      <PrimaryHeading>Our Products</PrimaryHeading>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 gap-y-4 container mx-auto">
        {/* Sidebar */}
        <div className="col-span-1 space-y-6 bg-[#BBCED4] p-4 rounded-lg h-fit w-full">
          <h2 className="font-medium text-2xl flex items-center justify-between gap-2 bg-white px-4 py-1 rounded-md">
            Filter
            <CiFilter className="font-bold text-2xl" />
          </h2>

          {/* ✅ Clear Filters Button */}
          <button
            onClick={clearAllFilters}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Clear All Filters
          </button>

          {/* Gender */}
          <div className="bg-white p-2 px-3 rounded-md">
            <h3
              className="font-medium text-xl flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("gender")}
            >
              Gender
              <IoIosArrowDown
                className={`transition-transform duration-300 ${expandedSections.gender ? "rotate-180" : ""}`}
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
                className={`transition-transform duration-300 ${expandedSections.category ? "rotate-180" : ""}`}
              />
            </h3>
            {expandedSections.category && (
              <div className="mt-2">
                {categories.map((category) => (
                  <label key={category} className="block">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleSelection(category, setSelectedCategories)}
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
                className={`transition-transform duration-300 ${expandedSections.frameShape ? "rotate-180" : ""}`}
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
                className={`transition-transform duration-300 ${expandedSections.priceRange ? "rotate-180" : ""}`}
              />
            </h3>
            {expandedSections.priceRange && (
              <div className="mt-2">
                {priceRanges.map((range) => (
                  <label key={range.label} className="block">
                    <input
                      type="checkbox"
                      checked={selectedPrices.includes(range.label)}
                      onChange={() => toggleSelection(range.label, setSelectedPrices)}
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
                className={`transition-transform duration-300 ${expandedSections.brands ? "rotate-180" : ""}`}
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
        <div className="col-span-3">
          {/* Sorting Dropdown */}
          <div className="flex md:justify-end mb-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2"
            >
              <option value="none">Sort By</option>
              <option value="priceLow">Price: Low → High</option>
              <option value="priceHigh">Price: High → Low</option>
             
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-4">

            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative w-full sm:h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-medium text-sm md:text-base text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                    <span className="text-sm text-gray-500">{product.brand}</span>
                  </div>
                  <div className="hidden md:flex flex-wrap items-center gap-2 text-sm text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{product.shape}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{product.gender}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Products */}
          {sortedProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No products found matching your filters.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
