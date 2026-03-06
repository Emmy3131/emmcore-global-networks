const projects = [
  {
    title: "Business Website",
    image: "/portfolio/business-site.jpg",
    description: "Corporate website with modern UI and SEO optimization.",
  },
  {
    title: "E-commerce Store",
    image: "/portfolio/ecommerce.jpg",
    description: "Online store with payment integration and product catalog.",
  },
  {
    title: "Web Application",
    image: "/portfolio/dashboard.jpg",
    description: "Custom admin dashboard with analytics and user management.",
  },
];

const PortfolioWebsites = () => {
  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white">
            Completed Websites
          </h2>

          <p className="text-gray-400 mt-3">
            Some of the websites we have successfully built
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-white font-semibold text-lg">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>

                <button className="text-yellow-500 mt-4 text-sm font-semibold">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioWebsites;