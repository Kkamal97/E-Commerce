import React,{useEffect, useState} from "react";
import CartList from "./CartList";
import {kamalcontext} from "./App.jsx"
import { useContext } from "react";
import  Input from "./Input.jsx";
import Button from "./Button";
import CartTotal from "./CartTotal";
import {getProductData} from "./api.jsx"
import Loading from "./Loading";


function Cart({updatecart}){
const CartItems=useContext(kamalcontext);   
const id=Object.keys(CartItems)
const [list,setlist]=useState([]);
const [loading,setLoading]=useState(true);
const [copyCart,setcopyCart]=useState(CartItems);
useEffect(function(){
    const myPromise=id.map(function (items){
return (getProductData(items))

    } );

    Promise.all(myPromise).then(function (props){
        setlist(props) 
        setLoading(false)
    })
   
},[CartItems])

if(loading) {
    return (<Loading/>)
}



function handleChange(e){
    const changed=+e.target.value;
    const id=e.target.getAttribute('id');
        const newcopyCart={...copyCart,[id]:changed}
    setcopyCart(newcopyCart);
    
    }

function handleUpdate(){
    setLoading(true);
    updatecart(copyCart)
}


    return (<>
    <p>dukhra h kya</p>
    <CartList updatecart={updatecart} CartItems={CartItems} list={list} setlist={setlist} setLoading={setLoading} handleChange={handleChange} copyCart={copyCart}/>
    <Input placeholder="Coupon Code"/>
<Button className="px-4 font-black text-white rounded-md bg-tomato">APPLY COUPON</Button>
<Button onClick={handleUpdate} className="px-4 font-black text-white rounded-md bg-tomato">UPDATE CART</Button>
<CartTotal />
</>)
}
export default Cart;