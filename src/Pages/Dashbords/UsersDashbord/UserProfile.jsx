import { useState } from "react";
import {FaUser, FaLock, FaCheckCircle, FaIdCard,  FaCopy} from "react-icons/fa";
import Card from "../../../Component/Card";


const UserProfile = () => {

  // ✅ ACTIVE TAB
  const [activeTab, setActiveTab] = useState("profile");

  // PROFILE DATA
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@mail.com",
    phone: "",
    address: "",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const verification = {
    email: true,
    phone: false,
    identity: false,
  };

  /* ------------------ COMPONENT SECTIONS ------------------ */
const ProfileSection = () => {
    const referralLink = `https://emmcore.com/ref/${profile.email}`;

  const copyReferral = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };
    return (
  <Card title="Profile Information">

      <form className="space-y-6">

        {/* PROFILE IMAGE */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-sm">
            Photo
          </div>

          <button
            type="button"
            className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200"
          >
            Upload Photo
          </button>
        </div>

        {/* USER ID */}
        <div>
          <label className="text-sm text-gray-500">User ID</label>
          <input
            type="text"
            value="EMM-10293"
            readOnly
            className="input bg-gray-100"
          />
        </div>

        {/* FULL NAME */}
        <div>
          <label className="text-sm text-gray-500">Full Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
            className="input"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-500">Email</label>
          <input
            type="email"
            value={profile.email}
            readOnly
            className="input bg-gray-100"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="text-sm text-gray-500">Phone Number</label>
          <input
            type="text"
            value={profile.phone}
            onChange={(e) =>
              setProfile({ ...profile, phone: e.target.value })
            }
            className="input"
            placeholder="Enter phone number"
          />
        </div>

        {/* ADDRESS */}
        <div>
          <label className="text-sm text-gray-500">Address</label>
          <input
            type="text"
            value={profile.address}
            onChange={(e) =>
              setProfile({ ...profile, address: e.target.value })
            }
            className="input"
            placeholder="Enter address"
          />
        </div>

        {/* REFERRAL LINK */}
        <div>
          <label className="text-sm text-gray-500">
            Referral Link
          </label>

          <div className="flex gap-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="input flex-1 bg-gray-100"
            />

            <button
              type="button"
              onClick={copyReferral}
              className="px-3 bg-blue-600 text-white rounded flex items-center gap-2"
            >
              <FaCopy /> Copy
            </button>
          </div>
        </div>

        {/* SAVE BUTTON */}
        <button className="btn-primary w-full">
          Save Changes
        </button>

      </form>

    </Card>
    );
    };


  const CompleteProfile = () => (
    <Card title="Complete Your Profile">
      <div className="space-y-4">

        <input
          type="text"
          placeholder="Phone Number"
          value={profile.phone}
          onChange={(e) =>
            setProfile({ ...profile, phone: e.target.value })
          }
          className="input"
        />

        <input
          type="text"
          placeholder="Address"
          value={profile.address}
          onChange={(e) =>
            setProfile({ ...profile, address: e.target.value })
          }
          className="input"
        />

        <button className="btn-primary w-full">
          Update Profile
        </button>

      </div>
    </Card>
  );

  const PasswordSection = () => (
    <Card title="Change Password">
      <form className="space-y-4">

        <input
          type="password"
          placeholder="Current Password"
          className="input"
        />

        <input
          type="password"
          placeholder="New Password"
          className="input"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="input"
        />

        <button className="bg-red-500 text-white w-full py-2 rounded">
          Update Password
        </button>

      </form>
    </Card>
  );

  const VerificationSection = () => (
    <Card title="Account Verification">

      <div className="space-y-4">

        <VerificationItem
          title="Email Verification"
          verified={verification.email}
        />

        <VerificationItem
          title="Phone Verification"
          verified={verification.phone}
        />

        <VerificationItem
          title="Identity Verification"
          verified={verification.identity}
        />

      </div>

    </Card>
  );

  const VerificationItem = ({ title, verified }) => (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
      <p className="text-sm font-medium">{title}</p>

      {verified ? (
        <span className="text-green-600 text-sm flex gap-1 items-center">
          <FaCheckCircle /> Verified
        </span>
      ) : (
        <button className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded">
          Verify
        </button>
      )}
    </div>
  );

  /* ------------------ RENDER SWITCH ------------------ */

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSection />;
      case "complete":
        return <CompleteProfile />;
      case "password":
        return <PasswordSection />;
      case "verification":
        return <VerificationSection />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full p-3 sm:p-6">

      <h1 className="text-xl font-bold text-white mb-6">
        Account Settings
      </h1>

      <div className="grid lg:grid-cols-4 gap-6">

        {/* ✅ LEFT SETTINGS MENU */}
        <div className="lg:col-span-1">

          <Card>

            <SettingsItem
              icon={<FaUser />}
              label="Profile"
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            />

            <SettingsItem
              icon={<FaIdCard />}
              label="Complete Profile"
              active={activeTab === "complete"}
              onClick={() => setActiveTab("complete")}
            />

            <SettingsItem
              icon={<FaLock />}
              label="Password"
              active={activeTab === "password"}
              onClick={() => setActiveTab("password")}
            />

            <SettingsItem
              icon={<FaCheckCircle />}
              label="Verification"
              active={activeTab === "verification"}
              onClick={() => setActiveTab("verification")}
            />

          </Card>

        </div>

        {/* ✅ RIGHT CONTENT */}
        <div className="lg:col-span-3">
          {renderContent()}
        </div>

      </div>

    </div>
  );
};

/* ------------------ MENU ITEM ------------------ */

const SettingsItem = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition
      ${active
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-100 text-gray-700"
      }`}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default UserProfile;
