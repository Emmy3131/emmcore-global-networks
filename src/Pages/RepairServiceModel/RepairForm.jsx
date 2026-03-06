import { useState } from "react";

const RepairForm = () => {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    device: "",
    problem: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Repair Request
Name: ${form.name}
Phone: ${form.phone}
Device: ${form.device}
Problem: ${form.problem}`;

    const whatsapp = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(message)}`;

    window.open(whatsapp, "_blank");
  };

  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Request a Repair
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-xl border border-gray-800 space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 bg-black border border-gray-700 rounded text-white"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 bg-black border border-gray-700 rounded text-white"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="device"
            placeholder="Device Model (e.g iPhone 12)"
            className="w-full p-3 bg-black border border-gray-700 rounded text-white"
            onChange={handleChange}
            required
          />

          <textarea
            name="problem"
            placeholder="Describe the problem"
            rows="4"
            className="w-full p-3 bg-black border border-gray-700 rounded text-white"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400"
          >
            Submit Repair Request
          </button>

        </form>

      </div>
    </section>
  );
};

export default RepairForm;