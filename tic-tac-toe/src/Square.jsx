import { useState } from "react";

const Square = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div
          className="h-25 w-25  border border-amber-800 "
          onClick={handleClick}
        >
          {click && (
            <h2 className="text-7xl flex justify-center items-center"> X </h2>
          )}
        </div>
        <div
          className="h-25 w-25  border border-amber-800 "
          onClick={handleClick}
        >
          {click && (
            <h2 className="text-7xl flex justify-center items-center"> X </h2>
          )}
        </div>
        <div
          className="h-25 w-25  border border-amber-800 "
          onClick={handleClick}
        >
          {click && (
            <h2 className="text-7xl flex justify-center items-center"> X </h2>
          )}
        </div>
       
      </div>
      <div className="flex justify-center items-center mt-0">
        <div
          className="h-25 w-25  border border-amber-800 "
          onClick={handleClick}
        >
          {click && (
            <h2 className="text-7xl flex justify-center items-center"> X </h2>
          )}
        </div>
        <div
          className="h-25 w-25  border border-amber-800 "
          onClick={handleClick}
        >
          {click && (
            <h2 className="text-7xl flex justify-center items-center"> X </h2>
          )}
        </div>
        <div
          className="h-25 w-25  border border-amber-800 "
          onClick={handleClick}
        >
          {click && (
            <h2 className="text-7xl flex justify-center items-center"> X </h2>
          )}
        </div>
       
      </div>
      <div className="flex justify-center items-center mt-0">
        <div
          className="h-25 w-25  border border-amber-800 "
          onClick={handleClick}
        >
          {click && (
            <h2 className="text-7xl flex justify-center items-center"> X </h2>
          )}
        </div>
        <div
          className="h-25 w-25  border border-amber-800 "
          onClick={handleClick}
        >
          {click && (
            <h2 className="text-7xl flex justify-center items-center"> X </h2>
          )}
        </div>
        <div
          className="h-25 w-25  border border-amber-800 "
          onClick={handleClick}
        >
          {click && (
            <h2 className="text-7xl flex justify-center items-center"> X </h2>
          )}
        </div>
       
      </div>
      
      
    </>
  );
};
export default Square;
