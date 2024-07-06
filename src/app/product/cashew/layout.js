import Filters from "@/app/components/filter/Filter";
import React from "react";

const CashewLayout = ({ children }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 lg:w-1/4 p-4">
        <Filters />
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 p-4">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default CashewLayout;
