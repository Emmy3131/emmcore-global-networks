import { useState } from "react";
import { FaEye, FaArrowDown, FaArrowUp } from "react-icons/fa";

const WalletPage = () => {

  // ✅ WALLET
  const [wallet] = useState({
    balance: 250000,
  });

  // ✅ TRANSACTIONS
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

  // 🔍 FILTER
  const filteredTxns = transactions.filter((t) =>
    t.user.toLowerCase().includes(search.toLowerCase())
  );

  // 👁 VIEW
  const handleView = (txn) => {
    setSelectedTxn(txn);
    setShowModal(true);
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">

      {/* HEADER */}
      <h1 className="text-xl sm:text-2xl font-bold text-white">
        Wallet & Transactions
      </h1>

      {/* 💰 WALLET CARD */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow">
        <p className="text-sm opacity-80">Wallet Balance</p>
        <h2 className="text-2xl font-bold">
          ₦{wallet.balance.toLocaleString()}
        </h2>

        <div className="flex gap-3 mt-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            <FaArrowDown /> Deposit
          </button>

          <button className="bg-white text-red-500 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            <FaArrowUp /> Withdraw
          </button>
        </div>
      </div>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search transactions..."
        className="bg-gray-100 p-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📱 MOBILE */}
      <div className="grid gap-4 sm:hidden">
        {filteredTxns.map((txn) => (
          <div key={txn.id} className="bg-white p-4 rounded-xl shadow">

            <div className="flex justify-between">
              <h2 className="font-semibold">{txn.type}</h2>

              <span
                className={`text-xs px-2 py-1 rounded ${
                  txn.status === "Success"
                    ? "bg-green-100 text-green-600"
                    : txn.status === "Pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {txn.status}
              </span>
            </div>

            <p className="text-sm text-gray-500">{txn.user}</p>

            <div className="flex justify-between mt-2 text-sm">
              <span>₦{txn.amount.toLocaleString()}</span>
              <span>{txn.date}</span>
            </div>

            <button
              onClick={() => handleView(txn)}
              className="mt-3 text-blue-500"
            >
              <FaEye />
            </button>

          </div>
        ))}
      </div>

      {/* 💻 DESKTOP */}
      <div className="hidden sm:block bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">User</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
              <th>Date</th>
              <th>Reference</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredTxns.map((txn) => (
              <tr key={txn.id} className="border-t hover:bg-gray-50">

                <td className="p-4">{txn.user}</td>
                <td>{txn.type}</td>
                <td>₦{txn.amount.toLocaleString()}</td>
                <td>{txn.method}</td>

                <td>
                  <span className="text-xs px-2 py-1 rounded bg-gray-100">
                    {txn.status}
                  </span>
                </td>

                <td>{txn.date}</td>
                <td className="text-xs">{txn.reference}</td>

                <td className="text-center">
                  <FaEye
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleView(txn)}
                  />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 👁 MODAL */}
      {showModal && selectedTxn && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
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

export default WalletPage;