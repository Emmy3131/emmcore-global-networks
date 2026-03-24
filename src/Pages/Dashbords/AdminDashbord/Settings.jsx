import { useState } from "react";
import Card from "../../../Component/Card";

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
    <div className="w-full mx-auto p-3 sm:p-6 space-y-4">
      {/* HEADER */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
        Admin Settings
      </h1>

      <div className="flex flex-col md:flex-row gap-6">

        {/* SIDEBAR */}
        <Card className="w-full md:w-64 p-4">
          <ul className="space-y-2 text-sm">
            {["profile", "security", "platform", "notifications"].map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`p-2 rounded cursor-pointer ${
                  activeTab === tab ? "bg-blue-100 text-blue-600" : ""
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </li>
            ))}
          </ul>
        </Card>

        {/* CONTENT */}
        <div className="flex-1 space-y-4">

          {/* 👤 PROFILE */}
          {activeTab === "profile" && (
            <Card title="Profile Settings">
              <div className="space-y-4">
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
            </Card>
          )}

          {/* 🔐 SECURITY */}
          {activeTab === "security" && (
            <Card title="Security Settings">
              <div className="space-y-4">
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
            </Card>
          )}

          {/* 🏢 PLATFORM */}
          {activeTab === "platform" && (
            <Card title="Platform Settings">
              <div className="space-y-4">
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
            </Card>
          )}

          {/* 🔔 NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <Card title="Notification Settings">
              <div className="space-y-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={notifications.email}
                    onChange={() =>
                      setNotifications({ ...notifications, email: !notifications.email })
                    }
                  />
                  Email Notifications
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={notifications.sms}
                    onChange={() =>
                      setNotifications({ ...notifications, sms: !notifications.sms })
                    }
                  />
                  SMS Notifications
                </label>

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save Preferences
                </button>
              </div>
            </Card>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminSettings;