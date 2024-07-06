"use client";
import React, { useState } from "react";

const Filters = ({ onFilterChange }) => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedSize, setSelectedSize] = useState("");

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    onFilterChange("price", e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
    onFilterChange("rating", e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    onFilterChange("minPrice", e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    onFilterChange("maxPrice", e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    onFilterChange("size", e.target.value);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg text-gray-800 w-full md:max-w-md mx-auto mb-4 md:mb-0 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Filter Options</h2>

      {/* Price Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Price</h3>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="price"
            value="low-to-high"
            checked={selectedPrice === "low-to-high"}
            onChange={handlePriceChange}
            className="mr-2 text-blue-600 focus:ring-2 focus:ring-blue-600"
          />
          <label className="font-medium cursor-pointer">Low to High</label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="price"
            value="high-to-low"
            checked={selectedPrice === "high-to-low"}
            onChange={handlePriceChange}
            className="mr-2 text-blue-600 focus:ring-2 focus:ring-blue-600"
          />
          <label className="font-medium cursor-pointer">High to Low</label>
        </div>
      </div>

      {/* Price Range Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Price Range</h3>
        <div className="flex flex-col mb-3">
          <label className="mb-1 font-medium">Minimum Price: ${minPrice}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-full appearance-none bg-blue-100 h-1 rounded-full outline-none"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="mb-1 font-medium">Maximum Price: ${maxPrice}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-full appearance-none bg-blue-100 h-1 rounded-full outline-none"
          />
        </div>
      </div>

      {/* User Rating Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">User Rating</h3>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="rating"
            value="4-and-above"
            checked={selectedRating === "4-and-above"}
            onChange={handleRatingChange}
            className="mr-2 text-yellow-500 focus:ring-2 focus:ring-yellow-500"
          />
          <label className="font-medium cursor-pointer">4 Stars & Above</label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="rating"
            value="3-and-above"
            checked={selectedRating === "3-and-above"}
            onChange={handleRatingChange}
            className="mr-2 text-yellow-500 focus:ring-2 focus:ring-yellow-500"
          />
          <label className="font-medium cursor-pointer">3 Stars & Above</label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="rating"
            value="2-and-above"
            checked={selectedRating === "2-and-above"}
            onChange={handleRatingChange}
            className="mr-2 text-yellow-500 focus:ring-2 focus:ring-yellow-500"
          />
          <label className="font-medium cursor-pointer">2 Stars & Above</label>
        </div>
      </div>

      {/* Size/Quantity Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Size/Quantity</h3>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="size"
            value="small"
            checked={selectedSize === "small"}
            onChange={handleSizeChange}
            className="mr-2 text-green-500 focus:ring-2 focus:ring-green-500"
          />
          <label className="font-medium cursor-pointer">
            Small Pack (100g - 250g)
          </label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="size"
            value="medium"
            checked={selectedSize === "medium"}
            onChange={handleSizeChange}
            className="mr-2 text-green-500 focus:ring-2 focus:ring-green-500"
          />
          <label className="font-medium cursor-pointer">
            Medium Pack (250g - 500g)
          </label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="size"
            value="large"
            checked={selectedSize === "large"}
            onChange={handleSizeChange}
            className="mr-2 text-green-500 focus:ring-2 focus:ring-green-500"
          />
          <label className="font-medium cursor-pointer">
            Large Pack (500g - 1kg)
          </label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="size"
            value="bulk"
            checked={selectedSize === "bulk"}
            onChange={handleSizeChange}
            className="mr-2 text-green-500 focus:ring-2 focus:ring-green-500"
          />
          <label className="font-medium cursor-pointer">Bulk (1kg+)</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
