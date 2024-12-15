import React from 'react';
import NavBar from '../Home/NavBar';
import Footer from '../Home/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;