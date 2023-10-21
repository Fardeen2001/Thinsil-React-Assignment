// import link
import { NavLink } from "react-router-dom";
// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";
const Product = ({ product }) => {
  // destructuring products
  const { id, image, title, price, category } = product;
  return (
    <>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 bg-accent/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
          <button>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-accent">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <NavLink
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl"
          >
            <BsEyeFill />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Product;
