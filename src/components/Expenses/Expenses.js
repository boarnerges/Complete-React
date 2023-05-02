import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterdYear, setFilteredYear] = useState("2022");

  const dateEventHandler = (datePicked) => {
    setFilteredYear(datePicked);
    console.log(datePicked);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterdYear}
        onFilterHandler={dateEventHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
