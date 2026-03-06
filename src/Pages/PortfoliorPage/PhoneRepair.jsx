const repairs = [
  {
    before: "/repairs/before1.jpg",
    after: "/repairs/after1.jpg",
    title: "iPhone Screen Replacement",
  },
  {
    before: "/repairs/before2.jpg",
    after: "/repairs/after2.jpg",
    title: "Samsung Charging Port Repair",
  },
];

const RepairPortfolio = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white">
            Repair Transformations
          </h2>

          <p className="text-gray-400 mt-3">
            See how we restore damaged devices to perfect condition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {repairs.map((repair, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-white mb-4 font-semibold">
                {repair.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <p className="text-gray-400 text-sm mb-2">Before</p>
                  <img
                    src={repair.before}
                    className="rounded-lg"
                  />
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-2">After</p>
                  <img
                    src={repair.after}
                    className="rounded-lg"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RepairPortfolio;