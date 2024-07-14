"use client";
import { useEffect, useState } from "react";
import {
  StarIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useDispatch, useSelector } from "react-redux";
import { CartSliceActions } from "@/app/store/cartSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDescriptionPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.token.id);
  const descriptionData = useSelector((state) => state.description.display);
  const product = {
    id: descriptionData.id,
    name: descriptionData.title,
    originalPrice: `₹${descriptionData.originalPrice}`,
    discountPrice: `₹${descriptionData.discountedPrice}`,
    images: [
      {
        original: descriptionData.image1,
        thumbnail: descriptionData.image1,
        alt: "Image of an Almond",
      },
      {
        original: descriptionData.image2,
        thumbnail: descriptionData.image2,
        alt: "Image of an Almond",
      },
      {
        original: descriptionData.image3,
        thumbnail: descriptionData.image3,
        alt: "Image of an Almond",
      },
      {
        original: descriptionData.image4,
        thumbnail: descriptionData.image4,
        alt: "Image of an Almond",
      },
    ],
    sizes: [
      { name: "S (250 GM)", inStock: descriptionData.small },
      { name: "M (500 GM)", inStock: descriptionData.medium },
      { name: "L (1000 GM)", inStock: descriptionData.large },
    ],
    description: descriptionData.description,
    highlights: [
      "Locally sourced and hand-picked",
      "Roasted to perfection in small batches",
      "Packed fresh for maximum flavor",
    ],
    details:
      " Our artisan-crafted nuts are roasted to perfection, enhancing their natural goodness and delivering a rich, satisfying taste that’s perfect for any occasion.",
    bestseller: descriptionData.bestsellers == "yes",
    rating: descriptionData.ratings,
  };

  const reviews = { totalCount: 117 };
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const toggleWishlist = () => {
    setIsInWishlist((prev) => !prev);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const isAddToBagDisabled = !selectedSize || selectedSize.inStock < quantity;

  const handleAddToBag = (e) => {
    e.preventDefault();
    if (selectedSize) {
      let discountPrice = product.discountPrice;
      let originalPrice = product.originalPrice;

      // Adjust prices based on selected size
      if (selectedSize.name === "S (250 GM)") {
        discountPrice = `₹${(descriptionData.discountedPrice / 4).toFixed(2)}`;
        originalPrice = `₹${(descriptionData.originalPrice / 4).toFixed(2)}`;
      } else if (selectedSize.name === "M (500 GM)") {
        discountPrice = `₹${(descriptionData.discountedPrice / 2).toFixed(2)}`;
        originalPrice = `₹${(descriptionData.originalPrice / 2).toFixed(2)}`;
      }

      const data = {
        id: product.id,
        title: product.name,
        discountPrice: discountPrice,
        originalPrice: originalPrice,
        image: descriptionData.image,
        size: selectedSize.name,
        stock: selectedSize.inStock,
        quantity: quantity,
      };

      dispatch(CartSliceActions.ADDITEM(data));
    }
  };

  const handleSlide = (index) => {
    console.log("Slid to index", index);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-6">
        {/* Image gallery */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <ImageGallery
            items={product.images}
            showFullscreenButton={false}
            showPlayButton={false}
            thumbnailPosition="left"
            onSlide={handleSlide}
            startIndex={0}
            renderItem={(item) => (
              <div className="relative h-80 sm:h-96 overflow-hidden rounded-lg shadow-md">
                <img
                  src={item.original}
                  alt={item.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            renderThumbInner={(item) => (
              <div className="h-16 sm:h-24 overflow-hidden rounded-md shadow-md">
                <img
                  src={item.thumbnail}
                  alt={item.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-16 bg-white shadow-lg rounded-lg">
          <div className="lg:col-span-1 lg:border-r lg:border-gray-200 lg:pr-8">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
                  {product.name}
                </h1>
                {product.bestseller && (
                  <span className="bg-indigo-500 text-white px-2 py-0.5 text-xs sm:text-sm font-semibold uppercase rounded">
                    Bestseller
                  </span>
                )}
                <button
                  className="text-gray-500 focus:outline-none"
                  onClick={toggleWishlist}
                >
                  <HeartIcon
                    className={classNames(
                      isInWishlist ? "text-red-500" : "text-gray-500",
                      "h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                </button>
              </div>
              <p className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 mt-2">
                {product.discountPrice}
              </p>
              {product.discountPrice && (
                <p className="text-sm sm:text-base text-gray-500 line-through">
                  {product.originalPrice}
                </p>
              )}
              <div className="flex items-center mt-2 space-x-1">
                {[...Array(5).keys()].map((index) => (
                  <StarIcon
                    key={index}
                    className={classNames(
                      index < product.rating
                        ? "text-yellow-500"
                        : "text-gray-300",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
                <a
                  href={reviews.href}
                  className="ml-3 text-sm sm:text-base font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>

              <form onSubmit={handleAddToBag} className="mt-6 flex-1">
                {/* Sizes */}
                <div className="mt-6">
                  <h3 className="text-sm sm:text-base font-medium text-gray-900">
                    Size
                  </h3>
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4"
                  >
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative flex items-center justify-between rounded-md border py-3 px-4 text-sm sm:text-base font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            <span className="ml-2 text-gray-500">
                              {size.inStock} left
                            </span>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </RadioGroup>
                </div>

                {selectedSize && (
                  <div className="mt-4">
                    <label
                      htmlFor="quantity"
                      className="block text-sm sm:text-base font-medium text-gray-900"
                    >
                      Quantity
                    </label>
                    <div className="mt-1 flex items-center">
                      <button
                        type="button"
                        onClick={decrementQuantity}
                        className="bg-gray-200 text-gray-700 rounded-l-md px-3 py-2 hover:bg-gray-300 focus:outline-none"
                      >
                        <span className="sr-only">Decrease quantity</span>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <input
                        id="quantity"
                        name="quantity"
                        min="1"
                        max={selectedSize.inStock}
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        className="appearance-none w-20 bg-white text-gray-900 font-semibold text-center rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      <span className="ml-2 text-gray-500 mr-4">
                        / {selectedSize.inStock} In Stock
                      </span>
                      <button
                        type="button"
                        onClick={incrementQuantity}
                        className="bg-gray-200 text-gray-700 rounded-r-md px-3 py-2 hover:bg-gray-300 focus:outline-none"
                      >
                        <span className="sr-only">Increase quantity</span>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isAddToBagDisabled}
                  className={classNames(
                    isAddToBagDisabled
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700",
                    "mt-8 w-full flex items-center justify-center rounded-md border border-transparent py-3 px-8 text-base sm:text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  )}
                >
                  <ShoppingCartIcon
                    className="-ml-1 mr-3 h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  Add to Bag
                </button>
              </form>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-1">
            {/* Product description */}
            <div className="text-lg sm:text-xl font-medium text-gray-900">
              Description
            </div>
            <p className="mt-4 text-sm sm:text-base text-gray-500">
              {product.description}
            </p>

            {/* Product highlights */}
            <div className="mt-8">
              <div className="text-lg sm:text-xl font-medium text-gray-900">
                Highlights
              </div>
              <ul className="mt-4 space-y-2">
                {product.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm sm:text-base text-gray-500"
                  >
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-5a1 1 0 00-.8.4l-3 4a1 1 0 001.6 1.2L10 8.42l2.2 2.2a1 1 0 001.4-1.42l-3-3a1 1 0 00-.8-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product details */}
            <div className="mt-8">
              <div className="text-lg sm:text-xl font-medium text-gray-900">
                Details
              </div>
              <p className="mt-4 text-sm sm:text-base text-gray-500">
                {product.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
