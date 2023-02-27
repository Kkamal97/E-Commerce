import React from "react";
import { useField } from "formik";
import OurInput from "./Input";
function Input({id,label,name, ...rest }){

    const field=useField(name);
    const [data,sata]=field;
    
    const {value,onChange,onBlur}=data;
    const {error,touched}=sata;
    console.log(sata)
return(<>
    <label htmlFor={id} className="sr-only">
        {label}
    </label>
    <div className="flex flex-col">
    <OurInput 
    name={name}
    id={id}
    value={value}
    onBlur={onBlur}
    onChange={onChange}
    {...rest}
    /> 
    {touched && error &&  (<div className="text-red-800">{error}</div>)}
    </div>
</>)

}
export default Input;
// className="relative block w-full h-10 placeholder-red-400  border border-red-700 appearance-none focus:red-800  focus:ring-indigo-500" 
