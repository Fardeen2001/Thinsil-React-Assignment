// import useparams form react router
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import from redux
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
    // product detail component
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
            {/* title */}
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            {/* price */}
            <div className="text-xl text-accent font-medium mb-6">
              Rs {price}
            </div>
            <p className="mb-8">{description}</p>
            {/* add to cart button */}
            <button
              className="bg-accent py-4 px-8 text-white rounded-lg font-medium"
              onClick={() => {
                // dispatching actions
                dispatch(
                  cartActions.addToCart({ id, title, price, category, image })
                );
              }}
            >
              Add to cart
            </button>
            {/* check out button */}
            <Link to={"/checkout"}>
              <button
                className="bg-accentDark mt-2 md:mt-0 ml-2 py-4 px-8 text-white rounded-lg font-medium"
                onClick={() => {
                  // dispatching actions
                  dispatch(cartActions.clearCart());
                  dispatch(
                    cartActions.addToCart({
                      id,
                      title,
                      price,
                      category,
                      image,
                    })
                  );
                }}
              >
                Check out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
