"use client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [randomQuote, setRandomQuote] = useState("");

  // Array of quotes
  const quotes = [
    "Welcome to our store! Discover the finest nuts for your health and taste.",
    "Enjoy the goodness of nature with our premium selection of nuts.",
    "Nutritious and delicious nuts await you. Start your journey here!",
    "Indulge in quality nuts that satisfy both your cravings and health needs.",
    "Explore our variety of nuts and find your new favorites today!",
  ];

  // Function to get a random quote
  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  useEffect(() => {
    // Set a random quote when the component mounts
    setRandomQuote(getRandomQuote());
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
        <h2 className="text-zinc-900 dark:text-white mt-4 text-lg font-semibold">
          Loading...
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">{randomQuote}</p>
      </div>
    </div>
  );
};

export default Loader;
