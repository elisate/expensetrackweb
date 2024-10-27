import React, { useState } from "react";

interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category || !date || !description) {
      alert("Please fill out all fields.");
      return;
    }
    const newExpense: Expense = {
      id: new Date().toISOString(),
      amount: parseFloat(amount),
      category,
      date,
      description,
    };
    onAddExpense(newExpense);
    setAmount("");
    setCategory("");
    setDate("");
    setDescription("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-green-500 mb-4 text-center">
          Add New Expense
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-green-300 transition duration-200"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-green-300 transition duration-200"
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-green-300 transition duration-200"
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-green-300 transition duration-200"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
