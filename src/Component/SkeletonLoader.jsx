const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4 animate-pulse">
      
      {/* Image */}
      <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>

      {/* Title */}
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

      {/* Price */}
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

      {/* Button */}
      <div className="h-10 bg-gray-300 rounded"></div>

    </div>
  );
};

export default ProductSkeleton;