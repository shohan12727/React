import  { useState } from "react";

const Dark = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleSwitch = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
    className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500  ${darkMode? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}  `}
    >
      <h1 
      className="text-2xl font-semibold mb-4"
      >{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button 
      className="px-6 py-2 rounded-lg shadow-md font-medium transition duration-300 bg-blue-600 text-white hover:bg-blue-700"
      onClick={toggleSwitch}>Toggole Mode</button>
    </div>
  );
};

export default Dark;
