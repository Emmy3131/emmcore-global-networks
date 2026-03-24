import { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import Card from "../../../Component/Card";

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

  // 🔄 STATUS CHANGE
  const handleStatusChange = (id, status) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    );
  };

  // ✅ STATUS STYLE
  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "In Progress":
        return "bg-blue-100 text-blue-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-6">
      
      {/* HEADER */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
        Web Project Management
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search projects..."
        className="bg-gray-100 p-3 rounded-lg w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📱 MOBILE CARDS */}
      <div className="grid gap-4 sm:hidden">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            title={project.projectName}
            subtitle={`Client: ${project.clientName}`}
            amount={`₦${project.budget.toLocaleString()}`}
            status={{
              label: project.status,
              type: project.status === "Completed"
                ? "success"
                : project.status === "In Progress"
                ? "info"
                : project.status === "Pending"
                ? "warning"
                : "danger",
            }}
            children={
              <div className="text-xs text-gray-500 space-y-1">
                <p>Dev: {project.developer}</p>
                <p>Deadline: {project.deadline}</p>
              </div>
            }
            actions={[
              {
                icon: <FaEye />,
                onClick: () => handleView(project),
                className: "bg-blue-100 text-blue-600",
              },
              {
                icon: <FaTrash />,
                onClick: () => handleDelete(project.id),
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
              <th className="px-6 py-3 text-left">Project</th>
              <th className="px-6 py-3 text-left">Client</th>
              <th className="px-6 py-3 text-left">Budget</th>
              <th className="px-6 py-3 text-left">Deadline</th>
              <th className="px-6 py-3 text-left">Developer</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredProjects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50 transition">

                <td className="px-6 py-4 font-medium text-gray-800">
                  {project.projectName}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {project.clientName}
                </td>

                <td className="px-6 py-4 font-semibold">
                  ₦{project.budget.toLocaleString()}
                </td>

                <td className="px-6 py-4 text-gray-400">
                  {project.deadline}
                </td>

                <td className="px-6 py-4">
                  {project.developer}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${getStatusStyle(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => handleView(project)}
                      className="p-2 rounded-lg bg-blue-100 text-blue-600"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => handleDelete(project.id)}
                      className="p-2 rounded-lg bg-red-100 text-red-600"
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
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          
          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-3">
            
            <h2 className="font-bold text-lg">Project Details</h2>

            <p><strong>Project:</strong> {selectedProject.projectName}</p>
            <p><strong>Client:</strong> {selectedProject.clientName}</p>
            <p><strong>Budget:</strong> ₦{selectedProject.budget.toLocaleString()}</p>
            <p><strong>Deadline:</strong> {selectedProject.deadline}</p>
            <p><strong>Developer:</strong> {selectedProject.developer}</p>
            <p><strong>Status:</strong> {selectedProject.status}</p>

            <div>
              <p className="font-semibold">Description:</p>
              <div className="bg-gray-100 p-3 rounded text-sm">
                {selectedProject.description}
              </div>
            </div>

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

export default WebProjectManagement;