import React,{useContext} from 'react'
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem =( props ) =>{
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense =()=>{
    dispatch({
      type:'delete_expense',
      payload:props.id
    })
  }
  return (
    <>
      <li className='list-group-item d-flex justify-content-between align-iems-center'>
        {props.name}<div>
        <span style={{'color':'#000'}} className='badge badge-primary badge-pill mr-3'>
        $ {props.cost}
        <TiDelete size='1.5em'
        onClick={handleDeleteExpense}></TiDelete>
        </span>
    </div>
    </li>
    </>
  )
}

export default ExpenseItem;
