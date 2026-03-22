import { useState } from "react";
import { FaEye, FaPlus } from "react-icons/fa";

const InvestmentManagement = () => {

  // ✅ STATE
  const [investments, setInvestments] = useState([
    {
      id: 1,
      investor: "John Doe",
      product: "Crypto Fund",
      amount: 500000,
      quantity: 5,
      roi: 15,
      status: "Active",
      startDate: "2026-03-01",
      endDate: "2026-06-01",
    },
  ]);

  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 👁 VIEW
  const handleView = (inv) => {
    setSelectedInvestment(inv);
    setShowModal(true);
  };

  // 📊 SUMMARY CALCULATION
  const totalInvested = investments.reduce((acc, i) => acc + i.amount, 0);
  const activeInvestments = investments.filter(i => i.status === "Active").length;

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          Investment Management
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FaPlus /> New Investment
        </button>
      </div>

      {/* 💰 SUMMARY CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Invested</p>
          <h2 className="font-bold text-lg">
            ₦{totalInvested.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Active Plans</p>
          <h2 className="font-bold text-lg">
            {activeInvestments}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total ROI</p>
          <h2 className="font-bold text-lg text-green-600">
            +15%
          </h2>
        </div>

      </div>

      {/* 📱 MOBILE CARDS */}
      <div className="grid gap-4 sm:hidden">
        {investments.map((inv) => (
          <div key={inv.id} className="bg-white p-4 rounded-xl shadow">

            <div className="flex justify-between">
              <h2 className="font-semibold">{inv.product}</h2>

              <span
                className={`text-xs px-2 py-1 rounded ${
                  inv.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {inv.status}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Investor: {inv.investor}
            </p>

            <div className="flex justify-between mt-2 text-sm">
              <span>₦{inv.amount.toLocaleString()}</span>
              <span>ROI: {inv.roi}%</span>
            </div>

            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>{inv.startDate}</span>
              <span>{inv.endDate}</span>
            </div>

            <button
              onClick={() => handleView(inv)}
              className="mt-3 text-blue-500 text-sm"
            >
              <FaEye />
            </button>

          </div>
        ))}
      </div>

      {/* 💻 DESKTOP TABLE */}
      <div className="hidden sm:block bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">Investor</th>
              <th>Product</th>
              <th>Amount</th>
              <th>ROI</th>
              <th>Status</th>
              <th>Duration</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {investments.map((inv) => (
              <tr key={inv.id} className="border-t hover:bg-gray-50">

                <td className="p-4">{inv.investor}</td>
                <td>{inv.product}</td>
                <td>₦{inv.amount.toLocaleString()}</td>
                <td className="text-green-600">{inv.roi}%</td>

                <td>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded">
                    {inv.status}
                  </span>
                </td>

                <td>
                  {inv.startDate} - {inv.endDate}
                </td>

                <td className="text-center">
                  <FaEye
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleView(inv)}
                  />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 👁 MODAL */}
      {showModal && selectedInvestment && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-3">

            <h2 className="font-bold text-lg">Investment Details</h2>

            <p><strong>Investor:</strong> {selectedInvestment.investor}</p>
            <p><strong>Product:</strong> {selectedInvestment.product}</p>
            <p><strong>Amount:</strong> ₦{selectedInvestment.amount.toLocaleString()}</p>
            <p><strong>ROI:</strong> {selectedInvestment.roi}%</p>
            <p><strong>Status:</strong> {selectedInvestment.status}</p>
            <p><strong>Start:</strong> {selectedInvestment.startDate}</p>
            <p><strong>End:</strong> {selectedInvestment.endDate}</p>

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

export default InvestmentManagement;