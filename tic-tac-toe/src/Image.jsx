import Lion from "./assets/lion.jpg";
const Image = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-4xl  m-10">Lion's image</h1>
        <img
          className="w-64 h-auto rounded-4xl mx-auto"
          src={Lion}
          alt="lion"
        />
        <ul>
          <li className="text-center text-4xl text-red-500 font-semibold leading-relaxed shadow-md rounded-lg">
            Length: Measurable distance between points or infinite if extended
          </li>
          <li className="text-center text-4xl text-red-500 font-semibold leading-relaxed shadow-md rounded-lg">
            Straightness: No curves; perfectly straight.
          </li>
          <li className="text-center text-4xl text-red-500 font-semibold leading-relaxed shadow-md rounded-lg">
            Direction: Extends in a specific orientation or angle.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Image;
