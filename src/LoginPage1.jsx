import React from "react";
import Button from "./Button";
import {useState} from "react";
import {Formik,useFormik} from "formik";


function LoginPage(){

  function handleApi(value){
    console.log("sensing data","email is",values.meraemail,"& password is",values.merapassword)
  }
    
    const {handleSubmit,values,handleChange,resetForm}= useFormik({
      initialValues:{meraemail:"",
    merapassword:""},
    onSubmit:handleApi
    })
  
  
  
return(<>
<h2>log in to BuyBuddy</h2>
  <form onSubmit={handleSubmit} >
  <div className="flex flex-col items-start space-y-1.5 border px-4 py-6 border-gray-400 rounded-md">
     <label htmlFor="email" className="sr-only">Email</label>
         <input id="email" value={values.meraemail} onChange={handleChange} name="meraemail" className="relative block w-full h-10 placeholder-gray-300 border border-gray-400 appearance-none focus:red-800 focus:outline-none focus-ring-indigo-500" type="email" placeholder="email" autoComplete="email"/>
     <label htmlFor="password" className="sr-only">Password</label>
         <input id="password" value={values.merapassword} onChange={handleChange} name="merapassword" className="w-full h-10 placeholder-gray-300 border border-gray-400 " type="password"  placeholder="password" autoComplete="current-password"/>
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