import { Smartphone, Battery, Zap, Settings } from "lucide-react";

const services = [
  {
    icon: <Smartphone size={28} />,
    title: "Screen Replacement",
    description: "Fix cracked or damaged screens for all major smartphone brands.",
    price: "From ₦25,000",
  },
  {
    icon: <Battery size={28} />,
    title: "Battery Replacement",
    description: "Replace weak or swollen batteries and restore full battery life.",
    price: "From ₦15,000",
  },
  {
    icon: <Zap size={28} />,
    title: "Charging Port Repair",
    description: "Fix devices that won't charge or have loose charging ports.",
    price: "From ₦10,000",
  },
  {
    icon: <Settings size={28} />,
    title: "Software Troubleshooting",
    description: "Fix OS errors, boot issues, app crashes and device lag.",
    price: "From ₦8,000",
  },
];

const RepairServices = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Phone Repair Services
          </h2>
          <p className="text-gray-400 mt-3">
            Professional phone repair services with fast turnaround
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-yellow-500 transition"
            >
              <div className="text-yellow-500 mb-4">
                {service.icon}
              </div>

              <h3 className="text-white text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>

              <p className="text-yellow-500 font-semibold">
                {service.price}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default RepairServices;