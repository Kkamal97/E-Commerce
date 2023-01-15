import React from "react";
import { useFormik } from "formik";
import Button from "./Button";
import Input from "./Input";
import * as yup from "yup";
import { Link } from "react-router-dom";
import tableicon from "./clipart.png";
function signupPage(){

   function signupApi(values){
    
        console.log("sending la",values.firstname)
    }
const schema=yup.object().shape({
    firstname:yup.string().min(4),
    lastname:yup.string().min(4),
    emailadd:yup.string().email(),
    password:yup.string().min(8),
    confirmpassword:yup.string().min(6),
})

const {values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,}=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            emailadd:"",
            password:"",
            confirmpassword:"",
        },
        onSubmit:signupApi,
        validationSchema:schema,
    }

    )

    return(<>
    <img className="mx-auto w-96" src={tableicon}/>
    <form onSubmit={handleSubmit}>
<div className="flex flex-col space-y-2 mx-auto items-center">
<Input touched={touched.firstname} error={ errors.firstname} value={values.firstname} name="firstname" type="text" id="namu" placeholder="first name" onChange={handleChange} onBlur={handleBlur}/>
<Input touched={touched.lastname} error={ errors.lastname} value={values.lastname} name="lastname" type="text" id="jale" placeholder="last name" onChange={handleChange} onBlur={handleBlur}/>
<Input touched={touched.emailadd} error={ errors.emailadd} value={values.emailadd} name="emailadd" type="email" id="tujale" placeholder="email address" onChange={handleChange} onBlur={handleBlur} />
<Input touched={touched.password} error={ errors.password} value={values.password} name="password" type="password" id="putt" placeholder="create password" onChange={handleChange} onBlur={handleBlur} />
<Input touched={touched.confirmpassword} error={ errors.confirmpassword} value={values.confirmpassword} name="confirmpassword" type="password"  id="jojo" placeholder="confirm password" onChange={handleChange} onBlur={handleBlur} />
<Button type="submit">Sign Up</Button>
</div>
</form>
<p>
    have already account
<Link className="underline hover:no-underline hover:text-orange-700" to="/account/Login"> log in </Link>
</p>

    </>
    )
}
export default signupPage;