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
    console.log("z",changed);
    console.log("z1",id)
    const newcopyCart={...copyCart,[id]:changed}
    setcopyCart(newcopyCart);
    console.log('nyi wali check ke liye',newcopyCart)
    }

function handleUpdate(){
    setLoading(true);
    updatecart(copyCart)
}


    return (<>
    <p>dukhra h kya</p>
    <CartList updatecart={updatecart} CartItems={CartItems} list={list} setlist={setlist} setLoading={setLoading} handleChange={handleChange} copyCart={copyCart}/>
    <Input placeholder="Coupon Code"/>
<Button className="rounded-md bg-tomato text-white px-4 font-black">APPLY COUPON</Button>
<Button onClick={handleUpdate} className="rounded-md bg-tomato text-white px-4 font-black">UPDATE CART</Button>
<CartTotal />
</>)
}
export default Cart;