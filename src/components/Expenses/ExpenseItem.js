import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem=(props)=>{
  const [title,setTitle]=useState(props.title);
  const [amount,setDel]=useState(props.amount);
  const clickHandler =()=>{
    setTitle('Updated !!!!')
    console.log(title)
  }

  const del = () =>{
    setDel("Deleted !")
    console.log(amount)
  }
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetails
        amount={amount}
        title={title}
        location={props.location}
      />

      <button onClick={clickHandler}>Edit Title</button>
      <button onClick={del}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
