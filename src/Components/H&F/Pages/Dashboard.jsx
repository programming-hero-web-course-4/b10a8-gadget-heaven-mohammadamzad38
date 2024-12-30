import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreCartList } from "../localstore";
import { FaSort } from "react-icons/fa";

const Dashboard = () => {

  const [cartlist, setCartList] = useState([]);
  const allGadgets = useLoaderData();

  useEffect(() => {
    const storedCart = getStoreCartList();
    const gadgetCart = allGadgets.filter((gadget) =>
      storedCart.includes(gadget.product_id)
    );
    setCartList(gadgetCart);
  }, []);

  const handleSort = () =>{
    const sortedList = [...cartlist].sort((a, b) => a.price - b.price)
    setCartList(sortedList)
  }

  const totalPrice = cartlist.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="bg-[#9538E2] text-white">
      <h1 className="text-2xl font-bold pb-3 pt-10">Dashboard</h1>
      <p className="pb-6">
        Explore the latest gadgets that will take your experience to <br /> the
        next level. From smart devices to the coolest accessories, we have it
        all!
      </p>

      <Tabs>
        <TabList className="flex gap-4 justify-center pb-3 items-center">
          <Tab className="font-bold py-2 px-6">Cart</Tab>
          <Tab className="font-bold py-2 px-6">Wishlist</Tab>
        </TabList>

        <TabPanel className="bg-white">
          <div className="bg-gray-100 pt-10 ">
            <div className="text-black mx-32 items-center flex justify-between">
              <p className="text-xl font-bold ">Cart</p>
              <div className="flex items-center gap-6">
                <p className="text-xl font-bold">
                  Total Cost: {totalPrice}
                </p>
                <Link className="">
                  <button onClick={handleSort} className="btn border-[#9538E2] flex items-center gap-2">
                    <span>Sort by Price </span>
                    <FaSort />
                  </button>
                </Link>
                <Link>
                  <button className="btn rounded-xl"> Purchase</button>
                </Link>
              </div>
            </div>
          </div>
          {cartlist.map((gadget) => (
            <section className="bg-gray-100 p-6">
              <div className="text-black flex gap-10 text-start items-center mx-32 bg-white p-8 rounded-xl ">
                <img
                  className="object-cover w-52 rounded-2xl"
                  src={gadget.product_image}
                  alt=""
                />
                <div className="space-y-2">
                  <h1 className="text-black text-xl font-bold">
                    {gadget.product_title}
                  </h1>
                  <p>{gadget.description}</p>
                  <p className="font-bold">Price: {gadget.price}</p>
                </div>
              </div>
            </section>
          ))}
        </TabPanel>

        <TabPanel className="bg-white ">
          <h2 className="text-2xl text-black">Product added in wishlisted</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
