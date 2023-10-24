// import useparams form react router
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../../reduxStore/cart";
const ProductDetails = () => {
  // getting the product id from url
  const { productId } = useParams();
  // getting all products from redux
  const products = useSelector((state) => state.allProducts.items);
  const dispatch = useDispatch();
  //get the single product using product id
  const product = products.find((item) => item.id === +productId);

  // if product not found
  if (!product) {
    return <>Loading....</>;
  }
  // destructuring product
  const { id, title, price, description, category, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center overflow-auto">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center mt-10">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-10 lg:mb-0">
            <img
              src={image}
              alt={title}
              className="w-[250px] max-w-sm lg:max-w-sm"
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-accent font-medium mb-6">
              Rs {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              className="bg-accent py-4 px-8 text-white"
              onClick={() => {
                dispatch(
                  cartActions.addToCart({ id, title, price, category, image })
                );
              }}
            >
              Add to cart
            </button>
            <button
              className="bg-accentDark mt-2 md:mt-0 ml-2 py-4 px-8 text-white"
              onClick={() => {
                dispatch(cartActions.clearCart());
              }}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
