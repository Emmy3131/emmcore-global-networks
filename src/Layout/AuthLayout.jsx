import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* Left Side */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Emmcore
        </h1>
        <p className="text-gray-200 text-center max-w-md">
          Manage your services, track activities, and access powerful tools.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <Outlet />
      </div>

    </div>
  );
};

export default AuthLayout;