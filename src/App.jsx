import React,{useEffect} from 'react';
import AllData from "./AllData";
import TopNavbar from "./TopNavbar";
import {useState} from "react";
import { useContext } from 'react';
import axios from "axios";
import Loading from './Loading';
export const kamalcontext=React.createContext();
export const jolo=React.createContext();
export const userData=React.createContext();

function App({productList}) {
  const oldcart=localStorage.getItem("my-cart");
  const tt= oldcart || "[]";  
    const oldcartobj=JSON.parse(tt);  

  const[cart,setcart]=useState(oldcartobj); 
  const [user,setUser]=useState(); 
  const [loading,setloading]=useState(true);
   const token=localStorage.getItem("token");

  

  useEffect(function (){
    if(token){
      const promise=axios.get("https://myeasykart.codeyogi.io/me",{
  headers:{
    Authorization:token,
  }
})
promise.then(function(response){
  console.log("user detail milega re",response);
  setUser(response.data);
   setloading(false);
}).catch(function(){
  console.log("invalid login")
})
}
else
   setloading(false);

  },[])

  if(loading){
    return(
      <Loading />
    )
  }
  console.log("logged in user is",user);
 
function handleAddToCart(productId,count){  
const oldcount=cart[productId] || 0;
  const newcart = {...cart,[productId]:oldcount + count};
  UpdateCart(newcart);
}  
function UpdateCart(Allnewcart){
  const cartsave=JSON.stringify(Allnewcart);
  localStorage.setItem("my-cart",cartsave);
 setcart(Allnewcart);
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
const cartvalues=cart; 
  return (<div className="flex flex-col bg-backcolor"> 
  {console.log("isko dekho",user)}
     <TopNavbar counter={totalcount} user={user} setUser={setUser}/>
     <userData.Provider value={user}>      
         <kamalcontext.Provider value={cartvalues}>          
<AllData className="grow" onAddtoCart={handleAddToCart} updatecart={UpdateCart} setUser={setUser} />
         </kamalcontext.Provider>       
     </userData.Provider> 
  </div>
  );
}export default App;