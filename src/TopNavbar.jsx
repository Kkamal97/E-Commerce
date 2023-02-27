import React from "react";
import { BsBag } from "react-icons/bs";
import {Link} from "react-router-dom";
import photuk from "./Notfoundimage.jpg";
import logo from "./log.jpg";
import OurInput from "./Input";

function TopNavbar({counter}){
return(<div className="bg-white"  >
  <div className="flex max-w-3xl mx-auto md:max-w-4xl">
      
    <img className="self-start w-20 " src={logo}/>
    <div className="self center h-4 w-40">
      <OurInput  placeholder="search "/>
      </div>
      <span className="grow"></span>
    <div className="self-center mx-3 space-x-6 ">
<Link to="/" className="hover:text-orange-400">HOME</Link>
<Link to="/Products" className="hover:text-blue-400">ALL PRODUCTS</Link>
<Link to="/AboutUs" className="hover:text-orange-400">ABOUT</Link>
<Link to="/contactUs" className="hover:text-orange-400">CONTACT</Link>
<Link to="/account" className="hover:text-orange-400">ACCOUNT</Link>
  </div>   
    <Link to="/cart" >
    <div className="flex flex-col items-center ">
      
    <BsBag className="text-6xl text-orange-400 hover:bg-orange-600"/>
    <p className="font-black -mt-9">{counter}</p>
        
      </div>
      </Link>
      </div>
  </div>
)
  
}


export default TopNavbar;