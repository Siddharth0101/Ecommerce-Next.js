"use client";
import ProductDisplay from "@/app/components/productDisplay/productDisplay";
import ProductHeader from "@/app/components/productHeader/productHeader";
import { productDataActions } from "@/app/store/productData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";

export default function Almond() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productData.filteredItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://ecommerece-nextjs-92b48-default-rtdb.firebaseio.com/products.json"
        );
        const jsonData = await response.json();
        dispatch(productDataActions.DataPush(jsonData));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

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
            id={item.id}
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
            image1={item.imageView.image1}
            image2={item.imageView.image2}
            image3={item.imageView.image3}
            image4={item.imageView.image4}
          />
        ))}
      </div>
    </div>
  );
}
