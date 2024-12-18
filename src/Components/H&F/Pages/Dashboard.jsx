import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Dashboard = () => {
  return (
    <div className="bg-[#9538E2] text-white">
        <h1 className="text-2xl font-bold pb-3 pt-10">Dashboard</h1>
        <p className="pb-6">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
      <Tabs>
        <TabList className="flex gap-4 justify-center pb-3 items-center">
          <Tab className="font-bold py-2 px-6">Cart</Tab>
          <Tab className="font-bold py-2 px-6">Wishlist</Tab>
        </TabList>

        <TabPanel className="bg-white">
          <h2 className="text-2xl text-black">Product hasbeeen carted</h2>
        </TabPanel>
        <TabPanel className="bg-white ">
          <h2 className="text-2xl text-black">Product added in wishlisted</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
