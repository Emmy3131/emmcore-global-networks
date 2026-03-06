import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Phone */}
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800">
            <Phone className="mx-auto text-yellow-500 mb-4" size={28}/>
            <h3 className="text-white font-semibold">Phone</h3>
            <p className="text-gray-400 mt-2">+234 000 000 0000</p>
          </div>

          {/* Email */}
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800">
            <Mail className="mx-auto text-yellow-500 mb-4" size={28}/>
            <h3 className="text-white font-semibold">Email</h3>
            <p className="text-gray-400 mt-2">support@emmcore.com</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800">
            <MessageCircle className="mx-auto text-yellow-500 mb-4" size={28}/>
            <h3 className="text-white font-semibold">WhatsApp</h3>
            <a
              href="https://wa.me/2340000000000"
              className="text-green-400 mt-2 block"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Address */}
          <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800">
            <MapPin className="mx-auto text-yellow-500 mb-4" size={28}/>
            <h3 className="text-white font-semibold">Location</h3>
            <p className="text-gray-400 mt-2">
              Port Harcourt, Rivers State
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;