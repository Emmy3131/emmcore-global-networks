import { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "../Component/SideBar";
import { Outlet } from "react-router-dom";
import { adminLinks } from "../SideBarLinks/AdminLinks";
import UserInfo from "../Component/UserInfo";
import BrandLogo from "../Component/BrandLogo";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (isSidebarOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 h-full transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:fixed`}
      >
        <SideBar
          links={adminLinks}
          title={<BrandLogo />}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Mobile Header */}
        <header className="lg:hidden bg-white shadow p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-30">
          
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-700 text-xl"
          >
            <FaBars />
          </button>

          <UserInfo isMobile />

        </header>

        {/* Page Content */}
        <main className="flex-1 bg-gray-900 overflow-y-auto p-4 sm:p-6 lg:p-8 mt-14 lg:mt-0 flex flex-col lg:ml-64">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;