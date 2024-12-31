import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreCartList, getStoreWishList } from "../localstore";
import { FaSort } from "react-icons/fa";

const Dashboard = () => {
  const [cartlist, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allGadgets = useLoaderData();

  useEffect(() => {
    const storedCart = getStoreCartList();
    const gadgetCart = allGadgets.filter((gadget) =>
      storedCart.includes(gadget.product_id)
    );
    setCartList(gadgetCart);
  }, []);

  console.log('hhhhhhhhhhhhhhhhll', cartlist)
  useEffect(() => {
    const storedWish = getStoreWishList();
    const wishCart = allGadgets.filter((wishGadget) =>
      storedWish.includes(wishGadget.product_id)
    );
    setWishList(wishCart);
  }, []);

  console.log('lllll', wishList)
  const handleSort = () => {
    const sortedList = [...cartlist].sort((a, b) => a.price - b.price);
    setCartList(sortedList);
  };

  const totalPrice = cartlist.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-[#9538E2] text-white">
      <h1 className="text-2xl font-bold text-center pb-3 pt-10">Dashboard</h1>
      <p className="pb-6 text-center">
        Explore the latest gadgets that will take your experience to <br /> the
        next level. From smart devices to the coolest accessories, we have it
        all!
      </p>

      <Tabs>
        <TabList className="flex gap-4 justify-center pb-3 items-center">
          <Tab className="font-bold py-2 px-6 border rounded-lg">Cart</Tab>
          <Tab className="font-bold py-2 px-6 border rounded-lg">Wishlist</Tab>
        </TabList>

        <TabPanel className="bg-white">
          <div className="bg-gray-100 py-10 ">
            <div className="text-black mx-96 items-center flex justify-between">
              <p className="text-2xl font-bold ">Cart</p>
              <div className="flex items-center gap-12">
                <p className="text-xl font-bold">Total Cost: {totalPrice}</p>
                <Link className="">
                  <button
                    onClick={handleSort}
                    className="btn border-[#9538E2] flex items-center gap-2"
                  >
                    <span>Sort by Price </span>
                    <FaSort />
                  </button>
                </Link>
                <Link>
                  <button className="btn hover:bg-[#9538E2] rounded-xl"> Purchase</button>
                </Link>
              </div>
            </div>
          </div>
          {cartlist.map((gadget) => (
            <section className="bg-gray-100 p-6">
              <div className="text-black flex gap-10 text-start items-center mx-96 bg-white p-8 rounded-xl ">
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




        <TabPanel className="bg-gray-100 ">
          <h2 className="text-2xl mx-96 text-black text-start font-bold py-10">WishList</h2>
       <section className=" flex flex-col gap-10 rounded-lg">
       <div className="flex flex-col gap-10 pb-16">
       {
            wishList.map((wish) => <div className="text-black bg-white mx-96 p-8 rounded-xl flex gap-10">
              <div className="flex items-center gap-10">
                <img className="object-cover w-52 rounded-2xl" src={wish.product_image} alt="" />
                <div className="text-start space-y-3">
                  <p className="text-xl font-bold">{wish.product_title}</p>
                  <p>{wish.description}</p>
                  <p className="font-bold">Price: {wish.price}</p>
                </div>
              </div>
            </div>)
          }
       </div>
       </section>

        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
