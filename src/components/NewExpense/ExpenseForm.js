import React, { useState } from "react";
import "./ExpenseForm.css";
import NewExpense from "./NewExpense";
const ExpenseForm = function (props) {
  /*const [enterUserState, setenterUserState] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });
*/
  const [enterTitle, setEnterTitle] = useState("");
  const [amount, SetAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangehandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const amountChange = (event) => {
    SetAmount(event.target.value);
  };

  const dateChange = (event) => {
    setDate(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: amount,
      date: new Date(date),
    };

   props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setDate("");
    SetAmount("");

 
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangehandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChange}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2026-01-10"
            value={date}
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="Submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
