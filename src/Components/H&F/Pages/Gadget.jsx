import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const {product_id, product_image, product_title, price } = gadget;
  return (
    <div className="flex flex-col items-center p-4 rounded-xl bg-white">
      <img
        className="w-82 h-60 object-cover p-4 rounded-3xl"
        src={product_image}
      />
      <div className="text-start space-y-3">
        <p className="text-xl font-bold ">{product_title}</p>
        <p>Price: {price}K</p>
        <Link to={`/gadget-details/${product_id}`}><button className="btn mt-3 text-[#9538E2]">View Details</button></Link>
      </div>
    </div>
  );
};

export default Gadget;
