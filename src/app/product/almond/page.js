"use client";
import ProductDisplay from "@/app/components/productDisplay/productDisplay";
import ProductHeader from "@/app/components/productHeader/productHeader";
import { productDataActions } from "@/app/store/productData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Almond() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productData.filteredItems);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://ecommerece-nextjs-92b48-default-rtdb.firebaseio.com/products.json"
      );
      const jsonData = await response.json();
      dispatch(productDataActions.DataPush(jsonData));
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <ProductHeader
        front="Almond"
        bottom="Varieties"
        back="Flavors"
        top="Selection"
      />

      <div className="flex flex-wrap">
        {productData.map((item, index) => (
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
