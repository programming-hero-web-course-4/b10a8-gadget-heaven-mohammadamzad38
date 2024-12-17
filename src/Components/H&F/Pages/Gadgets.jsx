import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Gadget from "./Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("./GadgetsData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data))
      .catch((err) => console.error("Error fatching data", err));
  }, []);

  return (
    <div className="flex gap-10 ">
        <div className="flex flex-col gap-5 bg-white p-10 rounded-xl max-h-[600px]">
            <button className="btn">All Product</button>
            <button className="btn">Laptops</button>
            <button className="btn">Phones</button>
            <button className="btn">Accessories</button>
            <button className="btn">Smart Watches</button>
            <button className="btn">MacBook</button>
            <button className="btn">Iphone</button>
        </div>
      <div className="grid grid-cols-3 gap-6 mb-[100px] ro">
        {
            gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
        }
      </div>
    </div>
  );
};

export default Gadgets;
