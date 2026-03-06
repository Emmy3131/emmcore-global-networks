const ContactForm = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Send Us a Message
        </h2>

        <form className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-white w-full"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-white w-full"
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-white w-full"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-white w-full"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default ContactForm;