const TrustSection = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-white mb-10">
          Why Trust Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-yellow-500 font-semibold">
              CAC Registered
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Officially registered business in Nigeria
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-yellow-500 font-semibold">
              Transparent Records
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Clear transaction records for partners
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-yellow-500 font-semibold">
              Real Product Sales
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Investments tied to physical products
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-yellow-500 font-semibold">
              Business Location
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Port Harcourt, Nigeria
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustSection;