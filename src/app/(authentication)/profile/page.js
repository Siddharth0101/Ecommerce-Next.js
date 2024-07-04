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
  faTwitter,
  faLinkedin,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const displayName = useSelector((state) => state.token.displayName);
  const email = useSelector((state) => state.token.email); // Assuming email is also stored in the state
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleIconClick = (platform) => {
    alert(`Clicked on ${platform}`);
  };

  const handleSave = () => {
    alert("Profile information saved!");
  };

  if (isLoading) {
    // return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center mt-20 mb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full rounded-xl shadow-2xl p-8 space-y-8 bg-gradient-to-br from-purple-400 to-blue-500"
      >
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
                  value={email}
                  readOnly
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                  Email
                </label>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="relative"
              >
                <input
                  placeholder="Address"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                  Address
                </label>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="relative"
              >
                <input
                  placeholder="Phone Number"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                  Phone Number
                </label>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="mt-6 w-full bg-purple-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300"
                onClick={handleSave}
                type="button"
              >
                Save
              </motion.button>
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
              className="text-white flex flex-wrap justify-center md:justify-start space-x-8 space-y-4 md:space-y-0"
            >
              <SocialIcon
                platform="Facebook"
                icon={faFacebook}
                onClick={handleIconClick}
              />
              <SocialIcon
                platform="Instagram"
                icon={faInstagram}
                onClick={handleIconClick}
              />
              <SocialIcon
                platform="Discord"
                icon={faDiscord}
                onClick={handleIconClick}
              />
              <SocialIcon
                platform="WhatsApp"
                icon={faWhatsapp}
                onClick={handleIconClick}
              />
              <SocialIcon
                platform="Twitter"
                icon={faTwitter}
                onClick={handleIconClick}
              />
              <SocialIcon
                platform="LinkedIn"
                icon={faLinkedin}
                onClick={handleIconClick}
              />
              <SocialIcon
                platform="Snapchat"
                icon={faSnapchat}
                onClick={handleIconClick}
              />
            </motion.div>
            <p className="text-white text-center mt-4 text-lg font-semibold bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg shadow-lg">
              Follow us on these platforms to earn rewards!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SocialIcon({ platform, icon, onClick }) {
  return (
    <motion.div
      className="relative p-2 rounded-full shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full group overflow-hidden">
        <FontAwesomeIcon
          icon={icon}
          className="text-3xl text-white cursor-pointer m-4"
          title={platform}
          onClick={() => onClick(platform)}
        />
        <motion.div
          className="absolute inset-0 bg-blue-900 opacity-0 rounded-full"
          whileHover={{ opacity: 0.4 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        <div className="absolute inset-0 bg-white opacity-0 rounded-full"></div>
      </div>
    </motion.div>
  );
}
