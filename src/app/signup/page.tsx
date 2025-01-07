"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-teal-800 to-emerald-600">
      <div className="flex-1 flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-4xl font-bold mb-6 text-center text-teal-800">
                Create Account
              </h2>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-teal-500" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 ease-in-out text-teal-800 placeholder-teal-400"
                      required
                    />
                  </div>
                  <div className="relative">
                    <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-teal-500" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 ease-in-out text-teal-800 placeholder-teal-400"
                      required
                    />
                  </div>
                  <div className="relative">
                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-teal-500" />
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Password"
                      className="w-full pl-10 pr-10 py-3 rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 ease-in-out text-teal-800 placeholder-teal-400"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-teal-500 hover:text-teal-700"
                    >
                      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <div className="relative">
                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-teal-500" />
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="w-full pl-10 pr-10 py-3 rounded-lg border border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300 ease-in-out text-teal-800 placeholder-teal-400"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-teal-500 hover:text-teal-700"
                    >
                      {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-lg shadow-md hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  Sign Up
                </Button>
              </form>
              <p className="mt-6 text-sm text-center text-teal-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-teal-500 hover:text-teal-700 underline transition duration-300 ease-in-out"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-center bg-teal-700 p-10">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to Our TechStore
          </h1>
          <p className="text-xl text-teal-100 mb-8">
            Join our community and discover the latest in tech innovation. Sign up today for exclusive deals and cutting-edge products!
          </p>
          <Image
            src="/images/tech-illustration.svg"
            alt="Tech Illustration"
            width={500}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

