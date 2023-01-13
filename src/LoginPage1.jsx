import React from "react";
import {Formik,useFormik} from "formik";
function LoginPage(){

  function handleApi(){
    console.log("hello dosto")
  }

  const {handleSubmit,onChange,values,resetForm }=useFormik({
initialValues:{youremail:"",
yourpassword:""},
onSubmit:handleApi,

  })
  return(<div>
  <form onSubmit={handleSubmit}>
<label htmlFor="emaaail">email</label>
<input onChange="handleChange" value={values.youremail} id="emaaail" name="youremail"/>
<label htmlFor="pswrd" >password</label>
<input onChange="handleChange" value={values.yourpassword} id="pswrd" placeholder="type yor email here"/>
<button >Submit</button>
  </form>

  </div>

  )
}

export default LoginPage;