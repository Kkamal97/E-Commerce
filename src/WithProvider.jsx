import React, { useContext, useState } from "react";
import { kamalcontext1 } from "./App";
 import { alertContext } from "./Context";
 function withProvider(provider){ 
function WithHOC (IncomingComponent){
    function OutgoingComponent(props){  
const contextData=useContext(provider);  
    return ( <IncomingComponent {...props} {...contextData} />)
    }
 return(  OutgoingComponent )
};
return WithHOC;
} 
export default withProvider;