const cases = [
  {
    title: "E-commerce Platform for Gadget Store",
    problem:
      "Client needed an online store to sell phones and accessories.",
    solution:
      "We built a modern e-commerce website with product listings and order management.",
    result:
      "Client increased online sales by 60% within 3 months.",
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white">
            Case Studies
          </h2>

          <p className="text-gray-400 mt-3">
            Real projects and the results we delivered
          </p>
        </div>

        <div className="space-y-8">

          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl text-white font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 mb-3">
                <strong className="text-white">Problem:</strong> {item.problem}
              </p>

              <p className="text-gray-400 mb-3">
                <strong className="text-white">Solution:</strong> {item.solution}
              </p>

              <p className="text-gray-400">
                <strong className="text-white">Result:</strong> {item.result}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;