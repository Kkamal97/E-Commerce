import React from "react";
import {Link} from "react-router-dom";
import DisplayProduct from "./DisplayProduct";
function FinalMap({newproductList}){
  return (<div className="flex flex-wrap grid grid-cols-1 md:grid-cols-3">
    
    {newproductList.map(function(items){
return (<div className="items-center" >
  <DisplayProduct {...items}/>
</div>)
  })}
</div>)
}

export default FinalMap;
