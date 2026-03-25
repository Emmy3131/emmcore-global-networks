import { useState } from "react";
import { FaTools } from "react-icons/fa";
import Card from "../../../Component/Card";

const FixeYourSmartPhones = () => {
  // ✅ SERVICES
  const services = [
    {
      name: "Screen Replacement",
      price: 25000,
      description: "Fix broken or cracked screen with original parts",
    },
    {
      name: "Battery Replacement",
      price: 15000,
      description: "Replace weak or damaged battery",
    },
    {
      name: "Charging Port Repair",
      price: 10000,
      description: "Fix charging issues or replace port",
    },
    {
      name: "Software Troubleshooting",
      price: 8000,
      description: "Fix software bugs, lagging, or OS issues",
    },
  ];

  // ✅ STATE
  const [selectedService, setSelectedService] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    device: "",
    issue: "",
  });

  // 📩 HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      service: selectedService,
    };

    console.log("Repair Request:", payload);

    alert("Repair request submitted!");

    // RESET
    setForm({ name: "", phone: "", device: "", issue: "" });
    setSelectedService(null);
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-white">Fix Your Smartphone</h1>
        <p className="text-gray-400 text-sm">
          Select a service and request a repair
        </p>
      </div>

      {/* 🛠 SERVICES */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
                <h2 className="font-semibold text-sm mb-1">{service.name}</h2>

                <p className="text-xs text-gray-500 line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="mt-3 flex justify-between items-center">
                <span className="text-blue-600 font-bold text-sm">
                  ₦{service.price.toLocaleString()}
                </span>

                <span className="text-xs text-gray-400">Select</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ SELECTED SERVICE */}
      {selectedService && (
        <Card title="Selected Service">
          <div className="flex justify-between items-center">
            <p className="font-medium">{selectedService.name}</p>
            <p className="text-blue-600 font-bold">
              ₦{selectedService.price.toLocaleString()}
            </p>
          </div>
        </Card>
      )}

      {/* 📝 REQUEST FORM */}
      <Card title="Request Repair Service">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Device (e.g iPhone 11)"
            value={form.device}
            onChange={(e) => setForm({ ...form, device: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            placeholder="Describe the issue..."
            value={form.issue}
            onChange={(e) => setForm({ ...form, issue: e.target.value })}
            className="w-full border p-2 rounded"
            rows="3"
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

export default FixeYourSmartPhones;
