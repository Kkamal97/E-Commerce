import React from "react";
import usefield from "formik";

function FormikHOC(incomingComponent){
function OutgoingComponent({name,...rest}){
 const field = useField(name);

 console.log(name,field);
 const[data,meta]=field;
 const{value,onBlur,onchange}=data;
 const {error,touched}=meta;

 return(
   <incomingComponent 
   value={value}
   onBlur={onBlur}
   error={error}
   touched={touched}
   name={name}
   {...rest}
   /> 
 );
}

return(OutgoingComponent)




}
export default FormikHOC;