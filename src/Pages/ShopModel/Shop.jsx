import { useState } from "react";
import ProductCard from "../../Component/ProductCard";

const Shop = () => {

  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      category: "Smartphones",
      price: "₦750,000",
      description: "256GB • Super Retina • A15 Chip",
      image: "/iphone.png",
      available: true,
    },
    {
      id: 2,
      name: "Samsung S22 Ultra",
      category: "Smartphones",
      price: "₦680,000",
      description: "256GB • 108MP Camera",
      image: "/samsung.png",
      available: true,
    },
    {
      id: 3,
      name: "AirPods Pro",
      category: "Accessories",
      price: "₦120,000",
      description: "Noise Cancellation • Wireless",
      image: "/airpods.png",
      available: true,
    },
    {
      id: 4,
      name: "Smart Watch",
      category: "Gadgets",
      price: "₦90,000",
      description: "Fitness tracking • Bluetooth",
      image: "/watch.png",
      available: false,
    },
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <section className="bg-black min-h-screen py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-white">Shop Devices</h1>
          <p className="text-gray-400 mt-3">
            Explore quality smartphones, accessories and gadgets
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">

          {["All", "Smartphones", "Accessories", "Gadgets"].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                category === item
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Product Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Shop;