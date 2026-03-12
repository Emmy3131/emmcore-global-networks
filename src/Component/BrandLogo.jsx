import brandLogo from "../../public/brandLogo.jpeg";

const BrandLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={brandLogo}
        alt="EMMCORE-GLOBAL NETWORKS LTD"
        className="w-10 h-10 rounded-full object-cover"
      />

      <span className="text-xl font-bold text-yellow-500">EMMCORE-GLOBAL</span>
    </div>
  );
};

export default BrandLogo;
