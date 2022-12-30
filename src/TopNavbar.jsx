import React from "react";
import { BsBag } from "react-icons/bs";
import {Link} from "react-router-dom";

function TopNavbar({counter}){
return(<div className="bg-white"  >
  <div className="flex max-w-3xl md:max-w-4xl   mx-auto">
     <img className="w-20 self-start   " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzygE5b6mHX_-NHLPR710sMAXreiByGlg9cg&usqp=CAU"/>
   
      <span className="grow"></span>
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