import { Users, ShoppingCart, Wallet, Wrench } from "lucide-react";
import { FaEye, FaDownload } from "react-icons/fa";
import Card from "../../../Component/Card";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const StatusBadge = ({ status }) => {
  const styles = {
    Paid: "bg-green-100 text-green-600",
    Active: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Completed: "bg-blue-100 text-blue-600",
  };

  return (
    <span className={`px-3 py-1 text-xs rounded-full font-medium ${styles[status]}`}>
      {status}
    </span>
  );
};

const AdminOverview = () => {
  const stats = [
    { title: "Users", value: "1,245", icon: Users, color: "from-blue-500 to-blue-600" },
    { title: "Orders", value: "320", icon: ShoppingCart, color: "from-purple-500 to-purple-600" },
    { title: "Revenue", value: "₦2.4M", icon: Wallet, color: "from-green-500 to-green-600" },
    { title: "Repairs", value: "54", icon: Wrench, color: "from-orange-500 to-orange-600" },
  ];

  const chartData = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 700 },
    { name: "Mar", sales: 1200 },
    { name: "Apr", sales: 900 },
    { name: "May", sales: 1600 },
    { name: "Jun", sales: 2100 },
  ];

  const investments = [
    { name: "John Doe", product: "Crypto Fund", amount: "₦500,000", qty: 5, status: "Active" },
    { name: "Jane Smith", product: "Real Estate", amount: "₦1,200,000", qty: 2, status: "Pending" },
  ];

  const repairs = [
    { user: "John Doe", device: "Laptop", issue: "Screen", date: "12 Mar", status: "Pending" },
    { user: "Jane Smith", device: "Phone", issue: "Battery", date: "13 Mar", status: "Completed" },
  ];

  return (
    <div className="w-full p-3 sm:p-6 space-y-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-800">
        Dashboard Overview
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className={`p-4 rounded-xl text-white shadow bg-gradient-to-r ${stat.color}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-80">{stat.title}</p>
                  <h2 className="text-xl font-bold">{stat.value}</h2>
                </div>
                <Icon size={28} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart + Orders */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-4 text-gray-700">Sales Analytics</h2>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Line type="monotone" dataKey="sales" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <h2 className="p-4 font-semibold">Recent Orders</h2>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
                <tr>
                  <th className="px-6 py-3 text-left">Customer</th>
                  <th className="px-6 py-3 text-left">Product</th>
                  <th className="px-6 py-3 text-left">Amount</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">John Doe</td>
                  <td className="px-6 py-4 text-gray-500">iPhone 13</td>
                  <td className="px-6 py-4">₦400,000</td>
                  <td className="px-6 py-4"><StatusBadge status="Paid" /></td>
                  <td className="px-6 py-4 text-gray-400">12 Mar</td>
                  <td className="px-6 py-4 text-center">
                    <FaEye className="inline mr-2 cursor-pointer" />
                    <FaDownload className="inline cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="p-3 md:hidden">
            <Card
              title="John Doe"
              subtitle="iPhone 13"
              amount="₦400,000"
              status={{ label: "Paid", type: "success" }}
            />
          </div>
        </div>
      </div>

      {/* Investments & Repairs */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Investments */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <h2 className="p-4 font-semibold">Investments</h2>

          <div className="hidden md:block">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-xs uppercase">
                <tr>
                  <th className="px-6 py-3">Investor</th>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Qty</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {investments.map((inv, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{inv.name}</td>
                    <td className="px-6 py-4">{inv.product}</td>
                    <td className="px-6 py-4">{inv.amount}</td>
                    <td className="px-6 py-4">{inv.qty}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={inv.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 md:hidden">
            {investments.map((inv, i) => (
              <Card key={i} title={inv.name} subtitle={inv.product} amount={inv.amount} />
            ))}
          </div>
        </div>

        {/* Repairs */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <h2 className="p-4 font-semibold">Repairs</h2>

          <div className="hidden md:block">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-xs uppercase">
                <tr>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Device</th>
                  <th className="px-6 py-3">Issue</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {repairs.map((r, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{r.user}</td>
                    <td className="px-6 py-4">{r.device}</td>
                    <td className="px-6 py-4">{r.issue}</td>
                    <td className="px-6 py-4">{r.date}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={r.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 md:hidden">
            {repairs.map((r, i) => (
              <Card key={i} title={r.user} subtitle={r.device} amount={r.issue} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminOverview;