import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {v4 as uuidv4} from 'uuid'

export default function AddExpense() {



    const [name, setName] =useState('')
const [cost, setCost] =useState('')
const{dispatch} = useContext(AppContext)
const onSubmit =(event)=>{
    event.preventDefault();
   const expense ={
    name:name,
    cost:parseInt(cost),
    id:uuidv4()
   };
   dispatch(
    {
type:'add_Expense',
payload:expense,

    })
}

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='row'>
            <div className='col-sm'>
                <label for='name'>Name</label>
                <input required="required"
                type="text"
                className='form-control'
                id='name' 
                value={name}
                onChange ={(event) => setName(event.target.value)}/>
            </div>
            <div className='col-sm'>
            <label for ='cost'>Cost</label>
                <input required="required"
                type="text"
                className='form-control'
                id='cost' 
                value={cost}
                onChange= {(event) => setCost(event.target.value)}/>
            </div>
            <div className='col-sm'>
                <button 
               type='submit' className='btn btn-primary'
              >
                   Save
                </button>
            </div>
        </div>
      </form>
    </div>
  )
}
