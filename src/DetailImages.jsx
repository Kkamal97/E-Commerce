import React,{useState} from "react";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'


function DetailImages({productData,setimgURLs,imgURLs}){
   const sizer=productData.images.length;
  const imgsizer=1/sizer;
function handleimageChanger(e){
 console.log("check kare isme kya phuncha", imgURLs) ;
 const checking =e.currentTarget.getAttribute('imageid');
 setimgURLs(checking);
}
  return(<div className="flex flex-col w-96  border-red-600 items-center" >
    <div className="flex h-72 w-80   justify-center">
      <img className="max-h-72 scale-100 hover:scale-125 ease-in duration-500 overflow-hidden" src={productData.images[(productData.images.length)-imgURLs]}/>
      </div>
    <div className="flex flex-row w-full overflow-x-scroll items-start space-x-2 mt-2">
      <button  onClick={handleimageChanger} imageid={1} >
          <img  className=" w-16 h-16 bg-green-400  mx-1 border border-gray-600"   src={productData.images[(productData.images.length)-1]} />
      </button>

      <button onClick={handleimageChanger} imageid={2}>
<img   className="w-16 h-16 object-cover mx-1 border border-gray-600" src={productData.images[(productData.images.length)-2]} />
      </button>

{(productData.images.length>3)&&
  <button onClick={handleimageChanger} imageid={3}>
    <img   className="w-16 h-16 object-cover mx-1 border border-gray-600" src={productData.images[(productData.images.length)-3]} />
    </button>
}
    
{(productData.images.length>4)&&
  <button onClick={handleimageChanger} imageid={4}>
    <img   className="w-16 h-16 object-cover mx-1 border border-gray-600" src={productData.images[(productData.images.length)-4]} />
    </button>
}
    

{(productData.images.length>5)&&
 <button onClick={handleimageChanger} imageid={5}>
 <img   className="w-16 h-16 object-cover mx-1 border border-gray-600" src={productData.images[(productData.images.length)-5]} />
 </button>
}
   
</div>  
  </div>
  )
}
export default DetailImages;