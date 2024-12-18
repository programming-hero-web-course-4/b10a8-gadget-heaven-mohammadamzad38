import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const GadgetsDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const gadget = data.find((gadget) => gadget.product_id === product_id);
  const {
    product_title,
    product_image,
    price,
    specification,
    availability,
    rating,
    description,
  } = gadget;
  return (
    <div className="flex justify-start gap-10 text-start items-start bg-white m-16 p-10 rounded-3xl ">
      <div>
        <img
          className="w-[500px] object-cover rounded-2xl"
          src={product_image}
          alt=""
        />
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">{product_title}</h1>
        <p className="font-bold">Price: {price}</p>
        <div className="text-center">
          <h1 className="text-green-500 bg-green-100 h-7 w-24 border rounded-3xl">
            {availability ? "In-Stock" : "Stock-Out"}
          </h1>
        </div>
        <p>{description}</p>
        {/* <p>Specification: {specification}</p> */}
        <p className="font-bold">Ratings: {rating}</p>
        <div className="rating space-x-3">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-amber-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-amber-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-amber-600"
              />
                <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-amber-700"
              />
            </div>
      </div>
    </div>
  );
};

export default GadgetsDetails;
