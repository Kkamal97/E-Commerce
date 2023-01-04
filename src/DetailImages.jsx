import React,{useState} from "react";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
function DetailImages({productData}){
  const sizer=productData.images.length;
  const imgsizer=1/sizer;

const [imgURLs, setimgURLs]=useState()
  
function handleimageChanger(e){
  console.log("image ye chaapegi",e.target.value)
}


  
  return(<div className="w-1/2 " >

  
  

  
    {console.log(imgsizer)}
    <div className="flex w-fit items-center">
   
      <img className="w-full my-2 border border-gray-600" src={productData.images[(productData.images.length)-1]}/>
  
      </div>

    <div className="flex flex-row w-full overflow-x-scroll items-start">
      <img   className="w-24   mx-1 border border-gray-600 " src={productData.images[(productData.images.length)-1]} />
<img   className="w-24 mx-1 border border-gray-600" src={productData.images[(productData.images.length)-2]} />
    <img   className="w-24 mx-1 border border-gray-600" src={productData.images[(productData.images.length)-3]} />
    <img   className="w-24 mx-1 border border-gray-600" src={productData.images[(productData.images.length)-4]} />
      <img   className="w-24 mx-1 border border-gray-600" src={productData.images[(productData.images.length)-5]} />
</div>

    
  </div>
  )
}


export default DetailImages;



// < AiOutlineRight className="text-3xl"/>
// < AiOutlineLeft className="text-3xl text-gray-800" />