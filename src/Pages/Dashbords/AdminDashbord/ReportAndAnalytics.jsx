import { useState } from "react";
import Card from "../../../Component/Card";

const ReportAndAnalytics = () => {
  const [stats] = useState({
    revenue: 2500000,
    orders: 120,
    users: 45,
    investments: 18,
  });

  const [filter, setFilter] = useState("Monthly");

  const breakdown = [
    { category: "Revenue", value: "₦2,500,000", change: "+12%", status: "Growing" },
    { category: "Orders", value: "120", change: "+8%", status: "Stable" },
    { category: "Users", value: "45", change: "-3%", status: "Declining" },
  ];

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-4">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
          Reports & Analytics
        </h1>

        <select
          className="bg-white p-2 rounded text-xs sm:text-sm w-full sm:w-auto"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <Card title="Total Revenue" amount={`₦${stats.revenue.toLocaleString()}`} status={{ label: "Growing", type: "success" }} />
        <Card title="Orders" amount={stats.orders} status={{ label: "Stable", type: "info" }} />
        <Card title="Users" amount={stats.users} status={{ label: "Declining", type: "danger" }} />
        <Card title="Investments" amount={stats.investments} status={{ label: "Stable", type: "info" }} />
      </div>

      {/* CHART */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4 text-sm sm:text-base">Revenue Trend</h2>
        <div className="h-40 sm:h-56 lg:h-72 flex items-center justify-center text-gray-400 text-sm">
          📊 Chart will go here
        </div>
      </div>

      {/* PERFORMANCE BREAKDOWN */}
      {/* MOBILE CARDS */}
      <div className="sm:hidden space-y-3">
        {breakdown.map((item, idx) => (
          <Card
            key={idx}
            title={item.category}
            amount={item.value}
            children={
              <div className="flex justify-between text-xs mt-1">
                <span className={item.change.includes("+") ? "text-green-500" : "text-red-500"}>
                  {item.change}
                </span>
                <span>{item.status}</span>
              </div>
            }
          />
        ))}
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden sm:block bg-white p-3 sm:p-6 rounded-xl shadow overflow-x-auto">
        <h2 className="font-semibold mb-4 text-sm sm:text-base">Performance Breakdown</h2>
        <table className="w-full text-xs sm:text-sm min-w-[500px]">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2 text-left">Category</th>
              <th>Value</th>
              <th>Change</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {breakdown.map((item, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-2">{item.category}</td>
                <td>{item.value}</td>
                <td className={item.change.includes("+") ? "text-green-500" : "text-red-500"}>{item.change}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* INSIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <Card
          title="Top Performing Area"
          children={
            <p className="text-xs sm:text-sm text-gray-500">
              Investment plans are generating the highest revenue this period.
            </p>
          }
        />
        <Card
          title="Recommendation"
          children={
            <p className="text-xs sm:text-sm text-gray-500">
              Increase marketing for web projects to boost conversion rates.
            </p>
          }
        />
      </div>
    </div>
  );
};

export default ReportAndAnalytics;