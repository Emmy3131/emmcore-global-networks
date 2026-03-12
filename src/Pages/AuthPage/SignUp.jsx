import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Create Account
      </h2>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

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

         <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <span className="mt-4">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              I agree to the <a href="/terms" className="text-blue-600 font-semibold">
                Terms of Service
              </a>
            </label>
        </span>

        <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Sign Up
        </button>

      </form>

      <p className="text-sm text-center mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-semibold">
          Login
        </Link>
      </p>

    </div>
  );
};

export default Signup;