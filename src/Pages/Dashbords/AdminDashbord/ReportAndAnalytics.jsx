import { useState } from "react";

const ReportsPage = () => {

  // ✅ SAMPLE DATA
  const [stats] = useState({
    revenue: 2500000,
    orders: 120,
    users: 45,
    investments: 18,
  });

  const [filter, setFilter] = useState("Monthly");

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          Reports & Analytics
        </h1>

        <select
          className="bg-white p-2 rounded text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      {/* 📊 KPI CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-xs">Total Revenue</p>
          <h2 className="font-bold text-lg text-green-600">
            ₦{stats.revenue.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-xs">Orders</p>
          <h2 className="font-bold text-lg">
            {stats.orders}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-xs">Users</p>
          <h2 className="font-bold text-lg">
            {stats.users}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-xs">Investments</p>
          <h2 className="font-bold text-lg">
            {stats.investments}
          </h2>
        </div>

      </div>

      {/* 📈 CHART PLACEHOLDER */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Revenue Trend</h2>

        <div className="h-40 flex items-center justify-center text-gray-400">
          📊 Chart will go here (Recharts / Chart.js)
        </div>
      </div>

      {/* 📊 BREAKDOWN TABLE */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow overflow-x-auto">
        <h2 className="font-semibold mb-4 text-sm sm:text-base">
          Performance Breakdown
        </h2>

        <table className="w-full text-xs sm:text-sm min-w-[600px]">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2 text-left">Category</th>
              <th>Value</th>
              <th>Change</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td>Revenue</td>
              <td>₦2,500,000</td>
              <td className="text-green-500">+12%</td>
              <td>Growing</td>
            </tr>

            <tr className="border-b">
              <td>Orders</td>
              <td>120</td>
              <td className="text-green-500">+8%</td>
              <td>Stable</td>
            </tr>

            <tr>
              <td>Users</td>
              <td>45</td>
              <td className="text-red-500">-3%</td>
              <td>Declining</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 📱 INSIGHTS CARDS */}
      <div className="grid md:grid-cols-2 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Top Performing Area</h3>
          <p className="text-sm text-gray-500">
            Investment plans are generating the highest revenue this period.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Recommendation</h3>
          <p className="text-sm text-gray-500">
            Increase marketing for web projects to boost conversion rates.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReportsPage;