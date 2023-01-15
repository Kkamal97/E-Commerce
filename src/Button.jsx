import React,{memo} from "react";
function Button({className,children,type,onClick}){

return (
  <button type={type} onClick={onClick} 
  className={"px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 " +" " + className } >{children}</button>
)}


export default memo(Button);
// bg-tomato px-4 mx-2 border-tomato text-white border rounded-md