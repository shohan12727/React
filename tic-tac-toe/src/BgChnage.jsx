import React, { useState } from "react";

const BgChnage = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("gray");
  return (
    <div className="flex flex-col items-center justify-center mt-3 ">
      <div className="flex flex-row">
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => {
            setCount((preCount) => preCount + 1);
            setColor("blue");
          }}
          style={{ backgroundColor: color }}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => {
            setCount((preCount) => preCount + 1);
            setColor('#F08080');
          }}
          style={{ backgroundColor: color }}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => {
            setCount((preCount) => preCount + 1);
            setColor("#FA8072");
          }}
          style={{ backgroundColor: color }}
        >
          {count}
        </button>
      </div>
      <div className="flex flex-row">
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => {
            setCount((preCount) => preCount + 1);
            setColor("#DC143C");
          }}
          style={{ backgroundColor: color }}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => {
            setCount((preCount) => preCount + 1);
            setColor("#8B0000");
          }}
          style={{ backgroundColor: color }}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => {
            setCount((preCount) => preCount + 1);
            setColor("blue");
          }}
          style={{ backgroundColor: color }}
        >
          {count}
        </button>
      </div>
      <div className="flex flex-row">
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => {
            setCount((preCount) => preCount + 1);
            setColor("blue");
          }}
          style={{ backgroundColor: color }}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => {
            setCount((preCount) => preCount + 1);
            setColor("blue");
          }}
          style={{ backgroundColor: color }}
        >
          {count}
        </button>
        <button
          className="w-24 h-24 bg-slate-100 transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-md shadow-md text-blue font-semibold flex items-center justify-center"
          onClick={() => {
            setCount((preCount) => preCount + 1);
            setColor("blue");
          }}
          style={{ backgroundColor: color }}
        >
          {count}
        </button>
      </div>
    </div>
  );
};

export default BgChnage;
