import { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Card from "../../../Component/Card";

const ProductManagement = () => {
  // ✅ STATE
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 250000,
      category: "Electronics",
      status: "Available",
      quantity: 10,
      image: "https://via.placeholder.com/100",
      description: "High performance laptop",
    },
    {
      id: 2,
      name: "Phone",
      price: 120000,
      category: "Electronics",
      status: "Out of Stock",
      quantity: 0,
      image: "https://via.placeholder.com/100",
      description: "Smartphone device",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // 🔍 SEARCH
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  // 👁 VIEW
  const handleView = (product) => {
    setSelectedProduct(product);
    setIsEditing(false);
    setShowModal(true);
  };

  // ➕ ADD
  const handleAdd = () => {
    setSelectedProduct({
      name: "",
      price: "",
      category: "",
      quantity: "",
      status: "Available",
      image: "",
      description: "",
    });
    setIsEditing(false);
    setShowModal(true);
  };

  // ✏️ EDIT
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditing(true);
    setShowModal(true);
  };

  // 💾 SAVE
  const handleSave = () => {
    if (isEditing) {
      setProducts((prev) =>
        prev.map((p) => (p.id === selectedProduct.id ? selectedProduct : p)),
      );
    } else {
      const newProduct = {
        ...selectedProduct,
        id: Date.now(),
      };
      setProducts((prev) => [...prev, newProduct]);
    }

    setShowModal(false);
  };

  // 🗑 DELETE
  const handleDelete = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // 📝 INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-4">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
          Product Management
        </h1>

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Product
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-100 p-2 md:rounded-2xl md:w-1/3 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* MOBILE CARDS */}
      <div className="grid gap-4 sm:hidden">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            subtitle={product.category}
            image={product.image}
            amount={`₦${product.price}`}
            quantity={product.quantity}
            status={{
              label: product.status,
              type: product.status === "Available" ? "success" : "error",
            }}
            actions={[
              {
                icon: <FaEye />,
                onClick: () => handleView(product),
                className: "text-blue-500",
              },
              {
                icon: <FaEdit />,
                onClick: () => handleEdit(product),
                className: "text-yellow-500",
              },
              {
                icon: <FaTrash />,
                onClick: () => handleDelete(product.id),
                className: "text-red-500",
              },
            ]}
          />
        ))}
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden sm:block bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full border-separate border-spacing-0">
          {/* Header */}
          <thead className="bg-gray-100 ">
            <tr className="text-left py-10">
              <th className="pl-10">Products</th>
              <th>Price</th>
              <th>Category</th>
              <th>Qty</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product.id} className="hover:bg-gray-50 transition">
                <td className="flex items-center gap-3 p-2">
                  <img
                    src={product.image}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  {product.name}
                </td>

                <td className="">₦{product.price}</td>
                <td className="">{product.category}</td>
                <td className="">{product.quantity}</td>

                <td className="">
                  <span
                    className={` py-1 rounded text-xs ${
                      product.status === "Available"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>

                <td className="flex gap-3">
                  <FaEye
                    className="cursor-pointer text-blue-500"
                    onClick={() => handleView(product)}
                  />
                  <FaEdit
                    className="cursor-pointer text-yellow-500"
                    onClick={() => handleEdit(product)}
                  />
                  <FaTrash
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDelete(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-80 space-y-2">
            <h2 className="font-bold">{isEditing ? "Edit" : "Add"} Product</h2>

            <input
              name="name"
              value={selectedProduct?.name || ""}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 w-full"
            />
            <input
              name="price"
              value={selectedProduct?.price || ""}
              onChange={handleChange}
              placeholder="Price"
              className="border p-2 w-full"
            />
            <input
              name="category"
              value={selectedProduct?.category || ""}
              onChange={handleChange}
              placeholder="Category"
              className="border p-2 w-full"
            />
            <input
              name="quantity"
              value={selectedProduct?.quantity || ""}
              onChange={handleChange}
              placeholder="Quantity"
              className="border p-2 w-full"
            />
            <input
              name="image"
              value={selectedProduct?.image || ""}
              onChange={handleChange}
              placeholder="Image URL"
              className="border p-2 w-full"
            />
            <textarea
              name="description"
              value={selectedProduct?.description || ""}
              onChange={handleChange}
              placeholder="Description"
              className="border p-2 w-full"
            />

            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-3 py-1"
              >
                Save
              </button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
