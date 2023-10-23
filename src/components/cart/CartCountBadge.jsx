import { useSelector } from "react-redux";

// counting how many products added to cart
const CartCountBadge = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="absolute bg-red-500 text-white text-[14px] w-[23px] h-[23px] -right-3 -top-1 rounded-full grid place-items-center">
      {quantity}
    </div>
  );
};

export default CartCountBadge;
