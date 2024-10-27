import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import DashboardLayout from "./dashboards/pages/Dashboardlayout";
import Dashboard from "./dashboards/pages/Dashboard";


import ExpenseList from "./dashboards/pages/ExpenseList";
import ExpenseForm from "./dashboards/pages/ExpenseForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createExpense" element={<ExpenseForm />} />
          <Route path="/expenseList" element={<ExpenseList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
