// importing icons, redux and react router
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
  // importing dispatch
  const dispatch = useDispatch();
  // importing from redux store
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // functions for adding,removing and clearing the items from cart in redux store
  const AddQuantityHandler = (id, price) => {
    // dispatching action
    dispatch(cartActions.addToCart({ id, price }));
  };
  const removeQuantityHandler = (id) => {
    // dispatching action
    dispatch(cartActions.removeFromCart(id));
  };
  const clearHandler = () => {
    // dispatching action
    dispatch(cartActions.clearCart());
  };
  return (
    // side cart component
    <div className="w-full md:w-72 h-full z-50 sideBarCart overflow-y-scroll absolute top-0 right-0 bg-zinc-900 px-8 py-10 text-white">
      <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
      <span
        onClick={() => {
          // dispatching action
          dispatch(toggleCartActions.toggleCart());
        }}
        className="absolute top-2 right-2 cursor-pointer text-2xl"
      >
        <AiOutlineClose />
      </span>
      <ol className="list-decimal font-semibold">
        {/* if cart is empty */}
        {cartItems.length === 0 && (
          <div className="my-4 font-semibold">Your Cart is Empty!</div>
        )}
        {/* if cart has items */}
        {cartItems &&
          cartItems.map((item) => (
            // each item is displayed as list item
            <li key={item.id}>
              <div className="item flex my-3">
                <div className="w-2/3 font-semibold">
                  {/* title and price display */}
                  {item.title} (Rs {item.price.toFixed(2)})
                </div>

                <div className="w-2/1 flex items-center justify-center text-lg">
                  {/* minus icon to decrease the quantity */}
                  <AiOutlineMinusCircle
                    className="cursor-pointer"
                    onClick={() => {
                      removeQuantityHandler(item.id);
                    }}
                  />{" "}
                  {/* display number of quantity  */}
                  <span className="mx-2 text-sm">{item.qty}</span>
                  {/* plus icon to increase the quantity */}
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
        {/* display total amount */}
        Subtotal : Rs {totalAmount.toFixed(2)}
      </div>
      <div className="flex">
        {/* link to redirect to checkout page */}
        <Link to={"/checkout"}>
          <button className="flex  mr-2 text-black bg-accent border-0 p-2 focus:outline-none hover:bg-accentDark hover:text-white rounded text-sm">
            <BsBagCheckFill className="m-0.5" /> Checkout
          </button>
        </Link>
        {/* button to clear all the cart items from cart */}
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
