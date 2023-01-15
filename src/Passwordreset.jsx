import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
function passwordreset(){
    return (<>
        <form>
            <Input type="email" placeholder="email address"/>
            <button>send OTP</button>
        </form>
<p>
    Have username & password
        <Link className="underline hover:no-underline hover:text-orange-700" to="/account/forgotpassword" > log in</Link>
        </p>
          <p>
          Don't have accound
          
        <Link className="underline hover:no-underline hover:text-orange-700" to="/account/Signup"> signup</Link>
        </p>
        
        </>)
}
export default passwordreset;