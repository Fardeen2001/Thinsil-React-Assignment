import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "../cart/CartCountBadge";
import SideBarCart from "../cart/SideBarCart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartActions } from "../../reduxStore/toggleCart";
const Navbar = () => {
  const toggleCart = useSelector((state) => state.toggleCart.isCartOpen);
  const dispatch = useDispatch();
  const cartHandler = (e) => {
    e.preventDefault();
    dispatch(toggleCartActions.toggleCart());
  };
  return (
    <>
      {/* Navbar component */}
      <div className="container lg:block bg-accent">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-4xl text-gray-200 font-medium font-serif">
            Thinsil store
          </h1>

          <div className="flex gap-4">
            <div className="rounded-full bg-gray-200 p-2">
              <AiOutlineUser size={25} />
            </div>
            <button onClick={cartHandler}>
              <div className="rounded-full bg-gray-200 p-2 relative">
                <AiOutlineShoppingCart size={25} />
                <CartCountBadge />
              </div>
            </button>
          </div>
        </div>
      </div>
      {toggleCart && <SideBarCart />}
    </>
  );
};

export default Navbar;
