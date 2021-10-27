import React from 'react';
import NewExpense from "./components/newExpense/newExpense";
import Expenses from "./components/Expenses/Expenses";

const App=() => {
  const expenses=[{
    id:"1",
    title:"car insurance",
    amount:7,
    date:new Date(2021,3,25)
  },
  {
    id:"2",
    title:"electricy bill",
    amount:50,
    date:new Date(2021,7,26)
  },
  {
    id:"3",
    title:"house rent",
    amount:150,
    date:new Date(2021,5,11)
  },
  {
    id:"4",
    title:"water bill",
    amount:4.5,
    date:new Date(2021,10,9)
  }]

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
