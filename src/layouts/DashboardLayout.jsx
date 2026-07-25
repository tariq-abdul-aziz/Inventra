import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import {
  LayoutGrid,
  FileDown,
  FileUp,
  TrendingDown,
  Database,
} from "lucide-react";
import Modal from "../components/Modal";

const DashboardLayout = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="h-16 w-full flex justify-between items-center sm:ml-5 sm:mt-1 md:ml-0 md:px-2">
          <Header title="Dashboard" subtitle="Good Morning, Tariq" />
          <Navbar />
        </div>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="cards flex gap-5 flex-wrap">
            <Card
              icon={<LayoutGrid color="#2672E9" size={25} />}
              title={"Total Products"}
              value={12485}
            />
            <Card
              icon={<FileDown color="#2672E9" size={25} />}
              title={"Stock In"}
              value={312}
            />
            <Card
              icon={<FileUp color="#2672E9" size={25} />}
              title={"Stock Out"}
              value={10}
            />
            <Card
              icon={<TrendingDown color="#2672E9" size={25} />}
              title={"Low Stock"}
              value={5}
            />
            <Card
              icon={<Database color="#2672E9" size={25} />}
              title={"Inventory Value"}
              value={168268}
            />
          </div>
          <div>
          <Modal />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
