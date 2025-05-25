import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <>
      <h1>King Shohan</h1>
      <div
        className="min-h-screen flex flex-col items-center justify-center transition-all duration-50 "
        style={{ background: color }}
      >
        <h1 className="text-3xl font-bold mb-6">Background Changer</h1>
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
            className="px-4 py-2 rounded-full border"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
            className="px-4 py-2 rounded-full border"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
            className="px-4 py-2 rounded-full border"
          >
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
