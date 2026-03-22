import { useState } from "react";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // FORM STATES
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [platform, setPlatform] = useState({
    siteName: "Emmcore",
    currency: "₦",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  return (
    <div className="w-full max-w-7xl mx-auto p-3 sm:p-6 space-y-4">

      {/* HEADER */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
        Admin Settings
      </h1>

      <div className="flex flex-col md:flex-row gap-6">

        {/* SIDEBAR */}
        <div className="bg-white rounded-xl p-4 w-full md:w-64 shadow">
          <ul className="space-y-2 text-sm">

            <li
              onClick={() => setActiveTab("profile")}
              className={`p-2 rounded cursor-pointer ${
                activeTab === "profile" ? "bg-blue-100 text-blue-600" : ""
              }`}
            >
              Profile
            </li>

            <li
              onClick={() => setActiveTab("security")}
              className={`p-2 rounded cursor-pointer ${
                activeTab === "security" ? "bg-blue-100 text-blue-600" : ""
              }`}
            >
              Security
            </li>

            <li
              onClick={() => setActiveTab("platform")}
              className={`p-2 rounded cursor-pointer ${
                activeTab === "platform" ? "bg-blue-100 text-blue-600" : ""
              }`}
            >
              Platform
            </li>

            <li
              onClick={() => setActiveTab("notifications")}
              className={`p-2 rounded cursor-pointer ${
                activeTab === "notifications"
                  ? "bg-blue-100 text-blue-600"
                  : ""
              }`}
            >
              Notifications
            </li>

          </ul>
        </div>

        {/* CONTENT */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow">

          {/* 👤 PROFILE */}
          {activeTab === "profile" && (
            <div className="space-y-4">
              <h2 className="font-semibold text-lg">Profile Settings</h2>

              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className="w-full border p-2 rounded"
                placeholder="Name"
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

              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Save Changes
              </button>
            </div>
          )}

          {/* 🔐 SECURITY */}
          {activeTab === "security" && (
            <div className="space-y-4">
              <h2 className="font-semibold text-lg">Security</h2>

              <input
                type="password"
                placeholder="Current Password"
                className="w-full border p-2 rounded"
                onChange={(e) =>
                  setPassword({ ...password, current: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full border p-2 rounded"
                onChange={(e) =>
                  setPassword({ ...password, new: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border p-2 rounded"
                onChange={(e) =>
                  setPassword({ ...password, confirm: e.target.value })
                }
              />

              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Update Password
              </button>
            </div>
          )}

          {/* 🏢 PLATFORM */}
          {activeTab === "platform" && (
            <div className="space-y-4">
              <h2 className="font-semibold text-lg">Platform Settings</h2>

              <input
                type="text"
                value={platform.siteName}
                onChange={(e) =>
                  setPlatform({ ...platform, siteName: e.target.value })
                }
                className="w-full border p-2 rounded"
                placeholder="Site Name"
              />

              <select
                value={platform.currency}
                onChange={(e) =>
                  setPlatform({ ...platform, currency: e.target.value })
                }
                className="w-full border p-2 rounded"
              >
                <option value="₦">Naira (₦)</option>
                <option value="$">Dollar ($)</option>
              </select>

              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Save Platform Settings
              </button>
            </div>
          )}

          {/* 🔔 NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="space-y-4">
              <h2 className="font-semibold text-lg">Notifications</h2>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      email: !notifications.email,
                    })
                  }
                />
                Email Notifications
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={notifications.sms}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      sms: !notifications.sms,
                    })
                  }
                />
                SMS Notifications
              </label>

              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Save Preferences
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminSettings;