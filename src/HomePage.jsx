import React from "react";
import lotusimage from "./lotus.jpg"
function HomePage(){
    return(
        <div className="">
        <div className="">
        <h3 className="font-black">Best quality products</h3>
        <h2>We deliver everything at your doorstep</h2>
        <h1>i am not telling the css </h1>
        </div>
        <img className="max-w-4" src={lotusimage}/>
        </div>
    )
}

export default HomePage;