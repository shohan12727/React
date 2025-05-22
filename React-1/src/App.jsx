import { useState } from "react";
import "./App.css";
import Shohan from "./Shohan";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  const handleReset = () => {
    setCount(0)
  }
  return (
    <>
      <h1>KING SHOHAN 👑</h1>
      <Shohan></Shohan>
      <h2>Counter Value </h2>
      <div>
        <button onClick={handleIncrement}>
          Increment
        </button>
        <button>
               Counter: {count}
        </button>
        <button onClick={handleDecrement}>
          Decrement
        </button>
      </div>
      <button onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default App;
