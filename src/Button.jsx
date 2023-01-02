import React,{memo} from "react";
function Button({className,children}){

return (
  <button className="bg-tomato px-4 mx-2 border-tomato text-white border rounded-md " >{children}</button>
)
  
}


export default memo(Button);