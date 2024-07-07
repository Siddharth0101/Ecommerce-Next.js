import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi"; // Assuming you're using React-icons for icons

export default function ProductDisplay({ image, title, description }) {
  const handleClick = () => {
    console.log("Item added to cart");
  };

  return (
    <div className="flex justify-center md:justify-start">
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 5 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex flex-col w-full md:w-80 rounded-xl bg-white text-gray-700 shadow-md m-4 overflow-hidden cursor-pointer ml-14"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-80 overflow-hidden rounded-t-xl bg-blue-gray-500 text-white shadow-lg bg-gradient-to-r from-blue-500 to-blue-600"
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
          <p className="font-sans text-base font-light leading-relaxed text-gray-600">
            {description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-6 pt-0"
        >
          <button
            onClick={handleClick}
            type="button"
            className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
          >
            <span className="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
              Add
            </span>
            <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
              <FiShoppingCart className="w-6 h-6 text-white" />
            </span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
