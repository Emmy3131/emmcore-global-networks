import { useState } from "react";
import { FaEye, FaTrash, FaUser } from "react-icons/fa";

const WebProjectManagement = () => {

  // ✅ STATE
  const [projects, setProjects] = useState([
    {
      id: 1,
      clientName: "John Doe",
      projectName: "E-commerce Website",
      type: "Website",
      status: "In Progress",
      budget: 500000,
      deadline: "2026-04-10",
      developer: "Emmanuel",
      description:
        "Client wants a full e-commerce website with payment integration and admin dashboard.",
      date: "2026-03-15",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 🔍 SEARCH
  const filteredProjects = projects.filter((p) =>
    p.projectName.toLowerCase().includes(search.toLowerCase())
  );

  // 👁 VIEW
  const handleView = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // 🗑 DELETE
  const handleDelete = (id) => {
    if (window.confirm("Delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // 🔄 UPDATE STATUS
  const handleStatusChange = (id, status) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status } : p
      )
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-3 sm:p-6 space-y-4">

      {/* HEADER */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
        Web Project Management
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search projects..."
        className="bg-gray-100 p-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📱 MOBILE CARDS */}
      <div className="grid gap-4 sm:hidden">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded shadow">

            <div className="flex justify-between">
              <h2 className="font-semibold">{project.projectName}</h2>

              <span
                className={`text-xs px-2 py-1 rounded ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : project.status === "In Progress"
                    ? "bg-blue-100 text-blue-600"
                    : project.status === "Pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Client: {project.clientName}
            </p>

            <div className="flex justify-between mt-2 text-sm">
              <span>₦{project.budget.toLocaleString()}</span>
              <span>{project.deadline}</span>
            </div>

            <div className="flex gap-3 mt-3 items-center">
              <button onClick={() => handleView(project)}>
                <FaEye className="text-blue-500" />
              </button>

              <select
                value={project.status}
                onChange={(e) =>
                  handleStatusChange(project.id, e.target.value)
                }
                className="text-xs border rounded px-1"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>

              <button onClick={() => handleDelete(project.id)}>
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
              <th className="p-4 text-left">Project</th>
              <th>Client</th>
              <th>Budget</th>
              <th>Deadline</th>
              <th>Developer</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id} className="border-t hover:bg-gray-50">

                <td className="p-4 font-medium">
                  {project.projectName}
                </td>

                <td>{project.clientName}</td>
                <td>₦{project.budget.toLocaleString()}</td>
                <td>{project.deadline}</td>
                <td>{project.developer}</td>

                <td>
                  <select
                    value={project.status}
                    onChange={(e) =>
                      handleStatusChange(project.id, e.target.value)
                    }
                    className="border rounded px-2 py-1 text-xs"
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                </td>

                <td className="flex justify-center gap-3 p-4 ">
                  <FaEye
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleView(project)}
                  />

                  <FaTrash
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(project.id)}
                  />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 👁 MODAL */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-3">

            <h2 className="font-bold text-lg">Project Details</h2>

            <p><strong>Project:</strong> {selectedProject.projectName}</p>
            <p><strong>Client:</strong> {selectedProject.clientName}</p>
            <p><strong>Budget:</strong> ₦{selectedProject.budget.toLocaleString()}</p>
            <p><strong>Deadline:</strong> {selectedProject.deadline}</p>
            <p><strong>Developer:</strong> {selectedProject.developer}</p>
            <p><strong>Status:</strong> {selectedProject.status}</p>

            <div>
              <p className="font-semibold">Project Description:</p>
              <div className="bg-gray-100 p-3 rounded text-sm">
                {selectedProject.description}
              </div>
            </div>

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

export default WebProjectManagement;