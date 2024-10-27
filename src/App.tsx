import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import DashboardLayout from "./dashboards/pages/Dashboardlayout";
import Dashboard from "./dashboards/pages/Dashboard";
import ExpenseForm from "./dashboards/pages/ExpenseForm";
import ExpenseList from "./dashboards/pages/ExpenseList";

interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => setExpenses([...expenses, expense]);

  const deleteExpense = (id: string) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={<Dashboard expenses={expenses} />}
          />
          <Route
            path="/createExpense"
            element={<ExpenseForm onAddExpense={addExpense} />}
          />
          <Route
            path="/expenseList"
            element={
              <ExpenseList
                expenses={expenses}
                onDeleteExpense={deleteExpense}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
