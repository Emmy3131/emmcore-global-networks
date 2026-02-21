import { ArrowRight, Wrench, ShoppingCart, Globe } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-emerald-900 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Upgrade, Repair, or Build Something Amazing?
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
          Whether you need a new device, professional repair, or a powerful website,
          EMMCORE is your trusted partner for quality and results.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <button className="flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            <ShoppingCart size={18} />
            Shop Devices
            <ArrowRight size={16} />
          </button>

          <button className="flex items-center justify-center gap-2 bg-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition">
            <Wrench size={18} />
            Fix My Phone
          </button>

          <button className="flex items-center justify-center gap-2 border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">
            <Globe size={18} />
            Build My Website
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTASection;