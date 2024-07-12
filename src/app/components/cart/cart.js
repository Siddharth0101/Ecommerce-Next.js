import { useSelector } from "react-redux";
import CartDisplay from "./cartDisplay";
import { useEffect } from "react";

export default function CartModal() {
  const userId = useSelector((state) => state.token.id);
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);
  // console.log(userId);
  async function postData() {
    try {
      await fetch(
        `https://ecommerece-nextjs-92b48-default-rtdb.firebaseio.com/${userId}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartItems),
        }
      );
    } catch (error) {
      console.log("Error posting data:", error);
    }
  }
  useEffect(() => {
    postData();
  }, [cartItems]);
  return (
    <div>
      {cartItems.map((item, index) => (
        <CartDisplay
          key={index}
          image={item.image}
          title={item.title}
          originalPrice={item.originalPrice}
          discountedPrice={item.discountPrice}
          size={item.size}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
}
