import { useState } from "react";
import { MdDashboard, MdMenu, MdClose } from "react-icons/md";

import { MdAddTask } from "react-icons/md";
import { PiTreeViewFill } from "react-icons/pi";


import { RiLogoutCircleRLine } from "react-icons/ri";

import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar toggle


  return (
    <div className="z-0">
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-orange-600 p-2 rounded-md text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 border-r border-gray-500 w-48 fixed h-screen z-50 bg-white`}
      >
        {/* Close button for small screens */}
        <button
          className="md:hidden fixed top-4 right-4 z-50 bg-orange-600 p-2 rounded-md text-white"
          onClick={() => setIsOpen(false)}
        >
          <MdClose />
        </button>

        <div className="border-b border-gray-500 flex flex-col gap-1 pl-4 py-2">
          <div className="text-green-500 text-lg font-medium">Elisa</div>
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
          <div className="flex items-center gap-2 pl-4 cursor-pointer">
            <RiLogoutCircleRLine className="text-green-500 text-xl" />
            <div>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
