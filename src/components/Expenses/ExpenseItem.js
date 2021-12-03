import "./ExpenseItem.css";

import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [expenseTitle, setTitle] = useState(props.title);
  const expenseAmount = props.amount;

  function clickHandler() {
    setTitle("updated");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
