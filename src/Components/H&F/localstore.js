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

const getStoreWishList = () =>{
    const storedWishListSrrng = localStorage.getItem("addToWish")

    if(storedWishListSrrng){
        const wishList = JSON.parse(storedWishListSrrng);
        return wishList;
    }
    else{
        return [];
    }
}

const stopDuplicateWishList = (product_id) =>{
    const storedWish = getStoreWishList();

    if(storedWish.includes(product_id)){
        toast ("Already Added (Wish-List)! ")
    }
    else{
        storedWish.push(product_id);
        const storedWishStrng = JSON.stringify(storedWish);
        localStorage.setItem('addToWish', storedWishStrng)
        toast ('Wish List added')
    }
}
export {getStoreCartList , stopDuplicateCart, getStoreWishList, stopDuplicateWishList}