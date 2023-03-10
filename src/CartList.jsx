import React from "react";
import CartRow from "./CartRow";
import Input from "./Input.jsx";
import Button from "./Button";
function CartList({CartItems,list,setlist,updatecart,setLoading,handleChange,copyCart}){
   
return(<>

<div className="flex flex-row space-x-5 px-13 pt-12 font-black">
   
<h1 className="grow pl-25">Product</h1>
<h1 className="w-16">Price</h1>
<h1 className="w-16">Quantity</h1>
<h1 className="w-16">Subtotal</h1>


</div>
<CartRow  CartItems={CartItems} list={list} setlist={setlist} updatecart={updatecart} 
setLoading={setLoading} handleChange={handleChange} copyCart={copyCart}/>

</>)
    
}
export default CartList;