import { useState } from "react";

const ProjectRequest = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Website Project Request
Name: ${form.name}
Email: ${form.email}
Project Type: ${form.projectType}
Message: ${form.message}`;

    const whatsapp = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(message)}`;

    window.open(whatsapp, "_blank");
  };

  return (
    <section className="bg-black py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Start Your Project
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
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 bg-black border border-gray-700 rounded text-white"
            onChange={handleChange}
            required
          />

          <select
            name="projectType"
            className="w-full p-3 bg-black border border-gray-700 rounded text-white"
            onChange={handleChange}
            required
          >
            <option value="">Select Project Type</option>
            <option>Business Website</option>
            <option>E-commerce Website</option>
            <option>Web Application</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your project"
            className="w-full p-3 bg-black border border-gray-700 rounded text-white"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400"
          >
            Send Project Request
          </button>

        </form>
      </div>
    </section>
  );
};

export default ProjectRequest;