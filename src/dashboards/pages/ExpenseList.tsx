import React, { useState } from "react";

interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({
  expenses,
  onDeleteExpense,
}) => {
  const [filterCategory, setFilterCategory] = useState("");

  const filteredExpenses = filterCategory
    ? expenses.filter((exp) => exp.category === filterCategory)
    : expenses;

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Filter by category"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="border p-2 mb-4 rounded"
      />
      <ul>
        {filteredExpenses.map((exp) => (
          <li key={exp.id} className="border-b p-2">
            <span>{exp.date} - </span>
            <span>{exp.category}: </span>
            <span>${exp.amount.toFixed(2)} - </span>
            <span>{exp.description} </span>
            <button
              onClick={() => onDeleteExpense(exp.id)}
              className="text-red-500 ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
