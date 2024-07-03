"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "./loading";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faDiscord,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const displayName = useSelector((state) => state.token.displayName);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center mt-14 mb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full bg-white rounded-xl shadow-2xl p-8 space-y-8"
      >
        <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-8">
          Profile
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-xl p-6 w-full"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Personal Information
            </h3>
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <input
                  placeholder="First Name"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  value={displayName.split(" ")[0]}
                  readOnly
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                  First Name
                </label>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <input
                  placeholder="Last Name"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  value={displayName.split(" ")[1]}
                  readOnly
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                  Last Name
                </label>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative"
              >
                <input
                  placeholder="Email"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  value={displayName}
                  readOnly
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                  Email
                </label>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-xl shadow-xl p-6 w-full"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Social Media
            </h3>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white flex space-x-4"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-3xl hover:text-blue-500 cursor-pointer transition-colors duration-300"
                title="Facebook"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-3xl hover:text-purple-500 cursor-pointer transition-colors duration-300"
                title="Instagram"
              />
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-3xl hover:text-gray-500 cursor-pointer transition-colors duration-300"
                title="Discord"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-3xl hover:text-green-500 cursor-pointer transition-colors duration-300"
                title="WhatsApp"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
