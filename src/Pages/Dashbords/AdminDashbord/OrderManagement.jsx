import { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import Card from "../../../Component/Card";

const OrderManagement = () => {
  // ✅ STATE
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "John Doe",
      type: "Product",
      item: "iPhone 13",
      quantity: 2,
      total: 800000,
      status: "Paid",
      date: "2026-03-12",
    },
    {
      id: 2,
      name: "Jane Smith",
      type: "Website",
      item: "E-commerce Website",
      quantity: 1,
      total: 500000,
      status: "Pending",
      date: "2026-03-14",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 🔍 SEARCH
  const filteredOrders = orders.filter((order) =>
    order.name.toLowerCase().includes(search.toLowerCase())
  );

  // 👁 VIEW
  const handleView = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // 🗑 DELETE
  const handleDelete = (id) => {
    if (window.confirm("Delete this order?")) {
      setOrders((prev) => prev.filter((o) => o.id !== id));
    }
  };

  // 🔄 UPDATE STATUS
  const handleStatusChange = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-4">

      {/* HEADER */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
        Order Management
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search orders..."
        className="bg-gray-100 p-2 rounded md:w-1/2 md:rounded-2xl w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ✅ MOBILE VIEW */}
      <div className="grid gap-4 sm:hidden">
        {filteredOrders.map((order) => (
          <Card
            key={order.id}
            title={order.name}
            subtitle={order.type}
            description={order.item}
            amount={`₦${order.total.toLocaleString()}`}
            quantity={order.quantity}
            status={{
              label: order.status,
              type: order.status === "Paid" ? "success" : order.status === "Pending" ? "warning" : "error",
            }}
            actions={[
              {
                icon: <FaEye />,
                onClick: () => handleView(order),
                className: "text-blue-500",
              },
              {
                icon: <FaTrash />,
                onClick: () => handleDelete(order.id),
                className: "text-red-500",
              },
            ]}
          />
        ))}
      </div>

      {/* ✅ DESKTOP TABLE */}
      <div className="hidden sm:block bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full border-separate border-spacing-0 text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr className="text-left">
              <th className="p-4 text-left">Customer</th>
              <th>Type</th>
              <th>Item</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">

                <td className="p-4">{order.name}</td>
                <td>{order.type}</td>
                <td>{order.item}</td>
                <td>{order.quantity}</td>
                <td>₦{order.total.toLocaleString()}</td>

                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    className="border rounded px-2 py-1 text-xs"
                  >
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Cancelled</option>
                  </select>
                </td>

                <td>{order.date}</td>

                <td className="flex justify-center gap-3 p-4">
                  <FaEye
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleView(order)}
                  />

                  <FaTrash
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(order.id)}
                  />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 👁 MODAL */}
      {showModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-3">

            <h2 className="font-bold text-lg">Order Details</h2>

            <p><strong>Name:</strong> {selectedOrder.name}</p>
            <p><strong>Type:</strong> {selectedOrder.type}</p>
            <p><strong>Item:</strong> {selectedOrder.item}</p>
            <p><strong>Quantity:</strong> {selectedOrder.quantity}</p>
            <p><strong>Total:</strong> ₦{selectedOrder.total.toLocaleString()}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <p><strong>Date:</strong> {selectedOrder.date}</p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default OrderManagement;