"use client";
import Filters from "@/app/components/filter/Filter";
import { usePathname } from "next/navigation";
import React from "react";

const CashewLayout = ({ children }) => {
  const pathname = usePathname();

  const showFilters = pathname === "/product/raisins";
  return (
    <div className="flex flex-wrap">
      {showFilters && (
        <div className="w-full md:w-1/3 lg:w-1/4 p-4">
          <Filters />
        </div>
      )}
      <div
        className={`p-4 ${showFilters ? "w-full md:w-2/3 lg:w-3/4" : "w-full"}`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default CashewLayout;
