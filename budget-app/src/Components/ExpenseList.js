import React,{useContext} from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

function ExpenseList() {
    const { expenses } = useContext(AppContext)
  
  return (
    <div>
      <ul> 
        {
            expenses.map((expense, index) => {
                return(
                <ExpenseItem key={index}
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
                />
                )
                
            })
        }
      </ul>
    </div>
  )
}

export default ExpenseList
