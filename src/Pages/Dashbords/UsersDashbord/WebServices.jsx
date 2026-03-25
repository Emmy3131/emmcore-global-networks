import { useState } from "react";
import Card from "../../../Component/Card";

const WebServices = () => {

  // 🌐 WEB SERVICE PLANS
  const services = [
    {
      name: "E-commerce Website",
      price: 250000,
      description: "Full online store with payment integration, cart, admin dashboard and order management system.",
    },
    {
      name: "Business Website",
      price: 150000,
      description: "Professional company website with contact form, services page and responsive design.",
    },
    {
      name: "Portfolio Website",
      price: 80000,
      description: "Personal portfolio to showcase your skills, projects and achievements.",
    },
    {
      name: "Blog Website",
      price: 100000,
      description: "Content management blog with categories, comments and SEO optimization.",
    },
    {
      name: "Investment Platform",
      price: 300000,
      description: "Advanced investment platform with real-time analytics and portfolio management.",
    },
    {
      name: "Delivery Service Website",
      price: 150000,
      description: "Complete delivery service website with order tracking and management.",
    },
  ];

  // ✅ STATE
  const [selectedService, setSelectedService] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  // 📩 SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      service: selectedService,
    };

    console.log("Web Service Request:", payload);

    alert("Request submitted successfully!");

    // RESET
    setForm({
      name: "",
      email: "",
      phone: "",
      projectDetails: "",
    });
    setSelectedService(null);
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Web Services
        </h1>
        <p className="text-gray-400 text-sm">
          Choose a plan and request your website
        </p>
      </div>

      {/* 💼 SERVICE CARDS */}
      <div className="grid grid-cols-2  md:grid-cols-4 gap-4">

        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelectedService(service)}
            className={`cursor-pointer ${
              selectedService?.name === service.name
                ? "ring-2 ring-blue-500"
                : ""
            }`}
          >
            <div className="bg-white p-4 rounded-xl shadow h-full flex flex-col justify-between">

              {/* TOP */}
              <div>
                <h2 className="font-semibold text-sm mb-1">
                  {service.name}
                </h2>

                <p className="text-xs text-gray-500 line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="mt-3 flex justify-between items-center">
                <span className="text-blue-600 font-bold text-sm">
                  ₦{service.price.toLocaleString()}
                </span>

                <span className="text-xs text-gray-400">
                  Select
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* ✅ SELECTED PLAN */}
      {selectedService && (
        <Card title="Selected Plan">
          <div className="flex justify-between items-center">
            <p className="font-medium">{selectedService.name}</p>
            <p className="text-blue-600 font-bold">
              ₦{selectedService.price.toLocaleString()}
            </p>
          </div>
        </Card>
      )}

      {/* 📝 REQUEST FORM */}
      <Card title="Request Web Service">
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            placeholder="Describe your project..."
            value={form.projectDetails}
            onChange={(e) =>
              setForm({ ...form, projectDetails: e.target.value })
            }
            className="w-full border p-2 rounded"
            rows="4"
            required
          />

          <button
            type="submit"
            disabled={!selectedService}
            className={`w-full py-2 rounded text-white ${
              selectedService
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Submit Request
          </button>

        </form>
      </Card>

    </div>
  );
};

export default WebServices;