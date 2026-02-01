import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import validation from "../../utils/validation";


const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const inputHandle = (e) => {
    const { name, value, type, checked } = e.target;

    const newState = {
      ...state,
      [name]: type === "checkbox" ? checked : value,
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
      console.log("Form Submitted:", state);
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-white p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="mb-3 text-sm font-medium">Please Register your account</p>

          <form onSubmit={submit}>
            {/* Name */}
            <div className="flex flex-col gap-1 mb-3">
              <label>Name</label>
              <input
                name="name"
                value={state.name}
                onChange={inputHandle}
                className="px-3 py-2 border rounded-md bg-transparent"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 mb-3">
              <label>Email</label>
              <input
                name="email"
                value={state.email}
                onChange={inputHandle}
                className="px-3 py-2 border rounded-md bg-transparent"
              />
              {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
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

              <ul className="text-xs mt-1 space-y-1">
                <li className={state.password.length >= 8 ? "text-green-400" : "text-red-300"}>
                  • Minimum 8 characters
                </li>
                <li className={state.password.length <= 15 ? "text-green-400" : "text-red-300"}>
                  • Maximum 15 characters
                </li>
                <li className={/[A-Z]/.test(state.password) ? "text-green-400" : "text-red-300"}>
                  • One uppercase letter
                </li>
                <li className={/[a-z]/.test(state.password) ? "text-green-400" : "text-red-300"}>
                  • One lowercase letter
                </li>
                <li className={/\d/.test(state.password) ? "text-green-400" : "text-red-300"}>
                  • One number
                </li>
                <li className={/[@$!%*?&^#]/.test(state.password) ? "text-green-400" : "text-red-300"}>
                  • One special character
                </li>
              </ul>

              {errors.password && <p className="text-red-300 text-sm">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1 mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={inputHandle}
                className="px-3 py-2 border rounded-md bg-transparent"
              />
              {errors.confirmPassword && (
                <p className="text-red-300 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-center gap-3 mb-3">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={state.agreeToTerms}
                onChange={inputHandle}
              />
              <label>I agree to privacy policy & terms</label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-red-300 text-sm mb-2">{errors.agreeToTerms}</p>
            )}

            <button
              disabled={Object.keys(errors).length > 0}
              className="bg-slate-800 w-full text-white rounded-md px-7 py-2 mb-3 disabled:bg-gray-500"
            >
              Sign Up
            </button>

            <div className="flex justify-center gap-3">
              <div className="w-[135px] h-[35px] flex bg-orange-700 justify-center items-center rounded-md cursor-pointer">
                <FaGoogle />
              </div>
              <div className="w-[135px] h-[35px] flex bg-blue-700 justify-center items-center rounded-md cursor-pointer">
                <FaFacebook />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
