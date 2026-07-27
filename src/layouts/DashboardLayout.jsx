import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Dashboard from "../page/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="h-dvh w-screen overflow-hidden flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="h-16 w-full flex justify-between items-center sm:ml-5 sm:mt-1 md:ml-0 md:px-2">
          <Header title="Dashboard" subtitle="Good Morning, Tariq" />
          <Navbar />
        </div>
        <main className="flex-1 overflow-y-auto p-6">
          {/* Outlet dynamically renders matching page (Dashboard, Products, etc.) */}
          <Outlet />
          {/* <Dashboard /> */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
