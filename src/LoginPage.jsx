import React from "react";
import Button from "./Button";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Formik,useFormik} from "formik";
function LoginPage(){

  
    function handleApi(values){
       console.log("email is",values.email,"& password is",values.password,"password length is",values.password.length)
}
const {handleChange,values,handleSubmit,resetForm}=useFormik({
  initialValues:{
    email:"",
  password:"",
  },
  onSubmit:handleApi,
});
  
 return(<>
<h2>log in to BuyBuddy</h2>
  <form onSubmit={handleSubmit} >
  <div className="flex flex-col items-start space-y-1.5 border px-4 py-6 border-gray-400 rounded-md">
     <label htmlFor="email" className="sr-only">Email</label>
         <input value={values.email} onChange={handleChange} className=" relative block appearance-none focus:red-800 focus:outline-none focus-ring-indigo-500 border border-gray-400 w-full h-10 placeholder-gray-300" type="email" placeholder="email" autoComplete="email" name="email"/>
     <label htmlFor="password" className="sr-only">Password</label>
         <input value={values.password}  onChange={handleChange} className="border border-gray-400 w-full h-10 placeholder-gray-300 " type="password"  placeholder="password" autoComplete="current-password" name="password"/>
  
    <div className="flex flex-row">
    <div>
       </div>
      <span className="grow"></span>
    <div>
    <Button type="button" onClick={resetForm}>Reset</Button>
    </div>
      </div>
    <Button type="submit" className="mx-5 my-10">Log in</Button>
        </div>
    </form>
</>)

  
}

export default LoginPage;