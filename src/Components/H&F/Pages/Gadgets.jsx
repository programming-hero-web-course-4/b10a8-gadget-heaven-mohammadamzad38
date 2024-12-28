import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Gadget from "./Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("./GadgetsData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data))
      .catch((err) => console.error("Error yourrrrr fatching data", err));
  }, []);

  const filterdCategory = gadgets.filter((gadget) =>
    category === "All" ? true : gadget.category === category
  );
  return (
    <div className="flex gap-10 ">
      <div className="flex flex-col gap-5 bg-white p-10 rounded-xl max-h-[600px]">
        <button className="btn" onClick={() => setCategory("All")}>
          All Product{" "}
        </button>
        <button className="btn" onClick={() => setCategory("Laptop")}>
          Laptops
        </button>
        <button className="btn" onClick={() => setCategory("Phones")}>
          Phones
        </button>
        <button className="btn" onClick={() => setCategory("Accessories")}>
          Accessories
        </button>
        <button className="btn" onClick={() => setCategory("Smart Watch")}>
          Smart Watches
        </button>
        <button className="btn" onClick={() => setCategory("MacBook")}>
          MacBook
        </button>
        <button className="btn" onClick={() => setCategory("iPhone")}>
          Iphone
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-[100px] ro">
        {filterdCategory.map((gadget) => (
          <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
