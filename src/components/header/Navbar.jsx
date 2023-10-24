// importing icons, redux and react router
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "../cart/CartCountBadge";
import SideBarCart from "../cart/SideBarCart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartActions } from "../../reduxStore/toggleCart";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authsliceAction } from "../../reduxStore/auth";
const Navbar = () => {
  // navbar compontent
  // react state
  const [active, setActive] = useState(false);
  // import from redux store
  const toggleCart = useSelector((state) => state.toggleCart.isCartOpen);
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  // importing dispatch
  const dispatch = useDispatch();
  // importing navigation
  const navigate = useNavigate();
  // function to toggle cart
  const cartHandler = (e) => {
    e.preventDefault();
    // dispatching action
    dispatch(toggleCartActions.toggleCart());
  };
  // event listener for scroll action
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setActive(true) : setActive(false);
    });
  }, []);
  return (
    <>
      {/* navbar compontent */}
      <header
        className={`${
          active ? "bg-accent" : "bg-accentDark"
        } fixed w-full z-20 transition-all`}
      >
        <div className="container lg:block ">
          <div className="flex justify-between items-center p-4">
            <Link to={"/"}>
              {/* heading */}
              <h1 className="text-4xl text-gray-200 font-medium font-serif">
                Thinsil Store
              </h1>
            </Link>

            <div className="flex gap-4">
              {/* if user is logged in the profile icon will show and user will click on icon to logout */}
              {loggedIn && (
                <button
                  onClick={() => {
                    // dispatching action
                    dispatch(authsliceAction.logout());
                    // if successfully logged out the user will redirect to signup page
                    navigate("/signup", { replace: true });
                  }}
                  className="rounded-full bg-gray-200 p-2 cursor-pointer"
                  title="Logout"
                >
                  <AiOutlineUser size={25} />
                </button>
              )}
              {/* if user is no logged in the sigup button show if clicked then redircts to signup page */}
              {!loggedIn && (
                <button className="rounded-xl bg-gray-200 p-2 cursor-pointer font-bold">
                  Sign Up
                </button>
              )}
              {/* cart icon if clicked then side bar cart will open */}
              <button onClick={cartHandler}>
                <div className="rounded-full bg-gray-200 p-2 relative">
                  <AiOutlineShoppingCart size={25} />

                  {/* quantity count badge */}
                  <CartCountBadge />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* side bar will open only if toggle cart state is true */}
      {toggleCart && <SideBarCart />}
    </>
  );
};

export default Navbar;
