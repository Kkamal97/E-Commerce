import React,{memo} from "react";
function Button({className,children,type,onClick}){

return (
  <button type={type} onClick={onClick} className="bg-tomato px-4 mx-2 border-tomato text-white border rounded-md " >{children}</button>
)
  
}


export default memo(Button);