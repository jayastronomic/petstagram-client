import React from "react";
import SignupPartial from "./SignupPartial";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col px-20 bg-gray-100 h-screen items-center space-y-4">
      <div className="flex flex-col items-center bg-white border border-gray-300  mt-20 w-80">
        <h1 className="pacifico text-4xl pt-6 text-gray-800 select-none">
          Petstagram &#x1F43E;
        </h1>
        <div className="flex flex-wrap px-6 pt-4 text-center">
          <p className="text-gray-400 font-bold ">
            Sign up to see photos and videos from your friends.
          </p>
        </div>

        <SignupPartial />
      </div>
      <div className="flex border border-gray-300 w-80 justify-center text-sm py-4 bg-white">
        <p>
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 font-bold">
            {" "}
            Log in
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
