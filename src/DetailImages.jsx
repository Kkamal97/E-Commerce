import React,{useState} from "react";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'


function DetailImages({productData,setimgURLs,imgURLs}){
   const sizer=productData.images.length;
  const imgsizer=1/sizer;
function handleimageChanger(e){
 const checking =e.currentTarget.getAttribute('imageid');
 setimgURLs(checking);
}
  return(<div className="flex flex-col items-center border-red-600 w-96" >
    <div className="flex justify-center h-72 w-80">
      <img className="overflow-hidden duration-500 ease-in scale-100 max-h-72 hover:scale-125" src={productData.images[(productData.images.length)-imgURLs]}/>
      </div>
    <div className="flex flex-row items-start w-full mt-2 space-x-2 overflow-x-scroll">
      <button  onClick={handleimageChanger} imageid={1} >
          <img  className="w-16 h-16 mx-1 border border-gray-600 "   src={productData.images[(productData.images.length)-1]} />
      </button>

{(productData.images.length>2)&&
      <button onClick={handleimageChanger} imageid={2}>
<img   className="object-cover w-16 h-16 mx-1 border border-gray-600" src={productData.images[(productData.images.length)-2]} />
      </button>
    }

{(productData.images.length>3)&&
  <button onClick={handleimageChanger} imageid={3}>
    <img   className="object-cover w-16 h-16 mx-1 border border-gray-600" src={productData.images[(productData.images.length)-3]} />
    </button>
}
    
{(productData.images.length>4)&&
  <button onClick={handleimageChanger} imageid={4}>
    <img   className="object-cover w-16 h-16 mx-1 border border-gray-600" src={productData.images[(productData.images.length)-4]} />
    </button>
}
    

{(productData.images.length>5)&&
 <button onClick={handleimageChanger} imageid={5}>
 <img   className="object-cover w-16 h-16 mx-1 border border-gray-600" src={productData.images[(productData.images.length)-5]} />
 </button>
}
   
</div>  
  </div>
  )
}
export default DetailImages;