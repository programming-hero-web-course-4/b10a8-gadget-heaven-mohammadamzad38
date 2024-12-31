import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const {product_id, product_image, product_title, price } = gadget;
  return (
    <div className="flex flex-col justify-center items-center rounded-xl bg-white">
      <div className="flex justify-center w-[350px] h-[250px]">
      <img
        className="w-[100%] object-fit p-4 rounded-3xl"
        src={product_image}
      />
      </div>
     <div className="text-start">
     <div className="text-start ml-12 pb-5 space-y-3">
        <p className="text-xl font-bold ">{product_title}</p>
        <p>Price: {price}K</p>
        <Link to={`/gadget-details/${product_id}`}><button className="btn mt-3 text-[#9538E2]">View Details</button></Link>
      </div>
     </div>
    </div>
  );
};

export default Gadget;
