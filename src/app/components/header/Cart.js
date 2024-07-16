import React from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import CartModal from "../cart/cart";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Cart({ open, setOpen }) {
  const router = useRouter();
  const storeHandler = () => {
    router.push("/product/almond");
    setOpen(false);
  };
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="grid place-content-center bg-neutral-950">
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          {totalAmount === 0 ? (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Your cart is empty
              </h2>
              <p className="text-neutral-400">
                Add items from the store to see them here.
              </p>
              <button
                onClick={storeHandler}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Go to Store
              </button>
            </div>
          ) : (
            <>
              <CartModal />
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-white ml-10">
                  TotalAmount: ₹{totalAmount}
                </span>
                <button className="bg-green-500 text-white py-2 px-4 rounded">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </DragCloseDrawer>
    </div>
  );
}

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { width }] = useMeasure();

  const x = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const xStart = typeof x.get() === "number" ? x.get() : 0;

    await animate("#drawer", {
      x: [xStart, width],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70 flex justify-center items-center"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 h-full w-[75%] max-w-[500px] overflow-hidden rounded-l-3xl bg-neutral-900"
            style={{ x }}
            drag="x"
            dragControls={controls}
            onDragEnd={() => {
              if (x.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={{
              left: 0,
              right: 0.5,
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="w-2 h-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
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
