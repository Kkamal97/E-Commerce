import React from "react";
import {Link} from "react-router-dom";
import {Routes,Route} from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx"
import {useState,useEffect} from "react";
import {getProductList,getProductData} from "./api.jsx"
import FinalMap from "./FinalMap.jsx"

function Product({productList}){


 const [searched1,setsearched1]=useState("")
  let data=productList.filter(function (item){
return item.title.indexOf(searched1) != -1;
    
  })
  

  
  
  function handlechange(event){
        return (setsearched1(event.target.value))
      }
  
 const [sort,setsort]=useState("default")
  function handlesortchange (e){
    setsort(e.target.value);
      }

  if(sort=="lowtohigh"){
    data.sort(function(x,y){
      return(x.price-y.price)
    })
  }
  if(sort=="hightolow"){
    data.sort(function(x,y){
      return(y.price-x.price)
    })
  }
  if(sort=="atoz"){
    data.sort(function(x,y){
      return(x.title<y.title)?-1:1
    })
  }
  if(sort=="ztoa"){
   data.sort(function(x,y){
      return(x.title<y.title)?1:-1
    })
  }
    
return(<>
  <div className="flex flex-row">
  <input placeholder="search items" onChange={handlechange} className="border border-gray-900 mx-3 text-center rounded-md text-sm"/>
    <span className="grow"></span>
<select onChange={handlesortchange} className="border border-gray-400 rounded-md text-sm mx-10">
  <option value="default">sort by default</option>
<option value="lowtohigh">sort by price low to high</option>
  <option value="hightolow">sort by price high to low</option>
  <option value="atoz">sort by a to z</option>
  <option value="ztoa">sort by z to a</option>
</select>
 </div> 
  <div >
   <FinalMap newproductList={data}/>
    
    {console.log("jo map ko jari h list vo ye h",data )}
    <button className="border border-star text-star w-6 h-6 text-xl mx-1">1</button>
    <button className="border border-star text-star w-6 h-6 text-xl mx-1">2</button>
</div>
 

</>)
  
}




export default Product;