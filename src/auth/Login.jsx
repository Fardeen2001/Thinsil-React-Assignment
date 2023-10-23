import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authsliceAction } from "../reduxStore/auth";

const Login = () => {
  // states are used to store the data that user enters
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  import dispatch function from redux
  const dispatch = useDispatch();
  //  import navigation from react router dom
  const navigate = useNavigate();
  //  login handler function that send the user entered data to firebase
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
          import.meta.env.VITE_FIREBASEAPI
        }`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("invalid while fetching");
      }

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch(authsliceAction.login(data.idToken));
        setEmail("");
        setPassword("");
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {" "}
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-7 text-4xl text-center font-serif">Sign In</h1>
            <form onSubmit={loginHandler}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-accent focus:outline-none my-1"
              >
                Log In
              </button>
            </form>
            <div className="text-center">
              <Link to="/forgot" className="text-green-500 mt-6">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="text-gray-600 mt-6">
            Do not have an account?
            <Link
              className="no-underline border-b border-green-500 text-green-500"
              to="/signup"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
