import React, { useState } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const ProductCart = ({ title, price }) => {
    const [cartImages, setCartImages] = useState([]);

    const handleAddToImages = (image) => {
      setCartImages((prev) => [...prev, image]);
    };
  const imgArray = [img1, img2, img3];

  return (
    <div className="min-h-screen min-w-screen bg-green-200">
      <h1 className="text-3xl font-bold text-center m-16">{title}</h1>
      <section className="flex justify-center items-center   gap-2">
        {imgArray.map((item, index) => {
          console.log(item);
          return (
            <>
              <div className="flex flex-col">
                <img
                  src={item}
                  alt="loading"
                  
                  className="w-32 h-32 object-cover"
                />
                <p className="text-center text-2xl">{price}</p>
                <button 
                onClick={() => handleAddToImages(item)}
                 className="bg-blue-500 text-white px-2 py-1 mt-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </>
          );
        })}
      </section>
      <div className="mt-6">
  <h2 className="text-xl font-bold text-center">Cart</h2>
  <div className="flex justify-center gap-2 mt-2">
    {cartImages.map((img, i) => (
      <img key={i} src={img} alt="Cart item" className="w-16 h-16 object-cover" />
    ))}
  </div>
</div>

    </div>
  );
};

export default ProductCart;
