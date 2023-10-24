//import useState
import { useState } from "react";
// import from react router
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  // states are used to store the data that user enters
  const [email, setEmail] = useState("");
  //  import navigation from react router dom
  const navigate = useNavigate();
  //  forgot password handler function that send the user entered data to firebase
  const forgotHandler = async (e) => {
    e.preventDefault();
    try {
      // api used to reset password from firebase that send reset mail to user
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${
          import.meta.env.VITE_FIREBASEAPI
        }`,
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) {
        throw new Error("invalid details");
      }
      if (res.ok) {
        // reset inputs after submitting
        setEmail("");
        // if success then redirect to login page
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {/* forgot password component */}{" "}
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-7 text-4xl text-center font-serif">
              Forgot Password
            </h1>
            {/* form to accept email from user */}
            <form onSubmit={forgotHandler}>
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
              {/* submit button */}
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-accent text-white hover:bg-accentDark focus:outline-none my-1"
              >
                Change password
              </button>
            </form>
            {/* revert to login page link */}
            <div className="text-center mt-2">
              <Link
                to="/login"
                className="text-accent border-b border-accent hover:text-accentDark hover:border-none"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
