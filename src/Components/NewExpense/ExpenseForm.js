import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ expenseDataHandler, hideForm }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const isFormValid = () => {
    return !!enteredTitle && !!enteredAmount && !!enteredDate;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      return;
    }
    const expense = {
      title: enteredTitle,
      amount: +enteredAmount, //what is + for????
      date: new Date(enteredDate),
      timestamp: new Date().getTime(), //point in time when user click the button
    };

    expenseDataHandler(expense);
    hideForm();
    // console.log(expense);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
              required
            ></input>
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
              required
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              min="2019-01-01"
              max="2022-12-31"
              required
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={hideForm}>Cancel</button>
          <button disabled={!isFormValid()} type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
