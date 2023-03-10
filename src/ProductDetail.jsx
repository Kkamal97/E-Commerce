import React,{useState} from "react";
import {HiArrowLeft} from "react-icons/hi";
import {Routes,Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {ImArrowLeft,ImArrowRight} from "react-icons/im"
import DetailImages from "./DetailImages.jsx"
import {TbFidgetSpinner} from "react-icons/tb" ;
import Button from "./Button";
import Loading from "./Loading.jsx";
function ProductDetail({productData,onAddtoCart,id}){
  

  if (!productData){
    return (<div className="items-center text-9xl">
     
 <Loading />
    </div > )
  };
  const [count,setcount]=useState(1);
  const [imgURLs, setimgURLs]=useState(1);
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
  <div className="flex h-96">
< DetailImages productData={productData} setimgURLs={setimgURLs} imgURLs={imgURLs}/>
    <div className="mx-6">
     <div >
  <h1 className="text-gray-400" >{productData.brand}</h1>
 <h2 className="text-gray-900 " >{productData.title}</h2>
      <h1 className="font-black text-2xl">Rs {productData.price} </h1>
       <p>{productData.description}</p>
       <input value={count} type="number" onChange={handleCount} className="border border-gray-200 w-8" />
       <Button onClick={handlecart}  >add to cart</Button>
       </div>
      <div className="h-px bg-gray-300 my-3 flex flex-row"></div>
         <div className=" flex flex-row">                                                   
      <p className="">category: </p>
    <Link to="" className="text-tomato underline decoration-solid hover:no-underline" >{productData.category}</Link>
           </div> 
    </div>
    </div>
  </div>)
}
export default ProductDetail;
 
