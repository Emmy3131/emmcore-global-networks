import { useState } from "react";
import { FaEye, FaTrash, FaTools } from "react-icons/fa";

const RepairManagement = () => {
  // ✅ STATE
  const [repairs, setRepairs] = useState([
    {
      id: 1,
      customerName: "John Doe",
      phone: "08012345678",
      device: "iPhone 11",
      issue: "Screen Replacement",
      status: "Pending",
      date: "2026-03-15",
      cost: 25000,
      technician: "Mike",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedRepair, setSelectedRepair] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 🔍 SEARCH
  const filteredRepairs = repairs.filter((r) =>
    r.customerName.toLowerCase().includes(search.toLowerCase()),
  );

  // 👁 VIEW DETAILS
  const handleView = (repair) => {
    setSelectedRepair(repair);
    setShowModal(true);
  };

  // 🗑 DELETE
  const handleDelete = (id) => {
    if (window.confirm("Delete this repair request?")) {
      setRepairs((prev) => prev.filter((r) => r.id !== id));
    }
  };

  // 🔄 UPDATE STATUS
  const handleStatusChange = (id, status) => {
    setRepairs((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* HEADER */}
      <h1 className="text-xl sm:text-2xl font-bold text-white">
        Repair Management
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search repairs..."
        className="bg-gray-100 p-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📱 MOBILE CARDS */}
      <div className="grid gap-4 sm:hidden">
        {filteredRepairs.map((repair) => (
          <div key={repair.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between">
              <h2 className="font-semibold">{repair.customerName}</h2>

              <span
                className={`text-xs px-2 py-1 rounded ${
                  repair.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : repair.status === "In Progress"
                      ? "bg-blue-100 text-blue-600"
                      : repair.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                }`}
              >
                {repair.status}
              </span>
            </div>

            <p className="text-sm text-gray-500">{repair.device}</p>
            <p className="text-sm">{repair.issue}</p>

            <div className="flex justify-between mt-2 text-sm">
              <span>₦{repair.cost}</span>
              <span>{repair.date}</span>
            </div>

            <div className="flex gap-3 mt-3 items-center">
              <button onClick={() => handleView(repair)}>
                <FaEye className="text-blue-500" />
              </button>

              <select
                value={repair.status}
                onChange={(e) => handleStatusChange(repair.id, e.target.value)}
                className="text-xs border rounded px-1"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>

              <button onClick={() => handleDelete(repair.id)}>
                <FaTrash className="text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 💻 DESKTOP TABLE */}
      <div className="hidden sm:block bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full border-separate border-spacing-0 text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr className="text-left">
              <th className="p-4 text-left">Customer</th>
              <th>Device</th>
              <th>Issue</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Date</th>
              <th>Technician</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRepairs.map((repair) => (
              <tr key={repair.id} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  {repair.customerName}
                  <p className="text-xs text-gray-400">{repair.phone}</p>
                </td>

                <td>{repair.device}</td>
                <td>{repair.issue}</td>
                <td>₦{repair.cost}</td>

                <td>
                  <select
                    value={repair.status}
                    onChange={(e) =>
                      handleStatusChange(repair.id, e.target.value)
                    }
                    className="border rounded px-2 py-1 text-xs"
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                </td>

                <td>{repair.date}</td>
                <td>{repair.technician}</td>

                <td className="flex justify-center gap-3 p-4">
                  <FaEye
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleView(repair)}
                  />

                  <FaTrash
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(repair.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 👁 MODAL */}
      {showModal && selectedRepair && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">
            <h2 className="font-bold text-lg border-b pb-2">Repair Details</h2>

            <div className="space-y-2 text-sm">
              <p>
                <strong>Name:</strong> {selectedRepair.customerName}
              </p>
              <p>
                <strong>Phone:</strong> {selectedRepair.phone}
              </p>
              <p>
                <strong>Device:</strong> {selectedRepair.device}
              </p>
              <p>
                <strong>Issue:</strong> {selectedRepair.issue}
              </p>

              {/* ✅ DESCRIPTION (NEW) */}
              <div>
                <p className="font-semibold">Customer Description:</p>
                <div className="bg-gray-100 p-3 rounded-lg text-gray-700 text-sm mt-1">
                  {selectedRepair.description || "No description provided"}
                </div>
              </div>

              <p>
                <strong>Cost:</strong> ₦{selectedRepair.cost}
              </p>
              <p>
                <strong>Status:</strong> {selectedRepair.status}
              </p>
              <p>
                <strong>Technician:</strong> {selectedRepair.technician}
              </p>
              <p>
                <strong>Date:</strong> {selectedRepair.date}
              </p>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepairManagement;
