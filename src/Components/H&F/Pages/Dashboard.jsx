import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreCartList } from "../localstore";


const Dashboard = () => {
 
  const [cartlist, setCartList] = useState([]);
  const allGadgets = useLoaderData();

  console.log('aaaaaa', allGadgets)
  useEffect(() => {
    const storedCart = getStoreCartList();
    const gadgetCart = allGadgets.filter((gadget) =>
      storedCart.includes(gadget.product_id)
    );
    setCartList(gadgetCart);
  }, []);

  console.log("cartlist", cartlist);
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
          <h2 className="text-2xl text-black">{cartlist.length}</h2>
          {
            cartlist.map((gadget) => <div className="text-black">
              <img src={gadget.product_image} alt="" />
              <h1 className="text-black">{gadget.product_title}</h1>
              <p>{gadget.description}</p>
            </div>)
          }
        </TabPanel>

        <TabPanel className="bg-white ">
          <h2 className="text-2xl text-black">Product added in wishlisted</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
