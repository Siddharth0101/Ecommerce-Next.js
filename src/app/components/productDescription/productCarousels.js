"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "tailwindcss/tailwind.css";

export default function ProductDescriptionPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false); // State for zoom effect

  const product = {
    title: "Product Title",
    description:
      "This is a detailed description of the product. It includes all the features and benefits of the product.",
    originalPrice: 150.0,
    discountPrice: 99.99,
    images: [
      "https://via.placeholder.com/600x400.png?text=Image+1",
      "https://via.placeholder.com/600x400.png?text=Image+2",
      "https://via.placeholder.com/600x400.png?text=Image+3",
    ],
    ratings: 4.5,
    sizes: {
      Small: { label: "Small", inventory: 10 },
      Medium: { label: "Medium", inventory: 5 },
      Large: { label: "Large", inventory: 2 },
    },
    isBestseller: true,
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (
      !isNaN(value) &&
      value >= 1 &&
      value <= product.sizes[selectedSize].inventory
    ) {
      setQuantity(value);
    }
  };

  const addToCart = () => {
    console.log(`Added ${quantity} of ${selectedSize} to cart.`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Image Carousel */}
        <div className="lg:w-1/2">
          <Carousel selectedItem={selectedImage} showThumbs={false}>
            {product.images.map((image, index) => (
              <div key={index} onClick={() => setIsZoomed(!isZoomed)}>
                <motion.img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`cursor-pointer ${
                    selectedImage === index ? "border-2 border-blue-500" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={isZoomed ? { scale: 1.2 } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            ))}
          </Carousel>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`cursor-pointer ${
                  selectedImage === index ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => {
                  setSelectedImage(index);
                  setIsZoomed(true); // Enable zoom when clicking thumbnails
                }}
              />
            ))}
          </div>
        </div>
        {/* Product Description */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-md rounded-lg p-6 text-black"
          >
            {product.isBestseller && (
              <div className="bg-yellow-400 text-white text-center p-2 mb-4 rounded float-right lg:float-none">
                Bestseller
              </div>
            )}
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-4"
            >
              {product.title}
            </motion.h1>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center mb-4 justify-between"
            >
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.ratings ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">
                  {product.ratings} out of 5
                </span>
              </div>
              {/* Bestseller tag moved here */}
            </motion.div>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6 text-lg"
            >
              {product.description}
            </motion.p>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-6 flex items-center"
            >
              <span className="text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-red-500 text-xl font-bold ml-2">
                ${product.discountPrice.toFixed(2)}
              </span>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mb-6"
            >
              <div className="flex mt-2 space-x-2 flex-wrap">
                {Object.values(product.sizes).map((size) => (
                  <button
                    key={size.label}
                    className={`px-4 py-2 border ${
                      selectedSize === size.label
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700"
                    } rounded mt-2 hover:bg-blue-500 hover:text-white focus:outline-none`}
                    onClick={() => setSelectedSize(size.label)}
                  >
                    {size.label} ({size.inventory} available)
                  </button>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center mt-4"
            >
              <label className="mr-2 font-bold">Quantity:</label>
              <input
                type="number"
                className="border px-2 py-1 w-16"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={product.sizes[selectedSize].inventory}
              />
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex space-x-4 mt-6 flex-wrap"
            >
              <button
                onClick={addToCart}
                className="w-full lg:w-auto px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none"
              >
                Add to Cart
              </button>
              <button className="w-full lg:w-auto px-6 py-3 bg-gray-500 text-white rounded shadow hover:bg-gray-600 focus:outline-none mt-4 lg:mt-0">
                Add to Wishlist
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
