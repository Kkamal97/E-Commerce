import React from "react";
import Button from "./Button";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Formik,useFormik} from "formik";
import {BsCartPlus} from "react-icons/bs";
import * as yup from 'yup';
import { Link } from "react-router-dom";
import tableicon from "./clipart.png";
import Input from "./Input.jsx";
function LoginPage(){
  const schema=yup.object().shape({
    email:yup.string().email(),
    password:yup.string().min(8).required(),
  }) 
  
    function handleApi(values){
       console.log("email is",values.email,"& password is",values.password,"password length is",values.password.length)
}
const {handleChange,values,handleSubmit,resetForm,errors,touched,handleBlur,isValid}=useFormik({
  initialValues:{
    email:"",
  password:"",
  },
  onSubmit:handleApi,
  validationSchema:schema,
});
  
 return(<div className="w-full items-center text-center ">
<img className="mx-auto w-96" src={tableicon}/>
{/* <BsCartPlus className="text-center text-9xl"/> */}
  <form onSubmit={handleSubmit} >
  <div className="flex flex-col md:flex-row items-center space-y-1.5 space-x-2 ">
     
         <Input 
         id="email"
         label="email address"
         value={values.email} 
         onChange={handleChange} 
         type="email" 
         placeholder="username or email" 
         autoComplete="email" 
         name="email"
         error={errors.email}
         touched={touched.email}
         onBlur={handleBlur}
         required
         className="" />
    
         <Input 
         label="password"
         id="password"
         value={values.password}  
         onChange={handleChange} 
         className="" 
         type="password"  
         placeholder="password" 
         autoComplete="current-password" 
         name="password"
         error={errors.password}
         touched={touched.password}
         onBlur={handleBlur}
         required
         />
  </div>
    <div className="flex flex-row my-4">
    <Button type="button" className="mx-5 my-10 bg-blue-700" onClick={resetForm}>Reset</Button>
    <Button type="submit" className="mx-5 my-10 disabled:bg-green-400" disabled={!isValid} >Log in</Button>
        </div>
    </form>
    <Link className="underline hover:no-underline hover:text-orange-700" to="/account/forgotpassword" >forgot password</Link>
    <div>
      <p>
      new to bubuddy
      
    <Link className="underline hover:no-underline hover:text-orange-700" to="/account/Signup"> signup</Link>
    </p>
    </div>
    
</div>)

  
}

export default LoginPage;