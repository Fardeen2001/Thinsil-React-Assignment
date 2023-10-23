import {
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCartActions } from "../../reduxStore/toggleCart";
import { cartActions } from "../../reduxStore/cart";

const SideBarCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const AddQuantityHandler = (id, price) => {
    dispatch(cartActions.addToCart({ id, price }));
  };
  const removeQuantityHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  const clearHandler = () => {
    dispatch(cartActions.clearCart());
  };
  return (
    <div className="w-full md:w-72 h-full z-50 sideBarCart overflow-y-scroll absolute top-0 right-0 bg-zinc-900 px-8 py-10 text-white">
      <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
      <span
        onClick={() => {
          dispatch(toggleCartActions.toggleCart());
        }}
        className="absolute top-2 right-2 cursor-pointer text-2xl"
      >
        <AiOutlineClose />
      </span>
      <ol className="list-decimal font-semibold">
        {cartItems.length === 0 && (
          <div className="my-4 font-semibold">Your Cart is Empty!</div>
        )}
        {cartItems &&
          cartItems.map((item) => (
            <li key={item.id}>
              <div className="item flex my-3">
                <div className="w-2/3 font-semibold">
                  {item.title} (Rs {item.price.toFixed(2)})
                </div>
                <div className="w-2/1 flex items-center justify-center text-lg">
                  <AiOutlineMinusCircle
                    className="cursor-pointer"
                    onClick={() => {
                      removeQuantityHandler(item.id);
                    }}
                  />{" "}
                  <span className="mx-2 text-sm">{item.qty}</span>
                  <AiOutlinePlusCircle
                    className="cursor-pointer"
                    onClick={() => {
                      AddQuantityHandler(item.id, item.price);
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
      </ol>
      <div className="text-bold my-2">
        Subtotal : Rs {totalAmount.toFixed(2)}
      </div>
      <div className="flex">
        <Link to={"/checkout"}>
          <button className="flex  mr-2 text-black bg-accent border-0 p-2 focus:outline-none hover:bg-accentDark hover:text-white rounded text-sm">
            <BsBagCheckFill className="m-0.5" /> Checkout
          </button>
        </Link>
        <button
          onClick={clearHandler}
          className="flex  mr-2 text-black bg-accent border-0 p-2 focus:outline-none hover:bg-accentDark hover:text-white rounded text-sm"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default SideBarCart;
