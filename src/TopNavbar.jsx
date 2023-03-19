import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import {Link} from "react-router-dom";
import photuk from "./Notfoundimage.jpg";
import logo from "./log.jpg";
import OurInput from "./Input";
import { useContext } from "react";
import WithUser from "./WithUser";

function TopNavbar({counter,user,setUser}){
 
 function  handlelogOut(){
  setUser(undefined);
  localStorage.removeItem("token");
  //API call krke token invalid karna hai 
 }

  return(<div className="bg-white"  >
  <div className="flex max-w-3xl mx-auto md:max-w-4xl">      
    <img className="self-start w-20 " src={logo}/>
    <div className="w-40 h-4 self center">
      <OurInput  placeholder="search "/>
      </div>
      <div>
      <div className="">
       
        {        
       ( user
        &&
        <div className="flex flex-row justify-end text-xs text-blue-500">
        <p> Hello {user.full_name}</p>
        <span>
        <button onClick={handlelogOut} className="ml-1 underline"> Logout</button>
        </span>
        </div>)
        ||
        (user
          ||
          <div className="flex flex-row justify-end text-xs text-blue-500">
          <Link to="/account/Login">Please log in</Link>
          </div>
        )
        }
            
      </div>
         <div className="self-center mx-3 space-x-6 ">
<Link to="/" className="hover:text-orange-400">HOME</Link>
<Link to="/Products" className="hover:text-blue-400">ALL PRODUCTS</Link>
<Link to="/AboutUs" className="hover:text-orange-400">ABOUT</Link>
<Link to="/contactUs" className="hover:text-orange-400">CONTACT</Link>
<Link to="/account" className="hover:text-orange-400">ACCOUNT</Link>
  </div> 
  </div>  
    <Link to="/cart" >
    <div className="flex flex-col items-center ">
      
    <BsBag className="text-6xl text-orange-400 hover:bg-orange-600"/>
    {user &&
    <p className="font-black -mt-9">{counter}</p>
    }
    
        
      </div>
      </Link>
      </div>
  </div>
)  
}
export default WithUser(TopNavbar);