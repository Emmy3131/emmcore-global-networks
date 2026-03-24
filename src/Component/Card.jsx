// components/Card.jsx
import React from "react";

const Card = ({
  title,
  subtitle,
  image,
  amount,
  quantity,
  status,
  actions,
  children,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-3">

      {/* 🔝 Top Section */}
      <div className="flex items-center gap-3">
        
        {/* Image (optional) */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-12 h-12 rounded-lg object-cover"
          />
        )}

        {/* Title + Subtitle */}
        <div className="flex-1">
          <h2 className="font-semibold text-sm">{title}</h2>
          {subtitle && (
            <p className="text-xs text-gray-500">{subtitle}</p>
          )}
        </div>

        {/* Status */}
        {status && (
          <span
            className={`text-xs px-2 py-1 rounded ${
              status.type === "success"
                ? "bg-green-100 text-green-600"
                : status.type === "warning"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {status.label}
          </span>
        )}
      </div>

      {/* 💰 Amount + Quantity */}
      {(amount || quantity) && (
        <div className="flex justify-between text-sm">
          {amount && <span className="font-medium">{amount}</span>}
          {quantity !== undefined && (
            <span className="text-gray-500">Qty: {quantity}</span>
          )}
        </div>
      )}

      {/* 🧩 Extra Content */}
      {children}

      {/* ⚡ Actions */}
      {actions && (
        <div className="flex gap-2 pt-2">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className={`flex-1 flex items-center justify-center gap-1 px-2 py-1 rounded text-xs ${action.className}`}
            >
              {action.icon}
              {action.label && <span>{action.label}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;