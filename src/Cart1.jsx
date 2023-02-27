import React,{useState} from "react";
import { useContext } from "react";
import {kamalcontext} from "./App.jsx";
import { getProductData } from "./api";
import { useEffect } from "react";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import { number } from "yup"; 

function Cart({updatecart}){
console.log("update wala phunch gya re",updatecart)
const cartvalues=useContext(kamalcontext);
const objkeys=Object.keys(cartvalues);
const [Karry,setKarry]=useState([]);

useEffect(function(){
    const koko=[...Karry];
for (let k=0;k<objkeys.length;k++){
const promis=getProductData(objkeys[k]);
promis.then(function(response){ 
return(<> 
   { Karry.push(response.data)};
   { setKarry([...Karry])};    
{ console.log("ye response",response.data) };
</>)
})
};
},[]);
function handleRemove(e){
    const removeId=e.target.getAttribute("productId")
    console.log("hta ise jaldi se",removeId);
    const newcartvalue={...cartvalues};
    console.log("isme kya h dekhte hai ",cartvalues)
    console.log("before",newcartvalue);
 delete newcartvalue[removeId];
 updatecart(newcartvalue)
 setKarry([]);
 console.log("after",newcartvalue);
}
    return (<div className=" ">
{Karry.map (function (item) {
    return(<div key={item.id} className="border-t-2 pt-2 pl-3" >
    
    <div  className="flex flex-row text-center">
        <div>
       <img src={item.thumbnail} className="w-20"/>
       <div className="flex flex-row">
       {/* <AiOutlinePlusCircle className="hover:text-orange-600" /> */}
       <input type="number" className="font-black border w-12" value={cartvalues[item.id]}/>
       {/* <AiOutlineMinusCircle className="hover:text-orange-600"/> */}
       </div>
       </div>
       <div flex flex-col>
       <p>{item.title}</p>
        
       <span className="flex flex-row"> 
       <del className=" text-gray-700 ">{((item.price)+((item.price)* (item.discountPercentage)/100)).toFixed(0)}</del>
        <p className="mx-1 text-black font-black">₹{item.price}</p> 
       <p className=" text-green-400 italic ">{item.discountPercentage} %Off</p> 
       </span>
        </div>
        </div>
        <div className="flex flex-row">
<button  className="hover:text-orange-600">save for later</button>
<button onClick={handleRemove} productId={item.id} className="hover:text-orange-600 ml-3">remove</button>
       </div>
        </div>)
})}
</div>)
}
export default Cart;