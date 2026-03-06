import { Globe, ShoppingCart, Code } from "lucide-react";

const services = [
  {
    icon: <Globe size={28} />,
    title: "Business Websites",
    description:
      "Professional websites for businesses, brands, and personal portfolios.",
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "E-commerce Platforms",
    description:
      "Online stores with product listings, payment integration and order management.",
  },
  {
    icon: <Code size={28} />,
    title: "Web Applications",
    description:
      "Custom web platforms, dashboards and SaaS products for businesses.",
  },
];

const WebServices = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Web Development Services
          </h2>
          <p className="text-gray-400 mt-3">
            We build modern websites and applications that grow businesses
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-yellow-500 transition"
            >
              <div className="text-yellow-500 mb-4">{service.icon}</div>

              <h3 className="text-white text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WebServices;