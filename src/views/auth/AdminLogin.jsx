import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import validation from "../../utils/loginValidation"; // separate validation file

const AdminLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const inputHandle = (e) => {
    const { name, value } = e.target;

    const newState = {
      ...state,
      [name]: value,
    };

    setState(newState);

    // Real-time validation
    const validationErrors = validation(newState);
    setErrors(validationErrors);
  };

  const submit = (e) => {
    e.preventDefault();

    const validationErrors = validation(state);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Login Submitted:", state);
      // call login API here
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-white p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome Back 👋</h2>
          <p className="mb-3 text-sm font-medium">
            Please login to your account
          </p>

          <form onSubmit={submit}>
            {/* Email */}
            <div className="flex flex-col gap-1 mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={inputHandle}
                className="px-3 py-2 border rounded-md bg-transparent"
              />
              {errors.email && (
                <p className="text-red-300 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1 mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={inputHandle}
                className="px-3 py-2 border rounded-md bg-transparent"
              />
              {errors.password && (
                <p className="text-red-300 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Forgot password
            <div className="text-right mb-3">
              <Link
                to="/forgot-password"
                className="text-sm underline hover:text-gray-200"
              >
                Forgot password?
              </Link>
            </div> */}

            <button
              disabled={Object.keys(errors).length > 0}
              className="bg-slate-800 w-full text-white rounded-md px-7 py-2 mb-3 disabled:bg-gray-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
