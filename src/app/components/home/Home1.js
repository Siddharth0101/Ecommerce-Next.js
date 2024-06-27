"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#FFD700", "#8B4513", "#D2691E", "#CD853F"];

export const Home1 = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`2px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 8px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={60} count={3000} factor={5} fade speed={1.5} />
        </Canvas>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <motion.span
          className="mb-4 inline-block rounded-full bg-yellow-500/60 px-4 py-2 text-sm shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Fresh Stock Available!
        </motion.span>
        <motion.h1
          className="max-w-3xl bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Premium Nuts Delivered Right to Your Doorstep
        </motion.h1>
        <motion.p
          className="my-6 max-w-xl text-lg leading-relaxed md:text-xl md:leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Enjoy the finest selection of nuts, sourced from the best farms.
          Quality guaranteed with every bite.
        </motion.p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: COLORS_TOP[0],
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="group relative flex w-fit items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-lg font-semibold text-gray-50 transition-colors hover:bg-yellow-600"
        >
          Shop Now
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {COLORS_TOP.map((clr, index) => (
          <motion.span
            key={index}
            className="h-4 w-4 rounded-full shadow-lg"
            style={{ backgroundColor: clr }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              delay: index * 0.5,
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};
