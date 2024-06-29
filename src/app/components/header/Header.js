"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FiMenu,
  FiArrowRight,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiPlusSquare,
  FiLogIn,
  FiLogOut,
} from "react-icons/fi";
import SearchModal from "./SearchModal";
import SiteLogo from "./SiteLogo";

export default function Header() {
  return (
    <div className="bg-gray-50 sticky top-0 z-50">
      <div className="pt-8">
        <FlipNav />
      </div>
    </div>
  );
}

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <SiteLogo />
      {/* <Logo /> */}
      <NavLink text="Home" />
      <NavLink text="Store" />
      <NavLink text="About Us" />
      <NavLink text="Contact Us" />
    </div>
  );
};

const NavLink = ({ text }) => {
  return (
    <a
      href="#"
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-950 text-2xl"
      >
        <FiSearch onClick={() => setOpenSearch(true)} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-950 text-2xl ml-1"
      >
        <FiShoppingCart />
      </motion.button>
      <UserDropdown />
      <SearchModal open={openSearch} setOpen={setOpenSearch} />;
    </div>
  );
};

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Implement logout functionality
    setIsOpen(false); // Close dropdown after logout
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-950 text-2xl ml-1 flex items-center gap-1"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FiUser />
        <motion.span
          variants={iconVariants}
          animate={isOpen ? "open" : "closed"}
          whileHover={{ scale: 1.1 }}
        >
          <FiChevronDown />
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={wrapperVariants.closed}
            animate={wrapperVariants.open}
            exit={wrapperVariants.closed}
            className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md py-2 w-48 z-10"
          >
            <Option
              text="Login"
              Icon={FiLogIn}
              onClick={() => setIsOpen(false)}
            />
            <Option
              text="Register"
              Icon={FiPlusSquare}
              onClick={() => setIsOpen(false)}
            />
            <Option
              text="Logout"
              Icon={FiLogOut}
              onClick={() => setIsOpen(false)}
            />
            <Option
              text="Profile"
              Icon={FiUser}
              onClick={() => setIsOpen(false)}
            />
            <motion.div variants={itemVariants} />
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const Option = ({ text, Icon, onClick }) => {
  return (
    <motion.li
      onClick={onClick}
      variants={itemVariants}
      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <Icon />
        <span>{text}</span>
      </div>
    </motion.li>
  );
};

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

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -10,
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Solutions" />
      <MenuLink text="Community" />
      <MenuLink text="Pricing" />
      <MenuLink text="Company" />
    </motion.div>
  );
};

const MenuLink = ({ text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

const menuVariants = {
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

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
