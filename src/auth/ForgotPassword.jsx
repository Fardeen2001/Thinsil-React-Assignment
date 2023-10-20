const ForgotPassword = () => {
  return (
    <>
      {" "}
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-7 text-4xl text-center font-serif">
              Forgot Password
            </h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Change password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
