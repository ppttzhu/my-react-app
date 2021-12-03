import "./Expenses.css";

import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2020");

  function applyYearFilter(selectedYearFilter) {
    setYearFilter(selectedYearFilter);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYearFilter={yearFilter}
        onSelectYearFilter={applyYearFilter}
      />
      {props.expenses.map(function (object, i) {
        return (
          <ExpenseItem
            key={i}
            title={object.title}
            amount={object.amount}
            date={object.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
