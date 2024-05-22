import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaLinkedinIn } from "react-icons/fa";
const Login = ({ handleSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className={"p-4"}>
        <h1 className="mb-4 text-center text-2xl font-semibold text-gray-600">
          Log in
        </h1>
        <form className="flex flex-col gap-3 p-3">
          <div>
            <label for="username" className="input-label">
              Username
            </label>
            <input id="username" type="text" className="input" />
          </div>
          <div>
            <label for="password" className="input-label">
              Password
            </label>
            <div className="relative">
              <input
                className="input pr-8"
                id="password"
                type={showPassword ? "text" : "password"}
              />

              {showPassword ? (
                <FaEye
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 "
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 "
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
        </form>
        <button className="transition-200 mt-7 block w-full rounded-full bg-blue-500 px-5 py-1 text-white hover:bg-blue-500/80">
          Submit
        </button>
        <p className="my-3 text-center text-sm text-gray-500">or login with</p>
        <div className="flex justify-center gap-4">
          <FcGoogle className="transition-200 text-2xl grayscale hover:grayscale-0 " />
          <FaLinkedinIn className="transition-200 text-2xl text-gray-600 hover:text-blue-600" />
        </div>
        <p
          className="my-3 cursor-pointer text-center text-sm text-gray-500 hover:text-blue-700"
          onClick={handleSignIn}
        >
          No Account? create Signup here
        </p>
      </div>
    </>
  );
};

export default Login;
