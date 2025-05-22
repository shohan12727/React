import { useState } from "react";

export default function Counter() {
  
   const [count,setCount] = useState(0)

   const handleIncrement = () => {
    if(count<50) {
      setCount(preC => preC+5)
    }
   }
   const handleDecrement = () => {
    if(count>-10){
      setCount(preC => preC-4)
    }
   }
   const handleReset = () => {
    setCount(0)
   }

  return (
    <>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button>Count: {count}</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
