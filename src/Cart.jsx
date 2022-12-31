import React,{useEffect,useState} from "react";
import {BiHomeHeart } from "react-icons/bi"
import {Link} from "react-router-dom";
import {getProductData} from "./api.jsx";
function Cart({cartvalues}){

 const cartkey= Object.keys(cartvalues);

   
const cartarray=[]
  for(let i=0; i<cartkey.length; i++){


    
    console.log("values ye h re", cartkey[i]);
   const gg4=cartkey[i];
   const  gg5=cartvalues[cartkey[i]];
cartarray.push({id:+cartkey[i],qty:cartvalues[cartkey[i]]})
    
  }

  
// for (let i=0;i<cartkey.length;i++){
// const promis=getProductData(id);
  // promis.then(function(response){
    // return ("abc")
  // })

  
// }


  




  
  const [cartlist,setcartlist]=useState({});
return(<div className="">
<Link to="/">
<BiHomeHeart className="text-3xl hover:text-gray-400" /> 
  </Link>
  <div className="w-full flex flex-col justify-around" >
    <div className="flex flex-row justify-around font-black" >
   
    <h3>illustrations </h3>
<h3>Product</h3>
<h3>Price</h3>
<h3>Quantity</h3>
<h3>subtotal</h3>
      </div>
    
    <div className="flex flex-col">
    {cartarray.map(function(item){
      return(<div className="flex flex-row justify-around" >
      
        {useEffect(function(){ 
      let  id=item.id;
        console.log("id ye h",id)
   const promis = getProductData(id);
   promis.then(function(response){
  return(
    setcartlist(response.data)
  )
  })
  },[])
        }
        {console.log("cart ye h",cartlist)}

        
    <h3>{item.title}</h3>
<h3>{  }</h3>
<h3>{item.qty}</h3>
<h3>kitne</h3>
<h3>kul rupye</h3>
      </div>)
       })}
      </div>
</div>

    
</div>
  
)
  
}


export default Cart;