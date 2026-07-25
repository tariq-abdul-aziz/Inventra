import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// 1. Prepare your data array
const data = [
  { day: "Mon", stockIn: 40, stockOut: 24 },
  { day: "Tue", stockIn: 30, stockOut: 13 },
  { day: "Wed", stockIn: 20, stockOut: 58 },
  { day: "Thu", stockIn: 27, stockOut: 39 },
  { day: "Fri", stockIn: 18, stockOut: 48 },
  { day: "Sat", stockIn: 23, stockOut: 38 },
  { day: "Sun", stockIn: 34, stockOut: 43 },
];

const InventoryChart = () => {
  return (
    /* ResponsiveContainer makes the chart automatically adjust to its parent box size */
    <ResponsiveContainer width="100%" height={170}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        {/* Background Grid Lines */}
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        
        {/* X and Y Axes */}
        <XAxis dataKey="day" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        
        {/* Hover Tooltip */}
        <Tooltip />
        
        {/* Chart Lines (Match data keys above) */}
        <Line type="monotone" dataKey="stockIn" stroke="#2563eb" strokeWidth={2} />
        <Line type="monotone" dataKey="stockOut" stroke="#ef4444" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default InventoryChart;