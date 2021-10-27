import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=()=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    const TitleHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    const AmountHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const DateHandler=(event)=>{
        setEnteredDate(event.target.value);
    }

    const SubmitHandler=(event)=>{
        event.preventDefault();
        const ExpenseDate={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        console.log(ExpenseDate);
    }
    return <form onSubmit={SubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" onChange={TitleHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.1" onChange={AmountHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={DateHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;