import React from "react";
// ADDED BY (kk) [2023-03-19]:, 
function HOCD (incomingComponent){
        function OutgoingComponent(props){
            const [money,setmoney]=useState();
            function updateIncrease(){
                setmoney(money * 2) 
            }
            return(<incomingComponent updateIncrease={updateIncrease} money={money}/>)
        }
    return OutgoingComponent();
}


export default HOCD;