import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="container w-[70vw] m-auto">
      {" "}
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>{" "}
      <h2 className="text-xl font-bold">Delivery Details</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          {" "}
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
          {" "}
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
          {" "}
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
      <h2 className="text-xl font-bold">Cart review</h2>
      <ol className="list-decimal font-semibold px-5">
        {cartItems.length === 0 && (
          <div className="my-4 font-semibold">Your Cart is Empty!</div>
        )}
        {cartItems &&
          cartItems.map((item) => (
            <li key={item.itemCode}>
              <div className="item flex my-3">
                <div className="w-full md:w-2/6 font-semibold text-sm md:text-base">
                  {item.name} ({item.size},{item.varient})
                </div>
                <div className="w-full md:w-2/12 font-semibold text-sm md:text-base">
                  ₹ {item.totalPrice}
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
                      AddQuantityHandler(item.itemCode, item.price);
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
      </ol>
      <div className="font-bold">SubTotal : ₹ {total}</div>
      <button className="flex  m-2 text-black bg-slate-200 border-0 p-2 focus:outline-none hover:bg-stone-600 hover:text-white rounded text-sm">
        Pay ₹ {total}
      </button>
    </div>
  );
};

export default Checkout;
