import React from "react";
import {Link} from "react-router-dom";
import { AiOutlineStar } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

function DisplayProduct({thumbnail,category,title,price,id}){


  return(
<div className=" mx-4 my-3 rounded-md max-w-60 md:max-w-36 ">
  <img className="  max-w-full aspect-square" src={thumbnail}/>
  <span className="flex-grow"></span>
  <h1 className="text-gray-400">{category}</h1>
  <h1>{title}</h1>
  <h1>Rs {price}</h1>
  <div className="text-star flex flex-row">
  <AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>
    </div>
  <Link className="text-green-700 flex items-center" to={"/productdetail/" + id} >view detail    

    <BiLinkExternal/>
  
  </Link>
</div>)

    
  
}


export default DisplayProduct;