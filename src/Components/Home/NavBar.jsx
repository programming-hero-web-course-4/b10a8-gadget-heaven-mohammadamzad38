import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLocation } from 'react-router-dom';


const NavBar = () => {
    const location = useLocation();
    const homeColor = location.pathname === "/" ? "bg-[#9538E2] text-white      " : "" 
    return (
        <div className={`flex items-center justify-between px-32 p-5 rounded-t-3xl ${homeColor}`}>
            <h1 className='text-xl font-bold '>My Gadget Haven</h1>
            <ul className='space-x-10 font-bold '>
                <NavLink className={({isActive}) => isActive ? "bg-gray-300 px-3 py-2 text-black rounded-lg" : "/"} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "bg-gray-300 px-3 py-2 rounded-lg" : "/statistic"} to='/statistic'>Statistics</NavLink>
                <NavLink className={({isActive}) => isActive ? "bg-gray-300 px-3 py-2 rounded-lg" : "/dashboard"} to='/dashboard'>Dashboard</NavLink>
            </ul>
            <div className='flex space-x-3 '>
               <button className='border rounded-full p-2'><TiShoppingCart/></button>
               <button className='border rounded-full p-2'><CiHeart/></button>
            </div>
        </div>
    );
};

export default NavBar;