const steps = [
  "Select a product to fund",
  "Review investment details",
  "Fund the product",
  "Product is sold in the market",
  "Profit is shared with investors"
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl text-white font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center"
            >
              <div className="text-yellow-500 text-2xl font-bold mb-3">
                {index + 1}
              </div>

              <p className="text-gray-300 text-sm">
                {step}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;