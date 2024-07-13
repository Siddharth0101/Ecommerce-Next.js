import { motion } from "framer-motion";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { useDispatch } from "react-redux";

export default function CartDisplay({
  id,
  image,
  title,
  originalPrice,
  discountedPrice,
  size,
  quantity,
}) {
  const dispatch = useDispatch();

  const handleRemoveClick = (e) => {
    e.preventDefault();
  };

  const handleEditClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center md:justify-start">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex flex-col w-full md:w-80 rounded-xl bg-white text-gray-700 shadow-md m-4 overflow-hidden cursor-pointer ml-14"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-40 overflow-hidden rounded-t-xl bg-blue-gray-500 text-white shadow-lg bg-gradient-to-r from-blue-500 to-blue-600"
        >
          <motion.img
            src={image}
            className="w-full h-full object-cover"
            alt={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6"
        >
          <h5 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h5>
          <div className="mt-4 flex items-center">
            <p className="text-sm font-semibold text-gray-800 mr-2">
              <span className="line-through">
                Original Price: ₹{originalPrice}
              </span>
            </p>
            <p className="text-sm font-semibold text-green-600">
              Discounted Price: ₹{discountedPrice}
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-2">Size: {size}</p>
          <p className="text-sm text-gray-600">Quantity: {quantity}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-6 pt-0 flex justify-end space-x-4"
        >
          <button
            type="button"
            className="rounded-lg relative w-10 h-10 cursor-pointer flex items-center justify-center border border-blue-500 bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
            onClick={handleEditClick}
          >
            <FiEdit2 className="w-6 h-6 text-white" />
          </button>
          <button
            type="button"
            className="rounded-lg relative w-10 h-10 cursor-pointer flex items-center justify-center border border-red-500 bg-red-500 hover:bg-red-600 active:bg-red-700"
            onClick={handleRemoveClick}
          >
            <FiTrash2 className="w-6 h-6 text-white" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
