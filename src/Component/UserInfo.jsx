const UserInfo = () => {
  return (
    <div className="flex items-center gap-2 ">
      
      {/* Avatar */}
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-2 border-amber-400"
      />

      {/* User Details */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm md:text-base font-semibold text-emerald-300">
          John Doe
        </span>
      </div>

    </div>
  );
};

export default UserInfo;