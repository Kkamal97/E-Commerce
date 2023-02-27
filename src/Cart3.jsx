import React,{useState} from "react";
import { useContext } from "react";
import {kamalcontext} from "./App.jsx";
import { getProductData } from "./api";
import { useEffect } from "react";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import { number } from "yup"; 
import Loading from "./Loading.jsx";
import Button from "./Button.jsx";
function Cart({updatecart}){
    const cartvalues=useContext(kamalcontext);
    const productIds=Object.keys(cartvalues);
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [localCart,setLocalcart]=useState(cartvalues);
    console.log("ye run hora h kya",localCart);
    useEffect (function(){
const myProductPromises=productIds.map(function(id){
return getProductData(id);
});
Promise.all(myProductPromises).then(function(products1){
    setProducts(products1);     
    setLoading(false);
});
    },
    [cartvalues]);
    function handleRemove(event){
        const productid =event.currentTarget.getAttribute("productid");
        console.log("product to be removed",productid);

        const newcartvalues={...cartvalues};
        console.log("before",newcartvalues);
        delete newcartvalues[productid];
        console.log("after",newcartvalues);
        updatecart(newcartvalues);
    }
    function handleChange(e){
 const newValue=+e.target.value;
 const newValueId=e.target.getAttribute('productid');
 console.log("new changed value is",newValue,"& id is ",newValueId)
 const newlocalcart={...localCart,[newValueId]:newValue};
 console.log("nya wala ye hai",newlocalcart);
 setLocalcart(newlocalcart);
 
    }
        if(loading){
            return( <Loading />)        }
                
function handleUpdate(){
    updatecart(localCart);
            }


    return(<div>
{products.map(function(p){
    return(
<div key={p.data.id} className="flex flex-row items-center p-2 my-3" >
<img src={p.data.thumbnail} className="w-40"/>
 {p.data.title}
 <input 
type="number"
className="w-12 p-1 mx-2 border border-gray-300 rounded-md"
value={localCart[p.data.id]}
onChange={handleChange}
productid={p.data.id}
/> 
<button productid={p.data.id} onClick={handleRemove}>
     remove
</button>
  </div>  )
})}
<input className="p-3 border border-green-700 rounded-md placeholder:text-xl placeholder:text-orange-800" 
  placeholder="coupon code"/>
<Button >Apply coupon</Button>
<Button onClick={handleUpdate} >Update Cart</Button>
    </div>
    )}
    export default Cart ;