import React from "react";
import Button from "./Button";
import {useState} from "react";

function LoginPage(){
const [email,setemail]=useState("");
const [pass,setpass]=useState("");
const [showmsg,setshowmsg]=useState("");
  
function handleSubmit(e){
  e.preventDefault();
 console.log("email is",email,"& password is",pass,"password length is",pass.length)
}
function handleemail(e){
 setemail(e.target.value)  
}
function handlepass(e){
    const userpass=e.target.value;
    setpass(userpass)
  if(userpass.length>=8){
 setshowmsg("")
  }
    
 
       }
function handleBlur(){
  if(pass.length<8){
   setshowmsg(pass)
      return(<>
      <p className="text-red-600">password in too small</p>
        {console.log(pass,"password in too small") }
      </> )
        } 
      }

  function handlereset(){
setemail("")
 setpass("")
    console.log("this is a reset test")
    
  }
  
  
return(<>
<h2>log in to BuyBuddy</h2>
  <form onSubmit={handleSubmit} >
  <div className="flex flex-col items-start space-y-1.5 border px-4 py-6 border-gray-400 rounded-md">
     <label htmlFor="email" className="sr-only">Email</label>
         <input onChange={handleemail} className=" relative block appearance-none focus:red-800 focus:outline-none focus-ring-indigo-500 border border-gray-400 w-full h-10 placeholder-gray-300" type="email" placeholder="email" autoComplete="email"/>
     <label htmlFor="password" className="sr-only">Password</label>
         <input onBlur={handleBlur} onChange={handlepass} className="border border-gray-400 w-full h-10 placeholder-gray-300 " type="password"  placeholder="password" autoComplete="current-password"/>
    <div className="flex flex-row">
    <div>
    {showmsg && <p className="text-red-600">password in too small</p> }
    </div>
      <span className="grow"></span>
    <div>
    <Button type="button" onClick={handlereset}>Reset</Button>
    </div>
      </div>
    <Button type="submit" className="mx-5 my-10">Log in</Button>
        </div>
    </form>
</>)

  
}

export default LoginPage;