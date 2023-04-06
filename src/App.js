import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
//import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

  const dummyExpenses = [
    {id:'e1',title:'New Desk',amount:450,date: new Date(2020,4,4)},
  {id:'e2',title:'New Chair',amount:500,date: new Date(2022,4,10)},
  {id:'e3',title:'New Document Stuff',amount:600,date: new Date(2022,4,22)},
  {id:'e4',title:'New Window',amount:200,date: new Date(2022,4,30)},
  ];

  function App(){
  
  const [expense, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense =>{
    console.log(expense);
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses]
    })
     
  }
  // to avoid importing react in morden react we code like this
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expense} />
    </div>
  );
  

  // while using react import we need to create like this
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's Start"),
  //   React.createElement(Expenses,{items:expenses})
  // );
}

export default App;
