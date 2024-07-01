"use client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [randomQuote, setRandomQuote] = useState("");

  const quotes = [
    "Discover the story behind our commitment to quality and health.",
    "Learn about our passion for providing the best nuts for your enjoyment.",
    "Find out how our journey began and where we're heading.",
    "Explore the values that drive us to deliver excellence in every nut.",
    "Join us in celebrating nature's bounty through our finest nut selections.",
  ];

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  useEffect(() => {
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
