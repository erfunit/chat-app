import React from "react";
import googleLogo from "../assets/google.png";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="p-5 w-fit gap-3 flex-col flex rounded-md bg-slate-50 shadow-lg">
        <h1 className="font-bold text-xl text-slate-70000">
          Login to your account
        </h1>
        <button className="px-6 justify-center items-center flex gap-3 py-3 rounded text-base bg-blue-500 shadow-xl shadow-blue-500/20 text-white active:scale-95 hover:bg-blue-400 transition-all">
          <img
            width={27}
            src={googleLogo}
            style={{ pointerEvents: "none" }}
            className="bg-white rounded"
          />{" "}
          with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
