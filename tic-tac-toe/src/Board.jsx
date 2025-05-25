import React, { useState } from "react";

const Board = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center mt-0 ">
      <div className="flex flex-row">
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => setCount((preCount) => preCount + 1)}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => setCount((preCount) => preCount + 1)}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => setCount((preCount) => preCount + 1)}
        >
          {count}
        </button>
      </div>
      <div className="flex flex-row">
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => setCount((preCount) => preCount + 1)}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => setCount((preCount) => preCount + 1)}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => setCount((preCount) => preCount + 1)}
        >
          {count}
        </button>
      </div>
      <div className="flex flex-row">
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => setCount((preCount) => preCount + 1)}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => setCount((preCount) => preCount + 1)}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => setCount((preCount) => preCount + 1)}
        >
          {count}
        </button>
      </div>
    </div>
  );
};

export default Board;
