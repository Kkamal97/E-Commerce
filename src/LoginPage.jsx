import React from "react";
import Button from "./Button";
import {useState} from "react";

function LoginPage(){
const [email,setemail]=useState("")
const [pass,setpass]=useState("")

  
function handleSubmit(e){
  e.preventDefault();
console.log("email is",email,"& password is",pass)
  
}

function handleemail(e){
setemail(e.target.value)
  
}

  function handlepass(e){
setpass(e.target.value)
    
  }

  
  
return(<>
<h2>log in to BuyBuddy</h2>
  <form onSubmit={handleSubmit}>
  <div className="flex flex-col items-start space-y-1.5 border px-4 py-6 border-gray-400 rounded-md">
    <label htmlFor="email" className="sr-only">Email</label>
<input onChange={handleemail} className=" relative block appearance-none focus:red-800 focus:outline-none focus-ring-indigo-500 border border-gray-400 w-full h-10 placeholder-gray-300" type="email" placeholder="email" autoComplete="email"/>
    <label htmlFor="password" className="sr-only">Password</label>
<input onChange={handlepass} className="border border-gray-400 w-full h-10 placeholder-gray-300 " type="password"  placeholder="password" autoComplete="current-password"/>
    
  <Button  className="mx-5 my-10">Log in</Button>
    </div>
    </form>
</>)

  
}

export default LoginPage;