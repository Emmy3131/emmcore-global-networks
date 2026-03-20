import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaTools,
  FaProjectDiagram,
  FaChartLine,
  FaUsers,
  FaWallet,
  FaChartBar,
  FaCog
} from "react-icons/fa";

export const adminLinks = [
  { name: "Dashboard Overview", path: "/dashboard", icon: FaTachometerAlt },
  { name: "Products Management", path: "/products", icon: FaBoxOpen },
  { name: "Orders Management", path: "/admin/orders", icon: FaShoppingCart },
  { name: "Repairs Management", path: "/admin/repairs", icon: FaTools },
  { name: "Web Projects", path: "/admin/projects", icon: FaProjectDiagram },
  { name: "Investment Management", path: "/admin/investments", icon: FaChartLine },
  { name: "Users Management", path: "/admin/users", icon: FaUsers },
  { name: "Wallet & Transactions", path: "/admin/wallet", icon: FaWallet },
  { name: "Reports & Analytics", path: "/admin/reports", icon: FaChartBar },
  { name: "Settings", path: "/admin/settings", icon: FaCog }
];