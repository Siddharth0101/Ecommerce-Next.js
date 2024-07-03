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
import CountDown from "./CountDown";
import Cart from "./Cart";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { TokenSliceActions } from "@/app/store/tokenSlice";

export default function Header() {
  return (
    <div className="bg-gray-50 sticky top-0 z-50">
      <div className="pt-0">
        <CountDown />
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
      <NavLink href="/" text="Home" />
      <NavLink href="/store" text="Store" />
      <NavLink href="/about" text="About Us" />
      <NavLink href="/contact" text="Contact Us" />
    </div>
  );
};

const NavLink = ({ text, href }) => {
  return (
    <Link
      href={href || "#"}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

const NavRight = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
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
        <FiShoppingCart onClick={() => setOpenCart(true)} />
      </motion.button>
      <UserDropdown />
      <SearchModal open={openSearch} setOpen={setOpenSearch} />
      <Cart open={openCart} setOpen={setOpenCart} />
    </div>
  );
};

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.token.isLogged);
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(TokenSliceActions.LOGOUT());
    setIsOpen(false);
  };
  const handleProfile = () => {
    router.push("/profile");
    setIsOpen(false);
  };

  const handleLogIn = () => {
    router.push("/login");
    setIsOpen(false);
  };
  const handleRegister = () => {
    router.push("/register");
    setIsOpen(false);
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
            {isLogged && (
              <Option text="Profile" Icon={FiUser} onClick={handleProfile} />
            )}
            <Option text="Login" Icon={FiLogIn} onClick={handleLogIn} />
            <Option
              text="Register"
              Icon={FiPlusSquare}
              onClick={handleRegister}
            />
            <Option text="Logout" Icon={FiLogOut} onClick={handleLogout} />
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
      <MenuLink text="Home" href="/" />
      <MenuLink text="Store" href="/store" />
      <MenuLink text="About Us" href="/about" />
      <MenuLink text="Contact Us" href="/contact" />
    </motion.div>
  );
};

const MenuLink = ({ text, href }) => {
  return (
    <Link
      variants={menuLinkVariants}
      rel="nofollow"
      href={href || "#"}
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
    </Link>
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
