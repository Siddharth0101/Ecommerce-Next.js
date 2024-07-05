import Filter from "@/app/components/filter/Filter";
import React from "react";

const AlmondLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Filter />
    </div>
  );
};

export default AlmondLayout;
