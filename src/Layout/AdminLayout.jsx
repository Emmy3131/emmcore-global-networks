import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "../Component/SideBar";
import { Outlet } from "react-router-dom";
import { adminLinks } from "../SideBarLinks/AdminLinks";
import UserInfo from "../Component/UserInfo";
import BrandLogo from "../Component/BrandLogo";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ✅ Lock scroll when sidebar is open (mobile)
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* 🔳 Overlay (Mobile only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 📌 Sidebar */}
      <div
        className={`
          fixed lg:sticky top-0 left-0 h-screen z-50
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <SideBar
          links={adminLinks}
          title={<BrandLogo />}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* 📦 Main Section */}
      <div className="flex-1 flex flex-col">

        {/* 🔝 Top Header (Sticky) */}
        <header className="md:hidden sticky top-0 z-30 bg-white border-b px-4 sm:px-6 py-3 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-700 text-xl"
            >
              <FaBars />
            </button>
          </div>

          {/* Right */}
          <UserInfo isMobile />
        </header>

        {/* 🧾 Page Content */}
        <main className="flex-1 bg-gray-900 overflow-y-auto overflow-x-hidden lg:mt-0">
            <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;