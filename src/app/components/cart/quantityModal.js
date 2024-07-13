import { motion } from "framer-motion";

export default function QuantityModal({
  initialQuantity,
  closeModal,
  increaseQuantity,
  decreaseQuantity,
}) {
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
        className="bg-white rounded-lg shadow-lg overflow-hidden w-64"
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Edit Quantity</h2>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <p className="text-xl font-semibold">{initialQuantity}</p>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 mr-2"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={closeModal}
            >
              Save
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
