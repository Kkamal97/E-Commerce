import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import {useFormik} from "Formik";
import * as yup from "yup";
function SignupPage(){

function handleSendingApi(e){
        console.log("sending re ho jayegsa",values.firstName,values.lastName,values.emailadd,"& passwords are",values.createpass,values.confirmpass)
}

const schema=yup.object().shape({
    firstName:yup.string(),
    lastName:yup.string(),
    emailadd:yup.string().email(),
    createpass:yup.string().min(8).max(12),
    createpass:yup.string().min(8).max(12),
})

const {handleSubmit,handleChange,values,errors}=useFormik({
    initialValues:
    {firstName:"",
lastName:"",
emailadd:"",
createpass:"",
confirmpass:"",
},
onSubmit:handleSendingApi,
validationSchema:schema,
})

return(<div className="flex flex-col">
<form onSubmit={handleSubmit}>
    <div className="flex flex-col">
<input value={values.firstName} onChange={handleChange} name="firstName" type="text" className="border border-green-500" placeholder="first Name"/>
<input value={values.lastname} onChange={handleChange} name="lastName" type="text" className="" placeholder="last Name"/>
<input value={values.emailadd} onChange={handleChange} name="emailadd" type="email" className="" placeholder="email address"/>
<input value={values.createpass} onChange={handleChange} type="password" name="createpass" placeholder="create a password"></input>
<input value={values.confirmpass} onChange={handleChange} type="password" name="confirmpass" placeholder="confirm the password" ></input>

<Button type="submit">signup</Button>
</div>
</form>
<Link to="/account/Login">already account login</Link>
</div>
)

}
export default SignupPage;