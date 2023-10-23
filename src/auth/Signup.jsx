import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authsliceAction } from "../reduxStore/auth";

const Signup = () => {
  // states are used to store the data that user enters
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  //  import dispatch function from redux
  const dispatch = useDispatch();
  //  import navigation from react router dom
  const navigate = useNavigate();
  //  signup handler function that send the user entered data to firebase
  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      alert("password not matched");
    } else {
      try {
        const res = await fetch(
          // eslint-disable-next-line no-undef
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
            import.meta.env.VITE_FIREBASEAPI
          }`,
          {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
            }),
            headers: {
              "Content-Type": "appliction/json",
            },
          }
        );
        if (!res.ok) {
          throw new Error("invalid while signup");
        }
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          dispatch(authsliceAction.login(data.idToken));
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPass("");
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  };
  return (
    <>
      {" "}
      <div className="bg-gray-100 w-full min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-7 text-4xl text-center font-serif">Sign up</h1>
            {/* signup form */}
            <form onSubmit={signupHandler}>
              <input
                type="text"
                className="block border border-gray-500 w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <input
                type="text"
                className="block border border-gray-500 w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <input
                type="password"
                className="block border border-gray-500 w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <input
                type="password"
                className="block border border-gray-500 w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
                required
                onChange={(e) => setConfirmPass(e.target.value)}
                value={confirmPass}
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-accent text-white hover:bg-accentDark focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
          </div>
          <div className="text-grey-dark">
            Already have an account?
            <Link
              className="no-underline border-b border-accent text-accent hover:border-none hover:text-accentDark"
              to="/Login"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
