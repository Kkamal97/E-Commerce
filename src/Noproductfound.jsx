import React from "react";
import Notfoundimage from "./Notfoundimage.jpg"
import { BsMusicNoteList } from 'react-icons/bs';
function Noproductfound(){


return(<>
<p>this URL does not exists</p>
<BsMusicNoteList className="text-4xl" />
<img className="w-full" src={Notfoundimage}/>


</>
  
)

  
}

export default Noproductfound;

