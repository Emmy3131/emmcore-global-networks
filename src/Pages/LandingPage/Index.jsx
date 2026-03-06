import heroImage from "../../assets/heroImage/hero.png";

const Index = () => {
  return (
    <section className="relative bg-gray-900 text-white py-28">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Trusted Hub for Phones, Repairs & Digital Solutions
          </h1>

          <p className="text-gray-300 mt-6">
            Buy, Fix, and Build with confidence.
          </p>

          <div className="flex gap-4 mt-8 justify-center items-center flex-wrap">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Shop Now
            </button>

            <button className="border border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition">
              Fix My Phone
            </button>

            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Build My Website
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;