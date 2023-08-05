import React,{useContext} from "react";
import { AppContext } from "../context/AppContext";



 const Remaining =()=>{
const {expenses, budget} = useContext(AppContext);

const totalExpenses = expenses.reduce((total, item)=>
{
    return (total = total + item.cost)
},0)

const showalert =(budget < totalExpenses? 'alert alert-danger':'alert alert-success');




return(
    <div className={showalert}>
        <span>
            Remaining:${budget - totalExpenses}
        </span>
    </div>
)
 }

 export default Remaining;