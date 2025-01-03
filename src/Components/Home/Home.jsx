import React from "react";
import image from "../../assets/banner.jpg";
import Gadgets from "../H&F/Pages/Gadgets";

const Home = () => {
  return (
    <section className="mx-16">
      <div className="bg-[#9538E2] text-center text-white space-y-10 pb-[400px] rounded-b-2xl">
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
      <div className="mt-96 m-24 text-center flex flex-col justify-center items-center">

        <h1 className="text-4xl font-bold mb-10">Explore Cutting-Edge Gadgets</h1>
        <Gadgets></Gadgets>
      </div>
      
      <div className="mt-[100px]"></div>
    </section>
  );
};

export default Home;
