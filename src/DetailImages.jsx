import React from "react";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
function DetailImages({productData}){
  return(<div className="w-1/ " >

  
  

  
    
    <div className="flex w-fit items-center">
   < AiOutlineLeft className="text-3xl text-gray-800" />
      <img className="w-3/" src={productData.images[(productData.images.length)-1]}/>
  < AiOutlineRight className="text-3xl"/>
      </div>
  </div>
  )
}


export default DetailImages;

// <img src={productData.images[(productData.images.length)-2]}/>
    // <img src={productData.images[(productData.images.length)-3]}/>
    // <img src={productData.images[(productData.images.length)-4]}/>