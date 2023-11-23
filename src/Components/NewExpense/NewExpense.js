import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ expenseDataHandler }) => {
  const [formVisible, setFormVisible] = useState(false);
  const displayForm = () => {
    setFormVisible(true);
  };
  const hideForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="new-expense">
      {formVisible ? (
        <ExpenseForm
          hideForm={hideForm}
          expenseDataHandler={expenseDataHandler}
        />
      ) : (
        <button onClick={displayForm}>Add New Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
