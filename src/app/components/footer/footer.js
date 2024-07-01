"use client";
import Link from "next/link";
import SiteLogo from "../header/SiteLogo";

export default function Footer() {
  return (
    <div>
      <footer className=" bottom-0 left-0 z-20 w-full p-2  bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800 dark:border-gray-600">
        <div className="w-full max-w-screen-xl mx-auto p-2 md:p-4 md:py-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="flex items-center mb-2 sm:mb-0 space-x-2 rtl:space-x-reverse">
              <SiteLogo />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Earthy Nuts
              </span>
            </span>
            <ul className="flex flex-wrap items-center mb-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:underline me-2 md:me-4">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4 " />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              EarthyNuts™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
