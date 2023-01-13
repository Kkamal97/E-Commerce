import React from "react";
import Button from "./Button";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Formik,useFormik} from "formik";
import {BsCartPlus} from "react-icons/bs";
import * as yup from 'yup';
import { Link } from "react-router-dom";
function LoginPage(){


 





   const schema=yup.object().shape({
    email:yup.string().email(),
    password:yup.string().min(8).required(),
  }) 
  
    function handleApi(values){
       console.log("email is",values.email,"& password is",values.password,"password length is",values.password.length)
}
const {handleChange,values,handleSubmit,resetForm}=useFormik({
  initialValues:{
    email:"",
  password:"",
  },
  onSubmit:handleApi,
  validationSchema:schema,
});
  
 return(<div className="items-center text-center bg-blue-300">
<h2>log in to BuyBuddy</h2>
<BsCartPlus className="text-center text-9xl"/>
  <form onSubmit={handleSubmit} >
  <div className="flex flex-col items-center space-y-1.5 border px-4 py-6 border-gray-400 rounded-md">
     <label htmlFor="email" className="sr-only">Email</label>
         <input value={values.email} onChange={handleChange} className="relative block w-full h-10 placeholder-white bg-blue-300 border border-white appearance-none focus:red-800 focus:outline-none focus-ring-indigo-500" type="email" placeholder="usename or email" autoComplete="email" name="email"/>
     <label htmlFor="password" className="sr-only">Password</label>
         <input value={values.password}  onChange={handleChange} className="w-full h-10 placeholder-white bg-blue-300 border border-white" type="password"  placeholder="password" autoComplete="current-password" name="password"/>
  
    <div className="flex flex-row">
    <div>
       </div>
      <span className="grow"></span>
    <div>
    <Button type="button" className="items-end" onClick={resetForm}>Reset</Button>
    </div>
      </div>
    <Button type="submit" className="mx-5 my-10">Log in</Button>
        </div>
    </form>
    <Link to="/account/forgotpassword" >forgot password</Link>
    <Link to="/account/Signup">new to bubuddy signup</Link>
</div>)

  
}

export default LoginPage;