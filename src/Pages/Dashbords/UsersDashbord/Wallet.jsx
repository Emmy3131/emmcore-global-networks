import { useState } from "react";
import { FaArrowDown, FaArrowUp, FaEye } from "react-icons/fa";
import Card from "../../../Component/Card";

const Wallet = () => {

  // 💰 WALLET STATE
  const [wallet] = useState({
    balance: 250000,
    profit: 45000,
  });

  // 📜 TRANSACTIONS
  const [transactions] = useState([
    {
      id: 1,
      type: "Deposit",
      amount: 50000,
      status: "Success",
      date: "2026-03-20",
      reference: "TXN12345",
    },
    {
      id: 2,
      type: "Investment Profit",
      amount: 15000,
      status: "Success",
      date: "2026-03-18",
      reference: "TXN67890",
    },
    {
      id: 3,
      type: "Withdrawal",
      amount: 20000,
      status: "Pending",
      date: "2026-03-17",
      reference: "TXN11122",
    },
  ]);

  const [selectedTxn, setSelectedTxn] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-5">

      {/* HEADER */}
      <h1 className="text-xl sm:text-2xl font-bold text-white">
        Wallet
      </h1>

      {/* 💳 BALANCE CARDS */}
      <div className="grid grid-cols-2 md:w-full gap-4">

        {/* MAIN BALANCE */}
        <Card title="Main Balance">
          <h2 className="text-2xl font-bold text-blue-600">
            ₦{wallet.balance.toLocaleString()}
          </h2>
        </Card>

        {/* INVESTMENT PROFIT */}
        <Card title="Investment Profit">
          <h2 className="text-2xl font-bold text-green-600">
            ₦{wallet.profit.toLocaleString()}
          </h2>
        </Card>

      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-3">

        <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2">
          <FaArrowDown /> Deposit
        </button>

        <button className="flex-1 bg-red-500 text-white py-3 rounded-lg flex items-center justify-center gap-2">
          <FaArrowUp /> Withdraw
        </button>

      </div>

      {/* 📱 MOBILE TRANSACTIONS */}
      <div className="sm:hidden space-y-3">
        {transactions.map((txn) => (
          <Card
            key={txn.id}
            title={txn.type}
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
              <div className="text-xs text-gray-500">
                <p>{txn.date}</p>
                <p className="truncate">{txn.reference}</p>
              </div>
            }
            actions={[
              {
                icon: <FaEye />,
                onClick: () => {
                  setSelectedTxn(txn);
                  setShowModal(true);
                },
                className: "bg-blue-100 text-blue-600",
              },
            ]}
          />
        ))}
      </div>

      {/* 💻 DESKTOP TABLE */}
      <div className="hidden sm:block bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Reference</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-t hover:bg-gray-50">

                <td className="p-4">{txn.type}</td>
                <td>₦{txn.amount.toLocaleString()}</td>

                <td>
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
                </td>

                <td>{txn.date}</td>
                <td className="text-xs">{txn.reference}</td>

                <td className="text-center">
                  <FaEye
                    className="text-blue-500 cursor-pointer"
                    onClick={() => {
                      setSelectedTxn(txn);
                      setShowModal(true);
                    }}
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

            <p><strong>Type:</strong> {selectedTxn.type}</p>
            <p><strong>Amount:</strong> ₦{selectedTxn.amount}</p>
            <p><strong>Status:</strong> {selectedTxn.status}</p>
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

export default Wallet;