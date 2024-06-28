import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import LogOut from "./LogOut";
import { Login } from "./Login";
import { Register } from "./Register";
import ProfileLogo from "./ProfileLogo";

export default function HeaderDropDown() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="p-8 flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
        >
          <ProfileLogo />
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{
            originY: "top",
            translateX: "-50%",
            margin: "10px",
            padding: "15px",
          }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-full left-1/2 transform -translate-x-1/2 w-48 overflow-hidden"
        >
          <motion.li
            variants={itemVariants}
            style={{ marginBottom: "8px", padding: "8px", margin: "4px 0" }}
          >
            <LogOut setOpen={setOpen} />
          </motion.li>
          <motion.li
            variants={itemVariants}
            style={{ marginBottom: "8px", padding: "8px", margin: "4px 0" }}
          >
            <Login setOpen={setOpen} />
          </motion.li>
          <motion.li
            variants={itemVariants}
            style={{ padding: "8px", margin: "4px 0" }}
          >
            <Register setOpen={setOpen} />
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
}
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
