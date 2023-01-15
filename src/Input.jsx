import React from "react";

function Input({id,label,error,touched, ...rest }){
return(<>
    <label htmlFor={id} className="sr-only">
        {label}
    </label>
    <div className="flex flex-col">
    <input 
    id={id}
    
    {...rest}
    className="border border-blue-300 w-full md:w-96"
    /> 
    {touched && error &&  (<div className="text-red-800">{error}</div>)}
    </div>
</>)

}
export default Input;
// className="relative block w-full h-10 placeholder-red-400  border border-red-700 appearance-none focus:red-800  focus:ring-indigo-500" 
