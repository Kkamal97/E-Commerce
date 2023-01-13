import React from "react";
import kamalphoto from "./kamal.jpg" ;
function AboutUs(){
return (
<>
<h2 className="text-4xl">About Us</h2>
<h3>meet our creative team</h3>
<div className="flex">
    <img src={kamalphoto}/>
    <img src={kamalphoto}/>
</div>
</>
)
 
}

export default AboutUs;