import React,{useState} from "react";
import {RxCrossCircled} from "react-icons/rx";
import { Link } from "react-router-dom";
function CartRow({CartItems,list,setlist,updatecart,setLoading,handleChange,copyCart}){
 function handleRemove(e){
  const id=e.currentTarget.getAttribute('id');
const newCart={...CartItems};
delete newCart[id];
setLoading(true);
updatecart(newCart);
}
    return(<div className="px-9">
 {list.map(function(response){
        return(<div className="flex flex-row items-center px-4 py-3 space-x-5 border border-gray-100 ">
           <button onClick={handleRemove} id={response.data.id}>
            <RxCrossCircled className="text-xl hover:text-orange-400"/>
            </button>
          <img src={response.data.thumbnail} className="w-17.5 h-17.5 object-cover"/>
          <div className="underline text-tomato decoration-solid hover:no-underline grow">
          <Link to={"/productdetail/" + response.data.id} >
           {response.data.title}
           </Link>
           </div>
            <p className="w-16 text-start"> rs {response.data.price}</p>
            <input className="w-16 text-center border border-gray-200" value={copyCart[response.data.id] } onChange={handleChange} id={response.data.id} type="number"/>
            <p className="w-16">{(response.data.price)*(CartItems[response.data.id])} </p>
           
              </div>)
                })}
    </div>)}
export default CartRow;