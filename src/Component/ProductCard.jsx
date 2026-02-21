const ProductCard = ({ product }) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 group hover:border-yellow-500 transition relative overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-yellow-500 blur-2xl transition"></div>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="h-44 object-contain transform group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Name */}
      <h3 className="text-white text-lg font-semibold">
        {product.name}
      </h3>

      {/* Specs */}
      <p className="text-gray-400 text-sm mt-2">
        {product.specs}
      </p>

      {/* Price */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-yellow-500 text-xl font-bold">
          ₦{product.price}
        </span>

        <span className="text-green-400 text-sm">
          In Stock
        </span>
      </div>

      {/* Button */}
      <a
        href={`https://wa.me/234XXXXXXXXXX`}
        target="_blank"
        rel="noreferrer"
        className="block mt-5 text-center bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
      >
        Order via WhatsApp
      </a>
    </div>
  );
};

export default ProductCard;