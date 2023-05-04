import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import {CiCircleAlert} from "react-icons/ci";
import Alert from "./Alert";
// ADDED BY (kamal) [2023-03-12]:, 
function Developer (props){
    const [errorMsg,setErrorMsg]=useState("dobara likh de bhai");
    console.log("error wala ye hai pahla wala",setErrorMsg);


    return( <>
    <Alert type="error" msg="try again" errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
    </>)
}
export default Developer;