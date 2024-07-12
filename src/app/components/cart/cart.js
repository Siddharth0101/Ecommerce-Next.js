import { useSelector } from "react-redux";
import CartDisplay from "./cartDisplay";

export default function CartModal() {
  const userEmail = useSelector((state) => state.token.email);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  //   console.log(userEmail);
  return (
    <div>
      <CartDisplay />
    </div>
  );
}
