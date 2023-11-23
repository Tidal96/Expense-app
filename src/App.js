// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const expenses = [
  {
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    timestamp: 1697718633279,
  },
  {
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    timestamp: 1697718633269,
  },
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    timestamp: 1697718633289,
  },
  {
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    timestamp: 1697718633239,
  },
];

function App() {
  const [currentExpenses, setCurrentExpenses] = useState(expenses);
  const expenseDataHandler = (data) => {
    setCurrentExpenses([...currentExpenses, data]);
  };

  return (
    <div>
      <NewExpense expenseDataHandler={expenseDataHandler} />
      <Expenses items={currentExpenses} />
    </div>
  );
}

export default App;
