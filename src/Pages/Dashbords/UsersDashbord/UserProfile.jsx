import { useState } from "react";
import { FaUser, FaLock, FaCheckCircle } from "react-icons/fa";
import Card from "../../../Component/Card";

const UserProfile = () => {

  // ✅ STATES
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "08012345678",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [verification, setVerification] = useState({
    emailVerified: true,
    phoneVerified: false,
  });

  // ✅ HANDLERS
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
    alert("Profile updated successfully");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (password.new !== password.confirm) {
      return alert("Passwords do not match");
    }

    console.log("Password Change:", password);
    alert("Password updated successfully");

    setPassword({ current: "", new: "", confirm: "" });
  };

  const handleVerifyPhone = () => {
    alert("Verification code sent to phone");
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-6">

      {/* HEADER */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
        My Profile
      </h1>

      {/* 👤 PROFILE INFO */}
      <Card title="Profile Information">

        <form onSubmit={handleProfileUpdate} className="space-y-4">

          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <FaUser />
            </div>

            <button
              type="button"
              className="text-sm bg-gray-100 px-3 py-1 rounded"
            >
              Change Avatar
            </button>
          </div>

          <input
            type="text"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
            className="w-full border p-2 rounded"
            placeholder="Full Name"
          />

          <input
            type="email"
            value={profile.email}
            onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
            }
            className="w-full border p-2 rounded"
            placeholder="Email"
          />

          <input
            type="text"
            value={profile.phone}
            onChange={(e) =>
              setProfile({ ...profile, phone: e.target.value })
            }
            className="w-full border p-2 rounded"
            placeholder="Phone Number"
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Save Profile
          </button>

        </form>
      </Card>

      {/* 🔐 PASSWORD */}
      <Card title="Change Password">

        <form onSubmit={handlePasswordChange} className="space-y-4">

          <input
            type="password"
            placeholder="Current Password"
            value={password.current}
            onChange={(e) =>
              setPassword({ ...password, current: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            placeholder="New Password"
            value={password.new}
            onChange={(e) =>
              setPassword({ ...password, new: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={password.confirm}
            onChange={(e) =>
              setPassword({ ...password, confirm: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          <button className="bg-red-500 text-white px-4 py-2 rounded w-full flex items-center justify-center gap-2">
            <FaLock /> Update Password
          </button>

        </form>
      </Card>

      {/* ✅ VERIFICATION */}
      <Card title="Verification Status">

        <div className="space-y-4">

          {/* EMAIL */}
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
            <div>
              <p className="font-medium text-sm">Email Verification</p>
              <p className="text-xs text-gray-500">{profile.email}</p>
            </div>

            <span
              className={`text-xs px-2 py-1 rounded ${
                verification.emailVerified
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {verification.emailVerified ? "Verified" : "Not Verified"}
            </span>
          </div>

          {/* PHONE */}
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
            <div>
              <p className="font-medium text-sm">Phone Verification</p>
              <p className="text-xs text-gray-500">{profile.phone}</p>
            </div>

            {verification.phoneVerified ? (
              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-600 flex items-center gap-1">
                <FaCheckCircle /> Verified
              </span>
            ) : (
              <button
                onClick={handleVerifyPhone}
                className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded"
              >
                Verify Now
              </button>
            )}
          </div>

        </div>

      </Card>

    </div>
  );
};

export default UserProfile;