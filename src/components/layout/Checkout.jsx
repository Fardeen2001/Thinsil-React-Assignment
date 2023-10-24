// importing icons and react router
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../reduxStore/cart";
import { toast } from "react-toastify";

const Checkout = () => {
  // importing dispatch
  const dispatch = useDispatch();
  // importing from redux store
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalAmount);
  // function for adding and removing items from cart
  const AddQuantityHandler = (id, price) => {
    // dispatching action
    dispatch(cartActions.addToCart({ id, price }));
  };
  const removeQuantityHandler = (id) => {
    // dispatching action
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    // check out page
    <div className="container w-[70vw] mx-auto pt-20">
      <h1 className="font-bold text-3xl text-center">Checkout</h1>{" "}
      <h2 className="text-xl font-bold">Delivery Details</h2>
      {/* form to accept user details to deliver item */}
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          {" "}
          {/* input for full name */}
          <div className=" mb-2">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          {/* input for email */}
          <div className=" mb-2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        {/* input for address */}

        <div className=" mb-2">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="2"
            className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          {/* input for phone number */}
          <div className=" mb-2">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="number"
              id="Phone"
              name="Phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          {/* input for city */}
          <div className=" mb-2">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          {/* input for state */}
          <div className=" mb-2">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          {/* input for pincode */}
          <div className=" mb-2">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      {/* display added cart item */}
      <h2 className="text-xl font-bold">Cart review</h2>
      <ol className="list-decimal font-semibold px-5">
        {/* if cart is empty */}
        {cartItems.length === 0 && (
          <div className="my-4 font-semibold">Your Cart is Empty!</div>
        )}
        {/* if cart has items */}
        {cartItems &&
          cartItems.map((item) => (
            // cart items mapped and display the items list
            <li key={item.id}>
              <div className="item flex my-3">
                <div className="w-full md:w-2/6 font-semibold text-sm md:text-base">
                  {/* title and price */}
                  {item.title} ({item.price.toFixed(2)})
                </div>
                <div className="w-full md:w-2/12 font-semibold text-sm md:text-base">
                  {/* total price */}
                  Rs {item.totalPrice.toFixed(2)}
                </div>
                <div className="w-2/1 flex items-center justify-center text-lg">
                  {/* minus icon for decrease quantity */}
                  <AiOutlineMinusCircle
                    className="cursor-pointer"
                    onClick={() => {
                      // function for dispatching actions
                      removeQuantityHandler(item.id);
                    }}
                  />{" "}
                  {/* display item quantity */}
                  <span className="mx-2 text-sm">{item.qty}</span>
                  {/* plus icon for increase quantity */}
                  <AiOutlinePlusCircle
                    className="cursor-pointer"
                    onClick={() => {
                      // function for dispatching actions
                      AddQuantityHandler(item.id, item.price);
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
      </ol>
      {/* total amount dispalyed to be payed by user */}
      <div className="font-bold">SubTotal : Rs {total}</div>
      {/* final pay button */}
      <button
        className="flex  m-2 text-black bg-accent border-0 p-2 focus:outline-none hover:bg-accentDark hover:text-white rounded text-sm"
        onClick={() => {
          dispatch(cartActions.clearCart());
          toast.success("Thank you!, Visit again", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }}
      >
        Pay Rs {total}
      </button>
    </div>
  );
};

export default Checkout;
