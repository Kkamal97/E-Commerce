import React from "react";
import { BsBag } from "react-icons/bs";

function TopNavbar({counter}){
return(
  <div className="flex bg-backwhite">
     <img className="w-20 self-start mx-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzygE5b6mHX_-NHLPR710sMAXreiByGlg9cg&usqp=CAU"/>
   
      <span className="grow"></span>
    <div className=" flex flex-col items-center">
    <BsBag className="text-6xl mx-10 hover:bg-orange-600"/>
    <p className="-mt-9 font-black">{counter}</p>
      </div>
      </div>
)
  
}


export default TopNavbar;