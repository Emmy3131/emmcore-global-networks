import { useState } from "react";
import { FaEye, FaArrowDown, FaArrowUp } from "react-icons/fa";
import Card from "../../../Component/Card";

const WalletPage = () => {

  const [wallet] = useState({
    balance: 250000,
  });

  const [transactions] = useState([
    {
      id: 1,
      user: "John Doe",
      type: "Deposit",
      amount: 50000,
      status: "Success",
      method: "Paystack",
      date: "2026-03-18",
      reference: "TXN123456",
    },
    {
      id: 2,
      user: "Jane Smith",
      type: "Withdrawal",
      amount: 20000,
      status: "Pending",
      method: "Bank Transfer",
      date: "2026-03-17",
      reference: "TXN654321",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedTxn, setSelectedTxn] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredTxns = transactions.filter((t) =>
    t.user.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (txn) => {
    setSelectedTxn(txn);
    setShowModal(true);
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-6">

      {/* HEADER */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
        Wallet & Transactions
      </h1>

      {/* 💰 WALLET CARD (UPDATED) */}
      <div className="grid md:grid-cols-2 gap-4">

        <Card
          title="Wallet Balance"
          amount={`₦${wallet.balance.toLocaleString()}`}
          children={
            <div className="flex gap-3 mt-3">
              <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-xs flex items-center gap-2">
                <FaArrowDown /> Deposit
              </button>

              <button className="bg-red-500 text-white px-3 py-2 rounded-lg text-xs flex items-center gap-2">
                <FaArrowUp /> Withdraw
              </button>
            </div>
          }
        />

        {/* Optional second stat card */}
        <Card
          title="Total Transactions"
          amount={transactions.length}
        />

      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search transactions..."
        className="bg-gray-100 p-3 rounded-lg w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📱 MOBILE (NOW USING CARD) */}
      <div className="grid gap-4 sm:hidden">
        {filteredTxns.map((txn) => (
          <Card
            key={txn.id}
            title={txn.type}
            subtitle={txn.user}
            amount={`₦${txn.amount.toLocaleString()}`}
            status={{
              label: txn.status,
              type:
                txn.status === "Success"
                  ? "success"
                  : txn.status === "Pending"
                  ? "warning"
                  : "danger",
            }}
            children={
              <div className="text-xs text-gray-500 space-y-1">
                <p>Method: {txn.method}</p>
                <p>Date: {txn.date}</p>
              </div>
            }
            actions={[
              {
                icon: <FaEye />,
                onClick: () => handleView(txn),
                className: "bg-blue-100 text-blue-600",
              },
            ]}
          />
        ))}
      </div>

      {/* 💻 DESKTOP TABLE (UNCHANGED BUT CLEANED) */}
      <div className="hidden sm:block bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">User</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Method</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Reference</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredTxns.map((txn) => (
              <tr key={txn.id} className="hover:bg-gray-50">

                <td className="px-6 py-4">{txn.user}</td>
                <td className="px-6 py-4">{txn.type}</td>
                <td className="px-6 py-4 font-semibold">
                  ₦{txn.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4">{txn.method}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      txn.status === "Success"
                        ? "bg-green-100 text-green-600"
                        : txn.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {txn.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-400">{txn.date}</td>
                <td className="px-6 py-4 text-xs">{txn.reference}</td>

                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleView(txn)}
                    className="p-2 bg-blue-100 text-blue-600 rounded-lg"
                  >
                    <FaEye />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && selectedTxn && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-3">

            <h2 className="font-bold text-lg">Transaction Details</h2>

            <p><strong>User:</strong> {selectedTxn.user}</p>
            <p><strong>Type:</strong> {selectedTxn.type}</p>
            <p><strong>Amount:</strong> ₦{selectedTxn.amount.toLocaleString()}</p>
            <p><strong>Status:</strong> {selectedTxn.status}</p>
            <p><strong>Method:</strong> {selectedTxn.method}</p>
            <p><strong>Date:</strong> {selectedTxn.date}</p>
            <p><strong>Reference:</strong> {selectedTxn.reference}</p>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default WalletPage;