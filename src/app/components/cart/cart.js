import { useSelector } from "react-redux";
import CartDisplay from "./cartDisplay";

export default function CartModal() {
  const userEmail = useSelector((state) => state.token.email);
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);
  //   console.log(userEmail);

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
