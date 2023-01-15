import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import {getProductList,getProductData} from "./api.jsx";
import Products from "./Products";
import {TbFidgetSpinner} from 'react-icons/tb';
function AllData({onAddtoCart,cartvalues}){
  
  const [productList,setproductList]=useState([]);

useEffect(function(){
  const xyz=getProductList();
  xyz.then(function(response){
     setproductList(response.data.products);
    })
 
},[])

  if (!productList){
    return(<div className="bg-red-700"> 
      <p >nhi milra bhai</p>
    <TbFidgetSpinner className="text-6xl" />
    </div>)
           }

  return (<div className="place-content-center my-4">
 
    
    <Products productList={productList}  onAddtoCart={onAddtoCart}/>
  </div>)


    
   
}
 
export default AllData;