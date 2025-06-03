import React, { useState } from "react";

const TabConponent = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <p>Welcome to Home Tab</p>;
      case "Profile":
        return <p>Welcome to Profile Tab</p>;
      case "Settings":
        return <p>Welcome to Setting Tab</p>;
      default:
        return null;
    }
  };

  const tabs = ["Home", "Profile", "Settings"];

  return (
    <div className="min-h-screen min-w-screen bg-blue-200 border-2 shadow-2xl p-4">
      <div className="flex space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-blue-100"
            }`}
            key={tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="text-gray text-base ">{renderContent()}</div>
    </div>
  );
};

export default TabConponent;
