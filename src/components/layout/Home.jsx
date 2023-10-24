// import components
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductsAction } from "../../reduxStore/allproducts";
import Product from "./Product";
import HeroSection from "./HeroSection";

const Home = () => {
  // dispatching products from redux store
  const dispatch = useDispatch();
  // getting products from redux store
  const products = useSelector((state) => state.allProducts.items);
  // products will fetch when ever the component will mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // api from fake store to get some dummy products array
        const res = await fetch(`${import.meta.env.VITE_FAKESTOREAPI}`);
        if (!res.ok) {
          // error handler
          throw new Error("error while fetching data");
        }
        const data = await res.json();
        // dispatching action
        dispatch(allProductsAction.products(data));
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchProducts();
  }, [dispatch]);
  //filters only men's and women's category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      {/* added hero section  */}
      <HeroSection />
      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 max-w-sm md:max-w-none mx-auto md:mx-0 ">
            {/* filtered products displayed */}
            {filteredProducts.map((product) => {
              // mapped data retured to product component
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
