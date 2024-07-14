import { useDispatch, useSelector } from "react-redux";
import CartDisplay from "./cartDisplay";
import { useEffect } from "react";

export default function CartModal() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.token.id);
  const money = useSelector((state) => state.cart.totalAmount);
  console.log(cartItems);
  console.log(money);
  return (
    <div>
      {cartItems.map((item, index) => (
        <CartDisplay
          key={index}
          stock={item.stock}
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
