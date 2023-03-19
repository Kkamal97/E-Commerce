import React, { useContext, useState } from "react";
import { useFormik,Formik,Form } from "formik";
import Button from "./Button";
import Input from "./FormikInput.jsx";
import * as yup from "yup";
import { Link, Navigate } from "react-router-dom";
import tableicon from "./clipart.png";
import axios from "axios";
import { kamalcontext1 } from "./App";
import WithUser from "./WithUser";
function signupPage({user,setUser}){
    const [loading,setloading]=useState(true);
console.log("aaale",user,setUser);
if(user){
    return(<Navigate to="/" />)
}

   function signupApi(values){
    const promse=axios.post("https://myeasykart.codeyogi.io/signup",
    {       fullName:values.firstname,
            email:values.emailadd,
            password: values.confirmpassword
        } )
        promse.then(function (response){
            console.log("chcha chicha",response)
            setUser(response.data.user) ;            
    localStorage.setItem("token",response.data.token);            
        }).catch(function(){
            console.log("nhi hua signUp")
        })
        console.log("sending la",
        values.firstname, values.lastname, values.emailadd, values.confirmpassword)
    }
const schema=yup.object().shape({
    firstname:yup.string().min(4),
    lastname:yup.string().min(4),
    emailadd:yup.string().email(),
    password:yup.string().min(8),
    confirmpassword:yup.string().min(6),
})

const initialValues={firstname:"",
lastname:"",
emailadd:"",
password:"",
confirmpassword:""
}
    return(<>    
    <img className="mx-auto w-96" src={tableicon}/>
    <Formik initialValues={initialValues} onSubmit={signupApi} validationSchema={schema} validateOnMount={true}>
    <Form >
<div className="flex flex-col space-y-2 mx-auto items-center ">
<Input  name="firstname" type="text" id="namu" placeholder="first name" />
<Input  name="lastname" type="text" id="jale" placeholder="last name"/>
<Input  name="emailadd" type="email" id="tujale" placeholder="email address"  />
<Input  name="password" type="password" id="putt" placeholder="create password"  />
<Input name="confirmpassword" type="password"  id="jojo" placeholder="confirm password"  />
<Button type="submit">Sign Up</Button>
</div>
</Form>
</Formik>

<p>
    have already account
<Link className="underline hover:no-underline hover:text-orange-700" to="/account/Login"> log in </Link>
</p>

    </>
    )
}
export default WithUser(signupPage) ;