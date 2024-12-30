import { toast } from 'react-toastify';

const getStoreCartList = () =>{
    const cartstoredliststrng = localStorage.getItem("add-cart");
    if(cartstoredliststrng){
        const storedcart = JSON.parse(cartstoredliststrng);
        return storedcart;
    }
    else{
        return [];
    }
}

const stopDuplicateCart = (product_id) =>{
    const storedcart = getStoreCartList();
    if(storedcart.includes(product_id)){
        toast ('Product already Added !')
    }
    else{
        storedcart.push(product_id)
    const cartstoredliststrng = JSON.stringify(storedcart)
    localStorage.setItem("add-cart", cartstoredliststrng)
    toast ('Product added')
    }
}


export {getStoreCartList , stopDuplicateCart}