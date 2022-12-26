import React,{useEffect} from 'react';
import AllData from "./AllData";
import TopNavbar from "./TopNavbar";
import {useState} from "react";

function App({productList}) {

// const [totalcount,settotalcount]=useState(0);
  const[cart,setcart]=useState({});
function handleAddToCart(productId,count){
console.log("app js me add me jo add hua h vo ye h productid",productId,"count is",count);
  // settotalcount(totalcount+count);
const oldcount=cart[productId] || 0;
  const newcart = {...cart,[productId]:oldcount + count};
 setcart(newcart);
 
  
  // const newcart={...cart};
  // newcart[productId]=oldcount+ count;
  // setcart(cart); 
}  
 console.log("cart me ye sb h",cart)
  
 const totalcount= Object.keys(cart).reduce(function(previous,current){
return previous + cart[current];
 },0);
  return (<div className="bg-backcolor ">
    
     <TopNavbar counter={totalcount}/>
   
<AllData onAddtoCart={handleAddToCart} />
   
<TopNavbar counter={totalcount} />    
   
    
  </div>
  );
}

export default App;