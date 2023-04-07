import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem=(props)=>{
  //const [title,setTitle]=useState(props.title);
  //const [amount,setDel]=useState(props.amount);
  //const clickHandler =()=>{
  //setTitle('Updated !!!!')
  //  console.log(title)
  //}

  //const del = () =>{
  //  setDel("Deleted !")
  //  console.log(amount)
  //}
 
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetails
        amount={props.amount}
        title={props.title}
        location={props.loc}
      />

      {/*<button onClick={clickHandler}>Edit Title</button> */}
      {/*<button onClick={del}>Delete</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
