import React from "react";
import InventoryChart from "./InventoryChart";
import LowStock from "./LowStock";
import {AlertTriangle} from "lucide-react";

const Modal = () => {
  // Dummy data for the rows
  const recentsData = [
    {
      date: "2024-10-24",
      product: "Wireless Mouse",
      type: "Electronics",
      sku: "WM-001",
      quantity: 15,
      status: "Shipped",
      time: "10:30 AM",
    },
    {
      date: "2024-10-24",
      product: "Keyboard",
      type: "Electronics",
      sku: "KB-002",
      quantity: 8,
      status: "Received",
      time: "11:15 AM",
    },
    {
      date: "2024-10-23",
      product: "Desk Mat",
      type: "Accessories",
      sku: "DM-003",
      quantity: 20,
      status: "In-Transit",
      time: "02:45 PM",
    },
    {
      date: "2024-10-22",
      product: "USB-C Cable",
      type: "Cable",
      sku: "UC-004",
      quantity: 5,
      status: "Cancel",
      time: "04:10 PM",
    },
  ];

  // Helper function for status colors
  const getStatusColor = (status) => {
    switch (status) {
      case "Shipped": return "bg-blue-100 text-blue-700";
      case "Received": return "bg-green-100 text-green-700";
      case "In-Transit": return "bg-amber-100 text-amber-700";
      case "Cancel": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };
  return (
    <div className="flex justify-between mt-5 text-black">
      <div className="left">
        <div className="box1 border h-96 w-fit bg-white rounded-xl">
          <h1 className="font-bold text-lg ml-2 mt-1">Recents</h1>
          <table className="w-full text-center text-sm border-collapse">
            <thead className="border-b text-gray-500 font-semibold text-xs uppercase">
              <tr>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Products</th>
                <th className="py-2 px-3">Type</th>
                <th className="py-2 px-3">SKU</th>
                <th className="py-2 px-3">Quantity</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Time</th>
              </tr>
            </thead>
            
            <tbody className="text-center">
              {recentsData.map((item,index)=>(
                <tr key={index}>
                  <td className="py-2.5 px-3">{item.date}</td>
                  <td className="py-2.5 px-3">{item.product}</td>
                  <td className="py-2.5 px-3">{item.type}</td>
                  <td className="py-2.5 px-3">{item.sku}</td>
                  <td className="py-2.5 px-3">{item.quantity}</td>
                  <td className="py-2.5 px-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>{item.status}</span>
                  </td>
                  <td className="py-3 px-3">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="right flex flex-col gap-3">
        <div className="box2 border h-50 w-full lg:w-96 bg-white text-black font-bold text-lg rounded-xl">
          <h1 className="font-bold text-lg ml-2 mt-1">
            Inventory Status Chart
          </h1>
          <div className="chart">
            <InventoryChart />
          </div>
        </div>
        <div className="font-bold text-lg">
            <LowStock />
        </div>
      </div>
    </div>
  );
};

export default Modal;
