import { Link } from "react-router-dom";
import { useState, useNavigate } from "react";

const Login = () => {
 
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Login
      </h2>

      <form className="space-y-4">

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <Link to="/dashboard" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Login
        </Link>

      </form>

      <div className="flex justify-between items-center mt-4">
        <span>
        <input type="checkbox" id="remember" className="mr-2" />
        <label htmlFor="remember" className="text-sm">
          Remember Me
        </label>
      </span>

      <span>
        <Link to="/forgot-password" className="text-blue-600 font-semibold">
          Forgot Password?
        </Link>
      </span>
      </div>

      <p className="text-sm text-center mt-6">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-600 font-semibold">
          Sign Up
        </Link>
      </p>

    </div>
  );
};

export default Login;