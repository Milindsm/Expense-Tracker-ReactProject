import React,{useState} from 'react';
import './NewExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = ()=>{
const [enteredTitle,setEnteredTitle]=useState('');
const [enteredAmount,setEnteredAmount]=useState('');
const [enteredDate,setEnteredDate]=useState('');
    const TitleChange = (event) =>{
        setEnteredTitle(event.target.value)
    }

    const AmountChange = (event) =>{
        setEnteredAmount(event.target.value)
    }

    const DateChange = (event) =>{
        setEnteredDate(event.target.value)
    }

   

   
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={TitleChange}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={AmountChange}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2020-01-01' max='2023-12-31' onChange={DateChange}></input>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' onClick={SubmitBtn}>Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;