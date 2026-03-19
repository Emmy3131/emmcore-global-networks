import { Users, ShoppingCart, Wallet, Wrench } from "lucide-react";
import { FaEye, FaDownload } from "react-icons/fa";

const AdminOverview = () => {
  const stats = [
    { title: "Total Users", value: "1,245", icon: Users },
    { title: "Total Orders", value: "320", icon: ShoppingCart },
    { title: "Revenue", value: "₦2,450,000", icon: Wallet },
    { title: "Repair Requests", value: "54", icon: Wrench },
  ];

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-100">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 flex items-center justify-between"
            >
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <h2 className="text-2xl font-bold">{stat.value}</h2>
              </div>

              <Icon className="text-blue-500" size={32} />
            </div>
          );
        })}
      </div>

      {/* Charts + Orders */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Sales Analytics</h2>

          <div className="h-64 flex items-center justify-center text-gray-400">
            Chart will appear here
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-3 rounded-xl shadow overflow-x-auto">
          <h2 className="font-semibold mb-4">Recent Orders</h2>

          <div className="bg-white p-3 sm:p-6 rounded-xl shadow overflow-x-auto">
            <h2 className="font-semibold mb-4 text-sm sm:text-base">
              Recent Orders
            </h2>

            <table className="w-full text-xs sm:text-sm text-left min-w-[700px]">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-2">Name</th>
                  <th>Type</th>

                  {/* Hide on small screens */}
                  <th className="hidden sm:table-cell">Item</th>
                  <th className="hidden sm:table-cell">Qty</th>

                  <th>Total</th>
                  <th>Status</th>

                  {/* Hide on very small screens */}
                  <th className="hidden md:table-cell">Date</th>

                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2">John Doe</td>
                  <td>Product</td>

                  <td className="hidden sm:table-cell">iPhone 13</td>
                  <td className="hidden sm:table-cell">2</td>

                  <td>₦800,000</td>

                  <td>
                    <span className="text-green-500 font-medium text-xs sm:text-sm">
                      Paid
                    </span>
                  </td>

                  <td className="hidden md:table-cell">12 Mar 2026</td>

                  {/* Actions */}
                  <td className="flex justify-center gap-2 sm:gap-3 py-2">
                    <button className="text-blue-500 hover:text-blue-700 text-sm">
                      <FaEye />
                    </button>

                    <button className="text-gray-600 hover:text-black text-sm">
                      <FaDownload />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Investments */}
        <div className="bg-white p-3 sm:p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4 text-sm sm:text-base">
            Recent Investments
          </h2>

          {/* ✅ MOBILE VIEW (Cards) */}
          <div className="space-y-3 sm:hidden">
            <div className="border rounded-lg p-3 shadow-sm">
              <div className="flex justify-between">
                <p className="font-medium">John Doe</p>
                <span className="text-green-500 text-xs font-semibold">
                  Active
                </span>
              </div>

              <p className="text-xs text-gray-500">Crypto Fund</p>

              <div className="flex justify-between mt-2 text-sm">
                <span>₦500,000</span>
                <span>Qty: 5</span>
              </div>
            </div>

            <div className="border rounded-lg p-3 shadow-sm">
              <div className="flex justify-between">
                <p className="font-medium">Jane Smith</p>
                <span className="text-yellow-500 text-xs font-semibold">
                  Pending
                </span>
              </div>

              <p className="text-xs text-gray-500">Real Estate</p>

              <div className="flex justify-between mt-2 text-sm">
                <span>₦1,200,000</span>
                <span>Qty: 2</span>
              </div>
            </div>
          </div>

          {/* ✅ DESKTOP/TABLET VIEW (Table) */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-2">Investor</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Qty</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2">John Doe</td>
                  <td>Crypto Fund</td>
                  <td>₦500,000</td>
                  <td>5</td>
                  <td>
                    <span className="text-green-500 font-medium">Active</span>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2">Jane Smith</td>
                  <td>Real Estate</td>
                  <td>₦1,200,000</td>
                  <td>2</td>
                  <td>
                    <span className="text-yellow-500 font-medium">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Repairs */}
       
        <div className="bg-white p-3 sm:p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4 text-sm sm:text-base">
            Recent Repairs
          </h2>

          {/* ✅ MOBILE VIEW (Cards) */}
          <div className="space-y-3 sm:hidden">
            <div className="border rounded-lg p-3 shadow-sm">
              <div className="flex justify-between items-center">
                <p className="font-medium">John Doe</p>
                <span className="text-yellow-500 text-xs font-semibold">
                  Pending
                </span>
              </div>

              <p className="text-xs text-gray-500">Laptop</p>
              <p className="text-sm mt-1">Screen Replacement</p>

              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-400">12 Mar 2026</span>

                <button className="text-blue-500 text-sm">
                  <FaEye />
                </button>
              </div>
            </div>

            <div className="border rounded-lg p-3 shadow-sm">
              <div className="flex justify-between items-center">
                <p className="font-medium">Jane Smith</p>
                <span className="text-green-500 text-xs font-semibold">
                  Completed
                </span>
              </div>

              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm mt-1">Battery Repair</p>

              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-400">13 Mar 2026</span>

                <button className="text-blue-500 text-sm">
                  <FaEye />
                </button>
              </div>
            </div>
          </div>

          {/* ✅ DESKTOP/TABLET VIEW (Table) */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-2">User</th>
                  <th>Device</th>
                  <th>Issue</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2">John Doe</td>
                  <td>Laptop</td>
                  <td>Screen Replacement</td>
                  <td>12 Mar 2026</td>

                  <td>
                    <span className="text-yellow-500 font-medium">Pending</span>
                  </td>

                  <td className="text-center">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEye />
                    </button>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2">Jane Smith</td>
                  <td>Phone</td>
                  <td>Battery Repair</td>
                  <td>13 Mar 2026</td>

                  <td>
                    <span className="text-green-500 font-medium">
                      Completed
                    </span>
                  </td>

                  <td className="text-center">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
