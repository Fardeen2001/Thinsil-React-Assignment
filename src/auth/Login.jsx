// imports from React,react router and redux store
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
      // api to login from firebase
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
        //error handler
        throw new Error("invalid while fetching");
      }

      if (res.ok) {
        const data = await res.json();
        // dispatch action
        dispatch(authsliceAction.login(data.idToken));
        // reset inputs after submitting
        setEmail("");
        setPassword("");
        // if success then redirect to home page
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {/* login component */}{" "}
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-7 text-4xl text-center font-serif">Sign In</h1>
            {/* form to accept inputs from user to login */}
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
              {/* submit button for login */}
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-accent text-white hover:bg-accentDark focus:outline-none my-1"
              >
                Log In
              </button>
            </form>
            {/* link to redirect to forgot password page  */}
            <div className="text-center">
              <Link
                to="/forgot"
                className="text-accent mt-6 hover:text-accentDark"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          {/* link to redirect to signup page */}
          <div className="text-gray-600 mt-6">
            Do not have an account?
            <Link
              className="no-underline border-b border-accent text-accent hover:text-accentDark hover:border-none"
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
