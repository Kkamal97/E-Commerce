import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import {getProductList,getProductData} from "./api.jsx";
import Products from "./Products";
import {TbFidgetSpinner} from 'react-icons/tb';
import { Navigate } from "react-router-dom";
function AllData({onAddtoCart,cartvalues,updatecart,setUserName}){
   
//   const [productList,setproductList]=useState([]);
//   const [loading,setLoading]=useState(true);

// useEffect(function(){
//   const xyz=getProductList();
//   xyz.then(function(response){
//      setproductList(response.data.products);
//      setLoading(false);
//     })
 
// },[])

//   if (!productList){
//     return(<div className="bg-red-700"> 
//       <p >nhi milra bhai</p>
//     <TbFidgetSpinner className="text-6xl" />
//     </div>)
//            }




  return (<div className="my-4 place-content-center">
 
    
    <Products   onAddtoCart={onAddtoCart} updatecart={updatecart} setUserName={setUserName}/>
  </div>)


    
   
}
 
export default AllData;