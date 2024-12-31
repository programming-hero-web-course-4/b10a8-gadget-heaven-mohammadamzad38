import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='space-y-10 mt-44'>
            <h1 className='text-7xl font-bold'>4<span className='text-red-300'>0</span>4....</h1>
            <p className='text-5xl font-bold text-red-200'>Page not Found !</p>
            <Link><button className='btn  mt-16'>Go Home</button></Link>
        </div>
    );
};

export default Error;