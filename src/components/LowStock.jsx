import React from "react";
import { AlertTriangle, Plus } from "lucide-react";

const LowStock = () => {
  // Dummy data representing low inventory items
  const lowStockItems = [
    { id: 1, name: "Keyboard", category: "Electronics", currentStock: 4, minThreshold: 10 },
    { id: 2, name: "USB-C Cable", category: "Cable", currentStock: 2, minThreshold: 15 },
    { id: 3, name: "Wireless Mouse", category: "Electronics", currentStock: 5, minThreshold: 12 },
  ];

  return (
    <div className="box3 border min-h-60 w-full lg:w-96 bg-white text-black rounded-xl p-4 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-md text-gray-800">Low Stock Alerts</h2>
          <AlertTriangle className="text-amber-500" size={20} />
        </div>
        <span className="text-xs bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full">
          {lowStockItems.length} Critical
        </span>
      </div>

      {/* Item List */}
      <div className="flex flex-col gap-3">
        {lowStockItems.map((item) => {
          // Calculate stock percentage
          const stockPercentage = Math.min(
            Math.round((item.currentStock / item.minThreshold) * 100),
            100
          );

          return (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100/80 transition-colors"
            >
              {/* Product Info & Progress Bar */}
              <div className="flex-1 mr-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                  <span className="text-xs text-red-600 font-bold">
                    {item.currentStock} / {item.minThreshold} left
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${stockPercentage}%` }}
                  />
                </div>
              </div>

              {/* Quick Restock Action Button */}
              <button 
                onClick={() => alert(`Restocking request sent for ${item.name}`)}
                className="p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md transition-colors"
                title="Restock Item"
              >
                <Plus size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LowStock;