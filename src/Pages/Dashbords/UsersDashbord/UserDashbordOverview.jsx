import { useState } from "react";
import { FaWallet, FaShoppingCart, FaTools, FaChartLine } from "react-icons/fa";
import Card from "../../../Component/Card";

const UserDashbordOverview = () => {
  // ✅ SAMPLE DATA
  const [wallet] = useState({ balance: 250000 });
  const [orders] = useState([
    { id: 1, product: "iPhone 11", status: "Delivered", date: "2026-03-20" },
    { id: 2, product: "MacBook Pro", status: "Processing", date: "2026-03-22" },
  ]);
  const [repairs] = useState([
    { id: 1, device: "iPhone 12", issue: "Screen Repair", status: "Pending", date: "2026-03-18" },
  ]);
  const [stats] = useState({
    revenue: 2500000,
    ordersCount: 12,
    repairsCount: 3,
  });

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-6">

      {/* HEADER */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
        Welcome Back, John!
      </h1>
      <p className="text-gray-400 text-sm sm:text-base">Here's a quick overview of your account.</p>

      {/* KPI CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card
          title="Wallet Balance"
          icon={<FaWallet className="text-2xl text-green-600" />}
          children={<h2 className="text-lg font-bold">₦{wallet.balance.toLocaleString()}</h2>}
        />
        <Card
          title="Orders"
          icon={<FaShoppingCart className="text-2xl text-blue-600" />}
          children={<h2 className="text-lg font-bold">{orders.length}</h2>}
        />
        <Card
          title="Repairs"
          icon={<FaTools className="text-2xl text-yellow-600" />}
          children={<h2 className="text-lg font-bold">{repairs.length}</h2>}
        />
        <Card
          title="Revenue"
          icon={<FaChartLine className="text-2xl text-purple-600" />}
          children={<h2 className="text-lg font-bold">₦{stats.revenue.toLocaleString()}</h2>}
        />
      </div>

      {/* RECENT ORDERS */}
      <Card title="Recent Orders">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-2 text-left">Product</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t hover:bg-gray-50">
                  <td className="p-2">{order.product}</td>
                  <td>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* RECENT REPAIRS */}
      <Card title="Recent Repair Requests">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-2 text-left">Device</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {repairs.map((repair) => (
                <tr key={repair.id} className="border-t hover:bg-gray-50">
                  <td className="p-2">{repair.device}</td>
                  <td>{repair.issue}</td>
                  <td>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        repair.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : repair.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {repair.status}
                    </span>
                  </td>
                  <td>{repair.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* QUICK INSIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Tips & Insights">
          <p className="text-gray-500 text-sm">
            Keep your profile updated and track your repair requests. Depositing more funds will increase your wallet balance and unlock more services.
          </p>
        </Card>
        <Card title="Recommended Actions">
          <p className="text-gray-500 text-sm">
            Check pending repairs and orders. You can also explore new investment opportunities in the dashboard for better returns.
          </p>
        </Card>
      </div>

    </div>
  );
};

export default UserDashbordOverview;
    