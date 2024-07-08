"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { productDataActions } from "@/app/store/productData";

const Filters = () => {
  const dispatch = useDispatch();

  const [selectedSortOrder, setSelectedSortOrder] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const currentProductPage = "/product/almond";
  const priceRanges = {
    "/product/raisins": [
      { value: "80-120", label: "₹80 - ₹120" },
      { value: "120-160", label: "₹120 - ₹160" },
      { value: "160-200", label: "₹160 - ₹200" },
      { value: "200-250", label: "₹200 - ₹250" },
    ],
    "/product/almond": [
      { value: "500-700", label: "₹500 - ₹700" },
      { value: "700-900", label: "₹700 - ₹900" },
      { value: "900-1100", label: "₹900 - ₹1100" },
      { value: "1100-1300", label: "₹1100 - ₹1300" },
    ],
  };

  const currentPriceRanges = priceRanges[currentProductPage];

  const handleSortOrderChange = (e) => {
    const value = e.target.value;
    const newValue = selectedSortOrder === value ? "" : value;
    setSelectedSortOrder(newValue);
    dispatch(productDataActions.setSortOrder(newValue));
  };

  const handlePriceRangeChange = (e) => {
    const value = e.target.value;
    const newValue = selectedPriceRange === value ? "" : value;
    setSelectedPriceRange(newValue);
    dispatch(productDataActions.setPriceRange(newValue));
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    const newValue = selectedRating === value ? "" : value;
    setSelectedRating(newValue);
    dispatch(productDataActions.setRating(newValue));
  };

  const handleBestsellerChange = () => {
    const newValue = !bestseller;
    setBestseller(newValue);
    dispatch(productDataActions.setBestseller(newValue));
  };

  useEffect(() => {
    setSelectedPriceRange("");
  }, [currentProductPage]);

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

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Sort By Price</h3>
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="low-to-high"
            value="low-to-high"
            checked={selectedSortOrder === "low-to-high"}
            onChange={handleSortOrderChange}
            className="mr-2 text-blue-600 focus:ring-2 focus:ring-blue-600"
          />
          <label htmlFor="low-to-high" className="font-medium cursor-pointer">
            Low to High
          </label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="high-to-low"
            value="high-to-low"
            checked={selectedSortOrder === "high-to-low"}
            onChange={handleSortOrderChange}
            className="mr-2 text-blue-600 focus:ring-2 focus:ring-blue-600"
          />
          <label htmlFor="high-to-low" className="font-medium cursor-pointer">
            High to Low
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Price Range</h3>
        {currentPriceRanges.map((range) => (
          <div className="flex items-center mb-3" key={range.value}>
            <input
              type="checkbox"
              id={range.value}
              value={range.value}
              checked={selectedPriceRange === range.value}
              onChange={handlePriceRangeChange}
              className="mr-2 text-blue-600 focus:ring-2 focus:ring-blue-600"
            />
            <label htmlFor={range.value} className="font-medium cursor-pointer">
              {range.label}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">User Rating</h3>
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="4-and-above"
            value="4-and-above"
            checked={selectedRating === "4-and-above"}
            onChange={handleRatingChange}
            className="mr-2 text-yellow-500 focus:ring-2 focus:ring-yellow-500"
          />
          <label htmlFor="4-and-above" className="font-medium cursor-pointer">
            4 Stars & Above
          </label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="3-and-above"
            value="3-and-above"
            checked={selectedRating === "3-and-above"}
            onChange={handleRatingChange}
            className="mr-2 text-yellow-500 focus:ring-2 focus:ring-yellow-500"
          />
          <label htmlFor="3-and-above" className="font-medium cursor-pointer">
            3 Stars & Above
          </label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="2-and-above"
            value="2-and-above"
            checked={selectedRating === "2-and-above"}
            onChange={handleRatingChange}
            className="mr-2 text-yellow-500 focus:ring-2 focus:ring-yellow-500"
          />
          <label htmlFor="2-and-above" className="font-medium cursor-pointer">
            2 Stars & Above
          </label>
        </div>
      </div>

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
