import React, { createContext, useContext, useState } from "react";
import Button from "./Button";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Formik,useFormik,Form, withFormik} from "formik";
import {BsCartPlus} from "react-icons/bs";
import * as yup from 'yup';
import { Link, Navigate } from "react-router-dom";
import tableicon from "./clipart.png";
import Input from "./FormikInput.jsx";
import axios from "axios";
import { userData } from "./App";

const schema=yup.object().shape({
  email:yup.string().email(),
  password:yup.string().min(8)
})
const initialValues={email:"",
password:""}
function handlecallApi(values,bag){  
 console.log("props me ye sab hai me ye sb hai",bag);
 const promise=axios.post("https://myeasykart.codeyogi.io/login",
  {email:values.email,
password:values.password
}
  );
  promise.then(function(response){
    const {user,token}=response.data;
    localStorage.setItem("token",token);
    bag.props.setUser(user);
  }).catch(function(){
    console.log("invalid credential");
  });

  console.log("fabricol se oye",values.email,"& password is ",values.password,"password length is",values.password.length)
    }
export function LoginPage({handleSubmit,values,errors,touched,handleChange,handleBlur}){
  const user=useContext(userData);
if(user){
  return(
    <Navigate to="/" />
  )
}

          return(<> 
    <form onSubmit={handleSubmit}  >
    <p>log in</p>
    <img className="mx-auto w-96" src={tableicon}/>
    <div className="space-y-2">
    <Input label="email address" placeholder="type your email address" name="email" id="mail"
    />
    <Input label="password" placeholder="type your password here" name="password" id="password"></Input>
    </div>
    <Button type="submit" >log in</Button>
    </form>   
    <p> 
  <Link to="/account/forgotpas.sword" className="underline hover:no-underline hover:text-orange-700">forgot password </Link>
</p>
<p>
  new to buybuddy
  <Link to="/account/Signup" className="underline hover:no-underline hover:text-orange-700"> signup now</Link>
</p>
    </>)
}
 const myHoC=withFormik({validationSchema:schema,initialvalues:initialValues,handleSubmit:handlecallApi});
 const simpleLogin=myHoC(LoginPage)
 export default simpleLogin;