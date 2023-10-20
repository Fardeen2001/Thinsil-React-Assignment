import Signup from "./auth/Signup";
import Navbar from "./components/header/Navbar";
import Home from "./components/layout/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Signup />
    </>
  );
}

export default App;
