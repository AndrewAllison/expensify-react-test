import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesDashboardPage = () => (
  <div>
    <ExpensesSummary/>
    <ExpenseListFilters/>
    <ExpenseList />
  </div>
);
export default ExpensesDashboardPage;