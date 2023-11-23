import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import Card from "../UI/Card";
import { DEFAULT_FILTERED_YEAR } from "../../constants";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState(DEFAULT_FILTERED_YEAR);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
