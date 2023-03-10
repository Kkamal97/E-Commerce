import React from "react";
import axios from "axios";
import {getProductData} from "./api.jsx";
import {useState,useEffect} from "react";
import {useParams,Link} from "react-router-dom";
import ProductDetail from "./ProductDetail";
import {ImArrowLeft,ImArrowRight} from "react-icons/im";
import Loading from "./Loading.jsx";
function SingleData({onAddtoCart}){  
const [productData,setproductData]=useState();
const [imgURLs, setimgURLs]=useState(1) 
const [loading,setloading]=useState(true);
const parula=useParams();
  const id=+(parula).xyz;
  useEffect(function(){
 const p=getProductData(id);
  p.then(function(response){
    return(setproductData(response.data))
      })
  Promise.all(p).then(function(){
    setloading(false)
  })
  .catch (function (){
const kk=35;
  return(<p>abhi to loading hora h re</p>)
});
       },[id])
       
  return (<div className="flex flex-col">
    <ProductDetail productData={productData} id={id} onAddtoCart={onAddtoCart} setimgURLs={setimgURLs} imgURLs={imgURLs}/>
<span className="grow"></span>  
    <div className="flex justify-between text-purple-900">
      <div>
      {id>0 &&
      <Link to={"/ProductDetail/"+(id-1)} className="flex items-center justify-start mx-2">
        {/* {setimgURLs(1)} */}
  <ImArrowLeft className="mx-2 text-4xl"/>previous
  </Link>}
        </div>
      <div>
      {id<100 &&
  <Link to={"/ProductDetail/"+(id+1)} className="flex items-center justify-start mx-2">
     {/* {setimgURLs(1)} */}
    next
  <ImArrowRight className="mx-2 text-4xl"/>
  </Link>}
        </div>
</div>    
  </div>)
  }
export default SingleData;