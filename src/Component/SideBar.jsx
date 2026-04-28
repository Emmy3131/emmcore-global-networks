import { NavLink } from "react-router-dom";
import UserInfo from "./UserInfo";
import { CiLogout } from "react-icons/ci";

const Sidebar = ({ links, title, isOpen, onClose }) => {
  const baseUrl =
    "https://emm-core-global-networks-updated.vercel.app/api/v1/users/logout";

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/auth");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <>
        {/* Header */}
        <div className="p-5">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>

        {/* Scrollable Content */}
        <nav className="flex-1 overflow-y-auto px-5 flex flex-col gap-3">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                to={link.path}
                key={link.name}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded ${
                    isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
                  }`
                }
              >
                {Icon && <Icon className="text-lg" />}
                <span>{link.name}</span>
              </NavLink>
            );
          })}

          <button
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition text-left bg-red-500 mb-5"
            onClick={handleLogout}
          >
            <CiLogout className="text-lg" />
            <span>Logout</span>
          </button>
        </nav>

        {/* Footer */}
        <div className="p-5 border-t border-gray-700 hidden lg:block">
          <UserInfo />
        </div>
      </>
    </div>
  );
};

export default Sidebar;
