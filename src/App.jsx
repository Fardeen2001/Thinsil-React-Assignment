// importing components, react router and redux
import { useSelector } from "react-redux";
import Signup from "./auth/Signup";
import Navbar from "./components/header/Navbar";
import Home from "./components/layout/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import Checkout from "./components/layout/Checkout";
import Footer from "./components/footer/Footer";
import ProductDetails from "./components/layout/ProductDetails";
import { ToastContainer } from "react-toastify";
// import tostify css
import "react-toastify/dist/ReactToastify.css";

function App() {
  // getting user is logged in or not from redux store
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      {/* app component */}
      <BrowserRouter>
        {isLoggedIn && <Navbar />}
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Routes>
          {/* routes to redirects from one page to another page as SPA */}
          {/* checks paths if exact path found then redirects to that page */}
          <Route
            exact
            path="/"
            element={!isLoggedIn ? <Navigate to={"/signup"} /> : <Home />}
          />
          <Route exact path={"/signup"} element={<Signup />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/forgot"} element={<ForgotPassword />} />
          <Route exact path={"/checkout"} element={<Checkout />} />
          <Route
            exact
            path={"/product/:productId"}
            element={<ProductDetails />}
          />
        </Routes>
        {isLoggedIn && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
