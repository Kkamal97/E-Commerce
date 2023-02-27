import React from "react";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
function Loading(){

    return(<>
        <p className="text-3xl text-indigo-500">Loading...</p>
        <AiOutlineLoading3Quarters className="text-5xl animate-spin"/>
        </>)

}
export default Loading;