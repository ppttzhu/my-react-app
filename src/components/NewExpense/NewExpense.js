import "./NewExpense.css";

import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showNewExpense, setShowNewExpense] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  function addNewExpenseHandler() {
    setShowNewExpense(true);
  }

  function cancelHandler() {
    setShowNewExpense(false);
  }

  let expenseContent = (
    <button onClick={addNewExpenseHandler}>Add New Expense</button>
  );
  if (showNewExpense)
    expenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    );
  return <div className="new-expense">{expenseContent}</div>;
}

export default NewExpense;
