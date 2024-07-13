import { useSelector } from "react-redux";
import CartDisplay from "./cartDisplay";
import { useEffect } from "react";

export default function CartModal() {
  const userId = useSelector((state) => state.token.id);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  // console.log(userId);

  return (
    <div>
      {cartItems.map((item, index) => (
        <CartDisplay
          key={index}
          id={item.id}
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
