const InvestmentSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Partner With Us & Earn From Real Product Sales
          </h2>

          <p className="text-gray-400 mt-6">
            Fund high-demand gadgets and earn profits when the products are sold.
            This is a structured inventory partnership backed by real business operations.
          </p>

          {/* Steps */}
          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <p>Select a product to fund</p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <p>Invest your preferred amount</p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <p>Earn profit after successful sales</p>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Start Partnership
          </button>

          {/* Risk */}
          <p className="text-gray-500 text-sm mt-4">
            All partnerships are tied to real product sales. Returns are not guaranteed and depend on market conditions.
          </p>
        </div>

        {/* RIGHT SIDE — INVESTMENT CARD */}
        <div className="bg-black border border-gray-800 rounded-2xl p-8 shadow-lg relative overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 bg-yellow-500 opacity-10 blur-3xl"></div>

          <h3 className="text-xl font-semibold">
            iPhone 11 Investment
          </h3>

          <p className="text-gray-400 mt-2">
            Capital Required: ₦300,000
          </p>

          {/* Progress */}
          <div className="mt-6">
            <div className="flex justify-between text-sm">
              <span>Funding Progress</span>
              <span>70%</span>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-3 mt-2">
              <div className="bg-yellow-500 h-3 rounded-full w-[70%]"></div>
            </div>
          </div>

          {/* Profit */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Profit Range</p>
              <p className="text-yellow-500 font-bold">
                ₦30k — ₦50k
              </p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Duration</p>
              <p className="font-bold">
                14 — 21 Days
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="w-full mt-6 bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
            Fund This Product
          </button>

        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;