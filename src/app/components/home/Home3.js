"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { SearchSliceActions } from "@/app/store/searchSlice";
import { useRouter } from "next/navigation";
import { DescriptionSliceAction } from "@/app/store/descriptionSlice";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 400;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Home3 = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [productsResponse, raisinsResponse] = await Promise.all([
          fetch(
            "https://ecommerece-nextjs-92b48-default-rtdb.firebaseio.com/products.json"
          ),
          fetch(
            "https://ecommerece-nextjs-92b48-default-rtdb.firebaseio.com/productRaisins.json"
          ),
        ]);

        if (!productsResponse.ok || !raisinsResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const productsData = await productsResponse.json();
        const raisinsData = await raisinsResponse.json();
        const allData = [...productsData, ...raisinsData];

        const bestsellers = allData.filter((item) => item.bestsellers == "yes");

        dispatch(SearchSliceActions.PUSHDATA(bestsellers));
        setItems(bestsellers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [dispatch]);

  const handleClick = (item) => {
    const data = {
      id: item.id,
      title: item.title,
      description: item.description,
      originalPrice: item.originalPrice,
      discountedPrice: item.discountPrice,
      ratings: item.ratings,
      bestsellers: item.bestsellers,
      large: item.large.quantity,
      medium: item.medium.quantity,
      small: item.small.quantity,
      image: item.image,
      image1: item.imageView.image1,
      image2: item.imageView.image2,
      image3: item.imageView.image3,
      image4: item.imageView.image4,
    };
    dispatch(DescriptionSliceAction.DISPLAY(data));
    if (item.title.toLowerCase().includes("almond")) {
      router.push(`/product/almond/${encodeURIComponent(item.title)}`);
    } else {
      router.push(`/product/raisins/${encodeURIComponent(item.title)}`);
    }
  };
  return (
    <section className="bg-slate-100" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-teal-500 text-center py-2 px-4 rounded-lg shadow-lg">
            Bestsellers from Our Store
          </p>

          {loading ? (
            <p className="text-xl text-slate-500">Loading...</p>
          ) : (
            <motion.div
              animate={{
                x: offset,
              }}
              className="flex"
            >
              {items.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  url={item.image}
                  onClick={() => handleClick(item)}
                />
              ))}
            </motion.div>
          )}
        </div>

        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 rounded-r-xl bg-slate-200/60 p-3 pl-2 text-4xl text-slate-700 backdrop-blur-sm transition-[padding] hover:pl-3 hover:bg-slate-300"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 rounded-l-xl bg-slate-200/60 p-3 pr-2 text-4xl text-slate-700 backdrop-blur-sm transition-[padding] hover:pr-3 hover:bg-slate-300"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ url, title, description, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onClick={onClick}
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/80 via-black/50 to-black/20 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-base text-slate-300">{description}</p>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center py-4">
          <button
            className="relative w-36 h-10 cursor-pointer flex items-center border border-violet-500 bg-violet-500 group hover:bg-violet-600 active:bg-violet-700 active:border-violet-700 rounded-lg transition-transform duration-300"
            onClick={onClick}
          >
            <span className="text-gray-200 font-semibold ml-6 transform group-hover:translate-x-20 transition-all duration-300">
              View
            </span>
            <span className="absolute right-0 h-full w-10 rounded-lg bg-violet-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
              <svg
                className="w-8 text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" x2="12" y1="5" y2="19"></line>
                <line x1="5" x2="19" y1="12" y2="12"></line>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home3;
