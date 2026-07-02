import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../../styles/Layout.css";

function DashboardLayout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (

    <div className="layout">

      {/* Sidebar */}

      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />

      {/* Main Content */}

      <div className="main-content">

        <Navbar
          toggleSidebar={toggleSidebar}
        />

        <main className="page-content">

          <Outlet />

        </main>

      </div>

    </div>

  );

}

export default DashboardLayout;