"use client";
import ProductDisplay from "@/app/components/productDisplay/productDisplay";
import ProductHeader from "@/app/components/productHeader/productHeader";
import { useEffect, useState } from "react";

export default function Almond() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://ecommerece-nextjs-92b48-default-rtdb.firebaseio.com/productRaisins.json"
      );
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <ProductHeader
        front="Raisins"
        bottom="Varieties"
        back="Flavors"
        top="Selection"
      />
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <ProductDisplay
            key={index}
            title={item.title}
            image={item.image}
            bestsellers={item.bestsellers}
            description={item.description}
            discountedPrice={item.discountPrice}
            originalPrice={item.originalPrice}
            ratings={item.ratings}
            recomeded={item.recomeded}
            large={item.large.quantity}
            medium={item.medium.quantity}
            small={item.small.quantity}
          />
        ))}
      </div>
    </div>
  );
}
