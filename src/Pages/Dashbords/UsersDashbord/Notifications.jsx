import { useState } from "react";
import {
  FaBell,
  FaShoppingCart,
  FaTools,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";
import Card from "../../../Component/Card";

const Notifications = () => {

  // 🔔 NOTIFICATIONS DATA
  const [notifications] = useState([
    {
      id: 1,
      title: "Product Purchased",
      message: "You successfully purchased iPhone 13",
      type: "order",
      status: "success",
      date: "2026-03-20",
      details: "Your order has been confirmed and is being processed.",
    },
    {
      id: 2,
      title: "Repair Completed",
      message: "Your phone repair is completed",
      type: "repair",
      status: "success",
      date: "2026-03-18",
      details: "You can now pick up your repaired device.",
    },
    {
      id: 3,
      title: "Investment Profit",
      message: "You earned ₦25,000 profit",
      type: "investment",
      status: "success",
      date: "2026-03-17",
      details: "Profit has been added to your wallet.",
    },
    {
      id: 4,
      title: "Web Service Request",
      message: "Your website request is in progress",
      type: "web",
      status: "info",
      date: "2026-03-16",
      details: "Our developers are currently working on your project.",
    },
    {
      id: 5,
      title: "Withdrawal Pending",
      message: "Your withdrawal is being processed",
      type: "wallet",
      status: "warning",
      date: "2026-03-15",
      details: "You will receive your funds shortly.",
    },
  ]);

  const [selected, setSelected] = useState(null);

  // 🎨 STATUS COLORS
  const statusStyles = {
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
    info: "bg-blue-100 text-blue-600",
  };

  // 🎯 ICON BASED ON TYPE
  const getIcon = (type) => {
    switch (type) {
      case "order":
        return <FaShoppingCart />;
      case "repair":
        return <FaTools />;
      case "investment":
        return <FaChartLine />;
      case "web":
        return <FaGlobe />;
      default:
        return <FaBell />;
    }
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 space-y-4">

      {/* HEADER */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
        Notifications
      </h1>

      {/* 🔔 LIST */}
      <div className="space-y-3">

        {notifications.map((note) => (
          <Card
            key={note.id}
            title={note.title}
            subtitle={note.message}
            status={{
              label: note.status,
              type: note.status,
            }}
            children={
              <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                <span>{note.date}</span>
                <span className="flex items-center gap-1">
                  {getIcon(note.type)} {note.type}
                </span>
              </div>
            }
            actions={[
              {
                label: "View",
                onClick: () => setSelected(note),
                className: "bg-blue-100 text-blue-600 text-xs",
              },
            ]}
          />
        ))}

      </div>

      {/* 👁 MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">

            <h2 className="font-bold text-lg">{selected.title}</h2>

            <p className="text-sm text-gray-600">
              {selected.message}
            </p>

            <div className="text-sm bg-gray-100 p-3 rounded">
              {selected.details}
            </div>

            <div className="flex justify-between text-xs text-gray-500">
              <span>{selected.date}</span>
              <span className={`px-2 py-1 rounded ${statusStyles[selected.status]}`}>
                {selected.status}
              </span>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Notifications;