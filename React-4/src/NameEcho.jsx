import React, { useState } from "react";

const NameEcho = () => {
  const [input,setInput] = useState('');
  const displayText = input.trim() || 'type something...' ;

  return (
    <div className="min-h-screen min-w-screen mx-auto bg-red-200 rounded-2xl shadow-md">
      <div className="ml-20">
      <label className=" block  mb-2 text-lg font-semibold text-gray-700">
        Enter your name
      </label>
      <input
       type="text"
       value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-md px-x py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 " 
        placeholder="start typing..........."
       />
       <p 
       className="mt-4 text-xl text-gray-800"
       >
        {displayText}
       </p>
       </div>
    </div>
  );
};

export default NameEcho;
