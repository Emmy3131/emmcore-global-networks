import { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";

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

  // 🔄 CHANGE ROLE
  const handleRoleChange = (id, role) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role } : u))
    );
  };

  // 🔄 CHANGE STATUS
  const handleStatusChange = (id, status) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status } : u))
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-3 sm:p-6 space-y-4">

      {/* HEADER */}
      <h1 className="text-xl sm:text-2xl font-bold text-white">
        User Management
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search users..."
        className="bg-gray-100 p-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📱 MOBILE VIEW */}
      <div className="grid gap-4 sm:hidden">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-xl shadow">

            <div className="flex justify-between">
              <h2 className="font-semibold">{user.name}</h2>

              <span
                className={`text-xs px-2 py-1 rounded ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {user.status}
              </span>
            </div>

            <p className="text-sm text-gray-500">{user.email}</p>

            <div className="flex justify-between mt-2 text-sm">
              <span>{user.role}</span>
              <span>{user.joined}</span>
            </div>

            <div className="flex gap-3 mt-3 items-center">

              <button onClick={() => handleView(user)}>
                <FaEye className="text-blue-500" />
              </button>

              <select
                value={user.role}
                onChange={(e) =>
                  handleRoleChange(user.id, e.target.value)
                }
                className="text-xs border rounded px-1"
              >
                <option>User</option>
                <option>Admin</option>
              </select>

              <select
                value={user.status}
                onChange={(e) =>
                  handleStatusChange(user.id, e.target.value)
                }
                className="text-xs border rounded px-1"
              >
                <option>Active</option>
                <option>Suspended</option>
              </select>

              <button onClick={() => handleDelete(user.id)}>
                <FaTrash className="text-red-500" />
              </button>

            </div>

          </div>
        ))}
      </div>

      {/* 💻 DESKTOP TABLE */}
      <div className="hidden sm:block bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">

                <td className="p-4 font-medium">{user.name}</td>
                <td>{user.email}</td>

                <td>
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

                <td>
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
                </td>

                <td>{user.joined}</td>

                <td className="flex justify-center gap-3 p-4">
                  <FaEye
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleView(user)}
                  />

                  <FaTrash
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(user.id)}
                  />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 👁 MODAL */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-3">

            <h2 className="font-bold text-lg">User Details</h2>

            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>
            <p><strong>Joined:</strong> {selectedUser.joined}</p>

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

export default UserManagement;