import { Link, Outlet } from "react-router-dom";
import bgImage from "../assets/heroImage/hero.png";
import BrandLogo from "../Component/BrandLogo";

const AuthLayout = () => {
  return (
    <div className="h-screen md:grid md:grid-cols-2 flex flex-col">

      {/* Mobile Header (Fixed) */}
      <div className="md:hidden fixed top-0 left-0 w-full z-30 bg-black/80 backdrop-blur-md p-4">
        <Link to="/">
          <BrandLogo className="w-28 h-auto" />
        </Link>
      </div>

      {/* Left Side (Desktop Only) */}
      <div
        className="hidden md:flex relative h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${bgImage})`,
        }}
      >
        <Link to="/" className="absolute top-8 left-8 z-20">
          <BrandLogo className="w-32 h-auto" />
        </Link>

        <div className="flex flex-col justify-center items-center h-full text-center px-12">
          <h1 className="text-5xl font-extrabold mb-6">Welcome to Emmcore</h1>
          <p className="text-gray-200 text-lg max-w-md">
            Streamline your services, track progress, and unlock powerful tools
            for your business.
          </p>
        </div>
      </div>

      {/* Right Side (Scrollable Form) */}
      <div className="flex-1 h-screen overflow-y-auto bg-gray-900 pt-24 md:pt-0 p-2 md:p-16">
        <div className="w-full max-w-md mx-auto bg-gray-800 rounded-2xl shadow-lg p-2 md:p-12">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default AuthLayout;