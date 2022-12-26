import React from "react";
import {HiArrowLeft} from "react-icons/hi";
import {Routes,Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {ImArrowLeft,ImArrowRight} from "react-icons/im"
import DetailImages from "./DetailImages.jsx"
import {TbFidgetSpinner} from "react-icons/tb" ;
import {useState} from "react";
function ProductDetail({productData,onAddtoCart,id}){

 

  if (!productData){
    return (<div className="items-center text-9xl">
      <p >loading...</p>
           <TbFidgetSpinner className="text-spin-size animate-spin" />

    </div > )
  };

  const [count,setcount]=useState(1);

  function handleCount(e){

      setcount(+e.target.value)
   
  }
function handlecart(){
  onAddtoCart(id,count);
 }


  
  
return(<div className=" ">
  <Link to="/">
  <HiArrowLeft  className="text-2xl"/>
    
</Link>
  <div className="flex">
< DetailImages productData={productData}/>
    <div className="mx-6">
     <div >
  <h1 className="text-gray-400" >{productData.brand}</h1>
 
   <p>{productData.description}</p>
   <h1 className="font-black text-2xl">Rs {productData.price} </h1>
       <input value={count} type="number" onChange={handleCount} className="w-9 border border-gray-200" />
       <button onClick={handlecart} className="bg-tomato px-4 mx-2 border-tomato text-white border rounded-md " >add to cart</button>
       </div>
    <p className="mt-4" >{productData.title}</p>
    </div>
    </div>
 
    
    
  

   
  </div>)
}


export default ProductDetail;