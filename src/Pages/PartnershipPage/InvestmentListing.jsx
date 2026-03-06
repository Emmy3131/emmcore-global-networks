const investments = [
  {
    product: "iPhone 11",
    capital: "₦300,000",
    min: "₦50,000",
    profit: "₦30,000 – ₦50,000",
    duration: "14 – 21 days",
    status: "Open"
  },
  {
    product: "Samsung S21",
    capital: "₦280,000",
    min: "₦40,000",
    profit: "₦25,000 – ₦45,000",
    duration: "14 – 21 days",
    status: "Open"
  }
];

const InvestmentListings = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white">
            Investment Opportunities
          </h2>

          <p className="text-gray-400 mt-3">
            Choose a product and fund its inventory
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {investments.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl text-white font-semibold mb-4">
                {item.product}
              </h3>

              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Total Capital: {item.capital}</li>
                <li>Minimum Investment: {item.min}</li>
                <li>Expected Profit: {item.profit}</li>
                <li>Duration: {item.duration}</li>
                <li>Status: 
                  <span className="text-green-400 ml-1">
                    {item.status}
                  </span>
                </li>
              </ul>

              <button className="mt-6 w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold">
                Invest Now
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InvestmentListings;