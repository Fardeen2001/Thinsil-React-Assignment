import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "../cart/CartCountBadge";
const Navbar = () => {
  return (
    <>
      {/* Navbar component */}
      <div className="container lg:block">
        <div className="flex justify-between items-center pt-8">
          <h1 className="text-4xl font-medium font-serif">Thinsil store</h1>
          <div className="relative w-full max-w-[500px]">
            <input
              type="text"
              className="bg-[#F2F3F5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              placeholder="search products..."
            />
            <BsSearch
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
              size={20}
            />
          </div>
          <div className="flex gap-4">
            <div className="rounded-full bg-gray-200 p-2">
              <AiOutlineUser size={25} />
            </div>
            <div className="rounded-full bg-gray-200 p-2 relative">
              <AiOutlineShoppingCart size={25} />
              <CartCountBadge />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
