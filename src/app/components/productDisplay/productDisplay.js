import { motion } from "framer-motion";

export default function ProductDisplay({ image, title, description }) {
  const handleClick = () => {
    console.log("hi");
  };

  return (
    <div className="flex justify-center md:justify-start">
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="relative flex flex-col w-full md:w-80 rounded-xl bg-white text-gray-700 shadow-md m-4 overflow-hidden cursor-pointer ml-14"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-80 overflow-hidden rounded-t-xl bg-blue-gray-500 text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
        >
          <img src={image} className="w-full h-full object-cover" alt={title} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6"
        >
          <h5 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
          <p className="font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="p-6 pt-0"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Add To Cart
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
