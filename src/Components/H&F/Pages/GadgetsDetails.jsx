import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetsDetails = () => {
    const {product_id} = useParams();
    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === product_id)
    const {
        product_title,
        product_image,
        price, specification,
        availability, rating        
    } = gadget;
    return (
        <div>
            <div>
                <img src={product_image} alt="" />
            </div>
            <div>
                <h1 className='text-3xl font-bold'>{product_title}</h1>
                <p className='font-bold'>Price: {price}</p>
            </div>
        </div>
    );
};

export default GadgetsDetails;