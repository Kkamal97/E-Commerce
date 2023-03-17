import React from "react";
import lotusimage from "./lotus.jpg";
import {Link, Navigate} from "react-router-dom";
import { useContext } from "react";
import { userData } from "./App";
function HomePage(){

    const user=useContext(userData);
    if(!user){
        return(
          <Navigate to="/account/Login" />
        )
        }
    return(
        <div className="">
        
        <div>
        <img className="w-full" src={lotusimage}/>
        </div>
        <div className="text-center -my-80">
        <h3 className="text-4xl font-black text-gray-800">BEST QUALITY PRODUCTS</h3>
       
        <Link to="/Products" className="text-center underline">Shop now</Link>
        <div>
       <Link to="/Developer" className="text-xs text-center" >Are you a developer?</Link>
       </div>
               </div>
        </div>
    )
}

export default HomePage;