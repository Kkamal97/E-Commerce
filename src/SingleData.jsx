import React from "react";
import axios from "axios";
import {getProductData} from "./api.jsx";
import {useState,useEffect} from "react";
import {useParams,Link} from "react-router-dom";
import ProductDetail from "./ProductDetail";
import {ImArrowLeft,ImArrowRight} from "react-icons/im"
function SingleData({onAddtoCart}){

 

    
const [productData,setproductData]=useState();
  const parula=useParams();
  const id=+(parula).xyz;

  useEffect(function(){
 const p=getProductData(id);
  p.then(function(response){
    return(setproductData(response.data))
    console.log("ek product ka data",response.data);
  }
       )},[id])
  return (<div className="flex flex-col">
    <ProductDetail productData={productData} id={id} onAddtoCart={onAddtoCart}/>

<span className="grow"></span>

    
    <div className="flex text-purple-900 justify-between">
      <div>
      {id>0 &&
      <Link to={"/ProductDetail/"+(id-1)} className="flex mx-2 justify-start items-center">
  <ImArrowLeft className="text-4xl mx-2"/>previous
  </Link>}
        </div>
      <div>
      {id<100 &&
  <Link to={"/ProductDetail/"+(id+1)} className="flex mx-2 justify-start items-center">
    next
  <ImArrowRight className="text-4xl mx-2"/>
  </Link>}
        </div>
</div>
    
  </div>
  )
}

export default SingleData;