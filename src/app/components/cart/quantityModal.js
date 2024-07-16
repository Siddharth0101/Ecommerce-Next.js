import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function QuantityModal({
  initialQuantity,
  closeModal,
  handleSave,
  stock,
}) {
  const [currentQuantity, setCurrentQuantity] = useState(initialQuantity);

  useEffect(() => {
    setCurrentQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleIncrease = () => {
    if (currentQuantity < stock) {
      setCurrentQuantity(currentQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
    }
  };

  const saveChanges = () => {
    handleSave(currentQuantity);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.5, y: "-50%" }}
        animate={{ scale: 1, y: "-50%" }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden w-80 md:w-96"
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Edit Quantity
          </h2>
          <div className="flex items-center justify-center mb-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={handleDecrease}
            >
              -
            </button>
            <p className="text-2xl font-semibold mx-4">{currentQuantity}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                currentQuantity <= stock
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
              onClick={saveChanges}
              disabled={currentQuantity > stock}
            >
              Save
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
