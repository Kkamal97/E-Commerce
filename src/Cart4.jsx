import React,{useEffect, useState} from "react";
import CartList from "./CartList";
import {kamalcontext} from "./App.jsx"
import { useContext } from "react";
import  Input from "./Input.jsx";
import Button from "./Button";
import CartTotal from "./CartTotal";
import {getProductData} from "./api.jsx"
import Loading from "./Loading";
import { Navigate } from "react-router-dom";
import WithUser from "./WithUser";


function Cart({updatecart,user}){
    console.log("user check at cart",user);
const CartItems=useContext(kamalcontext);   
const id=Object.keys(CartItems)
const [list,setlist]=useState([]);
const [loading,setLoading]=useState(true);
const [copyCart,setcopyCart]=useState(CartItems);
if(!user){
    return(<Navigate to="/account/Login" />)
}

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
    return (<Loading/>)}
function handleChange(e){
    const changed=+e.target.value;
    const id=e.target.getAttribute('id');
        const newcopyCart={...copyCart,[id]:changed}
    setcopyCart(newcopyCart);    
    }
function handleUpdate(e){
    setLoading(true);
    updatecart(copyCart)
    e.currentTarget.disabled=true;
}

if (!user){
    <Navigate to="/account/Login" />
}
    return (<>
        <CartList updatecart={updatecart} CartItems={CartItems} list={list} setlist={setlist} setLoading={setLoading} handleChange={handleChange} copyCart={copyCart}/>
    <Input placeholder="Coupon Code"/>
<Button className="px-4 font-black text-white rounded-md bg-tomato">APPLY COUPON</Button>
<Button onClick={handleUpdate} className="px-4 font-black text-white rounded-md bg-tomato">UPDATE CART</Button>
<CartTotal />
</>)
}
export default WithUser(Cart) ;