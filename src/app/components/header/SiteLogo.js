import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const SiteLogo = () => {
  const DELAY_IN_MS = 2500;
  const TRANSITION_DURATION_IN_SECS = 1.5;

  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  const items = [
    <LogoItem key={1} className="bg-orange-300 text-neutral-900">
      🥜 {/* Peanut emoji */}
    </LogoItem>,
    <LogoItem key={2} className="bg-green-300 text-neutral-900">
      🌰 {/* Chestnut emoji */}
    </LogoItem>,
    <LogoItem key={3} className="bg-blue-300 text-neutral-900">
      🥥 {/* Coconut emoji */}
    </LogoItem>,
    <LogoItem key={4} className="bg-white text-black">
      🥜 {/* Another peanut or custom SVG */}
    </LogoItem>,
    <LogoItem key={5} className="bg-purple-300 text-neutral-900">
      🌰 {/* Another chestnut or custom SVG */}
    </LogoItem>,
  ];

  useEffect(() => {
    // Set up interval for rotating logos
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, DELAY_IN_MS);

    // Clean up interval on component unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="flex h-0 flex-col items-center justify-center gap-12 bg-neutral-950 px-1 py-10 md:flex-row">
      <div
        style={{
          transform: "rotateY(-20deg)",
          transformStyle: "preserve-3d",
        }}
        className="relative z-0 h-20 w-20 shrink-0 rounded-lg border border-neutral-700 bg-neutral-800"
      >
        <AnimatePresence mode="sync">
          <motion.div
            style={{
              y: "-50%",
              x: "-50%",
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
              zIndex: -index,
              backfaceVisibility: "hidden",
            }}
            key={index}
            transition={{
              duration: TRANSITION_DURATION_IN_SECS,
              ease: "easeInOut",
            }}
            initial={{ rotateX: "0deg" }}
            animate={{ rotateX: "0deg" }}
            exit={{ rotateX: "-180deg" }}
            className="absolute left-1/2 top-1/2"
          >
            {items[index % items.length]}
          </motion.div>
          <motion.div
            style={{
              y: "-50%",
              x: "-50%",
              clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
              zIndex: index,
              backfaceVisibility: "hidden",
            }}
            key={(index + 1) * 2}
            initial={{ rotateX: "180deg" }}
            animate={{ rotateX: "0deg" }}
            exit={{ rotateX: "0deg" }}
            transition={{
              duration: TRANSITION_DURATION_IN_SECS,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2"
          >
            {items[index % items.length]}
          </motion.div>
        </AnimatePresence>

        <hr
          style={{
            transform: "translateZ(1px)",
          }}
          className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
        />
      </div>
    </section>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-16 w-16 place-content-center rounded-lg bg-neutral-700 text-4xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SiteLogo;
