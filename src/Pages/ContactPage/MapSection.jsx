const MapSection = () => {
  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Visit Our Location
        </h2>

        <div className="w-full h-[400px] rounded-xl overflow-hidden">

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Port%20Harcourt&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
          ></iframe>

        </div>

      </div>
    </section>
  );
};

export default MapSection;