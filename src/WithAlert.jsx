import React from "react";
import { useContext } from "react";
import { alertContext } from "./Context";
// import { alertContext } from "./ProductRoutes";
// import { useContext } from "react";
// ADDED BY (kk) [2023-04-03]:, 
function WithAlert (Incomingcomponent){
   
    function Outgoingcomponent (props){
        const {errorMsg,setErrorMsg,handleErrorReset}=useContext( alertContext );
     return(<Incomingcomponent {...props} errorMsg={errorMsg} setErrorMsg={setErrorMsg} handleErrorReset={handleErrorReset}/>)
    }
    return(Outgoingcomponent)
   
    
}
export default WithAlert;