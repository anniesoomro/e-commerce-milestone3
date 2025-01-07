"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-800 via-emerald-700 to-green-600">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm border border-teal-300">
        <h2 className="text-4xl font-bold mb-6 text-center text-teal-800">
          Log In
        </h2>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-teal-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-500 focus:outline-none text-teal-800 placeholder-teal-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-teal-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              className="w-full px-4 py-3 rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-500 focus:outline-none text-teal-800 placeholder-teal-500"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-teal-700"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-teal-500 border-teal-300 rounded focus:ring-teal-400"
              />
              <span className="ml-2 text-sm text-teal-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-teal-500 hover:text-teal-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <Button
            className="w-full py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 focus:outline-none"
          >
            Login
          </Button>
        </form>
        <p className="text-sm text-center text-teal-600 mt-6">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-teal-500 font-medium hover:text-teal-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

