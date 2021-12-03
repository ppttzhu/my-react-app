import "./Expenses.css";

import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2020");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  function applyYearFilter(selectedYearFilter) {
    setYearFilter(selectedYearFilter);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYearFilter={yearFilter}
        onSelectYearFilter={applyYearFilter}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
