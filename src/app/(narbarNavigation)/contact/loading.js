"use client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [randomQuote, setRandomQuote] = useState("");

  // Array of quotes
  const quotes = [
    "We're here to help you with any questions or inquiries you have.",
    "Reach out to us for assistance or to share your feedback.",
    "Contact us today and let's discuss how we can serve you better.",
    "Our team is dedicated to providing excellent support and service.",
    "Connect with us to experience personalized assistance.",
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
