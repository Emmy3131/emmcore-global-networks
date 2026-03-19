import { NavLink } from "react-router-dom";
import UserInfo from "./UserInfo";

const Sidebar = ({ links, title }) => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">

      <h2 className="text-xl font-bold mb-6">{title}</h2>

      <nav className="flex flex-col gap-3">

        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-700"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
        <button className="px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          Logout
        </button>
      </nav>

     
        <div className="absolute bottom-5 left-5 right-5 hidden lg:block">
          <UserInfo />
        </div>
     



    </div>
  );
};

export default Sidebar;