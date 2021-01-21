import React from "react";
import "../../styles/Login.css";

import LoginPartial from "./LoginPartial";

const Login = () => {
  return (
    <div className="flex flex-col px-20 bg-gray-100 h-screen items-center">
      <div className="flex flex-col items-center bg-white border border-gray-300 h-96 mt-12 w-80">
        <h1 className="pacifico text-4xl pt-6 text-gray-800 select-none">
          Petstagram &#x1F43E;
        </h1>
        <LoginPartial />
      </div>
      <div></div>
    </div>
  );
};

export default Login;
