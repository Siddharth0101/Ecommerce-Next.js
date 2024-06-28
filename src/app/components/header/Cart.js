import React from "react";

export default function Cart() {
  return (
    <div className="flex items-center justify-center">
      <button className="btn-cart relative flex items-center justify-center w-16 h-16 rounded-full bg-[#4070f4] shadow-md group hover:shadow-lg transition duration-300">
        <svg className="icon-cart w-8 h-8 fill-white transition duration-200">
          <path
            className="text-white transition duration-200"
            d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
          ></path>
        </svg>
        <span className="absolute top-0 right-0 -mt-2 -mr-2 text-white text-xs font-semibold bg-red-500 rounded-full w-6 h-6 flex items-center justify-center opacity-0 transition duration-200 group-hover:opacity-100">
          10
        </span>
      </button>
    </div>
  );
}
