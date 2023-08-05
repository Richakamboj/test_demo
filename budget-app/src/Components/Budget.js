import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";

const Budget =()=>{

    const {budget, dispatch} = useContext(AppContext);
const [show, setShow]= useState(false);
    const handleChangeBudget=(event)=>{
    
        dispatch({
            type:'edit_expense',
          payload:event.target.value,
          });
        
    }
   const handleBudget=()=>{
        setShow(!show);
    }
    return (
        <div className="alert alert-secondary">
          {show ? ( // Conditional rendering based on the 'show' state
        <input
          type="text"
          value={budget}
          onChange={handleChangeBudget}
        />
      ) : (
        <span>Budget: {budget}</span>
      )}
      <br />
            <button  className="mt-2 btn btn-primary" onClick={handleBudget}>{show ? 'Save' :'Edit'}</button>
        </div>
    )
}

export default Budget;