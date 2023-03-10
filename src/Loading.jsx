import React from "react";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import {ImSpinner} from "react-icons/im";
function Loading(){

    return(<>
        <p className="text-3xl text-indigo-500">Loading...</p>
        <ImSpinner className="text-5xl animate-spin"/>
        </>)

}
export default Loading;