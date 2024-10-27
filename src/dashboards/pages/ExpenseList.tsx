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
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-green-500 mb-4 text-center">
          Expense Tracker
        </h2>
        <input
          type="text"
          placeholder="Filter by category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border border-gray-300 p-3 mb-4 rounded-lg w-full focus:outline-none focus:ring focus:ring-green-300 transition duration-200"
        />
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left text-gray-700 font-semibold">
                Date
              </th>
              <th className="p-2 text-left text-gray-700 font-semibold">
                Category
              </th>
              <th className="p-2 text-left text-gray-700 font-semibold">
                Amount
              </th>
              <th className="p-2 text-left text-gray-700 font-semibold">
                Description
              </th>
              <th className="p-2 text-left text-gray-700 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((exp) => (
              <tr
                key={exp.id}
                className="border-b hover:bg-gray-100 transition duration-200"
              >
                <td className="p-4">{exp.date}</td>
                <td className="p-4">{exp.category}</td>
                <td className="p-4">${exp.amount.toFixed(2)}</td>
                <td className="p-4">{exp.description}</td>
                <td className="p-4">
                  <button
                    onClick={() => onDeleteExpense(exp.id)}
                    className="text-red-500 hover:text-red-700 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
