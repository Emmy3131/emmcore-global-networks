import { useState } from "react";
import { FaChartLine } from "react-icons/fa";
import Card from "../../../Component/Card";
import { useNavigate } from "react-router-dom";

const OwnAProduct = () => {
  // 📦 PRODUCTS FOR INVESTMENT
  const products = [
    {
      id: 1,
      name: "iPhone 13",
      price: 400000,
      roi: 12, // %
      stock: 10,
      description:
        "Invest in high-demand smartphones and earn profit when sold.",
    },
    {
      id: 2,
      name: "Laptop (HP Pavilion)",
      price: 350000,
      roi: 15,
      stock: 5,
      description: "Laptops with steady demand and consistent return rate.",
    },
    {
      id: 3,
      name: "Smart TV",
      price: 250000,
      roi: 10,
      stock: 8,
      description: "Electronics with high resale turnover and profit margin.",
    },
  ];

  // ✅ STATE
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  // 💰 CALCULATIONS
  const totalAmount = selectedProduct ? selectedProduct.price * quantity : 0;

  const expectedProfit = selectedProduct
    ? (totalAmount * selectedProduct.roi) / 100
    : 0;

  // 📩 SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      product: selectedProduct,
      quantity,
      totalAmount,
      expectedProfit,
    };

    console.log("Investment:", payload);

    alert("Investment successful!");

    // RESET
    setSelectedProduct(null);
    setQuantity(1);
    setForm({ name: "", email: "" });
  };

  const navigate = useNavigate();
  return (
    <div className="w-full mx-auto sm:p-6 space-y-4">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between md:items-center ">
        <div className="p-3">
          <h1 className="text-2xl font-bold text-white">Own a Product</h1>
          <p className="text-gray-400 text-sm">
            Invest in products and earn profit when they are sold
          </p>
        </div>

       <div>
         <button
          onClick={() => navigate("/my-investments")}
          className="bg-gradient-to-r  from-blue-600 to-indigo-600 text-white px-5 
          py-3 rounded-lg text-sm shadow hover:scale-105 transition w-full md:w-auto mt-3 md:mt-0"
        >
          My Produts
        </button>
       </div>
      </div>
        
      {/* 📦 PRODUCT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className={`cursor-pointer ${
              selectedProduct?.id === product.id ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div className="bg-white p-4 rounded-xl shadow h-full flex flex-col justify-between">
              {/* TOP */}
              <div>
                <h2 className="font-semibold text-sm">{product.name}</h2>

                <p className="text-xs text-gray-500 line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* MIDDLE */}
              <div className="mt-2 text-xs text-gray-600 space-y-1">
                <p>Price: ₦{product.price.toLocaleString()}</p>
                <p>ROI: {product.roi}%</p>
                <p>Available: {product.stock} units</p>
              </div>

              {/* BOTTOM */}
              <div className="mt-3 flex justify-between items-center">
                <span className="text-blue-600 text-sm font-bold">Invest</span>
                <FaChartLine className="text-green-500" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ SELECTED PRODUCT */}
      {selectedProduct && (
        <Card title="Investment Details">
          <div className="space-y-3">
            <p className="font-medium">{selectedProduct.name}</p>

            {/* QUANTITY */}
            <div>
              <label className="text-sm">Quantity</label>
              <input
                type="number"
                min="1"
                max={selectedProduct.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full border p-2 rounded"
              />
            </div>

            {/* CALCULATIONS */}
            <div className="text-sm space-y-1">
              <p>Total: ₦{totalAmount.toLocaleString()}</p>
              <p className="text-green-600 font-semibold">
                Expected Profit: ₦{expectedProfit.toLocaleString()}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* 📝 INVESTMENT FORM */}
      {selectedProduct && (
        <Card title="Complete Investment">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Invest Now
            </button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default OwnAProduct;
