"use client"; // Add this at the top of Header.tsx if using useState or other client-side hooks

import { useState } from "react";
import { FaTruck } from "react-icons/fa"; // Import a delivery truck icon from react-icons

const Header = ({ onClose }: { onClose: () => void }) => {
  const [showHeader, setShowHeader] = useState(true);

  const handleClose = () => {
    setShowHeader(false); // Hide the header when the close button is clicked
    onClose(); // Notify parent component to adjust layout
  };

  if (!showHeader) return null; // Do not render if header is closed

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#2A254B] text-white flex justify-center items-center p-4 z-50">
      <div className="flex items-center space-x-3">
        <FaTruck className="text-2xl" />
        <span className="text-lg font-semibold">Free Home Delivery</span>
      </div>
      <button
        onClick={handleClose}
        className="absolute right-4 text-2xl font-bold text-white hover:text-gray-200 transition"
      >
        &times; {/* This is the "X" icon */}
      </button>
    </div>
  );
};

export default Header;
