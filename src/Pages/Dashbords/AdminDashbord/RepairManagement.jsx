import { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import Card from "../../../Component/Card";

const RepairManagement = () => {
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
      description: "Customer reports cracked screen; needs replacement and testing",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedRepair, setSelectedRepair] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 🔍 FILTER
  const filteredRepairs = repairs.filter((r) =>
    r.customerName.toLowerCase().includes(search.toLowerCase())
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
    setRepairs((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-6">
      {/* HEADER */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
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

      {/* 📱 MOBILE CARDS USING CARD COMPONENT */}
      <div className="grid gap-4 sm:hidden">
        {filteredRepairs.map((repair) => (
          <Card
            key={repair.id}
            title={repair.customerName}
            subtitle={repair.device}
            amount={`₦${repair.cost.toLocaleString()}`}
            status={{
              label: repair.status,
              type:
                repair.status === "Completed"
                  ? "success"
                  : repair.status === "In Progress"
                  ? "info"
                  : repair.status === "Pending"
                  ? "warning"
                  : "danger",
            }}
            children={
              <div className="text-xs text-gray-500 space-y-1">
                <p>Issue: {repair.issue}</p>
                <p>Technician: {repair.technician}</p>
                <p>Date: {repair.date}</p>
                <p>Phone: {repair.phone}</p>
              </div>
            }
            actions={[
              {
                icon: <FaEye />,
                onClick: () => handleView(repair),
                className: "bg-blue-100 text-blue-600",
              },
              {
                icon: <FaTrash />,
                onClick: () => handleDelete(repair.id),
                className: "bg-red-100 text-red-600",
              },
            ]}
          />
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