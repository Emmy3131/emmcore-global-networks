import { Users, ShoppingCart, Wallet, Wrench } from "lucide-react";

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
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Recent Orders</h2>

          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Order #1234</span>
              <span className="text-green-500">Paid</span>
            </li>

            <li className="flex justify-between">
              <span>Order #1235</span>
              <span className="text-yellow-500">Pending</span>
            </li>

            <li className="flex justify-between">
              <span>Order #1236</span>
              <span className="text-red-500">Cancelled</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* New Users */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Latest Users</h2>

          <ul className="space-y-3">
            <li>John Doe</li>
            <li>Jane Smith</li>
            <li>Michael Johnson</li>
          </ul>
        </div>

        {/* Repairs */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Recent Repair Requests</h2>

          <ul className="space-y-3">
            <li>Laptop Screen Replacement</li>
            <li>Phone Battery Repair</li>
            <li>Motherboard Fix</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default AdminOverview;