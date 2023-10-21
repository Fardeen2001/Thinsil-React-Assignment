import { useSelector } from "react-redux";
import Signup from "./auth/Signup";
import Navbar from "./components/header/Navbar";
import Home from "./components/layout/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  console.log(isLoggedIn);
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/home"
            element={!isLoggedIn ? <Navigate to={"/signup"} /> : <Home />}
          />
          <Route exact path={"/signup"} element={<Signup />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/forgot"} element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
