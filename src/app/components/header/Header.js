"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import HeaderDropDown from "./HeaderDropDown";
import Search from "./Search";
import Cart from "./Cart";

const Header = () => {
  return (
    <div className="container mx-auto relative">
      <div className="fixed inset-x-0 top-0 z-50 flex justify-between items-center">
        <SlideTabs />
        <div className="absolute right-20">
          <HeaderDropDown />
        </div>
        <div className="absolute right-80">
          <Search />
        </div>
        <div className="absolute right-60">
          <Cart />
        </div>
      </div>
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Store</Tab>
      <Tab setPosition={setPosition}>About Us</Tab>
      <Tab setPosition={setPosition}>fun</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default Header;
