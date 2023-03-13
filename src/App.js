import Expenses from "./components/Expenses/Expenses";
//import React from "react";

const App = () => {
  const expenses = [
    {
      title: "Toilet Paper",
      amount: 50,
      date: new Date(2023, 2, 12),
      location: "Pune",
    },
    {
      title: "Toilet Paper",
      amount: 50,
      date: new Date(2023, 2, 12),
      location: "Pune",
    },
    {
      title: "Toilet Paper",
      amount: 50,
      date: new Date(2023, 2, 12),
      location: "Pune",
    },
    {
      title: "Toilet Paper",
      amount: 50,
      date: new Date(2023, 2, 12),
      location: "Pune",
    },
  ];
  // to avoid importing react in morden react we code like this
  return (
    <div>
      <h2>Let's Start</h2>
      <Expenses items={expenses} />
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
