// import link
import { Link, NavLink } from "react-router-dom";
// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";
// import redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../reduxStore/cart";
const Product = ({ product }) => {
  //dispatching to redux
  const dispatch = useDispatch();
  // destructuring products
  const { id, image, title, price, category } = product;
  return (
    // product component
    <div className="flex flex-col ">
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition  shadow-lg shadow-gray-600">
        <div className="w-full h-full flex justify-center items-center cursor-pointer">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <img
              src={image}
              alt={title}
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
          <button
            onClick={() => {
              // dispatching action
              dispatch(
                cartActions.addToCart({ id, image, title, price, category })
              );
            }}
          >
            <div className="flex justify-center items-center text-white w-12 h-12 bg-accent">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          {/* link to redirects to product details page */}
          <NavLink
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl"
          >
            <BsEyeFill />
          </NavLink>
        </div>
      </div>
      {/* category, title and price */}
      <div>
        <div className="category text-sm capitalize text-gray-500">
          {category}
        </div>
        {/* link to redirects to product details page */}
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold">{title}</h2>
        </Link>
        <div className="price font-semibold mb-1">Rs {price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Product;
