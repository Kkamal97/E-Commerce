import React from "react";
function OurInput({...rest}){
    return (
 <input 
{...rest}
 className="border border-red-300   rounded-md "
/> 
    )
}
export default OurInput;
