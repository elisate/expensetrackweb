
import { MdDashboard} from "react-icons/md";

import { MdAddTask } from "react-icons/md";
import { PiTreeViewFill } from "react-icons/pi";


import { RiLogoutCircleRLine } from "react-icons/ri";

import { Link } from "react-router-dom";

function Sidebar() {
  
  return (
    <div className="z-0">
      {/* Mobile toggle button */}
     

      {/* Sidebar */}
      <div
        className=' md:translate-x-0 transition-transform duration-300 border-r border-gray-500 w-48 fixed h-screen z-50 bg-white'
      >
       

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
