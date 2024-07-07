"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productDataActions } from "@/app/store/productData";

const Filters = () => {
  const dispatch = useDispatch();
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [bestseller, setBestseller] = useState(false); // State for bestseller filter

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    if (e.target.value === "low-to-high") {
      dispatch(productDataActions.LowToHigh());
    } else if (e.target.value === "high-to-low") {
      dispatch(productDataActions.HighToLow());
    }
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleBestsellerChange = () => {
    setBestseller(!bestseller); // Toggle bestseller state
    // Optionally, dispatch an action or update product list based on bestseller state
  };

  return (
    <div
      className="p-4 bg-white rounded-lg shadow-lg text-gray-800 w-full md:max-w-md mx-auto mb-4 md:mb-0 border border-gray-200"
      style={{
        position: "sticky",
        top: "170px",
        zIndex: 10,
      }}
    >
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
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="price-range"
            value="500-700"
            checked={selectedPrice === "500-700"}
            onChange={handlePriceChange}
            className="mr-2 text-blue-600 focus:ring-2 focus:ring-blue-600"
          />
          <label className="font-medium cursor-pointer">$500 - $700</label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="price-range"
            value="700-900"
            checked={selectedPrice === "700-900"}
            onChange={handlePriceChange}
            className="mr-2 text-blue-600 focus:ring-2 focus:ring-blue-600"
          />
          <label className="font-medium cursor-pointer">$700 - $900</label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="price-range"
            value="900-1100"
            checked={selectedPrice === "900-1100"}
            onChange={handlePriceChange}
            className="mr-2 text-blue-600 focus:ring-2 focus:ring-blue-600"
          />
          <label className="font-medium cursor-pointer">$900 - $1100</label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="price-range"
            value="1100-1300"
            checked={selectedPrice === "1100-1300"}
            onChange={handlePriceChange}
            className="mr-2 text-blue-600 focus:ring-2 focus:ring-blue-600"
          />
          <label className="font-medium cursor-pointer">$1100 - $1300</label>
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

      {/* Bestseller Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Bestseller</h3>
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="bestseller"
            checked={bestseller}
            onChange={handleBestsellerChange}
            className="mr-2 text-green-500 focus:ring-2 focus:ring-green-500"
          />
          <label htmlFor="bestseller" className="font-medium cursor-pointer">
            Bestseller
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
