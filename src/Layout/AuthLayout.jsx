import { Outlet } from "react-router-dom";
import bgImage from "../assets/heroImage/hero.png";
import BrandLogo from "../Component/BrandLogo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen md:grid md:grid-cols-2 flex flex-col md:flex-row">
      {/* Left Side - fixed background */}
      <div
        className="relative flex-1 w-full h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${bgImage})`,
        }}
      >
        {/* Logo always visible */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
          <BrandLogo className="w-24 md:w-32 h-auto" />
        </div>

        {/* Left content only for desktop */}
        <div className="hidden md:flex flex-col justify-center items-center h-full text-center px-12">
          <h1 className="text-5xl font-extrabold mb-6">Welcome to Emmcore</h1>
          <p className="text-gray-200 text-lg max-w-md mx-auto">
            Streamline your services, track progress, and unlock powerful tools
            for your business.
          </p>
        </div>
      </div>

      {/* Right Side - scrollable */}
      <div className="flex-1 w-full h-screen overflow-y-auto bg-gray-900 p-2 md:p-16">
        <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-2 md:p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;