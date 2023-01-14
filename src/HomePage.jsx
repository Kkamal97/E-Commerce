import React from "react";
import lotusimage from "./lotus.jpg";
import {Link} from "react-router-dom";
function HomePage(){
    return(
        <div className="">
        
        <div>
        <img className="w-full" src={lotusimage}/>
        </div>
        <div className="text-center -my-80">
        <h3 className="text-4xl font-black text-gray-800">BEST QUALITY PRODUCTS</h3>
       
        <Link to="/Products" className="text-center underline">Shop now</Link>
       
               </div>
        </div>
    )
}

export default HomePage;