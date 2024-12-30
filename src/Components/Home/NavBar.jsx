import React, { useEffect, useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLocation } from 'react-router-dom';
import { getStoreCartList } from '../H&F/localstore';


const NavBar = () => {
    const location = useLocation();
    const homeColor = location.pathname === "/" ? "bg-[#9538E2] text-white" : "" ;
    const [cartLength, setCartLength] = useState();
    useEffect(() => {
        const storeLength = getStoreCartList();
        setCartLength(storeLength.length);
    }, [localStorage]);
    // const handCartLength = () =>{

    // }
    return (
        <div className={`flex items-center gap-80 sticky justify-between px-32 p-5 rounded-t-3xl ${homeColor}`}>
            <h1 className='text-xl font-bold '>My Gadget Haven</h1>
            <ul className='space-x-10 font-bold '>
                <NavLink className={({isActive}) => isActive ? "bg-gray-300 px-3 py-2 text-black rounded-lg" : "/"} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "bg-gray-300 px-3 py-2 rounded-lg" : "/statistic"} to='/statistic'>Statistics</NavLink>
                <NavLink className={({isActive}) => isActive ? "bg-gray-300 px-3 py-2 rounded-lg" : "/dashboard"} to='/dashboard'>Dashboard</NavLink>
            </ul>
            <div className='flex space-x-3 '>
               <button className='border-black bg-white relative rounded-full p-2 text-black'><TiShoppingCart/><span className='absolute -top-2 -left-3 text-white font-bold w-5 rounded-full  bg-red-500'>{cartLength}</span></button>
               <button className='border rounded-full p-2 text-black bg-white'><CiHeart/></button>
            </div>
        </div>
    );
};

export default NavBar;