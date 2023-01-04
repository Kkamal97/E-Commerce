import React,{useEffect} from 'react';
import AllData from "./AllData";
import TopNavbar from "./TopNavbar";
import {useState} from "react";

function App({productList}) {

// const [totalcount,settotalcount]=useState(0);
 const oldcart=localStorage.getItem("my-cart");

  const tt= oldcart || "[]";
  
    const oldcartobj=JSON.parse(tt);
  
  const[cart,setcart]=useState(oldcartobj);

  
function handleAddToCart(productId,count){
   // settotalcount(totalcount+count);
const oldcount=cart[productId] || 0;
  const newcart = {...cart,[productId]:oldcount + count};
  const cartsave=JSON.stringify(newcart);
  localStorage.setItem("my-cart",cartsave);
 setcart(newcart);


  
 
  
  // const newcart={...cart};
  // newcart[productId]=oldcount+ count;
  // setcart(cart); 
}  
  

let totalcount;
  
  if (Object.keys(cart).length>0){
 totalcount= Object.keys(cart).reduce(function(previous,current){
return( 
  
  previous + cart[current]);
 },0);
  }
else {
 totalcount=0;
}
  
  
  return (<div className="bg-backcolor flex flex-col ">
    
     <TopNavbar counter={totalcount}/>
   
<AllData  className="grow" onAddtoCart={handleAddToCart} cartvalues={cart} />
   
   
   
    
  </div>
  );
}

export default App;