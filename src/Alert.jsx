import React, { useContext } from "react";
// ADDED BY (kk) [2023-03-23]:, 
import {MdOutlineDangerous} from "react-icons/md";
import {AiOutlineCheckCircle} from "react-icons/ai";
import { alertContext } from "./Context";
import WithAlert from "./WithAlert";
import { useEffect } from "react";
import withProvider from "./WithProvider";
function Alert({errorMsg,setErrorMsg,handleErrorReset}){


console.log("handle wala phuncha check kro",handleErrorReset)
   useEffect(
    function(){
        if(errorMsg){
            const timeout=setTimeout(handleErrorReset,5*1000);
            return function (){
                clearTimeout(timeout);
            };
        }
    },
    [errorMsg]);

    if(!errorMsg){
return<></>    }

setTimeout(function Timer(){
    handleErrorReset()
}, 30*1000);

const {type,msg}=errorMsg;
const themeMap={
sucess:{
    color:"bg-green-600",
    icon: AiOutlineCheckCircle,
},
error:{
    color:"bg-red-400",
    icon:MdOutlineDangerous,
}
    }
    const theme=themeMap[type];
    const ThemeIcon=theme.icon;
    return<>     
    <div className={" px-4 py-3 flex flex-row rounded-md border-8 border-double border-blue-900 items-center " + theme.color}  >
      <ThemeIcon className="w-5 text-gray-900"/>
        <div className="flex flex-row items-center">
    <strong className="font-bold">{type}!</strong>
    <span className="block sm:inline">''  {msg}</span>
    </div>
    <span className="grow"/>
    <button className="mr-3" onClick={handleErrorReset}>Dismiss</button>
  </div>
    </>    
      }
export default withProvider(alertContext)(Alert);