import ProductCard from "../../Component/ProductCard";
import ProductSkeleton from "../../Component/SkeletonLoader";
import { useState, useEffect } from "react";

const FeaturedProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts([
        {
          name: "iPhone 13 Pro",
          specs: "256GB • 6GB RAM • Super Retina",
          price: "750,000",
          image: "/iphone.png",
        },
        {
          name: "Samsung S22 Ultra",
          specs: "256GB • 12GB RAM • 108MP",
          price: "680,000",
          image: "/samsung.png",
        },
        {
          name: "AirPods Pro",
          specs: "Noise Cancellation • Wireless",
          price: "120,000",
          image: "/airpods.png",
        },
        {
          name: "Apple Watch Series 8",
          specs: "GPS • 45mm • Fitness Tracking",
          price: "300,000",
          image: "/watch.png",
        },
      ]);

      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Products
          </h2>
          <p className="text-gray-400 mt-4">
            Top quality devices available for immediate purchase
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => <ProductSkeleton key={i} />)
            : products.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;