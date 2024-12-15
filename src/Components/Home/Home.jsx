import React from "react";
import image from "../../assets/banner.jpg";

const Home = () => {
  return (
    <section>
      <div className="bg-[#9538E2] text-white space-y-10 pb-[400px] rounded-b-2xl">
        <h1 className="text-5xl font-bold pt-5 leading-relaxed">
          Upgrade Your Tech Accessorize <br /> with Gadget Heaven Accessories
        </h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart <br /> devices to the coolest accessories, we have
          it all!
        </p>
        <button className="btn rounded-3xl text-[#9538E2] font-bold">
          Shop Now
        </button>
      </div>

      <div className="flex justify-center -m-[300px]">
        <div className="w-[1062px] rounded-2xl p-4 bg-[#ffffff3f] border-2">
          <img className=" rounded-2xl bg-white-200" src={image} alt="" />
        </div>
      </div>
      
      <div className="mt-[300px]"></div>
    </section>
  );
};

export default Home;
