const SecuritySection = () => {
  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-white mb-10">
          Security & Transparency
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl">
            <p className="text-white font-semibold">
              Secure Payments
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <p className="text-white font-semibold">
              Transparent Communication
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <p className="text-white font-semibold">
              Order Tracking
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <p className="text-white font-semibold">
              Investor Updates
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SecuritySection;