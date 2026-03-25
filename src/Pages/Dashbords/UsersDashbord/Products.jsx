import { useState } from "react";
import { FaCartPlus, FaStar, FaEye } from "react-icons/fa";

const Products = () => {

  // ✅ STATE
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [products] = useState([
    {
      id: 1,
      name: "iPhone 13",
      price: 400000,
      category: "Hot",
      stock: 12,
      rating: 4,
      description: "High performance iPhone with A15 chip and great camera.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Samsung S22",
      price: 350000,
      category: "Featured",
      stock: 5,
      rating: 5,
      description: "Flagship Android phone with amazing display.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "MacBook Pro",
      price: 1200000,
      category: "Recent",
      stock: 3,
      rating: 5,
      description: "Powerful laptop for developers and creatives.",
      image: "https://via.placeholder.com/300",
    },
  ]);

  // 🔍 SEARCH FILTER
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🛒 ADD TO CART
  const handleAddToCart = (product) => {
    console.log("Added:", product);
  };

  // 👁 READ MORE
  const handleReadMore = (product) => {
    setSelectedProduct(product);
  };

  // ⭐ RATING UI
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-6">

      {/* HEADER */}
      <h1 className="text-2xl font-bold text-white">Products</h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 rounded-lg bg-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-3 flex flex-col"
          >
            {/* IMAGE */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 object-cover rounded-lg"
            />

            {/* INFO */}
            <div className="mt-2 space-y-1 flex-1">
              <h2 className="font-semibold text-sm">{product.name}</h2>

              <p className="text-xs text-gray-500">
                Category: {product.category}
              </p>

              <p className="text-blue-600 font-bold text-sm">
                ₦{product.price.toLocaleString()}
              </p>

              {/* STOCK */}
              <p className="text-xs text-gray-400">
                Stock: {product.stock}
              </p>

              {/* RATING */}
              <div className="flex gap-1 text-xs">
                {renderStars(product.rating)}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2 mt-3">

              <button
                onClick={() => handleAddToCart(product)}
                className="flex-1 bg-blue-600 text-white py-2 rounded text-xs flex items-center justify-center gap-1"
              >
                <FaCartPlus /> Cart
              </button>

              <button
                onClick={() => handleReadMore(product)}
                className="flex-1 bg-gray-100 text-gray-600 py-2 rounded text-xs flex items-center justify-center gap-1"
              >
                <FaEye /> View
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* 👁 MODAL (READ MORE) */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-3">

            <h2 className="text-lg font-bold">
              {selectedProduct.name}
            </h2>

            <img
              src={selectedProduct.image}
              alt=""
              className="w-full h-40 object-cover rounded"
            />

            <p className="text-sm text-gray-500">
              {selectedProduct.description}
            </p>

            <p><strong>Category:</strong> {selectedProduct.category}</p>
            <p><strong>Price:</strong> ₦{selectedProduct.price.toLocaleString()}</p>
            <p><strong>Stock:</strong> {selectedProduct.stock}</p>

            <div className="flex gap-1">
              {renderStars(selectedProduct.rating)}
            </div>

            <button
              onClick={() => setSelectedProduct(null)}
              className="w-full bg-blue-600 text-white py-2 rounded mt-3"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Products;