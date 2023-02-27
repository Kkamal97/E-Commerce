import React from "react";
function OurInput({...rest}){
    return (
 <input 
{...rest}
 className="border border-red-300  w-1/2 rounded-md "
/> 
    )
}
export default OurInput;
