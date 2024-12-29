import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { key } from "localforage";

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

  const customArray = Object.entries(specification).map(([key, value]) => ({key,value}));
  console.log('arrrrrrrrrrrr',customArray)
  return (
    <section>
      <div className="bg-[#9538E2] pt-10 pb-[250px] space-y-4 text-white">
        <h1 className="text-2xl font-bold">Product Details</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="flex justify-center mb-64">
        <div className="flex justify-start gap-12 text-start items-start bg-white -m-[170px] p-10 rounded-3xl ">
          <div>
            <img
              className="w-[500px] object-cover rounded-2xl"
              src={product_image}
              alt=""
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{product_title}</h1>
            <p className="font-bold">Price: {price}</p>
            <div className="text-center">
              <h1 className="text-green-500 bg-green-100 h-7 w-24 border rounded-3xl">
                {availability ? "In-Stock" : "Stock-Out"}
              </h1>
            </div>
            <p>{description}</p>
            <p className="font-bold">Specification:</p>
            {
              customArray.map((spec) => <p className="ml-10">{spec.key}: {spec.value}</p>)
            }
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
            <div className="flex gap-4">
              <button className="flex text-xs items-center gap-2 btn rounded-3xl">
                Add To Card <MdOutlineShoppingCart />
              </button>
              <button className="btn rounded-full bg-white">
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GadgetsDetails;
