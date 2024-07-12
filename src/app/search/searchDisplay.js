import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { DescriptionSliceAction } from "@/app/store/descriptionSlice";

export default function SearchDisplay({
  image,
  title,
  description,
  originalPrice,
  discountedPrice,
  bestsellers,
  ratings,
  large,
  medium,
  small,
  image1,
  image2,
  image3,
  image4,
  setOpen,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentPath = usePathname();
  const handleViewClick = (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      originalPrice,
      discountedPrice,
      ratings,
      bestsellers,
      large,
      medium,
      small,
      image1,
      image2,
      image3,
      image4,
    };
    dispatch(DescriptionSliceAction.DISPLAY(data));
    setOpen(false);
    router.push(`/search/${title}`);
  };
  return (
    <div className="flex justify-center md:justify-start">
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 5 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex flex-col w-full md:w-80 rounded-xl bg-white text-gray-700 shadow-md m-4 overflow-hidden cursor-pointer ml-14"
        onClick={handleViewClick}
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
          {bestsellers === "yes" && (
            <div className="absolute top-0 left-0 bg-green-500 text-white py-1 px-2 rounded-b-lg">
              <span className="text-xs font-semibold">Bestseller</span>
            </div>
          )}
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
          <div className="mt-2 flex items-center">
            <p className="text-sm text-gray-600">
              Ratings:{" "}
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>
                  {index < ratings ? (
                    <AiFillStar className="inline-block w-4 h-4 text-yellow-500" />
                  ) : (
                    <AiFillStar className="inline-block w-4 h-4 text-gray-300" />
                  )}
                </span>
              ))}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-6 pt-0"
        >
          <button
            type="button"
            className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
            onClick={handleViewClick}
          >
            <span className="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-30 transition-all duration-300">
              View
            </span>
            <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
              <FiEye className="w-6 h-6 text-white" />
            </span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
