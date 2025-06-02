import React, { useState } from "react";

const ToggleVisibility = () => {
  const [visible, setVisible] = useState(false);
  const ToggleVisibility = () => {
    setVisible((visible) => !visible);
  };

  return (
    <div className="min-h-screen min-w-screen   bg-sky-300 ">
      <div 
      className=""
      >
      <label className="font-medium text-4xl mt-10 ">Password</label>
      <div className="relative">
        <input
          className=" w-1/2 px-4 py-2 border rounded-2xl focus:ontline-none focus:ring-2 focus:ring-blue-500"
          type={visible ? "text" : "password"}
          placeholder="enter your password........"
        />
        <button
        className="absolute text-2xl font-medium text-blue-600 hover:underline bg-amber-300 rounded-3xl mx-3 px-6 py-2 shadow-md hover:bg-amber-400 transition-all duration-200"

        type="button"
   onClick={ToggleVisibility}
        >
 {
  visible? 'Hide' : 'Show'
 }
        </button>
      </div>
      </div>
    </div>
  );
};

export default ToggleVisibility;
