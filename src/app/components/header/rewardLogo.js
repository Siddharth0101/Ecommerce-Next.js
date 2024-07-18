import { useState } from "react";
import { motion } from "framer-motion";

export default function RewardLogo({ amount }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center sm:items-start h-auto sm:h-20 mr-5 sm:ml-10 mt-2 sm:mt-0">
      <motion.div
        className="loader border-r-2 rounded-full border-yellow-500 bg-yellow-300 animate-bounce aspect-square w-8 sm:w-12 h-8 sm:h-12 flex justify-center items-center text-yellow-700 mb-0 sm:mb-0 mt-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        $
      </motion.div>
      {showTooltip && (
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-12 p-2 w-48 bg-white border rounded-md shadow-lg text-xs text-gray-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          Verify your social media from our profile tab and get your coins as a
          reward and get a discount during purchase
        </motion.div>
      )}
      <motion.div
        className="ml-2 sm:ml-4 bg-gradient-to-r from-blue-400 to-blue-200 rounded-lg shadow-md p-3 sm:p-4 text-center sm:text-left"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="text-2xl sm:text-3xl font-bold text-white">
          {amount}
        </div>
        <div className="text-xs sm:text-sm text-gray-800 font-semibold">
          Your Coins
        </div>
      </motion.div>
    </div>
  );
}
