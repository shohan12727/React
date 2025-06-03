import React, { useState } from "react";

const ImageGallary = () => {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80",
  ];

  const [image, setImage] = useState([]);
  const handleAddToCart = () => {
    setImage((prev) => [...prev, image]);
  };

  return (
    <div className="min-h-screen min-w-screen bg-orange-200 mx-auto">
      <h1 className="text-4xl text-center font-bold">Image Gallary</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto ">
        {images.map((url, index) => (
          <>
            <div>
              <img
                className="h-64 w-64  object-cover rounded-xl  border-amber-100 hover:scale-105  "
                src={url}
                key={index}
                alt="something going wrong........"
              />
              <button
                onClick={() => handleAddToCart()}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold mt-2 py-2 px-4 rounded"
              >
                Add
              </button>
            </div>
          </>
        ))}
      </div>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Added Images:</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {image.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="added"
              className="w-32 h-32 object-cover rounded"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImageGallary;
