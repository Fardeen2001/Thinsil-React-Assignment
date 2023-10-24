import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "../cart/CartCountBadge";
import SideBarCart from "../cart/SideBarCart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartActions } from "../../reduxStore/toggleCart";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authsliceAction } from "../../reduxStore/auth";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const toggleCart = useSelector((state) => state.toggleCart.isCartOpen);
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartHandler = (e) => {
    e.preventDefault();
    dispatch(toggleCartActions.toggleCart());
  };
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setActive(true) : setActive(false);
    });
  }, []);
  return (
    <>
      <header
        className={`${
          active ? "bg-accent" : "bg-accentDark"
        } fixed w-full z-20 transition-all`}
      >
        {/* Navbar component */}
        <div className="container lg:block ">
          <div className="flex justify-between items-center p-4">
            <Link to={"/"}>
              <h1 className="text-4xl text-gray-200 font-medium font-serif">
                Thinsil store
              </h1>
            </Link>

            <div className="flex gap-4">
              {loggedIn && (
                <button
                  onClick={() => {
                    dispatch(authsliceAction.logout());
                    navigate("/signup", { replace: true });
                  }}
                  className="rounded-full bg-gray-200 p-2 cursor-pointer"
                  title="Logout"
                >
                  <AiOutlineUser size={25} />
                </button>
              )}
              {!loggedIn && (
                <button className="rounded-xl bg-gray-200 p-2 cursor-pointer font-bold">
                  Sign Up
                </button>
              )}
              <button onClick={cartHandler}>
                <div className="rounded-full bg-gray-200 p-2 relative">
                  <AiOutlineShoppingCart size={25} />
                  <CartCountBadge />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {toggleCart && <SideBarCart />}
    </>
  );
};

export default Navbar;
