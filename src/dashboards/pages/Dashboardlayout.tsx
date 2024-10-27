
import {Outlet} from "react-router-dom";
import NavPart from "./NavPart";
import Sidebar from "./Sidebar";

function DashboardLayout() {

  return (
    <div className="dashboard-layout">
      <NavPart />
      <Sidebar />
      
        <Outlet />
     
    </div>
  );
}

export default DashboardLayout;
