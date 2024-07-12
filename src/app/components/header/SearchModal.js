import React, { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { SearchSliceActions } from "@/app/store/searchSlice";
import SearchCard from "@/app/search/searchCard";

export default function SearchModal({ open, setOpen }) {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const searchFilter = useSelector((state) => state.search.items);
  // console.log(searchFilter);
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
    dispatch(SearchSliceActions.ENTERED(value));
    dispatch(SearchSliceActions.LOGIC());
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
        dispatch(
          SearchSliceActions.PUSHDATA([...productsData, ...raisinsData])
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    if (open) {
      fetchData();
    }
  }, [open, dispatch]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="grid place-content-center bg-neutral-950">
      <DragCloseDrawer open={open} handleClose={handleClose}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-lg w-full sm:max-w-xs md:max-w-md"
              value={searchText}
              onChange={handleChange}
            />
          </div>
        </div>
        <SearchCard setOpen={setOpen} />
      </DragCloseDrawer>
    </div>
  );
}

const DragCloseDrawer = ({ open, handleClose, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleDragEnd = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    handleClose();
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 right-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleDragEnd();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
