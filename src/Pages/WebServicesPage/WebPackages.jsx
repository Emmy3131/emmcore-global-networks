const packages = [
  {
    name: "Starter Website",
    price: "₦150,000",
    features: [
      "5 Pages Website",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO",
    ],
  },
  {
    name: "Business Website",
    price: "₦350,000",
    features: [
      "10 Pages Website",
      "Admin Dashboard",
      "SEO Optimization",
      "Blog System",
    ],
  },
  {
    name: "E-commerce Website",
    price: "₦700,000",
    features: [
      "Unlimited Products",
      "Payment Integration",
      "Order Management",
      "Admin Dashboard",
    ],
  },
];

const WebPackages = () => {
  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Website Packages
          </h2>
          <p className="text-gray-400 mt-3">
            Flexible pricing for startups and growing businesses
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((pack, index) => (
            <div
              key={index}
              className="bg-gray-900 p-10 rounded-xl border border-gray-800 text-center hover:border-yellow-500 transition"
            >
              <h3 className="text-white text-xl font-semibold mb-4">
                {pack.name}
              </h3>

              <p className="text-yellow-500 text-3xl font-bold mb-6">
                {pack.price}
              </p>

              <ul className="text-gray-400 space-y-2 mb-8">
                {pack.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400">
                Choose Package
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WebPackages;