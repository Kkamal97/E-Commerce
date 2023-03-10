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
    
        if(loading){
            return( <Loading />)        }
                

console.log("ye h final",products)

    return(<div>
<p>ye dikh gya mtlb okay h</p>
    </div>
    )}
    export default Cart ;