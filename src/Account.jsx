import React from "react";
import { Link,Routes,Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import {BsCartPlus} from "react-icons/bs";
import tableicon from "./clipart.png";
function Account(){

return(<div className="items-center text-center ">
    <p className="text-4xl font-black">Hello There! welcome plz log in</p>
    <p>Automatic identity verification which enable you to verify your identity</p>
    <img className="mx-auto w-80" src={tableicon}/>
    {/* <BsCartPlus className="mx-auto text-9xl"/> */}
   
    <p>Already have account   
     
        <a href="/account/Login" className="text-blue-400 underline hover:text-orange-700 hover:no-underline">         log in</a>
        
        </p>
        <p>new to bubuddy
    <Link className="text-blue-400 underline hover:text-orange-700 hover:no-underline " to="/account/Signup"> signup</Link>
    </p>

    </div>)

}
export default Account;