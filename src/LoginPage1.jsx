import React from "react";
import Button from "./Button";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Formik,useFormik,Form, withFormik} from "formik";
import {BsCartPlus} from "react-icons/bs";
import * as yup from 'yup';
import { Link } from "react-router-dom";
import tableicon from "./clipart.png";
import Input from "./FormikInput.jsx";

const schema=yup.object().shape({
  email:yup.string().email(),
  password:yup.string().min(8)
})


const initialValues={email:"",
password:""}

function handlecallApi(values){
  console.log("fabricol se oye",values.email,"& password is ",values.password,"password length is",values.password.length)
    }
export function LoginPage({handleSubmit,values,errors,touched,handleChange,handleBlur}){
  
console.log("data in props",values,errors)

  return(<> 
    <form onSubmit={handleSubmit}>
    <p>log in</p>
    <img className="mx-auto w-96" src={tableicon}/>
    <div className="space-y-2">
    <Input label="email address" placeholder="type your email address" name="email" id="mail"
    
    
    />
    <Input label="password" placeholder="type your password here" name="password" id="password"></Input>
    </div>
    <Button type="submit">log in</Button>
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
 {/* <Formik initialValues={initialValues} onSubmit={handlecallApi} validationSchema={schema} validateOnMount={true}> */}
//  </Formik>