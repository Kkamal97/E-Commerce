import React from "react";
import { BsBag } from "react-icons/bs";
import {Link} from "react-router-dom";
import photuk from "./Notfoundimage.jpg";
import logo from "./log.jpg";
function TopNavbar({counter}){
return(<div className="bg-white"  >
  <div className="flex max-w-3xl md:max-w-4xl   mx-auto">
      
    <img className="w-20 self-start   " src={logo}/>
      
      <span className="grow"></span>
    <div className="space-x-6 self-center mx-3 ">
<Link to="/" className="hover:text-orange-400">HOME</Link>
<Link to="/" className="hover:text-orange-400">ALL PRODUCTS</Link>
<Link to="/" className="hover:text-orange-400">ABOUT</Link>
<Link to="/" className="hover:text-orange-400">CONTACT</Link>
<Link to="/my-account" className="hover:text-orange-400">ACCOUNT</Link>
  </div>   
    <Link to="/cart" >
    <div className=" flex flex-col items-center">
      
    <BsBag className="text-6xl text-orange-400  hover:bg-orange-600"/>
    <p className="-mt-9 font-black">{counter}</p>
        
      </div>
      </Link>
      </div>
  </div>
)
  
}


export default TopNavbar;