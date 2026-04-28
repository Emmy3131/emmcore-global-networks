import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div>
           <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md ">
             <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            <p className="mb-6 text-gray-600">
                Enter your email address below and we'll send you instructions to reset your password.
            </p>
            <form className="space-y-4">
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                    Send Reset Instructions
                </button>
            </form>
            <p className="text-sm text-center mt-6">
                Remembered your password?{" "}
                <a href="/login" className="text-blue-600 font-semibold">
                    Login
                </a>
            </p>
           </div>
           <span>
            <Link to="/reset-password">
                Reset Password
            </Link>
           </span>
        </div>
    )
}
export default ForgotPassword;