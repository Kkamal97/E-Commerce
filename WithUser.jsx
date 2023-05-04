import React, { useContext, useState } from "react";
import { kamalcontext1 } from "./App";
 
function WithUser (IncomingComponent){
    
    function OutgoingComponent(props){  
        const titip= useContext(kamalcontext1);
        console.log("xebrakadabba",titip);
const {user,setUser}=useContext(kamalcontext1);  
   
    return ( <IncomingComponent {...props} user={user} setUser={setUser} />)
    }
 return(  OutgoingComponent )
}
export default WithUser;