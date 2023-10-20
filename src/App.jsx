import { useSelector } from "react-redux";
import Signup from "./auth/Signup";
import Navbar from "./components/header/Navbar";
import Home from "./components/layout/Home";

function App() {
  const isAuthenticated = useSelector((state) => {
    state.auth.isAuthenticated;
  });
  return (
    <>
      <Navbar />
      <Home />
      {!isAuthenticated && <Signup />}
    </>
  );
}

export default App;
