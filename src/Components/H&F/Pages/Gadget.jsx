import React from "react";

const Gadget = ({ gadget }) => {
  const { product_image, product_title, price } = gadget;
  return (
    <div className="flex flex-col items-center p-4 rounded-xl bg-white">
      <img
        class="w-82 h-60 object-cover p-4 rounded-3xl"
        src={product_image}
      />
      <div className="text-start space-y-3">
        <p className="text-xl font-bold ">{product_title}</p>
        <p>Price: {price}K</p>
        <button className="btn">View Details</button>
      </div>
    </div>
  );
};

export default Gadget;
