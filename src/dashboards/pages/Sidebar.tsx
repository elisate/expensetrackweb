import { MdDashboard } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { PiTreeViewFill } from "react-icons/pi";
import { RiLogoutCircleRLine, RiCloseCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Sidebar() {
  const navigate = useNavigate(); // Hook for navigation
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar

  const handleLogout = () => {
    // Clear user session data
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    // Redirect to the login page
    navigate("/login");
  };

  // Retrieve the user's name from local storage
  const userName = localStorage.getItem("name") || "User";

  return (
    <div>
      {/* Menu button for mobile */}
      <button
        className="md:hidden p-2 fixed top-4 left-4 z-50 text-green-500"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <AiOutlineMenu className="text-2xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 border-r border-gray-500 w-48 fixed h-screen z-40 bg-white`}
      >
        {/* Close button for sidebar - visible only on mobile */}
        <button
          className="absolute top-4 right-4 text-green-500 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <RiCloseCircleLine className="text-2xl" />
        </button>

        <div className="border-b border-gray-500 flex flex-col gap-1 pl-4 py-2">
          <div className="text-green-500 text-lg font-medium">{userName}</div>
          <div className="text-base font-medium text-gray-500">
            User Account
          </div>
        </div>

        <div className="flex flex-col gap-4 text-gray-500 font-medium text-sm">
          <div className="text-xs pl-2">MAIN</div>
          <div className="flex items-center gap-2 pl-4">
            <MdDashboard className="text-green-500 text-xl" />
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="flex items-center gap-2 pl-4">
            <MdAddTask className="text-green-500 text-xl" />
            <Link to="/createExpense">Add Expenses</Link>
          </div>
          <div className="text-xs pl-2">LIST</div>
          <div className="flex items-center gap-2 pl-4">
            <PiTreeViewFill className="text-green-500 text-xl" />
            <Link to="/expenseList">View Expenses</Link>
          </div>

          <div className="text-xs pl-2 pt-32">AUTHENTICATION</div>
          <div
            className="flex items-center gap-2 pl-4 cursor-pointer"
            onClick={handleLogout}
          >
            <RiLogoutCircleRLine className="text-green-500 text-xl" />
            <div>Logout</div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile view */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
