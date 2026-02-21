const Index = () => {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Trusted Hub for Phones, Repairs & Digital Solutions
          </h1>

          <p className="text-gray-400 mt-6">
            Buy, Fix, and Build with confidence.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold">
              Shop Now
            </button>

            <button className="border border-yellow-500 px-6 py-3 rounded-lg">
              Fix My Phone
            </button>

            <button className="bg-blue-600 px-6 py-3 rounded-lg">
              Build My Website
            </button>
          </div>
        </div>

        <div>
          <img
            src="/phone.png"
            alt="phones"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Index;