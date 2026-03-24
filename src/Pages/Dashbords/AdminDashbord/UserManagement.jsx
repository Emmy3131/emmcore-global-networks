import { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import Card from "../../../Component/Card";

const UserManagement = () => {
  // ✅ STATE
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "User",
      status: "Active",
      joined: "2026-03-01",
    },
    {
      id: 2,
      name: "Admin User",
      email: "admin@example.com",
      role: "Admin",
      status: "Active",
      joined: "2026-02-15",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 🔍 SEARCH
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  // 👁 VIEW
  const handleView = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // 🗑 DELETE
  const handleDelete = (id) => {
    if (window.confirm("Delete this user?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  // 🔄 ROLE CHANGE
  const handleRoleChange = (id, role) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role } : u))
    );
  };

  // 🔄 STATUS CHANGE
  const handleStatusChange = (id, status) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status } : u))
    );
  };

  // 🎨 STATUS STYLE
  const getStatusStyle = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-600"
      : "bg-red-100 text-red-600";
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-6">
      
      {/* HEADER */}
      <h1 className="text-xl sm:text-2xl font-bold text-white">
        User Management
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search users..."
        className="bg-gray-100 p-3 rounded-lg w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📱 MOBILE CARDS */}
      <div className="grid gap-4 sm:hidden">
        {filteredUsers.map((user) => (
          <Card
            key={user.id}
            title={user.name}
            subtitle={user.email}
            status={{
              label: user.status,
              type: user.status === "Active" ? "success" : "danger",
            }}
            children={
              <div className="text-xs text-gray-500 space-y-1">
                <p>Role: {user.role}</p>
                <p>Joined: {user.joined}</p>
              </div>
            }
            actions={[
              {
                icon: <FaEye />,
                onClick: () => handleView(user),
                className: "bg-blue-100 text-blue-600",
              },
              {
                icon: <FaTrash />,
                onClick: () => handleDelete(user.id),
                className: "bg-red-100 text-red-600",
              },
            ]}
          />
        ))}
      </div>

      {/* 💻 DESKTOP TABLE */}
      <div className="hidden sm:block bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Joined</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">

                <td className="px-6 py-4 font-medium text-gray-800">
                  {user.name}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {user.email}
                </td>

                <td className="px-6 py-4">
                  <select
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChange(user.id, e.target.value)
                    }
                    className="border rounded px-2 py-1 text-xs"
                  >
                    <option>User</option>
                    <option>Admin</option>
                  </select>
                </td>

                <td className="px-6 py-4">
                  <select
                    value={user.status}
                    onChange={(e) =>
                      handleStatusChange(user.id, e.target.value)
                    }
                    className="border rounded px-2 py-1 text-xs"
                  >
                    <option>Active</option>
                    <option>Suspended</option>
                  </select>

                  <div className="mt-1">
                    <span
                      className={`px-2 py-1 text-xs rounded ${getStatusStyle(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-400">
                  {user.joined}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => handleView(user)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => handleDelete(user.id)}
                      className="p-2 bg-red-100 text-red-600 rounded-lg"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 👁 MODAL */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          
          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-3">
            
            <h2 className="font-bold text-lg">User Details</h2>

            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>
            <p><strong>Joined:</strong> {selectedUser.joined}</p>

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

export default UserManagement;