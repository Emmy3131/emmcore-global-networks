import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "I bought my iPhone from EMMCORE and the experience was smooth. The device was original and affordable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Their repair service is amazing. My phone screen was fixed within hours and it looks brand new again.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    message:
      "EMMCORE built my business website and I started getting customers immediately. Very professional team!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mt-4">
            Trusted by hundreds of happy clients across our services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-600 mb-6">"{item.message}"</p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;