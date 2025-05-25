import React, { useState } from "react";

const Value = () => {
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);

  return (
    <div>
      <h4 className="text-6xl mt-10 mb-5">
        Here i will render a value (X): {value}{" "}
      </h4>
      <h4 className="text-6xl mt-10 mb-5">
        Here i will render a value (O): {value2}{" "}
      </h4>
      <button
        className="bg-slate-600 m-10 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300"
        onClick={() => setValue(value === "X" ? null : "X")}
      >
        Enter X
      </button>
      <button
        className="bg-slate-600 m-10 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300"
        onClick={() => setValue2(value2==='O'? null : 'O')}
      >
        Enter O
      </button>
    </div>
  );
};

export default Value;
