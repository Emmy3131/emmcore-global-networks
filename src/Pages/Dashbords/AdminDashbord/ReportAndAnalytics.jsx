import { useState } from "react";

const ReportAndAnalytics = () => {
  const [stats] = useState({
    revenue: 2500000,
    orders: 120,
    users: 45,
    investments: 18,
  });

  const [filter, setFilter] = useState("Monthly");

  // Performance breakdown data
  const breakdown = [
    { category: "Revenue", value: "₦2,500,000", change: "+12%", status: "Growing" },
    { category: "Orders", value: "120", change: "+8%", status: "Stable" },
    { category: "Users", value: "45", change: "-3%", status: "Declining" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-3 sm:p-6 space-y-4">

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
        <div className="bg-white p-3 sm:p-4 rounded-xl shadow">
          <p className="text-gray-500 text-xs">Total Revenue</p>
          <h2 className="font-bold text-sm sm:text-lg text-green-600">
            ₦{stats.revenue.toLocaleString()}
          </h2>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-xl shadow">
          <p className="text-gray-500 text-xs">Orders</p>
          <h2 className="font-bold text-sm sm:text-lg">{stats.orders}</h2>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-xl shadow">
          <p className="text-gray-500 text-xs">Users</p>
          <h2 className="font-bold text-sm sm:text-lg">{stats.users}</h2>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-xl shadow">
          <p className="text-gray-500 text-xs">Investments</p>
          <h2 className="font-bold text-sm sm:text-lg">{stats.investments}</h2>
        </div>
      </div>

      {/* CHART */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4 text-sm sm:text-base">
          Revenue Trend
        </h2>
        <div className="h-40 sm:h-56 lg:h-72 flex items-center justify-center text-gray-400 text-sm">
          📊 Chart will go here
        </div>
      </div>

      {/* PERFORMANCE BREAKDOWN */}

      {/* ✅ MOBILE CARDS */}
      <div className="sm:hidden space-y-3">
        {breakdown.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow flex flex-col gap-1">
            <p className="text-gray-500 text-xs">{item.category}</p>
            <h3 className="font-bold text-sm">{item.value}</h3>
            <div className="flex justify-between text-xs">
              <span className={item.change.includes('+') ? "text-green-500" : "text-red-500"}>
                {item.change}
              </span>
              <span>{item.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ DESKTOP TABLE */}
      <div className="hidden sm:block bg-white p-3 sm:p-6 rounded-xl shadow overflow-x-auto">
        <h2 className="font-semibold mb-4 text-sm sm:text-base">
          Performance Breakdown
        </h2>
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
                <td className={item.change.includes('+') ? "text-green-500" : "text-red-500"}>
                  {item.change}
                </td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* INSIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2 text-sm sm:text-base">
            Top Performing Area
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Investment plans are generating the highest revenue this period.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2 text-sm sm:text-base">
            Recommendation
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Increase marketing for web projects to boost conversion rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportAndAnalytics;