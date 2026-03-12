import { Outlet } from "react-router-dom";
import bgImage from "../assets/heroImage/hero.png";
import BrandLogo from "../Component/BrandLogo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side */}
      <div
        className="flex flex-col justify-center items-center text-white p-12 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Logo visible on all screens */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8">
          <BrandLogo className="w-24 md:w-32 h-auto" />
        </div>

        {/* Content only visible on medium+ screens */}
        <div className="hidden md:flex z-10 text-center mt-12">
          <h1 className="text-5xl font-extrabold mb-6">Welcome to Emmcore</h1>
          <p className="text-gray-200 text-lg max-w-md mx-auto">
            Streamline your services, track progress, and unlock powerful tools
            for your business.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-gray-900 p-8 md:p-16">
        <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;