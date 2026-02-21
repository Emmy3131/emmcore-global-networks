const Services = () => {
  const services = [
    {
      title: "Buy Devices",
      desc: "Shop quality smartphones and gadgets at great prices.",
    },
    {
      title: "Repair Devices",
      desc: "Professional phone repair with trusted technicians.",
    },
    {
      title: "Web Development",
      desc: "We build modern websites and digital platforms.",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-yellow-500"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-400 mt-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services