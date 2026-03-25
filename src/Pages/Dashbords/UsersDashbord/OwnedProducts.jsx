import { useState } from "react";
import { FaEye } from "react-icons/fa";
import Card from "../../../Component/Card";
import { useNavigate } from "react-router-dom";

const MyProducts = () => {

  // ✅ USER INVESTMENTS
  const [investments] = useState([
    {
      id: 1,
      product: "iPhone 13",
      amount: 400000,
      quantity: 2,
      roi: 12,
      status: "Active",
      date: "2026-03-20",
    },
    {
      id: 2,
      product: "Laptop",
      amount: 350000,
      quantity: 1,
      roi: 15,
      status: "Sold",
      date: "2026-03-10",
    },
  ]);

  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 💰 CALCULATIONS
  const calculateProfit = (inv) =>
    (inv.amount * inv.quantity * inv.roi) / 100;

    const navigate = useNavigate();

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-4">

      {/* HEADER */}
     <div className="flex justify-between items-center">
         <h1 className="text-xl sm:text-2xl font-bold text-white">
        My Products
      </h1>

      <button onClick={() => navigate("/userDashboard/own-a-product")}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 
          py-2 rounded-lg text-sm shadow hover:scale-105 transition">
        Own a Product
      </button>
     </div>

      {/* 📱 MOBILE CARDS */}
      <div className="grid gap-4 sm:hidden">
        {investments.map((inv) => {

          const profit = calculateProfit(inv);

          return (
            <Card
              key={inv.id}
              title={inv.product}
              subtitle={`Qty: ${inv.quantity}`}
              amount={`₦${(inv.amount * inv.quantity).toLocaleString()}`}
              status={{
                label: inv.status,
                type:
                  inv.status === "Paid"
                    ? "success"
                    : inv.status === "Sold"
                    ? "info"
                    : "warning",
              }}
              children={
                <div className="text-xs text-gray-500 space-y-1">
                  <p>ROI: {inv.roi}%</p>
                  <p className="text-green-600">
                    Profit: ₦{profit.toLocaleString()}
                  </p>
                  <p>Date: {inv.date}</p>
                </div>
              }
              actions={[
                {
                  icon: <FaEye />,
                  onClick: () => {
                    setSelected(inv);
                    setShowModal(true);
                  },
                  className: "bg-blue-100 text-blue-600",
                },
              ]}
            />
          );
        })}
      </div>

      {/* 💻 DESKTOP TABLE */}
      <div className="hidden sm:block bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>ROI</th>
              <th>Profit</th>
              <th>Status</th>
              <th>Date</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {investments.map((inv) => {

              const profit = calculateProfit(inv);

              return (
                <tr key={inv.id} className="border-t hover:bg-gray-50">

                  <td className="p-4">{inv.product}</td>
                  <td>{inv.quantity}</td>
                  <td>₦{(inv.amount * inv.quantity).toLocaleString()}</td>
                  <td>{inv.roi}%</td>

                  <td className="text-green-600">
                    ₦{profit.toLocaleString()}
                  </td>

                  <td>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        inv.status === "Paid"
                          ? "bg-green-100 text-green-600"
                          : inv.status === "Sold"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>

                  <td>{inv.date}</td>

                  <td className="text-center">
                    <FaEye
                      className="text-blue-500 cursor-pointer"
                      onClick={() => {
                        setSelected(inv);
                        setShowModal(true);
                      }}
                    />
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 👁 MODAL */}
      {showModal && selected && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-3">

            <h2 className="font-bold text-lg">Investment Details</h2>

            <p><strong>Product:</strong> {selected.product}</p>
            <p><strong>Quantity:</strong> {selected.quantity}</p>
            <p><strong>Amount:</strong> ₦{selected.amount}</p>
            <p><strong>ROI:</strong> {selected.roi}%</p>
            <p><strong>Status:</strong> {selected.status}</p>

            <p className="text-green-600 font-semibold">
              Profit: ₦{calculateProfit(selected).toLocaleString()}
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default MyProducts;