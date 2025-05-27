import { useState } from "react";

export default function Click() {
  const [click, setClick] = useState(false);

  const handleClicked = () => {
    setClick((pre) => !pre);
  };
  return (
    <>
      <div className="flex justify-center items-center mt-16">
        <div
          className="w-24 h-24 bg-slate-500 rounded  "
          onClick={handleClicked}
        ></div>
        <h4 className="text-xl font-semibold text-gray-800">
          Response:{" "}
          {click && <h5 className="text-lg text-blue-600 mt-2">Clicked</h5>}
        </h4>
      </div>
    </>
  );
}
